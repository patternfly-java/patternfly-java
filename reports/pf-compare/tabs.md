---
component: tabs
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/tabs/html
pfj_url: http://localhost:1234/components/tabs
completeness:
  pf_total: 40
  pfj_total: 19
  matched: 13
  missing_in_pfj:
    - overflow-beginning-of-list-example
    - horizontal-overflow-expanded-example
    - horizontal-overflow-selected-example
    - vertical-expanded-example
    - vertical-expandable-responsive-example
    - vertical-expandable-example-deprecated
    - vertical-expanded-example-deprecated
    - vertical-expandable-responsive-example-deprecated
    - box-tabs-example
    - box-overflow-example
    - box-vertical-example
    - box-tabs-secondary-variant-example
    - default-tab-insets-example
    - box-tab-insets-example
    - tabs-with-sub-tabs-example
    - box-tabs-with-sub-tabs-example
    - filled-with-icons-example
    - filled-box-example
    - filled-box-with-icons-example
    - site-navigation-variation
    - help-button-example
    - close-button-example
    - add-tab-button-example
    - animate-default-tabs-accent
    - animate-sub-tabs-accent
    - animate-vertical-tabs-accent
    - default-tab-content-example
  extra_in_pfj:
    - tabs-overflow-default
    - tabs-inset
    - tabs-subtab
    - tabs-promise
    - tabs-dynamic
    - tabs-help
---

# PF Compare: tabs

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default tabs example | Default tabs | matched (semantic) |
| 2 | Horizontal overflow example | Horizontal overflow tabs | matched (semantic) |
| 3 | Vertical tabs example | Vertical tabs | matched (semantic) |
| 4 | Vertical expandable example | Vertical expandable tabs | matched (semantic) |
| 5 | Page insets example | With page insets | matched (semantic) |
| 6 | Icons and text example | With icons and text | matched (semantic) |
| 7 | Filled tabs example | Filled tabs with icons | matched (semantic) |
| 8 | Using the nav element example | Subtabs linked to nav elements | matched (semantic) |
| 9 | Sub tabs using the nav element example | Tabs linked to nav elements | matched (semantic) |
| 10 | Help and close button example | With help and close actions | matched (semantic) |
| 11 | Animate filled tabs accent | Toggled tab content | matched (semantic) |
| 12 | Padding | With tab content with body and padding | matched (semantic) |
| 13 | Secondary | Secondary tabs | matched (semantic) |
| 14 | Overflow beginning of list example | --- | missing_in_pfj |
| 15 | Horizontal overflow expanded example | --- | missing_in_pfj |
| 16 | Horizontal overflow selected example | --- | missing_in_pfj |
| 17 | Vertical expanded example | --- | missing_in_pfj |
| 18 | Vertical expandable responsive example | --- | missing_in_pfj |
| 19 | Vertical expandable example (deprecated) | --- | missing_in_pfj |
| 20 | Vertical expanded example (deprecated) | --- | missing_in_pfj |
| 21 | Vertical expandable responsive example (deprecated) | --- | missing_in_pfj |
| 22 | Box tabs example | --- | missing_in_pfj |
| 23 | Box overflow example | --- | missing_in_pfj |
| 24 | Box vertical example | --- | missing_in_pfj |
| 25 | Box tabs secondary variant example | --- | missing_in_pfj |
| 26 | Default tab insets example | --- | missing_in_pfj |
| 27 | Box tab insets example | --- | missing_in_pfj |
| 28 | Tabs with sub tabs example | --- | missing_in_pfj |
| 29 | Box tabs with sub tabs example | --- | missing_in_pfj |
| 30 | Filled with icons example | --- | missing_in_pfj |
| 31 | Filled box example | --- | missing_in_pfj |
| 32 | Filled box with icons example | --- | missing_in_pfj |
| 33 | Site navigation variation | --- | missing_in_pfj |
| 34 | Help button example | --- | missing_in_pfj |
| 35 | Close button example | --- | missing_in_pfj |
| 36 | Add tab button example | --- | missing_in_pfj |
| 37 | Animate default tabs accent | --- | missing_in_pfj |
| 38 | Animate sub tabs accent | --- | missing_in_pfj |
| 39 | Animate vertical tabs accent | --- | missing_in_pfj |
| 40 | Default tab content example | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Default overflow tabs (`tabs-overflow-default`)
- With adjusted inset (`tabs-inset`)
- Subtabs (`tabs-subtab`)
- Children mounting on click (`tabs-promise`)
- Dynamic tabs (`tabs-dynamic`)
- With help action popover (`tabs-help`)

## DOM Comparison

### Default tabs example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-md` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-sm` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-u-mt-md"> — not in PF
- PFJ has <div class="pf-v6-u-mt-sm"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <label class="pf-v6-c-check__label"> — not in PF
- PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Default example" on <div> — present in PF, absent in PFJ
- aria-label="Default example" on <ul> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-default-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-default-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-default-disabled-aria-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-default-disabled-aria-tt-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-default-disabled-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-default-users-content" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-disabled-aria-tt-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-default-users-tab" on <section> — present in PFJ, absent in PF
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

### Horizontal overflow example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__link-toggle-icon"> — missing in PFJ
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-label="Horizontal overflow example" on <div> — present in PF, absent in PFJ
- aria-label="Horizontal overflow example" on <ul> — present in PF, absent in PFJ
- aria-controls="tabs-overflow-hz-10-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-11-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-12-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-13-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-14-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-15-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-16-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-17-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-18-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-19-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-7-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-8-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-9-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-network-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-server-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-system-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-overflow-hz-users-content" on <button> — present in PFJ, absent in PF
- aria-expanded="false" on <button> — present in PFJ, absent in PF
- aria-haspopup="menu" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-10-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-11-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-12-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-13-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-14-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-15-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-16-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-17-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-18-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-19-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-7-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-8-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-9-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-network-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-server-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-system-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-overflow-hz-users-tab" on <section> — present in PFJ, absent in PF
- aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
- role="listbox" on <ul> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Vertical tabs example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-md` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PFJ has <div class="pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-u-mt-md"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <label class="pf-v6-c-check__label"> — not in PF
- PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-label="Vertical tabs example" on <div> — present in PF, absent in PFJ
- aria-label="Vertical tabs example" on <ul> — present in PF, absent in PFJ
- aria-controls="tabs-vertical-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-vertical-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-vertical-disabled-aria-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-vertical-disabled-aria-tt-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-vertical-disabled-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-vertical-users-content" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-disabled-aria-tt-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-vertical-users-tab" on <section> — present in PFJ, absent in PF
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

### Vertical expandable example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-tabs__toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-tabs__toggle-text` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-expandable-on-lg` on `<div>` — present in PFJ, absent in PF
- `.pf-m-non-expandable-on-md` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-expandable pf-m-vertical pf-v6-c-tabs"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PF has <span class="pf-v6-c-button__text"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PFJ has <div class="pf-m-expandable pf-m-expandable-on-lg pf-m-non-expandable-on-md pf-m-vertical pf-v6-c-tabs"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-label="Details" on <button> — present in PF, absent in PFJ
- aria-label="Vertical expandable example" on <div> — present in PF, absent in PFJ
- aria-label="Vertical expandable example" on <ul> — present in PF, absent in PFJ
- aria-labelledby="vertical-expandable-toggle-text vertical-expandable-toggle-button" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-expandable-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-expandable-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-expandable-network-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-expandable-server-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-expandable-system-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-expandable-users-content" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-network-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-server-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-system-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-expandable-users-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tbs-toggle-button-id-479 tbs-toggle-text-id-480" on <button> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Page insets example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-md` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-u-mt-md"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <label class="pf-v6-c-check__label"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Page insets example" on <div> — present in PF, absent in PFJ
- aria-label="Page insets example" on <ul> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-page-insets-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-page-insets-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-page-insets-network-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-page-insets-server-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-page-insets-system-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-page-insets-users-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-network-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-server-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-system-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-page-insets-users-tab" on <section> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

### Icons and text example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-icon"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Icons and text example" on <div> — present in PF, absent in PFJ
- aria-label="Icons and text example" on <ul> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-icon-text-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-text-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-text-network-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-text-server-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-text-system-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-text-users-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-network-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-server-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-system-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-text-users-tab" on <section> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 640 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 640 512`

### Filled tabs example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__item-icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-u-mt-md` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-u-mt-md"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <label class="pf-v6-c-check__label"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Filled example" on <div> — present in PF, absent in PFJ
- aria-label="Filled example" on <ul> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-icon-filled-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-filled-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-icon-filled-users-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-filled-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-filled-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-icon-filled-users-tab" on <section> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 640 512`

