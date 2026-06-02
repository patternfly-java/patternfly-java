---
component: expandable-section
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/expandable-section/html
pfj_url: http://localhost:1234/components/expandable-section
completeness:
  pf_total: 9
  pfj_total: 8
  matched: 4
  missing_in_pfj:
    - expanded
    - indented
    - disclosure-variation-expanded
    - disclosure-variation-indented
    - truncate-expansion-expanded
  extra_in_pfj:
    - es-basic
    - es-dynamic-text
    - es-detached-after
    - es-custom-toggle
---

# PF Compare: expandable-section

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Hidden | Indented | matched (semantic) |
| 2 | Disclosure variation (hidden) | Disclosure variation | matched (semantic) |
| 3 | Detached | Detached (before) | matched (semantic) |
| 4 | Truncate expansion (hidden) | Truncate | matched (semantic) |
| 5 | Expanded | --- | missing_in_pfj |
| 6 | Indented | --- | missing_in_pfj |
| 7 | Disclosure variation (expanded) | --- | missing_in_pfj |
| 8 | Disclosure variation (indented) | --- | missing_in_pfj |
| 9 | Truncate expansion (expanded) | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Basic (`es-basic`)
- Basic with dynamic toggle text (`es-dynamic-text`)
- Detached (after) (`es-detached-after`)
- With custom toggle content (`es-custom-toggle`)

## DOM Comparison

### Hidden

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-indented` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-v6-c-expandable-section"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
- PFJ has <div class="pf-m-indented pf-v6-c-expandable-section"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF

#### Attribute Differences
- aria-controls="hidden-content" on <button> — present in PF, absent in PFJ
- aria-labelledby="hidden-toggle" on <div> — present in PF, absent in PFJ
- aria-controls="exs-id-136-content" on <button> — present in PFJ, absent in PF
- aria-labelledby="exs-id-136-toggle" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Disclosure variation (hidden)

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
- PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF

#### Attribute Differences
- aria-controls="disclosure-variation-hidden-content" on <button> — present in PF, absent in PFJ
- aria-labelledby="disclosure-variation-hidden-toggle" on <div> — present in PF, absent in PFJ
- aria-controls="exs-id-118-content" on <button> — present in PFJ, absent in PF
- aria-labelledby="exs-id-118-toggle" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Detached

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<div>` — present in PF, absent in PFJ
- `.pf-m-start` on `<span>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-detached pf-m-expand-top pf-m-expanded pf-v6-c-expandable-section"> — missing in PFJ
- PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
- PFJ has <div class="pf-m-detached pf-m-expand-top pf-v6-c-expandable-section"> — not in PF
- PFJ has <div class="pf-v6-c-expandable-section"> — not in PF

#### Attribute Differences
- aria-controls="detached-toggle-content" on <button> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-labelledby="detached-toggle-toggle" on <div> — present in PF, absent in PFJ
- aria-controls="es-detached-before-0-content" on <button> — present in PFJ, absent in PF
- aria-expanded="false" on <button> — present in PFJ, absent in PF
- aria-labelledby="es-detached-before-0-toggle" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Truncate expansion (hidden)

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-expand-top` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-truncate pf-v6-c-expandable-section"> — missing in PFJ
- PFJ has <button class="pf-m-inline pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
- PFJ has <div class="pf-m-expand-top pf-m-truncate pf-v6-c-expandable-section"> — not in PF

