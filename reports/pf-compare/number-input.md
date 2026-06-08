---
component: number-input
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/number-input/html
pfj_url: http://localhost:1234/components/number-input
completeness:
  pf_total: 7
  pfj_total: 8
  matched: 6
  missing_in_pfj:
    - with-unit-and-upper-threshold-reached
  extra_in_pfj:
    - number-input-custom-increment-decrement
    - number-input-custom-increment-decrement-thresholds
---

# PF Compare: number-input

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default | Default | matched (exact) |
| 2 | With unit | With unit | matched (exact) |
| 3 | With unit and lower threshold reached | With unit and thresholds | matched (semantic) |
| 4 | Disabled | Disabled | matched (exact) |
| 5 | With status | With status | matched (exact) |
| 6 | Varying sizes | Varying sizes | matched (exact) |
| 7 | With unit and upper threshold reached | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Custom increment/decrement (`number-input-custom-increment-decrement`)
- Custom increment/decrement and thresholds (`number-input-custom-increment-decrement-thresholds`)

## DOM Comparison

### Default

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### With unit

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### With unit and lower threshold reached

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
- PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-disabled="false" on <button> — present in PFJ, absent in PF
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Disabled

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__unit` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
- PF has <div class="pf-v6-c-number-input"> — missing in PFJ
- PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-m-disabled pf-v6-c-number-input"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### With status

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-m-warning` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-success` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
- PF has <div class="pf-m-status pf-v6-c-number-input"> — missing in PFJ
- PF has <span class="pf-v6-c-form-control"> — missing in PFJ
- PFJ has <div class="pf-v6-c-number-input"> — not in PF
- PFJ has <span class="pf-m-success pf-v6-c-form-control"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Varying sizes

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fill` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-number-input__icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Number input" on <input> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** With unit and upper threshold reached — implement With unit and upper threshold reached variation in PFJ
2. **Fix CSS:** Default — add missing class pf-m-fill on <div>
3. **Fix CSS:** Default — add missing class pf-v6-c-number-input__icon on <span>
4. **Fix structure:** Default — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
5. **Fix attribute:** Default — aria-hidden="true" on <i> — present in PF, absent in PFJ
6. **Fix attribute:** Default — aria-label="Number input" on <input> — present in PF, absent in PFJ
7. **Fix attribute:** Default — aria-hidden="true" on <svg> — present in PFJ, absent in PF
8. **Fix attribute:** Default — aria-invalid="false" on <input> — present in PFJ, absent in PF
9. **Fix attribute:** Default — role="img" on <svg> — present in PFJ, absent in PF
10. **Fix CSS:** With unit — add missing class pf-m-fill on <div>
11. **Fix CSS:** With unit — add missing class pf-v6-c-number-input__icon on <span>
12. **Fix structure:** With unit — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
13. **Fix attribute:** With unit — aria-hidden="true" on <i> — present in PF, absent in PFJ
14. **Fix attribute:** With unit — aria-label="Number input" on <input> — present in PF, absent in PFJ
15. **Fix attribute:** With unit — aria-hidden="true" on <svg> — present in PFJ, absent in PF
16. **Fix attribute:** With unit — aria-invalid="false" on <input> — present in PFJ, absent in PF
17. **Fix attribute:** With unit — role="img" on <svg> — present in PFJ, absent in PF
18. **Fix CSS:** With unit and lower threshold reached — add missing class pf-m-fill on <div>
19. **Fix CSS:** With unit and lower threshold reached — add missing class pf-v6-c-number-input__icon on <span>
20. **Fix structure:** With unit and lower threshold reached — PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
21. **Fix structure:** With unit and lower threshold reached — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
22. **Fix structure:** With unit and lower threshold reached — PF has <span class="pf-v6-c-button__icon"> — missing in PFJ
23. **Fix structure:** With unit and lower threshold reached — PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF
24. **Fix attribute:** With unit and lower threshold reached — aria-hidden="true" on <i> — present in PF, absent in PFJ
25. **Fix attribute:** With unit and lower threshold reached — aria-label="Number input" on <input> — present in PF, absent in PFJ
26. **Fix attribute:** With unit and lower threshold reached — aria-disabled="false" on <button> — present in PFJ, absent in PF
27. **Fix attribute:** With unit and lower threshold reached — aria-disabled="true" on <button> — present in PFJ, absent in PF
28. **Fix attribute:** With unit and lower threshold reached — aria-hidden="true" on <svg> — present in PFJ, absent in PF
29. **Fix attribute:** With unit and lower threshold reached — aria-invalid="false" on <input> — present in PFJ, absent in PF
30. **Fix attribute:** With unit and lower threshold reached — role="img" on <svg> — present in PFJ, absent in PF
31. **Fix CSS:** Disabled — add missing class pf-m-fill on <div>
32. **Fix CSS:** Disabled — add missing class pf-v6-c-number-input__icon on <span>
33. **Fix CSS:** Disabled — add missing class pf-v6-c-number-input__unit on <span>
34. **Fix structure:** Disabled — PF has <button class="pf-m-control pf-v6-c-button"> — missing in PFJ
35. **Fix structure:** Disabled — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
36. **Fix structure:** Disabled — PF has <div class="pf-v6-c-number-input"> — missing in PFJ
37. **Fix structure:** Disabled — PFJ has <button class="pf-m-control pf-m-disabled pf-v6-c-button"> — not in PF
38. **Fix structure:** Disabled — PFJ has <div class="pf-m-disabled pf-v6-c-number-input"> — not in PF
39. **Fix attribute:** Disabled — aria-hidden="true" on <i> — present in PF, absent in PFJ
40. **Fix attribute:** Disabled — aria-label="Number input" on <input> — present in PF, absent in PFJ
41. **Fix attribute:** Disabled — aria-disabled="true" on <button> — present in PFJ, absent in PF
42. **Fix attribute:** Disabled — aria-hidden="true" on <svg> — present in PFJ, absent in PF
43. **Fix attribute:** Disabled — aria-invalid="false" on <input> — present in PFJ, absent in PF
44. **Fix attribute:** Disabled — role="img" on <svg> — present in PFJ, absent in PF
45. **Fix CSS:** With status — add missing class pf-m-fill on <div>
46. **Fix CSS:** With status — add missing class pf-m-warning on <span>
47. **Fix CSS:** With status — add missing class pf-v6-c-number-input__icon on <span>
48. **Fix structure:** With status — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
49. **Fix structure:** With status — PF has <div class="pf-m-status pf-v6-c-number-input"> — missing in PFJ
50. **Fix structure:** With status — PF has <span class="pf-v6-c-form-control"> — missing in PFJ
51. **Fix structure:** With status — PFJ has <div class="pf-v6-c-number-input"> — not in PF
52. **Fix structure:** With status — PFJ has <span class="pf-m-success pf-v6-c-form-control"> — not in PF
53. **Fix attribute:** With status — aria-hidden="true" on <i> — present in PF, absent in PFJ
54. **Fix attribute:** With status — aria-label="Number input" on <input> — present in PF, absent in PFJ
55. **Fix attribute:** With status — aria-hidden="true" on <svg> — present in PFJ, absent in PF
56. **Fix attribute:** With status — aria-invalid="false" on <input> — present in PFJ, absent in PF
57. **Fix attribute:** With status — role="img" on <svg> — present in PFJ, absent in PF
58. **Fix CSS:** Varying sizes — add missing class pf-m-fill on <div>
59. **Fix CSS:** Varying sizes — add missing class pf-v6-c-number-input__icon on <span>
60. **Fix structure:** Varying sizes — PF has <div class="pf-m-fill pf-v6-c-input-group__item"> — missing in PFJ
61. **Fix attribute:** Varying sizes — aria-hidden="true" on <i> — present in PF, absent in PFJ
62. **Fix attribute:** Varying sizes — aria-label="Number input" on <input> — present in PF, absent in PFJ
63. **Fix attribute:** Varying sizes — aria-hidden="true" on <svg> — present in PFJ, absent in PF
64. **Fix attribute:** Varying sizes — aria-invalid="false" on <input> — present in PFJ, absent in PF
65. **Fix attribute:** Varying sizes — role="img" on <svg> — present in PFJ, absent in PF
