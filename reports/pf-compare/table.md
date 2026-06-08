---
component: table
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/table/html
pfj_url: http://localhost:1234/components/table
completeness:
  pf_total: 50
  pfj_total: 33
  matched: 23
  missing_in_pfj:
    - overflow-menu-usage-desktop
    - overflow-menu-usage-overflow-menu-collapsed
    - overflow-menu-usage-mobile
    - table-with-buttons-and-actions
    - expandable-with-nested-table-example
    - compound-expansion-example-with-nested-table
    - animated-compound-expansion-example
    - plain-example
    - compact-example
    - compact-expandable-example
    - clickable-example
    - clickable-and-expandable-example
    - tree-with-no-children-or-indentation
    - borderless-example
    - borderless-compact-example
    - borderless-expandable-example
    - borderless-with-compound-expansion-example
    - width-modifiers-examples
    - text-control-using-the-table-text-element-example
    - table-with-long-strings-in-the-content
    - width-constrained
    - sticky-header-with-base-and-stuck
    - sticky-right-column
    - nested-column-headers-sticky-header
    - favorites-examples
    - favorites-sortable-example
    - striped-expandable-table-example
  extra_in_pfj:
    - table-row-wrapper
    - table-sort-custom
    - table-sel-click
    - table-actions-overflow
    - table-text-mod
    - table-empty
    - table-fav
    - table-tree-static
    - table-sticky-mod
    - table-sticky-col-right
---

# PF Compare: table

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic table example | Basic | matched (semantic) |
| 2 | Sortable example | Sortable & wrapping headers | matched (semantic) |
| 3 | Checkboxes and actions example | Actions | matched (semantic) |
| 4 | Single select radio example | Selectable radio input | matched (semantic) |
| 5 | Expandable example | Expandable | matched (semantic) |
| 6 | Animated expandable | Striped expandable | matched (semantic) |
| 7 | Expandable with set width columns example | Expandable with nested table | matched (semantic) |
| 8 | Compound expansion example | Compound expandable | matched (semantic) |
| 9 | Tree table basic | Tree table (async) | matched (semantic) |
| 10 | Tree table with checkboxes | Selectable with checkbox | matched (semantic) |
| 11 | Tree table with checkboxes and icons | Flat tree table with no inset | matched (semantic) |
| 12 | Hidden/visible breakpoint modifiers example | Cell width, breakpoint modifiers | matched (semantic) |
| 13 | Text control example | Controlling text | matched (semantic) |
| 14 | Sticky header | Nested sticky header | matched (semantic) |
| 15 | Sticky column | Sticky column | matched (exact) |
| 16 | Multiple sticky columns | Multiple left-aligned sticky columns | matched (semantic) |
| 17 | Sticky columns and header | Sticky columns and header | matched (exact) |
| 18 | Nested column headers and expandable rows | Nested column headers and expandable rows | matched (exact) |
| 19 | Nested column headers example | Nested column headers | matched (semantic) |
| 20 | Draggable rows example | Draggable row table | matched (semantic) |
| 21 | Striped table example | Striped | matched (semantic) |
| 22 | Striped multiple tbody example | Striped multiple tobdy | matched (semantic) |
| 23 | Striped tr example | Striped tr | matched (semantic) |
| 24 | Overflow menu usage, desktop | --- | missing_in_pfj |
| 25 | Overflow menu usage, overflow menu collapsed | --- | missing_in_pfj |
| 26 | Overflow menu usage, mobile | --- | missing_in_pfj |
| 27 | Table with buttons and actions | --- | missing_in_pfj |
| 28 | Expandable with nested table example | --- | missing_in_pfj |
| 29 | Compound expansion example with nested table | --- | missing_in_pfj |
| 30 | Animated compound expansion example | --- | missing_in_pfj |
| 31 | Plain example | --- | missing_in_pfj |
| 32 | Compact example | --- | missing_in_pfj |
| 33 | Compact expandable example | --- | missing_in_pfj |
| 34 | Clickable example | --- | missing_in_pfj |
| 35 | Clickable and expandable example | --- | missing_in_pfj |
| 36 | Tree with no children or indentation | --- | missing_in_pfj |
| 37 | Borderless example | --- | missing_in_pfj |
| 38 | Borderless compact example | --- | missing_in_pfj |
| 39 | Borderless expandable example | --- | missing_in_pfj |
| 40 | Borderless with compound expansion example | --- | missing_in_pfj |
| 41 | Width modifiers examples | --- | missing_in_pfj |
| 42 | Text control using the table text element example | --- | missing_in_pfj |
| 43 | Table with long strings in the content | --- | missing_in_pfj |
| 44 | Width constrained | --- | missing_in_pfj |
| 45 | Sticky header with base and stuck | --- | missing_in_pfj |
| 46 | Sticky right column | --- | missing_in_pfj |
| 47 | Nested column headers, sticky header | --- | missing_in_pfj |
| 48 | Favorites examples | --- | missing_in_pfj |
| 49 | Favorites sortable example | --- | missing_in_pfj |
| 50 | Striped expandable table example | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Custom row wrapper, header tooltips & popovers (`table-row-wrapper`)
- Sortable - custom control (`table-sort-custom`)
- Row click handler, clickable rows (`table-sel-click`)
- Actions overflow (`table-actions-overflow`)
- Modifiers with table text (`table-text-mod`)
- Empty state (`table-empty`)
- Favoritable (implemented with sortable) (`table-fav`)
- Tree table (static) (`table-tree-static`)
- Sticky table modifiers (`table-sticky-mod`)
- Multiple right-aligned sticky columns (`table-sticky-col-right`)

## DOM Comparison

### Basic table example

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-selected` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-toggle-group` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toggle-group__button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-toggle-group__item` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toggle-group__text` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — not in PF
- PFJ has <button class="pf-v6-c-toggle-group__button"> — not in PF
- PFJ has <div class="pf-v6-c-toggle-group"> — not in PF
- PFJ has <div class="pf-v6-c-toggle-group__item"> — not in PF
- PFJ has <span class="pf-v6-c-toggle-group__text"> — not in PF

#### Attribute Differences
- aria-label="This is a simple table example" on <table> — present in PF, absent in PFJ
- aria-pressed="false" on <button> — present in PFJ, absent in PF
- aria-pressed="true" on <button> — present in PFJ, absent in PF
- role="group" on <div> — present in PFJ, absent in PF
- tabindex="-1" on <td> — present in PFJ, absent in PF
- tabindex="-1" on <th> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Sortable example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-help` on `<th>` — present in PF, absent in PFJ
- `.pf-m-no-padding` on `<button>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__column-help` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__column-help-action` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-v6-c-table__button"> — missing in PFJ
- PF has <div class="pf-v6-c-table__column-help"> — missing in PFJ
- PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-help pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-help pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-selected pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a sortable table example" on <table> — present in PF, absent in PFJ
- aria-label="aria-label="More info"" on <button> — present in PF, absent in PFJ
- aria-sort="ascending" on <th> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

### Checkboxes and actions example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-action` on `<td>` — present in PFJ, absent in PF
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-m-fit-content` on `<td>` — present in PFJ, absent in PF
- `.pf-m-secondary` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-table__text` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
- PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-menu-toggle"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
- PFJ has <button class="pf-m-secondary pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF
- PFJ has <span class="pf-v6-c-table__text"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <tbody class="pf-v6-c-table__tbody"> — not in PF
- PFJ has <td class="pf-m-action pf-m-fit-content pf-v6-c-table__td"> — not in PF
- PFJ has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — not in PF
- PFJ has <td class="pf-v6-c-table__td"> — not in PF
- PFJ has <th class="pf-v6-c-table__th"> — not in PF

#### Attribute Differences
- aria-label="Check row" on <td> — present in PF, absent in PFJ
- aria-label="Row select" on <th> — present in PF, absent in PFJ
- aria-label="Select all rows" on <input> — present in PF, absent in PFJ
- aria-label="Select row" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="This is a table with checkboxes" on <table> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="-1" on <td> — present in PFJ, absent in PF
- tabindex="-1" on <th> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

### Single select radio example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-radio` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-radio__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <label class="pf-m-standalone pf-v6-c-radio"> — missing in PFJ
- PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__check pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-label="Standalone radio" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="This is single select table with radio inputs" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="radio" on <input> — present in PF, absent in PFJ

### Expandable example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expandable` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<tbody>` — present in PF, absent in PFJ
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-no-padding` on `<td>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<th>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-m-width-30` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
- PF has <table class="pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-controls="table-expandable-content-1 table-expandable-content-2 table-expandable-content-3 table-expandable-content-4" on <button> — present in PF, absent in PFJ
- aria-controls="table-expandable-content-1" on <button> — present in PF, absent in PFJ
- aria-controls="table-expandable-content-2" on <button> — present in PF, absent in PFJ
- aria-controls="table-expandable-content-3" on <button> — present in PF, absent in PFJ
- aria-controls="table-expandable-content-4" on <button> — present in PF, absent in PFJ
- aria-describedby="true" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Check row" on <td> — present in PF, absent in PFJ
- aria-label="Expandable table example" on <table> — present in PF, absent in PFJ
- aria-label="Row expansion" on <td> — present in PF, absent in PFJ
- aria-label="Row expansion" on <th> — present in PF, absent in PFJ
- aria-label="Row select" on <th> — present in PF, absent in PFJ
- aria-label="Select all rows" on <input> — present in PF, absent in PFJ
- aria-label="Select row" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-expandable-node-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-expandable-node-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-expandable-node-3" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-expandable-node-4" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-expandable-node-thead" on <button> — present in PF, absent in PFJ
- aria-sort="ascending" on <th> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Animated expandable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-animate-expand` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expandable` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<tbody>` — present in PF, absent in PFJ
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-no-padding` on `<td>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<th>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-m-width-30` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
- PF has <table class="pf-m-animate-expand pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-controls="table-animated-expandable-content-1 table-animated-expandable-content-2 table-animated-expandable-content-3 table-animated-expandable-content-4" on <button> — present in PF, absent in PFJ
- aria-controls="table-animated-expandable-content-1" on <button> — present in PF, absent in PFJ
- aria-controls="table-animated-expandable-content-2" on <button> — present in PF, absent in PFJ
- aria-controls="table-animated-expandable-content-3" on <button> — present in PF, absent in PFJ
- aria-controls="table-animated-expandable-content-4" on <button> — present in PF, absent in PFJ
- aria-describedby="true" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Animated expandable table example" on <table> — present in PF, absent in PFJ
- aria-label="Check row" on <td> — present in PF, absent in PFJ
- aria-label="Row expansion" on <td> — present in PF, absent in PFJ
- aria-label="Row expansion" on <th> — present in PF, absent in PFJ
- aria-label="Row select" on <th> — present in PF, absent in PFJ
- aria-label="Select all rows" on <input> — present in PF, absent in PFJ
- aria-label="Select row" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-animated-expandable-node-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-animated-expandable-node-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-animated-expandable-node-3" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-animated-expandable-node-4" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-animated-expandable-node-thead" on <button> — present in PF, absent in PFJ
- aria-sort="ascending" on <th> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Expandable with set width columns example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expandable` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<button>` — present in PF, absent in PFJ
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<th>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-m-width-10` on `<th>` — present in PF, absent in PFJ
- `.pf-m-width-20` on `<th>` — present in PF, absent in PFJ
- `.pf-m-width-30` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-expanded pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
- PF has <table class="pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-controls="expandable-set-width-columns-example-content-1 expandable-set-width-columns-example-content-2 expandable-set-width-columns-example-content-3 expandable-set-width-columns-example-content-4" on <button> — present in PF, absent in PFJ
- aria-controls="expandable-set-width-columns-example-content-1" on <button> — present in PF, absent in PFJ
- aria-controls="expandable-set-width-columns-example-content-2" on <button> — present in PF, absent in PFJ
- aria-controls="expandable-set-width-columns-example-content-3" on <button> — present in PF, absent in PFJ
- aria-controls="expandable-set-width-columns-example-content-4" on <button> — present in PF, absent in PFJ
- aria-describedby="true" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Check row" on <td> — present in PF, absent in PFJ
- aria-label="Expandable table, set column widths example" on <table> — present in PF, absent in PFJ
- aria-label="Row expansion" on <td> — present in PF, absent in PFJ
- aria-label="Row expansion" on <th> — present in PF, absent in PFJ
- aria-label="Row select" on <th> — present in PF, absent in PFJ
- aria-label="Select all rows" on <input> — present in PF, absent in PFJ
- aria-label="Select row" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-set-width-columns-example-node-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-set-width-columns-example-node-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-set-width-columns-example-node-3" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-set-width-columns-example-node-4" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-set-width-columns-example-node-thead" on <button> — present in PF, absent in PFJ
- aria-sort="ascending" on <th> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Compound expansion example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-compact` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expandable` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<tbody>` — present in PF, absent in PFJ
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-no-background` on `<div>` — present in PF, absent in PFJ
- `.pf-m-no-border-rows` on `<table>` — present in PF, absent in PFJ
- `.pf-m-no-padding` on `<td>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-selected` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__compound-expansion-toggle` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__control-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
- PF has <button class="pf-v6-c-table__button"> — missing in PFJ
- PF has <div class="pf-m-no-background pf-v6-c-table__expandable-row-content"> — missing in PFJ
- PF has <div class="pf-v6-c-table__expandable-row-content"> — missing in PFJ
- PF has <table class="pf-m-expandable pf-m-grid-md pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-m-expanded pf-v6-c-table__tbody"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-m-expanded pf-v6-c-table__compound-expansion-toggle pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-m-no-padding pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__compound-expansion-toggle pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-selected pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-m-expanded pf-v6-c-table__control-row pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-m-expanded pf-v6-c-table__expandable-row pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__control-row pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__expandable-row pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Compound expandable table example" on <table> — present in PF, absent in PFJ
- aria-label="Nested table" on <table> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-sort="ascending" on <th> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

### Tree table basic

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-tree-view-details-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-tree-view-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__details-toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-title-header-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-screen-reader` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-primary` on `<button>` — present in PFJ, absent in PF
- `.pf-m-tree-view-grid-md` on `<table>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-table__tree-view-details-toggle-icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-table__tree-view-icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-u-mb-sm` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ
- PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
- PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-m-tree-view-details-expanded pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <button class="pf-m-primary pf-v6-c-button pf-v6-u-mb-sm"> — not in PF
- PFJ has <span class="pf-v6-c-button__text"> — not in PF
- PFJ has <table class="pf-m-tree-view pf-m-tree-view-grid-md pf-v6-c-table"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <tr> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <tr> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="This is a simple tree table example" on <table> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-basic-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-1 tree-table-basic-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-12 tree-table-basic-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-15 tree-table-basic-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-2 tree-table-basic-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-7 tree-table-basic-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-basic-example-node-9 tree-table-basic-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
- aria-level="2" on <tr> — present in PF, absent in PFJ
- aria-level="3" on <tr> — present in PF, absent in PFJ
- aria-level="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="1" on <tr> — present in PF, absent in PFJ
- aria-posinset="2" on <tr> — present in PF, absent in PFJ
- aria-posinset="3" on <tr> — present in PF, absent in PFJ
- aria-posinset="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="5" on <tr> — present in PF, absent in PFJ
- aria-posinset="6" on <tr> — present in PF, absent in PFJ
- aria-setsize="1" on <tr> — present in PF, absent in PFJ
- aria-setsize="2" on <tr> — present in PF, absent in PFJ
- aria-setsize="5" on <tr> — present in PF, absent in PFJ
- tabindex="-1" on <tr> — present in PF, absent in PFJ
- tabindex="0" on <tr> — present in PF, absent in PFJ
- aria-label="Show row details" on <button> — present in PFJ, absent in PF
- role="rowgroup" on <tbody> — present in PFJ, absent in PF
- tabindex="-1" on <td> — present in PFJ, absent in PF
- tabindex="-1" on <th> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Tree table with checkboxes

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-tree-view` on `<table>` — present in PF, absent in PFJ
- `.pf-m-tree-view-details-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-tree-view-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__details-toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-details-toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-text` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-title-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-title-header-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-screen-reader` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-svg` on `<svg>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-v6-c-table__tree-view-main"> — missing in PFJ
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ
- PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <tr> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <tr> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="This is a simple tree table, with checkboxes example" on <table> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-1 tree-table-with-checkboxes-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-12 tree-table-with-checkboxes-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-15 tree-table-with-checkboxes-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-2 tree-table-with-checkboxes-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-7 tree-table-with-checkboxes-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-example-node-9 tree-table-with-checkboxes-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
- aria-level="1" on <tr> — present in PF, absent in PFJ
- aria-level="2" on <tr> — present in PF, absent in PFJ
- aria-level="3" on <tr> — present in PF, absent in PFJ
- aria-level="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="1" on <tr> — present in PF, absent in PFJ
- aria-posinset="2" on <tr> — present in PF, absent in PFJ
- aria-posinset="3" on <tr> — present in PF, absent in PFJ
- aria-posinset="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="5" on <tr> — present in PF, absent in PFJ
- aria-posinset="6" on <tr> — present in PF, absent in PFJ
- aria-setsize="1" on <tr> — present in PF, absent in PFJ
- aria-setsize="2" on <tr> — present in PF, absent in PFJ
- aria-setsize="5" on <tr> — present in PF, absent in PFJ
- role="gridcell" on <td> — present in PF, absent in PFJ
- role="img" on <svg> — present in PF, absent in PFJ
- role="treegrid" on <table> — present in PF, absent in PFJ
- tabindex="-1" on <tr> — present in PF, absent in PFJ
- tabindex="0" on <tr> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- aria-label="Check row" on <td> — present in PFJ, absent in PF
- aria-label="Row selector" on <th> — present in PFJ, absent in PF
- aria-label="Select all rows" on <input> — present in PFJ, absent in PF
- aria-label="Select row" on <input> — present in PFJ, absent in PF
- role="cell" on <td> — present in PFJ, absent in PF
- role="rowgroup" on <tbody> — present in PFJ, absent in PF
- tabindex="-1" on <td> — present in PFJ, absent in PF
- tabindex="-1" on <th> — present in PFJ, absent in PF

### Tree table with checkboxes and icons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-m-tree-view` on `<table>` — present in PF, absent in PFJ
- `.pf-m-tree-view-details-expanded` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-tree-view-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__action` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__details-toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-details-toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-main` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-text` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-title-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tree-view-title-header-cell` on `<th>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-table__tree-view-main"> — missing in PFJ
- PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <tr> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <tr> — present in PF, absent in PFJ
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Standalone check" on <input> — present in PF, absent in PFJ
- aria-label="Table actions" on <button> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-label="tree-table-with-checkboxes-icons-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-1 tree-table-with-checkboxes-icons-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-12 tree-table-with-checkboxes-icons-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-15 tree-table-with-checkboxes-icons-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-2 tree-table-with-checkboxes-icons-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-7 tree-table-with-checkboxes-icons-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
- aria-labelledby="tree-table-with-checkboxes-icons-example-node-9 tree-table-with-checkboxes-icons-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
- aria-level="1" on <tr> — present in PF, absent in PFJ
- aria-level="2" on <tr> — present in PF, absent in PFJ
- aria-level="3" on <tr> — present in PF, absent in PFJ
- aria-level="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="1" on <tr> — present in PF, absent in PFJ
- aria-posinset="2" on <tr> — present in PF, absent in PFJ
- aria-posinset="3" on <tr> — present in PF, absent in PFJ
- aria-posinset="4" on <tr> — present in PF, absent in PFJ
- aria-posinset="5" on <tr> — present in PF, absent in PFJ
- aria-posinset="6" on <tr> — present in PF, absent in PFJ
- aria-setsize="1" on <tr> — present in PF, absent in PFJ
- aria-setsize="2" on <tr> — present in PF, absent in PFJ
- aria-setsize="5" on <tr> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="gridcell" on <td> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="treegrid" on <table> — present in PF, absent in PFJ
- tabindex="-1" on <tr> — present in PF, absent in PFJ
- tabindex="0" on <tr> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Hidden/visible breakpoint modifiers example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-hidden` on `<th>` — present in PF, absent in PFJ
- `.pf-m-hidden-on-lg` on `<th>` — present in PF, absent in PFJ
- `.pf-m-hidden-on-md` on `<th>` — present in PF, absent in PFJ
- `.pf-m-visible-on-lg` on `<th>` — present in PF, absent in PFJ
- `.pf-m-visible-on-md` on `<th>` — present in PF, absent in PFJ
- `.pf-m-visible-on-sm` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-m-hidden pf-m-hidden-on-lg pf-m-visible-on-md pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-m-hidden pf-m-visible-on-sm pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-m-hidden-on-md pf-m-visible-on-lg pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-hidden pf-m-hidden-on-lg pf-m-visible-on-md pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-hidden pf-m-visible-on-sm pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-hidden-on-md pf-m-visible-on-lg pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="Table with hidden and visible modifiers example" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Text control example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-break-word` on `<td>` — present in PF, absent in PFJ
- `.pf-m-fit-content` on `<th>` — present in PF, absent in PFJ
- `.pf-m-grid-lg` on `<table>` — present in PF, absent in PFJ
- `.pf-m-nowrap` on `<td>` — present in PF, absent in PFJ
- `.pf-m-truncate` on `<td>` — present in PF, absent in PFJ
- `.pf-m-width-20` on `<th>` — present in PF, absent in PFJ
- `.pf-m-wrap` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-m-break-word pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-m-truncate pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-fit-content pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-width-20 pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-wrap pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a simple table example" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Sticky header

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-sticky-header` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <table class="pf-m-grid-md pf-m-sticky-header pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a table with sticky header cells" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Sticky column

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-border-right` on `<th>` — present in PF, absent in PFJ
- `.pf-m-left` on `<th>` — present in PF, absent in PFJ
- `.pf-m-nowrap` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sticky-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <table class="pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ

### Multiple sticky columns

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-border-right` on `<th>` — present in PF, absent in PFJ
- `.pf-m-left` on `<th>` — present in PF, absent in PFJ
- `.pf-m-nowrap` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sticky-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <table class="pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ

