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

| Source | Path | Format |
|--------|------|--------|
| Component list | `components/src/main/java/org/patternfly/component/` | Directory listing |
| Lint summary | `docs/pf-lint/summary.md` | Markdown table with YAML frontmatter |
| Compare reports | `docs/pf-compare/<COMPONENT>.md` | YAML frontmatter per component |
| Align reports | `docs/pf-align/<COMPONENT>.md` | YAML frontmatter per component (may not exist yet) |
| Update reports | `docs/pf-update/<VERSION>.md` | YAML frontmatter with version, date, affected components |

## Workflow

### Step 1: Enumerate components

List all subdirectories under `components/src/main/java/org/patternfly/component/` to get the canonical component list. Sort alphabetically.

**Exclude `template`** — it is a blueprint component, not a real UI component. Do not include it in the status table or stats.

If a `[component]` argument was given, verify the directory exists. If not, report an error and stop.

### Step 2: Read lint status

Read `docs/pf-lint/summary.md`. If the file does not exist, treat all components as "not linted".

Parse the markdown table. For each component, extract:
- `date` — the Date column
- `files` — the Files column
- `errors` — the Errors column
- `warnings` — the Warnings column
- `status` — the Status column (`clean` or other)

### Step 3: Read compare status

For each component, check if `docs/pf-compare/<COMPONENT>.md` exists.

If the file exists, parse the YAML frontmatter to extract:
- `date`
- `pf_version`
- `completeness.pf_total`
- `completeness.pfj_total`
- `completeness.matched`
- `completeness.missing_in_pfj` (array)
- `completeness.extra_in_pfj` (array)

If frontmatter is missing or unparseable, treat the dimension as "unknown" and note the error in the output. If the file does not exist, the compare status is "not compared".

### Step 4: Read align status

For each component, check if `docs/pf-align/<COMPONENT>.md` exists.

If the file exists, parse its YAML frontmatter to determine alignment progress. The expected frontmatter includes a `status` field (e.g., `status: done` or `status: in_progress`). Treat any existing file as "in progress" unless its frontmatter explicitly contains `status: done`. If frontmatter is missing or unparseable, treat the dimension as "unknown" and note the error in the output. If no file exists, the align status is "not started".

### Step 5: Read update status

Find the most recent update report by listing `docs/pf-update/` and selecting the file with the highest version number (semver sort). If the directory does not exist or is empty, treat all components as "not checked".

If a report exists, parse its YAML frontmatter to extract:
- `version` — the PF version analyzed
- `date` — when the report was generated
- `components_affected` — array of component names with changes
- `new_components` — array of new component names

For each component in `components_affected`, check if a compare report at `docs/pf-compare/<COMPONENT>.md` exists AND has a `date` that is equal to or later than the update report's `date`. If so, the component is "current" (compare was re-run after the update). Otherwise it is "outdated".

Components NOT in `components_affected` are "current" (no changes detected for them).

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

Write the overview table (from Step 6, overview mode) to `docs/pf-status/summary.md`.

Create the directory `docs/pf-status/` if it does not exist.

Use this YAML frontmatter:

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

Only write the persistent report in overview mode (no component argument). In detail mode, skip report generation to avoid the cost of reading all components for a single-component query.