### Using the nav element example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-scrollable` on `<nav>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-subtab` on `<nav>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-disabled pf-v6-c-tabs__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <nav class="pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
- PFJ has <nav class="pf-m-subtab pf-v6-c-tabs"> — not in PF
- PFJ has <nav class="pf-v6-c-tabs"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-label="Using nav element example" on <nav> — present in PF, absent in PFJ
- aria-label="Using nav element example" on <ul> — present in PF, absent in PFJ
- aria-controls="secondary-tab-disabled-aria-content" on <a> — present in PFJ, absent in PF
- aria-controls="secondary-tab-disabled-content" on <a> — present in PFJ, absent in PF
- aria-controls="secondary-tab-item-1-content" on <a> — present in PFJ, absent in PF
- aria-controls="secondary-tab-item-2-content" on <a> — present in PFJ, absent in PF
- aria-controls="secondary-tab-item-3-content" on <a> — present in PFJ, absent in PF
- aria-controls="secondary-tab-item-6-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-network-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-subtab-nav-containers-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-subtab-nav-database-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-subtab-nav-disabled-aria-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-subtab-nav-disabled-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-subtab-nav-users-content" on <a> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-item-1-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-item-2-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-item-3-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="secondary-tab-item-6-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-network-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-subtab-nav-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-subtab-nav-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-subtab-nav-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-subtab-nav-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-subtab-nav-users-tab" on <section> — present in PFJ, absent in PF
- role="region" on <nav> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

### Sub tabs using the nav element example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-subtab` on `<nav>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-disabled pf-v6-c-tabs__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <nav class="pf-m-subtab pf-v6-c-tabs"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-label="Using nav element with sub tabs example, Containers" on <nav> — present in PF, absent in PFJ
- aria-label="Using nav element with sub tabs example, Containers" on <ul> — present in PF, absent in PFJ
- aria-label="Using nav element with sub tabs example, primary" on <nav> — present in PF, absent in PFJ
- aria-label="Using nav element with sub tabs example, primary" on <ul> — present in PF, absent in PFJ
- aria-controls="tabs-nav-containers-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-nav-database-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-nav-disabled-aria-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-nav-disabled-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-nav-users-content" on <a> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-network-content" on <a> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-nav-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-nav-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-nav-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-nav-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-nav-users-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-network-tab" on <section> — present in PFJ, absent in PF
- role="region" on <nav> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

### Help and close button example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-aria-disabled` on `<button>` — present in PF, absent in PFJ
- `.pf-m-box` on `<div>` — present in PF, absent in PFJ
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-m-scrollable` on `<div>` — present in PF, absent in PFJ
- `.pf-m-secondary` on `<div>` — present in PF, absent in PFJ
- `.pf-m-subtab` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-tabs__item-icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-popover` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__body` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__close` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__footer` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__header` on `<header>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__title` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-popover__title-text` on `<h6>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-aria-disabled pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <button class="pf-m-aria-disabled pf-v6-c-tabs__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-box pf-m-scrollable pf-m-secondary pf-v6-c-tabs"> — missing in PFJ
- PF has <div class="pf-m-box pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
- PF has <div class="pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
- PF has <li class="pf-m-action pf-m-disabled pf-v6-c-tabs__item"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-tabs"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Close ARIA disabled" on <button> — present in PF, absent in PFJ
- aria-label="Close Close disabled" on <button> — present in PF, absent in PFJ
- aria-label="Close Containers" on <button> — present in PF, absent in PFJ
- aria-label="Close Database" on <button> — present in PF, absent in PFJ
- aria-label="Close Disabled" on <button> — present in PF, absent in PFJ
- aria-label="Close Help and close disabled" on <button> — present in PF, absent in PFJ
- aria-label="Close Help disabled" on <button> — present in PF, absent in PFJ
- aria-label="Close Network" on <button> — present in PF, absent in PFJ
- aria-label="Close Users" on <button> — present in PF, absent in PFJ
- aria-label="Help and close button box example" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button box example" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button box secondary variant example" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button box secondary variant example" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button default example" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button default example" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button filled example" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button filled example" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button with icons example" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button with icons example" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button with sub tabs example, Containers" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button with sub tabs example, Containers" on <ul> — present in PF, absent in PFJ
- aria-label="Help and close button with sub tabs example, primary" on <div> — present in PF, absent in PFJ
- aria-label="Help and close button with sub tabs example, primary" on <ul> — present in PF, absent in PFJ
- aria-label="More info for ARIA disabled label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Close disabled label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Containers label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Database label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Disabled label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Help and close disabled label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Help disabled label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Network label" on <button> — present in PF, absent in PFJ
- aria-label="More info for Users label" on <button> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-help-close-1-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-help-close-2-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-help-close-3-content" on <button> — present in PFJ, absent in PF
- aria-describedby="pvr-body-id-407" on <div> — present in PFJ, absent in PF
- aria-describedby="pvr-body-id-413" on <div> — present in PFJ, absent in PF
- aria-describedby="pvr-body-id-419" on <div> — present in PFJ, absent in PF
- aria-disabled="false" on <button> — present in PFJ, absent in PF
- aria-label="Close Terminal 1" on <button> — present in PFJ, absent in PF
- aria-label="Close Terminal 2" on <button> — present in PFJ, absent in PF
- aria-label="Close Terminal 3" on <button> — present in PFJ, absent in PF
- aria-label="Close" on <button> — present in PFJ, absent in PF
- aria-label="More info for Terminal 1" on <button> — present in PFJ, absent in PF
- aria-label="More info for Terminal 2" on <button> — present in PFJ, absent in PF
- aria-label="More info for Terminal 3" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="pvr-header-id-410" on <div> — present in PFJ, absent in PF
- aria-labelledby="pvr-header-id-416" on <div> — present in PFJ, absent in PF
- aria-labelledby="pvr-header-id-422" on <div> — present in PFJ, absent in PF
- aria-labelledby="tabs-help-close-1-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-help-close-2-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-help-close-3-tab" on <section> — present in PFJ, absent in PF
- aria-modal="true" on <div> — present in PFJ, absent in PF
- role="dialog" on <div> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 1024 1024`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 1024 1024`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 1024 1024`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Animate filled tabs accent

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-animate-current` on `<div>` — present in PF, absent in PFJ
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-primary` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-tab-content` on `<section>` — present in PFJ, absent in PF
- `.pf-v6-u-mb-lg` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-animate-current pf-m-fill pf-v6-c-tabs"> — missing in PFJ
- PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-m-primary pf-v6-c-button pf-v6-u-mb-lg"> — not in PF
- PFJ has <div class="pf-v6-c-tabs"> — not in PF
- PFJ has <section class="pf-v6-c-tab-content"> — not in PF
- PFJ has <span class="pf-v6-c-button__text"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <div> — present in PF, absent in PFJ
- aria-label="Animate filled example" on <div> — present in PF, absent in PFJ
- aria-label="Animate filled example" on <ul> — present in PF, absent in PFJ
- aria-label="Scroll left" on <button> — present in PF, absent in PFJ
- aria-label="Scroll right" on <button> — present in PF, absent in PFJ
- aria-controls="tabs-hide-tab-1-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-hide-tab-2-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-hide-tab-3-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-hide-tab-1-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-hide-tab-2-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-hide-tab-3-tab" on <section> — present in PFJ, absent in PF
- role="tabpanel" on <section> — present in PFJ, absent in PF
- tabindex="0" on <section> — present in PFJ, absent in PF

### Padding

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-current` on `<li>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__link` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__scroll-button` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-v6-c-tabs__link"> — not in PF
- PFJ has <div class="pf-v6-c-tabs"> — not in PF
- PFJ has <div class="pf-v6-c-tabs__scroll-button"> — not in PF
- PFJ has <li class="pf-m-current pf-v6-c-tabs__item"> — not in PF
- PFJ has <li class="pf-v6-c-tabs__item"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF
- PFJ has <ul class="pf-v6-c-tabs__list"> — not in PF

#### Attribute Differences
- aria-controls="tabs-body-padding-1-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-body-padding-2-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-body-padding-3-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-body-padding-1-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-body-padding-2-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-body-padding-3-tab" on <section> — present in PFJ, absent in PF
- aria-selected="false" on <button> — present in PFJ, absent in PF
- aria-selected="true" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="presentation" on <li> — present in PFJ, absent in PF
- role="region" on <div> — present in PFJ, absent in PF
- role="tab" on <button> — present in PFJ, absent in PF
- role="tablist" on <ul> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Secondary

