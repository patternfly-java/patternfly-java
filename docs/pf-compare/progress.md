---
component: progress
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/progress/html
pfj_url: http://localhost:1234/components/progress
completeness:
  pf_total: 19
  pfj_total: 18
  matched: 17
  missing_in_pfj:
    - outside-static-width-measure
    - inside-warning
  extra_in_pfj:
    - title-outside-of-progress-bar
---

# PF Compare: progress

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Simple | Basic | matched (semantic -- PFJ "Basic" is equivalent to PF "Simple") |
| 2 | Small | Small | matched (exact) |
| 3 | Large | Large | matched (exact) |
| 4 | Outside | Outside | matched (exact) |
| 5 | Inside | Inside | matched (exact) |
| 6 | Outside static width measure | --- | missing_in_pfj |
| 7 | On single line | Single line | matched (semantic) |
| 8 | Without measure | Without measure | matched (exact) |
| 9 | Finite step | Finite step | matched (exact) |
| 10 | Truncate description | Truncate | matched (semantic) |
| 11 | Helper text | Helper text | matched (exact) |
| 12 | Progress step instruction | Progress with step instructions | matched (semantic) |
| 13 | Success | Success | matched (exact) |
| 14 | Warning | Warning | matched (exact) |
| 15 | Failure | Failure | matched (exact) |
| 16 | Inside success | Inside success | matched (exact) |
| 17 | Inside warning | --- | missing_in_pfj |
| 18 | Outside failure | Outside failure | matched (exact) |
| 19 | Failure without measure | Failure without measure | matched (exact) |
| -- | --- | Title outside of progress bar | extra_in_pfj |

## DOM Comparison

### Simple / Basic

**Status:** match

Both render the standard progress structure: `div.pf-v6-c-progress` containing `div.pf-v6-c-progress__status` (with `aria-hidden="true"` and `span.pf-v6-c-progress__measure`), and `div.pf-v6-c-progress__bar[role=progressbar]` with `div.pf-v6-c-progress__indicator`. PFJ defaults to `pf-m-singleline` when no title is set and removes it when `title()` is called, matching PF behavior.

### Small / Large

**Status:** match

Both correctly apply `pf-m-sm` and `pf-m-lg` size modifiers on the root element.

### Outside

**Status:** match

Both apply `pf-m-outside` and `pf-m-lg` modifiers. Measure element is placed inside `__status`.

### Inside

**Status:** match

Both apply `pf-m-inside` and `pf-m-lg` modifiers. Measure element is moved inside `__indicator`.

### Success / Warning / Failure

**Status:** match

PF uses `pf-m-success`, `pf-m-warning`, `pf-m-danger` modifiers with status icons in `span.pf-v6-c-progress__status-icon`. PFJ applies the same modifiers and renders icons from `IconSets.rhUi` (checkCircleFill, warningFill, errorFill). Icons use the same viewBox `0 0 32 32`.

### Truncate description

**Status:** match

Both apply `pf-m-truncate` modifier on `div.pf-v6-c-progress__description`. PFJ additionally adds a tooltip component when `truncate()` is called, which is an enhancement.

## Action Items

### Missing Variations

1. **Outside static width measure** (`pf-m-static-width` on `span.pf-v6-c-progress__measure`) -- The PF variation shows a static-width measure element that prevents layout shift when the percentage changes (e.g., from "1%" to "100%"). Add a `staticWidthMeasure()` or `staticWidth()` builder method that adds the `pf-m-static-width` modifier class to the measure element. Low effort.

2. **Inside warning** -- This is a combination of `pf-m-inside`, `pf-m-lg`, and `pf-m-warning` modifiers. The PFJ code already supports `measureLocation(inside)` and `status(warning)` individually. Add a showcase snippet combining these two to demonstrate the variation. Very low effort (showcase-only).
