---
component: code-block
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/code-block/html
pfj_url: http://localhost:1234/components/code-block
completeness:
  pf_total: 3
  pfj_total: 2
  matched: 2
  missing_in_pfj:
    - expandable-expanded
  extra_in_pfj: []
---

# PF Compare: code-block

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Expandable | Expandable | matched (exact) |
| 3 | Expandable expanded | --- | missing_in_pfj |

## DOM Comparison

### Basic

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF

#### Attribute Differences
- aria-label="Copy to clipboard basic example code content" on <button> — present in PF, absent in PFJ
- aria-label="Run basic example code in Web Terminal" on <button> — present in PF, absent in PFJ
- aria-label="Copy to clipboard" on <button> — present in PFJ, absent in PF
- aria-label="Play" on <button> — present in PFJ, absent in PF
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 448 512`, PFJ uses viewBox `0 0 32 32`

### Expandable

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-top` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__arrow` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-tooltip__content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-detached pf-v6-c-expandable-section"> — missing in PFJ
- PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
- PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
- PFJ has <div class="pf-m-detached pf-m-expand-top pf-v6-c-expandable-section"> — not in PF
- PFJ has <div class="pf-v6-c-expandable-section"> — not in PF

#### Attribute Differences
- aria-controls="code-block-expandable-content" on <button> — present in PF, absent in PFJ
- aria-label="Copy to clipboard expandable example code content" on <button> — present in PF, absent in PFJ
- aria-label="Run expandable example code in Web Terminal" on <button> — present in PF, absent in PFJ
- aria-labelledby="code-block-expandable-toggle" on <div> — present in PF, absent in PFJ
- aria-controls="cb-es-code-id-127-content" on <button> — present in PFJ, absent in PF
- aria-label="Copy to clipboard" on <button> — present in PFJ, absent in PF
- aria-label="Play" on <button> — present in PFJ, absent in PF
- aria-labelledby="cb-es-code-id-127-toggle" on <div> — present in PFJ, absent in PF
- aria-live="polite" on <div> — present in PFJ, absent in PF
- role="tooltip" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 448 512`, PFJ uses viewBox `0 0 32 32`
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Add variation:** Expandable expanded — implement Expandable expanded variation in PFJ
2. **Fix structure:** Basic — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
3. **Fix attribute:** Basic — aria-label="Copy to clipboard basic example code content" on <button> — present in PF, absent in PFJ
4. **Fix attribute:** Basic — aria-label="Run basic example code in Web Terminal" on <button> — present in PF, absent in PFJ
5. **Fix attribute:** Basic — aria-label="Copy to clipboard" on <button> — present in PFJ, absent in PF
6. **Fix attribute:** Basic — aria-label="Play" on <button> — present in PFJ, absent in PF
7. **Fix attribute:** Basic — aria-live="polite" on <div> — present in PFJ, absent in PF
8. **Fix attribute:** Basic — role="tooltip" on <div> — present in PFJ, absent in PF
9. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 448 512, PFJ viewBox=0 0 32 32
10. **Fix CSS:** Expandable — add missing class pf-m-start on <span>
11. **Fix structure:** Expandable — PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
12. **Fix structure:** Expandable — PF has <div class="pf-m-detached pf-v6-c-expandable-section"> — missing in PFJ
13. **Fix structure:** Expandable — PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
14. **Fix structure:** Expandable — PFJ has <div class="pf-m-css-positioning pf-m-top pf-v6-c-tooltip"> — not in PF
15. **Fix structure:** Expandable — PFJ has <div class="pf-m-detached pf-m-expand-top pf-v6-c-expandable-section"> — not in PF
16. **Fix structure:** Expandable — PFJ has <div class="pf-v6-c-expandable-section"> — not in PF
17. **Fix attribute:** Expandable — aria-controls="code-block-expandable-content" on <button> — present in PF, absent in PFJ
18. **Fix attribute:** Expandable — aria-label="Copy to clipboard expandable example code content" on <button> — present in PF, absent in PFJ
19. **Fix attribute:** Expandable — aria-label="Run expandable example code in Web Terminal" on <button> — present in PF, absent in PFJ
20. **Fix attribute:** Expandable — aria-labelledby="code-block-expandable-toggle" on <div> — present in PF, absent in PFJ
21. **Fix attribute:** Expandable — aria-controls="cb-es-code-id-127-content" on <button> — present in PFJ, absent in PF
22. **Fix attribute:** Expandable — aria-label="Copy to clipboard" on <button> — present in PFJ, absent in PF
23. **Fix attribute:** Expandable — aria-label="Play" on <button> — present in PFJ, absent in PF
24. **Fix attribute:** Expandable — aria-labelledby="cb-es-code-id-127-toggle" on <div> — present in PFJ, absent in PF
25. **Fix attribute:** Expandable — aria-live="polite" on <div> — present in PFJ, absent in PF
26. **Fix attribute:** Expandable — role="tooltip" on <div> — present in PFJ, absent in PF
27. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 448 512, PFJ viewBox=0 0 32 32
28. **Fix icon:** Expandable — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
