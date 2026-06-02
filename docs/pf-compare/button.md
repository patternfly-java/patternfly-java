---
component: button
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/button/html
pfj_url: http://localhost:1234/components/button
completeness:
  pf_total: 18
  pfj_total: 17
  matched: 15
  missing_in_pfj:
    - variations
    - counts
    - stateful
  extra_in_pfj:
    - button-variant-examples
    - button-count
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Clicked buttons | Clicked buttons | matched (exact) |
| 2 | Small buttons | Small buttons | matched (exact) |
| 3 | Disabled | Disabled buttons | matched (semantic) |
| 4 | Aria-disabled | Aria-disabled | matched (exact) |
| 5 | Links as buttons | Links as buttons | matched (exact) |
| 6 | Inline link as span | Inline link as span | matched (exact) |
| 7 | Block level | Block level buttons | matched (semantic) |
| 8 | Types | Types | matched (exact) |
| 9 | Call to action | Call to action (CTA) buttons | matched (semantic) |
| 10 | Progress | Progress indicators | matched (semantic) |
| 11 | Circle buttons | Circle buttons | matched (exact) |
| 12 | Plain with no padding | Plain with no padding | matched (exact) |
| 13 | Favorite | Favorite | matched (exact) |
| 14 | Settings | Settings | matched (exact) |
| 15 | Hamburger | Hamburger | matched (exact) |
| 16 | Variations | --- | missing_in_pfj |
| 17 | Counts | --- | missing_in_pfj |
| 18 | Stateful | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Variant examples (`button-variant-examples`)
- Button with count (`button-count`)

## DOM Comparison

### Clicked buttons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-end` on `<span>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-column-gap-sm` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-lg` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-clicked pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF

#### Attribute Differences
- aria-label="Copy input" on <button> — present in PF, absent in PFJ
- aria-label="Remove" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Small buttons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-control` on `<button>` — present in PF, absent in PFJ
- `.pf-m-end` on `<span>` — present in PF, absent in PFJ
- `.pf-m-inline` on `<button>` — present in PF, absent in PFJ
- `.pf-m-link` on `<button>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-svg` on `<svg>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-control pf-m-small pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-danger pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-inline pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-plain pf-m-small pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ

#### Attribute Differences
- aria-hidden="true" on <svg> — present in PF, absent in PFJ
- aria-label="Copy input" on <button> — present in PF, absent in PFJ
- aria-label="Remove" on <button> — present in PF, absent in PFJ
- role="img" on <svg> — present in PF, absent in PFJ

### Disabled

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-end` on `<span>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-column-gap-sm` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-lg` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-danger pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-primary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-secondary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-tertiary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-warning pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-danger pf-m-disabled pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-danger pf-m-disabled pf-m-secondary pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-danger pf-m-disabled pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-primary pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-secondary pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-tertiary pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-warning pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF

#### Attribute Differences
- aria-label="Copy input" on <button> — present in PF, absent in PFJ
- aria-label="Remove" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Aria-disabled

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-end` on `<span>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-column-gap-sm` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-lg` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-aria-disabled pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-aria-disabled pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF

#### Attribute Differences
- aria-label="Copy input" on <button> — present in PF, absent in PFJ
- aria-label="Remove" on <button> — present in PF, absent in PFJ

### Links as buttons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-danger` on `<a>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <a class="pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <a class="pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ

#### Attribute Differences
- aria-label="Read more about button documentation" on <a> — present in PF, absent in PFJ
- tabindex="-1" on <a> — present in PF, absent in PFJ

### Inline link as span

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-no-padding` on `<span>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-svg` on `<svg>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <span class="pf-m-no-padding pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <span class="pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <span class="pf-v6-c-button__text"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <svg> — present in PF, absent in PFJ
- aria-label="Remove" on <span> — present in PF, absent in PFJ
- role="img" on <svg> — present in PF, absent in PFJ
- type="button" on <span> — present in PF, absent in PFJ

### Block level

**Status:** ok

No differences found.

### Types

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-secondary` on `<button>` — present in PFJ, absent in PF
- `.pf-m-tertiary` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <button class="pf-m-secondary pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-tertiary pf-v6-c-button"> — not in PF

### Call to action

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-end` on `<span>` — present in PF, absent in PFJ
- `.pf-m-inline` on `<button>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-display-lg pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-end pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 512 512`

