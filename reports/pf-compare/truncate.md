---
component: truncate
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/truncate/html
pfj_url: http://localhost:1234/components/truncate
completeness:
  pf_total: 4
  pfj_total: 4
  matched: 4
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: truncate

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default | Default | matched (exact) |
| 2 | Middle | Middle | matched (exact) |
| 3 | Start | Start | matched (exact) |
| 4 | Based on max characters | Based on max characters | matched (exact) |

## DOM Comparison

### Default

**Status:** differences_found

#### Missing CSS Classes
- `.pf-v6-c-truncate--example` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF

#### Attribute Differences
- tabindex="0" on <span> — present in PF, absent in PFJ
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

### Middle

**Status:** differences_found

#### Missing CSS Classes
- `.pf-v6-c-truncate--example` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF

#### Attribute Differences
- tabindex="0" on <span> — present in PF, absent in PFJ
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

### Start

**Status:** differences_found

#### Missing CSS Classes
- `.pf-v6-c-truncate--example` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF

#### Attribute Differences
- tabindex="0" on <span> — present in PF, absent in PFJ
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

### Based on max characters

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-fixed` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-truncate__omission` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-truncate__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-screen-reader` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-truncate__start` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <span class="pf-m-fixed pf-v6-c-truncate"> — missing in PFJ
- PF has <span class="pf-v6-c-truncate__omission"> — missing in PFJ
- PF has <span class="pf-v6-c-truncate__text"> — missing in PFJ
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
- PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
- PFJ has <span class="pf-v6-c-truncate"> — not in PF
- PFJ has <span class="pf-v6-c-truncate__start"> — not in PF

#### Attribute Differences
- aria-hidden="true" on <span> — present in PF, absent in PFJ
- tabindex="0" on <span> — present in PF, absent in PFJ
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

## Action Items

1. **Fix CSS:** Default — add missing class pf-v6-c-truncate--example on <div>
2. **Fix structure:** Default — PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
3. **Fix structure:** Default — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
4. **Fix structure:** Default — PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
5. **Fix structure:** Default — PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
6. **Fix attribute:** Default — tabindex="0" on <span> — present in PF, absent in PFJ
7. **Fix attribute:** Default — aria-live="polite" on <div> — present in PFJ, absent in PF
8. **Fix attribute:** Default — role="tooltip" on <div> — present in PFJ, absent in PF
9. **Fix CSS:** Middle — add missing class pf-v6-c-truncate--example on <div>
10. **Fix structure:** Middle — PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
11. **Fix structure:** Middle — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
12. **Fix structure:** Middle — PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
13. **Fix structure:** Middle — PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
14. **Fix attribute:** Middle — tabindex="0" on <span> — present in PF, absent in PFJ
15. **Fix attribute:** Middle — aria-live="polite" on <div> — present in PFJ, absent in PF
16. **Fix attribute:** Middle — role="tooltip" on <div> — present in PFJ, absent in PF
17. **Fix CSS:** Start — add missing class pf-v6-c-truncate--example on <div>
18. **Fix structure:** Start — PF has <div class="pf-v6-c-truncate--example"> — missing in PFJ
19. **Fix structure:** Start — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
20. **Fix structure:** Start — PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
21. **Fix structure:** Start — PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
22. **Fix attribute:** Start — tabindex="0" on <span> — present in PF, absent in PFJ
23. **Fix attribute:** Start — aria-live="polite" on <div> — present in PFJ, absent in PF
24. **Fix attribute:** Start — role="tooltip" on <div> — present in PFJ, absent in PF
25. **Fix CSS:** Based on max characters — add missing class pf-m-fixed on <span>
26. **Fix CSS:** Based on max characters — add missing class pf-v6-c-truncate__omission on <span>
27. **Fix CSS:** Based on max characters — add missing class pf-v6-c-truncate__text on <span>
28. **Fix CSS:** Based on max characters — add missing class pf-v6-screen-reader on <span>
29. **Fix structure:** Based on max characters — PF has <span class="pf-m-fixed pf-v6-c-truncate"> — missing in PFJ
30. **Fix structure:** Based on max characters — PF has <span class="pf-v6-c-truncate__omission"> — missing in PFJ
31. **Fix structure:** Based on max characters — PF has <span class="pf-v6-c-truncate__text"> — missing in PFJ
32. **Fix structure:** Based on max characters — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
33. **Fix structure:** Based on max characters — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
34. **Fix structure:** Based on max characters — PFJ has <div class="pf-v6-c-tooltip__arrow"> — not in PF
35. **Fix structure:** Based on max characters — PFJ has <div class="pf-v6-c-tooltip__content"> — not in PF
36. **Fix structure:** Based on max characters — PFJ has <span class="pf-v6-c-truncate"> — not in PF
37. **Fix structure:** Based on max characters — PFJ has <span class="pf-v6-c-truncate__start"> — not in PF
38. **Fix attribute:** Based on max characters — aria-hidden="true" on <span> — present in PF, absent in PFJ
39. **Fix attribute:** Based on max characters — tabindex="0" on <span> — present in PF, absent in PFJ
40. **Fix attribute:** Based on max characters — aria-live="polite" on <div> — present in PFJ, absent in PF
41. **Fix attribute:** Based on max characters — role="tooltip" on <div> — present in PFJ, absent in PF
