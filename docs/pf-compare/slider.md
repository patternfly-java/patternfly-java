---
component: slider
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/slider/html
pfj_url: http://localhost:1234/components/slider
completeness:
  pf_total: 6
  pfj_total: 6
  matched: 5
  missing_in_pfj:
    - disabled
  extra_in_pfj:
    - slider-discrete
---

# PF Compare: slider

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Discrete | Discrete | matched (exact) |
| 2 | Continuous | Continuous | matched (exact) |
| 3 | Value input | Value input | matched (exact) |
| 4 | Thumb value input | Thumb value input | matched (exact) |
| 5 | Actions | Actions | matched (exact) |
| 6 | Disabled | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Discrete (`slider-discrete`)

## DOM Comparison

### Discrete

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-disabled` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-content--h4` on `<h4>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-slider"> — missing in PFJ
- PFJ has <div class="pf-m-disabled pf-v6-c-slider"> — not in PF
- PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF

#### Attribute Differences
- aria-valuemax="8" on <div> — present in PF, absent in PFJ
- aria-valuenow="5" on <div> — present in PF, absent in PFJ
- tabindex="0" on <div> — present in PF, absent in PFJ
- aria-disabled="true" on <div> — present in PFJ, absent in PF
- aria-valuemax="100" on <div> — present in PFJ, absent in PF
- aria-valuenow="50" on <div> — present in PFJ, absent in PF
- aria-valuetext="4" on <div> — present in PFJ, absent in PF
- tabindex="-1" on <div> — present in PFJ, absent in PF

### Continuous

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-content--h4` on `<h4>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-slider__step-tick"> — missing in PFJ
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
- PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF

#### Attribute Differences
- aria-disabled="false" on <div> — present in PFJ, absent in PF
- aria-live="polite" on <div> — present in PFJ, absent in PF
- aria-valuetext="50" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

### Value input

**Status:** differences_found

#### Attribute Differences
- aria-label="Slider value input" on <input> — present in PF, absent in PFJ
- aria-valuemax="8" on <div> — present in PF, absent in PFJ
- aria-valuenow="5" on <div> — present in PF, absent in PFJ
- aria-disabled="false" on <div> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- aria-valuenow="62.5" on <div> — present in PFJ, absent in PF
- aria-valuetext="5" on <div> — present in PFJ, absent in PF
- aria-valuetext="50" on <div> — present in PFJ, absent in PF
- aria-valuetext="50%" on <div> — present in PFJ, absent in PF

### Thumb value input

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-active` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__step` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__step-label` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__steps` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-m-active pf-v6-c-slider__step"> — not in PF
- PFJ has <div class="pf-v6-c-slider__step"> — not in PF
- PFJ has <div class="pf-v6-c-slider__step-label"> — not in PF
- PFJ has <div class="pf-v6-c-slider__steps"> — not in PF

#### Attribute Differences
- aria-label="Slider value input" on <input> — present in PF, absent in PFJ
- aria-disabled="false" on <div> — present in PFJ, absent in PF
- aria-hidden="true" on <div> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- aria-valuetext="50" on <div> — present in PFJ, absent in PF

### Actions

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-disabled` on `<div>` — present in PF, absent in PFJ
- `.pf-m-floating` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-active` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-content--h4` on `<h4>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__step` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__step-label` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-slider__steps` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-disabled pf-v6-c-slider"> — missing in PFJ
- PF has <div class="pf-m-floating pf-v6-c-slider__value"> — missing in PFJ
- PFJ has <div class="pf-m-active pf-v6-c-slider__step"> — not in PF
- PFJ has <div class="pf-m-fill pf-v6-c-input-group__item"> — not in PF
- PFJ has <div class="pf-v6-c-input-group"> — not in PF
- PFJ has <div class="pf-v6-c-slider__step"> — not in PF
- PFJ has <div class="pf-v6-c-slider__step-label"> — not in PF
- PFJ has <div class="pf-v6-c-slider__steps"> — not in PF
- PFJ has <div class="pf-v6-c-slider__value"> — not in PF
- PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF

