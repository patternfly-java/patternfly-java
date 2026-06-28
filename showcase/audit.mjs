/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const WORKSPACE = "pnpm-workspace.yaml";
const REPO = "patternfly-java/patternfly-java";
const DISMISS_REASON = "not_used";
const DISMISS_COMMENT =
  "Transitive dependency of @patternfly/documentation-framework. " +
  "Only CSS files are imported — none of its JS code paths are executed.";

// ── pnpm audit ──────────────────────────────────────────────────────

function currentIgnored() {
  const content = readFileSync(WORKSPACE, "utf8");
  const matches = content.match(/GHSA-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+/g);
  return new Set(matches || []);
}

function auditGhsas() {
  let output;
  try {
    output = execSync("pnpm audit 2>&1", { encoding: "utf8" });
  } catch {
    output = "";
  }
  const matches = output.match(/GHSA-[a-z0-9]+-[a-z0-9]+-[a-z0-9]+/g);
  return [...new Set(matches || [])].sort();
}

function addIgnoreEntries(missing) {
  const content = readFileSync(WORKSPACE, "utf8");
  const marker = "ignoreGhsas:\n";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.error("Could not find 'ignoreGhsas:' section in", WORKSPACE);
    process.exit(1);
  }
  const insertionPoint = content.indexOf("\n\n", idx);
  const newEntries = missing.map((id) => `    - ${id}`).join("\n");
  const updated =
    content.slice(0, insertionPoint) +
    "\n" +
    newEntries +
    content.slice(insertionPoint);
  writeFileSync(WORKSPACE, updated);
}

// ── Dependabot ──────────────────────────────────────────────────────

function openDependabotAlerts() {
  try {
    const json = execSync(
      `gh api repos/${REPO}/dependabot/alerts --jq '[.[] | select(.state == "open") | {number, ghsa: .security_advisory.ghsa_id, package: .security_vulnerability.package.name}]'`,
      { encoding: "utf8" }
    );
    return JSON.parse(json);
  } catch {
    console.warn("Could not fetch Dependabot alerts (gh CLI not available or no access).");
    return [];
  }
}

function dismissAlert(number) {
  execSync(
    `gh api --method PATCH repos/${REPO}/dependabot/alerts/${number} ` +
      `-f state=dismissed ` +
      `-f dismissed_reason=${DISMISS_REASON} ` +
      `-f dismissed_comment="${DISMISS_COMMENT}"`,
    { encoding: "utf8", stdio: "pipe" }
  );
}

// ── main ────────────────────────────────────────────────────────────

// 1. Handle pnpm audit
const ignored = currentIgnored();
const reported = auditGhsas();
const missing = reported.filter((id) => !ignored.has(id));

if (missing.length > 0) {
  console.log(`Adding ${missing.length} new GHSA entr${missing.length === 1 ? "y" : "ies"} to ${WORKSPACE}:`);
  missing.forEach((id) => console.log(`  - ${id}`));
  addIgnoreEntries(missing);
} else {
  console.log("pnpm audit: no new advisories to ignore.");
}

// 2. Dismiss open Dependabot alerts
const alerts = openDependabotAlerts();
if (alerts.length > 0) {
  console.log(`\nDismissing ${alerts.length} open Dependabot alert${alerts.length === 1 ? "" : "s"}:`);
  for (const alert of alerts) {
    process.stdout.write(`  #${alert.number} ${alert.ghsa} (${alert.package})...`);
    try {
      dismissAlert(alert.number);
      console.log(" dismissed");
    } catch (e) {
      console.log(" FAILED:", e.message);
    }
  }
} else {
  console.log("Dependabot: no open alerts.");
}
