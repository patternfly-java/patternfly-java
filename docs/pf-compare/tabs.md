---
component: tabs
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/tabs/html
pfj_url: http://localhost:1234/components/tabs
completeness:
  pf_total: 40
  pfj_total: 18
  matched: 33
  missing_in_pfj:
    - horizontal-overflow-expanded-example
    - horizontal-overflow-selected-example
    - vertical-expandable-responsive-example
    - vertical-expandable-example-deprecated
    - vertical-expanded-example-deprecated
    - vertical-expandable-responsive-example-deprecated
    - site-navigation-variation
    - animate-default-tabs-accent
    - animate-sub-tabs-accent
    - animate-filled-tabs-accent
    - animate-vertical-tabs-accent
    - secondary
  extra_in_pfj:
    - children-mounting-on-click
    - toggled-tab-content
---

# PF Compare: tabs

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default tabs example | Default tabs | matched (semantic — PFJ includes box/secondary toggle) |
| 2 | Overflow beginning of list example | Default overflow tabs | matched (semantic) |
| 3 | Horizontal overflow example | Horizontal overflow tabs | matched (semantic) |
| 4 | Horizontal overflow expanded example | --- | missing_in_pfj |
| 5 | Horizontal overflow selected example | --- | missing_in_pfj |
| 6 | Vertical tabs example | Vertical tabs | matched (semantic — PFJ includes box toggle) |
| 7 | Vertical expandable example | Vertical expandable tabs | matched (semantic) |
| 8 | Vertical expanded example | Vertical expandable tabs | matched (covered — toggle expands) |
| 9 | Vertical expandable responsive example | --- | missing_in_pfj |
| 10 | Vertical expandable example (deprecated) | --- | missing_in_pfj (deprecated) |
| 11 | Vertical expanded example (deprecated) | --- | missing_in_pfj (deprecated) |
| 12 | Vertical expandable responsive example (deprecated) | --- | missing_in_pfj (deprecated) |
| 13 | Box tabs example | Default tabs | matched (covered — PFJ has box checkbox toggle) |
| 14 | Box overflow example | Default overflow tabs | matched (covered — PFJ has box toggle on overflow) |
| 15 | Box vertical example | Vertical tabs | matched (covered — PFJ has box toggle) |
| 16 | Box tabs secondary variant example | Default tabs | matched (covered — PFJ has secondary tabs checkbox) |
| 17 | Default tab insets example | With adjusted inset | matched (semantic) |
| 18 | Box tab insets example | With adjusted inset | matched (covered — PFJ has box toggle on inset) |
| 19 | Page insets example | With page insets | matched (semantic) |
| 20 | Icons and text example | With icons and text | matched (exact) |
| 21 | Tabs with sub tabs example | Subtabs | matched (semantic) |
| 22 | Box tabs with sub tabs example | Subtabs | matched (covered — PFJ has box toggle) |
| 23 | Filled tabs example | Filled tabs with icons | matched (semantic) |
| 24 | Filled with icons example | Filled tabs with icons | matched (covered) |
| 25 | Filled box example | Filled tabs with icons | matched (covered — PFJ has box toggle) |
| 26 | Filled box with icons example | Filled tabs with icons | matched (covered) |
| 27 | Using the nav element example | Tabs linked to nav elements | matched (semantic) |
| 28 | Sub tabs using the nav element example | Subtabs linked to nav elements | matched (semantic) |
| 29 | Site navigation variation | --- | missing_in_pfj |
| 30 | Help button example | With help action popover | matched (semantic) |
| 31 | Close button example | Dynamic tabs | matched (semantic — PFJ dynamic tabs have close buttons) |
| 32 | Help and close button example | With help and close actions | matched (semantic) |
| 33 | Add tab button example | Dynamic tabs | matched (covered — PFJ includes "Add new tab" button) |
| 34 | Animate default tabs accent | --- | missing_in_pfj |
| 35 | Animate sub tabs accent | --- | missing_in_pfj |
| 36 | Animate filled tabs accent | --- | missing_in_pfj |
| 37 | Animate vertical tabs accent | --- | missing_in_pfj |
| 38 | Default tab content example | With tab content with body and padding | matched (semantic) |
| 39 | Padding | With tab content with body and padding | matched (covered) |
| 40 | Secondary | --- | missing_in_pfj |
| — | --- | Children mounting on click | extra_in_pfj |
| — | --- | Toggled tab content | extra_in_pfj |

## DOM Comparison

### Default tabs ↔ Default tabs

**Status:** ok — PFJ renders correct `pf-v6-c-tabs` with `role="tablist"`, `pf-v6-c-tabs__item` for each tab, `aria-selected` on active tab, and `pf-v6-c-tab-content` for content panels.

### Vertical tabs ↔ Vertical tabs

**Status:** ok — PFJ applies `pf-m-vertical` modifier correctly.

### Vertical expandable ↔ Vertical expandable tabs

**Status:** ok — PFJ uses `pf-m-expandable` with toggle button.

### Overflow ↔ Default overflow tabs / Horizontal overflow tabs

**Status:** ok — PFJ implements both scroll-based overflow (default) and horizontal overflow with "More" dropdown.

### Icons and text ↔ With icons and text

**Status:** ok — PFJ renders `pf-v6-c-tabs__item-icon` before text.

### Subtabs ↔ Subtabs

**Status:** ok — PFJ renders nested tabs with `pf-m-secondary` modifier.

### Nav element ↔ Tabs linked to nav elements

**Status:** ok — PFJ uses `<nav>` element with `pf-m-nav` modifier (added in PF 6.5).

### Help / Close / Add ↔ Various

**Status:** ok — PFJ renders `pf-v6-c-tabs__item-action` for help and close buttons, and `pf-v6-c-tabs__add` for add button.

## Action Items

1. **Add variation:** Secondary tabs — add standalone demo for `pf-m-secondary` style (currently only shown as checkbox toggle within Default tabs)
2. **Add variation:** Animated tab accent — add demos showing `pf-m-animate` CSS accent transition on tab selection (CSS-only feature, 4 variations in PF)
3. **Add variation:** Horizontal overflow expanded/selected — add expanded and pre-selected state demos for horizontal overflow
4. **Add variation (low priority):** Vertical expandable responsive — responsive breakpoint for vertical expandable collapse
5. **Skip:** Deprecated vertical expandable examples — 3 deprecated PF variations, do not implement
6. **Add variation:** Site navigation variation — full-page navigation tab style