**Status:** differences_found

#### Missing CSS Classes
- `.pf-v6-c-tab-content__body` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-aria-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-current` on `<li>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__link` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-tabs__scroll-button` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-tab-content__body"> — missing in PFJ
- PFJ has <button class="pf-m-aria-disabled pf-v6-c-tabs__link"> — not in PF
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <button class="pf-v6-c-tabs__link"> — not in PF
- PFJ has <div class="pf-m-secondary pf-v6-c-tabs"> — not in PF
- PFJ has <div class="pf-v6-c-tabs__scroll-button"> — not in PF
- PFJ has <li class="pf-m-current pf-v6-c-tabs__item"> — not in PF
- PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
- PFJ has <li class="pf-v6-c-tabs__item"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF
- PFJ has <ul class="pf-v6-c-tabs__list"> — not in PF

#### Attribute Differences
- aria-controls="tabs-secondary-containers-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-database-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-disabled-aria-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-disabled-content" on <button> — present in PFJ, absent in PF
- aria-controls="tabs-secondary-users-content" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-containers-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-database-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-disabled-aria-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-disabled-tab" on <section> — present in PFJ, absent in PF
- aria-labelledby="tabs-secondary-users-tab" on <section> — present in PFJ, absent in PF
- aria-selected="false" on <button> — present in PFJ, absent in PF
- aria-selected="true" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="presentation" on <li> — present in PFJ, absent in PF
- role="region" on <div> — present in PFJ, absent in PF
- role="tab" on <button> — present in PFJ, absent in PF
- role="tablist" on <ul> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Overflow beginning of list example — implement Overflow beginning of list example variation in PFJ
2. **Add variation:** Horizontal overflow expanded example — implement Horizontal overflow expanded example variation in PFJ
3. **Add variation:** Horizontal overflow selected example — implement Horizontal overflow selected example variation in PFJ
4. **Add variation:** Vertical expanded example — implement Vertical expanded example variation in PFJ
5. **Add variation:** Vertical expandable responsive example — implement Vertical expandable responsive example variation in PFJ
6. **Add variation:** Vertical expandable example (deprecated) — implement Vertical expandable example (deprecated) variation in PFJ
7. **Add variation:** Vertical expanded example (deprecated) — implement Vertical expanded example (deprecated) variation in PFJ
8. **Add variation:** Vertical expandable responsive example (deprecated) — implement Vertical expandable responsive example (deprecated) variation in PFJ
9. **Add variation:** Box tabs example — implement Box tabs example variation in PFJ
10. **Add variation:** Box overflow example — implement Box overflow example variation in PFJ
11. **Add variation:** Box vertical example — implement Box vertical example variation in PFJ
12. **Add variation:** Box tabs secondary variant example — implement Box tabs secondary variant example variation in PFJ
13. **Add variation:** Default tab insets example — implement Default tab insets example variation in PFJ
14. **Add variation:** Box tab insets example — implement Box tab insets example variation in PFJ
15. **Add variation:** Tabs with sub tabs example — implement Tabs with sub tabs example variation in PFJ
16. **Add variation:** Box tabs with sub tabs example — implement Box tabs with sub tabs example variation in PFJ
17. **Add variation:** Filled with icons example — implement Filled with icons example variation in PFJ
18. **Add variation:** Filled box example — implement Filled box example variation in PFJ
19. **Add variation:** Filled box with icons example — implement Filled box with icons example variation in PFJ
20. **Add variation:** Site navigation variation — implement Site navigation variation variation in PFJ
21. **Add variation:** Help button example — implement Help button example variation in PFJ
22. **Add variation:** Close button example — implement Close button example variation in PFJ
23. **Add variation:** Add tab button example — implement Add tab button example variation in PFJ
24. **Add variation:** Animate default tabs accent — implement Animate default tabs accent variation in PFJ
25. **Add variation:** Animate sub tabs accent — implement Animate sub tabs accent variation in PFJ
26. **Add variation:** Animate vertical tabs accent — implement Animate vertical tabs accent variation in PFJ
27. **Add variation:** Default tab content example — implement Default tab content example variation in PFJ
28. **Fix structure:** Default tabs example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
29. **Fix structure:** Default tabs example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
30. **Fix structure:** Default tabs example — PF has <svg class="pf-v6-svg"> — missing in PFJ
31. **Fix structure:** Default tabs example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
32. **Fix structure:** Default tabs example — PFJ has <div class="pf-v6-c-check"> — not in PF
33. **Fix structure:** Default tabs example — PFJ has <div class="pf-v6-u-mt-md"> — not in PF
34. **Fix structure:** Default tabs example — PFJ has <div class="pf-v6-u-mt-sm"> — not in PF
35. **Fix structure:** Default tabs example — PFJ has <input class="pf-v6-c-check__input"> — not in PF
36. **Fix structure:** Default tabs example — PFJ has <label class="pf-v6-c-check__label"> — not in PF
37. **Fix structure:** Default tabs example — PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
38. **Fix structure:** Default tabs example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
39. **Fix attribute:** Default tabs example — aria-hidden="true" on <div> — present in PF, absent in PFJ
40. **Fix attribute:** Default tabs example — aria-label="Default example" on <div> — present in PF, absent in PFJ
41. **Fix attribute:** Default tabs example — aria-label="Default example" on <ul> — present in PF, absent in PFJ
42. **Fix attribute:** Default tabs example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
43. **Fix attribute:** Default tabs example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
44. **Fix attribute:** Default tabs example — aria-controls="tabs-default-containers-content" on <button> — present in PFJ, absent in PF
45. **Fix attribute:** Default tabs example — aria-controls="tabs-default-database-content" on <button> — present in PFJ, absent in PF
46. **Fix attribute:** Default tabs example — aria-controls="tabs-default-disabled-aria-content" on <button> — present in PFJ, absent in PF
47. **Fix attribute:** Default tabs example — aria-controls="tabs-default-disabled-aria-tt-content" on <button> — present in PFJ, absent in PF
48. **Fix attribute:** Default tabs example — aria-controls="tabs-default-disabled-content" on <button> — present in PFJ, absent in PF
49. **Fix attribute:** Default tabs example — aria-controls="tabs-default-users-content" on <button> — present in PFJ, absent in PF
50. **Fix attribute:** Default tabs example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
51. **Fix attribute:** Default tabs example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
52. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-containers-tab" on <section> — present in PFJ, absent in PF
53. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-database-tab" on <section> — present in PFJ, absent in PF
54. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-disabled-aria-tab" on <section> — present in PFJ, absent in PF
55. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-disabled-aria-tt-tab" on <section> — present in PFJ, absent in PF
56. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-disabled-tab" on <section> — present in PFJ, absent in PF
57. **Fix attribute:** Default tabs example — aria-labelledby="tabs-default-users-tab" on <section> — present in PFJ, absent in PF
58. **Fix attribute:** Default tabs example — aria-live="polite" on <div> — present in PFJ, absent in PF
59. **Fix attribute:** Default tabs example — role="tabpanel" on <section> — present in PFJ, absent in PF
60. **Fix attribute:** Default tabs example — role="tooltip" on <div> — present in PFJ, absent in PF
61. **Fix attribute:** Default tabs example — tabindex="0" on <section> — present in PFJ, absent in PF
62. **Fix attribute:** Default tabs example — type="checkbox" on <input> — present in PFJ, absent in PF
63. **Fix structure:** Horizontal overflow example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
64. **Fix structure:** Horizontal overflow example — PF has <span class="pf-v6-c-tabs__link-toggle-icon"> — missing in PFJ
65. **Fix structure:** Horizontal overflow example — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
66. **Fix structure:** Horizontal overflow example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
67. **Fix attribute:** Horizontal overflow example — aria-label="Horizontal overflow example" on <div> — present in PF, absent in PFJ
68. **Fix attribute:** Horizontal overflow example — aria-label="Horizontal overflow example" on <ul> — present in PF, absent in PFJ
69. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-10-content" on <button> — present in PFJ, absent in PF
70. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-11-content" on <button> — present in PFJ, absent in PF
71. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-12-content" on <button> — present in PFJ, absent in PF
72. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-13-content" on <button> — present in PFJ, absent in PF
73. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-14-content" on <button> — present in PFJ, absent in PF
74. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-15-content" on <button> — present in PFJ, absent in PF
75. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-16-content" on <button> — present in PFJ, absent in PF
76. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-17-content" on <button> — present in PFJ, absent in PF
77. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-18-content" on <button> — present in PFJ, absent in PF
78. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-19-content" on <button> — present in PFJ, absent in PF
79. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-7-content" on <button> — present in PFJ, absent in PF
80. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-8-content" on <button> — present in PFJ, absent in PF
81. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-9-content" on <button> — present in PFJ, absent in PF
82. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-containers-content" on <button> — present in PFJ, absent in PF
83. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-database-content" on <button> — present in PFJ, absent in PF
84. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-network-content" on <button> — present in PFJ, absent in PF
85. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-server-content" on <button> — present in PFJ, absent in PF
86. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-system-content" on <button> — present in PFJ, absent in PF
87. **Fix attribute:** Horizontal overflow example — aria-controls="tabs-overflow-hz-users-content" on <button> — present in PFJ, absent in PF
88. **Fix attribute:** Horizontal overflow example — aria-expanded="false" on <button> — present in PFJ, absent in PF
89. **Fix attribute:** Horizontal overflow example — aria-haspopup="menu" on <button> — present in PFJ, absent in PF
90. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-10-tab" on <section> — present in PFJ, absent in PF
91. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-11-tab" on <section> — present in PFJ, absent in PF
92. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-12-tab" on <section> — present in PFJ, absent in PF
93. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-13-tab" on <section> — present in PFJ, absent in PF
94. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-14-tab" on <section> — present in PFJ, absent in PF
95. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-15-tab" on <section> — present in PFJ, absent in PF
96. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-16-tab" on <section> — present in PFJ, absent in PF
97. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-17-tab" on <section> — present in PFJ, absent in PF
98. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-18-tab" on <section> — present in PFJ, absent in PF
99. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-19-tab" on <section> — present in PFJ, absent in PF
100. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-7-tab" on <section> — present in PFJ, absent in PF
101. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-8-tab" on <section> — present in PFJ, absent in PF
102. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-9-tab" on <section> — present in PFJ, absent in PF
103. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-containers-tab" on <section> — present in PFJ, absent in PF
104. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-database-tab" on <section> — present in PFJ, absent in PF
105. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-network-tab" on <section> — present in PFJ, absent in PF
106. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-server-tab" on <section> — present in PFJ, absent in PF
107. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-system-tab" on <section> — present in PFJ, absent in PF
108. **Fix attribute:** Horizontal overflow example — aria-labelledby="tabs-overflow-hz-users-tab" on <section> — present in PFJ, absent in PF
109. **Fix attribute:** Horizontal overflow example — aria-multiselectable="false" on <ul> — present in PFJ, absent in PF
110. **Fix attribute:** Horizontal overflow example — role="listbox" on <ul> — present in PFJ, absent in PF
111. **Fix attribute:** Horizontal overflow example — role="tabpanel" on <section> — present in PFJ, absent in PF
112. **Fix attribute:** Horizontal overflow example — tabindex="0" on <section> — present in PFJ, absent in PF
113. **Fix icon:** Horizontal overflow example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
114. **Fix structure:** Vertical tabs example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
115. **Fix structure:** Vertical tabs example — PFJ has <div class="pf-v6-c-check"> — not in PF
116. **Fix structure:** Vertical tabs example — PFJ has <div class="pf-v6-u-mt-md"> — not in PF
117. **Fix structure:** Vertical tabs example — PFJ has <input class="pf-v6-c-check__input"> — not in PF
118. **Fix structure:** Vertical tabs example — PFJ has <label class="pf-v6-c-check__label"> — not in PF
119. **Fix structure:** Vertical tabs example — PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
120. **Fix structure:** Vertical tabs example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
121. **Fix attribute:** Vertical tabs example — aria-label="Vertical tabs example" on <div> — present in PF, absent in PFJ
122. **Fix attribute:** Vertical tabs example — aria-label="Vertical tabs example" on <ul> — present in PF, absent in PFJ
123. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-containers-content" on <button> — present in PFJ, absent in PF
124. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-database-content" on <button> — present in PFJ, absent in PF
125. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-disabled-aria-content" on <button> — present in PFJ, absent in PF
126. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-disabled-aria-tt-content" on <button> — present in PFJ, absent in PF
127. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-disabled-content" on <button> — present in PFJ, absent in PF
128. **Fix attribute:** Vertical tabs example — aria-controls="tabs-vertical-users-content" on <button> — present in PFJ, absent in PF
129. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-containers-tab" on <section> — present in PFJ, absent in PF
130. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-database-tab" on <section> — present in PFJ, absent in PF
131. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-disabled-aria-tab" on <section> — present in PFJ, absent in PF
132. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-disabled-aria-tt-tab" on <section> — present in PFJ, absent in PF
133. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-disabled-tab" on <section> — present in PFJ, absent in PF
134. **Fix attribute:** Vertical tabs example — aria-labelledby="tabs-vertical-users-tab" on <section> — present in PFJ, absent in PF
135. **Fix attribute:** Vertical tabs example — aria-live="polite" on <div> — present in PFJ, absent in PF
136. **Fix attribute:** Vertical tabs example — role="tabpanel" on <section> — present in PFJ, absent in PF
137. **Fix attribute:** Vertical tabs example — role="tooltip" on <div> — present in PFJ, absent in PF
138. **Fix attribute:** Vertical tabs example — tabindex="0" on <section> — present in PFJ, absent in PF
139. **Fix attribute:** Vertical tabs example — type="checkbox" on <input> — present in PFJ, absent in PF
140. **Fix CSS:** Vertical expandable example — add missing class pf-m-start on <span>
141. **Fix CSS:** Vertical expandable example — add missing class pf-v6-c-tabs__toggle-icon on <span>
142. **Fix CSS:** Vertical expandable example — add missing class pf-v6-c-tabs__toggle-text on <span>
143. **Fix structure:** Vertical expandable example — PF has <div class="pf-m-expandable pf-m-vertical pf-v6-c-tabs"> — missing in PFJ
144. **Fix structure:** Vertical expandable example — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
145. **Fix structure:** Vertical expandable example — PF has <span class="pf-v6-c-button__text"> — missing in PFJ
146. **Fix structure:** Vertical expandable example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
147. **Fix structure:** Vertical expandable example — PFJ has <div class="pf-m-expandable pf-m-expandable-on-lg pf-m-non-expandable-on-md pf-m-vertical pf-v6-c-tabs"> — not in PF
148. **Fix structure:** Vertical expandable example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
149. **Fix attribute:** Vertical expandable example — aria-label="Details" on <button> — present in PF, absent in PFJ
150. **Fix attribute:** Vertical expandable example — aria-label="Vertical expandable example" on <div> — present in PF, absent in PFJ
151. **Fix attribute:** Vertical expandable example — aria-label="Vertical expandable example" on <ul> — present in PF, absent in PFJ
152. **Fix attribute:** Vertical expandable example — aria-labelledby="vertical-expandable-toggle-text vertical-expandable-toggle-button" on <button> — present in PF, absent in PFJ
153. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-containers-content" on <button> — present in PFJ, absent in PF
154. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-database-content" on <button> — present in PFJ, absent in PF
155. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-network-content" on <button> — present in PFJ, absent in PF
156. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-server-content" on <button> — present in PFJ, absent in PF
157. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-system-content" on <button> — present in PFJ, absent in PF
158. **Fix attribute:** Vertical expandable example — aria-controls="tabs-expandable-users-content" on <button> — present in PFJ, absent in PF
159. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-containers-tab" on <section> — present in PFJ, absent in PF
160. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-database-tab" on <section> — present in PFJ, absent in PF
161. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-network-tab" on <section> — present in PFJ, absent in PF
162. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-server-tab" on <section> — present in PFJ, absent in PF
163. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-system-tab" on <section> — present in PFJ, absent in PF
164. **Fix attribute:** Vertical expandable example — aria-labelledby="tabs-expandable-users-tab" on <section> — present in PFJ, absent in PF
165. **Fix attribute:** Vertical expandable example — aria-labelledby="tbs-toggle-button-id-479 tbs-toggle-text-id-480" on <button> — present in PFJ, absent in PF
166. **Fix attribute:** Vertical expandable example — role="tabpanel" on <section> — present in PFJ, absent in PF
167. **Fix attribute:** Vertical expandable example — tabindex="0" on <section> — present in PFJ, absent in PF
168. **Fix icon:** Vertical expandable example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
169. **Fix structure:** Page insets example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
170. **Fix structure:** Page insets example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
171. **Fix structure:** Page insets example — PF has <svg class="pf-v6-svg"> — missing in PFJ
172. **Fix structure:** Page insets example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
173. **Fix structure:** Page insets example — PFJ has <div class="pf-v6-c-check"> — not in PF
174. **Fix structure:** Page insets example — PFJ has <div class="pf-v6-u-mt-md"> — not in PF
175. **Fix structure:** Page insets example — PFJ has <input class="pf-v6-c-check__input"> — not in PF
176. **Fix structure:** Page insets example — PFJ has <label class="pf-v6-c-check__label"> — not in PF
177. **Fix structure:** Page insets example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
178. **Fix attribute:** Page insets example — aria-hidden="true" on <div> — present in PF, absent in PFJ
179. **Fix attribute:** Page insets example — aria-label="Page insets example" on <div> — present in PF, absent in PFJ
180. **Fix attribute:** Page insets example — aria-label="Page insets example" on <ul> — present in PF, absent in PFJ
181. **Fix attribute:** Page insets example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
182. **Fix attribute:** Page insets example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
183. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-containers-content" on <button> — present in PFJ, absent in PF
184. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-database-content" on <button> — present in PFJ, absent in PF
185. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-network-content" on <button> — present in PFJ, absent in PF
186. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-server-content" on <button> — present in PFJ, absent in PF
187. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-system-content" on <button> — present in PFJ, absent in PF
188. **Fix attribute:** Page insets example — aria-controls="tabs-page-insets-users-content" on <button> — present in PFJ, absent in PF
189. **Fix attribute:** Page insets example — aria-disabled="true" on <button> — present in PFJ, absent in PF
190. **Fix attribute:** Page insets example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
191. **Fix attribute:** Page insets example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
192. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-containers-tab" on <section> — present in PFJ, absent in PF
193. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-database-tab" on <section> — present in PFJ, absent in PF
194. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-network-tab" on <section> — present in PFJ, absent in PF
195. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-server-tab" on <section> — present in PFJ, absent in PF
196. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-system-tab" on <section> — present in PFJ, absent in PF
197. **Fix attribute:** Page insets example — aria-labelledby="tabs-page-insets-users-tab" on <section> — present in PFJ, absent in PF
198. **Fix attribute:** Page insets example — role="tabpanel" on <section> — present in PFJ, absent in PF
199. **Fix attribute:** Page insets example — tabindex="0" on <section> — present in PFJ, absent in PF
200. **Fix attribute:** Page insets example — type="checkbox" on <input> — present in PFJ, absent in PF
201. **Fix structure:** Icons and text example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
202. **Fix structure:** Icons and text example — PF has <span class="pf-v6-c-tabs__item-icon"> — missing in PFJ
203. **Fix structure:** Icons and text example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
204. **Fix structure:** Icons and text example — PF has <svg class="pf-v6-svg"> — missing in PFJ
205. **Fix structure:** Icons and text example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
206. **Fix structure:** Icons and text example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
207. **Fix attribute:** Icons and text example — aria-hidden="true" on <div> — present in PF, absent in PFJ
208. **Fix attribute:** Icons and text example — aria-label="Icons and text example" on <div> — present in PF, absent in PFJ
209. **Fix attribute:** Icons and text example — aria-label="Icons and text example" on <ul> — present in PF, absent in PFJ
210. **Fix attribute:** Icons and text example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
211. **Fix attribute:** Icons and text example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
212. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-containers-content" on <button> — present in PFJ, absent in PF
213. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-database-content" on <button> — present in PFJ, absent in PF
214. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-network-content" on <button> — present in PFJ, absent in PF
215. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-server-content" on <button> — present in PFJ, absent in PF
216. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-system-content" on <button> — present in PFJ, absent in PF
217. **Fix attribute:** Icons and text example — aria-controls="tabs-icon-text-users-content" on <button> — present in PFJ, absent in PF
218. **Fix attribute:** Icons and text example — aria-disabled="true" on <button> — present in PFJ, absent in PF
219. **Fix attribute:** Icons and text example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
220. **Fix attribute:** Icons and text example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
221. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-containers-tab" on <section> — present in PFJ, absent in PF
222. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-database-tab" on <section> — present in PFJ, absent in PF
223. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-network-tab" on <section> — present in PFJ, absent in PF
224. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-server-tab" on <section> — present in PFJ, absent in PF
225. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-system-tab" on <section> — present in PFJ, absent in PF
226. **Fix attribute:** Icons and text example — aria-labelledby="tabs-icon-text-users-tab" on <section> — present in PFJ, absent in PF
227. **Fix attribute:** Icons and text example — role="tabpanel" on <section> — present in PFJ, absent in PF
228. **Fix attribute:** Icons and text example — tabindex="0" on <section> — present in PFJ, absent in PF
229. **Fix icon:** Icons and text example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 640 512
230. **Fix icon:** Icons and text example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
231. **Fix icon:** Icons and text example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
232. **Fix icon:** Icons and text example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
233. **Fix icon:** Icons and text example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 640 512
234. **Fix structure:** Filled tabs example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
235. **Fix structure:** Filled tabs example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
236. **Fix structure:** Filled tabs example — PF has <svg class="pf-v6-svg"> — missing in PFJ
237. **Fix structure:** Filled tabs example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
238. **Fix structure:** Filled tabs example — PFJ has <div class="pf-v6-c-check"> — not in PF
239. **Fix structure:** Filled tabs example — PFJ has <div class="pf-v6-u-mt-md"> — not in PF
240. **Fix structure:** Filled tabs example — PFJ has <input class="pf-v6-c-check__input"> — not in PF
241. **Fix structure:** Filled tabs example — PFJ has <label class="pf-v6-c-check__label"> — not in PF
242. **Fix structure:** Filled tabs example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
243. **Fix attribute:** Filled tabs example — aria-hidden="true" on <div> — present in PF, absent in PFJ
244. **Fix attribute:** Filled tabs example — aria-label="Filled example" on <div> — present in PF, absent in PFJ
245. **Fix attribute:** Filled tabs example — aria-label="Filled example" on <ul> — present in PF, absent in PFJ
246. **Fix attribute:** Filled tabs example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
247. **Fix attribute:** Filled tabs example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
248. **Fix attribute:** Filled tabs example — aria-controls="tabs-icon-filled-containers-content" on <button> — present in PFJ, absent in PF
249. **Fix attribute:** Filled tabs example — aria-controls="tabs-icon-filled-database-content" on <button> — present in PFJ, absent in PF
250. **Fix attribute:** Filled tabs example — aria-controls="tabs-icon-filled-users-content" on <button> — present in PFJ, absent in PF
251. **Fix attribute:** Filled tabs example — aria-disabled="true" on <button> — present in PFJ, absent in PF
252. **Fix attribute:** Filled tabs example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
253. **Fix attribute:** Filled tabs example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
254. **Fix attribute:** Filled tabs example — aria-labelledby="tabs-icon-filled-containers-tab" on <section> — present in PFJ, absent in PF
255. **Fix attribute:** Filled tabs example — aria-labelledby="tabs-icon-filled-database-tab" on <section> — present in PFJ, absent in PF
256. **Fix attribute:** Filled tabs example — aria-labelledby="tabs-icon-filled-users-tab" on <section> — present in PFJ, absent in PF
257. **Fix attribute:** Filled tabs example — role="tabpanel" on <section> — present in PFJ, absent in PF
258. **Fix attribute:** Filled tabs example — tabindex="0" on <section> — present in PFJ, absent in PF
259. **Fix attribute:** Filled tabs example — type="checkbox" on <input> — present in PFJ, absent in PF
260. **Fix icon:** Filled tabs example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 640 512
261. **Fix CSS:** Using the nav element example — add missing class pf-m-scrollable on <nav>
262. **Fix structure:** Using the nav element example — PF has <a class="pf-m-disabled pf-v6-c-tabs__link"> — missing in PFJ
263. **Fix structure:** Using the nav element example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
264. **Fix structure:** Using the nav element example — PF has <nav class="pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
265. **Fix structure:** Using the nav element example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
266. **Fix structure:** Using the nav element example — PF has <svg class="pf-v6-svg"> — missing in PFJ
267. **Fix structure:** Using the nav element example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
268. **Fix structure:** Using the nav element example — PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
269. **Fix structure:** Using the nav element example — PFJ has <nav class="pf-m-subtab pf-v6-c-tabs"> — not in PF
270. **Fix structure:** Using the nav element example — PFJ has <nav class="pf-v6-c-tabs"> — not in PF
271. **Fix structure:** Using the nav element example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
272. **Fix attribute:** Using the nav element example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
273. **Fix attribute:** Using the nav element example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
274. **Fix attribute:** Using the nav element example — aria-label="Using nav element example" on <nav> — present in PF, absent in PFJ
275. **Fix attribute:** Using the nav element example — aria-label="Using nav element example" on <ul> — present in PF, absent in PFJ
276. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-disabled-aria-content" on <a> — present in PFJ, absent in PF
277. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-disabled-content" on <a> — present in PFJ, absent in PF
278. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-item-1-content" on <a> — present in PFJ, absent in PF
279. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-item-2-content" on <a> — present in PFJ, absent in PF
280. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-item-3-content" on <a> — present in PFJ, absent in PF
281. **Fix attribute:** Using the nav element example — aria-controls="secondary-tab-item-6-content" on <a> — present in PFJ, absent in PF
282. **Fix attribute:** Using the nav element example — aria-controls="tabs-secondary-network-content" on <a> — present in PFJ, absent in PF
283. **Fix attribute:** Using the nav element example — aria-controls="tabs-subtab-nav-containers-content" on <a> — present in PFJ, absent in PF
284. **Fix attribute:** Using the nav element example — aria-controls="tabs-subtab-nav-database-content" on <a> — present in PFJ, absent in PF
285. **Fix attribute:** Using the nav element example — aria-controls="tabs-subtab-nav-disabled-aria-content" on <a> — present in PFJ, absent in PF
286. **Fix attribute:** Using the nav element example — aria-controls="tabs-subtab-nav-disabled-content" on <a> — present in PFJ, absent in PF
287. **Fix attribute:** Using the nav element example — aria-controls="tabs-subtab-nav-users-content" on <a> — present in PFJ, absent in PF
288. **Fix attribute:** Using the nav element example — aria-disabled="true" on <button> — present in PFJ, absent in PF
289. **Fix attribute:** Using the nav element example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
290. **Fix attribute:** Using the nav element example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
291. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-disabled-aria-tab" on <section> — present in PFJ, absent in PF
292. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-disabled-tab" on <section> — present in PFJ, absent in PF
293. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-item-1-tab" on <section> — present in PFJ, absent in PF
294. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-item-2-tab" on <section> — present in PFJ, absent in PF
295. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-item-3-tab" on <section> — present in PFJ, absent in PF
296. **Fix attribute:** Using the nav element example — aria-labelledby="secondary-tab-item-6-tab" on <section> — present in PFJ, absent in PF
297. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-secondary-network-tab" on <section> — present in PFJ, absent in PF
298. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-subtab-nav-containers-tab" on <section> — present in PFJ, absent in PF
299. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-subtab-nav-database-tab" on <section> — present in PFJ, absent in PF
300. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-subtab-nav-disabled-aria-tab" on <section> — present in PFJ, absent in PF
301. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-subtab-nav-disabled-tab" on <section> — present in PFJ, absent in PF
302. **Fix attribute:** Using the nav element example — aria-labelledby="tabs-subtab-nav-users-tab" on <section> — present in PFJ, absent in PF
303. **Fix attribute:** Using the nav element example — role="region" on <nav> — present in PFJ, absent in PF
304. **Fix attribute:** Using the nav element example — role="tabpanel" on <section> — present in PFJ, absent in PF
305. **Fix attribute:** Using the nav element example — tabindex="0" on <section> — present in PFJ, absent in PF
306. **Fix CSS:** Sub tabs using the nav element example — add missing class pf-m-subtab on <nav>
307. **Fix structure:** Sub tabs using the nav element example — PF has <a class="pf-m-disabled pf-v6-c-tabs__link"> — missing in PFJ
308. **Fix structure:** Sub tabs using the nav element example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
309. **Fix structure:** Sub tabs using the nav element example — PF has <nav class="pf-m-subtab pf-v6-c-tabs"> — missing in PFJ
310. **Fix structure:** Sub tabs using the nav element example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
311. **Fix structure:** Sub tabs using the nav element example — PF has <svg class="pf-v6-svg"> — missing in PFJ
312. **Fix structure:** Sub tabs using the nav element example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
313. **Fix structure:** Sub tabs using the nav element example — PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
314. **Fix structure:** Sub tabs using the nav element example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
315. **Fix attribute:** Sub tabs using the nav element example — aria-hidden="true" on <div> — present in PF, absent in PFJ
316. **Fix attribute:** Sub tabs using the nav element example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
317. **Fix attribute:** Sub tabs using the nav element example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
318. **Fix attribute:** Sub tabs using the nav element example — aria-label="Using nav element with sub tabs example, Containers" on <nav> — present in PF, absent in PFJ
319. **Fix attribute:** Sub tabs using the nav element example — aria-label="Using nav element with sub tabs example, Containers" on <ul> — present in PF, absent in PFJ
320. **Fix attribute:** Sub tabs using the nav element example — aria-label="Using nav element with sub tabs example, primary" on <nav> — present in PF, absent in PFJ
321. **Fix attribute:** Sub tabs using the nav element example — aria-label="Using nav element with sub tabs example, primary" on <ul> — present in PF, absent in PFJ
322. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-nav-containers-content" on <a> — present in PFJ, absent in PF
323. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-nav-database-content" on <a> — present in PFJ, absent in PF
324. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-nav-disabled-aria-content" on <a> — present in PFJ, absent in PF
325. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-nav-disabled-content" on <a> — present in PFJ, absent in PF
326. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-nav-users-content" on <a> — present in PFJ, absent in PF
327. **Fix attribute:** Sub tabs using the nav element example — aria-controls="tabs-secondary-network-content" on <a> — present in PFJ, absent in PF
328. **Fix attribute:** Sub tabs using the nav element example — aria-disabled="true" on <button> — present in PFJ, absent in PF
329. **Fix attribute:** Sub tabs using the nav element example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
330. **Fix attribute:** Sub tabs using the nav element example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
331. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-nav-containers-tab" on <section> — present in PFJ, absent in PF
332. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-nav-database-tab" on <section> — present in PFJ, absent in PF
333. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-nav-disabled-aria-tab" on <section> — present in PFJ, absent in PF
334. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-nav-disabled-tab" on <section> — present in PFJ, absent in PF
335. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-nav-users-tab" on <section> — present in PFJ, absent in PF
336. **Fix attribute:** Sub tabs using the nav element example — aria-labelledby="tabs-secondary-network-tab" on <section> — present in PFJ, absent in PF
337. **Fix attribute:** Sub tabs using the nav element example — role="region" on <nav> — present in PFJ, absent in PF
338. **Fix attribute:** Sub tabs using the nav element example — role="tabpanel" on <section> — present in PFJ, absent in PF
339. **Fix attribute:** Sub tabs using the nav element example — tabindex="0" on <section> — present in PFJ, absent in PF
340. **Fix CSS:** Help and close button example — add missing class pf-m-aria-disabled on <button>
341. **Fix CSS:** Help and close button example — add missing class pf-m-box on <div>
342. **Fix CSS:** Help and close button example — add missing class pf-m-fill on <div>
343. **Fix CSS:** Help and close button example — add missing class pf-m-scrollable on <div>
344. **Fix CSS:** Help and close button example — add missing class pf-m-secondary on <div>
345. **Fix CSS:** Help and close button example — add missing class pf-m-subtab on <div>
346. **Fix CSS:** Help and close button example — add missing class pf-v6-c-tabs__item-icon on <span>
347. **Fix structure:** Help and close button example — PF has <button class="pf-m-aria-disabled pf-m-plain pf-v6-c-button"> — missing in PFJ
348. **Fix structure:** Help and close button example — PF has <button class="pf-m-aria-disabled pf-v6-c-tabs__link"> — missing in PFJ
349. **Fix structure:** Help and close button example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
350. **Fix structure:** Help and close button example — PF has <div class="pf-m-box pf-m-scrollable pf-m-secondary pf-v6-c-tabs"> — missing in PFJ
351. **Fix structure:** Help and close button example — PF has <div class="pf-m-box pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
352. **Fix structure:** Help and close button example — PF has <div class="pf-m-scrollable pf-v6-c-tabs"> — missing in PFJ
353. **Fix structure:** Help and close button example — PF has <li class="pf-m-action pf-m-disabled pf-v6-c-tabs__item"> — missing in PFJ
354. **Fix structure:** Help and close button example — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
355. **Fix structure:** Help and close button example — PF has <svg class="pf-v6-svg"> — missing in PFJ
356. **Fix structure:** Help and close button example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
357. **Fix structure:** Help and close button example — PFJ has <div class="pf-v6-c-tabs"> — not in PF
358. **Fix structure:** Help and close button example — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
359. **Fix attribute:** Help and close button example — aria-hidden="true" on <div> — present in PF, absent in PFJ
360. **Fix attribute:** Help and close button example — aria-label="Close ARIA disabled" on <button> — present in PF, absent in PFJ
361. **Fix attribute:** Help and close button example — aria-label="Close Close disabled" on <button> — present in PF, absent in PFJ
362. **Fix attribute:** Help and close button example — aria-label="Close Containers" on <button> — present in PF, absent in PFJ
363. **Fix attribute:** Help and close button example — aria-label="Close Database" on <button> — present in PF, absent in PFJ
364. **Fix attribute:** Help and close button example — aria-label="Close Disabled" on <button> — present in PF, absent in PFJ
365. **Fix attribute:** Help and close button example — aria-label="Close Help and close disabled" on <button> — present in PF, absent in PFJ
366. **Fix attribute:** Help and close button example — aria-label="Close Help disabled" on <button> — present in PF, absent in PFJ
367. **Fix attribute:** Help and close button example — aria-label="Close Network" on <button> — present in PF, absent in PFJ
368. **Fix attribute:** Help and close button example — aria-label="Close Users" on <button> — present in PF, absent in PFJ
369. **Fix attribute:** Help and close button example — aria-label="Help and close button box example" on <div> — present in PF, absent in PFJ
370. **Fix attribute:** Help and close button example — aria-label="Help and close button box example" on <ul> — present in PF, absent in PFJ
371. **Fix attribute:** Help and close button example — aria-label="Help and close button box secondary variant example" on <div> — present in PF, absent in PFJ
372. **Fix attribute:** Help and close button example — aria-label="Help and close button box secondary variant example" on <ul> — present in PF, absent in PFJ
373. **Fix attribute:** Help and close button example — aria-label="Help and close button default example" on <div> — present in PF, absent in PFJ
374. **Fix attribute:** Help and close button example — aria-label="Help and close button default example" on <ul> — present in PF, absent in PFJ
375. **Fix attribute:** Help and close button example — aria-label="Help and close button filled example" on <div> — present in PF, absent in PFJ
376. **Fix attribute:** Help and close button example — aria-label="Help and close button filled example" on <ul> — present in PF, absent in PFJ
377. **Fix attribute:** Help and close button example — aria-label="Help and close button with icons example" on <div> — present in PF, absent in PFJ
378. **Fix attribute:** Help and close button example — aria-label="Help and close button with icons example" on <ul> — present in PF, absent in PFJ
379. **Fix attribute:** Help and close button example — aria-label="Help and close button with sub tabs example, Containers" on <div> — present in PF, absent in PFJ
380. **Fix attribute:** Help and close button example — aria-label="Help and close button with sub tabs example, Containers" on <ul> — present in PF, absent in PFJ
381. **Fix attribute:** Help and close button example — aria-label="Help and close button with sub tabs example, primary" on <div> — present in PF, absent in PFJ
382. **Fix attribute:** Help and close button example — aria-label="Help and close button with sub tabs example, primary" on <ul> — present in PF, absent in PFJ
383. **Fix attribute:** Help and close button example — aria-label="More info for ARIA disabled label" on <button> — present in PF, absent in PFJ
384. **Fix attribute:** Help and close button example — aria-label="More info for Close disabled label" on <button> — present in PF, absent in PFJ
385. **Fix attribute:** Help and close button example — aria-label="More info for Containers label" on <button> — present in PF, absent in PFJ
386. **Fix attribute:** Help and close button example — aria-label="More info for Database label" on <button> — present in PF, absent in PFJ
387. **Fix attribute:** Help and close button example — aria-label="More info for Disabled label" on <button> — present in PF, absent in PFJ
388. **Fix attribute:** Help and close button example — aria-label="More info for Help and close disabled label" on <button> — present in PF, absent in PFJ
389. **Fix attribute:** Help and close button example — aria-label="More info for Help disabled label" on <button> — present in PF, absent in PFJ
390. **Fix attribute:** Help and close button example — aria-label="More info for Network label" on <button> — present in PF, absent in PFJ
391. **Fix attribute:** Help and close button example — aria-label="More info for Users label" on <button> — present in PF, absent in PFJ
392. **Fix attribute:** Help and close button example — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
393. **Fix attribute:** Help and close button example — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
394. **Fix attribute:** Help and close button example — aria-controls="tabs-help-close-1-content" on <button> — present in PFJ, absent in PF
395. **Fix attribute:** Help and close button example — aria-controls="tabs-help-close-2-content" on <button> — present in PFJ, absent in PF
396. **Fix attribute:** Help and close button example — aria-controls="tabs-help-close-3-content" on <button> — present in PFJ, absent in PF
397. **Fix attribute:** Help and close button example — aria-describedby="pvr-body-id-407" on <div> — present in PFJ, absent in PF
398. **Fix attribute:** Help and close button example — aria-describedby="pvr-body-id-413" on <div> — present in PFJ, absent in PF
399. **Fix attribute:** Help and close button example — aria-describedby="pvr-body-id-419" on <div> — present in PFJ, absent in PF
400. **Fix attribute:** Help and close button example — aria-disabled="false" on <button> — present in PFJ, absent in PF
401. **Fix attribute:** Help and close button example — aria-label="Close Terminal 1" on <button> — present in PFJ, absent in PF
402. **Fix attribute:** Help and close button example — aria-label="Close Terminal 2" on <button> — present in PFJ, absent in PF
403. **Fix attribute:** Help and close button example — aria-label="Close Terminal 3" on <button> — present in PFJ, absent in PF
404. **Fix attribute:** Help and close button example — aria-label="Close" on <button> — present in PFJ, absent in PF
405. **Fix attribute:** Help and close button example — aria-label="More info for Terminal 1" on <button> — present in PFJ, absent in PF
406. **Fix attribute:** Help and close button example — aria-label="More info for Terminal 2" on <button> — present in PFJ, absent in PF
407. **Fix attribute:** Help and close button example — aria-label="More info for Terminal 3" on <button> — present in PFJ, absent in PF
408. **Fix attribute:** Help and close button example — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
409. **Fix attribute:** Help and close button example — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
410. **Fix attribute:** Help and close button example — aria-labelledby="pvr-header-id-410" on <div> — present in PFJ, absent in PF
411. **Fix attribute:** Help and close button example — aria-labelledby="pvr-header-id-416" on <div> — present in PFJ, absent in PF
412. **Fix attribute:** Help and close button example — aria-labelledby="pvr-header-id-422" on <div> — present in PFJ, absent in PF
413. **Fix attribute:** Help and close button example — aria-labelledby="tabs-help-close-1-tab" on <section> — present in PFJ, absent in PF
414. **Fix attribute:** Help and close button example — aria-labelledby="tabs-help-close-2-tab" on <section> — present in PFJ, absent in PF
415. **Fix attribute:** Help and close button example — aria-labelledby="tabs-help-close-3-tab" on <section> — present in PFJ, absent in PF
416. **Fix attribute:** Help and close button example — aria-modal="true" on <div> — present in PFJ, absent in PF
417. **Fix attribute:** Help and close button example — role="dialog" on <div> — present in PFJ, absent in PF
418. **Fix attribute:** Help and close button example — role="tabpanel" on <section> — present in PFJ, absent in PF
419. **Fix attribute:** Help and close button example — tabindex="0" on <section> — present in PFJ, absent in PF
420. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 1024 1024
421. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
422. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 1024 1024
423. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
424. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 1024 1024
425. **Fix icon:** Help and close button example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
426. **Fix CSS:** Animate filled tabs accent — add missing class pf-m-animate-current on <div>
427. **Fix CSS:** Animate filled tabs accent — add missing class pf-m-fill on <div>
428. **Fix structure:** Animate filled tabs accent — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
429. **Fix structure:** Animate filled tabs accent — PF has <div class="pf-m-animate-current pf-m-fill pf-v6-c-tabs"> — missing in PFJ
430. **Fix structure:** Animate filled tabs accent — PF has <span class="pf-v6-c-tabs__item-text"> — missing in PFJ
431. **Fix structure:** Animate filled tabs accent — PF has <svg class="pf-v6-svg"> — missing in PFJ
432. **Fix structure:** Animate filled tabs accent — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
433. **Fix structure:** Animate filled tabs accent — PFJ has <button class="pf-m-primary pf-v6-c-button pf-v6-u-mb-lg"> — not in PF
434. **Fix structure:** Animate filled tabs accent — PFJ has <div class="pf-v6-c-tabs"> — not in PF
435. **Fix structure:** Animate filled tabs accent — PFJ has <section class="pf-v6-c-tab-content"> — not in PF
436. **Fix structure:** Animate filled tabs accent — PFJ has <span class="pf-v6-c-button__text"> — not in PF
437. **Fix attribute:** Animate filled tabs accent — aria-hidden="true" on <div> — present in PF, absent in PFJ
438. **Fix attribute:** Animate filled tabs accent — aria-label="Animate filled example" on <div> — present in PF, absent in PFJ
439. **Fix attribute:** Animate filled tabs accent — aria-label="Animate filled example" on <ul> — present in PF, absent in PFJ
440. **Fix attribute:** Animate filled tabs accent — aria-label="Scroll left" on <button> — present in PF, absent in PFJ
441. **Fix attribute:** Animate filled tabs accent — aria-label="Scroll right" on <button> — present in PF, absent in PFJ
442. **Fix attribute:** Animate filled tabs accent — aria-controls="tabs-hide-tab-1-content" on <button> — present in PFJ, absent in PF
443. **Fix attribute:** Animate filled tabs accent — aria-controls="tabs-hide-tab-2-content" on <button> — present in PFJ, absent in PF
444. **Fix attribute:** Animate filled tabs accent — aria-controls="tabs-hide-tab-3-content" on <button> — present in PFJ, absent in PF
445. **Fix attribute:** Animate filled tabs accent — aria-disabled="true" on <button> — present in PFJ, absent in PF
446. **Fix attribute:** Animate filled tabs accent — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
447. **Fix attribute:** Animate filled tabs accent — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
448. **Fix attribute:** Animate filled tabs accent — aria-labelledby="tabs-hide-tab-1-tab" on <section> — present in PFJ, absent in PF
449. **Fix attribute:** Animate filled tabs accent — aria-labelledby="tabs-hide-tab-2-tab" on <section> — present in PFJ, absent in PF
450. **Fix attribute:** Animate filled tabs accent — aria-labelledby="tabs-hide-tab-3-tab" on <section> — present in PFJ, absent in PF
451. **Fix attribute:** Animate filled tabs accent — role="tabpanel" on <section> — present in PFJ, absent in PF
452. **Fix attribute:** Animate filled tabs accent — tabindex="0" on <section> — present in PFJ, absent in PF
453. **Fix structure:** Padding — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
454. **Fix structure:** Padding — PFJ has <button class="pf-v6-c-tabs__link"> — not in PF
455. **Fix structure:** Padding — PFJ has <div class="pf-v6-c-tabs"> — not in PF
456. **Fix structure:** Padding — PFJ has <div class="pf-v6-c-tabs__scroll-button"> — not in PF
457. **Fix structure:** Padding — PFJ has <li class="pf-m-current pf-v6-c-tabs__item"> — not in PF
458. **Fix structure:** Padding — PFJ has <li class="pf-v6-c-tabs__item"> — not in PF
459. **Fix structure:** Padding — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
460. **Fix structure:** Padding — PFJ has <ul class="pf-v6-c-tabs__list"> — not in PF
461. **Fix attribute:** Padding — aria-controls="tabs-body-padding-1-content" on <button> — present in PFJ, absent in PF
462. **Fix attribute:** Padding — aria-controls="tabs-body-padding-2-content" on <button> — present in PFJ, absent in PF
463. **Fix attribute:** Padding — aria-controls="tabs-body-padding-3-content" on <button> — present in PFJ, absent in PF
464. **Fix attribute:** Padding — aria-disabled="true" on <button> — present in PFJ, absent in PF
465. **Fix attribute:** Padding — aria-hidden="true" on <svg> — present in PFJ, absent in PF
466. **Fix attribute:** Padding — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
467. **Fix attribute:** Padding — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
468. **Fix attribute:** Padding — aria-labelledby="tabs-body-padding-1-tab" on <section> — present in PFJ, absent in PF
469. **Fix attribute:** Padding — aria-labelledby="tabs-body-padding-2-tab" on <section> — present in PFJ, absent in PF
470. **Fix attribute:** Padding — aria-labelledby="tabs-body-padding-3-tab" on <section> — present in PFJ, absent in PF
471. **Fix attribute:** Padding — aria-selected="false" on <button> — present in PFJ, absent in PF
472. **Fix attribute:** Padding — aria-selected="true" on <button> — present in PFJ, absent in PF
473. **Fix attribute:** Padding — role="img" on <svg> — present in PFJ, absent in PF
474. **Fix attribute:** Padding — role="presentation" on <li> — present in PFJ, absent in PF
475. **Fix attribute:** Padding — role="region" on <div> — present in PFJ, absent in PF
476. **Fix attribute:** Padding — role="tab" on <button> — present in PFJ, absent in PF
477. **Fix attribute:** Padding — role="tablist" on <ul> — present in PFJ, absent in PF
478. **Fix attribute:** Padding — type="button" on <button> — present in PFJ, absent in PF
479. **Fix CSS:** Secondary — add missing class pf-v6-c-tab-content__body on <div>
480. **Fix structure:** Secondary — PF has <div class="pf-v6-c-tab-content__body"> — missing in PFJ
481. **Fix structure:** Secondary — PFJ has <button class="pf-m-aria-disabled pf-v6-c-tabs__link"> — not in PF
482. **Fix structure:** Secondary — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
483. **Fix structure:** Secondary — PFJ has <button class="pf-v6-c-tabs__link"> — not in PF
484. **Fix structure:** Secondary — PFJ has <div class="pf-m-secondary pf-v6-c-tabs"> — not in PF
485. **Fix structure:** Secondary — PFJ has <div class="pf-v6-c-tabs__scroll-button"> — not in PF
486. **Fix structure:** Secondary — PFJ has <li class="pf-m-current pf-v6-c-tabs__item"> — not in PF
487. **Fix structure:** Secondary — PFJ has <li class="pf-m-disabled pf-v6-c-tabs__item"> — not in PF
488. **Fix structure:** Secondary — PFJ has <li class="pf-v6-c-tabs__item"> — not in PF
489. **Fix structure:** Secondary — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
490. **Fix structure:** Secondary — PFJ has <ul class="pf-v6-c-tabs__list"> — not in PF
491. **Fix attribute:** Secondary — aria-controls="tabs-secondary-containers-content" on <button> — present in PFJ, absent in PF
492. **Fix attribute:** Secondary — aria-controls="tabs-secondary-database-content" on <button> — present in PFJ, absent in PF
493. **Fix attribute:** Secondary — aria-controls="tabs-secondary-disabled-aria-content" on <button> — present in PFJ, absent in PF
494. **Fix attribute:** Secondary — aria-controls="tabs-secondary-disabled-content" on <button> — present in PFJ, absent in PF
495. **Fix attribute:** Secondary — aria-controls="tabs-secondary-users-content" on <button> — present in PFJ, absent in PF
496. **Fix attribute:** Secondary — aria-disabled="true" on <button> — present in PFJ, absent in PF
497. **Fix attribute:** Secondary — aria-hidden="true" on <svg> — present in PFJ, absent in PF
498. **Fix attribute:** Secondary — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
499. **Fix attribute:** Secondary — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
500. **Fix attribute:** Secondary — aria-labelledby="tabs-secondary-containers-tab" on <section> — present in PFJ, absent in PF
501. **Fix attribute:** Secondary — aria-labelledby="tabs-secondary-database-tab" on <section> — present in PFJ, absent in PF
502. **Fix attribute:** Secondary — aria-labelledby="tabs-secondary-disabled-aria-tab" on <section> — present in PFJ, absent in PF
503. **Fix attribute:** Secondary — aria-labelledby="tabs-secondary-disabled-tab" on <section> — present in PFJ, absent in PF
504. **Fix attribute:** Secondary — aria-labelledby="tabs-secondary-users-tab" on <section> — present in PFJ, absent in PF
505. **Fix attribute:** Secondary — aria-selected="false" on <button> — present in PFJ, absent in PF
506. **Fix attribute:** Secondary — aria-selected="true" on <button> — present in PFJ, absent in PF
507. **Fix attribute:** Secondary — role="img" on <svg> — present in PFJ, absent in PF
508. **Fix attribute:** Secondary — role="presentation" on <li> — present in PFJ, absent in PF
509. **Fix attribute:** Secondary — role="region" on <div> — present in PFJ, absent in PF
510. **Fix attribute:** Secondary — role="tab" on <button> — present in PFJ, absent in PF
511. **Fix attribute:** Secondary — role="tablist" on <ul> — present in PFJ, absent in PF
512. **Fix attribute:** Secondary — type="button" on <button> — present in PFJ, absent in PF
