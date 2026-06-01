---
component: drawer
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/drawer/html
pfj_url: http://localhost:1234/components/drawer
completeness:
  pf_total: 22
  pfj_total: 16
  matched: 19
  missing_in_pfj:
    - modified-panel-width
    - pill
    - resizable-pill
    - pill-inline
  extra_in_pfj:
    - breakpoint
---

# PF Compare: drawer

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Closed panel on right (default) | Basic | matched (semantic — PFJ shows toggle button, starts closed) |
| 2 | Expanded panel on right | Basic | matched (covered — toggle opens panel at end) |
| 3 | Closed panel on left | Panel at start | matched (semantic — starts closed) |
| 4 | Expanded panel on left | Panel at start | matched (covered — toggle opens) |
| 5 | Closed panel on bottom | Panel on bottom | matched (semantic) |
| 6 | Expanded panel on bottom | Panel on bottom | matched (covered) |
| 7 | Expanded inline panel | Basic inline | matched (semantic) |
| 8 | Expanded inline panel on left | Inline panel at start | matched (semantic) |
| 9 | Static | Static drawer | matched (exact) |
| 10 | Stacked content body elements | Stacked content body elements | matched (exact) |
| 11 | Modified content body padding | Modified content padding | matched (semantic) |
| 12 | Modified panel body padding | Modified panel padding | matched (semantic) |
| 13 | Modified panel width | --- | missing_in_pfj |
| 14 | Additional section above main | Additional section above drawer content | matched (semantic) |
| 15 | Resizable panel | Resizable at end | matched (semantic) |
| 16 | Resizable left panel | Resizable at start | matched (semantic) |
| 17 | Resizable bottom panel | Resizable on bottom | matched (semantic) |
| 18 | Resizable inline panel | --- | missing_in_pfj (but inline + resizable combination exists in API) |
| 19 | Panel with secondary background | --- | missing_in_pfj (covered by DrawerColor API but no showcase demo) |
| 20 | Pill | --- | missing_in_pfj |
| 21 | Resizable Pill | --- | missing_in_pfj |
| 22 | Pill inline | --- | missing_in_pfj |
| — | --- | Panel at end | extra_in_pfj |
| — | --- | Inline panel at end | extra_in_pfj |
| — | --- | Breakpoint | extra_in_pfj |

## DOM Comparison

### Basic / Panel positions

**Status:** ok — PFJ correctly uses `pf-v6-c-drawer` with `pf-m-panel-left` / `pf-m-panel-bottom` modifiers, `pf-m-expanded` toggle, and `pf-v6-c-drawer__content` / `pf-v6-c-drawer__panel` structure with close button.

### Inline variants

**Status:** ok — PFJ applies `pf-m-inline` modifier correctly. Inline start uses both `pf-m-inline` and `pf-m-panel-left`.

### Static drawer

**Status:** ok — PFJ applies `pf-m-static` and `pf-m-expanded` on the drawer root.

### Stacked content body elements

**Status:** ok — PFJ renders multiple `pf-v6-c-drawer__body` elements with `pf-m-padding` modifier.

### Resizable variants

**Status:** ok — PFJ renders `pf-v6-c-drawer__splitter` with `pf-m-vertical` modifier for horizontal resize.

### Pill (PF 6.5 feature)

**Status:** missing_in_pfj — PF adds `pf-m-pill` modifier to the drawer root, changing panel shape to rounded/pill style. The Java API implements `Pill` modifier interface but the showcase has no demo.

### Panel with secondary background

**Status:** missing_in_pfj — PF uses `pf-m-secondary` on the panel. PFJ has `DrawerColor` enum with `secondary` value but no showcase demo.

## Action Items

1. **Add variation:** Pill — add showcase demo with `pf-m-pill` modifier (API exists via `Pill` interface)
2. **Add variation:** Resizable Pill — combine pill and resizable
3. **Add variation:** Pill inline — combine pill and inline
4. **Add variation:** Panel with secondary background — add demo using `DrawerColor.secondary`
5. **Add variation:** Modified panel width — add demo showing custom panel width via CSS variable
6. **Add variation:** Resizable inline panel — add demo combining inline and resizable
