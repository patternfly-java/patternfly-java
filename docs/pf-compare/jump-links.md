---
component: jump-links
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/jump-links/html
pfj_url: http://localhost:1234/components/jump-links
completeness:
  pf_total: 11
  pfj_total: 6
  matched: 8
  missing_in_pfj:
    - expandable-responsive
    - expandable-responsive-with-no-label
    - vertical-with-inactive-subsections
  extra_in_pfj: []
---

# PF Compare: jump-links

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Horizontal default | Basic | matched (semantic — PFJ "Basic" is the horizontal default) |
| 2 | Horizontal with centered list | With centered list | matched (exact) |
| 3 | Horizontal with label | With label | matched (semantic — PFJ shows horizontal with label) |
| 4 | Vertical default | Vertical | matched (exact) |
| 5 | Vertical with label | Vertical with label | matched (exact) |
| 6 | Vertical with inactive subsections | --- | missing_in_pfj |
| 7 | Vertical with active subsections | Expandable vertical with subsection | matched (semantic — PFJ demo shows active subsections in expandable vertical) |
| 8 | Expandable | Expandable vertical with subsection | matched (semantic — PFJ combines expandable and expanded states) |
| 9 | Expanded | Expandable vertical with subsection | matched (semantic — PFJ demo shows expanded state) |
| 10 | Expandable (responsive) | --- | missing_in_pfj |
| 11 | Expandable (responsive) with no label | --- | missing_in_pfj |

## DOM Comparison

### Horizontal default / Basic

**Status:** ok — Both render a `<nav>` with `pf-v6-c-jump-links` class containing a `<ul>` list of jump link items with `pf-m-current` on the active item.

### Horizontal with centered list / With centered list

**Status:** ok — Both apply `pf-m-center` modifier to the jump links container.

### Horizontal with label / With label

**Status:** ok — Both include a label element inside `pf-v6-c-jump-links__label`.

### Vertical default / Vertical

**Status:** ok — Both apply `pf-m-vertical` modifier to the jump links container.

### Vertical with label / Vertical with label

**Status:** ok — Both combine `pf-m-vertical` modifier with a label element.

### Vertical with inactive subsections

**Status:** missing_in_pfj — PF shows nested subsections where none are active (no `pf-m-current` on child items). PFJ does not have a dedicated demo for this state.

### Vertical with active subsections / Expandable vertical with subsection

**Status:** ok — PFJ demo shows nested subsections with active state applied to a child item.

### Expandable / Expandable vertical with subsection

**Status:** ok — Both use `pf-m-expandable` modifier. PFJ demo covers this in the expandable vertical demo.

### Expanded / Expandable vertical with subsection

**Status:** ok — Both use `pf-m-expanded` modifier on the expandable container. PFJ demo shows this state.

### Expandable (responsive)

**Status:** missing_in_pfj — PF shows a responsive expandable layout that collapses to horizontal on smaller screens using `pf-m-expandable` combined with responsive breakpoint modifiers (e.g., `pf-m-expandable-on-md`, `pf-m-non-expandable-on-lg`).

### Expandable (responsive) with no label

**Status:** missing_in_pfj — Same as responsive expandable but without the toggle label text.

## Action Items

1. **Add variation:** Expandable (responsive) — implement responsive expandable jump links with breakpoint modifiers (`pf-m-expandable-on-md`, `pf-m-non-expandable-on-lg`)
2. **Add variation:** Expandable (responsive) with no label — implement responsive expandable jump links without toggle label text
3. **Add variation:** Vertical with inactive subsections — add demo showing nested subsections where no child item is active
