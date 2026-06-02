---
component: tree-view
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/tree-view/html
pfj_url: http://localhost:1234/components/tree-view
completeness:
  pf_total: 12
  pfj_total: 6
  matched: 4
  missing_in_pfj:
    - single-selectable
    - multiselectable
    - with-icons
    - with-badges
    - with-action-item
    - with-non-expandable-top-level-nodes
    - compact
    - compact-no-background
  extra_in_pfj:
    - tv-default
    - tv-async
---

# PF Compare: tree-view

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | With search | With icons | matched (semantic) |
| 2 | With checkboxes | With checkboxes | matched (exact) |
| 3 | With selectable, expandable nodes | With separate selection and expansion | matched (semantic) |
| 4 | Guides | Guides | matched (exact) |
| 5 | Single selectable | --- | missing_in_pfj |
| 6 | Multiselectable | --- | missing_in_pfj |
| 7 | With icons | --- | missing_in_pfj |
| 8 | With badges | --- | missing_in_pfj |
| 9 | With action item | --- | missing_in_pfj |
| 10 | With non-expandable top level nodes | --- | missing_in_pfj |
| 11 | Compact | --- | missing_in_pfj |
| 12 | Compact, no background | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Default (`tv-default`)
- Async items (`tv-async`)

## DOM Comparison

### With search

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<button>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ
- `.pf-m-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-divider` on `<hr>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__text-input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-tree-view` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-tree-view__search` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-tree-view__node-icon` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-icon pf-v6-c-text-input-group__main"> — missing in PFJ
- PF has <div class="pf-v6-c-text-input-group"> — missing in PFJ
- PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
- PF has <div class="pf-v6-c-tree-view__search"> — missing in PFJ
- PF has <span class="pf-v6-c-text-input-group__text"> — missing in PFJ
- PFJ has <button class="pf-v6-c-tree-view__node"> — not in PF
- PFJ has <div class="pf-v6-c-tree-view__content"> — not in PF
- PFJ has <li class="pf-v6-c-tree-view__list-item"> — not in PF
- PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF
- PFJ has <ul class="pf-v6-c-tree-view__list"> — not in PF

