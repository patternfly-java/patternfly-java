---
component: card
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/card/html
pfj_url: http://localhost:1234/components/card
completeness:
  pf_total: 31
  pfj_total: 17
  matched: 13
  missing_in_pfj:
    - with-subtitle
    - with-only-actions-in-head-no-titlefooter
    - actions-with-no-offset
    - with-only-image-in-head
    - with-no-footer
    - with-no-title
    - compact
    - large
    - actionable-button
    - actionable-link
    - actionable-secondary-style
    - actionable-and-selectable-secondary-style
    - secondary
    - plain
    - expanded
    - full-height-card
    - expandable-toggle-on-right
    - card-with-dividers-between-sections
  extra_in_pfj:
    - card-modifiers
    - card-title-inline
    - card-heading
    - card-clickable
---

# PF Compare: card

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic cards | matched (semantic) |
| 2 | With image and action | Header images and actions | matched (semantic) |
| 3 | With title in head | With subtitle | matched (semantic) |
| 4 | Card with header that wraps | Card header without title | matched (semantic) |
| 5 | With only a content section | With dividers between sections | matched (semantic) |
| 6 | With multiple body sections | With multiple body sections | matched (exact) |
| 7 | With only one body that fills | With a primary body section that fills | matched (semantic) |
| 8 | Selectable | Selectable | matched (exact) |
| 9 | Selectable secondary style | Secondary | matched (semantic) |
| 10 | Single selectable | Single selectable | matched (exact) |
| 11 | Actionable and selectable | Clickable and selectable | matched (semantic) |
| 12 | Expandable | Expandable cards | matched (semantic) |
| 13 | Expandable with image | Expandable with icon | matched (semantic) |
| 14 | With subtitle | --- | missing_in_pfj |
| 15 | With only actions in head (no title/footer) | --- | missing_in_pfj |
| 16 | Actions with no offset | --- | missing_in_pfj |
| 17 | With only image in head | --- | missing_in_pfj |
| 18 | With no footer | --- | missing_in_pfj |
| 19 | With no title | --- | missing_in_pfj |
| 20 | Compact | --- | missing_in_pfj |
| 21 | Large | --- | missing_in_pfj |
| 22 | Actionable (button) | --- | missing_in_pfj |
| 23 | Actionable (link) | --- | missing_in_pfj |
| 24 | Actionable secondary style | --- | missing_in_pfj |
| 25 | Actionable and selectable secondary style | --- | missing_in_pfj |
| 26 | Secondary | --- | missing_in_pfj |
| 27 | Plain | --- | missing_in_pfj |
| 28 | Expanded | --- | missing_in_pfj |
| 29 | Full height card | --- | missing_in_pfj |
| 30 | Expandable toggle on right | --- | missing_in_pfj |
| 31 | Card with dividers between sections | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Modifiers (`card-modifiers`)
- Title inline with images and actions (`card-title-inline`)
- With HTML heading element (`card-heading`)
- Clickable (`card-clickable`)

## DOM Comparison

### Basic

**Status:** differences_found

#### Structural Differences
- PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF

### With image and action

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-brand` on `<img>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-md` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF

#### Attribute Differences
- aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-action-example-1" on <input> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `svg` — PF uses viewBox `0 0 679 158`, PFJ uses viewBox `0 0 32 32`

### With title in head

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__actions` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__header` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__header-main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-svg` on `<svg>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-card__subtitle` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
- PF has <div class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
- PF has <div class="pf-v6-c-card__actions"> — missing in PFJ
- PF has <div class="pf-v6-c-card__header"> — missing in PFJ
- PF has <input class="pf-v6-c-check__input"> — missing in PFJ
- PF has <span class="pf-v6-c-menu-toggle__icon"> — missing in PFJ
- PFJ has <div class="pf-v6-c-card__body"> — not in PF
- PFJ has <div class="pf-v6-c-card__footer"> — not in PF
- PFJ has <div class="pf-v6-c-card__subtitle"> — not in PF
- PFJ has <div class="pf-v6-c-card__title"> — not in PF
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PF, absent in PFJ
- aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-action-example-2" on <input> — present in PF, absent in PFJ
- role="img" on <svg> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

