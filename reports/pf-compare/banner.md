---
component: banner
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/banner/html
pfj_url: http://localhost:1234/components/banner
completeness:
  pf_total: 4
  pfj_total: 4
  matched: 4
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: banner

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Banner with links | Banner with links | matched (exact) |
| 3 | Status | Status | matched (exact) |
| 4 | Pill | Pill | matched (exact) |

## DOM Comparison

### Basic

**Status:** ok

No differences found.

### Banner with links

**Status:** differences_found

#### Attribute Differences
- aria-disabled="true" on <button> — present in PFJ, absent in PF

### Status

**Status:** differences_found

#### Structural Differences
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ
- PFJ has <div class="pf-v6-screen-reader"> — not in PF

### Pill

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-custom` on `<div>` — present in PF, absent in PFJ
- `.pf-m-danger` on `<div>` — present in PF, absent in PFJ
- `.pf-m-info` on `<div>` — present in PF, absent in PFJ
- `.pf-m-space-items-sm` on `<div>` — present in PF, absent in PFJ
- `.pf-m-success` on `<div>` — present in PF, absent in PFJ
- `.pf-m-warning` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-l-flex` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-l-flex__item` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-screen-reader` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-svg` on `<svg>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-blue` on `<div>` — present in PFJ, absent in PF
- `.pf-m-green` on `<div>` — present in PFJ, absent in PF
- `.pf-m-red` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-custom pf-m-pill pf-v6-c-banner"> — missing in PFJ
- PF has <div class="pf-m-danger pf-m-pill pf-v6-c-banner"> — missing in PFJ
- PF has <div class="pf-m-info pf-m-pill pf-v6-c-banner"> — missing in PFJ
- PF has <div class="pf-m-pill pf-m-success pf-v6-c-banner"> — missing in PFJ
- PF has <div class="pf-m-pill pf-m-warning pf-v6-c-banner"> — missing in PFJ
- PF has <div class="pf-m-space-items-sm pf-v6-l-flex"> — missing in PFJ
- PF has <div class="pf-v6-l-flex__item"> — missing in PFJ
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ
- PF has <svg class="pf-v6-svg"> — missing in PFJ
- PFJ has <div class="pf-m-blue pf-m-pill pf-v6-c-banner"> — not in PF
- PFJ has <div class="pf-m-green pf-m-pill pf-v6-c-banner"> — not in PF
- PFJ has <div class="pf-m-pill pf-m-red pf-v6-c-banner"> — not in PF
- PFJ has <div class="pf-m-pill pf-v6-c-banner"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <svg> — present in PF, absent in PFJ
- role="img" on <svg> — present in PF, absent in PFJ

## Action Items

1. **Fix attribute:** Banner with links — aria-disabled="true" on <button> — present in PFJ, absent in PF
2. **Fix structure:** Status — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
3. **Fix structure:** Status — PFJ has <div class="pf-v6-screen-reader"> — not in PF
4. **Fix CSS:** Pill — add missing class pf-m-custom on <div>
5. **Fix CSS:** Pill — add missing class pf-m-danger on <div>
6. **Fix CSS:** Pill — add missing class pf-m-info on <div>
7. **Fix CSS:** Pill — add missing class pf-m-space-items-sm on <div>
8. **Fix CSS:** Pill — add missing class pf-m-success on <div>
9. **Fix CSS:** Pill — add missing class pf-m-warning on <div>
10. **Fix CSS:** Pill — add missing class pf-v6-l-flex on <div>
11. **Fix CSS:** Pill — add missing class pf-v6-l-flex__item on <div>
12. **Fix CSS:** Pill — add missing class pf-v6-screen-reader on <span>
13. **Fix CSS:** Pill — add missing class pf-v6-svg on <svg>
14. **Fix structure:** Pill — PF has <div class="pf-m-custom pf-m-pill pf-v6-c-banner"> — missing in PFJ
15. **Fix structure:** Pill — PF has <div class="pf-m-danger pf-m-pill pf-v6-c-banner"> — missing in PFJ
16. **Fix structure:** Pill — PF has <div class="pf-m-info pf-m-pill pf-v6-c-banner"> — missing in PFJ
17. **Fix structure:** Pill — PF has <div class="pf-m-pill pf-m-success pf-v6-c-banner"> — missing in PFJ
18. **Fix structure:** Pill — PF has <div class="pf-m-pill pf-m-warning pf-v6-c-banner"> — missing in PFJ
19. **Fix structure:** Pill — PF has <div class="pf-m-space-items-sm pf-v6-l-flex"> — missing in PFJ
20. **Fix structure:** Pill — PF has <div class="pf-v6-l-flex__item"> — missing in PFJ
21. **Fix structure:** Pill — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
22. **Fix structure:** Pill — PF has <svg class="pf-v6-svg"> — missing in PFJ
23. **Fix structure:** Pill — PFJ has <div class="pf-m-blue pf-m-pill pf-v6-c-banner"> — not in PF
24. **Fix structure:** Pill — PFJ has <div class="pf-m-green pf-m-pill pf-v6-c-banner"> — not in PF
25. **Fix structure:** Pill — PFJ has <div class="pf-m-pill pf-m-red pf-v6-c-banner"> — not in PF
26. **Fix structure:** Pill — PFJ has <div class="pf-m-pill pf-v6-c-banner"> — not in PF
27. **Fix attribute:** Pill — aria-hidden="true" on <svg> — present in PF, absent in PFJ
28. **Fix attribute:** Pill — role="img" on <svg> — present in PF, absent in PFJ
