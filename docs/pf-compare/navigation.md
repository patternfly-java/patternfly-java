---
component: navigation
date: 2026-05-29
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/navigation/html
pfj_url: http://localhost:1234/components/navigation
completeness:
  pf_total: 17
  pfj_total: 10
  matched: 10
  missing_in_pfj:
    - grouped-nav-no-titles
    - expanded-with-subnav-titles
    - horizontal-overflow
    - horizontal-subnav-overflow
    - nav-with-drilldown-menu-level-two
    - nav-with-drilldown-menu-level-three
    - docked-nav
  extra_in_pfj: []
---

# PF Compare: navigation

## Completeness

| # | PF Variation | PFJ Snippet | Match | Status |
|---|---|---|---|---|
| 1 | Default | Default | exact | matched |
| 2 | Grouped nav | Grouped | semantic | matched |
| 3 | Grouped nav, no titles | --- | --- | missing_in_pfj |
| 4 | Expanded | Expandable | semantic | matched |
| 5 | Expanded with subnav titles | --- | --- | missing_in_pfj |
| 6 | Mixed | Mixed | exact | matched |
| 7 | Expandable, third level | Expandable third level | semantic | matched |
| 8 | Horizontal | Horizontal navigation | semantic | matched |
| 9 | Horizontal overflow | --- | --- | missing_in_pfj |
| 10 | Horizontal subnav | Horizontal subnav | exact | matched |
| 11 | Horizontal subnav overflow | --- | --- | missing_in_pfj |
| 12 | Nav with flyout | Flyout | semantic | matched (not yet implemented) |
| 13 | Nav with drilldown menu | Drilldown | semantic | matched (not yet implemented) |
| 14 | Nav with drilldown menu level two | --- | --- | missing_in_pfj |
| 15 | Nav with drilldown menu level three | --- | --- | missing_in_pfj |
| 16 | Nav item icons | With item icons | semantic | matched |
| 17 | Docked nav | --- | --- | missing_in_pfj |

## DOM Comparison

### Default

**Status:** ok

Structure and CSS classes match. PF demo shows a "current" link with `pf-m-current` and `aria-current="page"`, which PFJ supports but doesn't demonstrate in its default snippet.

### Grouped nav

**Status:** differences_found

#### Attribute Differences
- `aria-labelledby` attribute missing on `<section class="pf-v6-c-nav__section">` elements in PFJ. PF uses `aria-labelledby="grouped-title1"` to associate each section with its heading.
- `id` attribute missing on `<h2 class="pf-v6-c-nav__section-title">` elements in PFJ. PF assigns `id="grouped-title1"` to enable the `aria-labelledby` reference.

### Expanded (Expandable)

**Status:** differences_found

#### Extra CSS Classes
- `pf-m-expandable` on `<li class="pf-v6-c-nav__item">` — present in PFJ, absent in PF. PF only uses `pf-m-expanded` when an item is expanded; it does not add a `pf-m-expandable` class to mark items as expandable.

#### Structural Differences
- In PFJ, expandable group button text is **not** wrapped in `<span class="pf-v6-c-nav__link-text">`. PF wraps it: `<span class="pf-v6-c-nav__link-text">Link 1 (current and expanded example)</span>`. PFJ renders: `<button class="pf-v6-c-nav__link">Expandable group 1<span class="pf-v6-c-nav__toggle">...</span></button>` (text as direct child of button).

#### Attribute Differences
- `inert` attribute missing on hidden `<section class="pf-v6-c-nav__subnav">` elements in PFJ. PF uses `hidden="" inert=""` on collapsed subnav sections.

### Expandable, third level

**Status:** differences_found

Same issues as "Expanded":

#### Extra CSS Classes
- `pf-m-expandable` on `<li class="pf-v6-c-nav__item">` — present in PFJ, absent in PF.

#### Structural Differences
- Expandable group button text not wrapped in `<span class="pf-v6-c-nav__link-text">`.

#### Attribute Differences
- `inert` attribute missing on hidden subnav sections.

### Mixed

**Status:** differences_found

Same issues as "Expanded":

#### Extra CSS Classes
- `pf-m-expandable` on `<li class="pf-v6-c-nav__item">` — present in PFJ, absent in PF.