### Card with header that wraps

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-no-offset` on `<div>` — present in PF, absent in PFJ
- `.pf-m-primary` on `<button>` — present in PF, absent in PFJ
- `.pf-m-secondary` on `<button>` — present in PF, absent in PFJ
- `.pf-m-tertiary` on `<button>` — present in PF, absent in PFJ
- `.pf-m-wrap` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-card__title` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__title-text` on `<h2>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-m-standalone` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu-toggle` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-primary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-secondary pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-tertiary pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-no-offset pf-v6-c-card__actions"> — missing in PFJ
- PF has <div class="pf-m-wrap pf-v6-c-card__header"> — missing in PFJ
- PF has <div class="pf-v6-c-card__body"> — missing in PFJ
- PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
- PF has <div class="pf-v6-c-card__title"> — missing in PFJ
- PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
- PF has <span class="pf-v6-c-button__text"> — missing in PFJ
- PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-c-card__actions"> — not in PF
- PFJ has <div class="pf-v6-c-card__header"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF

#### Attribute Differences
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-expanded="false" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

### With only a content section

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-c-card__footer` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__title` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__title-text` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<hr>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-v6-c-card__footer"> — not in PF
- PFJ has <div class="pf-v6-c-card__title"> — not in PF
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
- PFJ has <hr class="pf-v6-c-divider"> — not in PF

#### Attribute Differences
- role="separator" on <hr> — present in PFJ, absent in PF

### With multiple body sections

**Status:** differences_found

#### Structural Differences
- PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF

### With only one body that fills

**Status:** differences_found

#### Structural Differences
- PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF

### Selectable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-gutter` on `<div>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__footer` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check__label` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-l-gallery` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
- PFJ has <div class="pf-v6-c-check"> — not in PF

#### Attribute Differences
- aria-labelledby="card-selectable-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-selectable-example-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="crd-id-579" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-581" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-583" on <input> — present in PFJ, absent in PF

### Selectable secondary style

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-disabled` on `<div>` — present in PF, absent in PFJ
- `.pf-m-gutter` on `<div>` — present in PF, absent in PFJ
- `.pf-m-no-offset` on `<div>` — present in PF, absent in PFJ
- `.pf-m-selectable` on `<div>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__actions` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__header` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__header-main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__selectable-actions` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-check__label` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-l-gallery` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
- PF has <div class="pf-m-no-offset pf-v6-c-card__actions"> — missing in PFJ
- PF has <div class="pf-m-secondary pf-m-selectable pf-v6-c-card"> — missing in PFJ
- PF has <div class="pf-v6-c-card__header"> — missing in PFJ
- PF has <div class="pf-v6-c-card__selectable-actions"> — missing in PFJ
- PFJ has <div class="pf-m-secondary pf-v6-c-card"> — not in PF
- PFJ has <div class="pf-v6-c-card__body"> — not in PF
- PFJ has <div class="pf-v6-c-card__footer"> — not in PF
- PFJ has <div class="pf-v6-c-card__title"> — not in PF
- PFJ has <div class="pf-v6-c-card__title-text"> — not in PF

#### Attribute Differences
- aria-labelledby="card-selectable-secondary-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-selectable-secondary-example-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-selectable-secondary-example-selected-disabled" on <input> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

### Single selectable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-gutter` on `<div>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__footer` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-l-gallery` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-standalone` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
- PFJ has <div class="pf-m-standalone pf-v6-c-radio"> — not in PF

#### Attribute Differences
- aria-labelledby="card-single-selectable-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-single-selectable-example-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-single-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="crd-id-585" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-587" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-589" on <input> — present in PFJ, absent in PF

### Actionable and selectable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<div>` — present in PF, absent in PFJ
- `.pf-m-gutter` on `<div>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-card__footer` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-check__label` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-l-gallery` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
- PFJ has <div class="pf-v6-c-check"> — not in PF

