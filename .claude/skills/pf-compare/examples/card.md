---
component: card
date: 2026-05-28
pf_version: Release 6.1
pf_url: https://www.patternfly.org/components/card/html
pfj_url: http://localhost:1234/components/card
completeness:
  pf_total: 8
  pfj_total: 7
  matched: 6
  missing_in_pfj:
    - expandable
    - with-actions
  extra_in_pfj:
    - custom-header-actions
---

# PF Compare: card

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic card | matched |
| 2 | With header | Card with header | matched |
| 3 | With subheader | Card with subheader | matched |
| 4 | With footer | Card with footer | matched |
| 5 | Compact | Compact card | matched |
| 6 | Flat | Flat card | matched |
| 7 | Expandable | --- | missing_in_pfj |
| 8 | With actions | --- | missing_in_pfj |
| -- | --- | Custom header actions | extra_in_pfj |

## DOM Comparison

### Basic

**Status:** ok

### With header

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-no-fill` on `<div class="pf-v6-c-card__body">` -- present in PF, absent in PFJ

### Compact

**Status:** ok

### Flat

**Status:** differences_found

#### Attribute Differences
- `role="region"` on `<div class="pf-v6-c-card">` -- present in PF, absent in PFJ

## Action Items

1. **Add variation:** Expandable -- implement expandable card with toggle
2. **Add variation:** With actions -- implement card header with action buttons/kebab
3. **Fix CSS:** With header -- add `.pf-m-no-fill` modifier to card body
4. **Fix attribute:** Flat -- add `role="region"` attribute support to card