#### Structural Differences
- Expandable group button text not wrapped in `<span class="pf-v6-c-nav__link-text">`.

#### Attribute Differences
- `inert` attribute missing on hidden subnav sections.

### Horizontal

**Status:** differences_found

#### Extra CSS Classes
- `pf-m-scrollable` on `<nav class="pf-v6-c-nav">` — present in PFJ, absent in PF basic horizontal variation. PF only uses `pf-m-scrollable` in the separate "Horizontal overflow" variation.

#### Structural Differences
- PFJ adds `<div class="pf-v6-c-nav__scroll-button">` elements with back/forward buttons around the list. PF basic horizontal has no scroll buttons. This is correct for the "Horizontal overflow" variation, but the PFJ demo always includes scrollable behavior even for the basic horizontal variant.

### Horizontal subnav

**Status:** differences_found

#### Extra CSS Classes
- `pf-m-scrollable` on `<nav class="pf-v6-c-nav">` — same issue as Horizontal. PFJ always adds scrollable behavior.

#### Structural Differences
- Same scroll button structure as Horizontal — extra `<div class="pf-v6-c-nav__scroll-button">` wrappers not present in PF basic horizontal subnav.

### Nav with flyout (Flyout)

**Status:** not_yet_implemented

PFJ displays a "Not yet implemented" warning alert. No DOM comparison possible.

### Nav with drilldown menu (Drilldown)

**Status:** not_yet_implemented

PFJ displays a "Not yet implemented" warning alert. No DOM comparison possible.

### Nav item icons

**Status:** ok

Structure matches: both use `<span class="pf-v6-c-nav__link-icon">` before `<span class="pf-v6-c-nav__link-text">` inside `<a class="pf-v6-c-nav__link">`.

## Action Items

### Missing Variations

1. **Add variation:** "Grouped nav, no titles" — implement grouped navigation without section title headings (sections with `aria-label` instead of `aria-labelledby`)
2. **Add variation:** "Expanded with subnav titles" — implement expandable nav where subnav sections have visible titles via `<h2 class="pf-v6-c-nav__section-title">`
3. **Add variation:** "Horizontal overflow" — implement horizontal nav with overflow scroll buttons (note: PFJ already has scroll support, but needs a dedicated demo matching PF's `pf-m-overflow` pattern)
4. **Add variation:** "Horizontal subnav overflow" — implement horizontal subnav with overflow scroll buttons
5. **Add variation:** "Nav with drilldown menu level two" — requires implementing drilldown navigation first
6. **Add variation:** "Nav with drilldown menu level three" — requires implementing drilldown navigation first
7. **Add variation:** "Docked nav" — implement docked/sticky navigation with `pf-m-docked` modifier

### DOM/CSS Fixes

8. **Fix CSS:** Expanded, Expandable third level, Mixed — remove `pf-m-expandable` class from `<li class="pf-v6-c-nav__item">` elements. PF does not use this class; it only uses `pf-m-expanded` when the item is expanded.
9. **Fix structure:** Expanded, Expandable third level, Mixed — wrap expandable group button text in `<span class="pf-v6-c-nav__link-text">`. Current: `<button>text<span class="toggle">...</span></button>`. Expected: `<button><span class="pf-v6-c-nav__link-text">text</span><span class="toggle">...</span></button>`.
10. **Fix attribute:** Expanded, Expandable third level, Mixed — add `inert` attribute alongside `hidden` on collapsed `<section class="pf-v6-c-nav__subnav">` elements.
11. **Fix attribute:** Grouped nav — add `id` to `<h2 class="pf-v6-c-nav__section-title">` and `aria-labelledby` to `<section class="pf-v6-c-nav__section">` to associate sections with their headings.
12. **Fix CSS:** Horizontal, Horizontal subnav — consider making `pf-m-scrollable` and scroll buttons conditional (only when overflow is needed) to match PF's separation of basic horizontal and horizontal overflow variants.

### Feature Implementation

13. **Implement feature:** Flyout navigation — PFJ currently shows "Not yet implemented"
14. **Implement feature:** Drilldown navigation — PFJ currently shows "Not yet implemented"
