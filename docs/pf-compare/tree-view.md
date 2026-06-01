---
component: tree-view
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/tree-view/html
pfj_url: http://localhost:1234/components/tree-view
completeness:
  pf_total: 12
  pfj_total: 6
  matched: 9
  missing_in_pfj:
    - multiselectable
    - with-badges
    - with-action-item
    - with-non-expandable-top-level-nodes
    - with-selectable-expandable-nodes
    - compact
    - compact-no-background
  extra_in_pfj:
    - async-items
---

# PF Compare: tree-view

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Single selectable | Default | matched (semantic -- PFJ default is single selectable) |
| 2 | Multiselectable | --- | missing_in_pfj |
| 3 | With search | Default | matched (covered -- PFJ default includes search) |
| 4 | With checkboxes | With checkboxes | matched (exact) |
| 5 | With icons | With icons | matched (exact) |
| 6 | With badges | --- | missing_in_pfj |
| 7 | With action item | --- | missing_in_pfj |
| 8 | With non-expandable top level nodes | --- | missing_in_pfj |
| 9 | With selectable, expandable nodes | With separate selection and expansion | matched (semantic) |
| 10 | Guides | Guides | matched (exact) |
| 11 | Compact | --- | missing_in_pfj |
| 12 | Compact, no background | --- | missing_in_pfj |

## Action Items

1. Add "multiselectable" tree view variation
2. Add "with badges" tree view variation
3. Add "with action item" tree view variation
4. Add "with non-expandable top level nodes" variation
5. Add "compact" and "compact, no background" variations
