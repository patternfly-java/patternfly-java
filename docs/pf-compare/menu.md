---
component: menu
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/menus/menu/html
pfj_url: http://localhost:1234/components/menus/menu
completeness:
  pf_total: 37
  pfj_total: 23
  matched: 22
  not_implemented_in_pfj:
    - drilldown
    - drilldown-level-two
    - drilldown-level-three
    - drilldown-level-four
    - drilldown-with-breadcrumbs---level-1
    - drilldown-with-breadcrumbs---level-2
    - drilldown-with-breadcrumbs---level-3
    - drilldown-with-breadcrumbs---level-4
  missing_in_pfj:
    - with-flyout
    - with-flyout-menu-top
    - with-flyout-menu-left
    - with-flyout-menu-left-top
    - scrollable-drilldown
    - width-modified-drilldown
    - plain-with-search-and-footer
  extra_in_pfj: []
---

# PF Compare: menu

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic menu | matched (exact) |
| 2 | Danger menu item | Danger menu item | matched (exact) |
| 3 | With icons | With icons | matched (exact) |
| 4 | With checkbox | Item checkbox | matched (semantic) |
| 5 | Scrollable | Scrollable menus | matched (semantic) |
| 6 | Scrollable with custom menu height | Scrollable menu with custom height | matched (semantic) |
| 7 | With flyout | --- | missing_in_pfj |
| 8 | With flyout menu top | --- | missing_in_pfj |
| 9 | With flyout menu left | --- | missing_in_pfj |
| 10 | With flyout menu left top | --- | missing_in_pfj |
| 11 | Drilldown | With drilldown | matched (semantic — PFJ has snippet but not yet implemented) |
| 12 | Drilldown level two | With drilldown | matched (semantic — PFJ drilldown snippet covers multiple levels) |
| 13 | Drilldown level three | With drilldown | matched (semantic — PFJ drilldown snippet covers multiple levels) |
| 14 | Drilldown level four | With drilldown | matched (semantic — PFJ drilldown snippet covers multiple levels) |
| 15 | Scrollable drilldown | --- | missing_in_pfj |
| 16 | Width modified drilldown | --- | missing_in_pfj |
| 17 | Drilldown with breadcrumbs - level 1 | With drilldown breadcrumbs | matched (semantic — PFJ has snippet but not yet implemented) |
| 18 | Drilldown with breadcrumbs - level 2 | With drilldown breadcrumbs | matched (semantic — PFJ has snippet but not yet implemented) |
| 19 | Drilldown with breadcrumbs - level 3 | With drilldown breadcrumbs | matched (semantic — PFJ has snippet but not yet implemented) |
| 20 | Drilldown with breadcrumbs - level 4 | With drilldown breadcrumbs | matched (semantic — PFJ has snippet but not yet implemented) |
| 21 | Scrollable menu with header and footer | Menu footer | matched (semantic — PFJ footer demo covers scrollable menu with header/footer) |
| 22 | Scrollable menu with search and footer | Filtering with search input | matched (semantic — PFJ filtering demo covers search with scrollable content) |
| 23 | With filtering | Filtering with search input | matched (exact) |
| 24 | With links | With links | matched (exact) |
| 25 | With separator(s) | Separated items | matched (semantic) |
| 26 | With titled groups | Titled groups of items | matched (semantic) |
| 27 | With description | With descriptions | matched (exact) |
| 28 | With actions | With action | matched (semantic) |
| 29 | With favorites | With favorites | matched (exact) |
| 30 | Option single select | Option single select menu | matched (semantic) |
| 31 | Option multi-select | Option multi select menu | matched (semantic) |
| 32 | View more | With view more | matched (semantic) |
| 33 | Loading | With view more | matched (semantic — PFJ "view more" snippet includes loading state) |
| 34 | Footer | Menu footer | matched (exact) |
| 35 | Plain | Scrollable menus | matched (semantic — PFJ scrollable menus demo includes plain variant) |
| 36 | Plain with search and footer | --- | missing_in_pfj |
| 37 | Plain scrollable with search and footer | Filtering with search input | matched (semantic — PFJ filtering demo covers plain scrollable with search) |

## DOM Comparison

### Basic / Basic menu

