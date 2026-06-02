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

Produces a report listing:
- Variations present in PatternFly but missing in PFJ
- DOM structure differences
- CSS class mismatches
- Action items for alignment

### /pf-align

Implements action items from a `/pf-compare` report. Extracts reference HTML from PatternFly documentation, translates it to the Java builder API, and integrates it into the existing component.

```bash
/pf-align button
```

Use this after running `/pf-compare` to bring a component up to date with PatternFly.

### /pf-lint

Verifies that a PFJ component follows the project's conventions for documentation, code structure, naming, and formatting.

```bash
/pf-lint button
/pf-lint card
```

Checks include:
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

Reads existing report files from previous skill runs — does not analyze source code directly.

### /pf-update

Tracks PatternFly release changes and generates a prioritized work plan for updating PatternFly Java.

```bash
/pf-update
/pf-update 6.5.0
```

Fetches the PatternFly changelog from GitHub, classifies changes by relevance to PFJ, and produces a prioritized list of tasks. Can optionally create GitHub issues for the work.

## Workflow

A typical component maintenance workflow:

1. **`/pf-update`** — Check if a new PatternFly release has changes relevant to PFJ
2. **`/pf-compare <component>`** — Compare a specific component to find gaps
3. **`/pf-align <component>`** — Implement the missing variations and fixes
4. **`/pf-lint <component>`** — Verify the result follows project conventions
5. **`/pf-status`** — Review overall progress across all components
