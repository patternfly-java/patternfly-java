---
component: panel
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/panel/html
pfj_url: http://localhost:1234/components/panel
completeness:
  pf_total: 12
  pfj_total: 9
  matched: 9
  missing_in_pfj:
    - secondary
    - scrollable-with-auto-height
    - pill
  extra_in_pfj: []
---

# PF Compare: panel

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Secondary | --- | missing_in_pfj |
| 3 | Header | Header | matched (exact) |
| 4 | Footer | Footer | matched (exact) |
| 5 | Header and footer | Header and footer | matched (exact) |
| 6 | No body | No body | matched (exact) |
| 7 | Raised | Raised | matched (exact) |
| 8 | Bordered | Bordered | matched (exact) |
| 9 | Scrollable | Scrollable | matched (exact) |
| 10 | Scrollable with auto height | --- | missing_in_pfj |
| 11 | Scrollable with header and footer | Scrollable with header and footer | matched (exact) |
| 12 | Pill | --- | missing_in_pfj |

## DOM Comparison

### Basic

**Status:** match

PF and PFJ both render `div.pf-v6-c-panel > div.pf-v6-c-panel__main > div.pf-v6-c-panel__main-body`. Structure is identical.

### Header

**Status:** match

Both render `div.pf-v6-c-panel__header` followed by `hr.pf-v6-c-divider` followed by `div.pf-v6-c-panel__main > div.pf-v6-c-panel__main-body`. PFJ adds `aria-labelledby` on the root panel element pointing to the header ID, which is a PFJ enhancement.

### Raised

**Status:** match

Both apply `pf-m-raised` modifier on the root `div.pf-v6-c-panel`.

### Bordered

**Status:** match

Both apply `pf-m-bordered` modifier on the root `div.pf-v6-c-panel`.

### Scrollable

**Status:** match

Both apply `pf-m-scrollable` modifier and add `tabindex="0"` on `div.pf-v6-c-panel__main`.

## Action Items

### Missing Variations

1. **Secondary** (`pf-m-secondary`) -- Add a `secondary()` modifier method to `Panel.java` that applies `css(modifier("secondary"))`. Low effort.

2. **Scrollable with auto height** (`pf-m-scrollable-auto-height`) -- The PF variation adds both `pf-m-scrollable-auto-height` and `pf-m-scrollable` modifiers. Add a `scrollableAutoHeight()` builder method that applies both modifiers. Low effort.

3. **Pill** (`pf-m-pill`) -- Add a `pill()` modifier method to `Panel.java` that applies `css(modifier("pill"))`. Low effort.