#### Attribute Differences
- aria-disabled="true" on <div> — present in PF, absent in PFJ
- aria-label="Lock" on <button> — present in PF, absent in PFJ
- aria-label="Locked" on <button> — present in PF, absent in PFJ
- aria-label="Minus" on <button> — present in PF, absent in PFJ
- aria-label="Plus" on <button> — present in PF, absent in PFJ
- aria-label="Slider value input" on <input> — present in PF, absent in PFJ
- aria-disabled="false" on <div> — present in PFJ, absent in PF
- aria-hidden="true" on <div> — present in PFJ, absent in PF
- aria-invalid="false" on <input> — present in PFJ, absent in PF
- aria-valuetext="50" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 448 512`, PFJ uses viewBox `0 0 576 512`

## Action Items

1. **Add variation:** Disabled — implement Disabled variation in PFJ
2. **Fix structure:** Discrete — PF has <div class="pf-v6-c-slider"> — missing in PFJ
3. **Fix structure:** Discrete — PFJ has <div class="pf-m-disabled pf-v6-c-slider"> — not in PF
4. **Fix structure:** Discrete — PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF
5. **Fix attribute:** Discrete — aria-valuemax="8" on <div> — present in PF, absent in PFJ
6. **Fix attribute:** Discrete — aria-valuenow="5" on <div> — present in PF, absent in PFJ
7. **Fix attribute:** Discrete — tabindex="0" on <div> — present in PF, absent in PFJ
8. **Fix attribute:** Discrete — aria-disabled="true" on <div> — present in PFJ, absent in PF
9. **Fix attribute:** Discrete — aria-valuemax="100" on <div> — present in PFJ, absent in PF
10. **Fix attribute:** Discrete — aria-valuenow="50" on <div> — present in PFJ, absent in PF
11. **Fix attribute:** Discrete — aria-valuetext="4" on <div> — present in PFJ, absent in PF
12. **Fix attribute:** Discrete — tabindex="-1" on <div> — present in PFJ, absent in PF
13. **Fix structure:** Continuous — PF has <div class="pf-v6-c-slider__step-tick"> — missing in PFJ
14. **Fix structure:** Continuous — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
15. **Fix structure:** Continuous — PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
16. **Fix structure:** Continuous — PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
17. **Fix structure:** Continuous — PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF
18. **Fix attribute:** Continuous — aria-disabled="false" on <div> — present in PFJ, absent in PF
19. **Fix attribute:** Continuous — aria-live="polite" on <div> — present in PFJ, absent in PF
20. **Fix attribute:** Continuous — aria-valuetext="50" on <div> — present in PFJ, absent in PF
21. **Fix attribute:** Continuous — role="tooltip" on <div> — present in PFJ, absent in PF
22. **Fix attribute:** Value input — aria-label="Slider value input" on <input> — present in PF, absent in PFJ
23. **Fix attribute:** Value input — aria-valuemax="8" on <div> — present in PF, absent in PFJ
24. **Fix attribute:** Value input — aria-valuenow="5" on <div> — present in PF, absent in PFJ
25. **Fix attribute:** Value input — aria-disabled="false" on <div> — present in PFJ, absent in PF
26. **Fix attribute:** Value input — aria-invalid="false" on <input> — present in PFJ, absent in PF
27. **Fix attribute:** Value input — aria-valuenow="62.5" on <div> — present in PFJ, absent in PF
28. **Fix attribute:** Value input — aria-valuetext="5" on <div> — present in PFJ, absent in PF
29. **Fix attribute:** Value input — aria-valuetext="50" on <div> — present in PFJ, absent in PF
30. **Fix attribute:** Value input — aria-valuetext="50%" on <div> — present in PFJ, absent in PF
31. **Fix structure:** Thumb value input — PFJ has <div class="pf-m-active pf-v6-c-slider__step"> — not in PF
32. **Fix structure:** Thumb value input — PFJ has <div class="pf-v6-c-slider__step"> — not in PF
33. **Fix structure:** Thumb value input — PFJ has <div class="pf-v6-c-slider__step-label"> — not in PF
34. **Fix structure:** Thumb value input — PFJ has <div class="pf-v6-c-slider__steps"> — not in PF
35. **Fix attribute:** Thumb value input — aria-label="Slider value input" on <input> — present in PF, absent in PFJ
36. **Fix attribute:** Thumb value input — aria-disabled="false" on <div> — present in PFJ, absent in PF
37. **Fix attribute:** Thumb value input — aria-hidden="true" on <div> — present in PFJ, absent in PF
38. **Fix attribute:** Thumb value input — aria-invalid="false" on <input> — present in PFJ, absent in PF
39. **Fix attribute:** Thumb value input — aria-valuetext="50" on <div> — present in PFJ, absent in PF
40. **Fix CSS:** Actions — add missing class pf-m-disabled on <div>
41. **Fix CSS:** Actions — add missing class pf-m-floating on <div>
42. **Fix structure:** Actions — PF has <div class="pf-m-disabled pf-v6-c-slider"> — missing in PFJ
43. **Fix structure:** Actions — PF has <div class="pf-m-floating pf-v6-c-slider__value"> — missing in PFJ
44. **Fix structure:** Actions — PFJ has <div class="pf-m-active pf-v6-c-slider__step"> — not in PF
45. **Fix structure:** Actions — PFJ has <div class="pf-m-fill pf-v6-c-input-group__item"> — not in PF
46. **Fix structure:** Actions — PFJ has <div class="pf-v6-c-input-group"> — not in PF
47. **Fix structure:** Actions — PFJ has <div class="pf-v6-c-slider__step"> — not in PF
48. **Fix structure:** Actions — PFJ has <div class="pf-v6-c-slider__step-label"> — not in PF
49. **Fix structure:** Actions — PFJ has <div class="pf-v6-c-slider__steps"> — not in PF
50. **Fix structure:** Actions — PFJ has <div class="pf-v6-c-slider__value"> — not in PF
51. **Fix structure:** Actions — PFJ has <h4 class="pf-v6-c-content--h4"> — not in PF
52. **Fix attribute:** Actions — aria-disabled="true" on <div> — present in PF, absent in PFJ
53. **Fix attribute:** Actions — aria-label="Lock" on <button> — present in PF, absent in PFJ
54. **Fix attribute:** Actions — aria-label="Locked" on <button> — present in PF, absent in PFJ
55. **Fix attribute:** Actions — aria-label="Minus" on <button> — present in PF, absent in PFJ
56. **Fix attribute:** Actions — aria-label="Plus" on <button> — present in PF, absent in PFJ
57. **Fix attribute:** Actions — aria-label="Slider value input" on <input> — present in PF, absent in PFJ
58. **Fix attribute:** Actions — aria-disabled="false" on <div> — present in PFJ, absent in PF
59. **Fix attribute:** Actions — aria-hidden="true" on <div> — present in PFJ, absent in PF
60. **Fix attribute:** Actions — aria-invalid="false" on <input> — present in PFJ, absent in PF
61. **Fix attribute:** Actions — aria-valuetext="50" on <div> — present in PFJ, absent in PF
62. **Fix icon:** Actions — icon mismatch on pf-v6-svg: PF viewBox=0 0 448 512, PFJ viewBox=0 0 576 512