#### Attribute Differences
- aria-expanded="true" on <li> — present in PF, absent in PFJ
- aria-label="Search input" on <input> — present in PF, absent in PFJ
- aria-label="Tree View  with search example" on <ul> — present in PF, absent in PFJ
- aria-selected="false" on <li> — present in PF, absent in PFJ
- aria-selected="true" on <li> — present in PF, absent in PFJ
- role="group" on <ul> — present in PF, absent in PFJ
- tabindex="0" on <li> — present in PF, absent in PFJ
- type="text" on <input> — present in PF, absent in PFJ
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 512 512`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 512 512`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 512 512`

### With checkboxes

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ
- `.pf-m-selectable` on `<label>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-tree-view` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
- PF has <label class="pf-m-selectable pf-v6-c-tree-view__node"> — missing in PFJ
- PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
- PFJ has <label class="pf-v6-c-tree-view__node"> — not in PF
- PFJ has <li class="pf-v6-c-tree-view__list-item"> — not in PF
- PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF

#### Attribute Differences
- aria-checked="false" on <li> — present in PF, absent in PFJ
- aria-checked="true" on <li> — present in PF, absent in PFJ
- aria-expanded="true" on <li> — present in PF, absent in PFJ
- aria-label="Select" on <input> — present in PF, absent in PFJ
- aria-label="Toggle" on <button> — present in PF, absent in PFJ
- aria-label="Tree View with checkboxes example" on <ul> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-1 text-tree-view-checkboxes-1" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-10 text-tree-view-checkboxes-10" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-11 text-tree-view-checkboxes-11" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-12 text-tree-view-checkboxes-12" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-13 text-tree-view-checkboxes-13" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-14 text-tree-view-checkboxes-14" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-15 text-tree-view-checkboxes-15" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-2 text-tree-view-checkboxes-2" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-3 text-tree-view-checkboxes-3" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-4 text-tree-view-checkboxes-4" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-5 text-tree-view-checkboxes-5" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-6 text-tree-view-checkboxes-6" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-7 text-tree-view-checkboxes-7" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-8 text-tree-view-checkboxes-8" on <input> — present in PF, absent in PFJ
- aria-labelledby="check-tree-view-checkboxes-9 text-tree-view-checkboxes-9" on <input> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-1 text-tree-view-checkboxes-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-10 text-tree-view-checkboxes-10" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-13 text-tree-view-checkboxes-13" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-14 text-tree-view-checkboxes-14" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-15 text-tree-view-checkboxes-15" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-2 text-tree-view-checkboxes-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-5 text-tree-view-checkboxes-5" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-6 text-tree-view-checkboxes-6" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-7 text-tree-view-checkboxes-7" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-checkboxes-9 text-tree-view-checkboxes-9" on <button> — present in PF, absent in PFJ
- role="group" on <ul> — present in PF, absent in PFJ
- tabindex="0" on <label> — present in PF, absent in PFJ
- tabindex="0" on <li> — present in PF, absent in PFJ
- aria-labelledby="tv-check-app-launcher-check" on <input> — present in PFJ, absent in PF
- aria-labelledby="tv-check-cost-check" on <input> — present in PFJ, absent in PF
- aria-labelledby="tv-check-long-check" on <input> — present in PFJ, absent in PF
- aria-labelledby="tv-check-sources-check" on <input> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-label-id-115" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-label-id-123" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-label-id-129" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-label-id-95" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <input> — present in PFJ, absent in PF
- tabindex="0" on <input> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### With selectable, expandable nodes

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<div>` — present in PF, absent in PFJ
- `.pf-m-disabled` on `<button>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-tree-view` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
- PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
- PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF

