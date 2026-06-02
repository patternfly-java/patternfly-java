---
component: alert
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/alert/html
pfj_url: http://localhost:1234/components/alert
completeness:
  pf_total: 8
  pfj_total: 14
  matched: 6
  missing_in_pfj:
    - types
    - inline-types
  extra_in_pfj:
    - alert-variants
    - alert-timeout
    - alert-truncate
    - alert-plain-inline-variants
    - alert-plain-inline-variations
    - alert-static-live-region
    - alert-group-toast
    - alert-group-asynchronous
---

# PF Compare: alert

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Alert variations | matched (semantic) |
| 2 | Inline variations | Inline alert variations | matched (semantic) |
| 3 | Custom icon | Custom icons | matched (semantic) |
| 4 | Inline plain | Inline alert variants | matched (semantic) |
| 5 | Expandable | Expandable alerts | matched (semantic) |
| 6 | Static alert group | Static inline alert group | matched (semantic) |
| 7 | Types | --- | missing_in_pfj |
| 8 | Inline types | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Alert variants (`alert-variants`)
- Alert timeout (`alert-timeout`)
- Truncated alerts (`alert-truncate`)
- Plain inline alert variants (`alert-plain-inline-variants`)
- Plain inline alert variations (`alert-plain-inline-variations`)
- Static live region alerts (`alert-static-live-region`)
- Toast alert group (`alert-group-toast`)
- Asynchronous alert groups (`alert-group-asynchronous`)

## DOM Comparison

### Variations

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-truncate` on `<p>` — present in PF, absent in PFJ

#### Attribute Differences
- aria-label="Success alert with title truncation at 2 lines" on <div> — present in PF, absent in PFJ
- aria-label="Success alert with title truncation" on <div> — present in PF, absent in PFJ
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-label="success alert" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Inline variations

**Status:** differences_found

#### Attribute Differences
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-label="success alert" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Custom icon

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-inline` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-custom` on `<div>` — present in PFJ, absent in PF
- `.pf-m-danger` on `<div>` — present in PFJ, absent in PF
- `.pf-m-info` on `<div>` — present in PFJ, absent in PF
- `.pf-m-warning` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-inline pf-m-success pf-v6-c-alert"> — missing in PFJ
- PFJ has <div class="pf-m-custom pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-danger pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-info pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-warning pf-v6-c-alert"> — not in PF

#### Attribute Differences
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-label="custom alert" on <div> — present in PFJ, absent in PF
- aria-label="danger alert" on <div> — present in PFJ, absent in PF
- aria-label="info alert" on <div> — present in PFJ, absent in PF
- aria-label="success alert" on <div> — present in PFJ, absent in PF
- aria-label="warning alert" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 640 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`

### Inline plain

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-plain` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-custom` on `<div>` — present in PFJ, absent in PF
- `.pf-m-danger` on `<div>` — present in PFJ, absent in PF
- `.pf-m-info` on `<div>` — present in PFJ, absent in PF
- `.pf-m-warning` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-inline pf-m-plain pf-m-success pf-v6-c-alert"> — missing in PFJ
- PFJ has <div class="pf-m-custom pf-m-inline pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-danger pf-m-inline pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-info pf-m-inline pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-inline pf-m-success pf-v6-c-alert"> — not in PF
- PFJ has <div class="pf-m-inline pf-m-warning pf-v6-c-alert"> — not in PF

#### Attribute Differences
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-label="custom alert" on <div> — present in PFJ, absent in PF
- aria-label="danger alert" on <div> — present in PFJ, absent in PF
- aria-label="info alert" on <div> — present in PFJ, absent in PF
- aria-label="success alert" on <div> — present in PFJ, absent in PF
- aria-label="warning alert" on <div> — present in PFJ, absent in PF

### Expandable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-expandable pf-m-expanded pf-m-inline pf-m-success pf-v6-c-alert"> — missing in PFJ
- PF has <div class="pf-m-expandable pf-m-expanded pf-m-success pf-v6-c-alert"> — missing in PFJ

