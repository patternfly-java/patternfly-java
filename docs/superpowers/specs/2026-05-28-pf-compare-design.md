# `/pf-compare` — PatternFly Component Comparison Skill

**Date:** 2026-05-28
**Author:** Harald Pehl
**Status:** Draft

## Purpose

Compare a PatternFly (React/HTML) component against its PatternFly Java implementation to identify gaps in variation coverage and structural differences in the rendered DOM/CSS. Produces a structured report that can serve as input for a future `/pf-align` skill to drive implementation catch-up.

## Invocation

```
/pf-compare <component>
```

- `component` (required) — URL slug matching both showcases (e.g., `button`, `card`, `data-list`)
- Optional `--port <port>` to override the default PFJ local port (default: `1234`)

## Pre-flight Checks

1. Verify Chrome DevTools MCP is available
2. Resolve PFJ showcase URL:
   - Try `http://localhost:<port>/components/<component>` first
   - Fall back to `https://patternfly-java.github.io/components/<component>`
   - Fail with message if neither is reachable
3. Verify PF site is reachable at `https://www.patternfly.org/components/<component>/html`

## Data Collection

### PatternFly (Reference)

**URL:** `https://www.patternfly.org/components/<component>/html`

The HTML tab is directly navigatable via the `/html` URL suffix — no tab clicking required.

**Selectors:**

| Element | Selector | Example |
|---------|----------|---------|
| Variation heading | `h3` with ID | `<h3 id="variations">Variations</h3>` |
| Demo container | `div[id^="ws-core-c-<component>-"]` | `div#ws-core-c-button-variations` |
| Rendered HTML | `.ws-preview-html` inside demo container | Contains the actual HTML markup |

**Extraction:**
1. Collect all `h3` elements that have a corresponding demo container `div[id^="ws-core-c-<component>-"]` — only these are demo variations (other `h3` elements belong to Accessibility/Guidelines sections and should be ignored)
2. For each variation, find the corresponding `div[id^="ws-core-c-<component>-<variation-slug>"]`
3. Extract the inner HTML of its `.ws-preview-html` child

### PatternFly Java

**URL:** `http://localhost:1234/components/<component>` or `https://patternfly-java.github.io/components/<component>`

**Selectors:**

| Element | Selector | Example |
|---------|----------|---------|
| Snippet heading | `h3.ws-heading` with ID | `<h3 id="button-variant-examples" class="ws-heading">Variant examples</h3>` |
| Snippet container | Parent `div.pf-v6-l-stack.pf-m-gutter` | Contains heading, preview, and code editor |
| Live preview | Second child `div.pf-v6-l-stack__item` of the stack container | Contains the rendered component |

**Extraction:**
1. Collect all `h3.ws-heading` elements — these are snippet headings
2. For each heading, navigate to parent stack: `h3 → parent (flex) → parent (stack-item) → parent (stack)`
3. Extract the inner HTML of the second stack item's first child (the preview div)

## Variation Matching

AI-assisted semantic matching between PF variation titles and PFJ snippet titles. No manual mapping file needed.

**Matching rules:**
- Exact title match (case-insensitive) → automatic match
- Semantic similarity (e.g., "Variations" ↔ "Variant examples") → AI-matched
- No match found → marked as "Missing in PFJ" or "Extra in PFJ"

**Output:** A matching table with three categories:
- **Matched** — variation exists in both, eligible for DOM comparison
- **Missing in PFJ** — exists in PF but not in PFJ (gap)
- **Extra in PFJ** — exists in PFJ but not in PF (custom addition)

## DOM/CSS Comparison

For each matched variation pair, compare the extracted DOM subtrees:

### Comparison Dimensions

1. **Structure** — element tag hierarchy and nesting depth
2. **CSS classes** — PatternFly classes (`pf-v6-c-*`, `pf-m-*`) present in each
3. **Missing classes** — PF classes absent from PFJ
4. **Extra classes** — PFJ classes not in PF
5. **Attributes** — ARIA attributes, `type`, `role`, `tabindex`, etc.

### Filtering

- Only compare PatternFly-specific classes (prefix `pf-v6-`)
- Ignore framework-specific wrappers (React portals, J2CL artifacts)
- Ignore dynamic IDs and generated attributes
- Ignore SVG internals (icon content may differ between icon sets)

## Output

### Inline Summary (Conversation)

```markdown
## PF Compare: <Component>

### Completeness: X/Y variations (Z%)

Missing in PFJ:
  - <variation 1>
  - <variation 2>

Extra in PFJ:
  - <snippet 1>

### DOM Comparison (matched variations):
  <variation>: <N> class differences, <M> structural issues
  <variation>: OK
  ...

Full report: docs/pf-compare/<component>.md
```

### Detailed Report File (`docs/pf-compare/<component>.md`)

The report uses structured YAML frontmatter and consistent section markers to enable machine parsing by a future `/pf-align` skill.

```markdown
---
component: <component>
date: <YYYY-MM-DD>
pf_version: <version from PF site>
pf_url: <PF URL used>
pfj_url: <PFJ URL used>
completeness:
  pf_total: <N>
  pfj_total: <M>
  matched: <K>
  missing_in_pfj: <list>
  extra_in_pfj: <list>
---

# PF Compare: <Component>

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Variant examples | matched |
| 2 | Disabled | Disabled buttons | matched |
| 3 | Clicked buttons | — | missing_in_pfj |

## DOM Comparison

### <Variation Name>

**Status:** <ok | differences_found>

#### Missing CSS Classes
- `.pf-m-<modifier>` on `<element>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-<modifier>` on `<element>` — present in PFJ, absent in PF

#### Structural Differences
- PF has `<span class="pf-v6-c-button__icon">` wrapping icon — PFJ does not

#### Attribute Differences
- `aria-label` missing on `<element>` in PFJ

### <Next Variation>
...

## Action Items

Prioritized list of gaps and differences for implementation catch-up:

1. **Add variation:** <missing variation> — <brief description>
2. **Fix CSS:** <variation> — add missing `.pf-m-<modifier>` class
3. **Fix structure:** <variation> — wrap icon in `<span class="pf-v6-c-button__icon">`
```

## Browser Automation

Uses Chrome DevTools MCP exclusively. Requires Chrome to be running with DevTools protocol enabled.

**Tool usage:**
- `navigate_page` — navigate to PF and PFJ URLs
- `evaluate_script` — extract DOM structure, headings, class lists
- `new_page` / `select_page` — manage separate tabs for PF and PFJ
- `take_snapshot` — fallback for debugging if script evaluation fails

**Tab management:**
1. Open PF HTML tab in one Chrome page
2. Open PFJ showcase in another Chrome page
3. Extract data from each
4. Close pages when done

## Skill File Location

`~/.claude/skills/pf-compare/skill.md`

## Future: `/pf-align` Integration

The structured YAML frontmatter and consistent section markers in the report are designed so that a future `/pf-align` skill can:
1. Parse the report to identify `missing_in_pfj` variations
2. Read the PF HTML for each missing variation
3. Generate corresponding PFJ Java code using the project's builder API patterns
4. Address DOM/CSS differences in matched variations

The `action_items` section provides a prioritized task list that `/pf-align` can consume directly.
