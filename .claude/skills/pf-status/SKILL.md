---
name: pf-status
description: >-
  Show the overall status of PatternFly Java components across lint, compare,
  align, and update dimensions. This skill should be used when the user asks to
  "/pf-status", "component status", "show status", "PFJ status",
  "what's been linted", "what's been compared", "what needs alignment",
  "what's outdated", "component overview", "show progress",
  "show component progress", "which components are done",
  "what's left to do", or "dashboard".
metadata:
  version: "0.1.0"
---

# /pf-status — PatternFly Java Component Status Dashboard

Aggregates status from `/pf-lint`, `/pf-compare`, `/pf-align`, and `/pf-update` report files to show a unified overview of all components. Does not read component source code — only existing report files.

## Arguments

```
/pf-status [component]
```

**Parameters:**
- `[component]` (optional) — Component name (e.g., `card`, `navigation`). If omitted, shows all components.

**Examples:**
```
/pf-status
/pf-status accordion
/pf-status navigation
```

## Data Sources

All skill reports use JSON as the primary structured format. Markdown reports exist alongside for human reading but are not consumed by pf-status.

| Source | Path | Format |
|--------|------|--------|
| Component list | `components/src/main/java/org/patternfly/component/` | Directory listing |
| Lint reports | `docs/pf-lint/<COMPONENT>.json` | Per-component JSON (see pf-lint `references/report-schema.json`) |
| Compare reports | `docs/pf-compare/<COMPONENT>.json` | Per-component JSON (see pf-compare `references/report-schema.json`) |
| Align reports | `docs/pf-align/<COMPONENT>.json` | Per-component JSON (see pf-align `references/report-schema.json`) |
| Update reports | `docs/pf-update/<VERSION>.json` | Per-version JSON (see pf-update `references/report-schema.json`) |

## Workflow

### Step 1: Enumerate components

List all subdirectories under `components/src/main/java/org/patternfly/component/` to get the canonical component list. Sort alphabetically.

**Exclude `template`** — it is a blueprint component, not a real UI component. Do not include it in the status table or stats.

If a `[component]` argument was given, verify the directory exists. If not, report an error and stop.

### Step 2: Read lint status

For each component, check if `docs/pf-lint/<COMPONENT>.json` exists.

If the file exists, read the JSON and extract:
- `date`
- `files`
- `errors`
- `warnings`
- `status` (`clean` or `issues`)

If no JSON file exists for a component, treat it as "not linted".

### Step 3: Read compare status

For each component, check if `docs/pf-compare/<COMPONENT>.json` exists.

If the file exists, read the JSON and extract:
- `date`
- `pfVersion`
- `completeness.pfTotal`
- `completeness.pfjTotal`
- `completeness.matched`
- `completeness.missingInPfj` (array)
- `completeness.extraInPfj` (array)

If the file does not exist, the compare status is "not compared".

### Step 4: Read align status

For each component, check if `docs/pf-align/<COMPONENT>.json` exists.

If the file exists, read the JSON and extract:
- `date`
- `status` (`done`, `in_progress`, or `partial`)
- `summary.implemented`
- `summary.total`

If no file exists, the align status is "not started".

### Step 5: Read update status

Find the most recent update report by listing `docs/pf-update/*.json` and selecting the file with the highest version number (semver sort). If the directory does not exist or has no `.json` files, treat all components as "not checked".

If a JSON report exists, read it and extract:
- `version` — the PF version analyzed
- `date` — when the report was generated
- `componentsAffected` — array of component names with changes
- `newComponents` — array of new component names

For each component in `componentsAffected`, check if a compare report at `docs/pf-compare/<COMPONENT>.json` exists AND has a `date` that is equal to or later than the update report's `date`. If so, the component is "current" (compare was re-run after the update). Otherwise it is "outdated".

Components NOT in `componentsAffected` are "current" (no changes detected for them).

