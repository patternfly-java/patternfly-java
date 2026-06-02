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

Implements action items from a `/pf-compare` report. Reads the JSON companion file for structured data and cached HTML. Falls back to the markdown report if the JSON is not available. Translates reference HTML to the Java builder API and integrates it into the existing component.

```bash
/pf-align button
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

Writes per-component JSON reports to `docs/pf-lint/<component>.json`. Checks include:
- Section markers and order (`factory`, `instance`, `add`, `builder`, `aria`, `events`, `api`, `internal`)
- Javadoc completeness and format
- Factory method naming
- Modifier interface usage
- Import order and formatting

### /pf-status

Shows a unified status dashboard across lint, compare, align, and update dimensions for all components (or a specific one).

```bash
/pf-status
/pf-status button
```

Reads JSON report files from previous skill runs — does not analyze source code directly. Writes a unified `docs/pf-status/summary.json`.

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
     ▼              ▼               ▼             ▼
  .json + .md    .json + .md      .json        .json + summary.md
                                                      │
                         ┌────────────────────────────┘
                         ▼
                    /pf-status (reads .json from all docs/pf-*/)
                         │
                         ▼
                    summary.json + summary.md
```

### Data Flow

- **`/pf-update`** analyzes PatternFly release changelogs and writes a prioritized work plan to `docs/pf-update/` (`.md` + `.json`). This identifies *which* components need attention.
- **`/pf-compare`** takes a component name, opens both the PatternFly docs and PFJ showcase in a browser, extracts DOM/CSS data, and writes a gap analysis to `docs/pf-compare/` (`.md` + `.json`). This identifies *what* is missing or different.
- **`/pf-align`** reads the `/pf-compare` JSON report for a component and implements the action items — adding missing variations, fixing DOM structure, and correcting CSS classes. The JSON contains cached HTML, so browser extraction can often be skipped. Writes a completion report to `docs/pf-align/<component>.json`.
- **`/pf-lint`** verifies the component follows project conventions (section order, Javadoc, naming, formatting) and writes per-component results to `docs/pf-lint/<component>.json` plus an aggregate `summary.md`.
- **`/pf-status`** is read-only — it aggregates JSON reports from all four `docs/pf-*/` directories into a single dashboard (`summary.json` + `summary.md`). It never modifies source code.

### Dependencies

| Skill | Requires | Produces |
|-------|----------|----------|
| `/pf-dev-env` | Nothing | Running dev servers (J2CL + Vite) |
| `/pf-update` | Nothing (fetches from GitHub) | `docs/pf-update/<version>.md` + `.json` |
| `/pf-compare` | Dev env running (for browser access) | `docs/pf-compare/<component>.md` + `.json` |
| `/pf-align` | `docs/pf-compare/<component>.json` | `docs/pf-align/<component>.json` |
| `/pf-lint` | Nothing (reads source code directly) | `docs/pf-lint/<component>.json` + `summary.md` |
| `/pf-status` | JSON reports from other skills | `docs/pf-status/summary.json` + `summary.md` |

### Independent vs. Sequential

Some skills can run independently:

- **`/pf-lint`** can run anytime — it checks source conventions, not PatternFly alignment.
- **`/pf-update`** can run anytime — it only reads the PatternFly GitHub changelog.
- **`/pf-dev-env`** should be started before any skill that uses browser interaction (`/pf-compare`).

The **`/pf-compare` → `/pf-align`** sequence is strictly ordered: alignment requires a comparison report as input.
