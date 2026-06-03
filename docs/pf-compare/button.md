---
component: button
date: 2026-06-03
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/button/html
pfj_url: http://localhost:1234/components/button
completeness:
  pf_total: 18
  pfj_total: 17
  matched: 17
  missing_in_pfj:
    - stateful
  extra_in_pfj: []
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Variant examples | matched (semantic) |
| 2 | Clicked buttons | Clicked buttons | matched (exact) |
| 3 | Small buttons | Small buttons | matched (exact) |
| 4 | Disabled | Disabled buttons | matched (semantic) |
| 5 | Aria-disabled | Aria-disabled | matched (exact) |
| 6 | Links as buttons | Links as buttons | matched (exact) |
| 7 | Inline link as span | Inline link as span | matched (exact) |
| 8 | Block level | Block level buttons | matched (semantic) |
| 9 | Types | Types | matched (exact) |
| 10 | Call to action | Call to action (CTA) buttons | matched (semantic) |
| 11 | Progress | Progress indicators | matched (semantic) |
| 12 | Circle buttons | Circle buttons | matched (exact) |
| 13 | Counts | Button with count | matched (semantic) |
| 14 | Plain with no padding | Plain with no padding | matched (exact) |
| 15 | Favorite | Favorite | matched (exact) |
| 16 | Settings | Settings | matched (exact) |
| 17 | Hamburger | Hamburger | matched (exact) |
| 18 | Stateful | --- | missing_in_pfj |

## DOM Comparison

### Variations

**Status:** ok

No differences found.

### Clicked buttons

**Status:** ok

No differences found.

### Small buttons

**Status:** differences_found

#### Structural Differences
- PFJ only shows small for primary/secondary/tertiary/danger/warning; PF also shows small for link, inline link, plain, control

### Disabled

**Status:** ok

No differences found.

### Aria-disabled

**Status:** ok

No differences found.

### Links as buttons

**Status:** differences_found

#### Structural Differences
- PF includes danger link variant; PFJ does not

#### Attribute Differences
- `tabindex` on `<a>` (disabled tertiary link) — PF has tabindex="0" on disabled tertiary link; PFJ does not

### Inline link as span

**Status:** ok

No differences found.

### Block level

**Status:** ok

No differences found.

### Types

**Status:** ok

No differences found.

### Call to action

**Status:** ok

No differences found.

### Progress

**Status:** ok

No differences found.

### Circle buttons

**Status:** differences_found

#### Structural Differences
- PF includes progress/spinner circle button variants; PFJ does not

### Counts

**Status:** ok

No differences found.

### Plain with no padding

**Status:** ok

No differences found.

### Favorite

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-favorite` on `<button>` — PFJ is missing pf-m-favorite modifier on button
- `.pf-m-favorited` on `<button>` — PFJ uses pf-m-clicked instead of pf-m-favorited for active state

#### Structural Differences
- PFJ uses single icon instead of dual pf-v6-c-button__icon-favorite + pf-v6-c-button__icon-favorited sub-spans

#### Icon Differences
- PFJ uses different icon set (viewBox 0 0 32 32 vs PF's 0 0 576 512)

### Settings

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-settings` on `<button>` — PFJ is missing pf-m-settings modifier on button

### Hamburger

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — PFJ is missing pf-m-hamburger modifier on button

#### Extra CSS Classes
- `fill="currentColor"` on `<svg>` — PFJ has fill="currentColor", aria-hidden="true", role="img" on SVG; PF animated SVG does not

#### Structural Differences
- PFJ uses static FontAwesome bars icon (viewBox 0 0 448 512) instead of custom animated 4-path SVG (viewBox 0 0 10 10)
- PFJ SVG is missing the 4 named path classes: pf-v6-c-button--hamburger-icon--top, --middle, --arrow, --bottom

#### Attribute Differences
- `aria-expanded` on `<button>` — PFJ is missing aria-expanded attribute

#### Icon Differences
- PFJ uses static FontAwesome bars icon instead of custom animated 4-path SVG

## Action Items

1. **Add variation:** Stateful — Add a dedicated Stateful snippet in the showcase (functionality exists in code)
2. **Implement feature:** Hamburger — Replace static bars icon with animated 4-path SVG, add pf-m-hamburger modifier, add aria-expanded support
3. **Implement feature:** Favorite — Replace single icon with dual-icon structure (__icon-favorite + __icon-favorited), add pf-m-favorite/pf-m-favorited modifiers
4. **Fix CSS:** Settings — Add pf-m-settings modifier to enable rotation animation on hover
5. **Fix demo:** Small buttons — Add small variants for link, inline link, plain, control
6. **Fix demo:** Links as buttons — Add danger link variant and tabindex on disabled link
7. **Fix demo:** Circle buttons — Add spinner circle button variant