### Step 6: Determine status values

For each component, derive these status labels:

| Dimension | Status values |
|-----------|---------------|
| **Lint** | `clean` — linted with no remaining issues |
| | `issues` — linted but has unresolved errors/warnings |
| | `—` — not yet linted |
| **Compare** | `100% (N/N)` — all PF variations matched |
| | `<X>% (M/N)` — partial match (matched/pf_total) |
| | `—` — not yet compared |
| **Align** | `done` — all action items from compare report implemented |
| | `in progress` — some action items implemented |
| | `—` — not started (no align report or no compare report) |
| **Update** | `current` — no relevant changes since last compare, or compare re-run after update |
| | `outdated (<version>)` — changes detected in PF `<version>`, compare not yet re-run |
| | `—` — no update report exists |

### Step 7: Output

#### Overview mode (no component argument)

Print a summary table to the conversation:

```markdown
# PF Status

| Component | Lint | Compare | Align | Update |
|-----------|------|---------|-------|--------|
| accordion | clean (Jun 1) | 100% (6/6) | — | current |
| navigation | clean (Jun 1) | 59% (10/17) | — | outdated (6.5.0) |
| button | clean (May 30) | — | — | — |
| ... | | | | |

## Stats

- **Linted:** 49/49 (100%)
- **Compared:** 2/49 (4%)
- **Aligned:** 0/49 (0%)
- **Update checked:** <count>/<total> (<percentage>%)
- **Outdated:** <count> components need `/pf-compare` re-run

## Next Steps

Components ready for `/pf-compare`: button, card, ... (up to 10)
Components ready for `/pf-align`: navigation (7 missing variations)
```

Sort the table by actionability:
1. Outdated components (need `/pf-compare` re-run after a PF release)
2. Components with partial compare coverage (gaps to close)
3. Components not yet compared (next candidates for `/pf-compare`)
4. Components fully compared and aligned (done)

#### Detail mode (component argument given)

Print a detailed status card:

```markdown
# PF Status: accordion

## Lint
- **Status:** clean
- **Date:** 2026-06-01
- **Files:** 6 | Errors: 0 | Warnings: 0

## Compare
- **Status:** 100% (6/6 matched)
- **Date:** 2026-05-29
- **PF Version:** Release 6.5.1
- **Missing in PFJ:** none
- **Extra in PFJ:** none

## Align
- **Status:** not started

## Update
- **Status:** outdated (6.5.0)
- **Last checked:** 2026-06-01
- **Changes:** 2 PRs (1 feat, 1 fix)

## Suggested Next Action
Run `/pf-align accordion` to address DOM/CSS differences found in the compare report.
```

The "Suggested Next Action" should recommend the logical next step:
- If not linted → "Run `/pf-lint accordion`"
- If linted but not compared → "Run `/pf-compare accordion`"
- If compared with gaps → "Run `/pf-align accordion` to implement N missing variations"
- If compared at 100% → "Run `/pf-align accordion` to address DOM/CSS differences" (if any exist in the compare report)
- If outdated → "Run `/pf-compare <component>` to check PF `<version>` changes"
- If fully aligned → "Up to date"

### Step 8: Write persistent report

Only write the persistent report in overview mode (no component argument). In detail mode, skip report generation to avoid the cost of reading all components for a single-component query.

Create the directory `docs/pf-status/` if it does not exist.

1. **Write `docs/pf-status/summary.json`** using the schema from `references/report-schema.json`. Include the date, stats, and full per-component status array.

2. **Write `docs/pf-status/summary.md`** with the markdown table and stats section for human reading. Use this YAML frontmatter:

```yaml
---
title: PatternFly Java Component Status
last_updated: <YYYY-MM-DD>
stats:
  total: <count>
  linted: <count>
  compared: <count>
  aligned: <count>
  update_checked: <count>
  outdated: <count>
---
```

Follow with the full markdown table and stats section.
