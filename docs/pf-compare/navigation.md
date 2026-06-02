---
component: navigation
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/navigation/html
pfj_url: http://localhost:1234/components/navigation
completeness:
  pf_total: 17
  pfj_total: 14
  matched: 14
  missing_in_pfj:
    - expanded-with-subnav-titles
    - nav-with-drilldown-menu-level-two
    - nav-with-drilldown-menu-level-three
  extra_in_pfj: []
---

# PF Compare: navigation

## Completeness

| # | PF Variation | PFJ Snippet | Match | Status |
|---|---|---|---|---|
| 1 | Default | Default | exact | matched |
| 2 | Grouped nav | Grouped | semantic | matched |
| 3 | Grouped nav, no titles | Grouped, no titles | semantic | matched |
| 4 | Expanded | Expandable | semantic | matched |
| 5 | Expanded with subnav titles | --- | --- | missing_in_pfj |
| 6 | Mixed | Mixed | exact | matched |
| 7 | Expandable, third level | Expandable third level | semantic | matched |
| 8 | Horizontal | Horizontal navigation | semantic | matched |
| 9 | Horizontal overflow | Horizontal overflow | semantic | matched |
| 10 | Horizontal subnav | Horizontal subnav | semantic | matched |
| 11 | Horizontal subnav overflow | Horizontal subnav overflow | semantic | matched |
| 12 | Nav with flyout | Flyout | semantic | matched (not yet implemented) |
| 13 | Nav with drilldown menu | Drilldown | semantic | matched (not yet implemented) |
| 14 | Nav with drilldown menu level two | --- | --- | missing_in_pfj |
| 15 | Nav with drilldown menu level three | --- | --- | missing_in_pfj |
| 16 | Nav item icons | With item icons | semantic | matched |
| 17 | Docked nav | Docked | semantic | matched |

## DOM Comparison

### Default

**Status:** ok

### Grouped nav

**Status:** ok

### Grouped nav, no titles

**Status:** ok

### Expanded

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — PFJ uses `pf-m-expandable` (collapsed state) on nav items; PF demo shows `pf-m-expanded` (pre-expanded state). Both are valid states of the same component.
- `.pf-v6-c-divider` on `<li>` — PFJ adds `<li class="pf-v6-c-divider" role="separator">` inside subnav lists; PF expanded variation does not use dividers

#### Structural Differences
- PFJ uses `pf-m-expandable` (collapsed state) on `<li>` nav items; PF demo shows `pf-m-expanded` (pre-expanded state). Both are valid states.
- PFJ adds `<li class="pf-v6-c-divider" role="separator">` inside subnav `<ul>`; PF expanded variation has no dividers in subnav lists

### Expandable, third level

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — PFJ uses `pf-m-expandable` (collapsed state); PF uses `pf-m-expanded` (pre-expanded state)

#### Structural Differences
- PFJ uses `pf-m-expandable` (collapsed state) on `<li>` nav items; PF demo shows `pf-m-expanded` (pre-expanded state). Both are valid states.
- PF variation includes plain `<a>` nav items (Clusters, Overview, Releases, Support Cases) alongside expandable groups; PFJ only shows expandable groups

### Mixed

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — PFJ uses `pf-m-expandable` (collapsed state); PF uses `pf-m-expanded` (pre-expanded state)
- `.pf-v6-c-divider` on `<li>` — PFJ adds `<li class="pf-v6-c-divider" role="separator">` inside subnav lists; PF mixed variation does not use dividers

#### Structural Differences
- PFJ uses `pf-m-expandable` (collapsed state) on `<li>` nav items; PF demo shows `pf-m-expanded` (pre-expanded state). Both are valid states.
- PFJ adds `<li class="pf-v6-c-divider" role="separator">` inside subnav `<ul>`; PF mixed variation has no dividers in subnav lists

### Horizontal

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-scrollable` on `<nav>` — PFJ always adds `pf-m-scrollable` and scroll buttons to horizontal nav; PF basic horizontal does not have scrollable/overflow
- `.pf-v6-c-nav__scroll-button` on `<div>` — PFJ always renders scroll button wrappers; PF basic horizontal has no scroll buttons
- `.pf-v6-c-button` on `<button>` — Scroll button elements present in PFJ but not in PF basic horizontal
- `.pf-m-plain` on `<button>` — Scroll button modifier present in PFJ but not in PF basic horizontal
- `.pf-m-disabled` on `<button>` — Disabled scroll button modifier present in PFJ but not in PF basic horizontal
- `.pf-v6-c-button__icon` on `<span>` — Scroll button icon wrapper present in PFJ but not in PF basic horizontal

#### Structural Differences
- PFJ always renders horizontal nav with `pf-m-scrollable` and scroll buttons (`<div class="pf-v6-c-nav__scroll-button">` with `<button>` elements); PF basic "Horizontal" variation has no scroll infrastructure

#### Attribute Differences
- PFJ scroll buttons have `aria-disabled`, `aria-hidden`, and `aria-label` attributes not present in PF basic horizontal (since PF has no scroll buttons)

#### Icon Differences
- `svg (scroll button icons)` — PF: not present (no scroll buttons), PFJ: viewBox `0 0 32 32`

### Horizontal overflow

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — PFJ adds `pf-m-disabled` class to disabled scroll button; PF uses `disabled` attribute only

#### Attribute Differences
- PFJ scroll buttons have `aria-hidden="true"`; PF scroll buttons do not have `aria-hidden`

#### Icon Differences
- `svg (scroll button icons)` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32` (different icon set)

