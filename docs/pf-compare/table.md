---
component: table
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/table/html
pfj_url: http://localhost:1234/components/table
completeness:
  pf_total: 50
  pfj_total: 33
  matched: 12
  missing_in_pfj:
    - sortable-example
    - overflow-menu-usage-desktop
    - overflow-menu-usage-overflow-menu-collapsed
    - overflow-menu-usage-mobile
    - single-select-radio-example
    - animated-expandable
    - expandable-with-set-width-columns-example
    - expandable-with-nested-table-example
    - compound-expansion-example
    - compound-expansion-example-with-nested-table
    - animated-compound-expansion-example
    - plain-example
    - compact-expandable-example
    - clickable-and-expandable-example
    - tree-table-with-checkboxes
    - tree-table-with-checkboxes-and-icons
    - tree-with-no-children-or-indentation
    - borderless-example
    - borderless-compact-example
    - borderless-expandable-example
    - borderless-with-compound-expansion-example
    - width-modifiers-examples
    - hiddenvisible-breakpoint-modifiers-example
    - text-control-example
    - text-control-using-the-table-text-element-example
    - table-with-long-strings-in-the-content
    - width-constrained
    - sticky-header
    - sticky-header-with-base-and-stuck
    - sticky-column
    - multiple-sticky-columns
    - sticky-columns-and-header
    - sticky-right-column
    - nested-column-headers-and-expandable-rows
    - nested-column-headers-example
    - nested-column-headers-sticky-header
    - favorites-examples
    - favorites-sortable-example
    - draggable-rows-example
    - striped-table-example
    - striped-expandable-table-example
    - striped-multiple-tbody-example
    - striped-tr-example
  extra_in_pfj:
    - custom-row-wrapper
    - sortable-wrapping-headers
    - sortable-custom-control
    - selectable-radio-input
    - actions-overflow
    - cell-width-breakpoint-modifiers
    - controlling-text
    - modifiers-with-table-text
    - favoritable
    - flat-tree-table-no-inset
    - draggable-row-table
    - sticky-table-modifiers
    - sticky-column
    - multiple-left-aligned-sticky-columns
    - multiple-right-aligned-sticky-columns
    - sticky-columns-and-header
    - nested-column-headers
    - nested-column-headers-expandable
    - expandable-nested-table
    - nested-sticky-header
    - striped
    - striped-expandable
    - striped-multiple-tbody
    - striped-tr
---

# PF Compare: table

## Completeness

PF has 50 HTML variations. PFJ has 33 showcase snippets, of which 7 are implemented and 26 show "Not yet implemented" warnings.

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic table example | Basic (default/compact/compact-borderless toggle) | matched (semantic) |
| 2 | Sortable example | Sortable & wrapping headers | matched (PFJ placeholder — not implemented) |
| 3 | Overflow menu usage, desktop | --- | missing_in_pfj |
| 4 | Overflow menu usage, collapsed | --- | missing_in_pfj |
| 5 | Overflow menu usage, mobile | --- | missing_in_pfj |
| 6 | Checkboxes and actions example | Selectable with checkbox | matched (semantic) |
| 7 | Single select radio example | Selectable radio input | matched (PFJ placeholder — not implemented) |
| 8 | Table with buttons and actions | Actions | matched (semantic) |
| 9 | Expandable example | Expandable | matched (PFJ placeholder — not implemented) |
| 10 | Animated expandable | --- | missing_in_pfj |
| 11 | Expandable with set width columns | --- | missing_in_pfj |
| 12 | Expandable with nested table | Expandable with nested table | matched (PFJ placeholder — not implemented) |
| 13 | Compound expansion example | Compound expandable | matched (PFJ placeholder — not implemented) |
| 14 | Compound expansion with nested table | --- | missing_in_pfj |
| 15 | Animated compound expansion | --- | missing_in_pfj |
| 16 | Plain example | --- | missing_in_pfj |
| 17 | Compact example | Basic (compact toggle) | matched (covered by toggle) |
| 18 | Compact expandable example | --- | missing_in_pfj |
| 19 | Clickable example | Row click handler, clickable rows | matched (semantic) |
| 20 | Clickable and expandable example | --- | missing_in_pfj |
| 21 | Tree table basic | Tree table (static) | matched (semantic) |
| 22 | Tree table with checkboxes | --- | missing_in_pfj |
| 23 | Tree table with checkboxes and icons | --- | missing_in_pfj |
| 24 | Tree with no children or indentation | Flat tree table with no inset | matched (PFJ placeholder — not implemented) |
| 25 | Borderless example | --- | missing_in_pfj |
| 26 | Borderless compact example | --- | missing_in_pfj |
| 27 | Borderless expandable example | --- | missing_in_pfj |
| 28 | Borderless with compound expansion | --- | missing_in_pfj |
| 29 | Width modifiers examples | Cell width, breakpoint modifiers | matched (PFJ placeholder — not implemented) |
| 30 | Hidden/visible breakpoint modifiers | --- | missing_in_pfj |
| 31 | Text control example | Controlling text | matched (PFJ placeholder — not implemented) |
| 32 | Text control using table text element | Modifiers with table text | matched (PFJ placeholder — not implemented) |
| 33 | Table with long strings | --- | missing_in_pfj |
| 34 | Width constrained | --- | missing_in_pfj |
| 35 | Sticky header | Sticky table modifiers | matched (PFJ placeholder — not implemented) |
| 36 | Sticky header with base and stuck | --- | missing_in_pfj |
| 37 | Sticky column | Sticky column | matched (PFJ placeholder — not implemented) |
| 38 | Multiple sticky columns | Multiple left-aligned sticky columns | matched (PFJ placeholder — not implemented) |
| 39 | Sticky columns and header | Sticky columns and header | matched (PFJ placeholder — not implemented) |
| 40 | Sticky right column | Multiple right-aligned sticky columns | matched (PFJ placeholder — not implemented) |
| 41 | Nested column headers and expandable | Nested column headers and expandable rows | matched (PFJ placeholder — not implemented) |
| 42 | Nested column headers example | Nested column headers | matched (PFJ placeholder — not implemented) |
| 43 | Nested column headers, sticky header | Nested sticky header | matched (PFJ placeholder — not implemented) |
| 44 | Favorites examples | Favoritable (implemented with sortable) | matched (PFJ placeholder — not implemented) |
| 45 | Favorites sortable example | --- | missing_in_pfj |
| 46 | Draggable rows example | Draggable row table | matched (PFJ placeholder — not implemented) |
| 47 | Striped table example | Striped | matched (PFJ placeholder — not implemented) |
| 48 | Striped expandable table | Striped expandable | matched (PFJ placeholder — not implemented) |
| 49 | Striped multiple tbody | Striped multiple tobdy | matched (PFJ placeholder — not implemented) |
| 50 | Striped tr example | Striped tr | matched (PFJ placeholder — not implemented) |
| — | --- | Empty state | extra_in_pfj |
| — | --- | Tree table (async) | extra_in_pfj |