### Sticky columns and header

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-border-right` on `<th>` — present in PF, absent in PFJ
- `.pf-m-left` on `<th>` — present in PF, absent in PFJ
- `.pf-m-nowrap` on `<th>` — present in PF, absent in PFJ
- `.pf-m-sticky-header` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-outer-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sticky-cell` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <div class="pf-v6-c-scroll-outer-wrapper"> — missing in PFJ
- PF has <table class="pf-m-sticky-header pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ

### Nested column headers and expandable rows

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-border-right` on `<th>` — present in PF, absent in PFJ
- `.pf-m-expandable` on `<table>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<tbody>` — present in PF, absent in PFJ
- `.pf-m-first-cell-offset-reset` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-inline` on `<button>` — present in PF, absent in PFJ
- `.pf-m-link` on `<button>` — present in PF, absent in PFJ
- `.pf-m-nested-column-header` on `<thead>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-standalone` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-button__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-check` on `<label>` — present in PF, absent in PFJ
- `.pf-v6-c-check__input` on `<input>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__check` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table__expandable-row-content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__subhead` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__toggle-icon` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <table class="pf-m-expandable pf-v6-c-table"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-m-nested-column-header pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-controls="nested-columns-expandable-example-content-1" on <button> — present in PF, absent in PFJ
- aria-controls="nested-columns-expandable-example-content-2" on <button> — present in PF, absent in PFJ
- aria-controls="nested-columns-expandable-example-content-3" on <button> — present in PF, absent in PFJ
- aria-describedby="true" on <button> — present in PF, absent in PFJ
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Check row" on <td> — present in PF, absent in PFJ
- aria-label="Row expansion" on <td> — present in PF, absent in PFJ
- aria-label="Row select" on <th> — present in PF, absent in PFJ
- aria-label="Select all rows" on <input> — present in PF, absent in PFJ
- aria-label="Select row" on <input> — present in PF, absent in PFJ
- aria-label="This is a nested column header table example" on <table> — present in PF, absent in PFJ
- aria-label="Toggle row" on <button> — present in PF, absent in PFJ
- aria-labelledby="nested-columns-expandable-example-node-1" on <button> — present in PF, absent in PFJ
- aria-labelledby="nested-columns-expandable-example-node-2" on <button> — present in PF, absent in PFJ
- aria-labelledby="nested-columns-expandable-example-node-3" on <button> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- type="checkbox" on <input> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Nested column headers example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-border-right` on `<th>` — present in PF, absent in PFJ
- `.pf-m-fit-content` on `<th>` — present in PF, absent in PFJ
- `.pf-m-flex-1` on `<div>` — present in PF, absent in PFJ
- `.pf-m-nested-column-header` on `<thead>` — present in PF, absent in PFJ
- `.pf-m-nowrap` on `<div>` — present in PF, absent in PFJ
- `.pf-m-teal` on `<span>` — present in PF, absent in PFJ
- `.pf-m-truncate` on `<span>` — present in PF, absent in PFJ
- `.pf-m-wrap` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-label` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-label__content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-label__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-scroll-inner-wrapper` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-table__button-content` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__sort-indicator` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__subhead` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-l-flex` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-l-flex__item` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-l-stack` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-u-color-200` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
- PF has <table class="pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-border-right pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-m-wrap pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-m-nested-column-header pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a nested column header table example" on <table> — present in PF, absent in PFJ
- aria-sort="none" on <th> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ

### Draggable rows example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-ghost-row` on `<tr>` — present in PF, absent in PFJ
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__caption` on `<caption>` — present in PF, absent in PFJ
- `.pf-v6-c-table__cell-empty` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__draggable` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
- PF has <div class="pf-v6-screen-reader"> — missing in PFJ
- PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__draggable pf-v6-c-table__td"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-m-ghost-row pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-describedby="table-draggable-rows-help" on <button> — present in PF, absent in PFJ
- aria-label="Reorder" on <button> — present in PF, absent in PFJ
- aria-label="This is a table with draggable rows example" on <table> — present in PF, absent in PFJ
- aria-labelledby="table-draggable-rows-row-1-draggable-button table-draggable-rows-row-1-node" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-draggable-rows-row-2-draggable-button table-draggable-rows-row-2-node" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-draggable-rows-row-3-draggable-button table-draggable-rows-row-3-node" on <button> — present in PF, absent in PFJ
- aria-labelledby="table-draggable-rows-row-4-draggable-button table-draggable-rows-row-4-node" on <button> — present in PF, absent in PFJ
- aria-live="assertive" on <div> — present in PF, absent in PFJ
- aria-pressed="false" on <button> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 320 512`, PFJ uses viewBox `0 0 32 32`

### Striped table example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-striped` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__caption` on `<caption>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
- PF has <table class="pf-m-grid-md pf-m-striped pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a striped table example" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Striped multiple tbody example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-striped` on `<tbody>` — present in PF, absent in PFJ
- `.pf-m-striped-even` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__caption` on `<caption>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
- PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-m-striped pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a striped tbody example" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Striped tr example

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-grid-md` on `<table>` — present in PF, absent in PFJ
- `.pf-m-striped` on `<tr>` — present in PF, absent in PFJ
- `.pf-v6-c-table` on `<table>` — present in PF, absent in PFJ
- `.pf-v6-c-table__caption` on `<caption>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tbody` on `<tbody>` — present in PF, absent in PFJ
- `.pf-v6-c-table__td` on `<td>` — present in PF, absent in PFJ
- `.pf-v6-c-table__th` on `<th>` — present in PF, absent in PFJ
- `.pf-v6-c-table__thead` on `<thead>` — present in PF, absent in PFJ
- `.pf-v6-c-table__tr` on `<tr>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
- PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
- PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
- PF has <td class="pf-v6-c-table__td"> — missing in PFJ
- PF has <th class="pf-v6-c-table__th"> — missing in PFJ
- PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
- PF has <tr class="pf-m-striped pf-v6-c-table__tr"> — missing in PFJ
- PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="This is a striped tr example" on <table> — present in PF, absent in PFJ
- role="cell" on <td> — present in PF, absent in PFJ
- role="columnheader" on <th> — present in PF, absent in PFJ
- role="grid" on <table> — present in PF, absent in PFJ
- role="row" on <tr> — present in PF, absent in PFJ
- role="rowgroup" on <tbody> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Overflow menu usage, desktop — implement Overflow menu usage, desktop variation in PFJ
2. **Add variation:** Overflow menu usage, overflow menu collapsed — implement Overflow menu usage, overflow menu collapsed variation in PFJ
3. **Add variation:** Overflow menu usage, mobile — implement Overflow menu usage, mobile variation in PFJ
4. **Add variation:** Table with buttons and actions — implement Table with buttons and actions variation in PFJ
5. **Add variation:** Expandable with nested table example — implement Expandable with nested table example variation in PFJ
6. **Add variation:** Compound expansion example with nested table — implement Compound expansion example with nested table variation in PFJ
7. **Add variation:** Animated compound expansion example — implement Animated compound expansion example variation in PFJ
8. **Add variation:** Plain example — implement Plain example variation in PFJ
9. **Add variation:** Compact example — implement Compact example variation in PFJ
10. **Add variation:** Compact expandable example — implement Compact expandable example variation in PFJ
11. **Add variation:** Clickable example — implement Clickable example variation in PFJ
12. **Add variation:** Clickable and expandable example — implement Clickable and expandable example variation in PFJ
13. **Add variation:** Tree with no children or indentation — implement Tree with no children or indentation variation in PFJ
14. **Add variation:** Borderless example — implement Borderless example variation in PFJ
15. **Add variation:** Borderless compact example — implement Borderless compact example variation in PFJ
16. **Add variation:** Borderless expandable example — implement Borderless expandable example variation in PFJ
17. **Add variation:** Borderless with compound expansion example — implement Borderless with compound expansion example variation in PFJ
18. **Add variation:** Width modifiers examples — implement Width modifiers examples variation in PFJ
19. **Add variation:** Text control using the table text element example — implement Text control using the table text element example variation in PFJ
20. **Add variation:** Table with long strings in the content — implement Table with long strings in the content variation in PFJ
21. **Add variation:** Width constrained — implement Width constrained variation in PFJ
22. **Add variation:** Sticky header with base and stuck — implement Sticky header with base and stuck variation in PFJ
23. **Add variation:** Sticky right column — implement Sticky right column variation in PFJ
24. **Add variation:** Nested column headers, sticky header — implement Nested column headers, sticky header variation in PFJ
25. **Add variation:** Favorites examples — implement Favorites examples variation in PFJ
26. **Add variation:** Favorites sortable example — implement Favorites sortable example variation in PFJ
27. **Add variation:** Striped expandable table example — implement Striped expandable table example variation in PFJ
28. **Fix structure:** Basic table example — PFJ has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — not in PF
29. **Fix structure:** Basic table example — PFJ has <button class="pf-v6-c-toggle-group__button"> — not in PF
30. **Fix structure:** Basic table example — PFJ has <div class="pf-v6-c-toggle-group"> — not in PF
31. **Fix structure:** Basic table example — PFJ has <div class="pf-v6-c-toggle-group__item"> — not in PF
32. **Fix structure:** Basic table example — PFJ has <span class="pf-v6-c-toggle-group__text"> — not in PF
33. **Fix attribute:** Basic table example — aria-label="This is a simple table example" on <table> — present in PF, absent in PFJ
34. **Fix attribute:** Basic table example — aria-pressed="false" on <button> — present in PFJ, absent in PF
35. **Fix attribute:** Basic table example — aria-pressed="true" on <button> — present in PFJ, absent in PF
36. **Fix attribute:** Basic table example — role="group" on <div> — present in PFJ, absent in PF
37. **Fix attribute:** Basic table example — tabindex="-1" on <td> — present in PFJ, absent in PF
38. **Fix attribute:** Basic table example — tabindex="-1" on <th> — present in PFJ, absent in PF
39. **Fix attribute:** Basic table example — type="button" on <button> — present in PFJ, absent in PF
40. **Fix CSS:** Sortable example — add missing class pf-m-grid-lg on <table>
41. **Fix CSS:** Sortable example — add missing class pf-m-help on <th>
42. **Fix CSS:** Sortable example — add missing class pf-m-no-padding on <button>
43. **Fix CSS:** Sortable example — add missing class pf-m-plain on <button>
44. **Fix CSS:** Sortable example — add missing class pf-m-selected on <th>
45. **Fix CSS:** Sortable example — add missing class pf-v6-c-button on <button>
46. **Fix CSS:** Sortable example — add missing class pf-v6-c-button__icon on <span>
47. **Fix CSS:** Sortable example — add missing class pf-v6-c-table on <table>
48. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__button on <button>
49. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__button-content on <span>
50. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__column-help on <div>
51. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__column-help-action on <span>
52. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__sort on <th>
53. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__sort-indicator on <span>
54. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__tbody on <tbody>
55. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__td on <td>
56. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__text on <span>
57. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__th on <th>
58. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__thead on <thead>
59. **Fix CSS:** Sortable example — add missing class pf-v6-c-table__tr on <tr>
60. **Fix structure:** Sortable example — PF has <button class="pf-v6-c-table__button"> — missing in PFJ
61. **Fix structure:** Sortable example — PF has <div class="pf-v6-c-table__column-help"> — missing in PFJ
62. **Fix structure:** Sortable example — PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
63. **Fix structure:** Sortable example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
64. **Fix structure:** Sortable example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
65. **Fix structure:** Sortable example — PF has <th class="pf-m-help pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
66. **Fix structure:** Sortable example — PF has <th class="pf-m-help pf-v6-c-table__th"> — missing in PFJ
67. **Fix structure:** Sortable example — PF has <th class="pf-m-selected pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
68. **Fix structure:** Sortable example — PF has <th class="pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
69. **Fix structure:** Sortable example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
70. **Fix structure:** Sortable example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
71. **Fix structure:** Sortable example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
72. **Fix structure:** Sortable example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
73. **Fix structure:** Sortable example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
74. **Fix structure:** Sortable example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
75. **Fix structure:** Sortable example — PFJ has <svg class="pf-v6-svg"> — not in PF
76. **Fix attribute:** Sortable example — aria-label="This is a sortable table example" on <table> — present in PF, absent in PFJ
77. **Fix attribute:** Sortable example — aria-label="aria-label="More info"" on <button> — present in PF, absent in PFJ
78. **Fix attribute:** Sortable example — aria-sort="ascending" on <th> — present in PF, absent in PFJ
79. **Fix attribute:** Sortable example — aria-sort="none" on <th> — present in PF, absent in PFJ
80. **Fix attribute:** Sortable example — role="cell" on <td> — present in PF, absent in PFJ
81. **Fix attribute:** Sortable example — role="columnheader" on <th> — present in PF, absent in PFJ
82. **Fix attribute:** Sortable example — role="grid" on <table> — present in PF, absent in PFJ
83. **Fix attribute:** Sortable example — role="row" on <tr> — present in PF, absent in PFJ
84. **Fix attribute:** Sortable example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
85. **Fix attribute:** Sortable example — type="button" on <button> — present in PF, absent in PFJ
86. **Fix CSS:** Checkboxes and actions example — add missing class pf-m-grid-lg on <table>
87. **Fix CSS:** Checkboxes and actions example — add missing class pf-m-standalone on <label>
88. **Fix CSS:** Checkboxes and actions example — add missing class pf-v6-c-check on <label>
89. **Fix CSS:** Checkboxes and actions example — add missing class pf-v6-c-check__input on <input>
90. **Fix CSS:** Checkboxes and actions example — add missing class pf-v6-c-table on <table>
91. **Fix CSS:** Checkboxes and actions example — add missing class pf-v6-c-table__cell-empty on <th>
92. **Fix CSS:** Checkboxes and actions example — add missing class pf-v6-c-table__check on <th>
93. **Fix structure:** Checkboxes and actions example — PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
94. **Fix structure:** Checkboxes and actions example — PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
95. **Fix structure:** Checkboxes and actions example — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
96. **Fix structure:** Checkboxes and actions example — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-menu-toggle"> — not in PF
97. **Fix structure:** Checkboxes and actions example — PFJ has <button class="pf-m-plain pf-v6-c-menu-toggle"> — not in PF
98. **Fix structure:** Checkboxes and actions example — PFJ has <button class="pf-m-secondary pf-v6-c-button"> — not in PF
99. **Fix structure:** Checkboxes and actions example — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
100. **Fix structure:** Checkboxes and actions example — PFJ has <div class="pf-v6-c-menu"> — not in PF
101. **Fix structure:** Checkboxes and actions example — PFJ has <span class="pf-v6-c-menu-toggle__icon"> — not in PF
102. **Fix structure:** Checkboxes and actions example — PFJ has <span class="pf-v6-c-table__text"> — not in PF
103. **Fix structure:** Checkboxes and actions example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
104. **Fix structure:** Checkboxes and actions example — PFJ has <tbody class="pf-v6-c-table__tbody"> — not in PF
105. **Fix structure:** Checkboxes and actions example — PFJ has <td class="pf-m-action pf-m-fit-content pf-v6-c-table__td"> — not in PF
106. **Fix structure:** Checkboxes and actions example — PFJ has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — not in PF
107. **Fix structure:** Checkboxes and actions example — PFJ has <td class="pf-v6-c-table__td"> — not in PF
108. **Fix structure:** Checkboxes and actions example — PFJ has <th class="pf-v6-c-table__th"> — not in PF
109. **Fix attribute:** Checkboxes and actions example — aria-label="Check row" on <td> — present in PF, absent in PFJ
110. **Fix attribute:** Checkboxes and actions example — aria-label="Row select" on <th> — present in PF, absent in PFJ
111. **Fix attribute:** Checkboxes and actions example — aria-label="Select all rows" on <input> — present in PF, absent in PFJ
112. **Fix attribute:** Checkboxes and actions example — aria-label="Select row" on <input> — present in PF, absent in PFJ
113. **Fix attribute:** Checkboxes and actions example — aria-label="Table actions" on <button> — present in PF, absent in PFJ
114. **Fix attribute:** Checkboxes and actions example — aria-label="This is a table with checkboxes" on <table> — present in PF, absent in PFJ
115. **Fix attribute:** Checkboxes and actions example — role="grid" on <table> — present in PF, absent in PFJ
116. **Fix attribute:** Checkboxes and actions example — type="checkbox" on <input> — present in PF, absent in PFJ
117. **Fix attribute:** Checkboxes and actions example — aria-disabled="true" on <a> — present in PFJ, absent in PF
118. **Fix attribute:** Checkboxes and actions example — aria-label="Column actions" on <button> — present in PFJ, absent in PF
119. **Fix attribute:** Checkboxes and actions example — role="menu" on <ul> — present in PFJ, absent in PF
120. **Fix attribute:** Checkboxes and actions example — role="menuitem" on <a> — present in PFJ, absent in PF
121. **Fix attribute:** Checkboxes and actions example — role="menuitem" on <button> — present in PFJ, absent in PF
122. **Fix attribute:** Checkboxes and actions example — role="none" on <li> — present in PFJ, absent in PF
123. **Fix attribute:** Checkboxes and actions example — role="separator" on <li> — present in PFJ, absent in PF
124. **Fix attribute:** Checkboxes and actions example — tabindex="-1" on <a> — present in PFJ, absent in PF
125. **Fix attribute:** Checkboxes and actions example — tabindex="-1" on <button> — present in PFJ, absent in PF
126. **Fix attribute:** Checkboxes and actions example — tabindex="-1" on <td> — present in PFJ, absent in PF
127. **Fix attribute:** Checkboxes and actions example — tabindex="-1" on <th> — present in PFJ, absent in PF
128. **Fix attribute:** Checkboxes and actions example — tabindex="0" on <button> — present in PFJ, absent in PF
129. **Fix CSS:** Single select radio example — add missing class pf-m-grid-lg on <table>
130. **Fix CSS:** Single select radio example — add missing class pf-m-plain on <button>
131. **Fix CSS:** Single select radio example — add missing class pf-m-standalone on <label>
132. **Fix CSS:** Single select radio example — add missing class pf-v6-c-menu-toggle on <button>
133. **Fix CSS:** Single select radio example — add missing class pf-v6-c-menu-toggle__icon on <span>
134. **Fix CSS:** Single select radio example — add missing class pf-v6-c-radio on <label>
135. **Fix CSS:** Single select radio example — add missing class pf-v6-c-radio__input on <input>
136. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table on <table>
137. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__action on <td>
138. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__cell-empty on <th>
139. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__check on <th>
140. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__tbody on <tbody>
141. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__td on <td>
142. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__th on <th>
143. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__thead on <thead>
144. **Fix CSS:** Single select radio example — add missing class pf-v6-c-table__tr on <tr>
145. **Fix structure:** Single select radio example — PF has <label class="pf-m-standalone pf-v6-c-radio"> — missing in PFJ
146. **Fix structure:** Single select radio example — PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
147. **Fix structure:** Single select radio example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
148. **Fix structure:** Single select radio example — PF has <td class="pf-v6-c-table__check pf-v6-c-table__td"> — missing in PFJ
149. **Fix structure:** Single select radio example — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
150. **Fix structure:** Single select radio example — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
151. **Fix structure:** Single select radio example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
152. **Fix structure:** Single select radio example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
153. **Fix structure:** Single select radio example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
154. **Fix structure:** Single select radio example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
155. **Fix structure:** Single select radio example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
156. **Fix structure:** Single select radio example — PFJ has <svg class="pf-v6-svg"> — not in PF
157. **Fix attribute:** Single select radio example — aria-expanded="false" on <button> — present in PF, absent in PFJ
158. **Fix attribute:** Single select radio example — aria-label="Standalone radio" on <input> — present in PF, absent in PFJ
159. **Fix attribute:** Single select radio example — aria-label="Table actions" on <button> — present in PF, absent in PFJ
160. **Fix attribute:** Single select radio example — aria-label="This is single select table with radio inputs" on <table> — present in PF, absent in PFJ
161. **Fix attribute:** Single select radio example — role="cell" on <td> — present in PF, absent in PFJ
162. **Fix attribute:** Single select radio example — role="columnheader" on <th> — present in PF, absent in PFJ
163. **Fix attribute:** Single select radio example — role="grid" on <table> — present in PF, absent in PFJ
164. **Fix attribute:** Single select radio example — role="row" on <tr> — present in PF, absent in PFJ
165. **Fix attribute:** Single select radio example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
166. **Fix attribute:** Single select radio example — type="button" on <button> — present in PF, absent in PFJ
167. **Fix attribute:** Single select radio example — type="radio" on <input> — present in PF, absent in PFJ
168. **Fix CSS:** Expandable example — add missing class pf-m-expandable on <table>
169. **Fix CSS:** Expandable example — add missing class pf-m-expanded on <tbody>
170. **Fix CSS:** Expandable example — add missing class pf-m-grid-lg on <table>
171. **Fix CSS:** Expandable example — add missing class pf-m-no-padding on <td>
172. **Fix CSS:** Expandable example — add missing class pf-m-plain on <button>
173. **Fix CSS:** Expandable example — add missing class pf-m-selected on <th>
174. **Fix CSS:** Expandable example — add missing class pf-m-standalone on <label>
175. **Fix CSS:** Expandable example — add missing class pf-m-width-30 on <th>
176. **Fix CSS:** Expandable example — add missing class pf-v6-c-button on <button>
177. **Fix CSS:** Expandable example — add missing class pf-v6-c-button__icon on <span>
178. **Fix CSS:** Expandable example — add missing class pf-v6-c-check on <label>
179. **Fix CSS:** Expandable example — add missing class pf-v6-c-check__input on <input>
180. **Fix CSS:** Expandable example — add missing class pf-v6-c-menu-toggle on <button>
181. **Fix CSS:** Expandable example — add missing class pf-v6-c-menu-toggle__icon on <span>
182. **Fix CSS:** Expandable example — add missing class pf-v6-c-table on <table>
183. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__action on <td>
184. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__button on <button>
185. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__button-content on <span>
186. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__cell-empty on <th>
187. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__check on <th>
188. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__expandable-row on <tr>
189. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__expandable-row-content on <div>
190. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__sort on <th>
191. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__sort-indicator on <span>
192. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__tbody on <tbody>
193. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__td on <td>
194. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__text on <span>
195. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__th on <th>
196. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__thead on <thead>
197. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__toggle on <th>
198. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__toggle-icon on <div>
199. **Fix CSS:** Expandable example — add missing class pf-v6-c-table__tr on <tr>
200. **Fix structure:** Expandable example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
201. **Fix structure:** Expandable example — PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
202. **Fix structure:** Expandable example — PF has <table class="pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
203. **Fix structure:** Expandable example — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
204. **Fix structure:** Expandable example — PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
205. **Fix structure:** Expandable example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
206. **Fix structure:** Expandable example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
207. **Fix structure:** Expandable example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
208. **Fix structure:** Expandable example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
209. **Fix structure:** Expandable example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
210. **Fix structure:** Expandable example — PFJ has <svg class="pf-v6-svg"> — not in PF
211. **Fix attribute:** Expandable example — aria-controls="table-expandable-content-1 table-expandable-content-2 table-expandable-content-3 table-expandable-content-4" on <button> — present in PF, absent in PFJ
212. **Fix attribute:** Expandable example — aria-controls="table-expandable-content-1" on <button> — present in PF, absent in PFJ
213. **Fix attribute:** Expandable example — aria-controls="table-expandable-content-2" on <button> — present in PF, absent in PFJ
214. **Fix attribute:** Expandable example — aria-controls="table-expandable-content-3" on <button> — present in PF, absent in PFJ
215. **Fix attribute:** Expandable example — aria-controls="table-expandable-content-4" on <button> — present in PF, absent in PFJ
216. **Fix attribute:** Expandable example — aria-describedby="true" on <button> — present in PF, absent in PFJ
217. **Fix attribute:** Expandable example — aria-expanded="false" on <button> — present in PF, absent in PFJ
218. **Fix attribute:** Expandable example — aria-expanded="true" on <button> — present in PF, absent in PFJ
219. **Fix attribute:** Expandable example — aria-label="Check row" on <td> — present in PF, absent in PFJ
220. **Fix attribute:** Expandable example — aria-label="Expandable table example" on <table> — present in PF, absent in PFJ
221. **Fix attribute:** Expandable example — aria-label="Row expansion" on <td> — present in PF, absent in PFJ
222. **Fix attribute:** Expandable example — aria-label="Row expansion" on <th> — present in PF, absent in PFJ
223. **Fix attribute:** Expandable example — aria-label="Row select" on <th> — present in PF, absent in PFJ
224. **Fix attribute:** Expandable example — aria-label="Select all rows" on <input> — present in PF, absent in PFJ
225. **Fix attribute:** Expandable example — aria-label="Select row" on <input> — present in PF, absent in PFJ
226. **Fix attribute:** Expandable example — aria-label="Table actions" on <button> — present in PF, absent in PFJ
227. **Fix attribute:** Expandable example — aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
228. **Fix attribute:** Expandable example — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
229. **Fix attribute:** Expandable example — aria-labelledby="table-expandable-node-1" on <button> — present in PF, absent in PFJ
230. **Fix attribute:** Expandable example — aria-labelledby="table-expandable-node-2" on <button> — present in PF, absent in PFJ
231. **Fix attribute:** Expandable example — aria-labelledby="table-expandable-node-3" on <button> — present in PF, absent in PFJ
232. **Fix attribute:** Expandable example — aria-labelledby="table-expandable-node-4" on <button> — present in PF, absent in PFJ
233. **Fix attribute:** Expandable example — aria-labelledby="table-expandable-node-thead" on <button> — present in PF, absent in PFJ
234. **Fix attribute:** Expandable example — aria-sort="ascending" on <th> — present in PF, absent in PFJ
235. **Fix attribute:** Expandable example — aria-sort="none" on <th> — present in PF, absent in PFJ
236. **Fix attribute:** Expandable example — role="cell" on <td> — present in PF, absent in PFJ
237. **Fix attribute:** Expandable example — role="columnheader" on <th> — present in PF, absent in PFJ
238. **Fix attribute:** Expandable example — role="grid" on <table> — present in PF, absent in PFJ
239. **Fix attribute:** Expandable example — role="row" on <tr> — present in PF, absent in PFJ
240. **Fix attribute:** Expandable example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
241. **Fix attribute:** Expandable example — type="button" on <button> — present in PF, absent in PFJ
242. **Fix attribute:** Expandable example — type="checkbox" on <input> — present in PF, absent in PFJ
243. **Fix icon:** Expandable example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
244. **Fix CSS:** Animated expandable — add missing class pf-m-animate-expand on <table>
245. **Fix CSS:** Animated expandable — add missing class pf-m-expandable on <table>
246. **Fix CSS:** Animated expandable — add missing class pf-m-expanded on <tbody>
247. **Fix CSS:** Animated expandable — add missing class pf-m-grid-lg on <table>
248. **Fix CSS:** Animated expandable — add missing class pf-m-no-padding on <td>
249. **Fix CSS:** Animated expandable — add missing class pf-m-plain on <button>
250. **Fix CSS:** Animated expandable — add missing class pf-m-selected on <th>
251. **Fix CSS:** Animated expandable — add missing class pf-m-standalone on <label>
252. **Fix CSS:** Animated expandable — add missing class pf-m-width-30 on <th>
253. **Fix CSS:** Animated expandable — add missing class pf-v6-c-button on <button>
254. **Fix CSS:** Animated expandable — add missing class pf-v6-c-button__icon on <span>
255. **Fix CSS:** Animated expandable — add missing class pf-v6-c-check on <label>
256. **Fix CSS:** Animated expandable — add missing class pf-v6-c-check__input on <input>
257. **Fix CSS:** Animated expandable — add missing class pf-v6-c-menu-toggle on <button>
258. **Fix CSS:** Animated expandable — add missing class pf-v6-c-menu-toggle__icon on <span>
259. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table on <table>
260. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__action on <td>
261. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__button on <button>
262. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__button-content on <span>
263. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__cell-empty on <th>
264. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__check on <th>
265. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__expandable-row on <tr>
266. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__expandable-row-content on <div>
267. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__sort on <th>
268. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__sort-indicator on <span>
269. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__tbody on <tbody>
270. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__td on <td>
271. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__text on <span>
272. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__th on <th>
273. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__thead on <thead>
274. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__toggle on <th>
275. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__toggle-icon on <div>
276. **Fix CSS:** Animated expandable — add missing class pf-v6-c-table__tr on <tr>
277. **Fix structure:** Animated expandable — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
278. **Fix structure:** Animated expandable — PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
279. **Fix structure:** Animated expandable — PF has <table class="pf-m-animate-expand pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
280. **Fix structure:** Animated expandable — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
281. **Fix structure:** Animated expandable — PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
282. **Fix structure:** Animated expandable — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
283. **Fix structure:** Animated expandable — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
284. **Fix structure:** Animated expandable — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
285. **Fix structure:** Animated expandable — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
286. **Fix structure:** Animated expandable — PFJ has <span class="pf-v6-screen-reader"> — not in PF
287. **Fix structure:** Animated expandable — PFJ has <svg class="pf-v6-svg"> — not in PF
288. **Fix attribute:** Animated expandable — aria-controls="table-animated-expandable-content-1 table-animated-expandable-content-2 table-animated-expandable-content-3 table-animated-expandable-content-4" on <button> — present in PF, absent in PFJ
289. **Fix attribute:** Animated expandable — aria-controls="table-animated-expandable-content-1" on <button> — present in PF, absent in PFJ
290. **Fix attribute:** Animated expandable — aria-controls="table-animated-expandable-content-2" on <button> — present in PF, absent in PFJ
291. **Fix attribute:** Animated expandable — aria-controls="table-animated-expandable-content-3" on <button> — present in PF, absent in PFJ
292. **Fix attribute:** Animated expandable — aria-controls="table-animated-expandable-content-4" on <button> — present in PF, absent in PFJ
293. **Fix attribute:** Animated expandable — aria-describedby="true" on <button> — present in PF, absent in PFJ
294. **Fix attribute:** Animated expandable — aria-expanded="false" on <button> — present in PF, absent in PFJ
295. **Fix attribute:** Animated expandable — aria-expanded="true" on <button> — present in PF, absent in PFJ
296. **Fix attribute:** Animated expandable — aria-label="Animated expandable table example" on <table> — present in PF, absent in PFJ
297. **Fix attribute:** Animated expandable — aria-label="Check row" on <td> — present in PF, absent in PFJ
298. **Fix attribute:** Animated expandable — aria-label="Row expansion" on <td> — present in PF, absent in PFJ
299. **Fix attribute:** Animated expandable — aria-label="Row expansion" on <th> — present in PF, absent in PFJ
300. **Fix attribute:** Animated expandable — aria-label="Row select" on <th> — present in PF, absent in PFJ
301. **Fix attribute:** Animated expandable — aria-label="Select all rows" on <input> — present in PF, absent in PFJ
302. **Fix attribute:** Animated expandable — aria-label="Select row" on <input> — present in PF, absent in PFJ
303. **Fix attribute:** Animated expandable — aria-label="Table actions" on <button> — present in PF, absent in PFJ
304. **Fix attribute:** Animated expandable — aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
305. **Fix attribute:** Animated expandable — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
306. **Fix attribute:** Animated expandable — aria-labelledby="table-animated-expandable-node-1" on <button> — present in PF, absent in PFJ
307. **Fix attribute:** Animated expandable — aria-labelledby="table-animated-expandable-node-2" on <button> — present in PF, absent in PFJ
308. **Fix attribute:** Animated expandable — aria-labelledby="table-animated-expandable-node-3" on <button> — present in PF, absent in PFJ
309. **Fix attribute:** Animated expandable — aria-labelledby="table-animated-expandable-node-4" on <button> — present in PF, absent in PFJ
310. **Fix attribute:** Animated expandable — aria-labelledby="table-animated-expandable-node-thead" on <button> — present in PF, absent in PFJ
311. **Fix attribute:** Animated expandable — aria-sort="ascending" on <th> — present in PF, absent in PFJ
312. **Fix attribute:** Animated expandable — aria-sort="none" on <th> — present in PF, absent in PFJ
313. **Fix attribute:** Animated expandable — role="cell" on <td> — present in PF, absent in PFJ
314. **Fix attribute:** Animated expandable — role="columnheader" on <th> — present in PF, absent in PFJ
315. **Fix attribute:** Animated expandable — role="grid" on <table> — present in PF, absent in PFJ
316. **Fix attribute:** Animated expandable — role="row" on <tr> — present in PF, absent in PFJ
317. **Fix attribute:** Animated expandable — role="rowgroup" on <tbody> — present in PF, absent in PFJ
318. **Fix attribute:** Animated expandable — type="button" on <button> — present in PF, absent in PFJ
319. **Fix attribute:** Animated expandable — type="checkbox" on <input> — present in PF, absent in PFJ
320. **Fix icon:** Animated expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
321. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-expandable on <table>
322. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-expanded on <button>
323. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-grid-lg on <table>
324. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-plain on <button>
325. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-selected on <th>
326. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-standalone on <label>
327. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-width-10 on <th>
328. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-width-20 on <th>
329. **Fix CSS:** Expandable with set width columns example — add missing class pf-m-width-30 on <th>
330. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-button on <button>
331. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-button__icon on <span>
332. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-check on <label>
333. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-check__input on <input>
334. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-menu-toggle on <button>
335. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-menu-toggle__icon on <span>
336. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table on <table>
337. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__action on <td>
338. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__button on <button>
339. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__button-content on <span>
340. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__cell-empty on <th>
341. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__check on <th>
342. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__expandable-row on <tr>
343. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__expandable-row-content on <div>
344. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__sort on <th>
345. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__sort-indicator on <span>
346. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__tbody on <tbody>
347. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__td on <td>
348. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__text on <span>
349. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__th on <th>
350. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__thead on <thead>
351. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__toggle on <th>
352. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__toggle-icon on <div>
353. **Fix CSS:** Expandable with set width columns example — add missing class pf-v6-c-table__tr on <tr>
354. **Fix structure:** Expandable with set width columns example — PF has <button class="pf-m-expanded pf-m-plain pf-v6-c-button"> — missing in PFJ
355. **Fix structure:** Expandable with set width columns example — PF has <label class="pf-m-standalone pf-v6-c-check"> — missing in PFJ
356. **Fix structure:** Expandable with set width columns example — PF has <table class="pf-m-expandable pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
357. **Fix structure:** Expandable with set width columns example — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
358. **Fix structure:** Expandable with set width columns example — PF has <th class="pf-v6-c-table__th pf-v6-c-table__toggle"> — missing in PFJ
359. **Fix structure:** Expandable with set width columns example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
360. **Fix structure:** Expandable with set width columns example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
361. **Fix structure:** Expandable with set width columns example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
362. **Fix structure:** Expandable with set width columns example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
363. **Fix structure:** Expandable with set width columns example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
364. **Fix structure:** Expandable with set width columns example — PFJ has <svg class="pf-v6-svg"> — not in PF
365. **Fix attribute:** Expandable with set width columns example — aria-controls="expandable-set-width-columns-example-content-1 expandable-set-width-columns-example-content-2 expandable-set-width-columns-example-content-3 expandable-set-width-columns-example-content-4" on <button> — present in PF, absent in PFJ
366. **Fix attribute:** Expandable with set width columns example — aria-controls="expandable-set-width-columns-example-content-1" on <button> — present in PF, absent in PFJ
367. **Fix attribute:** Expandable with set width columns example — aria-controls="expandable-set-width-columns-example-content-2" on <button> — present in PF, absent in PFJ
368. **Fix attribute:** Expandable with set width columns example — aria-controls="expandable-set-width-columns-example-content-3" on <button> — present in PF, absent in PFJ
369. **Fix attribute:** Expandable with set width columns example — aria-controls="expandable-set-width-columns-example-content-4" on <button> — present in PF, absent in PFJ
370. **Fix attribute:** Expandable with set width columns example — aria-describedby="true" on <button> — present in PF, absent in PFJ
371. **Fix attribute:** Expandable with set width columns example — aria-expanded="false" on <button> — present in PF, absent in PFJ
372. **Fix attribute:** Expandable with set width columns example — aria-expanded="true" on <button> — present in PF, absent in PFJ
373. **Fix attribute:** Expandable with set width columns example — aria-label="Check row" on <td> — present in PF, absent in PFJ
374. **Fix attribute:** Expandable with set width columns example — aria-label="Expandable table, set column widths example" on <table> — present in PF, absent in PFJ
375. **Fix attribute:** Expandable with set width columns example — aria-label="Row expansion" on <td> — present in PF, absent in PFJ
376. **Fix attribute:** Expandable with set width columns example — aria-label="Row expansion" on <th> — present in PF, absent in PFJ
377. **Fix attribute:** Expandable with set width columns example — aria-label="Row select" on <th> — present in PF, absent in PFJ
378. **Fix attribute:** Expandable with set width columns example — aria-label="Select all rows" on <input> — present in PF, absent in PFJ
379. **Fix attribute:** Expandable with set width columns example — aria-label="Select row" on <input> — present in PF, absent in PFJ
380. **Fix attribute:** Expandable with set width columns example — aria-label="Table actions" on <button> — present in PF, absent in PFJ
381. **Fix attribute:** Expandable with set width columns example — aria-label="Toggle all rows" on <button> — present in PF, absent in PFJ
382. **Fix attribute:** Expandable with set width columns example — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
383. **Fix attribute:** Expandable with set width columns example — aria-labelledby="expandable-set-width-columns-example-node-1" on <button> — present in PF, absent in PFJ
384. **Fix attribute:** Expandable with set width columns example — aria-labelledby="expandable-set-width-columns-example-node-2" on <button> — present in PF, absent in PFJ
385. **Fix attribute:** Expandable with set width columns example — aria-labelledby="expandable-set-width-columns-example-node-3" on <button> — present in PF, absent in PFJ
386. **Fix attribute:** Expandable with set width columns example — aria-labelledby="expandable-set-width-columns-example-node-4" on <button> — present in PF, absent in PFJ
387. **Fix attribute:** Expandable with set width columns example — aria-labelledby="expandable-set-width-columns-example-node-thead" on <button> — present in PF, absent in PFJ
388. **Fix attribute:** Expandable with set width columns example — aria-sort="ascending" on <th> — present in PF, absent in PFJ
389. **Fix attribute:** Expandable with set width columns example — aria-sort="none" on <th> — present in PF, absent in PFJ
390. **Fix attribute:** Expandable with set width columns example — role="cell" on <td> — present in PF, absent in PFJ
391. **Fix attribute:** Expandable with set width columns example — role="columnheader" on <th> — present in PF, absent in PFJ
392. **Fix attribute:** Expandable with set width columns example — role="grid" on <table> — present in PF, absent in PFJ
393. **Fix attribute:** Expandable with set width columns example — role="row" on <tr> — present in PF, absent in PFJ
394. **Fix attribute:** Expandable with set width columns example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
395. **Fix attribute:** Expandable with set width columns example — type="button" on <button> — present in PF, absent in PFJ
396. **Fix attribute:** Expandable with set width columns example — type="checkbox" on <input> — present in PF, absent in PFJ
397. **Fix icon:** Expandable with set width columns example — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
398. **Fix CSS:** Compound expansion example — add missing class pf-m-compact on <table>
399. **Fix CSS:** Compound expansion example — add missing class pf-m-expandable on <table>
400. **Fix CSS:** Compound expansion example — add missing class pf-m-expanded on <tbody>
401. **Fix CSS:** Compound expansion example — add missing class pf-m-grid-md on <table>
402. **Fix CSS:** Compound expansion example — add missing class pf-m-no-background on <div>
403. **Fix CSS:** Compound expansion example — add missing class pf-m-no-border-rows on <table>
404. **Fix CSS:** Compound expansion example — add missing class pf-m-no-padding on <td>
405. **Fix CSS:** Compound expansion example — add missing class pf-m-plain on <button>
406. **Fix CSS:** Compound expansion example — add missing class pf-m-selected on <th>
407. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-menu-toggle on <button>
408. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-menu-toggle__icon on <span>
409. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table on <table>
410. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__action on <td>
411. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__button on <button>
412. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__button-content on <span>
413. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__cell-empty on <th>
414. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__compound-expansion-toggle on <td>
415. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__control-row on <tr>
416. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__expandable-row on <tr>
417. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__expandable-row-content on <div>
418. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__sort on <th>
419. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__sort-indicator on <span>
420. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__tbody on <tbody>
421. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__td on <td>
422. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__text on <span>
423. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__th on <th>
424. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__thead on <thead>
425. **Fix CSS:** Compound expansion example — add missing class pf-v6-c-table__tr on <tr>
426. **Fix structure:** Compound expansion example — PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
427. **Fix structure:** Compound expansion example — PF has <button class="pf-v6-c-table__button"> — missing in PFJ
428. **Fix structure:** Compound expansion example — PF has <div class="pf-m-no-background pf-v6-c-table__expandable-row-content"> — missing in PFJ
429. **Fix structure:** Compound expansion example — PF has <div class="pf-v6-c-table__expandable-row-content"> — missing in PFJ
430. **Fix structure:** Compound expansion example — PF has <table class="pf-m-expandable pf-m-grid-md pf-v6-c-table"> — missing in PFJ
431. **Fix structure:** Compound expansion example — PF has <tbody class="pf-m-expanded pf-v6-c-table__tbody"> — missing in PFJ
432. **Fix structure:** Compound expansion example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
433. **Fix structure:** Compound expansion example — PF has <td class="pf-m-expanded pf-v6-c-table__compound-expansion-toggle pf-v6-c-table__td"> — missing in PFJ
434. **Fix structure:** Compound expansion example — PF has <td class="pf-m-no-padding pf-v6-c-table__td"> — missing in PFJ
435. **Fix structure:** Compound expansion example — PF has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — missing in PFJ
436. **Fix structure:** Compound expansion example — PF has <td class="pf-v6-c-table__compound-expansion-toggle pf-v6-c-table__td"> — missing in PFJ
437. **Fix structure:** Compound expansion example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
438. **Fix structure:** Compound expansion example — PF has <th class="pf-m-selected pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
439. **Fix structure:** Compound expansion example — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
440. **Fix structure:** Compound expansion example — PF has <th class="pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
441. **Fix structure:** Compound expansion example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
442. **Fix structure:** Compound expansion example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
443. **Fix structure:** Compound expansion example — PF has <tr class="pf-m-expanded pf-v6-c-table__control-row pf-v6-c-table__tr"> — missing in PFJ
444. **Fix structure:** Compound expansion example — PF has <tr class="pf-m-expanded pf-v6-c-table__expandable-row pf-v6-c-table__tr"> — missing in PFJ
445. **Fix structure:** Compound expansion example — PF has <tr class="pf-v6-c-table__control-row pf-v6-c-table__tr"> — missing in PFJ
446. **Fix structure:** Compound expansion example — PF has <tr class="pf-v6-c-table__expandable-row pf-v6-c-table__tr"> — missing in PFJ
447. **Fix structure:** Compound expansion example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
448. **Fix structure:** Compound expansion example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
449. **Fix structure:** Compound expansion example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
450. **Fix structure:** Compound expansion example — PFJ has <svg class="pf-v6-svg"> — not in PF
451. **Fix attribute:** Compound expansion example — aria-expanded="false" on <button> — present in PF, absent in PFJ
452. **Fix attribute:** Compound expansion example — aria-hidden="true" on <i> — present in PF, absent in PFJ
453. **Fix attribute:** Compound expansion example — aria-label="Compound expandable table example" on <table> — present in PF, absent in PFJ
454. **Fix attribute:** Compound expansion example — aria-label="Nested table" on <table> — present in PF, absent in PFJ
455. **Fix attribute:** Compound expansion example — aria-label="Table actions" on <button> — present in PF, absent in PFJ
456. **Fix attribute:** Compound expansion example — aria-sort="ascending" on <th> — present in PF, absent in PFJ
457. **Fix attribute:** Compound expansion example — aria-sort="none" on <th> — present in PF, absent in PFJ
458. **Fix attribute:** Compound expansion example — role="cell" on <td> — present in PF, absent in PFJ
459. **Fix attribute:** Compound expansion example — role="columnheader" on <th> — present in PF, absent in PFJ
460. **Fix attribute:** Compound expansion example — role="grid" on <table> — present in PF, absent in PFJ
461. **Fix attribute:** Compound expansion example — role="row" on <tr> — present in PF, absent in PFJ
462. **Fix attribute:** Compound expansion example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
463. **Fix attribute:** Compound expansion example — type="button" on <button> — present in PF, absent in PFJ
464. **Fix CSS:** Tree table basic — add missing class pf-m-expanded on <tr>
465. **Fix CSS:** Tree table basic — add missing class pf-m-tree-view-details-expanded on <tr>
466. **Fix CSS:** Tree table basic — add missing class pf-m-tree-view-grid-lg on <table>
467. **Fix CSS:** Tree table basic — add missing class pf-v6-c-button__icon on <span>
468. **Fix CSS:** Tree table basic — add missing class pf-v6-c-menu-toggle on <button>
469. **Fix CSS:** Tree table basic — add missing class pf-v6-c-menu-toggle__icon on <span>
470. **Fix CSS:** Tree table basic — add missing class pf-v6-c-table__action on <td>
471. **Fix CSS:** Tree table basic — add missing class pf-v6-c-table__cell-empty on <th>
472. **Fix CSS:** Tree table basic — add missing class pf-v6-c-table__details-toggle-icon on <span>
473. **Fix CSS:** Tree table basic — add missing class pf-v6-c-table__tree-view-title-header-cell on <th>
474. **Fix CSS:** Tree table basic — add missing class pf-v6-screen-reader on <span>
475. **Fix structure:** Tree table basic — PF has <button class="pf-m-plain pf-v6-c-menu-toggle"> — missing in PFJ
476. **Fix structure:** Tree table basic — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
477. **Fix structure:** Tree table basic — PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
478. **Fix structure:** Tree table basic — PF has <td class="pf-v6-c-table__action pf-v6-c-table__td"> — missing in PFJ
479. **Fix structure:** Tree table basic — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
480. **Fix structure:** Tree table basic — PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
481. **Fix structure:** Tree table basic — PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
482. **Fix structure:** Tree table basic — PF has <tr class="pf-m-tree-view-details-expanded pf-v6-c-table__tr"> — missing in PFJ
483. **Fix structure:** Tree table basic — PFJ has <button class="pf-m-primary pf-v6-c-button pf-v6-u-mb-sm"> — not in PF
484. **Fix structure:** Tree table basic — PFJ has <span class="pf-v6-c-button__text"> — not in PF
485. **Fix structure:** Tree table basic — PFJ has <table class="pf-m-tree-view pf-m-tree-view-grid-md pf-v6-c-table"> — not in PF
486. **Fix attribute:** Tree table basic — aria-expanded="false" on <tr> — present in PF, absent in PFJ
487. **Fix attribute:** Tree table basic — aria-expanded="true" on <button> — present in PF, absent in PFJ
488. **Fix attribute:** Tree table basic — aria-expanded="true" on <tr> — present in PF, absent in PFJ
489. **Fix attribute:** Tree table basic — aria-label="Table actions" on <button> — present in PF, absent in PFJ
490. **Fix attribute:** Tree table basic — aria-label="This is a simple tree table example" on <table> — present in PF, absent in PFJ
491. **Fix attribute:** Tree table basic — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
492. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
493. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
494. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
495. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
496. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
497. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
498. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
499. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
500. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
501. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
502. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
503. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
504. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
505. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
506. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
507. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
508. **Fix attribute:** Tree table basic — aria-label="tree-table-basic-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
509. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-1 tree-table-basic-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
510. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-12 tree-table-basic-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
511. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-15 tree-table-basic-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
512. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-2 tree-table-basic-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
513. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-7 tree-table-basic-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
514. **Fix attribute:** Tree table basic — aria-labelledby="tree-table-basic-example-node-9 tree-table-basic-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
515. **Fix attribute:** Tree table basic — aria-level="2" on <tr> — present in PF, absent in PFJ
516. **Fix attribute:** Tree table basic — aria-level="3" on <tr> — present in PF, absent in PFJ
517. **Fix attribute:** Tree table basic — aria-level="4" on <tr> — present in PF, absent in PFJ
518. **Fix attribute:** Tree table basic — aria-posinset="1" on <tr> — present in PF, absent in PFJ
519. **Fix attribute:** Tree table basic — aria-posinset="2" on <tr> — present in PF, absent in PFJ
520. **Fix attribute:** Tree table basic — aria-posinset="3" on <tr> — present in PF, absent in PFJ
521. **Fix attribute:** Tree table basic — aria-posinset="4" on <tr> — present in PF, absent in PFJ
522. **Fix attribute:** Tree table basic — aria-posinset="5" on <tr> — present in PF, absent in PFJ
523. **Fix attribute:** Tree table basic — aria-posinset="6" on <tr> — present in PF, absent in PFJ
524. **Fix attribute:** Tree table basic — aria-setsize="1" on <tr> — present in PF, absent in PFJ
525. **Fix attribute:** Tree table basic — aria-setsize="2" on <tr> — present in PF, absent in PFJ
526. **Fix attribute:** Tree table basic — aria-setsize="5" on <tr> — present in PF, absent in PFJ
527. **Fix attribute:** Tree table basic — tabindex="-1" on <tr> — present in PF, absent in PFJ
528. **Fix attribute:** Tree table basic — tabindex="0" on <tr> — present in PF, absent in PFJ
529. **Fix attribute:** Tree table basic — aria-label="Show row details" on <button> — present in PFJ, absent in PF
530. **Fix attribute:** Tree table basic — role="rowgroup" on <tbody> — present in PFJ, absent in PF
531. **Fix attribute:** Tree table basic — tabindex="-1" on <td> — present in PFJ, absent in PF
532. **Fix attribute:** Tree table basic — tabindex="-1" on <th> — present in PFJ, absent in PF
533. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
534. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
535. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
536. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
537. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
538. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
539. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
540. **Fix icon:** Tree table basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
541. **Fix CSS:** Tree table with checkboxes — add missing class pf-m-expanded on <tr>
542. **Fix CSS:** Tree table with checkboxes — add missing class pf-m-plain on <button>
543. **Fix CSS:** Tree table with checkboxes — add missing class pf-m-tree-view on <table>
544. **Fix CSS:** Tree table with checkboxes — add missing class pf-m-tree-view-details-expanded on <tr>
545. **Fix CSS:** Tree table with checkboxes — add missing class pf-m-tree-view-grid-lg on <table>
546. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-button on <button>
547. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-button__icon on <span>
548. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-menu-toggle on <button>
549. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-menu-toggle__icon on <span>
550. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table on <table>
551. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__action on <td>
552. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__cell-empty on <th>
553. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__details-toggle-icon on <span>
554. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__text on <span>
555. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__toggle on <span>
556. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__toggle-icon on <div>
557. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__tree-view-details-toggle on <span>
558. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__tree-view-main on <div>
559. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__tree-view-text on <div>
560. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__tree-view-title-cell on <th>
561. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-c-table__tree-view-title-header-cell on <th>
562. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-screen-reader on <span>
563. **Fix CSS:** Tree table with checkboxes — add missing class pf-v6-svg on <svg>
564. **Fix structure:** Tree table with checkboxes — PF has <div class="pf-v6-c-table__tree-view-main"> — missing in PFJ
565. **Fix structure:** Tree table with checkboxes — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
566. **Fix structure:** Tree table with checkboxes — PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
567. **Fix structure:** Tree table with checkboxes — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
568. **Fix structure:** Tree table with checkboxes — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
569. **Fix structure:** Tree table with checkboxes — PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell"> — missing in PFJ
570. **Fix structure:** Tree table with checkboxes — PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
571. **Fix structure:** Tree table with checkboxes — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
572. **Fix structure:** Tree table with checkboxes — PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
573. **Fix structure:** Tree table with checkboxes — PFJ has <div class="pf-m-standalone pf-v6-c-check"> — not in PF
574. **Fix structure:** Tree table with checkboxes — PFJ has <input class="pf-v6-c-check__input"> — not in PF
575. **Fix structure:** Tree table with checkboxes — PFJ has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — not in PF
576. **Fix attribute:** Tree table with checkboxes — aria-expanded="false" on <button> — present in PF, absent in PFJ
577. **Fix attribute:** Tree table with checkboxes — aria-expanded="false" on <tr> — present in PF, absent in PFJ
578. **Fix attribute:** Tree table with checkboxes — aria-expanded="true" on <button> — present in PF, absent in PFJ
579. **Fix attribute:** Tree table with checkboxes — aria-expanded="true" on <tr> — present in PF, absent in PFJ
580. **Fix attribute:** Tree table with checkboxes — aria-hidden="true" on <svg> — present in PF, absent in PFJ
581. **Fix attribute:** Tree table with checkboxes — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
582. **Fix attribute:** Tree table with checkboxes — aria-label="Table actions" on <button> — present in PF, absent in PFJ
583. **Fix attribute:** Tree table with checkboxes — aria-label="This is a simple tree table, with checkboxes example" on <table> — present in PF, absent in PFJ
584. **Fix attribute:** Tree table with checkboxes — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
585. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
586. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
587. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
588. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
589. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
590. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
591. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
592. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
593. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
594. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
595. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
596. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
597. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
598. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
599. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
600. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
601. **Fix attribute:** Tree table with checkboxes — aria-label="tree-table-with-checkboxes-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
602. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-1 tree-table-with-checkboxes-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
603. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-12 tree-table-with-checkboxes-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
604. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-15 tree-table-with-checkboxes-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
605. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-2 tree-table-with-checkboxes-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
606. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-7 tree-table-with-checkboxes-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
607. **Fix attribute:** Tree table with checkboxes — aria-labelledby="tree-table-with-checkboxes-example-node-9 tree-table-with-checkboxes-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
608. **Fix attribute:** Tree table with checkboxes — aria-level="1" on <tr> — present in PF, absent in PFJ
609. **Fix attribute:** Tree table with checkboxes — aria-level="2" on <tr> — present in PF, absent in PFJ
610. **Fix attribute:** Tree table with checkboxes — aria-level="3" on <tr> — present in PF, absent in PFJ
611. **Fix attribute:** Tree table with checkboxes — aria-level="4" on <tr> — present in PF, absent in PFJ
612. **Fix attribute:** Tree table with checkboxes — aria-posinset="1" on <tr> — present in PF, absent in PFJ
613. **Fix attribute:** Tree table with checkboxes — aria-posinset="2" on <tr> — present in PF, absent in PFJ
614. **Fix attribute:** Tree table with checkboxes — aria-posinset="3" on <tr> — present in PF, absent in PFJ
615. **Fix attribute:** Tree table with checkboxes — aria-posinset="4" on <tr> — present in PF, absent in PFJ
616. **Fix attribute:** Tree table with checkboxes — aria-posinset="5" on <tr> — present in PF, absent in PFJ
617. **Fix attribute:** Tree table with checkboxes — aria-posinset="6" on <tr> — present in PF, absent in PFJ
618. **Fix attribute:** Tree table with checkboxes — aria-setsize="1" on <tr> — present in PF, absent in PFJ
619. **Fix attribute:** Tree table with checkboxes — aria-setsize="2" on <tr> — present in PF, absent in PFJ
620. **Fix attribute:** Tree table with checkboxes — aria-setsize="5" on <tr> — present in PF, absent in PFJ
621. **Fix attribute:** Tree table with checkboxes — role="gridcell" on <td> — present in PF, absent in PFJ
622. **Fix attribute:** Tree table with checkboxes — role="img" on <svg> — present in PF, absent in PFJ
623. **Fix attribute:** Tree table with checkboxes — role="treegrid" on <table> — present in PF, absent in PFJ
624. **Fix attribute:** Tree table with checkboxes — tabindex="-1" on <tr> — present in PF, absent in PFJ
625. **Fix attribute:** Tree table with checkboxes — tabindex="0" on <tr> — present in PF, absent in PFJ
626. **Fix attribute:** Tree table with checkboxes — type="button" on <button> — present in PF, absent in PFJ
627. **Fix attribute:** Tree table with checkboxes — aria-label="Check row" on <td> — present in PFJ, absent in PF
628. **Fix attribute:** Tree table with checkboxes — aria-label="Row selector" on <th> — present in PFJ, absent in PF
629. **Fix attribute:** Tree table with checkboxes — aria-label="Select all rows" on <input> — present in PFJ, absent in PF
630. **Fix attribute:** Tree table with checkboxes — aria-label="Select row" on <input> — present in PFJ, absent in PF
631. **Fix attribute:** Tree table with checkboxes — role="cell" on <td> — present in PFJ, absent in PF
632. **Fix attribute:** Tree table with checkboxes — role="rowgroup" on <tbody> — present in PFJ, absent in PF
633. **Fix attribute:** Tree table with checkboxes — tabindex="-1" on <td> — present in PFJ, absent in PF
634. **Fix attribute:** Tree table with checkboxes — tabindex="-1" on <th> — present in PFJ, absent in PF
635. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-expanded on <tr>
636. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-plain on <button>
637. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-standalone on <label>
638. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-tree-view on <table>
639. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-tree-view-details-expanded on <tr>
640. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-m-tree-view-grid-lg on <table>
641. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-button on <button>
642. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-button__icon on <span>
643. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-check on <label>
644. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-check__input on <input>
645. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-menu-toggle on <button>
646. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-menu-toggle__icon on <span>
647. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table on <table>
648. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__action on <td>
649. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__cell-empty on <th>
650. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__check on <span>
651. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__details-toggle-icon on <span>
652. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tbody on <tbody>
653. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__td on <span>
654. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__text on <span>
655. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__th on <th>
656. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__thead on <thead>
657. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__toggle on <span>
658. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__toggle-icon on <div>
659. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tr on <tr>
660. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-details-toggle on <span>
661. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-icon on <span>
662. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-main on <div>
663. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-text on <div>
664. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-title-cell on <th>
665. **Fix CSS:** Tree table with checkboxes and icons — add missing class pf-v6-c-table__tree-view-title-header-cell on <th>
666. **Fix structure:** Tree table with checkboxes and icons — PF has <div class="pf-v6-c-table__tree-view-main"> — missing in PFJ
667. **Fix structure:** Tree table with checkboxes and icons — PF has <table class="pf-m-tree-view pf-m-tree-view-grid-lg pf-v6-c-table"> — missing in PFJ
668. **Fix structure:** Tree table with checkboxes and icons — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
669. **Fix structure:** Tree table with checkboxes and icons — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
670. **Fix structure:** Tree table with checkboxes and icons — PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-cell"> — missing in PFJ
671. **Fix structure:** Tree table with checkboxes and icons — PF has <th class="pf-v6-c-table__th pf-v6-c-table__tree-view-title-header-cell"> — missing in PFJ
672. **Fix structure:** Tree table with checkboxes and icons — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
673. **Fix structure:** Tree table with checkboxes and icons — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
674. **Fix structure:** Tree table with checkboxes and icons — PF has <tr class="pf-m-expanded pf-v6-c-table__tr"> — missing in PFJ
675. **Fix structure:** Tree table with checkboxes and icons — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
676. **Fix structure:** Tree table with checkboxes and icons — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
677. **Fix structure:** Tree table with checkboxes and icons — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
678. **Fix structure:** Tree table with checkboxes and icons — PFJ has <svg class="pf-v6-svg"> — not in PF
679. **Fix attribute:** Tree table with checkboxes and icons — aria-expanded="false" on <button> — present in PF, absent in PFJ
680. **Fix attribute:** Tree table with checkboxes and icons — aria-expanded="false" on <tr> — present in PF, absent in PFJ
681. **Fix attribute:** Tree table with checkboxes and icons — aria-expanded="true" on <button> — present in PF, absent in PFJ
682. **Fix attribute:** Tree table with checkboxes and icons — aria-expanded="true" on <tr> — present in PF, absent in PFJ
683. **Fix attribute:** Tree table with checkboxes and icons — aria-hidden="true" on <i> — present in PF, absent in PFJ
684. **Fix attribute:** Tree table with checkboxes and icons — aria-label="Standalone check" on <input> — present in PF, absent in PFJ
685. **Fix attribute:** Tree table with checkboxes and icons — aria-label="Table actions" on <button> — present in PF, absent in PFJ
686. **Fix attribute:** Tree table with checkboxes and icons — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
687. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-1--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
688. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-10--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
689. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-11--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
690. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-12--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
691. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-13--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
692. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-14--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
693. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-15--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
694. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-16--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
695. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-17--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
696. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-2--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
697. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-3--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
698. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-4--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
699. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-5--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
700. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-6--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
701. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-7--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
702. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-8--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
703. **Fix attribute:** Tree table with checkboxes and icons — aria-label="tree-table-with-checkboxes-icons-example-9--tree-table--details-toggle" on <button> — present in PF, absent in PFJ
704. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-1 tree-table-with-checkboxes-icons-example-expandable-toggle-1" on <button> — present in PF, absent in PFJ
705. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-12 tree-table-with-checkboxes-icons-example-expandable-toggle-12" on <button> — present in PF, absent in PFJ
706. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-15 tree-table-with-checkboxes-icons-example-expandable-toggle-15" on <button> — present in PF, absent in PFJ
707. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-2 tree-table-with-checkboxes-icons-example-expandable-toggle-2" on <button> — present in PF, absent in PFJ
708. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-7 tree-table-with-checkboxes-icons-example-expandable-toggle-7" on <button> — present in PF, absent in PFJ
709. **Fix attribute:** Tree table with checkboxes and icons — aria-labelledby="tree-table-with-checkboxes-icons-example-node-9 tree-table-with-checkboxes-icons-example-expandable-toggle-9" on <button> — present in PF, absent in PFJ
710. **Fix attribute:** Tree table with checkboxes and icons — aria-level="1" on <tr> — present in PF, absent in PFJ
711. **Fix attribute:** Tree table with checkboxes and icons — aria-level="2" on <tr> — present in PF, absent in PFJ
712. **Fix attribute:** Tree table with checkboxes and icons — aria-level="3" on <tr> — present in PF, absent in PFJ
713. **Fix attribute:** Tree table with checkboxes and icons — aria-level="4" on <tr> — present in PF, absent in PFJ
714. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="1" on <tr> — present in PF, absent in PFJ
715. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="2" on <tr> — present in PF, absent in PFJ
716. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="3" on <tr> — present in PF, absent in PFJ
717. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="4" on <tr> — present in PF, absent in PFJ
718. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="5" on <tr> — present in PF, absent in PFJ
719. **Fix attribute:** Tree table with checkboxes and icons — aria-posinset="6" on <tr> — present in PF, absent in PFJ
720. **Fix attribute:** Tree table with checkboxes and icons — aria-setsize="1" on <tr> — present in PF, absent in PFJ
721. **Fix attribute:** Tree table with checkboxes and icons — aria-setsize="2" on <tr> — present in PF, absent in PFJ
722. **Fix attribute:** Tree table with checkboxes and icons — aria-setsize="5" on <tr> — present in PF, absent in PFJ
723. **Fix attribute:** Tree table with checkboxes and icons — role="columnheader" on <th> — present in PF, absent in PFJ
724. **Fix attribute:** Tree table with checkboxes and icons — role="gridcell" on <td> — present in PF, absent in PFJ
725. **Fix attribute:** Tree table with checkboxes and icons — role="row" on <tr> — present in PF, absent in PFJ
726. **Fix attribute:** Tree table with checkboxes and icons — role="treegrid" on <table> — present in PF, absent in PFJ
727. **Fix attribute:** Tree table with checkboxes and icons — tabindex="-1" on <tr> — present in PF, absent in PFJ
728. **Fix attribute:** Tree table with checkboxes and icons — tabindex="0" on <tr> — present in PF, absent in PFJ
729. **Fix attribute:** Tree table with checkboxes and icons — type="button" on <button> — present in PF, absent in PFJ
730. **Fix attribute:** Tree table with checkboxes and icons — type="checkbox" on <input> — present in PF, absent in PFJ
731. **Fix icon:** Tree table with checkboxes and icons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
732. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-grid-lg on <table>
733. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-hidden on <th>
734. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-hidden-on-lg on <th>
735. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-hidden-on-md on <th>
736. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-visible-on-lg on <th>
737. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-visible-on-md on <th>
738. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-m-visible-on-sm on <th>
739. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table on <table>
740. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table__tbody on <tbody>
741. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table__td on <td>
742. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table__th on <th>
743. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table__thead on <thead>
744. **Fix CSS:** Hidden/visible breakpoint modifiers example — add missing class pf-v6-c-table__tr on <tr>
745. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
746. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
747. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <td class="pf-m-hidden pf-m-hidden-on-lg pf-m-visible-on-md pf-v6-c-table__td"> — missing in PFJ
748. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <td class="pf-m-hidden pf-m-visible-on-sm pf-v6-c-table__td"> — missing in PFJ
749. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <td class="pf-m-hidden-on-md pf-m-visible-on-lg pf-v6-c-table__td"> — missing in PFJ
750. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
751. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <th class="pf-m-hidden pf-m-hidden-on-lg pf-m-visible-on-md pf-v6-c-table__th"> — missing in PFJ
752. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <th class="pf-m-hidden pf-m-visible-on-sm pf-v6-c-table__th"> — missing in PFJ
753. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <th class="pf-m-hidden-on-md pf-m-visible-on-lg pf-v6-c-table__th"> — missing in PFJ
754. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
755. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
756. **Fix structure:** Hidden/visible breakpoint modifiers example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
757. **Fix structure:** Hidden/visible breakpoint modifiers example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
758. **Fix structure:** Hidden/visible breakpoint modifiers example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
759. **Fix structure:** Hidden/visible breakpoint modifiers example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
760. **Fix structure:** Hidden/visible breakpoint modifiers example — PFJ has <svg class="pf-v6-svg"> — not in PF
761. **Fix attribute:** Hidden/visible breakpoint modifiers example — aria-label="Table with hidden and visible modifiers example" on <table> — present in PF, absent in PFJ
762. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="cell" on <td> — present in PF, absent in PFJ
763. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="columnheader" on <th> — present in PF, absent in PFJ
764. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="grid" on <table> — present in PF, absent in PFJ
765. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="row" on <tr> — present in PF, absent in PFJ
766. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
767. **Fix attribute:** Hidden/visible breakpoint modifiers example — aria-hidden="true" on <svg> — present in PFJ, absent in PF
768. **Fix attribute:** Hidden/visible breakpoint modifiers example — role="img" on <svg> — present in PFJ, absent in PF
769. **Fix CSS:** Text control example — add missing class pf-m-break-word on <td>
770. **Fix CSS:** Text control example — add missing class pf-m-fit-content on <th>
771. **Fix CSS:** Text control example — add missing class pf-m-grid-lg on <table>
772. **Fix CSS:** Text control example — add missing class pf-m-nowrap on <td>
773. **Fix CSS:** Text control example — add missing class pf-m-truncate on <td>
774. **Fix CSS:** Text control example — add missing class pf-m-width-20 on <th>
775. **Fix CSS:** Text control example — add missing class pf-m-wrap on <th>
776. **Fix CSS:** Text control example — add missing class pf-v6-c-table on <table>
777. **Fix CSS:** Text control example — add missing class pf-v6-c-table__cell-empty on <th>
778. **Fix CSS:** Text control example — add missing class pf-v6-c-table__tbody on <tbody>
779. **Fix CSS:** Text control example — add missing class pf-v6-c-table__td on <td>
780. **Fix CSS:** Text control example — add missing class pf-v6-c-table__th on <th>
781. **Fix CSS:** Text control example — add missing class pf-v6-c-table__thead on <thead>
782. **Fix CSS:** Text control example — add missing class pf-v6-c-table__tr on <tr>
783. **Fix structure:** Text control example — PF has <table class="pf-m-grid-lg pf-v6-c-table"> — missing in PFJ
784. **Fix structure:** Text control example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
785. **Fix structure:** Text control example — PF has <td class="pf-m-break-word pf-v6-c-table__td"> — missing in PFJ
786. **Fix structure:** Text control example — PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
787. **Fix structure:** Text control example — PF has <td class="pf-m-truncate pf-v6-c-table__td"> — missing in PFJ
788. **Fix structure:** Text control example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
789. **Fix structure:** Text control example — PF has <th class="pf-m-fit-content pf-v6-c-table__th"> — missing in PFJ
790. **Fix structure:** Text control example — PF has <th class="pf-m-width-20 pf-v6-c-table__th"> — missing in PFJ
791. **Fix structure:** Text control example — PF has <th class="pf-m-wrap pf-v6-c-table__th"> — missing in PFJ
792. **Fix structure:** Text control example — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
793. **Fix structure:** Text control example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
794. **Fix structure:** Text control example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
795. **Fix structure:** Text control example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
796. **Fix structure:** Text control example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
797. **Fix structure:** Text control example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
798. **Fix structure:** Text control example — PFJ has <svg class="pf-v6-svg"> — not in PF
799. **Fix attribute:** Text control example — aria-label="This is a simple table example" on <table> — present in PF, absent in PFJ
800. **Fix attribute:** Text control example — role="cell" on <td> — present in PF, absent in PFJ
801. **Fix attribute:** Text control example — role="columnheader" on <th> — present in PF, absent in PFJ
802. **Fix attribute:** Text control example — role="grid" on <table> — present in PF, absent in PFJ
803. **Fix attribute:** Text control example — role="row" on <tr> — present in PF, absent in PFJ
804. **Fix attribute:** Text control example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
805. **Fix attribute:** Text control example — aria-hidden="true" on <svg> — present in PFJ, absent in PF
806. **Fix attribute:** Text control example — role="img" on <svg> — present in PFJ, absent in PF
807. **Fix CSS:** Sticky header — add missing class pf-m-grid-md on <table>
808. **Fix CSS:** Sticky header — add missing class pf-m-sticky-header on <table>
809. **Fix CSS:** Sticky header — add missing class pf-v6-c-scroll-inner-wrapper on <div>
810. **Fix CSS:** Sticky header — add missing class pf-v6-c-table on <table>
811. **Fix CSS:** Sticky header — add missing class pf-v6-c-table__tbody on <tbody>
812. **Fix CSS:** Sticky header — add missing class pf-v6-c-table__td on <td>
813. **Fix CSS:** Sticky header — add missing class pf-v6-c-table__th on <th>
814. **Fix CSS:** Sticky header — add missing class pf-v6-c-table__thead on <thead>
815. **Fix CSS:** Sticky header — add missing class pf-v6-c-table__tr on <tr>
816. **Fix structure:** Sticky header — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
817. **Fix structure:** Sticky header — PF has <table class="pf-m-grid-md pf-m-sticky-header pf-v6-c-table"> — missing in PFJ
818. **Fix structure:** Sticky header — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
819. **Fix structure:** Sticky header — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
820. **Fix structure:** Sticky header — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
821. **Fix structure:** Sticky header — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
822. **Fix structure:** Sticky header — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
823. **Fix structure:** Sticky header — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
824. **Fix structure:** Sticky header — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
825. **Fix structure:** Sticky header — PFJ has <span class="pf-v6-screen-reader"> — not in PF
826. **Fix structure:** Sticky header — PFJ has <svg class="pf-v6-svg"> — not in PF
827. **Fix attribute:** Sticky header — aria-label="This is a table with sticky header cells" on <table> — present in PF, absent in PFJ
828. **Fix attribute:** Sticky header — role="cell" on <td> — present in PF, absent in PFJ
829. **Fix attribute:** Sticky header — role="columnheader" on <th> — present in PF, absent in PFJ
830. **Fix attribute:** Sticky header — role="grid" on <table> — present in PF, absent in PFJ
831. **Fix attribute:** Sticky header — role="row" on <tr> — present in PF, absent in PFJ
832. **Fix attribute:** Sticky header — role="rowgroup" on <tbody> — present in PF, absent in PFJ
833. **Fix attribute:** Sticky header — aria-hidden="true" on <svg> — present in PFJ, absent in PF
834. **Fix attribute:** Sticky header — role="img" on <svg> — present in PFJ, absent in PF
835. **Fix CSS:** Sticky column — add missing class pf-m-border-right on <th>
836. **Fix CSS:** Sticky column — add missing class pf-m-left on <th>
837. **Fix CSS:** Sticky column — add missing class pf-m-nowrap on <th>
838. **Fix CSS:** Sticky column — add missing class pf-v6-c-scroll-inner-wrapper on <div>
839. **Fix CSS:** Sticky column — add missing class pf-v6-c-table on <table>
840. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__button on <button>
841. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__button-content on <span>
842. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__sort on <th>
843. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__sort-indicator on <span>
844. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__sticky-cell on <th>
845. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__tbody on <tbody>
846. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__td on <td>
847. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__text on <span>
848. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__th on <th>
849. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__thead on <thead>
850. **Fix CSS:** Sticky column — add missing class pf-v6-c-table__tr on <tr>
851. **Fix structure:** Sticky column — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
852. **Fix structure:** Sticky column — PF has <table class="pf-v6-c-table"> — missing in PFJ
853. **Fix structure:** Sticky column — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
854. **Fix structure:** Sticky column — PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
855. **Fix structure:** Sticky column — PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
856. **Fix structure:** Sticky column — PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
857. **Fix structure:** Sticky column — PF has <th class="pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
858. **Fix structure:** Sticky column — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
859. **Fix structure:** Sticky column — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
860. **Fix structure:** Sticky column — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
861. **Fix structure:** Sticky column — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
862. **Fix structure:** Sticky column — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
863. **Fix structure:** Sticky column — PFJ has <span class="pf-v6-screen-reader"> — not in PF
864. **Fix structure:** Sticky column — PFJ has <svg class="pf-v6-svg"> — not in PF
865. **Fix attribute:** Sticky column — aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
866. **Fix attribute:** Sticky column — aria-sort="none" on <th> — present in PF, absent in PFJ
867. **Fix attribute:** Sticky column — role="cell" on <td> — present in PF, absent in PFJ
868. **Fix attribute:** Sticky column — role="columnheader" on <th> — present in PF, absent in PFJ
869. **Fix attribute:** Sticky column — role="grid" on <table> — present in PF, absent in PFJ
870. **Fix attribute:** Sticky column — role="row" on <tr> — present in PF, absent in PFJ
871. **Fix attribute:** Sticky column — role="rowgroup" on <tbody> — present in PF, absent in PFJ
872. **Fix CSS:** Multiple sticky columns — add missing class pf-m-border-right on <th>
873. **Fix CSS:** Multiple sticky columns — add missing class pf-m-left on <th>
874. **Fix CSS:** Multiple sticky columns — add missing class pf-m-nowrap on <th>
875. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-scroll-inner-wrapper on <div>
876. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table on <table>
877. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__button on <button>
878. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__button-content on <span>
879. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__sort on <th>
880. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__sort-indicator on <span>
881. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__sticky-cell on <th>
882. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__tbody on <tbody>
883. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__td on <td>
884. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__text on <span>
885. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__th on <th>
886. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__thead on <thead>
887. **Fix CSS:** Multiple sticky columns — add missing class pf-v6-c-table__tr on <tr>
888. **Fix structure:** Multiple sticky columns — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
889. **Fix structure:** Multiple sticky columns — PF has <table class="pf-v6-c-table"> — missing in PFJ
890. **Fix structure:** Multiple sticky columns — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
891. **Fix structure:** Multiple sticky columns — PF has <td class="pf-m-nowrap pf-v6-c-table__td"> — missing in PFJ
892. **Fix structure:** Multiple sticky columns — PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
893. **Fix structure:** Multiple sticky columns — PF has <th class="pf-m-border-right pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
894. **Fix structure:** Multiple sticky columns — PF has <th class="pf-m-left pf-m-nowrap pf-v6-c-table__sort pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
895. **Fix structure:** Multiple sticky columns — PF has <th class="pf-m-left pf-m-nowrap pf-v6-c-table__sticky-cell pf-v6-c-table__th"> — missing in PFJ
896. **Fix structure:** Multiple sticky columns — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
897. **Fix structure:** Multiple sticky columns — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
898. **Fix structure:** Multiple sticky columns — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
899. **Fix structure:** Multiple sticky columns — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
900. **Fix structure:** Multiple sticky columns — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
901. **Fix structure:** Multiple sticky columns — PFJ has <span class="pf-v6-screen-reader"> — not in PF
902. **Fix structure:** Multiple sticky columns — PFJ has <svg class="pf-v6-svg"> — not in PF
903. **Fix attribute:** Multiple sticky columns — aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
904. **Fix attribute:** Multiple sticky columns — aria-sort="none" on <th> — present in PF, absent in PFJ
905. **Fix attribute:** Multiple sticky columns — role="cell" on <td> — present in PF, absent in PFJ
906. **Fix attribute:** Multiple sticky columns — role="columnheader" on <th> — present in PF, absent in PFJ
907. **Fix attribute:** Multiple sticky columns — role="grid" on <table> — present in PF, absent in PFJ
908. **Fix attribute:** Multiple sticky columns — role="row" on <tr> — present in PF, absent in PFJ
909. **Fix attribute:** Multiple sticky columns — role="rowgroup" on <tbody> — present in PF, absent in PFJ
910. **Fix CSS:** Sticky columns and header — add missing class pf-m-border-right on <th>
911. **Fix CSS:** Sticky columns and header — add missing class pf-m-left on <th>
912. **Fix CSS:** Sticky columns and header — add missing class pf-m-nowrap on <th>
913. **Fix CSS:** Sticky columns and header — add missing class pf-m-sticky-header on <table>
914. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-scroll-inner-wrapper on <div>
915. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-scroll-outer-wrapper on <div>
916. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table on <table>
917. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__button on <button>
918. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__button-content on <span>
919. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__sort on <th>
920. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__sort-indicator on <span>
921. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__sticky-cell on <th>
922. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__tbody on <tbody>
923. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__td on <td>
924. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__text on <span>
925. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__th on <th>
926. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__thead on <thead>
927. **Fix CSS:** Sticky columns and header — add missing class pf-v6-c-table__tr on <tr>
928. **Fix structure:** Sticky columns and header — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
929. **Fix structure:** Sticky columns and header — PF has <div class="pf-v6-c-scroll-outer-wrapper"> — missing in PFJ
930. **Fix structure:** Sticky columns and header — PF has <table class="pf-m-sticky-header pf-v6-c-table"> — missing in PFJ
931. **Fix structure:** Sticky columns and header — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
932. **Fix structure:** Sticky columns and header — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
933. **Fix structure:** Sticky columns and header — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
934. **Fix structure:** Sticky columns and header — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
935. **Fix structure:** Sticky columns and header — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
936. **Fix structure:** Sticky columns and header — PFJ has <span class="pf-v6-screen-reader"> — not in PF
937. **Fix structure:** Sticky columns and header — PFJ has <svg class="pf-v6-svg"> — not in PF
938. **Fix attribute:** Sticky columns and header — aria-label="This is a scrollable table" on <table> — present in PF, absent in PFJ
939. **Fix attribute:** Sticky columns and header — aria-sort="none" on <th> — present in PF, absent in PFJ
940. **Fix attribute:** Sticky columns and header — role="cell" on <td> — present in PF, absent in PFJ
941. **Fix attribute:** Sticky columns and header — role="columnheader" on <th> — present in PF, absent in PFJ
942. **Fix attribute:** Sticky columns and header — role="grid" on <table> — present in PF, absent in PFJ
943. **Fix attribute:** Sticky columns and header — role="row" on <tr> — present in PF, absent in PFJ
944. **Fix attribute:** Sticky columns and header — role="rowgroup" on <tbody> — present in PF, absent in PFJ
945. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-border-right on <th>
946. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-expandable on <table>
947. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-expanded on <tbody>
948. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-first-cell-offset-reset on <tr>
949. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-inline on <button>
950. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-link on <button>
951. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-nested-column-header on <thead>
952. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-plain on <button>
953. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-m-standalone on <label>
954. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-button on <button>
955. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-button__icon on <span>
956. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-button__text on <span>
957. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-check on <label>
958. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-check__input on <input>
959. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-scroll-inner-wrapper on <div>
960. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table on <table>
961. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__cell-empty on <th>
962. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__check on <th>
963. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__expandable-row on <tr>
964. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__expandable-row-content on <div>
965. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__subhead on <th>
966. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__tbody on <tbody>
967. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__td on <td>
968. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__th on <th>
969. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__thead on <thead>
970. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__toggle on <td>
971. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__toggle-icon on <div>
972. **Fix CSS:** Nested column headers and expandable rows — add missing class pf-v6-c-table__tr on <tr>
973. **Fix structure:** Nested column headers and expandable rows — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
974. **Fix structure:** Nested column headers and expandable rows — PF has <table class="pf-m-expandable pf-v6-c-table"> — missing in PFJ
975. **Fix structure:** Nested column headers and expandable rows — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
976. **Fix structure:** Nested column headers and expandable rows — PF has <th class="pf-v6-c-table__check pf-v6-c-table__th"> — missing in PFJ
977. **Fix structure:** Nested column headers and expandable rows — PF has <thead class="pf-m-nested-column-header pf-v6-c-table__thead"> — missing in PFJ
978. **Fix structure:** Nested column headers and expandable rows — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
979. **Fix structure:** Nested column headers and expandable rows — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
980. **Fix structure:** Nested column headers and expandable rows — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
981. **Fix structure:** Nested column headers and expandable rows — PFJ has <span class="pf-v6-screen-reader"> — not in PF
982. **Fix structure:** Nested column headers and expandable rows — PFJ has <svg class="pf-v6-svg"> — not in PF
983. **Fix attribute:** Nested column headers and expandable rows — aria-controls="nested-columns-expandable-example-content-1" on <button> — present in PF, absent in PFJ
984. **Fix attribute:** Nested column headers and expandable rows — aria-controls="nested-columns-expandable-example-content-2" on <button> — present in PF, absent in PFJ
985. **Fix attribute:** Nested column headers and expandable rows — aria-controls="nested-columns-expandable-example-content-3" on <button> — present in PF, absent in PFJ
986. **Fix attribute:** Nested column headers and expandable rows — aria-describedby="true" on <button> — present in PF, absent in PFJ
987. **Fix attribute:** Nested column headers and expandable rows — aria-expanded="false" on <button> — present in PF, absent in PFJ
988. **Fix attribute:** Nested column headers and expandable rows — aria-expanded="true" on <button> — present in PF, absent in PFJ
989. **Fix attribute:** Nested column headers and expandable rows — aria-label="Check row" on <td> — present in PF, absent in PFJ
990. **Fix attribute:** Nested column headers and expandable rows — aria-label="Row expansion" on <td> — present in PF, absent in PFJ
991. **Fix attribute:** Nested column headers and expandable rows — aria-label="Row select" on <th> — present in PF, absent in PFJ
992. **Fix attribute:** Nested column headers and expandable rows — aria-label="Select all rows" on <input> — present in PF, absent in PFJ
993. **Fix attribute:** Nested column headers and expandable rows — aria-label="Select row" on <input> — present in PF, absent in PFJ
994. **Fix attribute:** Nested column headers and expandable rows — aria-label="This is a nested column header table example" on <table> — present in PF, absent in PFJ
995. **Fix attribute:** Nested column headers and expandable rows — aria-label="Toggle row" on <button> — present in PF, absent in PFJ
996. **Fix attribute:** Nested column headers and expandable rows — aria-labelledby="nested-columns-expandable-example-node-1" on <button> — present in PF, absent in PFJ
997. **Fix attribute:** Nested column headers and expandable rows — aria-labelledby="nested-columns-expandable-example-node-2" on <button> — present in PF, absent in PFJ
998. **Fix attribute:** Nested column headers and expandable rows — aria-labelledby="nested-columns-expandable-example-node-3" on <button> — present in PF, absent in PFJ
999. **Fix attribute:** Nested column headers and expandable rows — role="cell" on <td> — present in PF, absent in PFJ
1000. **Fix attribute:** Nested column headers and expandable rows — role="columnheader" on <th> — present in PF, absent in PFJ
1001. **Fix attribute:** Nested column headers and expandable rows — role="grid" on <table> — present in PF, absent in PFJ
1002. **Fix attribute:** Nested column headers and expandable rows — role="row" on <tr> — present in PF, absent in PFJ
1003. **Fix attribute:** Nested column headers and expandable rows — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1004. **Fix attribute:** Nested column headers and expandable rows — type="button" on <button> — present in PF, absent in PFJ
1005. **Fix attribute:** Nested column headers and expandable rows — type="checkbox" on <input> — present in PF, absent in PFJ
1006. **Fix icon:** Nested column headers and expandable rows — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
1007. **Fix CSS:** Nested column headers example — add missing class pf-m-border-right on <th>
1008. **Fix CSS:** Nested column headers example — add missing class pf-m-fit-content on <th>
1009. **Fix CSS:** Nested column headers example — add missing class pf-m-flex-1 on <div>
1010. **Fix CSS:** Nested column headers example — add missing class pf-m-nested-column-header on <thead>
1011. **Fix CSS:** Nested column headers example — add missing class pf-m-nowrap on <div>
1012. **Fix CSS:** Nested column headers example — add missing class pf-m-teal on <span>
1013. **Fix CSS:** Nested column headers example — add missing class pf-m-truncate on <span>
1014. **Fix CSS:** Nested column headers example — add missing class pf-m-wrap on <th>
1015. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-label on <span>
1016. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-label__content on <span>
1017. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-label__text on <span>
1018. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-scroll-inner-wrapper on <div>
1019. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table on <table>
1020. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__button on <button>
1021. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__button-content on <span>
1022. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__sort on <th>
1023. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__sort-indicator on <span>
1024. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__subhead on <th>
1025. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__tbody on <tbody>
1026. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__td on <td>
1027. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__text on <span>
1028. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__th on <th>
1029. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__thead on <thead>
1030. **Fix CSS:** Nested column headers example — add missing class pf-v6-c-table__tr on <tr>
1031. **Fix CSS:** Nested column headers example — add missing class pf-v6-l-flex on <div>
1032. **Fix CSS:** Nested column headers example — add missing class pf-v6-l-flex__item on <div>
1033. **Fix CSS:** Nested column headers example — add missing class pf-v6-l-stack on <div>
1034. **Fix CSS:** Nested column headers example — add missing class pf-v6-u-color-200 on <span>
1035. **Fix structure:** Nested column headers example — PF has <div class="pf-v6-c-scroll-inner-wrapper"> — missing in PFJ
1036. **Fix structure:** Nested column headers example — PF has <table class="pf-v6-c-table"> — missing in PFJ
1037. **Fix structure:** Nested column headers example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
1038. **Fix structure:** Nested column headers example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
1039. **Fix structure:** Nested column headers example — PF has <th class="pf-m-border-right pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
1040. **Fix structure:** Nested column headers example — PF has <th class="pf-m-border-right pf-v6-c-table__th"> — missing in PFJ
1041. **Fix structure:** Nested column headers example — PF has <th class="pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
1042. **Fix structure:** Nested column headers example — PF has <th class="pf-m-fit-content pf-v6-c-table__sort pf-v6-c-table__th"> — missing in PFJ
1043. **Fix structure:** Nested column headers example — PF has <th class="pf-m-wrap pf-v6-c-table__sort pf-v6-c-table__subhead pf-v6-c-table__th"> — missing in PFJ
1044. **Fix structure:** Nested column headers example — PF has <thead class="pf-m-nested-column-header pf-v6-c-table__thead"> — missing in PFJ
1045. **Fix structure:** Nested column headers example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
1046. **Fix structure:** Nested column headers example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
1047. **Fix structure:** Nested column headers example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
1048. **Fix structure:** Nested column headers example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
1049. **Fix structure:** Nested column headers example — PFJ has <svg class="pf-v6-svg"> — not in PF
1050. **Fix attribute:** Nested column headers example — aria-label="This is a nested column header table example" on <table> — present in PF, absent in PFJ
1051. **Fix attribute:** Nested column headers example — aria-sort="none" on <th> — present in PF, absent in PFJ
1052. **Fix attribute:** Nested column headers example — role="cell" on <td> — present in PF, absent in PFJ
1053. **Fix attribute:** Nested column headers example — role="columnheader" on <th> — present in PF, absent in PFJ
1054. **Fix attribute:** Nested column headers example — role="grid" on <table> — present in PF, absent in PFJ
1055. **Fix attribute:** Nested column headers example — role="row" on <tr> — present in PF, absent in PFJ
1056. **Fix attribute:** Nested column headers example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1057. **Fix CSS:** Draggable rows example — add missing class pf-m-ghost-row on <tr>
1058. **Fix CSS:** Draggable rows example — add missing class pf-m-grid-md on <table>
1059. **Fix CSS:** Draggable rows example — add missing class pf-m-plain on <button>
1060. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-button on <button>
1061. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-button__icon on <span>
1062. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table on <table>
1063. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__caption on <caption>
1064. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__cell-empty on <th>
1065. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__draggable on <td>
1066. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__tbody on <tbody>
1067. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__td on <td>
1068. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__th on <th>
1069. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__thead on <thead>
1070. **Fix CSS:** Draggable rows example — add missing class pf-v6-c-table__tr on <tr>
1071. **Fix structure:** Draggable rows example — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
1072. **Fix structure:** Draggable rows example — PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
1073. **Fix structure:** Draggable rows example — PF has <div class="pf-v6-screen-reader"> — missing in PFJ
1074. **Fix structure:** Draggable rows example — PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
1075. **Fix structure:** Draggable rows example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
1076. **Fix structure:** Draggable rows example — PF has <td class="pf-v6-c-table__draggable pf-v6-c-table__td"> — missing in PFJ
1077. **Fix structure:** Draggable rows example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
1078. **Fix structure:** Draggable rows example — PF has <th class="pf-v6-c-table__cell-empty pf-v6-c-table__th"> — missing in PFJ
1079. **Fix structure:** Draggable rows example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
1080. **Fix structure:** Draggable rows example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
1081. **Fix structure:** Draggable rows example — PF has <tr class="pf-m-ghost-row pf-v6-c-table__tr"> — missing in PFJ
1082. **Fix structure:** Draggable rows example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
1083. **Fix structure:** Draggable rows example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
1084. **Fix structure:** Draggable rows example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
1085. **Fix structure:** Draggable rows example — PFJ has <svg class="pf-v6-svg"> — not in PF
1086. **Fix attribute:** Draggable rows example — aria-describedby="table-draggable-rows-help" on <button> — present in PF, absent in PFJ
1087. **Fix attribute:** Draggable rows example — aria-label="Reorder" on <button> — present in PF, absent in PFJ
1088. **Fix attribute:** Draggable rows example — aria-label="This is a table with draggable rows example" on <table> — present in PF, absent in PFJ
1089. **Fix attribute:** Draggable rows example — aria-labelledby="table-draggable-rows-row-1-draggable-button table-draggable-rows-row-1-node" on <button> — present in PF, absent in PFJ
1090. **Fix attribute:** Draggable rows example — aria-labelledby="table-draggable-rows-row-2-draggable-button table-draggable-rows-row-2-node" on <button> — present in PF, absent in PFJ
1091. **Fix attribute:** Draggable rows example — aria-labelledby="table-draggable-rows-row-3-draggable-button table-draggable-rows-row-3-node" on <button> — present in PF, absent in PFJ
1092. **Fix attribute:** Draggable rows example — aria-labelledby="table-draggable-rows-row-4-draggable-button table-draggable-rows-row-4-node" on <button> — present in PF, absent in PFJ
1093. **Fix attribute:** Draggable rows example — aria-live="assertive" on <div> — present in PF, absent in PFJ
1094. **Fix attribute:** Draggable rows example — aria-pressed="false" on <button> — present in PF, absent in PFJ
1095. **Fix attribute:** Draggable rows example — role="cell" on <td> — present in PF, absent in PFJ
1096. **Fix attribute:** Draggable rows example — role="columnheader" on <th> — present in PF, absent in PFJ
1097. **Fix attribute:** Draggable rows example — role="grid" on <table> — present in PF, absent in PFJ
1098. **Fix attribute:** Draggable rows example — role="row" on <tr> — present in PF, absent in PFJ
1099. **Fix attribute:** Draggable rows example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1100. **Fix attribute:** Draggable rows example — type="button" on <button> — present in PF, absent in PFJ
1101. **Fix icon:** Draggable rows example — icon mismatch on pf-v6-svg: PF viewBox=0 0 320 512, PFJ viewBox=0 0 32 32
1102. **Fix CSS:** Striped table example — add missing class pf-m-grid-md on <table>
1103. **Fix CSS:** Striped table example — add missing class pf-m-striped on <table>
1104. **Fix CSS:** Striped table example — add missing class pf-v6-c-table on <table>
1105. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__caption on <caption>
1106. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__tbody on <tbody>
1107. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__td on <td>
1108. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__th on <th>
1109. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__thead on <thead>
1110. **Fix CSS:** Striped table example — add missing class pf-v6-c-table__tr on <tr>
1111. **Fix structure:** Striped table example — PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
1112. **Fix structure:** Striped table example — PF has <table class="pf-m-grid-md pf-m-striped pf-v6-c-table"> — missing in PFJ
1113. **Fix structure:** Striped table example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
1114. **Fix structure:** Striped table example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
1115. **Fix structure:** Striped table example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
1116. **Fix structure:** Striped table example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
1117. **Fix structure:** Striped table example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
1118. **Fix structure:** Striped table example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
1119. **Fix structure:** Striped table example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
1120. **Fix structure:** Striped table example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
1121. **Fix structure:** Striped table example — PFJ has <svg class="pf-v6-svg"> — not in PF
1122. **Fix attribute:** Striped table example — aria-label="This is a striped table example" on <table> — present in PF, absent in PFJ
1123. **Fix attribute:** Striped table example — role="cell" on <td> — present in PF, absent in PFJ
1124. **Fix attribute:** Striped table example — role="columnheader" on <th> — present in PF, absent in PFJ
1125. **Fix attribute:** Striped table example — role="grid" on <table> — present in PF, absent in PFJ
1126. **Fix attribute:** Striped table example — role="row" on <tr> — present in PF, absent in PFJ
1127. **Fix attribute:** Striped table example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1128. **Fix attribute:** Striped table example — aria-hidden="true" on <svg> — present in PFJ, absent in PF
1129. **Fix attribute:** Striped table example — role="img" on <svg> — present in PFJ, absent in PF
1130. **Fix CSS:** Striped multiple tbody example — add missing class pf-m-grid-md on <table>
1131. **Fix CSS:** Striped multiple tbody example — add missing class pf-m-striped on <tbody>
1132. **Fix CSS:** Striped multiple tbody example — add missing class pf-m-striped-even on <tbody>
1133. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table on <table>
1134. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__caption on <caption>
1135. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__tbody on <tbody>
1136. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__td on <td>
1137. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__th on <th>
1138. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__thead on <thead>
1139. **Fix CSS:** Striped multiple tbody example — add missing class pf-v6-c-table__tr on <tr>
1140. **Fix structure:** Striped multiple tbody example — PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
1141. **Fix structure:** Striped multiple tbody example — PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
1142. **Fix structure:** Striped multiple tbody example — PF has <tbody class="pf-m-striped pf-v6-c-table__tbody"> — missing in PFJ
1143. **Fix structure:** Striped multiple tbody example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
1144. **Fix structure:** Striped multiple tbody example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
1145. **Fix structure:** Striped multiple tbody example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
1146. **Fix structure:** Striped multiple tbody example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
1147. **Fix structure:** Striped multiple tbody example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
1148. **Fix structure:** Striped multiple tbody example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
1149. **Fix structure:** Striped multiple tbody example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
1150. **Fix structure:** Striped multiple tbody example — PFJ has <svg class="pf-v6-svg"> — not in PF
1151. **Fix attribute:** Striped multiple tbody example — aria-label="This is a striped tbody example" on <table> — present in PF, absent in PFJ
1152. **Fix attribute:** Striped multiple tbody example — role="cell" on <td> — present in PF, absent in PFJ
1153. **Fix attribute:** Striped multiple tbody example — role="columnheader" on <th> — present in PF, absent in PFJ
1154. **Fix attribute:** Striped multiple tbody example — role="grid" on <table> — present in PF, absent in PFJ
1155. **Fix attribute:** Striped multiple tbody example — role="row" on <tr> — present in PF, absent in PFJ
1156. **Fix attribute:** Striped multiple tbody example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1157. **Fix attribute:** Striped multiple tbody example — aria-hidden="true" on <svg> — present in PFJ, absent in PF
1158. **Fix attribute:** Striped multiple tbody example — role="img" on <svg> — present in PFJ, absent in PF
1159. **Fix CSS:** Striped tr example — add missing class pf-m-grid-md on <table>
1160. **Fix CSS:** Striped tr example — add missing class pf-m-striped on <tr>
1161. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table on <table>
1162. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__caption on <caption>
1163. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__tbody on <tbody>
1164. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__td on <td>
1165. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__th on <th>
1166. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__thead on <thead>
1167. **Fix CSS:** Striped tr example — add missing class pf-v6-c-table__tr on <tr>
1168. **Fix structure:** Striped tr example — PF has <caption class="pf-v6-c-table__caption"> — missing in PFJ
1169. **Fix structure:** Striped tr example — PF has <table class="pf-m-grid-md pf-v6-c-table"> — missing in PFJ
1170. **Fix structure:** Striped tr example — PF has <tbody class="pf-v6-c-table__tbody"> — missing in PFJ
1171. **Fix structure:** Striped tr example — PF has <td class="pf-v6-c-table__td"> — missing in PFJ
1172. **Fix structure:** Striped tr example — PF has <th class="pf-v6-c-table__th"> — missing in PFJ
1173. **Fix structure:** Striped tr example — PF has <thead class="pf-v6-c-table__thead"> — missing in PFJ
1174. **Fix structure:** Striped tr example — PF has <tr class="pf-m-striped pf-v6-c-table__tr"> — missing in PFJ
1175. **Fix structure:** Striped tr example — PF has <tr class="pf-v6-c-table__tr"> — missing in PFJ
1176. **Fix structure:** Striped tr example — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
1177. **Fix structure:** Striped tr example — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
1178. **Fix structure:** Striped tr example — PFJ has <span class="pf-v6-screen-reader"> — not in PF
1179. **Fix structure:** Striped tr example — PFJ has <svg class="pf-v6-svg"> — not in PF
1180. **Fix attribute:** Striped tr example — aria-label="This is a striped tr example" on <table> — present in PF, absent in PFJ
1181. **Fix attribute:** Striped tr example — role="cell" on <td> — present in PF, absent in PFJ
1182. **Fix attribute:** Striped tr example — role="columnheader" on <th> — present in PF, absent in PFJ
1183. **Fix attribute:** Striped tr example — role="grid" on <table> — present in PF, absent in PFJ
1184. **Fix attribute:** Striped tr example — role="row" on <tr> — present in PF, absent in PFJ
1185. **Fix attribute:** Striped tr example — role="rowgroup" on <tbody> — present in PF, absent in PFJ
1186. **Fix attribute:** Striped tr example — aria-hidden="true" on <svg> — present in PFJ, absent in PF
1187. **Fix attribute:** Striped tr example — role="img" on <svg> — present in PFJ, absent in PF
