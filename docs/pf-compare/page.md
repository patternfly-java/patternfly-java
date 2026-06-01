---
component: page
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/page/html
pfj_url: http://localhost:1234/components/page
completeness:
  pf_total: 9
  pfj_total: 7
  matched: 7
  missing_in_pfj:
    - with-dock
    - sticky-section-dynamic
  extra_in_pfj: []
---

# PF Compare: page

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Vertical nav | Vertical navigation | matched (exact) |
| 2 | Horizontal nav | Horizontal navigation | matched (exact) |
| 3 | Multiple sidebar body elements, padding, and fill | Multiple sidebar body | matched (semantic) |
| 4 | With or without fill | Filled page sections | matched (semantic) |
| 5 | Main section padding | Main section padding | matched (exact) |
| 6 | Main section variations | Group section | matched (semantic — PFJ group section covers section variations including sticky, shadows) |
| 7 | Centered section | Centered section | matched (exact) |
| 8 | With dock | --- | missing_in_pfj |
| 9 | Sticky section dynamic | --- | missing_in_pfj |

## DOM Comparison

### Vertical nav ↔ Vertical navigation

**Status:** equivalent

Both use the same structure:
- `div.pf-v6-c-page` with breakpoint modifiers
  - `header.pf-v6-c-masthead` with toggle and brand
  - `div.pf-v6-c-page__sidebar` > `div.pf-v6-c-page__sidebar-body` with navigation
  - `main.pf-v6-c-page__main` > `section.pf-v6-c-page__main-section` > `div.pf-v6-c-page__main-body`

PFJ handles responsive sidebar collapse/expand automatically via resize observer and breakpoint detection.

### Horizontal nav ↔ Horizontal navigation

**Status:** equivalent

Both demonstrate a page layout without a sidebar, where the navigation is placed in the masthead content area. PFJ uses `noSidebar()` modifier on the Page component.

### Multiple sidebar body elements, padding, and fill ↔ Multiple sidebar body

**Status:** equivalent

Both support multiple `div.pf-v6-c-page__sidebar-body` elements within a single sidebar, with `pf-m-fill` and `pf-m-no-fill` modifiers. PFJ uses the `PageSidebarBody` sub-component with `fill()` and `noFill()` methods.

### With or without fill ↔ Filled page sections

**Status:** equivalent

Both demonstrate `pf-m-fill` and `pf-m-no-fill` modifiers on `section.pf-v6-c-page__main-section`. PFJ uses `Fill` and `NoFill` modifier interfaces on `PageSection`.

### Main section padding ↔ Main section padding

**Status:** equivalent

Both demonstrate padding modifiers (`pf-m-padding`, `pf-m-no-padding`) on page sections with breakpoint-responsive variants. PFJ uses `padding(Padding)` and `padding(Breakpoints<Padding>)` methods on `PageSectionBuilder`.

### Main section variations ↔ Group section

**Status:** equivalent

- PF shows `div.pf-v6-c-page__main-group` with sticky modifiers, shadow-top/shadow-bottom, and overflow-scroll
- PFJ has `PageGroup` with `sticky()`, `shadowTop()`, `shadowBottom()`, and `overflowScroll()` methods
- PFJ also supports `secondary()` modifier on `PageSection` via the `Secondary` interface and `glass()` via the `Glass` interface

### Centered section ↔ Centered section

**Status:** equivalent

Both apply `pf-m-limit-width` and `pf-m-align-center` modifiers on the page section. PFJ uses `limitWidth()` and `centerAligned()` methods on `PageSectionBuilder`.

### With dock

**Status:** missing_in_pfj

PF demonstrates a dock area (`div.pf-v6-c-page__main-dock`) that provides a fixed area at the bottom of the main content. PFJ does not have a `PageDock` sub-component.

### Sticky section dynamic

**Status:** missing_in_pfj

PF demonstrates dynamic sticky sections that respond to scroll events with shadow modifiers (`pf-m-shadow-top`, `pf-m-shadow-bottom`) applied programmatically. While PFJ supports the `sticky()` modifier and `shadowTop()`/`shadowBottom()` methods, it does not include a demo showing dynamic shadow toggling based on scroll position.

## Action Items

1. **Add PageDock sub-component** — Implement a `PageDock` class for `div.pf-v6-c-page__main-dock` to support the dock layout pattern (PF "With dock")
2. **Add sticky section dynamic demo** — Create a showcase snippet demonstrating dynamic shadow toggling on sticky sections based on scroll position (PF "Sticky section dynamic"). The underlying API (`sticky()`, `shadowTop()`, `shadowBottom()`) already exists in PFJ.
