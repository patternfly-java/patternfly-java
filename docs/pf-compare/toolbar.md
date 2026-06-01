---
component: toolbar
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/toolbar/html
pfj_url: http://localhost:1234/components/toolbar
completeness:
  pf_total: 24
  pfj_total: 6
  matched: 15
  missing_in_pfj:
    - no-padding
    - adjusted-group-column-gap
    - width-control
    - filter-group
    - action-group-plain
    - action-group-inline
    - label-group
    - selected-filters-on-mobile-filters-collapsed-selected-filters-summary-visible
    - selected-filters-on-mobile-filters-collapsed-expandable-content-expanded
    - selected-filters-on-desktop-not-responsive
    - stacked-on-desktop
    - stacked-on-mobile-filters-collapsed-expandable-content-expanded
    - dynamic-sticky-toolbar
    - vertical
    - vertical-with-height-visibility-breakpoints
  extra_in_pfj: []
---

# PF Compare: toolbar

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Simple | Toolbar items | matched (semantic) |
| 2 | No padding | --- | missing_in_pfj |
| 3 | Adjusted group column gap | --- | missing_in_pfj |
| 4 | Insets | With adjusted inset | matched (semantic) |
| 5 | Width control | --- | missing_in_pfj |
| 6 | Filter group | --- | missing_in_pfj |
| 7 | Action group | With groups of items | matched (covered -- PFJ groups snippet includes action group) |
| 8 | Action group plain | --- | missing_in_pfj |
| 9 | Action group inline | --- | missing_in_pfj |
| 10 | Label group | --- | missing_in_pfj |
| 11 | Toggle group on mobile (filters collapsed, expandable content expanded) | Toggle groups | matched (semantic) |
| 12 | Toggle group on desktop | Toggle groups | matched (covered -- PFJ toggle groups covers desktop) |
| 13 | Selected filters on mobile (filters collapsed, selected filters summary visible) | --- | missing_in_pfj |
| 14 | Selected filters on mobile (filters collapsed, expandable content expanded) | --- | missing_in_pfj |
| 15 | Selected filters on desktop (not responsive) | --- | missing_in_pfj |
| 16 | Stacked on desktop | --- | missing_in_pfj |
| 17 | Stacked on mobile (filters collapsed, expandable content expanded) | --- | missing_in_pfj |
| 18 | Primary background | Background color variants | matched (covered -- PFJ color variants includes primary) |
| 19 | Secondary background | Background color variants | matched (covered -- PFJ color variants includes secondary) |
| 20 | No background | Background color variants | matched (covered -- PFJ color variants includes no background) |
| 21 | Sticky toolbar | Sticky toolbar | matched (exact) |
| 22 | Dynamic sticky toolbar | --- | missing_in_pfj |
| 23 | Vertical | --- | missing_in_pfj |
| 24 | Vertical with height visibility breakpoints | --- | missing_in_pfj |

## Action Items

1. Add "no padding" variation demo
2. Add "adjusted group column gap" variation demo
3. Add "width control" variation demo
4. Add "filter group" variation demo
5. Add "action group plain" variation demo
6. Add "action group inline" variation demo
7. Add "label group" variation demo
8. Add "selected filters" variations (mobile and desktop)
9. Add "stacked" variations (desktop and mobile)
10. Add "dynamic sticky toolbar" variation demo
11. Add "vertical" toolbar variation with height visibility breakpoints