### Progress

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-column-gap-sm` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-lg` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-in-progress pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-inline pf-m-link pf-m-progress pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-primary pf-m-progress pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-progress pf-m-secondary pf-v6-c-button"> — missing in PFJ
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
- PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF

#### Attribute Differences
- aria-label="Upload" on <button> — present in PF, absent in PFJ
- aria-label="Uploading..." on <svg> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`

### Circle buttons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-control` on `<button>` — present in PF, absent in PFJ
- `.pf-m-in-progress` on `<button>` — present in PF, absent in PFJ
- `.pf-m-md` on `<svg>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ
- `.pf-m-tertiary` on `<button>` — present in PF, absent in PFJ
- `.pf-m-warning` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__progress` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-spinner` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-spinner__path` on `<circle>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-circle pf-m-control pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-circle pf-m-in-progress pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-circle pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-circle pf-m-tertiary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-circle pf-m-warning pf-v6-c-button"> — missing in PFJ
- PF has <circle class="pf-v6-c-spinner__path"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PF has <span class="pf-v6-c-button__progress"> — missing in PFJ
- PF has <svg class="pf-m-md pf-v6-c-spinner"> — missing in PFJ

#### Attribute Differences
- aria-label="Add danger circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Add link circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Add primary circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Add secondary circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Add tertiary circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Add warning circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Copy control circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Remove plain circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Upload circle variant" on <button> — present in PF, absent in PFJ
- aria-label="Uploading circle variant..." on <svg> — present in PF, absent in PFJ
- role="progressbar" on <svg> — present in PF, absent in PFJ

### Plain with no padding

**Status:** differences_found

#### Attribute Differences
- aria-label="More info" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 20 20`

### Favorite

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-favorite` on `<button>` — present in PF, absent in PFJ
- `.pf-m-favorited` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon-favorite` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon-favorited` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-clicked` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-favorite pf-m-favorited pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-favorite pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-button__icon-favorite"> — missing in PFJ
- PF has <span class="pf-v6-c-button__icon-favorited"> — missing in PFJ
- PFJ has <button class="pf-m-clicked pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF

#### Attribute Differences
- aria-label="not starred" on <button> — present in PF, absent in PFJ
- aria-label="starred" on <button> — present in PF, absent in PFJ
- aria-label="Favorite" on <button> — present in PFJ, absent in PF
- aria-label="Favorited" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 576 512`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 576 512`, PFJ uses viewBox `0 0 32 32`

### Settings

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-settings` on `<button>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-plain pf-m-settings pf-v6-c-button"> — missing in PFJ
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF

### Hamburger

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-collapse` on `<button>` — present in PF, absent in PFJ
- `.pf-m-expand` on `<button>` — present in PF, absent in PFJ
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-collapse pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-expand pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <path class="pf-v6-c-button--hamburger-icon--arrow"> — missing in PFJ
- PF has <path class="pf-v6-c-button--hamburger-icon--bottom"> — missing in PFJ
- PF has <path class="pf-v6-c-button--hamburger-icon--middle"> — missing in PFJ
- PF has <path class="pf-v6-c-button--hamburger-icon--top"> — missing in PFJ
- PF has <svg class="pf-v6-c-button--hamburger-icon pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Hamburger" on <button> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Menu" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 448 512`

## Action Items

