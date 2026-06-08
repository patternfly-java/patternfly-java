---
id: skills
title: Skills
order: 4
---

# Skills

PatternFly Java includes [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skills that automate component quality, alignment, and maintenance tasks. These skills are defined in `.claude/skills/` and can be invoked from a Claude Code session.

## Available Skills

### /pf-compare

Compares a PatternFly (React/HTML) component against its PatternFly Java (PFJ) implementation. Identifies variation coverage gaps and DOM/CSS structural differences.

```bash
/pf-compare button
/pf-compare card
```

Produces a markdown report and a JSON companion file:
- Variations present in PatternFly but missing in PFJ
- DOM structure differences
- CSS class mismatches
- Action items for alignment
- Raw HTML from both PF and PFJ (in JSON, used by `/pf-align`)

### /pf-align

Implements action items from a `/pf-compare` report. Simple fixes (CSS modifiers, ARIA attributes) are auto-generated and applied. Complex items (new variations, structural changes, icons) are presented with context for the user to implement manually. Does not produce its own reports — progress is tracked through git history.

```bash
/pf-align button
/pf-align card --item 3
```

Use this after running `/pf-compare` to bring a component up to date with PatternFly.

### /pf-dev-env

Manages the local development environment for the PatternFly Java showcase. The dev environment consists of two processes: J2CL watch (`mvn j2cl:watch -P showcase`) and Vite dev server (`cd showcase && pnpm run watch`).

```bash
/pf-dev-env           # Start the dev environment (default)
/pf-dev-env start     # Same as above
/pf-dev-env stop      # Stop both processes
/pf-dev-env status    # Check if processes are running
/pf-dev-env --port 3000  # Use a custom port (default: 1234)
```

Features:
- Runs a pre-flight build (`mvn verify -Dquickly -P showcase`) before starting
- Detects externally-started processes (if you already started `mvn j2cl:watch` or `pnpm run watch` in another terminal)
- Starts only the missing process if one is already running
- Opens the browser automatically when ready
- Idempotent — running `start` when already running reports current state

### /pf-lint

Verifies that a PFJ component follows the project's conventions for documentation, code structure, naming, and formatting.

```bash
/pf-lint button
/pf-lint card
```

Writes per-component JSON reports to `reports/pf-lint/<component>.json` and an aggregate `reports/pf-lint/summary.md`. Checks include:
- Section markers and order (`factory`, `instance`, `add`, `builder`, `aria`, `events`, `api`, `internal`)
- Javadoc completeness and format
- Factory method naming
- Modifier interface usage
- Constructor visibility and placement

### /pf-status

Shows a unified status dashboard across lint, compare, and update dimensions for all components (or a specific one).

```bash
/pf-status
/pf-status button
```

Reads JSON report files from previous skill runs — does not analyze source code directly. Writes `reports/pf-status/summary.json` and `reports/pf-status/summary.md`.

### /pf-update

Tracks PatternFly release changes and generates a prioritized work plan for updating PatternFly Java.

```bash
/pf-update
/pf-update 6.5.0
```

Fetches the PatternFly changelog from GitHub, classifies changes by relevance to PFJ, and produces a prioritized list of tasks (`.md` + `.json`). Can optionally create GitHub issues for the work.

## Workflow

A typical component maintenance workflow:

1. **`/pf-dev-env`** — Start the local development environment
2. **`/pf-update`** — Check if a new PatternFly release has changes relevant to PFJ
3. **`/pf-compare <component>`** — Compare a specific component to find gaps
4. **`/pf-align <component>`** — Implement the missing variations and fixes
5. **`/pf-lint <component>`** — Verify the result follows project conventions
6. **`/pf-status`** — Review overall progress across all components

## How Skills Interact

The skills form a pipeline where each skill's output feeds into the next:

```
/pf-update ──→ /pf-compare ──→ /pf-align ──→ /pf-lint
     │              │               │             │
     │              │               │             │
     ▼              ▼               │             ▼
  .json + .md    .json + .md    (no report)    .json + summary.md
                                                      │
                         ┌────────────────────────────┘
                         ▼
                    /pf-status (reads .json from reports/pf-*/)
                         │
                         ▼
                    summary.json + summary.md
```

### Data Flow

- **`/pf-update`** analyzes PatternFly release changelogs and writes a prioritized work plan to `reports/pf-update/` (`.md` + `.json`). This identifies *which* components need attention.
- **`/pf-compare`** takes a component name, opens both the PatternFly docs and PFJ showcase in a browser, extracts DOM/CSS data, and writes a gap analysis to `reports/pf-compare/` (`.md` + `.json`). This identifies *what* is missing or different.
- **`/pf-align`** reads the `/pf-compare` JSON report for a component and implements the action items — auto-generating simple fixes (CSS modifiers, ARIA attributes) and presenting context for complex items. Does not produce its own reports; progress is tracked through git history.
- **`/pf-lint`** verifies the component follows project conventions (section order, Javadoc, naming, formatting) and writes per-component results to `reports/pf-lint/<component>.json` plus an aggregate `summary.md`.
- **`/pf-status`** is read-only — it aggregates JSON reports from `reports/pf-lint/`, `reports/pf-compare/`, and `reports/pf-update/` into a single dashboard (`summary.json` + `summary.md`). It never modifies source code.

### Dependencies

| Skill | Requires | Produces |
|-------|----------|----------|
| `/pf-dev-env` | Nothing | Running dev servers (J2CL + Vite) |
| `/pf-update` | Nothing (fetches from GitHub) | `reports/pf-update/<version>.md` + `.json` |
| `/pf-compare` | Dev env running (for browser access) | `reports/pf-compare/<component>.md` + `.json` |
| `/pf-align` | `reports/pf-compare/<component>.json` | Modified source files (no report) |
| `/pf-lint` | Nothing (reads source code directly) | `reports/pf-lint/<component>.json` + `reports/pf-lint/summary.md` |
| `/pf-status` | JSON reports from other skills | `reports/pf-status/summary.json` + `summary.md` |

### Independent vs. Sequential

Some skills can run independently:

- **`/pf-lint`** can run anytime — it checks source conventions, not PatternFly alignment.
- **`/pf-update`** can run anytime — it only reads the PatternFly GitHub changelog.
- **`/pf-dev-env`** should be started before any skill that uses browser interaction (`/pf-compare`).

The **`/pf-compare` → `/pf-align`** sequence is strictly ordered: alignment requires a comparison report as input.