**Status:** ok — Both render `<div>` with `pf-v6-c-menu` class containing `pf-v6-c-menu__content` with a `<ul>` list of menu items using `pf-v6-c-menu__list-item` and `pf-v6-c-menu__item`.

### Danger menu item / Danger menu item

**Status:** ok — Both apply `pf-m-danger` modifier to the menu list item.

### With icons / With icons

**Status:** ok — Both include `pf-v6-c-menu__item-icon` within menu items.

### With checkbox / Item checkbox

**Status:** ok — Both use `pf-v6-c-menu__item-check` with a `pf-v6-c-check` component inside menu items.

### Scrollable / Scrollable menus

**Status:** ok — Both apply `pf-m-scrollable` modifier to the menu.

### Scrollable with custom menu height / Scrollable menu with custom height

**Status:** ok — Both use `--pf-v6-c-menu__content--MaxHeight` CSS variable to set custom max height.

### With flyout

**Status:** missing_in_pfj — PF shows flyout menus that appear on hover/click of a parent menu item using `pf-m-flyout` modifier. This is a complex interactive pattern with positioning logic.

### Drilldown / With drilldown

**Status:** not_implemented — PFJ has the snippet placeholder but shows a warning that drilldown is not yet implemented. PF uses `pf-m-drilldown` modifier with nested menu panels and transition animations.

### Drilldown with breadcrumbs / With drilldown breadcrumbs

**Status:** not_implemented — PFJ has the snippet placeholder but shows a warning. PF shows breadcrumb navigation above drilldown menus for quick level jumping.

### Scrollable menu with header and footer / Menu footer

**Status:** ok — PFJ footer demo shows scrollable menu with header and footer sections.

### With filtering / Filtering with search input

**Status:** ok — Both include `pf-v6-c-menu__search` with a search input above the menu list.

### With links / With links

**Status:** ok — Both use `<a>` elements inside menu items instead of `<button>`.

### With separator(s) / Separated items

**Status:** ok — Both use `<li>` with `pf-v6-c-divider` role="separator" between menu groups.

### With titled groups / Titled groups of items

**Status:** ok — Both use `pf-v6-c-menu__group` with `pf-v6-c-menu__group-title` for section headings.

### With description / With descriptions

**Status:** ok — Both use `pf-v6-c-menu__item-description` below the main item text.

### With actions / With action

**Status:** ok — Both use `pf-v6-c-menu__item-action` for action buttons alongside menu items.

### With favorites / With favorites

**Status:** ok — Both use `pf-v6-c-menu__item-action` with `pf-m-favorite` modifier and star icon for favoriting items.

### Option single select / Option single select menu

**Status:** ok — Both use `pf-v6-c-menu__item-select-icon` with a check icon for selected state.

### Option multi-select / Option multi select menu

**Status:** ok — Both support multiple selected items with check icons.

### View more / With view more

**Status:** ok — Both include a "View more" action at the bottom of the menu list.

### Loading / With view more

**Status:** ok — PFJ "view more" demo includes the loading spinner state.

### Footer / Menu footer

**Status:** ok — Both use `pf-v6-c-menu__footer` for footer content below the menu list.

### Plain / Scrollable menus

**Status:** ok — Both apply `pf-m-plain` modifier to remove the menu border/shadow.

### Plain with search and footer

**Status:** missing_in_pfj — PF shows a plain menu with search input and footer combined. PFJ does not have a dedicated demo for this combination with `pf-m-plain`.

## Action Items

1. **Implement feature:** Flyout menus — implement `pf-m-flyout` modifier with nested menu positioning for `With flyout`, `With flyout menu top`, `With flyout menu left`, `With flyout menu left top` variations
2. **Implement feature:** Drilldown menus — implement `pf-m-drilldown` modifier with nested menu panels, transition animations, and drill-in/drill-out navigation for `Drilldown` level 1-4 variations
3. **Implement feature:** Scrollable drilldown — implement scrollable drilldown menu with `pf-m-scrollable` combined with `pf-m-drilldown`
4. **Implement feature:** Width modified drilldown — implement custom width drilldown using `--pf-v6-c-menu--Width` CSS variable
5. **Implement feature:** Drilldown with breadcrumbs — implement breadcrumb navigation above drilldown menus for quick level jumping
6. **Add variation:** Plain with search and footer — add demo showing `pf-m-plain` menu with search input and footer
