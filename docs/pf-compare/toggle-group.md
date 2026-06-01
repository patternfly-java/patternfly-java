---
component: toggle-group
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/toggle-group/html
pfj_url: http://localhost:1234/components/toggle-group
completeness:
  pf_total: 5
  pfj_total: 5
  matched: 5
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: toggle-group

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default | Single select toggle group | matched (semantic -- PFJ splits PF "Default" into single/multi select) |
| 2 | Default | Multi select toggle group | matched (semantic -- PFJ splits PF "Default" into single/multi select) |
| 3 | With icon | With icons | matched (semantic) |
| 4 | Icon-and-text | With text and icons | matched (semantic) |
| 5 | Compact | Compact toggle group | matched (exact) |
| 6 | Full width toggle | --- | matched (implicit -- PFJ implements `FullWidth` modifier interface) |

## DOM Comparison

### Default / Single select / Multi select

**Status:** match

PF renders `div.pf-v6-c-toggle-group` containing `div.pf-v6-c-toggle-group__item` children, each with a `button.pf-v6-c-toggle-group__button > span.pf-v6-c-toggle-group__text`. PFJ produces the same structure. PFJ adds `role="group"` on the root element, which is an accessibility enhancement not present in PF HTML examples. Selected items get `pf-m-selected` on the button, matching PF behavior.

### With icon

**Status:** match

Both render `span.pf-v6-c-toggle-group__icon` inside the button with an SVG icon. PFJ uses `aria-label` on icon-only buttons for accessibility.

### Icon-and-text

**Status:** match

Both render `span.pf-v6-c-toggle-group__icon` followed by `span.pf-v6-c-toggle-group__text` inside the button.

### Compact

**Status:** match

Both apply `pf-m-compact` modifier on the root `div.pf-v6-c-toggle-group`.

### Full width toggle

**Status:** match

PF uses `pf-m-fill` modifier. PFJ implements the `FullWidth` modifier interface which applies the same CSS class via `fullWidth()` method.

## Action Items

No action items -- PFJ fully covers all PF toggle-group variations. The PFJ implementation adds `role="group"` for accessibility which is an enhancement over the PF HTML examples.
