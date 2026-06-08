---
component: divider
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/divider/html
pfj_url: http://localhost:1234/components/divider
completeness:
  pf_total: 11
  pfj_total: 9
  matched: 7
  missing_in_pfj:
    - md-inset-no-inset-on-md-3xl-inset-on-lg-lg-inset-on-xl
    - vertical-md-inset-no-inset-on-md-lg-inset-on-lg-sm-inset-on-xl
    - vertical-on-lg
    - horizontal-on-lg
  extra_in_pfj:
    - divider-inset-breakpoints
    - divider-orientation-switch
---

# PF Compare: divider

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | hr | Using hr | matched (semantic) |
| 2 | li | Using li | matched (semantic) |
| 3 | div | Using div | matched (semantic) |
| 4 | Inset medium | Inset medium | matched (exact) |
| 5 | Vertical | Vertical in flex layout | matched (semantic) |
| 6 | Vertical, inset medium | Vertical in flex layout, inset medium | matched (semantic) |
| 7 | In flex layout | Vertical in flex layout, inset at various breakpoints | matched (semantic) |
| 8 | Md inset, no inset on md, 3xl inset on lg, lg inset on xl | --- | missing_in_pfj |
| 9 | Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl | --- | missing_in_pfj |
| 10 | Vertical on lg | --- | missing_in_pfj |
| 11 | Horizontal on lg | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Inset at various breakpoints (`divider-inset-breakpoints`)
- Switch orientation at various breakpoints (`divider-orientation-switch`)

## DOM Comparison

### hr

**Status:** differences_found

#### Attribute Differences
- role="separator" on <hr> — present in PFJ, absent in PF

### li

**Status:** differences_found

#### Attribute Differences
- role="presentation" on <li> — present in PF, absent in PFJ
- role="separator" on <li> — present in PFJ, absent in PF

### div

**Status:** ok

No differences found.

### Inset medium

**Status:** differences_found

#### Attribute Differences
- role="separator" on <hr> — present in PFJ, absent in PF

### Vertical

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-l-flex__item` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
- PFJ has <div class="pf-v6-l-flex"> — not in PF
- PFJ has <div class="pf-v6-l-flex__item"> — not in PF
- PFJ has <hr class="pf-m-vertical pf-v6-c-divider"> — not in PF

#### Attribute Differences
- role="separator" on <div> — present in PF, absent in PFJ
- role="separator" on <hr> — present in PFJ, absent in PF

### Vertical, inset medium

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-l-flex` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-l-flex__item` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-inset-md pf-m-vertical pf-v6-c-divider"> — missing in PFJ
- PFJ has <div class="pf-v6-l-flex"> — not in PF
- PFJ has <div class="pf-v6-l-flex__item"> — not in PF
- PFJ has <hr class="pf-m-inset-md pf-m-vertical pf-v6-c-divider"> — not in PF

#### Attribute Differences
- role="separator" on <div> — present in PF, absent in PFJ
- role="separator" on <hr> — present in PFJ, absent in PF

### In flex layout

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-column` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-inset-md` on `<hr>` — present in PFJ, absent in PF
- `.pf-m-inset-none-on-md` on `<hr>` — present in PFJ, absent in PF
- `.pf-m-inset-sm-on-lg` on `<hr>` — present in PFJ, absent in PF
- `.pf-m-inset-xs-on-xl` on `<hr>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
- PFJ has <hr class="pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-sm-on-lg pf-m-inset-xs-on-xl pf-m-vertical pf-v6-c-divider"> — not in PF

#### Attribute Differences
- role="separator" on <div> — present in PF, absent in PFJ
- role="separator" on <hr> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Md inset, no inset on md, 3xl inset on lg, lg inset on xl — implement Md inset, no inset on md, 3xl inset on lg, lg inset on xl variation in PFJ
2. **Add variation:** Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl — implement Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl variation in PFJ
3. **Add variation:** Vertical on lg — implement Vertical on lg variation in PFJ
4. **Add variation:** Horizontal on lg — implement Horizontal on lg variation in PFJ
5. **Fix attribute:** hr — role="separator" on <hr> — present in PFJ, absent in PF
6. **Fix attribute:** li — role="presentation" on <li> — present in PF, absent in PFJ
7. **Fix attribute:** li — role="separator" on <li> — present in PFJ, absent in PF
8. **Fix attribute:** Inset medium — role="separator" on <hr> — present in PFJ, absent in PF
9. **Fix structure:** Vertical — PF has <div class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
10. **Fix structure:** Vertical — PFJ has <div class="pf-v6-l-flex"> — not in PF
11. **Fix structure:** Vertical — PFJ has <div class="pf-v6-l-flex__item"> — not in PF
12. **Fix structure:** Vertical — PFJ has <hr class="pf-m-vertical pf-v6-c-divider"> — not in PF
13. **Fix attribute:** Vertical — role="separator" on <div> — present in PF, absent in PFJ
14. **Fix attribute:** Vertical — role="separator" on <hr> — present in PFJ, absent in PF
15. **Fix structure:** Vertical, inset medium — PF has <div class="pf-m-inset-md pf-m-vertical pf-v6-c-divider"> — missing in PFJ
16. **Fix structure:** Vertical, inset medium — PFJ has <div class="pf-v6-l-flex"> — not in PF
17. **Fix structure:** Vertical, inset medium — PFJ has <div class="pf-v6-l-flex__item"> — not in PF
18. **Fix structure:** Vertical, inset medium — PFJ has <hr class="pf-m-inset-md pf-m-vertical pf-v6-c-divider"> — not in PF
19. **Fix attribute:** Vertical, inset medium — role="separator" on <div> — present in PF, absent in PFJ
20. **Fix attribute:** Vertical, inset medium — role="separator" on <hr> — present in PFJ, absent in PF
21. **Fix CSS:** In flex layout — add missing class pf-m-column on <div>
22. **Fix structure:** In flex layout — PF has <div class="pf-m-vertical pf-v6-c-divider"> — missing in PFJ
23. **Fix structure:** In flex layout — PFJ has <hr class="pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-sm-on-lg pf-m-inset-xs-on-xl pf-m-vertical pf-v6-c-divider"> — not in PF
24. **Fix attribute:** In flex layout — role="separator" on <div> — present in PF, absent in PFJ
25. **Fix attribute:** In flex layout — role="separator" on <hr> — present in PFJ, absent in PF