#### Attribute Differences
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-label="Details" on <button> — present in PF, absent in PFJ
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-labelledby="alert-expandable-example-1-title alert-expandable-example-1-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="alert-expandable-example-2-title alert-expandable-example-2-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="alert-expandable-example-3-title alert-expandable-example-3-toggle" on <button> — present in PF, absent in PFJ
- aria-labelledby="alert-expandable-example-4-title alert-expandable-example-4-toggle" on <button> — present in PF, absent in PFJ
- aria-label="success alert" on <div> — present in PFJ, absent in PF
- aria-label="success alert: Success alert title details" on <button> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Static alert group

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-danger` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-alert-group__item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-alert__description` on `<div>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <div class="pf-m-danger pf-m-inline pf-v6-c-alert"> — missing in PFJ
- PF has <div class="pf-v6-c-alert__description"> — missing in PFJ
- PF has <li class="pf-v6-c-alert-group__item"> — missing in PFJ

#### Attribute Differences
- aria-label="Danger alert" on <div> — present in PF, absent in PFJ
- aria-label="Information alert" on <div> — present in PF, absent in PFJ
- aria-label="Success alert" on <div> — present in PF, absent in PFJ
- aria-label="info alert" on <div> — present in PFJ, absent in PF
- aria-label="success alert" on <div> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Types — implement Types variation in PFJ
2. **Add variation:** Inline types — implement Inline types variation in PFJ
3. **Fix CSS:** Variations — add missing class pf-m-truncate on <p>
4. **Fix attribute:** Variations — aria-label="Success alert with title truncation at 2 lines" on <div> — present in PF, absent in PFJ
5. **Fix attribute:** Variations — aria-label="Success alert with title truncation" on <div> — present in PF, absent in PFJ
6. **Fix attribute:** Variations — aria-label="Success alert" on <div> — present in PF, absent in PFJ
7. **Fix attribute:** Variations — aria-label="success alert" on <div> — present in PFJ, absent in PF
8. **Fix icon:** Variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
9. **Fix icon:** Variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
10. **Fix icon:** Variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
11. **Fix icon:** Variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
12. **Fix attribute:** Inline variations — aria-label="Success alert" on <div> — present in PF, absent in PFJ
13. **Fix attribute:** Inline variations — aria-label="success alert" on <div> — present in PFJ, absent in PF
14. **Fix icon:** Inline variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
15. **Fix icon:** Inline variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
16. **Fix icon:** Inline variations — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
17. **Fix CSS:** Custom icon — add missing class pf-m-inline on <div>
18. **Fix structure:** Custom icon — PF has <div class="pf-m-inline pf-m-success pf-v6-c-alert"> — missing in PFJ
19. **Fix structure:** Custom icon — PFJ has <div class="pf-m-custom pf-v6-c-alert"> — not in PF
20. **Fix structure:** Custom icon — PFJ has <div class="pf-m-danger pf-v6-c-alert"> — not in PF
21. **Fix structure:** Custom icon — PFJ has <div class="pf-m-info pf-v6-c-alert"> — not in PF
22. **Fix structure:** Custom icon — PFJ has <div class="pf-m-warning pf-v6-c-alert"> — not in PF
23. **Fix attribute:** Custom icon — aria-label="Success alert" on <div> — present in PF, absent in PFJ
24. **Fix attribute:** Custom icon — aria-label="custom alert" on <div> — present in PFJ, absent in PF
25. **Fix attribute:** Custom icon — aria-label="danger alert" on <div> — present in PFJ, absent in PF
26. **Fix attribute:** Custom icon — aria-label="info alert" on <div> — present in PFJ, absent in PF
27. **Fix attribute:** Custom icon — aria-label="success alert" on <div> — present in PFJ, absent in PF
28. **Fix attribute:** Custom icon — aria-label="warning alert" on <div> — present in PFJ, absent in PF
29. **Fix icon:** Custom icon — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 640 512
30. **Fix icon:** Custom icon — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
31. **Fix CSS:** Inline plain — add missing class pf-m-plain on <div>
32. **Fix structure:** Inline plain — PF has <div class="pf-m-inline pf-m-plain pf-m-success pf-v6-c-alert"> — missing in PFJ
33. **Fix structure:** Inline plain — PFJ has <div class="pf-m-custom pf-m-inline pf-v6-c-alert"> — not in PF
34. **Fix structure:** Inline plain — PFJ has <div class="pf-m-danger pf-m-inline pf-v6-c-alert"> — not in PF
35. **Fix structure:** Inline plain — PFJ has <div class="pf-m-info pf-m-inline pf-v6-c-alert"> — not in PF
36. **Fix structure:** Inline plain — PFJ has <div class="pf-m-inline pf-m-success pf-v6-c-alert"> — not in PF
37. **Fix structure:** Inline plain — PFJ has <div class="pf-m-inline pf-m-warning pf-v6-c-alert"> — not in PF
38. **Fix attribute:** Inline plain — aria-label="Success alert" on <div> — present in PF, absent in PFJ
39. **Fix attribute:** Inline plain — aria-label="custom alert" on <div> — present in PFJ, absent in PF
40. **Fix attribute:** Inline plain — aria-label="danger alert" on <div> — present in PFJ, absent in PF
41. **Fix attribute:** Inline plain — aria-label="info alert" on <div> — present in PFJ, absent in PF
42. **Fix attribute:** Inline plain — aria-label="success alert" on <div> — present in PFJ, absent in PF
43. **Fix attribute:** Inline plain — aria-label="warning alert" on <div> — present in PFJ, absent in PF
44. **Fix CSS:** Expandable — add missing class pf-m-expanded on <div>
45. **Fix structure:** Expandable — PF has <div class="pf-m-expandable pf-m-expanded pf-m-inline pf-m-success pf-v6-c-alert"> — missing in PFJ
46. **Fix structure:** Expandable — PF has <div class="pf-m-expandable pf-m-expanded pf-m-success pf-v6-c-alert"> — missing in PFJ
47. **Fix attribute:** Expandable — aria-expanded="true" on <button> — present in PF, absent in PFJ
48. **Fix attribute:** Expandable — aria-label="Details" on <button> — present in PF, absent in PFJ
49. **Fix attribute:** Expandable — aria-label="Success alert" on <div> — present in PF, absent in PFJ
50. **Fix attribute:** Expandable — aria-labelledby="alert-expandable-example-1-title alert-expandable-example-1-toggle" on <button> — present in PF, absent in PFJ
51. **Fix attribute:** Expandable — aria-labelledby="alert-expandable-example-2-title alert-expandable-example-2-toggle" on <button> — present in PF, absent in PFJ
52. **Fix attribute:** Expandable — aria-labelledby="alert-expandable-example-3-title alert-expandable-example-3-toggle" on <button> — present in PF, absent in PFJ
53. **Fix attribute:** Expandable — aria-labelledby="alert-expandable-example-4-title alert-expandable-example-4-toggle" on <button> — present in PF, absent in PFJ
54. **Fix attribute:** Expandable — aria-label="success alert" on <div> — present in PFJ, absent in PF
55. **Fix attribute:** Expandable — aria-label="success alert: Success alert title details" on <button> — present in PFJ, absent in PF
56. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
57. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
58. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
59. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
60. **Fix CSS:** Static alert group — add missing class pf-m-danger on <div>
61. **Fix CSS:** Static alert group — add missing class pf-v6-c-alert-group__item on <li>
62. **Fix CSS:** Static alert group — add missing class pf-v6-c-alert__description on <div>
63. **Fix structure:** Static alert group — PF has <div class="pf-m-danger pf-m-inline pf-v6-c-alert"> — missing in PFJ
64. **Fix structure:** Static alert group — PF has <div class="pf-v6-c-alert__description"> — missing in PFJ
65. **Fix structure:** Static alert group — PF has <li class="pf-v6-c-alert-group__item"> — missing in PFJ
66. **Fix attribute:** Static alert group — aria-label="Danger alert" on <div> — present in PF, absent in PFJ
67. **Fix attribute:** Static alert group — aria-label="Information alert" on <div> — present in PF, absent in PFJ
68. **Fix attribute:** Static alert group — aria-label="Success alert" on <div> — present in PF, absent in PFJ
69. **Fix attribute:** Static alert group — aria-label="info alert" on <div> — present in PFJ, absent in PF
70. **Fix attribute:** Static alert group — aria-label="success alert" on <div> — present in PFJ, absent in PF
