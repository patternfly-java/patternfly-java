---
component: hint
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/hint/html
pfj_url: http://localhost:1234/components/hint
completeness:
  pf_total: 3
  pfj_total: 3
  matched: 2
  missing_in_pfj:
    - actions-with-no-offset
  extra_in_pfj:
    - hint-with-action
---

# PF Compare: hint

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Hint with title | Basic with title | matched (semantic) |
| 2 | Default with no title | Basic without title | matched (semantic) |
| 3 | Actions with no offset | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- With actions (`hint-with-action`)

## DOM Comparison

### Hint with title

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <div class="pf-v6-c-menu__content"> — not in PF

#### Attribute Differences
- aria-label="Hint with title and footer example actions" on <button> — present in PF, absent in PFJ
- aria-label="Hint with title example actions" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

### Default with no title

**Status:** differences_found

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-disabled` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-divider` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-menu` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-main` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__item-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-menu__list-item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-overlay` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF

#### Attribute Differences
- aria-label="Hint without title example actions" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <a> — present in PFJ, absent in PF
- aria-label="Column actions" on <button> — present in PFJ, absent in PF
- role="menu" on <ul> — present in PFJ, absent in PF
- role="menuitem" on <a> — present in PFJ, absent in PF
- role="menuitem" on <button> — present in PFJ, absent in PF
- role="none" on <li> — present in PFJ, absent in PF
- role="separator" on <li> — present in PFJ, absent in PF
- tabindex="-1" on <a> — present in PFJ, absent in PF
- tabindex="-1" on <button> — present in PFJ, absent in PF
- tabindex="0" on <button> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Actions with no offset — implement Actions with no offset variation in PFJ
2. **Fix structure:** Hint with title — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
3. **Fix structure:** Hint with title — PFJ has <div class="pf-v6-c-menu"> — not in PF
4. **Fix structure:** Hint with title — PFJ has <div class="pf-v6-c-menu__content"> — not in PF
5. **Fix attribute:** Hint with title — aria-label="Hint with title and footer example actions" on <button> — present in PF, absent in PFJ
6. **Fix attribute:** Hint with title — aria-label="Hint with title example actions" on <button> — present in PF, absent in PFJ
7. **Fix attribute:** Hint with title — aria-disabled="true" on <a> — present in PFJ, absent in PF
8. **Fix attribute:** Hint with title — aria-label="Column actions" on <button> — present in PFJ, absent in PF
9. **Fix attribute:** Hint with title — role="menu" on <ul> — present in PFJ, absent in PF
10. **Fix attribute:** Hint with title — role="menuitem" on <a> — present in PFJ, absent in PF
11. **Fix attribute:** Hint with title — role="menuitem" on <button> — present in PFJ, absent in PF
12. **Fix attribute:** Hint with title — role="none" on <li> — present in PFJ, absent in PF
13. **Fix attribute:** Hint with title — role="separator" on <li> — present in PFJ, absent in PF
14. **Fix attribute:** Hint with title — tabindex="-1" on <a> — present in PFJ, absent in PF
15. **Fix attribute:** Hint with title — tabindex="-1" on <button> — present in PFJ, absent in PF
16. **Fix attribute:** Hint with title — tabindex="0" on <button> — present in PFJ, absent in PF
17. **Fix structure:** Default with no title — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
18. **Fix structure:** Default with no title — PFJ has <div class="pf-v6-c-menu"> — not in PF
19. **Fix attribute:** Default with no title — aria-label="Hint without title example actions" on <button> — present in PF, absent in PFJ
20. **Fix attribute:** Default with no title — aria-disabled="true" on <a> — present in PFJ, absent in PF
21. **Fix attribute:** Default with no title — aria-label="Column actions" on <button> — present in PFJ, absent in PF
22. **Fix attribute:** Default with no title — role="menu" on <ul> — present in PFJ, absent in PF
23. **Fix attribute:** Default with no title — role="menuitem" on <a> — present in PFJ, absent in PF
24. **Fix attribute:** Default with no title — role="menuitem" on <button> — present in PFJ, absent in PF
25. **Fix attribute:** Default with no title — role="none" on <li> — present in PFJ, absent in PF
26. **Fix attribute:** Default with no title — role="separator" on <li> — present in PFJ, absent in PF
27. **Fix attribute:** Default with no title — tabindex="-1" on <a> — present in PFJ, absent in PF
28. **Fix attribute:** Default with no title — tabindex="-1" on <button> — present in PFJ, absent in PF
29. **Fix attribute:** Default with no title — tabindex="0" on <button> — present in PFJ, absent in PF
