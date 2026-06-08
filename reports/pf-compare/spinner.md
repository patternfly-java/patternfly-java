---
component: spinner
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/spinner/html
pfj_url: http://localhost:1234/components/spinner
completeness:
  pf_total: 4
  pfj_total: 4
  matched: 4
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: spinner

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Sizes | Sizes | matched (exact) |
| 3 | Inline | Inline size | matched (semantic) |
| 4 | Custom size | Custom size | matched (exact) |

## DOM Comparison

### Basic

**Status:** differences_found

#### Attribute Differences
- aria-label="Loading..." on <svg> — present in PF, absent in PFJ
- aria-label="Loading.." on <svg> — present in PFJ, absent in PF

### Sizes

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-xs` on `<svg>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <svg class="pf-m-xs pf-v6-c-spinner"> — missing in PFJ

#### Attribute Differences
- aria-label="Loading..." on <svg> — present in PF, absent in PFJ
- aria-label="Loading.." on <svg> — present in PFJ, absent in PF

### Inline

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-c-content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-v6-c-content"> — not in PF

#### Attribute Differences
- aria-label="Loading..." on <svg> — present in PF, absent in PFJ
- aria-label="Spinner in heading" on <svg> — present in PFJ, absent in PF
- aria-label="Spinner in paragraph" on <svg> — present in PFJ, absent in PF
- aria-label="Spinner in small element" on <svg> — present in PFJ, absent in PF
- aria-label="Spinner in subheading" on <svg> — present in PFJ, absent in PF

### Custom size

**Status:** differences_found

#### Attribute Differences
- aria-label="Loading..." on <svg> — present in PF, absent in PFJ
- aria-label="Loading.." on <svg> — present in PFJ, absent in PF

## Action Items

1. **Fix attribute:** Basic — aria-label="Loading..." on <svg> — present in PF, absent in PFJ
2. **Fix attribute:** Basic — aria-label="Loading.." on <svg> — present in PFJ, absent in PF
3. **Fix CSS:** Sizes — add missing class pf-m-xs on <svg>
4. **Fix structure:** Sizes — PF has <svg class="pf-m-xs pf-v6-c-spinner"> — missing in PFJ
5. **Fix attribute:** Sizes — aria-label="Loading..." on <svg> — present in PF, absent in PFJ
6. **Fix attribute:** Sizes — aria-label="Loading.." on <svg> — present in PFJ, absent in PF
7. **Fix structure:** Inline — PFJ has <div class="pf-v6-c-content"> — not in PF
8. **Fix attribute:** Inline — aria-label="Loading..." on <svg> — present in PF, absent in PFJ
9. **Fix attribute:** Inline — aria-label="Spinner in heading" on <svg> — present in PFJ, absent in PF
10. **Fix attribute:** Inline — aria-label="Spinner in paragraph" on <svg> — present in PFJ, absent in PF
11. **Fix attribute:** Inline — aria-label="Spinner in small element" on <svg> — present in PFJ, absent in PF
12. **Fix attribute:** Inline — aria-label="Spinner in subheading" on <svg> — present in PFJ, absent in PF
13. **Fix attribute:** Custom size — aria-label="Loading..." on <svg> — present in PF, absent in PFJ
14. **Fix attribute:** Custom size — aria-label="Loading.." on <svg> — present in PFJ, absent in PF