#### Attribute Differences
- aria-expanded="true" on <li> — present in PF, absent in PFJ
- aria-label="Select" on <div> — present in PF, absent in PFJ
- aria-label="Toggle" on <button> — present in PF, absent in PFJ
- aria-label="Tree View with selectable, expandable nodes example" on <ul> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8" on <div> — present in PF, absent in PFJ
- aria-labelledby="node-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9" on <div> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8" on <button> — present in PF, absent in PFJ
- aria-labelledby="toggle-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9" on <button> — present in PF, absent in PFJ
- aria-selected="false" on <li> — present in PF, absent in PFJ
- aria-selected="true" on <li> — present in PF, absent in PFJ
- role="group" on <ul> — present in PF, absent in PFJ
- tabindex="0" on <div> — present in PF, absent in PFJ
- tabindex="0" on <li> — present in PF, absent in PFJ
- aria-labelledby="tv-tvi-selectable-id-60" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-selectable-id-70" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-selectable-id-74" on <button> — present in PFJ, absent in PF
- aria-labelledby="tv-tvi-selectable-id-77" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Guides

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<button>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ
- `.pf-m-guides` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-tree-view` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-guides pf-v6-c-tree-view"> — missing in PFJ
- PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
- PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF

#### Attribute Differences
- aria-expanded="true" on <li> — present in PF, absent in PFJ
- aria-label="Tree View guides example" on <ul> — present in PF, absent in PFJ
- aria-selected="false" on <li> — present in PF, absent in PFJ
- aria-selected="true" on <li> — present in PF, absent in PFJ
- role="group" on <ul> — present in PF, absent in PFJ
- tabindex="0" on <li> — present in PF, absent in PFJ
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Add variation:** Single selectable — implement Single selectable variation in PFJ
2. **Add variation:** Multiselectable — implement Multiselectable variation in PFJ
3. **Add variation:** With icons — implement With icons variation in PFJ
4. **Add variation:** With badges — implement With badges variation in PFJ
5. **Add variation:** With action item — implement With action item variation in PFJ
6. **Add variation:** With non-expandable top level nodes — implement With non-expandable top level nodes variation in PFJ
7. **Add variation:** Compact — implement Compact variation in PFJ
8. **Add variation:** Compact, no background — implement Compact, no background variation in PFJ
9. **Fix CSS:** With search — add missing class pf-m-current on <button>
10. **Fix CSS:** With search — add missing class pf-m-expanded on <li>
11. **Fix CSS:** With search — add missing class pf-m-icon on <div>
12. **Fix CSS:** With search — add missing class pf-v6-c-divider on <hr>
13. **Fix CSS:** With search — add missing class pf-v6-c-text-input-group on <div>
14. **Fix CSS:** With search — add missing class pf-v6-c-text-input-group__icon on <span>
15. **Fix CSS:** With search — add missing class pf-v6-c-text-input-group__main on <div>
16. **Fix CSS:** With search — add missing class pf-v6-c-text-input-group__text on <span>
17. **Fix CSS:** With search — add missing class pf-v6-c-text-input-group__text-input on <input>
18. **Fix CSS:** With search — add missing class pf-v6-c-tree-view on <div>
19. **Fix CSS:** With search — add missing class pf-v6-c-tree-view__search on <div>
20. **Fix structure:** With search — PF has <div class="pf-m-icon pf-v6-c-text-input-group__main"> — missing in PFJ
21. **Fix structure:** With search — PF has <div class="pf-v6-c-text-input-group"> — missing in PFJ
22. **Fix structure:** With search — PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
23. **Fix structure:** With search — PF has <div class="pf-v6-c-tree-view__search"> — missing in PFJ
24. **Fix structure:** With search — PF has <span class="pf-v6-c-text-input-group__text"> — missing in PFJ
25. **Fix structure:** With search — PFJ has <button class="pf-v6-c-tree-view__node"> — not in PF
26. **Fix structure:** With search — PFJ has <div class="pf-v6-c-tree-view__content"> — not in PF
27. **Fix structure:** With search — PFJ has <li class="pf-v6-c-tree-view__list-item"> — not in PF
28. **Fix structure:** With search — PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF
29. **Fix structure:** With search — PFJ has <ul class="pf-v6-c-tree-view__list"> — not in PF
30. **Fix attribute:** With search — aria-expanded="true" on <li> — present in PF, absent in PFJ
31. **Fix attribute:** With search — aria-label="Search input" on <input> — present in PF, absent in PFJ
32. **Fix attribute:** With search — aria-label="Tree View  with search example" on <ul> — present in PF, absent in PFJ
33. **Fix attribute:** With search — aria-selected="false" on <li> — present in PF, absent in PFJ
34. **Fix attribute:** With search — aria-selected="true" on <li> — present in PF, absent in PFJ
35. **Fix attribute:** With search — role="group" on <ul> — present in PF, absent in PFJ
36. **Fix attribute:** With search — tabindex="0" on <li> — present in PF, absent in PFJ
37. **Fix attribute:** With search — type="text" on <input> — present in PF, absent in PFJ
38. **Fix attribute:** With search — tabindex="-1" on <button> — present in PFJ, absent in PF
39. **Fix attribute:** With search — tabindex="0" on <button> — present in PFJ, absent in PF
40. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
41. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 512 512
42. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
43. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 512 512
44. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
45. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 448 512
46. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
47. **Fix icon:** With search — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 512 512
48. **Fix CSS:** With checkboxes — add missing class pf-m-expanded on <li>
49. **Fix CSS:** With checkboxes — add missing class pf-m-selectable on <label>
50. **Fix CSS:** With checkboxes — add missing class pf-m-standalone on <div>
51. **Fix CSS:** With checkboxes — add missing class pf-v6-c-check on <div>
52. **Fix CSS:** With checkboxes — add missing class pf-v6-c-check__input on <input>
53. **Fix CSS:** With checkboxes — add missing class pf-v6-c-tree-view on <div>
54. **Fix structure:** With checkboxes — PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
55. **Fix structure:** With checkboxes — PF has <label class="pf-m-selectable pf-v6-c-tree-view__node"> — missing in PFJ
56. **Fix structure:** With checkboxes — PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
57. **Fix structure:** With checkboxes — PFJ has <label class="pf-v6-c-tree-view__node"> — not in PF
58. **Fix structure:** With checkboxes — PFJ has <li class="pf-v6-c-tree-view__list-item"> — not in PF
59. **Fix structure:** With checkboxes — PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF
60. **Fix attribute:** With checkboxes — aria-checked="false" on <li> — present in PF, absent in PFJ
61. **Fix attribute:** With checkboxes — aria-checked="true" on <li> — present in PF, absent in PFJ
62. **Fix attribute:** With checkboxes — aria-expanded="true" on <li> — present in PF, absent in PFJ
63. **Fix attribute:** With checkboxes — aria-label="Select" on <input> — present in PF, absent in PFJ
64. **Fix attribute:** With checkboxes — aria-label="Toggle" on <button> — present in PF, absent in PFJ
65. **Fix attribute:** With checkboxes — aria-label="Tree View with checkboxes example" on <ul> — present in PF, absent in PFJ
66. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-1 text-tree-view-checkboxes-1" on <input> — present in PF, absent in PFJ
67. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-10 text-tree-view-checkboxes-10" on <input> — present in PF, absent in PFJ
68. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-11 text-tree-view-checkboxes-11" on <input> — present in PF, absent in PFJ
69. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-12 text-tree-view-checkboxes-12" on <input> — present in PF, absent in PFJ
70. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-13 text-tree-view-checkboxes-13" on <input> — present in PF, absent in PFJ
71. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-14 text-tree-view-checkboxes-14" on <input> — present in PF, absent in PFJ
72. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-15 text-tree-view-checkboxes-15" on <input> — present in PF, absent in PFJ
73. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-2 text-tree-view-checkboxes-2" on <input> — present in PF, absent in PFJ
74. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-3 text-tree-view-checkboxes-3" on <input> — present in PF, absent in PFJ
75. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-4 text-tree-view-checkboxes-4" on <input> — present in PF, absent in PFJ
76. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-5 text-tree-view-checkboxes-5" on <input> — present in PF, absent in PFJ
77. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-6 text-tree-view-checkboxes-6" on <input> — present in PF, absent in PFJ
78. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-7 text-tree-view-checkboxes-7" on <input> — present in PF, absent in PFJ
79. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-8 text-tree-view-checkboxes-8" on <input> — present in PF, absent in PFJ
80. **Fix attribute:** With checkboxes — aria-labelledby="check-tree-view-checkboxes-9 text-tree-view-checkboxes-9" on <input> — present in PF, absent in PFJ
81. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-1 text-tree-view-checkboxes-1" on <button> — present in PF, absent in PFJ
82. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-10 text-tree-view-checkboxes-10" on <button> — present in PF, absent in PFJ
83. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-13 text-tree-view-checkboxes-13" on <button> — present in PF, absent in PFJ
84. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-14 text-tree-view-checkboxes-14" on <button> — present in PF, absent in PFJ
85. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-15 text-tree-view-checkboxes-15" on <button> — present in PF, absent in PFJ
86. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-2 text-tree-view-checkboxes-2" on <button> — present in PF, absent in PFJ
87. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-5 text-tree-view-checkboxes-5" on <button> — present in PF, absent in PFJ
88. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-6 text-tree-view-checkboxes-6" on <button> — present in PF, absent in PFJ
89. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-7 text-tree-view-checkboxes-7" on <button> — present in PF, absent in PFJ
90. **Fix attribute:** With checkboxes — aria-labelledby="toggle-tree-view-checkboxes-9 text-tree-view-checkboxes-9" on <button> — present in PF, absent in PFJ
91. **Fix attribute:** With checkboxes — role="group" on <ul> — present in PF, absent in PFJ
92. **Fix attribute:** With checkboxes — tabindex="0" on <label> — present in PF, absent in PFJ
93. **Fix attribute:** With checkboxes — tabindex="0" on <li> — present in PF, absent in PFJ
94. **Fix attribute:** With checkboxes — aria-labelledby="tv-check-app-launcher-check" on <input> — present in PFJ, absent in PF
95. **Fix attribute:** With checkboxes — aria-labelledby="tv-check-cost-check" on <input> — present in PFJ, absent in PF
96. **Fix attribute:** With checkboxes — aria-labelledby="tv-check-long-check" on <input> — present in PFJ, absent in PF
97. **Fix attribute:** With checkboxes — aria-labelledby="tv-check-sources-check" on <input> — present in PFJ, absent in PF
98. **Fix attribute:** With checkboxes — aria-labelledby="tv-tvi-label-id-115" on <button> — present in PFJ, absent in PF
99. **Fix attribute:** With checkboxes — aria-labelledby="tv-tvi-label-id-123" on <button> — present in PFJ, absent in PF
100. **Fix attribute:** With checkboxes — aria-labelledby="tv-tvi-label-id-129" on <button> — present in PFJ, absent in PF
101. **Fix attribute:** With checkboxes — aria-labelledby="tv-tvi-label-id-95" on <button> — present in PFJ, absent in PF
102. **Fix attribute:** With checkboxes — tabindex="-1" on <button> — present in PFJ, absent in PF
103. **Fix attribute:** With checkboxes — tabindex="-1" on <input> — present in PFJ, absent in PF
104. **Fix attribute:** With checkboxes — tabindex="0" on <input> — present in PFJ, absent in PF
105. **Fix icon:** With checkboxes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
106. **Fix icon:** With checkboxes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
107. **Fix icon:** With checkboxes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
108. **Fix icon:** With checkboxes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
109. **Fix CSS:** With selectable, expandable nodes — add missing class pf-m-current on <div>
110. **Fix CSS:** With selectable, expandable nodes — add missing class pf-m-disabled on <button>
111. **Fix CSS:** With selectable, expandable nodes — add missing class pf-m-expanded on <li>
112. **Fix CSS:** With selectable, expandable nodes — add missing class pf-v6-c-tree-view on <div>
113. **Fix structure:** With selectable, expandable nodes — PF has <div class="pf-v6-c-tree-view"> — missing in PFJ
114. **Fix structure:** With selectable, expandable nodes — PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
115. **Fix structure:** With selectable, expandable nodes — PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF
116. **Fix attribute:** With selectable, expandable nodes — aria-expanded="true" on <li> — present in PF, absent in PFJ
117. **Fix attribute:** With selectable, expandable nodes — aria-label="Select" on <div> — present in PF, absent in PFJ
118. **Fix attribute:** With selectable, expandable nodes — aria-label="Toggle" on <button> — present in PF, absent in PFJ
119. **Fix attribute:** With selectable, expandable nodes — aria-label="Tree View with selectable, expandable nodes example" on <ul> — present in PF, absent in PFJ
120. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1" on <div> — present in PF, absent in PFJ
121. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10" on <div> — present in PF, absent in PFJ
122. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2" on <div> — present in PF, absent in PFJ
123. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3" on <div> — present in PF, absent in PFJ
124. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4" on <div> — present in PF, absent in PFJ
125. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5" on <div> — present in PF, absent in PFJ
126. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6" on <div> — present in PF, absent in PFJ
127. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7" on <div> — present in PF, absent in PFJ
128. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8" on <div> — present in PF, absent in PFJ
129. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="node-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9" on <div> — present in PF, absent in PFJ
130. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-1 text-tree-view-selectable-expandable-1" on <button> — present in PF, absent in PFJ
131. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-10 text-tree-view-selectable-expandable-10" on <button> — present in PF, absent in PFJ
132. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-2 text-tree-view-selectable-expandable-2" on <button> — present in PF, absent in PFJ
133. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-3 text-tree-view-selectable-expandable-3" on <button> — present in PF, absent in PFJ
134. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-4 text-tree-view-selectable-expandable-4" on <button> — present in PF, absent in PFJ
135. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-5 text-tree-view-selectable-expandable-5" on <button> — present in PF, absent in PFJ
136. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-6 text-tree-view-selectable-expandable-6" on <button> — present in PF, absent in PFJ
137. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-7 text-tree-view-selectable-expandable-7" on <button> — present in PF, absent in PFJ
138. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-8 text-tree-view-selectable-expandable-8" on <button> — present in PF, absent in PFJ
139. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="toggle-tree-view-selectable-expandable-9 text-tree-view-selectable-expandable-9" on <button> — present in PF, absent in PFJ
140. **Fix attribute:** With selectable, expandable nodes — aria-selected="false" on <li> — present in PF, absent in PFJ
141. **Fix attribute:** With selectable, expandable nodes — aria-selected="true" on <li> — present in PF, absent in PFJ
142. **Fix attribute:** With selectable, expandable nodes — role="group" on <ul> — present in PF, absent in PFJ
143. **Fix attribute:** With selectable, expandable nodes — tabindex="0" on <div> — present in PF, absent in PFJ
144. **Fix attribute:** With selectable, expandable nodes — tabindex="0" on <li> — present in PF, absent in PFJ
145. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="tv-tvi-selectable-id-60" on <button> — present in PFJ, absent in PF
146. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="tv-tvi-selectable-id-70" on <button> — present in PFJ, absent in PF
147. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="tv-tvi-selectable-id-74" on <button> — present in PFJ, absent in PF
148. **Fix attribute:** With selectable, expandable nodes — aria-labelledby="tv-tvi-selectable-id-77" on <button> — present in PFJ, absent in PF
149. **Fix attribute:** With selectable, expandable nodes — tabindex="-1" on <button> — present in PFJ, absent in PF
150. **Fix attribute:** With selectable, expandable nodes — tabindex="0" on <button> — present in PFJ, absent in PF
151. **Fix icon:** With selectable, expandable nodes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
152. **Fix icon:** With selectable, expandable nodes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
153. **Fix icon:** With selectable, expandable nodes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
154. **Fix icon:** With selectable, expandable nodes — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
155. **Fix CSS:** Guides — add missing class pf-m-current on <button>
156. **Fix CSS:** Guides — add missing class pf-m-expanded on <li>
157. **Fix CSS:** Guides — add missing class pf-m-guides on <div>
158. **Fix CSS:** Guides — add missing class pf-v6-c-tree-view on <div>
159. **Fix structure:** Guides — PF has <div class="pf-m-guides pf-v6-c-tree-view"> — missing in PFJ
160. **Fix structure:** Guides — PF has <li class="pf-m-expanded pf-v6-c-tree-view__list-item"> — missing in PFJ
161. **Fix structure:** Guides — PFJ has <span class="pf-v6-c-tree-view__node-container"> — not in PF
162. **Fix attribute:** Guides — aria-expanded="true" on <li> — present in PF, absent in PFJ
163. **Fix attribute:** Guides — aria-label="Tree View guides example" on <ul> — present in PF, absent in PFJ
164. **Fix attribute:** Guides — aria-selected="false" on <li> — present in PF, absent in PFJ
165. **Fix attribute:** Guides — aria-selected="true" on <li> — present in PF, absent in PFJ
166. **Fix attribute:** Guides — role="group" on <ul> — present in PF, absent in PFJ
167. **Fix attribute:** Guides — tabindex="0" on <li> — present in PF, absent in PFJ
168. **Fix attribute:** Guides — tabindex="-1" on <button> — present in PFJ, absent in PF
169. **Fix attribute:** Guides — tabindex="0" on <button> — present in PFJ, absent in PF
170. **Fix icon:** Guides — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
171. **Fix icon:** Guides — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
172. **Fix icon:** Guides — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
173. **Fix icon:** Guides — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
