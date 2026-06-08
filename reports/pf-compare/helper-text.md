---
component: helper-text
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/helper-text/html
pfj_url: http://localhost:1234/components/helper-text
completeness:
  pf_total: 4
  pfj_total: 5
  matched: 3
  missing_in_pfj:
    - basic
  extra_in_pfj:
    - helper-text-static
    - helper-text-static-custom-icon
---

# PF Compare: helper-text

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Multiple items | Multiple static | matched (semantic) |
| 2 | Dynamic | Dynamic | matched (exact) |
| 3 | Dynamic list | Dynamic list | matched (exact) |
| 4 | Basic | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Static (`helper-text-static`)
- Static with custom icons (`helper-text-static-custom-icon`)

## DOM Comparison

### Multiple items

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <li class="pf-v6-c-helper-text__item"> — missing in PFJ
- PF has <ul class="pf-v6-c-helper-text"> — missing in PFJ
- PFJ has <div class="pf-v6-c-helper-text"> — not in PF
- PFJ has <div class="pf-v6-c-helper-text__item"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF

#### Attribute Differences
- role="list" on <ul> — present in PF, absent in PFJ

### Dynamic

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-v6-c-helper-text__item-icon"> — missing in PFJ
- PFJ has <div class="pf-v6-c-helper-text__item-icon"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <div> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Dynamic list

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-v6-c-helper-text__item-icon"> — missing in PFJ
- PFJ has <div class="pf-m-dynamic pf-m-success pf-v6-c-helper-text__item"> — not in PF
- PFJ has <div class="pf-v6-c-helper-text__item-icon"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- role="list" on <ul> — present in PF, absent in PFJ
- aria-hidden="true" on <div> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-live="polite" on <ul> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Basic — implement Basic variation in PFJ
2. **Fix structure:** Multiple items — PF has <li class="pf-v6-c-helper-text__item"> — missing in PFJ
3. **Fix structure:** Multiple items — PF has <ul class="pf-v6-c-helper-text"> — missing in PFJ
4. **Fix structure:** Multiple items — PFJ has <div class="pf-v6-c-helper-text"> — not in PF
5. **Fix structure:** Multiple items — PFJ has <div class="pf-v6-c-helper-text__item"> — not in PF
6. **Fix structure:** Multiple items — PFJ has <span class="pf-v6-screen-reader"> — not in PF
7. **Fix attribute:** Multiple items — role="list" on <ul> — present in PF, absent in PFJ
8. **Fix structure:** Dynamic — PF has <span class="pf-v6-c-helper-text__item-icon"> — missing in PFJ
9. **Fix structure:** Dynamic — PFJ has <div class="pf-v6-c-helper-text__item-icon"> — not in PF
10. **Fix structure:** Dynamic — PFJ has <svg class="pf-v6-svg"> — not in PF
11. **Fix attribute:** Dynamic — aria-hidden="true" on <i> — present in PF, absent in PFJ
12. **Fix attribute:** Dynamic — aria-hidden="true" on <div> — present in PFJ, absent in PF
13. **Fix attribute:** Dynamic — aria-hidden="true" on <svg> — present in PFJ, absent in PF
14. **Fix attribute:** Dynamic — role="img" on <svg> — present in PFJ, absent in PF
15. **Fix structure:** Dynamic list — PF has <span class="pf-v6-c-helper-text__item-icon"> — missing in PFJ
16. **Fix structure:** Dynamic list — PFJ has <div class="pf-m-dynamic pf-m-success pf-v6-c-helper-text__item"> — not in PF
17. **Fix structure:** Dynamic list — PFJ has <div class="pf-v6-c-helper-text__item-icon"> — not in PF
18. **Fix structure:** Dynamic list — PFJ has <svg class="pf-v6-svg"> — not in PF
19. **Fix attribute:** Dynamic list — aria-hidden="true" on <i> — present in PF, absent in PFJ
20. **Fix attribute:** Dynamic list — role="list" on <ul> — present in PF, absent in PFJ
21. **Fix attribute:** Dynamic list — aria-hidden="true" on <div> — present in PFJ, absent in PF
22. **Fix attribute:** Dynamic list — aria-hidden="true" on <svg> — present in PFJ, absent in PF
23. **Fix attribute:** Dynamic list — aria-live="polite" on <ul> — present in PFJ, absent in PF
24. **Fix attribute:** Dynamic list — role="img" on <svg> — present in PFJ, absent in PF
