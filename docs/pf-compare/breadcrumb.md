---
component: breadcrumb
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/breadcrumb/html
pfj_url: http://localhost:1234/components/breadcrumb
completeness:
  pf_total: 5
  pfj_total: 5
  matched: 5
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: breadcrumb

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Without home link | Without home link | matched (exact) |
| 3 | With heading | With heading | matched (exact) |
| 4 | With menu dropdown | With dropdown | matched (semantic) |
| 5 | With buttons | With buttons | matched (exact) |

## DOM Comparison

### Basic

**Status:** differences_found

#### Attribute Differences
- aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Without home link

**Status:** differences_found

#### Attribute Differences
- aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### With heading

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb` on `<nav>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__heading` on `<h1>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__item-divider` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__link` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__list` on `<ol>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
- PF has <a class="pf-v6-c-breadcrumb__link"> — missing in PFJ
- PF has <h1 class="pf-v6-c-breadcrumb__heading"> — missing in PFJ
- PF has <li class="pf-v6-c-breadcrumb__item"> — missing in PFJ
- PF has <nav class="pf-v6-c-breadcrumb"> — missing in PFJ
- PF has <ol class="pf-v6-c-breadcrumb__list"> — missing in PFJ
- PF has <span class="pf-v6-c-breadcrumb__item-divider"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
- role="list" on <ol> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### With menu dropdown

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<button>` — present in PF, absent in PFJ
- `.pf-m-read` on `<span>` — present in PF, absent in PFJ
- `.pf-m-small` on `<button>` — present in PF, absent in PFJ
- `.pf-m-text` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-badge` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb` on `<nav>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__dropdown` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__heading` on `<h1>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__item-divider` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__link` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-breadcrumb__list` on `<ol>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__controls` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__count` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu-toggle__toggle-icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
- PF has <a class="pf-v6-c-breadcrumb__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-m-small pf-m-text pf-v6-c-menu-toggle"> — missing in PFJ
- PF has <h1 class="pf-v6-c-breadcrumb__heading"> — missing in PFJ
- PF has <li class="pf-v6-c-breadcrumb__item"> — missing in PFJ
- PF has <nav class="pf-v6-c-breadcrumb"> — missing in PFJ
- PF has <ol class="pf-v6-c-breadcrumb__list"> — missing in PFJ
- PF has <span class="pf-v6-c-breadcrumb__dropdown"> — missing in PFJ
- PF has <span class="pf-v6-c-breadcrumb__item-divider"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
- role="list" on <ol> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### With buttons

**Status:** differences_found

#### Structural Differences
- PF has <button class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
- PF has <button class="pf-v6-c-breadcrumb__link"> — missing in PFJ
- PFJ has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — not in PF

#### Attribute Differences
- aria-current="page" on <button> — present in PF, absent in PFJ
- aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ
- aria-current="page" on <a> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Fix attribute:** Basic — aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
2. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
3. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
4. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
5. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
6. **Fix attribute:** Without home link — aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
7. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
8. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
9. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
10. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
11. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
12. **Fix icon:** Without home link — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
13. **Fix CSS:** With heading — add missing class pf-m-current on <a>
14. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb on <nav>
15. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb__heading on <h1>
16. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb__item on <li>
17. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb__item-divider on <span>
18. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb__link on <a>
19. **Fix CSS:** With heading — add missing class pf-v6-c-breadcrumb__list on <ol>
20. **Fix structure:** With heading — PF has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
21. **Fix structure:** With heading — PF has <a class="pf-v6-c-breadcrumb__link"> — missing in PFJ
22. **Fix structure:** With heading — PF has <h1 class="pf-v6-c-breadcrumb__heading"> — missing in PFJ
23. **Fix structure:** With heading — PF has <li class="pf-v6-c-breadcrumb__item"> — missing in PFJ
24. **Fix structure:** With heading — PF has <nav class="pf-v6-c-breadcrumb"> — missing in PFJ
25. **Fix structure:** With heading — PF has <ol class="pf-v6-c-breadcrumb__list"> — missing in PFJ
26. **Fix structure:** With heading — PF has <span class="pf-v6-c-breadcrumb__item-divider"> — missing in PFJ
27. **Fix structure:** With heading — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
28. **Fix structure:** With heading — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
29. **Fix structure:** With heading — PFJ has <span class="pf-v6-screen-reader"> — not in PF
30. **Fix attribute:** With heading — aria-current="page" on <a> — present in PF, absent in PFJ
31. **Fix attribute:** With heading — aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
32. **Fix attribute:** With heading — role="list" on <ol> — present in PF, absent in PFJ
33. **Fix icon:** With heading — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
34. **Fix CSS:** With menu dropdown — add missing class pf-m-current on <a>
35. **Fix CSS:** With menu dropdown — add missing class pf-m-plain on <button>
36. **Fix CSS:** With menu dropdown — add missing class pf-m-read on <span>
37. **Fix CSS:** With menu dropdown — add missing class pf-m-small on <button>
38. **Fix CSS:** With menu dropdown — add missing class pf-m-text on <button>
39. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-badge on <span>
40. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb on <nav>
41. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__dropdown on <span>
42. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__heading on <h1>
43. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__item on <li>
44. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__item-divider on <span>
45. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__link on <a>
46. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-breadcrumb__list on <ol>
47. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-menu-toggle on <button>
48. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-menu-toggle__controls on <span>
49. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-menu-toggle__count on <span>
50. **Fix CSS:** With menu dropdown — add missing class pf-v6-c-menu-toggle__toggle-icon on <span>
51. **Fix structure:** With menu dropdown — PF has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
52. **Fix structure:** With menu dropdown — PF has <a class="pf-v6-c-breadcrumb__link"> — missing in PFJ
53. **Fix structure:** With menu dropdown — PF has <button class="pf-m-plain pf-m-small pf-m-text pf-v6-c-menu-toggle"> — missing in PFJ
54. **Fix structure:** With menu dropdown — PF has <h1 class="pf-v6-c-breadcrumb__heading"> — missing in PFJ
55. **Fix structure:** With menu dropdown — PF has <li class="pf-v6-c-breadcrumb__item"> — missing in PFJ
56. **Fix structure:** With menu dropdown — PF has <nav class="pf-v6-c-breadcrumb"> — missing in PFJ
57. **Fix structure:** With menu dropdown — PF has <ol class="pf-v6-c-breadcrumb__list"> — missing in PFJ
58. **Fix structure:** With menu dropdown — PF has <span class="pf-v6-c-breadcrumb__dropdown"> — missing in PFJ
59. **Fix structure:** With menu dropdown — PF has <span class="pf-v6-c-breadcrumb__item-divider"> — missing in PFJ
60. **Fix structure:** With menu dropdown — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
61. **Fix structure:** With menu dropdown — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
62. **Fix structure:** With menu dropdown — PFJ has <span class="pf-v6-screen-reader"> — not in PF
63. **Fix attribute:** With menu dropdown — aria-current="page" on <a> — present in PF, absent in PFJ
64. **Fix attribute:** With menu dropdown — aria-expanded="false" on <button> — present in PF, absent in PFJ
65. **Fix attribute:** With menu dropdown — aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
66. **Fix attribute:** With menu dropdown — role="list" on <ol> — present in PF, absent in PFJ
67. **Fix attribute:** With menu dropdown — type="button" on <button> — present in PF, absent in PFJ
68. **Fix icon:** With menu dropdown — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
69. **Fix structure:** With buttons — PF has <button class="pf-m-current pf-v6-c-breadcrumb__link"> — missing in PFJ
70. **Fix structure:** With buttons — PF has <button class="pf-v6-c-breadcrumb__link"> — missing in PFJ
71. **Fix structure:** With buttons — PFJ has <a class="pf-m-current pf-v6-c-breadcrumb__link"> — not in PF
72. **Fix attribute:** With buttons — aria-current="page" on <button> — present in PF, absent in PFJ
73. **Fix attribute:** With buttons — aria-label="breadcrumb" on <nav> — present in PF, absent in PFJ
74. **Fix attribute:** With buttons — type="button" on <button> — present in PF, absent in PFJ
75. **Fix attribute:** With buttons — aria-current="page" on <a> — present in PFJ, absent in PF
76. **Fix icon:** With buttons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
77. **Fix icon:** With buttons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
78. **Fix icon:** With buttons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
79. **Fix icon:** With buttons — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