1. **Add variation:** Variations — implement Variations variation in PFJ
2. **Add variation:** Counts — implement Counts variation in PFJ
3. **Add variation:** Stateful — implement Stateful variation in PFJ
4. **Fix CSS:** Clicked buttons — add missing class pf-m-end on <span>
5. **Fix CSS:** Clicked buttons — add missing class pf-m-start on <span>
6. **Fix structure:** Clicked buttons — PF has <button class="pf-m-clicked pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
7. **Fix structure:** Clicked buttons — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
8. **Fix structure:** Clicked buttons — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
9. **Fix structure:** Clicked buttons — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF
10. **Fix attribute:** Clicked buttons — aria-label="Copy input" on <button> — present in PF, absent in PFJ
11. **Fix attribute:** Clicked buttons — aria-label="Remove" on <button> — present in PF, absent in PFJ
12. **Fix icon:** Clicked buttons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
13. **Fix CSS:** Small buttons — add missing class pf-m-control on <button>
14. **Fix CSS:** Small buttons — add missing class pf-m-end on <span>
15. **Fix CSS:** Small buttons — add missing class pf-m-inline on <button>
16. **Fix CSS:** Small buttons — add missing class pf-m-link on <button>
17. **Fix CSS:** Small buttons — add missing class pf-m-plain on <button>
18. **Fix CSS:** Small buttons — add missing class pf-m-start on <span>
19. **Fix CSS:** Small buttons — add missing class pf-v6-c-button__icon on <span>
20. **Fix CSS:** Small buttons — add missing class pf-v6-svg on <svg>
21. **Fix structure:** Small buttons — PF has <button class="pf-m-control pf-m-small pf-v6-c-button"> — missing in PFJ
22. **Fix structure:** Small buttons — PF has <button class="pf-m-danger pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
23. **Fix structure:** Small buttons — PF has <button class="pf-m-inline pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
24. **Fix structure:** Small buttons — PF has <button class="pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
25. **Fix structure:** Small buttons — PF has <button class="pf-m-plain pf-m-small pf-v6-c-button"> — missing in PFJ
26. **Fix structure:** Small buttons — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
27. **Fix structure:** Small buttons — PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
28. **Fix structure:** Small buttons — PF has <svg class="pf-v6-svg"> — missing in PFJ
29. **Fix attribute:** Small buttons — aria-hidden="true" on <svg> — present in PF, absent in PFJ
30. **Fix attribute:** Small buttons — aria-label="Copy input" on <button> — present in PF, absent in PFJ
31. **Fix attribute:** Small buttons — aria-label="Remove" on <button> — present in PF, absent in PFJ
32. **Fix attribute:** Small buttons — role="img" on <svg> — present in PF, absent in PFJ
33. **Fix CSS:** Disabled — add missing class pf-m-end on <span>
34. **Fix CSS:** Disabled — add missing class pf-m-start on <span>
35. **Fix structure:** Disabled — PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
36. **Fix structure:** Disabled — PF has <button class="pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
37. **Fix structure:** Disabled — PF has <button class="pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ
38. **Fix structure:** Disabled — PF has <button class="pf-m-danger pf-v6-c-button"> — missing in PFJ
39. **Fix structure:** Disabled — PF has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
40. **Fix structure:** Disabled — PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
41. **Fix structure:** Disabled — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
42. **Fix structure:** Disabled — PF has <button class="pf-m-primary pf-v6-c-button"> — missing in PFJ
43. **Fix structure:** Disabled — PF has <button class="pf-m-secondary pf-v6-c-button"> — missing in PFJ
44. **Fix structure:** Disabled — PF has <button class="pf-m-tertiary pf-v6-c-button"> — missing in PFJ
45. **Fix structure:** Disabled — PF has <button class="pf-m-warning pf-v6-c-button"> — missing in PFJ
46. **Fix structure:** Disabled — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
47. **Fix structure:** Disabled — PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF
48. **Fix structure:** Disabled — PFJ has <button class="pf-m-danger pf-m-disabled pf-m-link pf-v6-c-button"> — not in PF
49. **Fix structure:** Disabled — PFJ has <button class="pf-m-danger pf-m-disabled pf-m-secondary pf-v6-c-button"> — not in PF
50. **Fix structure:** Disabled — PFJ has <button class="pf-m-danger pf-m-disabled pf-v6-c-button"> — not in PF
51. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
52. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-link pf-v6-c-button"> — not in PF
53. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
54. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-primary pf-v6-c-button"> — not in PF
55. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-secondary pf-v6-c-button"> — not in PF
56. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-tertiary pf-v6-c-button"> — not in PF
57. **Fix structure:** Disabled — PFJ has <button class="pf-m-disabled pf-m-warning pf-v6-c-button"> — not in PF
58. **Fix structure:** Disabled — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
59. **Fix structure:** Disabled — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF
60. **Fix attribute:** Disabled — aria-label="Copy input" on <button> — present in PF, absent in PFJ
61. **Fix attribute:** Disabled — aria-label="Remove" on <button> — present in PF, absent in PFJ
62. **Fix attribute:** Disabled — aria-disabled="true" on <button> — present in PFJ, absent in PF
63. **Fix icon:** Disabled — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
64. **Fix CSS:** Aria-disabled — add missing class pf-m-end on <span>
65. **Fix CSS:** Aria-disabled — add missing class pf-m-start on <span>
66. **Fix structure:** Aria-disabled — PF has <button class="pf-m-aria-disabled pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
67. **Fix structure:** Aria-disabled — PF has <button class="pf-m-aria-disabled pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ
68. **Fix structure:** Aria-disabled — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
69. **Fix structure:** Aria-disabled — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
70. **Fix structure:** Aria-disabled — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF
71. **Fix attribute:** Aria-disabled — aria-label="Copy input" on <button> — present in PF, absent in PFJ
72. **Fix attribute:** Aria-disabled — aria-label="Remove" on <button> — present in PF, absent in PFJ
73. **Fix CSS:** Links as buttons — add missing class pf-m-danger on <a>
74. **Fix structure:** Links as buttons — PF has <a class="pf-m-danger pf-m-link pf-v6-c-button"> — missing in PFJ
75. **Fix structure:** Links as buttons — PF has <a class="pf-m-danger pf-m-secondary pf-v6-c-button"> — missing in PFJ
76. **Fix attribute:** Links as buttons — aria-label="Read more about button documentation" on <a> — present in PF, absent in PFJ
77. **Fix attribute:** Links as buttons — tabindex="-1" on <a> — present in PF, absent in PFJ
78. **Fix CSS:** Inline link as span — add missing class pf-m-no-padding on <span>
79. **Fix CSS:** Inline link as span — add missing class pf-m-plain on <span>
80. **Fix CSS:** Inline link as span — add missing class pf-v6-c-button__icon on <span>
81. **Fix CSS:** Inline link as span — add missing class pf-v6-svg on <svg>
82. **Fix structure:** Inline link as span — PF has <span class="pf-m-no-padding pf-m-plain pf-v6-c-button"> — missing in PFJ
83. **Fix structure:** Inline link as span — PF has <span class="pf-m-plain pf-v6-c-button"> — missing in PFJ
84. **Fix structure:** Inline link as span — PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
85. **Fix structure:** Inline link as span — PF has <svg class="pf-v6-svg"> — missing in PFJ
86. **Fix structure:** Inline link as span — PFJ has <span class="pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
87. **Fix structure:** Inline link as span — PFJ has <span class="pf-v6-c-button__text"> — not in PF
88. **Fix attribute:** Inline link as span — aria-hidden="true" on <svg> — present in PF, absent in PFJ
89. **Fix attribute:** Inline link as span — aria-label="Remove" on <span> — present in PF, absent in PFJ
90. **Fix attribute:** Inline link as span — role="img" on <svg> — present in PF, absent in PFJ
91. **Fix attribute:** Inline link as span — type="button" on <span> — present in PF, absent in PFJ
92. **Fix structure:** Types — PFJ has <button class="pf-m-secondary pf-v6-c-button"> — not in PF
93. **Fix structure:** Types — PFJ has <button class="pf-m-tertiary pf-v6-c-button"> — not in PF
94. **Fix CSS:** Call to action — add missing class pf-m-end on <span>
95. **Fix CSS:** Call to action — add missing class pf-m-inline on <button>
96. **Fix structure:** Call to action — PF has <button class="pf-m-display-lg pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
97. **Fix structure:** Call to action — PF has <span class="pf-m-end pf-v6-c-button__icon"> — missing in PFJ
98. **Fix structure:** Call to action — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
99. **Fix icon:** Call to action — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 512 512
100. **Fix structure:** Progress — PF has <button class="pf-m-in-progress pf-m-plain pf-v6-c-button"> — missing in PFJ
101. **Fix structure:** Progress — PF has <button class="pf-m-inline pf-m-link pf-m-progress pf-v6-c-button"> — missing in PFJ
102. **Fix structure:** Progress — PF has <button class="pf-m-primary pf-m-progress pf-v6-c-button"> — missing in PFJ
103. **Fix structure:** Progress — PF has <button class="pf-m-progress pf-m-secondary pf-v6-c-button"> — missing in PFJ
104. **Fix structure:** Progress — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex pf-v6-u-mt-lg"> — not in PF
105. **Fix structure:** Progress — PFJ has <div class="pf-m-column-gap-sm pf-v6-l-flex"> — not in PF
106. **Fix attribute:** Progress — aria-label="Upload" on <button> — present in PF, absent in PFJ
107. **Fix attribute:** Progress — aria-label="Uploading..." on <svg> — present in PF, absent in PFJ
108. **Fix icon:** Progress — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
109. **Fix CSS:** Circle buttons — add missing class pf-m-control on <button>
110. **Fix CSS:** Circle buttons — add missing class pf-m-in-progress on <button>
111. **Fix CSS:** Circle buttons — add missing class pf-m-md on <svg>
112. **Fix CSS:** Circle buttons — add missing class pf-m-plain on <button>
113. **Fix CSS:** Circle buttons — add missing class pf-m-start on <span>
114. **Fix CSS:** Circle buttons — add missing class pf-m-tertiary on <button>
115. **Fix CSS:** Circle buttons — add missing class pf-m-warning on <button>
116. **Fix CSS:** Circle buttons — add missing class pf-v6-c-button__progress on <span>
117. **Fix CSS:** Circle buttons — add missing class pf-v6-c-spinner on <svg>
118. **Fix CSS:** Circle buttons — add missing class pf-v6-c-spinner__path on <circle>
119. **Fix structure:** Circle buttons — PF has <button class="pf-m-circle pf-m-control pf-v6-c-button"> — missing in PFJ
120. **Fix structure:** Circle buttons — PF has <button class="pf-m-circle pf-m-in-progress pf-m-plain pf-v6-c-button"> — missing in PFJ
121. **Fix structure:** Circle buttons — PF has <button class="pf-m-circle pf-m-plain pf-v6-c-button"> — missing in PFJ
122. **Fix structure:** Circle buttons — PF has <button class="pf-m-circle pf-m-tertiary pf-v6-c-button"> — missing in PFJ
123. **Fix structure:** Circle buttons — PF has <button class="pf-m-circle pf-m-warning pf-v6-c-button"> — missing in PFJ
124. **Fix structure:** Circle buttons — PF has <circle class="pf-v6-c-spinner__path"> — missing in PFJ
125. **Fix structure:** Circle buttons — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
126. **Fix structure:** Circle buttons — PF has <span class="pf-v6-c-button__progress"> — missing in PFJ
127. **Fix structure:** Circle buttons — PF has <svg class="pf-m-md pf-v6-c-spinner"> — missing in PFJ
128. **Fix attribute:** Circle buttons — aria-label="Add danger circle variant" on <button> — present in PF, absent in PFJ
129. **Fix attribute:** Circle buttons — aria-label="Add link circle variant" on <button> — present in PF, absent in PFJ
130. **Fix attribute:** Circle buttons — aria-label="Add primary circle variant" on <button> — present in PF, absent in PFJ
131. **Fix attribute:** Circle buttons — aria-label="Add secondary circle variant" on <button> — present in PF, absent in PFJ
132. **Fix attribute:** Circle buttons — aria-label="Add tertiary circle variant" on <button> — present in PF, absent in PFJ
133. **Fix attribute:** Circle buttons — aria-label="Add warning circle variant" on <button> — present in PF, absent in PFJ
134. **Fix attribute:** Circle buttons — aria-label="Copy control circle variant" on <button> — present in PF, absent in PFJ
135. **Fix attribute:** Circle buttons — aria-label="Remove plain circle variant" on <button> — present in PF, absent in PFJ
136. **Fix attribute:** Circle buttons — aria-label="Upload circle variant" on <button> — present in PF, absent in PFJ
137. **Fix attribute:** Circle buttons — aria-label="Uploading circle variant..." on <svg> — present in PF, absent in PFJ
138. **Fix attribute:** Circle buttons — role="progressbar" on <svg> — present in PF, absent in PFJ
139. **Fix attribute:** Plain with no padding — aria-label="More info" on <button> — present in PF, absent in PFJ
140. **Fix icon:** Plain with no padding — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 20 20
141. **Fix CSS:** Favorite — add missing class pf-m-favorite on <button>
142. **Fix CSS:** Favorite — add missing class pf-m-favorited on <button>
143. **Fix CSS:** Favorite — add missing class pf-v6-c-button__icon-favorite on <span>
144. **Fix CSS:** Favorite — add missing class pf-v6-c-button__icon-favorited on <span>
145. **Fix structure:** Favorite — PF has <button class="pf-m-favorite pf-m-favorited pf-m-plain pf-v6-c-button"> — missing in PFJ
146. **Fix structure:** Favorite — PF has <button class="pf-m-favorite pf-m-plain pf-v6-c-button"> — missing in PFJ
147. **Fix structure:** Favorite — PF has <span class="pf-v6-c-button__icon-favorite"> — missing in PFJ
148. **Fix structure:** Favorite — PF has <span class="pf-v6-c-button__icon-favorited"> — missing in PFJ
149. **Fix structure:** Favorite — PFJ has <button class="pf-m-clicked pf-m-plain pf-v6-c-button"> — not in PF
150. **Fix structure:** Favorite — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
151. **Fix attribute:** Favorite — aria-label="not starred" on <button> — present in PF, absent in PFJ
152. **Fix attribute:** Favorite — aria-label="starred" on <button> — present in PF, absent in PFJ
153. **Fix attribute:** Favorite — aria-label="Favorite" on <button> — present in PFJ, absent in PF
154. **Fix attribute:** Favorite — aria-label="Favorited" on <button> — present in PFJ, absent in PF
155. **Fix icon:** Favorite — icon mismatch on pf-v6-svg: PF viewBox=0 0 576 512, PFJ viewBox=0 0 32 32
156. **Fix icon:** Favorite — icon mismatch on pf-v6-svg: PF viewBox=0 0 576 512, PFJ viewBox=0 0 32 32
157. **Fix CSS:** Settings — add missing class pf-m-settings on <button>
158. **Fix structure:** Settings — PF has <button class="pf-m-plain pf-m-settings pf-v6-c-button"> — missing in PFJ
159. **Fix structure:** Settings — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
160. **Fix CSS:** Hamburger — add missing class pf-m-collapse on <button>
161. **Fix CSS:** Hamburger — add missing class pf-m-expand on <button>
162. **Fix CSS:** Hamburger — add missing class pf-m-hamburger on <button>
163. **Fix CSS:** Hamburger — add missing class pf-v6-c-button--hamburger-icon on <svg>
164. **Fix CSS:** Hamburger — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
165. **Fix CSS:** Hamburger — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
166. **Fix CSS:** Hamburger — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
167. **Fix CSS:** Hamburger — add missing class pf-v6-c-button--hamburger-icon--top on <path>
168. **Fix structure:** Hamburger — PF has <button class="pf-m-collapse pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
169. **Fix structure:** Hamburger — PF has <button class="pf-m-expand pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
170. **Fix structure:** Hamburger — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
171. **Fix structure:** Hamburger — PF has <path class="pf-v6-c-button--hamburger-icon--arrow"> — missing in PFJ
172. **Fix structure:** Hamburger — PF has <path class="pf-v6-c-button--hamburger-icon--bottom"> — missing in PFJ
173. **Fix structure:** Hamburger — PF has <path class="pf-v6-c-button--hamburger-icon--middle"> — missing in PFJ
174. **Fix structure:** Hamburger — PF has <path class="pf-v6-c-button--hamburger-icon--top"> — missing in PFJ
175. **Fix structure:** Hamburger — PF has <svg class="pf-v6-c-button--hamburger-icon pf-v6-svg"> — missing in PFJ
176. **Fix structure:** Hamburger — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
177. **Fix structure:** Hamburger — PFJ has <svg class="pf-v6-svg"> — not in PF
178. **Fix attribute:** Hamburger — aria-expanded="false" on <button> — present in PF, absent in PFJ
179. **Fix attribute:** Hamburger — aria-expanded="true" on <button> — present in PF, absent in PFJ
180. **Fix attribute:** Hamburger — aria-label="Hamburger" on <button> — present in PF, absent in PFJ
181. **Fix attribute:** Hamburger — aria-hidden="true" on <svg> — present in PFJ, absent in PF
182. **Fix attribute:** Hamburger — aria-label="Menu" on <button> — present in PFJ, absent in PF
183. **Fix attribute:** Hamburger — role="img" on <svg> — present in PFJ, absent in PF
184. **Fix icon:** Hamburger — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 448 512