### Horizontal subnav

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-scrollable` on `<nav>` — PFJ always adds `pf-m-scrollable` and scroll buttons to horizontal subnav; PF basic subnav variation does not have scrollable/overflow
- `.pf-v6-c-nav__scroll-button` on `<div>` — PFJ always renders scroll button wrappers; PF basic subnav has no scroll buttons
- `.pf-v6-c-button` on `<button>` — Scroll button elements present in PFJ but not in PF basic subnav
- `.pf-m-plain` on `<button>` — Scroll button modifier present in PFJ but not in PF basic subnav
- `.pf-m-disabled` on `<button>` — Disabled scroll button modifier present in PFJ but not in PF basic subnav
- `.pf-v6-c-button__icon` on `<span>` — Scroll button icon wrapper present in PFJ but not in PF basic subnav

#### Structural Differences
- PFJ always renders horizontal subnav with `pf-m-scrollable` and scroll buttons; PF basic "Horizontal subnav" variation has no scroll infrastructure

#### Attribute Differences
- PFJ scroll buttons have `aria-disabled`, `aria-hidden`, and `aria-label` attributes not present in PF basic subnav (since PF has no scroll buttons)

#### Icon Differences
- `svg (scroll button icons)` — PF: not present (no scroll buttons), PFJ: viewBox `0 0 32 32`

### Horizontal subnav overflow

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — PFJ adds `pf-m-disabled` class to disabled scroll button; PF uses `disabled` attribute only

#### Attribute Differences
- PFJ scroll buttons have `aria-hidden="true"`; PF scroll buttons do not have `aria-hidden`

#### Icon Differences
- `svg (scroll button icons)` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32` (different icon set)

### Nav with flyout

**Status:** not_implemented

PFJ shows "Not yet implemented" warning instead of flyout navigation.

### Nav with drilldown menu

**Status:** not_implemented

PFJ shows "Not yet implemented" warning instead of drilldown navigation.

### Nav item icons

**Status:** differences_found

#### Icon Differences
- `svg (nav link icons)` — PF uses viewBox `0 0 32 32` (PatternFly/Red Hat icons), PFJ uses viewBox `0 0 512 512` and `0 0 576 512` (FontAwesome icons)

### Docked nav

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-c-nav__link-text` on `<span>` — PFJ renders empty `<span class="pf-v6-c-nav__link-text"></span>` in docked nav items; PF docked nav has no link-text span (icon-only links)

#### Structural Differences
- PFJ renders empty `<span class="pf-v6-c-nav__link-text"></span>` alongside the icon span in each docked nav link; PF only has the icon span with no text span

#### Icon Differences
- `svg (nav link icons)` — PF uses viewBox `0 0 32 32` (PatternFly/Red Hat icons), PFJ uses viewBox `0 0 512 512` and `0 0 576 512` (FontAwesome icons)

## Action Items

### Missing Variations

1. **Add variation:** "Expanded with subnav titles" — implement expandable nav where subnav sections have visible titles via `<h2 class="pf-v6-c-nav__section-title">`
2. **Add variation:** "Nav with drilldown menu level two" — requires implementing drilldown navigation first
3. **Add variation:** "Nav with drilldown menu level three" — requires implementing drilldown navigation first

### DOM/CSS Fixes

4. **Fix structure:** Expanded, Mixed — PFJ adds `<li class="pf-v6-c-divider" role="separator">` separators inside subnav `<ul>` lists that PF does not have; consider removing these dividers to match PF
5. **Fix CSS:** Horizontal, Horizontal subnav — PFJ always renders with `pf-m-scrollable` and scroll buttons even for basic (non-overflow) horizontal variations; PF only adds scroll infrastructure in the overflow variations. Consider making scroll buttons conditional.
6. **Fix CSS:** Horizontal overflow, Horizontal subnav overflow — PFJ adds `pf-m-disabled` class on disabled scroll buttons; PF uses the `disabled` HTML attribute only
7. **Fix attribute:** Horizontal overflow, Horizontal subnav overflow — PFJ scroll buttons have `aria-hidden="true"`; PF scroll buttons do not
8. **Fix icon:** Horizontal overflow, Horizontal subnav overflow — scroll button icons use wrong viewBox (`0 0 32 32` in PFJ vs `0 0 20 20` in PF); switch to PatternFly `rhMicrons` icon set
9. **Fix icon:** Nav item icons, Docked nav — PFJ uses FontAwesome icons (viewBox `0 0 512 512`); PF uses PatternFly/Red Hat icons (viewBox `0 0 32 32`). Update showcase demo to use matching icons.
10. **Fix structure:** Docked nav — PFJ renders empty `<span class="pf-v6-c-nav__link-text"></span>` that PF does not have; remove empty text span for icon-only docked links

### Feature Implementation

11. **Implement feature:** Flyout navigation — PFJ currently shows "Not yet implemented"
12. **Implement feature:** Drilldown navigation — PFJ currently shows "Not yet implemented"