## DOM Comparison

### Basic table ↔ Basic

**Status:** ok — PFJ renders correct `pf-v6-c-table` with `role="grid"`, `thead`/`tbody`/`tr`/`th`/`td` structure. Compact and compact-borderless modes toggle `pf-m-compact` and `pf-m-borderless` classes correctly.

### Checkboxes and actions ↔ Selectable with checkbox

**Status:** ok — PFJ uses `pf-v6-c-check` with `pf-m-standalone` for row selection checkboxes. Select-all header checkbox present.

### Table with buttons and actions ↔ Actions

**Status:** ok — PFJ renders action columns with button and kebab menu toggle.

### Clickable example ↔ Row click handler, clickable rows

**Status:** ok — PFJ uses `pf-m-clickable` on `<tr>` elements with click handlers.

### Tree table basic ↔ Tree table (static)

**Status:** ok — PFJ renders tree structure with `pf-v6-c-table__tree-view-main` and toggle buttons.

## Implementation Summary

| Category | Implemented | Placeholder | Missing |
|----------|-------------|-------------|---------|
| Basic / Compact | 1 | 0 | 0 |
| Selection (checkbox/radio/click) | 2 | 1 | 0 |
| Actions | 1 | 1 | 3 |
| Expandable / Compound | 0 | 3 | 5 |
| Tree table | 2 | 1 | 2 |
| Width / Text / Breakpoints | 0 | 3 | 4 |
| Sticky | 0 | 5 | 2 |
| Nested headers | 0 | 3 | 0 |
| Sortable / Favorites | 0 | 2 | 1 |
| Striped | 0 | 4 | 0 |
| Borderless | 0 | 0 | 4 |
| Draggable | 0 | 1 | 0 |
| Plain | 0 | 0 | 1 |

## Action Items

### High priority (core table features)
1. **Implement:** Expandable rows — `pf-m-expandable` with `pf-v6-c-table__expandable-row`
2. **Implement:** Sortable columns — sort indicators and handlers
3. **Implement:** Radio selection — single-select with radio inputs
4. **Implement:** Plain variant — `pf-m-plain` modifier (already added to Java API, needs showcase demo)

### Medium priority (layout & formatting)
5. **Implement:** Compact expandable — combine compact and expandable
6. **Implement:** Cell width modifiers — `pf-m-width-X` classes
7. **Implement:** Text wrapping/truncation — `pf-m-truncate`, `pf-m-wrap`, `pf-m-fit-content`
8. **Implement:** Borderless variations — `pf-m-borderless` (compact borderless toggle exists but needs standalone demos)
9. **Implement:** Striped rows — `pf-m-striped` modifier

### Lower priority (advanced features)
10. **Implement:** Sticky header — `pf-m-sticky-header` (Java API `stickyHeader()` exists, needs showcase demo)
11. **Implement:** Sticky columns — `pf-m-sticky-column`
12. **Implement:** Compound expansion — expand individual cells
13. **Implement:** Nested column headers — `colspan` with grouped headers
14. **Implement:** Favorites — star icon column with sort-by-favorite
15. **Implement:** Draggable rows — drag-and-drop reordering
16. **Implement:** Overflow menu actions — responsive action overflow
17. **Add variation:** Clickable and expandable — combine both features
18. **Add variation:** Tree table with checkboxes
