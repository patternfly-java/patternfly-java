---
component: accordion
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/accordion/html
pfj_url: http://localhost:1234/components/accordion
completeness:
  pf_total: 6
  pfj_total: 6
  matched: 5
  missing_in_pfj:
    - fluid
  extra_in_pfj:
    - accordion-single
---

# PF Compare: accordion

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Fixed | Fixed with multiple expand behavior | matched (semantic) |
| 2 | Definition list | Definition list | matched (exact) |
| 3 | Bordered | Bordered | matched (exact) |
| 4 | Large bordered | Large bordered | matched (exact) |
| 5 | Toggle icon at start | Toggle icon at start | matched (exact) |
| 6 | Fluid | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Single expand behavior (`accordion-single`)

## DOM Comparison

### Fixed

**Status:** differences_found

#### Structural Differences
- PF has <div class="pf-m-fixed pf-v6-c-accordion__expandable-content"> — missing in PFJ
- PF has <div class="pf-v6-c-accordion"> — missing in PFJ
- PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
- PFJ has <dd class="pf-m-fixed pf-v6-c-accordion__expandable-content"> — not in PF
- PFJ has <dl class="pf-v6-c-accordion"> — not in PF

#### Attribute Differences
- aria-labelledby="accordion-fixed-item-two-toggle" on <div> — present in PF, absent in PFJ
- role="region" on <div> — present in PF, absent in PFJ
- tabindex="0" on <div> — present in PF, absent in PFJ
- aria-labelledby="ac-text-id-86" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-87" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-88" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-89" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-90" on <dd> — present in PFJ, absent in PF
- role="region" on <dd> — present in PFJ, absent in PF
- tabindex="0" on <dd> — present in PFJ, absent in PF

### Definition list

**Status:** differences_found

#### Attribute Differences
- aria-labelledby="ac-text-id-44" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-45" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-46" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-47" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-48" on <dd> — present in PFJ, absent in PF

### Bordered

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-inline` on `<button>` — present in PFJ, absent in PF
- `.pf-m-link` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-bordered pf-v6-c-accordion"> — missing in PFJ
- PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
- PFJ has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
- PFJ has <dl class="pf-m-bordered pf-v6-c-accordion"> — not in PF

#### Attribute Differences
- aria-labelledby="ac-text-id-107" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-108" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-109" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-110" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-111" on <dd> — present in PFJ, absent in PF

### Large bordered

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-inline` on `<button>` — present in PFJ, absent in PF
- `.pf-m-link` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-button__text` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-bordered pf-m-display-lg pf-v6-c-accordion"> — missing in PFJ
- PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
- PFJ has <button class="pf-m-display-lg pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
- PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
- PFJ has <dl class="pf-m-bordered pf-m-display-lg pf-v6-c-accordion"> — not in PF

#### Attribute Differences
- aria-labelledby="ac-text-id-128" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-129" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-130" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-131" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-132" on <dd> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 512 512`

### Toggle icon at start

**Status:** differences_found

#### Structural Differences
- PF has <div class="pf-m-toggle-start pf-v6-c-accordion"> — missing in PFJ
- PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
- PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
- PFJ has <dl class="pf-m-toggle-start pf-v6-c-accordion"> — not in PF

