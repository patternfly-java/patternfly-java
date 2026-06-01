---
component: wizard
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/wizard/html
pfj_url: http://localhost:1234/components/wizard
completeness:
  pf_total: 13
  pfj_total: 9
  matched: 11
  missing_in_pfj:
    - nav-expanded-mobile
    - with-drawer
    - expandable-collapsed
    - expandable-expanded
    - nav-expanded-with-error-mobile
    - nav-expanded-with-success-mobile
    - nav-expanded-with-warning-mobile
  extra_in_pfj:
    - basic-with-disabled-steps
    - incrementally-enabled-steps
    - handlers-and-promises
    - form-validation
    - progressive-steps
---

# PF Compare: wizard

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Nav expanded (mobile) | --- | missing_in_pfj |
| 3 | With drawer | --- | missing_in_pfj |
| 4 | Expandable collapsed | --- | missing_in_pfj |
| 5 | Expandable expanded | --- | missing_in_pfj |
| 6 | Finished | Progress after submission | matched (semantic) |
| 7 | Error on step | Step status | matched (covered -- PFJ step status covers error) |
| 8 | Nav expanded with error (mobile) | --- | missing_in_pfj |
| 9 | Success on step | Step status | matched (covered -- PFJ step status covers success) |
| 10 | Nav expanded with success (mobile) | --- | missing_in_pfj |
| 11 | Warning on step | Step status | matched (covered -- PFJ step status covers warning) |
| 12 | Nav expanded with warning (mobile) | --- | missing_in_pfj |
| 13 | Plain | Basic | matched (covered -- PFJ basic wizard uses plain layout) |

## Action Items

1. Add "nav expanded (mobile)" wizard variation
2. Add "with drawer" wizard variation
3. Add "expandable collapsed/expanded" wizard variations
4. Add mobile nav expanded variations for error, success, and warning states