#### Attribute Differences
- aria-labelledby="card-clickable-selectable-current-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-clickable-selectable-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-clickable-selectable-example-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-clickable-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
- aria-labelledby="crd-id-597" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-599" on <input> — present in PFJ, absent in PF
- aria-labelledby="crd-id-601" on <input> — present in PFJ, absent in PF

### Expandable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-m-toggle-right` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-card__body` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__expandable-content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__footer` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <span class="pf-v6-c-button__text"> — not in PF

#### Attribute Differences
- aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
- aria-label="Details" on <button> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-expandable-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-expandable-example-title card-expandable-example-toggle" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- aria-labelledby="crd-toggle-id-603 crd-title-id-604" on <button> — present in PFJ, absent in PF
- aria-labelledby="crd-toggle-id-605 crd-title-id-606" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Expandable with image

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-card__body` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__expandable-content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-card__footer` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <span class="pf-v6-c-button__text"> — not in PF
- PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF

#### Attribute Differences
- aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
- aria-label="Details" on <button> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-expandable-image-example" on <input> — present in PF, absent in PFJ
- aria-labelledby="card-expandable-image-example-title card-expandable-image-example-toggle" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Add variation:** With subtitle — implement With subtitle variation in PFJ
2. **Add variation:** With only actions in head (no title/footer) — implement With only actions in head (no title/footer) variation in PFJ
3. **Add variation:** Actions with no offset — implement Actions with no offset variation in PFJ
4. **Add variation:** With only image in head — implement With only image in head variation in PFJ
5. **Add variation:** With no footer — implement With no footer variation in PFJ
6. **Add variation:** With no title — implement With no title variation in PFJ
7. **Add variation:** Compact — implement Compact variation in PFJ
8. **Add variation:** Large — implement Large variation in PFJ
9. **Add variation:** Actionable (button) — implement Actionable (button) variation in PFJ
10. **Add variation:** Actionable (link) — implement Actionable (link) variation in PFJ
11. **Add variation:** Actionable secondary style — implement Actionable secondary style variation in PFJ
12. **Add variation:** Actionable and selectable secondary style — implement Actionable and selectable secondary style variation in PFJ
13. **Add variation:** Secondary — implement Secondary variation in PFJ
14. **Add variation:** Plain — implement Plain variation in PFJ
15. **Add variation:** Expanded — implement Expanded variation in PFJ
16. **Add variation:** Full height card — implement Full height card variation in PFJ
17. **Add variation:** Expandable toggle on right — implement Expandable toggle on right variation in PFJ
18. **Add variation:** Card with dividers between sections — implement Card with dividers between sections variation in PFJ
19. **Fix structure:** Basic — PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
20. **Fix structure:** Basic — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
21. **Fix structure:** With image and action — PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
22. **Fix structure:** With image and action — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
23. **Fix structure:** With image and action — PFJ has <div class="pf-v6-c-menu"> — not in PF
24. **Fix attribute:** With image and action — aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
25. **Fix attribute:** With image and action — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
26. **Fix attribute:** With image and action — aria-labelledby="card-action-example-1" on <input> — present in PF, absent in PFJ
27. **Fix attribute:** With image and action — aria-disabled="true" on <a> — present in PFJ, absent in PF
28. **Fix attribute:** With image and action — aria-label="Column actions" on <button> — present in PFJ, absent in PF
29. **Fix attribute:** With image and action — role="menu" on <ul> — present in PFJ, absent in PF
30. **Fix attribute:** With image and action — role="menuitem" on <a> — present in PFJ, absent in PF
31. **Fix attribute:** With image and action — role="menuitem" on <button> — present in PFJ, absent in PF
32. **Fix attribute:** With image and action — role="none" on <li> — present in PFJ, absent in PF
33. **Fix attribute:** With image and action — role="separator" on <li> — present in PFJ, absent in PF
34. **Fix attribute:** With image and action — tabindex="-1" on <a> — present in PFJ, absent in PF
35. **Fix attribute:** With image and action — tabindex="-1" on <button> — present in PFJ, absent in PF
36. **Fix attribute:** With image and action — tabindex="0" on <button> — present in PFJ, absent in PF
37. **Fix icon:** With image and action — icon mismatch on svg: PF viewBox=0 0 679 158, PFJ viewBox=0 0 32 32
38. **Fix CSS:** With title in head — add missing class pf-m-plain on <button>
39. **Fix CSS:** With title in head — add missing class pf-m-standalone on <div>
40. **Fix CSS:** With title in head — add missing class pf-v6-c-card__actions on <div>
41. **Fix CSS:** With title in head — add missing class pf-v6-c-card__header on <div>
42. **Fix CSS:** With title in head — add missing class pf-v6-c-card__header-main on <div>
43. **Fix CSS:** With title in head — add missing class pf-v6-c-check on <div>
44. **Fix CSS:** With title in head — add missing class pf-v6-c-check__input on <input>
45. **Fix CSS:** With title in head — add missing class pf-v6-c-menu-toggle on <button>
46. **Fix CSS:** With title in head — add missing class pf-v6-c-menu-toggle__icon on <span>
47. **Fix CSS:** With title in head — add missing class pf-v6-svg on <svg>
48. **Fix structure:** With title in head — PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
49. **Fix structure:** With title in head — PF has <div class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
50. **Fix structure:** With title in head — PF has <div class="pf-v6-c-card__actions"> — missing in PFJ
51. **Fix structure:** With title in head — PF has <div class="pf-v6-c-card__header"> — missing in PFJ
52. **Fix structure:** With title in head — PF has <input class="pf-v6-c-check__input"> — missing in PFJ
53. **Fix structure:** With title in head — PF has <span class="pf-v6-c-menu-toggle__icon"> — missing in PFJ
54. **Fix structure:** With title in head — PFJ has <div class="pf-v6-c-card__body"> — not in PF
55. **Fix structure:** With title in head — PFJ has <div class="pf-v6-c-card__footer"> — not in PF
56. **Fix structure:** With title in head — PFJ has <div class="pf-v6-c-card__subtitle"> — not in PF
57. **Fix structure:** With title in head — PFJ has <div class="pf-v6-c-card__title"> — not in PF
58. **Fix structure:** With title in head — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
59. **Fix attribute:** With title in head — aria-expanded="false" on <button> — present in PF, absent in PFJ
60. **Fix attribute:** With title in head — aria-hidden="true" on <svg> — present in PF, absent in PFJ
61. **Fix attribute:** With title in head — aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
62. **Fix attribute:** With title in head — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
63. **Fix attribute:** With title in head — aria-labelledby="card-action-example-2" on <input> — present in PF, absent in PFJ
64. **Fix attribute:** With title in head — role="img" on <svg> — present in PF, absent in PFJ
65. **Fix attribute:** With title in head — type="button" on <button> — present in PF, absent in PFJ
66. **Fix attribute:** With title in head — type="checkbox" on <input> — present in PF, absent in PFJ
67. **Fix CSS:** Card with header that wraps — add missing class pf-m-no-offset on <div>
68. **Fix CSS:** Card with header that wraps — add missing class pf-m-primary on <button>
69. **Fix CSS:** Card with header that wraps — add missing class pf-m-secondary on <button>
70. **Fix CSS:** Card with header that wraps — add missing class pf-m-tertiary on <button>
71. **Fix CSS:** Card with header that wraps — add missing class pf-m-wrap on <div>
72. **Fix CSS:** Card with header that wraps — add missing class pf-v6-c-button on <button>
73. **Fix CSS:** Card with header that wraps — add missing class pf-v6-c-button__text on <span>
74. **Fix CSS:** Card with header that wraps — add missing class pf-v6-c-card__title on <div>
75. **Fix CSS:** Card with header that wraps — add missing class pf-v6-c-card__title-text on <h2>
76. **Fix structure:** Card with header that wraps — PF has <button class="pf-m-primary pf-v6-c-button"> — missing in PFJ
77. **Fix structure:** Card with header that wraps — PF has <button class="pf-m-secondary pf-v6-c-button"> — missing in PFJ
78. **Fix structure:** Card with header that wraps — PF has <button class="pf-m-tertiary pf-v6-c-button"> — missing in PFJ
79. **Fix structure:** Card with header that wraps — PF has <div class="pf-m-no-offset pf-v6-c-card__actions"> — missing in PFJ
80. **Fix structure:** Card with header that wraps — PF has <div class="pf-m-wrap pf-v6-c-card__header"> — missing in PFJ
81. **Fix structure:** Card with header that wraps — PF has <div class="pf-v6-c-card__body"> — missing in PFJ
82. **Fix structure:** Card with header that wraps — PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
83. **Fix structure:** Card with header that wraps — PF has <div class="pf-v6-c-card__title"> — missing in PFJ
84. **Fix structure:** Card with header that wraps — PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
85. **Fix structure:** Card with header that wraps — PF has <span class="pf-v6-c-button__text"> — missing in PFJ
86. **Fix structure:** Card with header that wraps — PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
87. **Fix structure:** Card with header that wraps — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
88. **Fix structure:** Card with header that wraps — PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
89. **Fix structure:** Card with header that wraps — PFJ has <div class="pf-v6-c-card__actions"> — not in PF
90. **Fix structure:** Card with header that wraps — PFJ has <div class="pf-v6-c-card__header"> — not in PF
91. **Fix structure:** Card with header that wraps — PFJ has <div class="pf-v6-c-menu"> — not in PF
92. **Fix structure:** Card with header that wraps — PFJ has <input class="pf-v6-c-check__input"> — not in PF
93. **Fix structure:** Card with header that wraps — PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF
94. **Fix attribute:** Card with header that wraps — aria-disabled="true" on <a> — present in PFJ, absent in PF
95. **Fix attribute:** Card with header that wraps — aria-expanded="false" on <button> — present in PFJ, absent in PF
96. **Fix attribute:** Card with header that wraps — aria-hidden="true" on <svg> — present in PFJ, absent in PF
97. **Fix attribute:** Card with header that wraps — aria-label="Column actions" on <button> — present in PFJ, absent in PF
98. **Fix attribute:** Card with header that wraps — role="img" on <svg> — present in PFJ, absent in PF
99. **Fix attribute:** Card with header that wraps — role="menu" on <ul> — present in PFJ, absent in PF
100. **Fix attribute:** Card with header that wraps — role="menuitem" on <a> — present in PFJ, absent in PF
101. **Fix attribute:** Card with header that wraps — role="menuitem" on <button> — present in PFJ, absent in PF
102. **Fix attribute:** Card with header that wraps — role="none" on <li> — present in PFJ, absent in PF
103. **Fix attribute:** Card with header that wraps — role="separator" on <li> — present in PFJ, absent in PF
104. **Fix attribute:** Card with header that wraps — tabindex="-1" on <a> — present in PFJ, absent in PF
105. **Fix attribute:** Card with header that wraps — tabindex="-1" on <button> — present in PFJ, absent in PF
106. **Fix attribute:** Card with header that wraps — tabindex="0" on <button> — present in PFJ, absent in PF
107. **Fix attribute:** Card with header that wraps — type="checkbox" on <input> — present in PFJ, absent in PF
108. **Fix structure:** With only a content section — PFJ has <div class="pf-v6-c-card__footer"> — not in PF
109. **Fix structure:** With only a content section — PFJ has <div class="pf-v6-c-card__title"> — not in PF
110. **Fix structure:** With only a content section — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
111. **Fix structure:** With only a content section — PFJ has <hr class="pf-v6-c-divider"> — not in PF
112. **Fix attribute:** With only a content section — role="separator" on <hr> — present in PFJ, absent in PF
113. **Fix structure:** With multiple body sections — PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
114. **Fix structure:** With multiple body sections — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
115. **Fix structure:** With only one body that fills — PF has <h2 class="pf-v6-c-card__title-text"> — missing in PFJ
116. **Fix structure:** With only one body that fills — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
117. **Fix CSS:** Selectable — add missing class pf-m-gutter on <div>
118. **Fix CSS:** Selectable — add missing class pf-m-selected on <div>
119. **Fix CSS:** Selectable — add missing class pf-v6-c-card__footer on <div>
120. **Fix CSS:** Selectable — add missing class pf-v6-c-check__label on <label>
121. **Fix CSS:** Selectable — add missing class pf-v6-l-gallery on <div>
122. **Fix structure:** Selectable — PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
123. **Fix structure:** Selectable — PFJ has <div class="pf-v6-c-check"> — not in PF
124. **Fix attribute:** Selectable — aria-labelledby="card-selectable-example" on <input> — present in PF, absent in PFJ
125. **Fix attribute:** Selectable — aria-labelledby="card-selectable-example-disabled" on <input> — present in PF, absent in PFJ
126. **Fix attribute:** Selectable — aria-labelledby="card-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
127. **Fix attribute:** Selectable — aria-labelledby="crd-id-579" on <input> — present in PFJ, absent in PF
128. **Fix attribute:** Selectable — aria-labelledby="crd-id-581" on <input> — present in PFJ, absent in PF
129. **Fix attribute:** Selectable — aria-labelledby="crd-id-583" on <input> — present in PFJ, absent in PF
130. **Fix CSS:** Selectable secondary style — add missing class pf-m-disabled on <div>
131. **Fix CSS:** Selectable secondary style — add missing class pf-m-gutter on <div>
132. **Fix CSS:** Selectable secondary style — add missing class pf-m-no-offset on <div>
133. **Fix CSS:** Selectable secondary style — add missing class pf-m-selectable on <div>
134. **Fix CSS:** Selectable secondary style — add missing class pf-m-selected on <div>
135. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-card__actions on <div>
136. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-card__header on <div>
137. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-card__header-main on <div>
138. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-card__selectable-actions on <div>
139. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-check on <div>
140. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-check__input on <input>
141. **Fix CSS:** Selectable secondary style — add missing class pf-v6-c-check__label on <label>
142. **Fix CSS:** Selectable secondary style — add missing class pf-v6-l-gallery on <div>
143. **Fix structure:** Selectable secondary style — PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
144. **Fix structure:** Selectable secondary style — PF has <div class="pf-m-no-offset pf-v6-c-card__actions"> — missing in PFJ
145. **Fix structure:** Selectable secondary style — PF has <div class="pf-m-secondary pf-m-selectable pf-v6-c-card"> — missing in PFJ
146. **Fix structure:** Selectable secondary style — PF has <div class="pf-v6-c-card__header"> — missing in PFJ
147. **Fix structure:** Selectable secondary style — PF has <div class="pf-v6-c-card__selectable-actions"> — missing in PFJ
148. **Fix structure:** Selectable secondary style — PFJ has <div class="pf-m-secondary pf-v6-c-card"> — not in PF
149. **Fix structure:** Selectable secondary style — PFJ has <div class="pf-v6-c-card__body"> — not in PF
150. **Fix structure:** Selectable secondary style — PFJ has <div class="pf-v6-c-card__footer"> — not in PF
151. **Fix structure:** Selectable secondary style — PFJ has <div class="pf-v6-c-card__title"> — not in PF
152. **Fix structure:** Selectable secondary style — PFJ has <div class="pf-v6-c-card__title-text"> — not in PF
153. **Fix attribute:** Selectable secondary style — aria-labelledby="card-selectable-secondary-example" on <input> — present in PF, absent in PFJ
154. **Fix attribute:** Selectable secondary style — aria-labelledby="card-selectable-secondary-example-disabled" on <input> — present in PF, absent in PFJ
155. **Fix attribute:** Selectable secondary style — aria-labelledby="card-selectable-secondary-example-selected-disabled" on <input> — present in PF, absent in PFJ
156. **Fix attribute:** Selectable secondary style — type="checkbox" on <input> — present in PF, absent in PFJ
157. **Fix CSS:** Single selectable — add missing class pf-m-gutter on <div>
158. **Fix CSS:** Single selectable — add missing class pf-m-selected on <div>
159. **Fix CSS:** Single selectable — add missing class pf-v6-c-card__footer on <div>
160. **Fix CSS:** Single selectable — add missing class pf-v6-l-gallery on <div>
161. **Fix structure:** Single selectable — PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
162. **Fix structure:** Single selectable — PFJ has <div class="pf-m-standalone pf-v6-c-radio"> — not in PF
163. **Fix attribute:** Single selectable — aria-labelledby="card-single-selectable-example" on <input> — present in PF, absent in PFJ
164. **Fix attribute:** Single selectable — aria-labelledby="card-single-selectable-example-disabled" on <input> — present in PF, absent in PFJ
165. **Fix attribute:** Single selectable — aria-labelledby="card-single-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
166. **Fix attribute:** Single selectable — aria-labelledby="crd-id-585" on <input> — present in PFJ, absent in PF
167. **Fix attribute:** Single selectable — aria-labelledby="crd-id-587" on <input> — present in PFJ, absent in PF
168. **Fix attribute:** Single selectable — aria-labelledby="crd-id-589" on <input> — present in PFJ, absent in PF
169. **Fix CSS:** Actionable and selectable — add missing class pf-m-current on <div>
170. **Fix CSS:** Actionable and selectable — add missing class pf-m-gutter on <div>
171. **Fix CSS:** Actionable and selectable — add missing class pf-m-selected on <div>
172. **Fix CSS:** Actionable and selectable — add missing class pf-v6-c-card__footer on <div>
173. **Fix CSS:** Actionable and selectable — add missing class pf-v6-c-check__label on <label>
174. **Fix CSS:** Actionable and selectable — add missing class pf-v6-l-gallery on <div>
175. **Fix structure:** Actionable and selectable — PF has <div class="pf-m-gutter pf-v6-l-gallery"> — missing in PFJ
176. **Fix structure:** Actionable and selectable — PFJ has <div class="pf-v6-c-check"> — not in PF
177. **Fix attribute:** Actionable and selectable — aria-labelledby="card-clickable-selectable-current-example" on <input> — present in PF, absent in PFJ
178. **Fix attribute:** Actionable and selectable — aria-labelledby="card-clickable-selectable-example" on <input> — present in PF, absent in PFJ
179. **Fix attribute:** Actionable and selectable — aria-labelledby="card-clickable-selectable-example-disabled" on <input> — present in PF, absent in PFJ
180. **Fix attribute:** Actionable and selectable — aria-labelledby="card-clickable-selectable-example-selected-disabled" on <input> — present in PF, absent in PFJ
181. **Fix attribute:** Actionable and selectable — aria-labelledby="crd-id-597" on <input> — present in PFJ, absent in PF
182. **Fix attribute:** Actionable and selectable — aria-labelledby="crd-id-599" on <input> — present in PFJ, absent in PF
183. **Fix attribute:** Actionable and selectable — aria-labelledby="crd-id-601" on <input> — present in PFJ, absent in PF
184. **Fix CSS:** Expandable — add missing class pf-m-start on <span>
185. **Fix CSS:** Expandable — add missing class pf-v6-c-button__icon on <span>
186. **Fix structure:** Expandable — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
187. **Fix structure:** Expandable — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
188. **Fix structure:** Expandable — PFJ has <div class="pf-v6-c-menu"> — not in PF
189. **Fix structure:** Expandable — PFJ has <span class="pf-v6-c-button__text"> — not in PF
190. **Fix attribute:** Expandable — aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
191. **Fix attribute:** Expandable — aria-label="Details" on <button> — present in PF, absent in PFJ
192. **Fix attribute:** Expandable — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
193. **Fix attribute:** Expandable — aria-labelledby="card-expandable-example" on <input> — present in PF, absent in PFJ
194. **Fix attribute:** Expandable — aria-labelledby="card-expandable-example-title card-expandable-example-toggle" on <button> — present in PF, absent in PFJ
195. **Fix attribute:** Expandable — aria-disabled="true" on <a> — present in PFJ, absent in PF
196. **Fix attribute:** Expandable — aria-label="Column actions" on <button> — present in PFJ, absent in PF
197. **Fix attribute:** Expandable — aria-labelledby="crd-toggle-id-603 crd-title-id-604" on <button> — present in PFJ, absent in PF
198. **Fix attribute:** Expandable — aria-labelledby="crd-toggle-id-605 crd-title-id-606" on <button> — present in PFJ, absent in PF
199. **Fix attribute:** Expandable — role="menu" on <ul> — present in PFJ, absent in PF
200. **Fix attribute:** Expandable — role="menuitem" on <a> — present in PFJ, absent in PF
201. **Fix attribute:** Expandable — role="menuitem" on <button> — present in PFJ, absent in PF
202. **Fix attribute:** Expandable — role="none" on <li> — present in PFJ, absent in PF
203. **Fix attribute:** Expandable — role="separator" on <li> — present in PFJ, absent in PF
204. **Fix attribute:** Expandable — tabindex="-1" on <a> — present in PFJ, absent in PF
205. **Fix attribute:** Expandable — tabindex="-1" on <button> — present in PFJ, absent in PF
206. **Fix attribute:** Expandable — tabindex="0" on <button> — present in PFJ, absent in PF
207. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
208. **Fix CSS:** Expandable with image — add missing class pf-m-start on <span>
209. **Fix CSS:** Expandable with image — add missing class pf-v6-c-button__icon on <span>
210. **Fix structure:** Expandable with image — PF has <div class="pf-v6-c-card__header-main"> — missing in PFJ
211. **Fix structure:** Expandable with image — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
212. **Fix structure:** Expandable with image — PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
213. **Fix structure:** Expandable with image — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
214. **Fix structure:** Expandable with image — PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
215. **Fix structure:** Expandable with image — PFJ has <div class="pf-v6-c-menu"> — not in PF
216. **Fix structure:** Expandable with image — PFJ has <input class="pf-v6-c-check__input"> — not in PF
217. **Fix structure:** Expandable with image — PFJ has <span class="pf-v6-c-button__text"> — not in PF
218. **Fix structure:** Expandable with image — PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF
219. **Fix attribute:** Expandable with image — aria-label="Card menu toggle" on <button> — present in PF, absent in PFJ
220. **Fix attribute:** Expandable with image — aria-label="Details" on <button> — present in PF, absent in PFJ
221. **Fix attribute:** Expandable with image — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
222. **Fix attribute:** Expandable with image — aria-labelledby="card-expandable-image-example" on <input> — present in PF, absent in PFJ
223. **Fix attribute:** Expandable with image — aria-labelledby="card-expandable-image-example-title card-expandable-image-example-toggle" on <button> — present in PF, absent in PFJ
224. **Fix attribute:** Expandable with image — aria-disabled="true" on <a> — present in PFJ, absent in PF
225. **Fix attribute:** Expandable with image — aria-label="Column actions" on <button> — present in PFJ, absent in PF
226. **Fix attribute:** Expandable with image — role="menu" on <ul> — present in PFJ, absent in PF
227. **Fix attribute:** Expandable with image — role="menuitem" on <a> — present in PFJ, absent in PF
228. **Fix attribute:** Expandable with image — role="menuitem" on <button> — present in PFJ, absent in PF
229. **Fix attribute:** Expandable with image — role="none" on <li> — present in PFJ, absent in PF
230. **Fix attribute:** Expandable with image — role="separator" on <li> — present in PFJ, absent in PF
231. **Fix attribute:** Expandable with image — tabindex="-1" on <a> — present in PFJ, absent in PF
232. **Fix attribute:** Expandable with image — tabindex="-1" on <button> — present in PFJ, absent in PF
233. **Fix attribute:** Expandable with image — tabindex="0" on <button> — present in PFJ, absent in PF
234. **Fix icon:** Expandable with image — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
