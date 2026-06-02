---
component: toolbar
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/toolbar/html
pfj_url: http://localhost:1234/components/toolbar
completeness:
  pf_total: 24
  pfj_total: 6
  matched: 3
  missing_in_pfj:
    - simple
    - no-padding
    - adjusted-group-column-gap
    - insets
    - width-control
    - action-group
    - action-group-plain
    - action-group-inline
    - label-group
    - toggle-group-on-mobile-filters-collapsed-expandable-content-expanded
    - selected-filters-on-mobile-filters-collapsed-selected-filters-summary-visible
    - selected-filters-on-mobile-filters-collapsed-expandable-content-expanded
    - selected-filters-on-desktop-not-responsive
    - stacked-on-desktop
    - stacked-on-mobile-filters-collapsed-expandable-content-expanded
    - primary-background
    - secondary-background
    - no-background
    - dynamic-sticky-toolbar
    - vertical
    - vertical-with-height-visibility-breakpoints
  extra_in_pfj:
    - toolbar-items
    - toolbar-inset
    - toolbar-color
---

# PF Compare: toolbar

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Filter group | Toggle groups | matched (semantic) |
| 2 | Toggle group on desktop | With groups of items | matched (semantic) |
| 3 | Sticky toolbar | Sticky toolbar | matched (exact) |
| 4 | Simple | --- | missing_in_pfj |
| 5 | No padding | --- | missing_in_pfj |
| 6 | Adjusted group column gap | --- | missing_in_pfj |
| 7 | Insets | --- | missing_in_pfj |
| 8 | Width control | --- | missing_in_pfj |
| 9 | Action group | --- | missing_in_pfj |
| 10 | Action group plain | --- | missing_in_pfj |
| 11 | Action group inline | --- | missing_in_pfj |
| 12 | Label group | --- | missing_in_pfj |
| 13 | Toggle group on mobile (filters collapsed, expandable content expanded) | --- | missing_in_pfj |
| 14 | Selected filters on mobile (filters collapsed, selected filters summary visible) | --- | missing_in_pfj |
| 15 | Selected filters on mobile (filters collapsed, expandable content expanded) | --- | missing_in_pfj |
| 16 | Selected filters on desktop (not responsive) | --- | missing_in_pfj |
| 17 | Stacked on desktop | --- | missing_in_pfj |
| 18 | Stacked on mobile (filters collapsed, expandable content expanded) | --- | missing_in_pfj |
| 19 | Primary background | --- | missing_in_pfj |
| 20 | Secondary background | --- | missing_in_pfj |
| 21 | No background | --- | missing_in_pfj |
| 22 | Dynamic sticky toolbar | --- | missing_in_pfj |
| 23 | Vertical | --- | missing_in_pfj |
| 24 | Vertical with height visibility breakpoints | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Toolbar items (`toolbar-items`)
- With adjusted inset (`toolbar-inset`)
- Background color variants (`toolbar-color`)

## DOM Comparison

