---
component: icon
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/icon/html
pfj_url: http://localhost:1234/components/icon
completeness:
  pf_total: 8
  pfj_total: 9
  matched: 8
  missing_in_pfj: []
  extra_in_pfj:
    - icon-in-progress-custom
---

# PF Compare: icon

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Standalone icon sizes | Standalone icon sizes | matched (exact) |
| 3 | Body sizes | Body sizes | matched (exact) |
| 4 | Heading sizes | Heading sizes | matched (exact) |
| 5 | Status colors | Status colors | matched (exact) |
| 6 | Sizing content within the icon container | Sizing an icon within the icon container | matched (semantic) |
| 7 | Inline | Inline | matched (exact) |
| 8 | In progress | In progress | matched (exact) |

### Extra in PFJ (no PF counterpart)

- Custom in progress icon (`icon-in-progress-custom`)

## DOM Comparison

### Basic

**Status:** differences_found

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 256 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 384 512`

### Standalone icon sizes

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Body sizes

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Heading sizes

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Status colors

**Status:** differences_found

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 896 1024`

### Sizing content within the icon container

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-inline` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-m-3xl pf-m-inline pf-v6-c-icon"> — missing in PFJ
- PF has <span class="pf-m-3xl pf-v6-c-icon__content"> — missing in PFJ
- PFJ has <span class="pf-m-3xl pf-v6-c-icon"> — not in PF
- PFJ has <span class="pf-v6-c-icon__content"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### Inline

**Status:** differences_found

#### Extra CSS Classes
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF

### In progress

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-in-progress` on `<span>` — present in PF, absent in PFJ
- `.pf-m-md` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-icon__progress` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-spinner` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-spinner__path` on `<circle>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-check` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-check__input` on `<input>` — present in PFJ, absent in PF
- `.pf-v6-c-check__label` on `<label>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF
- `.pf-v6-u-mb-md` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <circle class="pf-v6-c-spinner__path"> — missing in PFJ
- PF has <span class="pf-m-in-progress pf-m-md pf-v6-c-icon"> — missing in PFJ
- PF has <span class="pf-m-md pf-v6-c-icon"> — missing in PFJ
- PF has <span class="pf-v6-c-icon__progress"> — missing in PFJ
- PF has <svg class="pf-m-md pf-v6-c-spinner"> — missing in PFJ
- PFJ has <div class="pf-v6-c-check"> — not in PF
- PFJ has <div class="pf-v6-u-mb-md"> — not in PF
- PFJ has <input class="pf-v6-c-check__input"> — not in PF
- PFJ has <label class="pf-v6-c-check__label"> — not in PF
- PFJ has <span class="pf-v6-c-icon"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <i> — present in PF, absent in PFJ
- aria-label="Loading..." on <svg> — present in PF, absent in PFJ
- role="progressbar" on <svg> — present in PF, absent in PFJ
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- type="checkbox" on <input> — present in PFJ, absent in PF

#### Icon Differences
- `pf-m-md pf-v6-c-spinner` — PF uses viewBox `0 0 100 100`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Fix attribute:** Basic — aria-hidden="true" on <i> — present in PF, absent in PFJ
2. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
3. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 256 512
4. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 384 512
5. **Fix structure:** Standalone icon sizes — PFJ has <svg class="pf-v6-svg"> — not in PF
6. **Fix attribute:** Standalone icon sizes — aria-hidden="true" on <i> — present in PF, absent in PFJ
7. **Fix attribute:** Standalone icon sizes — aria-hidden="true" on <svg> — present in PFJ, absent in PF
8. **Fix attribute:** Standalone icon sizes — role="img" on <svg> — present in PFJ, absent in PF
9. **Fix structure:** Body sizes — PFJ has <svg class="pf-v6-svg"> — not in PF
10. **Fix attribute:** Body sizes — aria-hidden="true" on <i> — present in PF, absent in PFJ
11. **Fix attribute:** Body sizes — aria-hidden="true" on <svg> — present in PFJ, absent in PF
12. **Fix attribute:** Body sizes — role="img" on <svg> — present in PFJ, absent in PF
13. **Fix structure:** Heading sizes — PFJ has <svg class="pf-v6-svg"> — not in PF
14. **Fix attribute:** Heading sizes — aria-hidden="true" on <i> — present in PF, absent in PFJ
15. **Fix attribute:** Heading sizes — aria-hidden="true" on <svg> — present in PFJ, absent in PF
16. **Fix attribute:** Heading sizes — role="img" on <svg> — present in PFJ, absent in PF
17. **Fix icon:** Status colors — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
18. **Fix icon:** Status colors — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 896 1024
19. **Fix CSS:** Sizing content within the icon container — add missing class pf-m-inline on <span>
20. **Fix structure:** Sizing content within the icon container — PF has <span class="pf-m-3xl pf-m-inline pf-v6-c-icon"> — missing in PFJ
21. **Fix structure:** Sizing content within the icon container — PF has <span class="pf-m-3xl pf-v6-c-icon__content"> — missing in PFJ
22. **Fix structure:** Sizing content within the icon container — PFJ has <span class="pf-m-3xl pf-v6-c-icon"> — not in PF
23. **Fix structure:** Sizing content within the icon container — PFJ has <span class="pf-v6-c-icon__content"> — not in PF
24. **Fix structure:** Sizing content within the icon container — PFJ has <svg class="pf-v6-svg"> — not in PF
25. **Fix attribute:** Sizing content within the icon container — aria-hidden="true" on <i> — present in PF, absent in PFJ
26. **Fix attribute:** Sizing content within the icon container — aria-hidden="true" on <svg> — present in PFJ, absent in PF
27. **Fix attribute:** Sizing content within the icon container — role="img" on <svg> — present in PFJ, absent in PF
28. **Fix structure:** Inline — PFJ has <svg class="pf-v6-svg"> — not in PF
29. **Fix attribute:** Inline — aria-hidden="true" on <i> — present in PF, absent in PFJ
30. **Fix attribute:** Inline — aria-hidden="true" on <svg> — present in PFJ, absent in PF
31. **Fix attribute:** Inline — role="img" on <svg> — present in PFJ, absent in PF
32. **Fix CSS:** In progress — add missing class pf-m-in-progress on <span>
33. **Fix CSS:** In progress — add missing class pf-m-md on <span>
34. **Fix CSS:** In progress — add missing class pf-v6-c-icon__progress on <span>
35. **Fix CSS:** In progress — add missing class pf-v6-c-spinner on <svg>
36. **Fix CSS:** In progress — add missing class pf-v6-c-spinner__path on <circle>
37. **Fix structure:** In progress — PF has <circle class="pf-v6-c-spinner__path"> — missing in PFJ
38. **Fix structure:** In progress — PF has <span class="pf-m-in-progress pf-m-md pf-v6-c-icon"> — missing in PFJ
39. **Fix structure:** In progress — PF has <span class="pf-m-md pf-v6-c-icon"> — missing in PFJ
40. **Fix structure:** In progress — PF has <span class="pf-v6-c-icon__progress"> — missing in PFJ
41. **Fix structure:** In progress — PF has <svg class="pf-m-md pf-v6-c-spinner"> — missing in PFJ
42. **Fix structure:** In progress — PFJ has <div class="pf-v6-c-check"> — not in PF
43. **Fix structure:** In progress — PFJ has <div class="pf-v6-u-mb-md"> — not in PF
44. **Fix structure:** In progress — PFJ has <input class="pf-v6-c-check__input"> — not in PF
45. **Fix structure:** In progress — PFJ has <label class="pf-v6-c-check__label"> — not in PF
46. **Fix structure:** In progress — PFJ has <span class="pf-v6-c-icon"> — not in PF
47. **Fix attribute:** In progress — aria-hidden="true" on <i> — present in PF, absent in PFJ
48. **Fix attribute:** In progress — aria-label="Loading..." on <svg> — present in PF, absent in PFJ
49. **Fix attribute:** In progress — role="progressbar" on <svg> — present in PF, absent in PFJ
50. **Fix attribute:** In progress — aria-hidden="true" on <svg> — present in PFJ, absent in PF
51. **Fix attribute:** In progress — role="img" on <svg> — present in PFJ, absent in PF
52. **Fix attribute:** In progress — type="checkbox" on <input> — present in PFJ, absent in PF
53. **Fix icon:** In progress — icon mismatch on pf-m-md pf-v6-c-spinner: PF viewBox=0 0 100 100, PFJ viewBox=0 0 32 32
