---
component: button
date: 2026-05-28
pf_version: Release 6.1
pf_url: https://www.patternfly.org/components/button/html
pfj_url: http://localhost:1234/components/button
completeness:
  pf_total: 12
  pfj_total: 10
  matched: 9
  missing_in_pfj:
    - call-to-action
    - progress
    - count
  extra_in_pfj:
    - custom-icon-layout
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Button variations | matched |
| 2 | Disabled | Disabled buttons | matched |
| 3 | Small | Small buttons | matched |
| 4 | Call to action | --- | missing_in_pfj |
| 5 | Block level | Block level | matched |
| 6 | Links | Link buttons | matched |
| 7 | Inline link | Inline link | matched |
| 8 | Danger | Danger buttons | matched |
| 9 | Progress | --- | missing_in_pfj |
| 10 | Count | --- | missing_in_pfj |
| 11 | Plain | Plain buttons | matched |
| 12 | Control | Control buttons | matched |
| -- | --- | Custom icon layout | extra_in_pfj |

## DOM Comparison

### Variations

**Status:** ok

### Disabled

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-aria-disabled` on `<button>` — present in PF, absent in PFJ

#### Attribute Differences
- `aria-disabled="true"` on `<button>` — present in PF, absent in PFJ

### Danger

**Status:** ok

### Plain

**Status:** differences_found

#### Structural Differences
- PF wraps icon in `<span class="pf-v6-c-button__icon">`, PFJ places icon directly in button

## Action Items

1. **Add variation:** Call to action — implement call-to-action button variant
2. **Add variation:** Progress — implement progress/loading button variant
3. **Add variation:** Count — implement button with count badge
4. **Fix CSS:** Disabled — add `.pf-m-aria-disabled` modifier class
5. **Fix attribute:** Disabled — add `aria-disabled` attribute support
6. **Fix structure:** Plain — wrap icon in `span.pf-v6-c-button__icon`