### Filter group

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-m-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h4` on `<h4>` — present in PF, absent in PFJ
- `.pf-v6-c-divider` on `<hr>` — present in PF, absent in PFJ
- `.pf-v6-c-input-group` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-input-group__item` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-m-selected` on `<button>` — present in PFJ, absent in PF
- `.pf-m-show` on `<div>` — present in PFJ, absent in PF
- `.pf-m-toggle-group` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-select-icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__content-section` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__toggle` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-v6-c-menu-toggle"> — missing in PFJ
- PF has <div class="pf-m-filter-group pf-v6-c-toolbar__group"> — missing in PFJ
- PF has <div class="pf-v6-c-toolbar__group"> — missing in PFJ
- PF has <h4 class="pf-v6-c-content--h4"> — missing in PFJ
- PF has <hr class="pf-v6-c-divider"> — missing in PFJ
- PF has <span class="pf-v6-c-menu-toggle__controls"> — missing in PFJ
- PF has <span class="pf-v6-c-menu-toggle__text"> — missing in PFJ
- PFJ has <div class="pf-m-show pf-m-toggle-group pf-v6-c-toolbar__group"> — not in PF
- PFJ has <div class="pf-v6-c-toolbar__content"> — not in PF
- PFJ has <div class="pf-v6-c-toolbar__content-section"> — not in PF
- PFJ has <div class="pf-v6-c-toolbar__toggle"> — not in PF

#### Attribute Differences
- aria-label="Search input" on <input> — present in PF, absent in PFJ
- aria-label="search filter" on <div> — present in PF, absent in PFJ
- role="group" on <div> — present in PF, absent in PFJ
- aria-haspopup="false" on <button> — present in PFJ, absent in PF
- aria-label="Show filters" on <button> — present in PFJ, absent in PF
- aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
- aria-selected="false" on <button> — present in PFJ, absent in PF
- aria-selected="true" on <button> — present in PFJ, absent in PF
- role="listbox" on <ul> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="option" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Toggle group on desktop

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-m-hidden` on `<div>` — present in PF, absent in PFJ
- `.pf-m-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-m-show` on `<div>` — present in PF, absent in PFJ
- `.pf-m-toggle-group` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-input-group` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-input-group__item` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-text-input-group__text-input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-toolbar__expandable-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-toolbar__toggle` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-action-group` on `<div>` — present in PFJ, absent in PF
- `.pf-m-action-group-plain` on `<div>` — present in PFJ, absent in PF
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-primary` on `<button>` — present in PFJ, absent in PF
- `.pf-m-secondary` on `<button>` — present in PFJ, absent in PF
- `.pf-m-selected` on `<button>` — present in PFJ, absent in PF
- `.pf-m-tertiary` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-select-icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-show pf-m-toggle-group pf-v6-c-toolbar__group"> — missing in PFJ
- PF has <div class="pf-v6-c-toolbar__toggle"> — missing in PFJ
- PFJ has <div class="pf-m-action-group pf-v6-c-toolbar__group"> — not in PF
- PFJ has <div class="pf-m-action-group-plain pf-v6-c-toolbar__group"> — not in PF
- PFJ has <div class="pf-m-filter-group pf-v6-c-toolbar__group"> — not in PF

#### Attribute Differences
- aria-controls="toolbar-toggle-group-desktop-expandable-content" on <button> — present in PF, absent in PFJ
- aria-label="Search input" on <input> — present in PF, absent in PFJ
- aria-label="Show filters" on <button> — present in PF, absent in PFJ
- aria-label="search filter" on <div> — present in PF, absent in PFJ
- role="group" on <div> — present in PF, absent in PFJ
- type="text" on <input> — present in PF, absent in PFJ
- aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
- aria-selected="false" on <button> — present in PFJ, absent in PF
- aria-selected="true" on <button> — present in PFJ, absent in PF
- role="listbox" on <ul> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="option" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Sticky toolbar

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-vertical` on `<hr>` — present in PF, absent in PFJ
- `.pf-v6-c-divider` on `<hr>` — present in PF, absent in PFJ
- `.pf-v6-c-toolbar__group` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-align-items-center` on `<div>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<ol>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-list` on `<ol>` — present in PFJ, absent in PF
- `.pf-v6-c-text-input-group` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-text-input-group__main` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-text-input-group__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-text-input-group__text-input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-sm` on `<ol>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-toolbar__content-section"> — missing in PFJ
- PF has <div class="pf-v6-c-toolbar__group"> — missing in PFJ
- PF has <hr class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
- PFJ has <div class="pf-m-align-items-center pf-v6-c-toolbar__content-section"> — not in PF
- PFJ has <div class="pf-v6-c-text-input-group"> — not in PF

