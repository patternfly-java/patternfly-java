---
component: button
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/button/html
pfj_url: http://localhost:1234/components/button
completeness:
  pf_total: 18
  pfj_total: 8
  matched: 9
  missing_in_pfj:
    - clicked-buttons
    - aria-disabled
    - inline-link-as-span
    - types
    - circle-buttons
    - plain-with-no-padding
    - favorite
    - settings
    - hamburger
  extra_in_pfj: []
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Variant examples | matched (semantic — PFJ combines basic variants, icons, and stateful) |
| 2 | Clicked buttons | --- | missing_in_pfj |
| 3 | Small buttons | Small buttons | matched (semantic) |
| 4 | Disabled | Disabled buttons | matched (semantic) |
| 5 | Aria-disabled | --- | missing_in_pfj |
| 6 | Links as buttons | Links as buttons | matched (exact) |
| 7 | Inline link as span | --- | missing_in_pfj |
| 8 | Block level | Block level buttons | matched (semantic) |
| 9 | Types | --- | missing_in_pfj |
| 10 | Call to action | Call to action (CTA) buttons | matched (semantic) |
| 11 | Progress | Progress indicators | matched (semantic) |
| 12 | Circle buttons | --- | missing_in_pfj |
| 13 | Counts | Button with count | matched (semantic) |
| 14 | Plain with no padding | --- | missing_in_pfj |
| 15 | Stateful | Variant examples | matched (semantic — PFJ includes stateful buttons in variant examples) |
| 16 | Favorite | --- | missing_in_pfj |
| 17 | Settings | --- | missing_in_pfj |
| 18 | Hamburger | --- | missing_in_pfj |

## DOM Comparison

### Variations ↔ Variant examples

**Status:** differences_found

#### Icon Differences
- Plain button close icon — PF uses viewBox `0 0 20 20` (rhMicrons close), PFJ uses viewBox `0 0 32 32` (rhUi close) — different icon set
- Control copy icon — PF uses viewBox `0 0 32 32` (rhUi copy), PFJ uses viewBox `0 0 448 512` (FontAwesome copy) — PFJ still uses FontAwesome

#### Structural Differences
- PF "Variations" includes "Icon start", "Icon end", and "Plain with text" sub-sections with icons on all variant types — PFJ "Variant examples" shows a single "Primary with icon" button with trailing icon but does not repeat icon variations for every button type
- PF has two plain buttons (icon-only and "Plain with text" with `pf-m-start` icon) — PFJ has one plain button (icon-only)

### Clicked buttons

**Status:** missing_in_pfj — PF shows all variants with `pf-m-clicked` modifier applied. This is a CSS state modifier; PFJ likely handles via event handlers rather than a static demo.

### Small buttons ↔ Small buttons

**Status:** ok — DOM structure matches. Both apply `pf-m-small` modifier to all variant types.

### Disabled ↔ Disabled buttons

**Status:** ok — Both use `pf-m-disabled`, `disabled` attribute, and `aria-disabled="true"`.

### Links as buttons ↔ Links as buttons

**Status:** ok — Both use `<a>` elements with `pf-v6-c-button` classes. PFJ includes a disabled tertiary link with `pf-m-disabled` and `aria-disabled="true"`.

### Block level ↔ Block level buttons

**Status:** ok — Both use `pf-m-block` modifier.

### Call to action ↔ Call to action (CTA) buttons

**Status:** differences_found

#### Icon Differences
- Link CTA arrow icon — PF uses viewBox `0 0 448 512` (FontAwesome arrow-right), PFJ uses viewBox `0 0 512 512` (FontAwesome arrow-right) — different viewBox dimensions suggest different icon versions

### Progress ↔ Progress indicators

**Status:** differences_found

#### Icon Differences
- Upload icon on plain button — PF uses viewBox `0 0 512 512` (FontAwesome upload), PFJ uses viewBox `0 0 448 512` (FontAwesome upload) — different viewBox dimensions

### Counts ↔ Button with count

**Status:** ok — DOM structure matches. Both use `pf-v6-c-button__count` containing `pf-v6-c-badge` with `pf-m-unread` / `pf-m-read` modifiers.

## Action Items

1. **Add variation:** Circle buttons — implement `pf-m-circle` modifier demo in showcase
2. **Add variation:** Clicked buttons — add showcase demo showing `pf-m-clicked` modifier on all variants
3. **Add variation:** Aria-disabled — add showcase demo with `aria-disabled="true"` without `disabled` attribute (for focusable disabled buttons)
4. **Add variation:** Inline link as span — add demo using `<span>` instead of `<button>` for inline links
5. **Add variation:** Types — add demo showing `type="submit"`, `type="reset"`, `type="button"` attributes
6. **Add variation:** Plain with no padding — add `pf-m-no-padding` modifier demo
7. **Add variation:** Favorite — add favorite button demo with star icon toggle
8. **Add variation:** Settings — add settings button demo with settings/cog icon
9. **Add variation:** Hamburger — add hamburger menu button demo with bars icon
10. **Fix icon:** Variant examples — replace FontAwesome copy icon (viewBox `0 0 448 512`) with RH UI copy icon (viewBox `0 0 32 32`) on control button
11. **Fix icon:** Variant examples — verify close icon uses rhMicrons (viewBox `0 0 20 20`) not rhUi (viewBox `0 0 32 32`) on plain button
12. **Fix icon:** Call to action — verify arrow-right icon viewBox matches PF
13. **Fix icon:** Progress — verify upload icon viewBox matches PF
