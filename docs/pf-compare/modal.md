---
component: modal
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/modal/html
pfj_url: http://localhost:1234/components/modal
completeness:
  pf_total: 16
  pfj_total: 16
  matched: 14
  missing_in_pfj:
    - modal-box-as-generic-container
    - danger-alert-with-modifier-on-modal-title
  extra_in_pfj:
    - modal-scrollable
    - modal-top
    - modal-custom-width
    - modal-custom-hf
    - modal-no-hf
    - modal-custom-icon
    - modal-wizard
    - modal-dropdown
    - modal-form
---

# PF Compare: modal

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic modals | matched (semantic) |
| 2 | With help button | With help | matched (semantic) |
| 3 | Small | Small modal | matched (semantic) |
| 4 | Medium | Medium modal | matched (semantic) |
| 5 | Large | Large modal | matched (semantic) |
| 6 | Without title | No header or footer | matched (semantic — PFJ demonstrates no header/footer which includes no title) |
| 7 | With description | With a static description | matched (semantic) |
| 8 | Custom title | Custom header and footer | matched (semantic — PFJ custom header covers custom title) |
| 9 | Modal box as generic container | --- | missing_in_pfj |
| 10 | Icon | Title icon | matched (semantic) |
| 11 | Custom alert | Custom title icon | matched (semantic — PFJ custom title icon covers custom alert icon) |
| 12 | Info alert | Basic modals | matched (semantic — severity/info can be set via `severity(Severity.info)` on ModalHeaderTitle) |
| 13 | Success alert | Basic modals | matched (semantic — severity/success available via `severity(Severity.success)`) |
| 14 | Warning alert | Basic modals | matched (semantic — severity/warning available via `severity(Severity.warning)`) |
| 15 | Danger alert | Basic modals | matched (semantic — severity/danger available via `severity(Severity.danger)`) |
| 16 | Danger alert with modifier on modal title | --- | missing_in_pfj |

### PFJ-only snippets (no PF counterpart)

| # | PFJ Snippet | Notes |
|---|---|---|
| 1 | Scrollable modals | PFJ-specific: demonstrates scrollable body content |
| 2 | Top aligned | PFJ-specific: demonstrates `top()` modifier |
| 3 | Custom width modal | PFJ-specific: demonstrates `width()` / `maxWidth()` API |
| 4 | Custom header and footer | PFJ-specific: separate from PF's "Custom title" |
| 5 | No header or footer | PFJ-specific: separate from PF's "Without title" |
| 6 | Custom title icon | PFJ-specific: custom icon on title |
| 7 | With wizard | Not yet implemented (warning badge in showcase) |
| 8 | With dropdown | PFJ-specific: dropdown inside modal |
| 9 | With form | PFJ-specific: form inside modal |

## DOM Comparison

### Basic ↔ Basic modals

**Status:** equivalent

Both use the same structure:
- `div.pf-v6-c-modal-box[role=dialog][aria-modal=true]`
  - `div.pf-v6-c-modal-box__close` > close button
  - `header.pf-v6-c-modal-box__header` > `h1.pf-v6-c-modal-box__title` > `span.pf-v6-c-modal-box__title-text`
  - `div.pf-v6-c-modal-box__body`
  - `footer.pf-v6-c-modal-box__footer`

PFJ wraps the modal in a `div.pf-v6-c-backdrop` > `div.pf-v6-l-bullseye` container, which PF examples show inline without the backdrop.

### Small / Medium / Large ↔ Small / Medium / Large modal

**Status:** equivalent

Both apply size modifiers (`pf-m-sm`, `pf-m-md`, `pf-m-lg`) to the `pf-v6-c-modal-box` element.

### With help button ↔ With help

**Status:** equivalent

Both add a `div.pf-v6-c-modal-box__header-help` container in the header area containing a help button (typically connected to a popover).

### With description ↔ With a static description

**Status:** equivalent

Both add a `div.pf-v6-c-modal-box__description` element inside the header.

### Icon / Alert variations ↔ Title icon / Severity

**Status:** differences_found

- PF uses separate examples for each alert type (info, success, warning, danger, custom) with explicit `pf-m-info`, `pf-m-success`, etc. modifiers on the modal-box element and a `span.pf-v6-c-modal-box__title-icon` with the corresponding icon
- PFJ uses `severity(Severity.info)` etc. on `ModalHeaderTitle` which applies both the icon and the status modifier, achieving the same result programmatically
- PF "Danger alert with modifier on modal title" applies `pf-m-danger` directly on the `h1.pf-v6-c-modal-box__title` instead of the modal-box — PFJ does not support this variant

### Modal box as generic container

**Status:** missing_in_pfj

PF demonstrates a modal box used as a plain container without role=dialog and without aria-modal. PFJ always creates modals with `role=dialog` and `aria-modal=true`.

## Action Items

1. **Add generic container mode** — Support creating a modal-box without `role=dialog` and `aria-modal=true` for use as a generic container element (PF "Modal box as generic container")
2. **Add title-level danger modifier** — Support applying `pf-m-danger` on the `h1.pf-v6-c-modal-box__title` element instead of (or in addition to) the modal-box root (PF "Danger alert with modifier on modal title")