#### Attribute Differences
- role="list" on <ol> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF
- type="text" on <input> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Simple — implement Simple variation in PFJ
2. **Add variation:** No padding — implement No padding variation in PFJ
3. **Add variation:** Adjusted group column gap — implement Adjusted group column gap variation in PFJ
4. **Add variation:** Insets — implement Insets variation in PFJ
5. **Add variation:** Width control — implement Width control variation in PFJ
6. **Add variation:** Action group — implement Action group variation in PFJ
7. **Add variation:** Action group plain — implement Action group plain variation in PFJ
8. **Add variation:** Action group inline — implement Action group inline variation in PFJ
9. **Add variation:** Label group — implement Label group variation in PFJ
10. **Add variation:** Toggle group on mobile (filters collapsed, expandable content expanded) — implement Toggle group on mobile (filters collapsed, expandable content expanded) variation in PFJ
11. **Add variation:** Selected filters on mobile (filters collapsed, selected filters summary visible) — implement Selected filters on mobile (filters collapsed, selected filters summary visible) variation in PFJ
12. **Add variation:** Selected filters on mobile (filters collapsed, expandable content expanded) — implement Selected filters on mobile (filters collapsed, expandable content expanded) variation in PFJ
13. **Add variation:** Selected filters on desktop (not responsive) — implement Selected filters on desktop (not responsive) variation in PFJ
14. **Add variation:** Stacked on desktop — implement Stacked on desktop variation in PFJ
15. **Add variation:** Stacked on mobile (filters collapsed, expandable content expanded) — implement Stacked on mobile (filters collapsed, expandable content expanded) variation in PFJ
16. **Add variation:** Primary background — implement Primary background variation in PFJ
17. **Add variation:** Secondary background — implement Secondary background variation in PFJ
18. **Add variation:** No background — implement No background variation in PFJ
19. **Add variation:** Dynamic sticky toolbar — implement Dynamic sticky toolbar variation in PFJ
20. **Add variation:** Vertical — implement Vertical variation in PFJ
21. **Add variation:** Vertical with height visibility breakpoints — implement Vertical with height visibility breakpoints variation in PFJ
22. **Fix CSS:** Filter group — add missing class pf-m-fill on <div>
23. **Fix CSS:** Filter group — add missing class pf-m-icon on <div>
24. **Fix CSS:** Filter group — add missing class pf-v6-c-content--h4 on <h4>
25. **Fix CSS:** Filter group — add missing class pf-v6-c-divider on <hr>
26. **Fix CSS:** Filter group — add missing class pf-v6-c-input-group on <div>
27. **Fix CSS:** Filter group — add missing class pf-v6-c-input-group__item on <div>
28. **Fix CSS:** Filter group — add missing class pf-v6-c-text-input-group__icon on <span>
29. **Fix structure:** Filter group — PF has <button class="pf-v6-c-menu-toggle"> — missing in PFJ
30. **Fix structure:** Filter group — PF has <div class="pf-m-filter-group pf-v6-c-toolbar__group"> — missing in PFJ
31. **Fix structure:** Filter group — PF has <div class="pf-v6-c-toolbar__group"> — missing in PFJ
32. **Fix structure:** Filter group — PF has <h4 class="pf-v6-c-content--h4"> — missing in PFJ
33. **Fix structure:** Filter group — PF has <hr class="pf-v6-c-divider"> — missing in PFJ
34. **Fix structure:** Filter group — PF has <span class="pf-v6-c-menu-toggle__controls"> — missing in PFJ
35. **Fix structure:** Filter group — PF has <span class="pf-v6-c-menu-toggle__text"> — missing in PFJ
36. **Fix structure:** Filter group — PFJ has <div class="pf-m-show pf-m-toggle-group pf-v6-c-toolbar__group"> — not in PF
37. **Fix structure:** Filter group — PFJ has <div class="pf-v6-c-toolbar__content"> — not in PF
38. **Fix structure:** Filter group — PFJ has <div class="pf-v6-c-toolbar__content-section"> — not in PF
39. **Fix structure:** Filter group — PFJ has <div class="pf-v6-c-toolbar__toggle"> — not in PF
40. **Fix attribute:** Filter group — aria-label="Search input" on <input> — present in PF, absent in PFJ
41. **Fix attribute:** Filter group — aria-label="search filter" on <div> — present in PF, absent in PFJ
42. **Fix attribute:** Filter group — role="group" on <div> — present in PF, absent in PFJ
43. **Fix attribute:** Filter group — aria-haspopup="false" on <button> — present in PFJ, absent in PF
44. **Fix attribute:** Filter group — aria-label="Show filters" on <button> — present in PFJ, absent in PF
45. **Fix attribute:** Filter group — aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
46. **Fix attribute:** Filter group — aria-selected="false" on <button> — present in PFJ, absent in PF
47. **Fix attribute:** Filter group — aria-selected="true" on <button> — present in PFJ, absent in PF
48. **Fix attribute:** Filter group — role="listbox" on <ul> — present in PFJ, absent in PF
49. **Fix attribute:** Filter group — role="none" on <li> — present in PFJ, absent in PF
50. **Fix attribute:** Filter group — role="option" on <button> — present in PFJ, absent in PF
51. **Fix attribute:** Filter group — tabindex="-1" on <button> — present in PFJ, absent in PF
52. **Fix attribute:** Filter group — tabindex="0" on <button> — present in PFJ, absent in PF
53. **Fix icon:** Filter group — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
54. **Fix icon:** Filter group — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
55. **Fix icon:** Filter group — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
56. **Fix icon:** Filter group — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
57. **Fix CSS:** Toggle group on desktop — add missing class pf-m-fill on <div>
58. **Fix CSS:** Toggle group on desktop — add missing class pf-m-hidden on <div>
59. **Fix CSS:** Toggle group on desktop — add missing class pf-m-icon on <div>
60. **Fix CSS:** Toggle group on desktop — add missing class pf-m-show on <div>
61. **Fix CSS:** Toggle group on desktop — add missing class pf-m-toggle-group on <div>
62. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-input-group on <div>
63. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-input-group__item on <div>
64. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-menu-toggle__icon on <span>
65. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-text-input-group on <div>
66. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-text-input-group__icon on <span>
67. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-text-input-group__main on <div>
68. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-text-input-group__text on <span>
69. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-text-input-group__text-input on <input>
70. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-toolbar__expandable-content on <div>
71. **Fix CSS:** Toggle group on desktop — add missing class pf-v6-c-toolbar__toggle on <div>
72. **Fix structure:** Toggle group on desktop — PF has <div class="pf-m-show pf-m-toggle-group pf-v6-c-toolbar__group"> — missing in PFJ
73. **Fix structure:** Toggle group on desktop — PF has <div class="pf-v6-c-toolbar__toggle"> — missing in PFJ
74. **Fix structure:** Toggle group on desktop — PFJ has <div class="pf-m-action-group pf-v6-c-toolbar__group"> — not in PF
75. **Fix structure:** Toggle group on desktop — PFJ has <div class="pf-m-action-group-plain pf-v6-c-toolbar__group"> — not in PF
76. **Fix structure:** Toggle group on desktop — PFJ has <div class="pf-m-filter-group pf-v6-c-toolbar__group"> — not in PF
77. **Fix attribute:** Toggle group on desktop — aria-controls="toolbar-toggle-group-desktop-expandable-content" on <button> — present in PF, absent in PFJ
78. **Fix attribute:** Toggle group on desktop — aria-label="Search input" on <input> — present in PF, absent in PFJ
79. **Fix attribute:** Toggle group on desktop — aria-label="Show filters" on <button> — present in PF, absent in PFJ
80. **Fix attribute:** Toggle group on desktop — aria-label="search filter" on <div> — present in PF, absent in PFJ
81. **Fix attribute:** Toggle group on desktop — role="group" on <div> — present in PF, absent in PFJ
82. **Fix attribute:** Toggle group on desktop — type="text" on <input> — present in PF, absent in PFJ
83. **Fix attribute:** Toggle group on desktop — aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
84. **Fix attribute:** Toggle group on desktop — aria-selected="false" on <button> — present in PFJ, absent in PF
85. **Fix attribute:** Toggle group on desktop — aria-selected="true" on <button> — present in PFJ, absent in PF
86. **Fix attribute:** Toggle group on desktop — role="listbox" on <ul> — present in PFJ, absent in PF
87. **Fix attribute:** Toggle group on desktop — role="none" on <li> — present in PFJ, absent in PF
88. **Fix attribute:** Toggle group on desktop — role="option" on <button> — present in PFJ, absent in PF
89. **Fix attribute:** Toggle group on desktop — tabindex="-1" on <button> — present in PFJ, absent in PF
90. **Fix attribute:** Toggle group on desktop — tabindex="0" on <button> — present in PFJ, absent in PF
91. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
92. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
93. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
94. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
95. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
96. **Fix icon:** Toggle group on desktop — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
97. **Fix CSS:** Sticky toolbar — add missing class pf-m-vertical on <hr>
98. **Fix CSS:** Sticky toolbar — add missing class pf-v6-c-divider on <hr>
99. **Fix CSS:** Sticky toolbar — add missing class pf-v6-c-toolbar__group on <div>
100. **Fix structure:** Sticky toolbar — PF has <div class="pf-v6-c-toolbar__content-section"> — missing in PFJ
101. **Fix structure:** Sticky toolbar — PF has <div class="pf-v6-c-toolbar__group"> — missing in PFJ
102. **Fix structure:** Sticky toolbar — PF has <hr class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
103. **Fix structure:** Sticky toolbar — PFJ has <div class="pf-m-align-items-center pf-v6-c-toolbar__content-section"> — not in PF
104. **Fix structure:** Sticky toolbar — PFJ has <div class="pf-v6-c-text-input-group"> — not in PF
105. **Fix attribute:** Sticky toolbar — role="list" on <ol> — present in PFJ, absent in PF
106. **Fix attribute:** Sticky toolbar — type="checkbox" on <input> — present in PFJ, absent in PF
107. **Fix attribute:** Sticky toolbar — type="text" on <input> — present in PFJ, absent in PF