#### Attribute Differences
- aria-controls="truncated-expansion-hidden-content" on <button> — present in PF, absent in PFJ
- aria-labelledby="truncated-expansion-hidden-toggle" on <div> — present in PF, absent in PFJ
- aria-controls="exs-id-172-content" on <button> — present in PFJ, absent in PF
- aria-labelledby="exs-id-172-toggle" on <div> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Expanded — implement Expanded variation in PFJ
2. **Add variation:** Indented — implement Indented variation in PFJ
3. **Add variation:** Disclosure variation (expanded) — implement Disclosure variation (expanded) variation in PFJ
4. **Add variation:** Disclosure variation (indented) — implement Disclosure variation (indented) variation in PFJ
5. **Add variation:** Truncate expansion (expanded) — implement Truncate expansion (expanded) variation in PFJ
6. **Fix CSS:** Hidden — add missing class pf-m-start on <span>
7. **Fix structure:** Hidden — PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
8. **Fix structure:** Hidden — PF has <div class="pf-v6-c-expandable-section"> — missing in PFJ
9. **Fix structure:** Hidden — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
10. **Fix structure:** Hidden — PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
11. **Fix structure:** Hidden — PFJ has <div class="pf-m-indented pf-v6-c-expandable-section"> — not in PF
12. **Fix structure:** Hidden — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
13. **Fix attribute:** Hidden — aria-controls="hidden-content" on <button> — present in PF, absent in PFJ
14. **Fix attribute:** Hidden — aria-labelledby="hidden-toggle" on <div> — present in PF, absent in PFJ
15. **Fix attribute:** Hidden — aria-controls="exs-id-136-content" on <button> — present in PFJ, absent in PF
16. **Fix attribute:** Hidden — aria-labelledby="exs-id-136-toggle" on <div> — present in PFJ, absent in PF
17. **Fix icon:** Hidden — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
18. **Fix CSS:** Disclosure variation (hidden) — add missing class pf-m-start on <span>
19. **Fix structure:** Disclosure variation (hidden) — PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
20. **Fix structure:** Disclosure variation (hidden) — PF has <span class="pf-m-start pf-v6-c-button__icon"> — missing in PFJ
21. **Fix structure:** Disclosure variation (hidden) — PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
22. **Fix structure:** Disclosure variation (hidden) — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
23. **Fix attribute:** Disclosure variation (hidden) — aria-controls="disclosure-variation-hidden-content" on <button> — present in PF, absent in PFJ
24. **Fix attribute:** Disclosure variation (hidden) — aria-labelledby="disclosure-variation-hidden-toggle" on <div> — present in PF, absent in PFJ
25. **Fix attribute:** Disclosure variation (hidden) — aria-controls="exs-id-118-content" on <button> — present in PFJ, absent in PF
26. **Fix attribute:** Disclosure variation (hidden) — aria-labelledby="exs-id-118-toggle" on <div> — present in PFJ, absent in PF
27. **Fix icon:** Disclosure variation (hidden) — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
28. **Fix CSS:** Detached — add missing class pf-m-expanded on <div>
29. **Fix CSS:** Detached — add missing class pf-m-start on <span>
30. **Fix structure:** Detached — PF has <button class="pf-m-link pf-v6-c-button"> — missing in PFJ
31. **Fix structure:** Detached — PF has <div class="pf-m-detached pf-m-expand-top pf-m-expanded pf-v6-c-expandable-section"> — missing in PFJ
32. **Fix structure:** Detached — PFJ has <button class="pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
33. **Fix structure:** Detached — PFJ has <div class="pf-m-detached pf-m-expand-top pf-v6-c-expandable-section"> — not in PF
34. **Fix structure:** Detached — PFJ has <div class="pf-v6-c-expandable-section"> — not in PF
35. **Fix attribute:** Detached — aria-controls="detached-toggle-content" on <button> — present in PF, absent in PFJ
36. **Fix attribute:** Detached — aria-expanded="true" on <button> — present in PF, absent in PFJ
37. **Fix attribute:** Detached — aria-labelledby="detached-toggle-toggle" on <div> — present in PF, absent in PFJ
38. **Fix attribute:** Detached — aria-controls="es-detached-before-0-content" on <button> — present in PFJ, absent in PF
39. **Fix attribute:** Detached — aria-expanded="false" on <button> — present in PFJ, absent in PF
40. **Fix attribute:** Detached — aria-labelledby="es-detached-before-0-toggle" on <div> — present in PFJ, absent in PF
41. **Fix icon:** Detached — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
42. **Fix structure:** Truncate expansion (hidden) — PF has <button class="pf-m-inline pf-m-link pf-v6-c-button"> — missing in PFJ
43. **Fix structure:** Truncate expansion (hidden) — PF has <div class="pf-m-truncate pf-v6-c-expandable-section"> — missing in PFJ
44. **Fix structure:** Truncate expansion (hidden) — PFJ has <button class="pf-m-inline pf-m-link pf-v6-c-button pf-v6-c-expandable-section__toggle"> — not in PF
45. **Fix structure:** Truncate expansion (hidden) — PFJ has <div class="pf-m-expand-top pf-m-truncate pf-v6-c-expandable-section"> — not in PF
46. **Fix attribute:** Truncate expansion (hidden) — aria-controls="truncated-expansion-hidden-content" on <button> — present in PF, absent in PFJ
47. **Fix attribute:** Truncate expansion (hidden) — aria-labelledby="truncated-expansion-hidden-toggle" on <div> — present in PF, absent in PFJ
48. **Fix attribute:** Truncate expansion (hidden) — aria-controls="exs-id-172-content" on <button> — present in PFJ, absent in PF
49. **Fix attribute:** Truncate expansion (hidden) — aria-labelledby="exs-id-172-toggle" on <div> — present in PFJ, absent in PF
