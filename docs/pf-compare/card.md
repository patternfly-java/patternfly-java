---
component: card
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/card/html
pfj_url: http://localhost:1234/components/card
completeness:
  pf_total: 31
  pfj_total: 14
  matched: 24
  missing_in_pfj:
    - with-subtitle
    - with-only-image-in-head
    - with-no-footer
    - with-no-title
    - with-only-a-content-section
    - selectable-secondary-style
    - actionable-secondary-style
    - actionable-and-selectable-secondary-style
    - card-with-dividers-between-sections
  extra_in_pfj:
    - with-html-heading-element
---

# PF Compare: card

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic cards | matched (semantic) |
| 2 | With image and action | Header images and actions | matched (semantic) |
| 3 | With title in head | Title inline with images and actions | matched (semantic) |
| 4 | With subtitle | --- | missing_in_pfj |
| 5 | With only actions in head (no title/footer) | Card header without title | matched (semantic) |
| 6 | Card with header that wraps | Title inline with images and actions | matched (covered — PFJ uses long title text) |
| 7 | Actions with no offset | Header images and actions | matched (covered — PFJ has "no offset" checkbox toggle) |
| 8 | With only image in head | --- | missing_in_pfj |
| 9 | With no footer | --- | missing_in_pfj |
| 10 | With no title | --- | missing_in_pfj |
| 11 | With only a content section | --- | missing_in_pfj |
| 12 | With multiple body sections | With multiple body sections | matched (semantic) |
| 13 | With only one body that fills | With a primary body section that fills | matched (semantic) |
| 14 | Compact | Modifiers | matched (semantic — PFJ uses interactive checkbox toggles) |
| 15 | Large | Modifiers | matched (covered by Modifiers snippet) |
| 16 | Selectable | Selectable | matched (exact) |
| 17 | Selectable secondary style | --- | missing_in_pfj |
| 18 | Single selectable | Single selectable | matched (exact) |
| 19 | Actionable (button) | Clickable | matched (semantic) |
| 20 | Actionable (link) | Clickable | matched (covered — PFJ includes link variant) |
| 21 | Actionable secondary style | --- | missing_in_pfj |
| 22 | Actionable and selectable | Clickable and selectable | matched (semantic) |
| 23 | Actionable and selectable secondary style | --- | missing_in_pfj |
| 24 | Secondary | Modifiers | matched (covered by Modifiers snippet) |
| 25 | Plain | Modifiers | matched (covered by Modifiers snippet) |
| 26 | Expandable | Expandable cards | matched (semantic) |
| 27 | Expandable with image | Expandable with icon | matched (semantic) |
| 28 | Expanded | Expandable cards | matched (covered — PFJ shows expand toggle) |
| 29 | Full height card | Modifiers | matched (covered — PFJ has fullHeight checkbox) |
| 30 | Expandable toggle on right | Expandable cards | matched (covered — PFJ 3rd card shows toggle-right) |
| 31 | Card with dividers between sections | --- | missing_in_pfj |
| — | --- | With HTML heading element | extra_in_pfj |

## DOM Comparison

### Basic ↔ Basic cards

**Status:** differences_found

#### Structural Differences
- PF uses `<h2 class="pf-v6-c-card__title-text">` for the title text element; PFJ uses `<div class="pf-v6-c-card__title-text">` — heading level missing in PFJ

### With image and action ↔ Header images and actions

**Status:** ok — Both render `pf-v6-c-card__header` with `pf-v6-c-card__actions` containing kebab menu toggle and checkbox, plus `pf-v6-c-card__header-main` with image.

### Compact / Large / Plain / Secondary ↔ Modifiers

**Status:** ok — PFJ uses interactive checkboxes to toggle modifiers (`pf-m-compact`, `pf-m-display-lg`, `pf-m-plain`, `pf-m-flat`, `pf-m-rounded`, `pf-m-full-height`). All CSS class names match PF.

### Selectable ↔ Selectable

**Status:** ok — Both use `pf-m-selectable` with `pf-v6-c-card__selectable-actions` containing checkbox input.

### Single selectable ↔ Single selectable

**Status:** ok — Both use `pf-m-selectable` with radio inputs.

### Actionable (button) ↔ Clickable

**Status:** ok — Both use `pf-m-clickable` with `pf-v6-c-card__clickable-action` containing a button/link.

### Expandable ↔ Expandable cards

**Status:** ok — Both use `pf-v6-c-card__header-toggle` with expand button, `pf-v6-c-card__expandable-content` for hidden body. PFJ includes toggle-on-right variant in same snippet.

### With subtitle

**Status:** missing_in_pfj — PF has `<div class="pf-v6-c-card__subtitle">` inside `pf-v6-c-card__title`. This is the new CardTitle subtitle feature (beta in PF 6.5.1). PFJ does not have a `CardSubtitle` sub-component or `subtitle()` method on CardTitle.

## Action Items

1. **Add sub-component:** CardSubtitle — implement `pf-v6-c-card__subtitle` element inside CardTitle to support the new subtitle feature (beta)
2. **Add variation:** Selectable secondary style — add showcase demo with `pf-m-secondary` on selectable cards
3. **Add variation:** Actionable secondary style — add showcase demo with `pf-m-secondary` on clickable cards
4. **Add variation:** Actionable and selectable secondary style — add showcase demo combining both with secondary
5. **Add variation:** Card with dividers between sections — add showcase demo using `<hr class="pf-v6-c-divider">` between card body sections
6. **Add variation:** With only image in head — add showcase demo with header containing only an image (no title, no actions)
7. **Fix structure:** Basic cards — consider using `<h2>` (or configurable heading level) for `pf-v6-c-card__title-text` instead of `<div>` to match PF's semantic heading structure
8. **Add variation (low priority):** With no footer, With no title, With only a content section — trivial layout combinations, low value as showcase demos
