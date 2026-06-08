---
component: switch
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/switch/html
pfj_url: http://localhost:1234/components/switch
completeness:
  pf_total: 5
  pfj_total: 5
  matched: 3
  missing_in_pfj:
    - reverse-toggle-on-right
    - label-and-check-icon
  extra_in_pfj:
    - switch-reversed
    - switch-checked-label
---

# PF Compare: switch

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Without visible text label | Without label | matched (semantic) |
| 3 | Disabled | Disabled | matched (exact) |
| 4 | Reverse (toggle on right) | --- | missing_in_pfj |
| 5 | Label and check icon | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Reversed layout (`switch-reversed`)
- Checked with label (`switch-checked-label`)

## DOM Comparison

### Basic

**Status:** differences_found

#### Attribute Differences
- aria-labelledby="switch-with-label-1-text" on <input> — present in PF, absent in PFJ
- aria-labelledby="switch-basic-0-label" on <input> — present in PFJ, absent in PF

### Without visible text label

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Togglable option in no text label example" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Togglable option for no visible label example" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Disabled

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Togglable option in disabled icon example" on <input> — present in PF, absent in PFJ
- aria-labelledby="switch-disabled-1-text" on <input> — present in PF, absent in PFJ
- aria-labelledby="switch-disabled-2-text" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Togglable option for checked with no visible label example" on <input> — present in PFJ, absent in PF
- aria-label="Togglable option for unchecked with no visible label example" on <input> — present in PFJ, absent in PF
- aria-labelledby="switch-disabled-0-label" on <input> — present in PFJ, absent in PF
- aria-labelledby="switch-disabled-1-label" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Reverse (toggle on right) — implement Reverse (toggle on right) variation in PFJ
2. **Add variation:** Label and check icon — implement Label and check icon variation in PFJ
3. **Fix attribute:** Basic — aria-labelledby="switch-with-label-1-text" on <input> — present in PF, absent in PFJ
4. **Fix attribute:** Basic — aria-labelledby="switch-basic-0-label" on <input> — present in PFJ, absent in PF
5. **Fix structure:** Without visible text label — PFJ has <svg class="pf-v6-svg"> — not in PF
6. **Fix attribute:** Without visible text label — aria-hidden="true" on <i> — present in PF, absent in PFJ
7. **Fix attribute:** Without visible text label — aria-label="Togglable option in no text label example" on <input> — present in PF, absent in PFJ
8. **Fix attribute:** Without visible text label — aria-hidden="true" on <svg> — present in PFJ, absent in PF
9. **Fix attribute:** Without visible text label — aria-label="Togglable option for no visible label example" on <input> — present in PFJ, absent in PF
10. **Fix attribute:** Without visible text label — role="img" on <svg> — present in PFJ, absent in PF
11. **Fix attribute:** Disabled — aria-hidden="true" on <i> — present in PF, absent in PFJ
12. **Fix attribute:** Disabled — aria-label="Togglable option in disabled icon example" on <input> — present in PF, absent in PFJ
13. **Fix attribute:** Disabled — aria-labelledby="switch-disabled-1-text" on <input> — present in PF, absent in PFJ
14. **Fix attribute:** Disabled — aria-labelledby="switch-disabled-2-text" on <input> — present in PF, absent in PFJ
15. **Fix attribute:** Disabled — aria-hidden="true" on <svg> — present in PFJ, absent in PF
16. **Fix attribute:** Disabled — aria-label="Togglable option for checked with no visible label example" on <input> — present in PFJ, absent in PF
17. **Fix attribute:** Disabled — aria-label="Togglable option for unchecked with no visible label example" on <input> — present in PFJ, absent in PF
18. **Fix attribute:** Disabled — aria-labelledby="switch-disabled-0-label" on <input> — present in PFJ, absent in PF
19. **Fix attribute:** Disabled — aria-labelledby="switch-disabled-1-label" on <input> — present in PFJ, absent in PF
20. **Fix attribute:** Disabled — role="img" on <svg> — present in PFJ, absent in PF