#### Attribute Differences
- aria-labelledby="ac-text-id-149" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-150" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-151" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-152" on <dd> — present in PFJ, absent in PF
- aria-labelledby="ac-text-id-153" on <dd> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Fluid — implement Fluid variation in PFJ
2. **Fix structure:** Fixed — PF has <div class="pf-m-fixed pf-v6-c-accordion__expandable-content"> — missing in PFJ
3. **Fix structure:** Fixed — PF has <div class="pf-v6-c-accordion"> — missing in PFJ
4. **Fix structure:** Fixed — PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
5. **Fix structure:** Fixed — PFJ has <dd class="pf-m-fixed pf-v6-c-accordion__expandable-content"> — not in PF
6. **Fix structure:** Fixed — PFJ has <dl class="pf-v6-c-accordion"> — not in PF
7. **Fix attribute:** Fixed — aria-labelledby="accordion-fixed-item-two-toggle" on <div> — present in PF, absent in PFJ
8. **Fix attribute:** Fixed — role="region" on <div> — present in PF, absent in PFJ
9. **Fix attribute:** Fixed — tabindex="0" on <div> — present in PF, absent in PFJ
10. **Fix attribute:** Fixed — aria-labelledby="ac-text-id-86" on <dd> — present in PFJ, absent in PF
11. **Fix attribute:** Fixed — aria-labelledby="ac-text-id-87" on <dd> — present in PFJ, absent in PF
12. **Fix attribute:** Fixed — aria-labelledby="ac-text-id-88" on <dd> — present in PFJ, absent in PF
13. **Fix attribute:** Fixed — aria-labelledby="ac-text-id-89" on <dd> — present in PFJ, absent in PF
14. **Fix attribute:** Fixed — aria-labelledby="ac-text-id-90" on <dd> — present in PFJ, absent in PF
15. **Fix attribute:** Fixed — role="region" on <dd> — present in PFJ, absent in PF
16. **Fix attribute:** Fixed — tabindex="0" on <dd> — present in PFJ, absent in PF
17. **Fix attribute:** Definition list — aria-labelledby="ac-text-id-44" on <dd> — present in PFJ, absent in PF
18. **Fix attribute:** Definition list — aria-labelledby="ac-text-id-45" on <dd> — present in PFJ, absent in PF
19. **Fix attribute:** Definition list — aria-labelledby="ac-text-id-46" on <dd> — present in PFJ, absent in PF
20. **Fix attribute:** Definition list — aria-labelledby="ac-text-id-47" on <dd> — present in PFJ, absent in PF
21. **Fix attribute:** Definition list — aria-labelledby="ac-text-id-48" on <dd> — present in PFJ, absent in PF
22. **Fix structure:** Bordered — PF has <div class="pf-m-bordered pf-v6-c-accordion"> — missing in PFJ
23. **Fix structure:** Bordered — PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
24. **Fix structure:** Bordered — PFJ has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
25. **Fix structure:** Bordered — PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
26. **Fix structure:** Bordered — PFJ has <dl class="pf-m-bordered pf-v6-c-accordion"> — not in PF
27. **Fix attribute:** Bordered — aria-labelledby="ac-text-id-107" on <dd> — present in PFJ, absent in PF
28. **Fix attribute:** Bordered — aria-labelledby="ac-text-id-108" on <dd> — present in PFJ, absent in PF
29. **Fix attribute:** Bordered — aria-labelledby="ac-text-id-109" on <dd> — present in PFJ, absent in PF
30. **Fix attribute:** Bordered — aria-labelledby="ac-text-id-110" on <dd> — present in PFJ, absent in PF
31. **Fix attribute:** Bordered — aria-labelledby="ac-text-id-111" on <dd> — present in PFJ, absent in PF
32. **Fix structure:** Large bordered — PF has <div class="pf-m-bordered pf-m-display-lg pf-v6-c-accordion"> — missing in PFJ
33. **Fix structure:** Large bordered — PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
34. **Fix structure:** Large bordered — PFJ has <button class="pf-m-display-lg pf-m-inline pf-m-link pf-v6-c-button"> — not in PF
35. **Fix structure:** Large bordered — PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
36. **Fix structure:** Large bordered — PFJ has <dl class="pf-m-bordered pf-m-display-lg pf-v6-c-accordion"> — not in PF
37. **Fix attribute:** Large bordered — aria-labelledby="ac-text-id-128" on <dd> — present in PFJ, absent in PF
38. **Fix attribute:** Large bordered — aria-labelledby="ac-text-id-129" on <dd> — present in PFJ, absent in PF
39. **Fix attribute:** Large bordered — aria-labelledby="ac-text-id-130" on <dd> — present in PFJ, absent in PF
40. **Fix attribute:** Large bordered — aria-labelledby="ac-text-id-131" on <dd> — present in PFJ, absent in PF
41. **Fix attribute:** Large bordered — aria-labelledby="ac-text-id-132" on <dd> — present in PFJ, absent in PF
42. **Fix icon:** Large bordered — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 512 512
43. **Fix structure:** Toggle icon at start — PF has <div class="pf-m-toggle-start pf-v6-c-accordion"> — missing in PFJ
44. **Fix structure:** Toggle icon at start — PF has <div class="pf-v6-c-accordion__expandable-content"> — missing in PFJ
45. **Fix structure:** Toggle icon at start — PFJ has <dd class="pf-v6-c-accordion__expandable-content"> — not in PF
46. **Fix structure:** Toggle icon at start — PFJ has <dl class="pf-m-toggle-start pf-v6-c-accordion"> — not in PF
47. **Fix attribute:** Toggle icon at start — aria-labelledby="ac-text-id-149" on <dd> — present in PFJ, absent in PF
48. **Fix attribute:** Toggle icon at start — aria-labelledby="ac-text-id-150" on <dd> — present in PFJ, absent in PF
49. **Fix attribute:** Toggle icon at start — aria-labelledby="ac-text-id-151" on <dd> — present in PFJ, absent in PF
50. **Fix attribute:** Toggle icon at start — aria-labelledby="ac-text-id-152" on <dd> — present in PFJ, absent in PF
51. **Fix attribute:** Toggle icon at start — aria-labelledby="ac-text-id-153" on <dd> — present in PFJ, absent in PF
