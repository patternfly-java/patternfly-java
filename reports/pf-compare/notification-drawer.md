---
component: notification-drawer
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/notification-drawer/html
pfj_url: http://localhost:1234/components/notification-drawer
completeness:
  pf_total: 2
  pfj_total: 1
  matched: 1
  missing_in_pfj:
    - groups
  extra_in_pfj: []
---

# PF Compare: notification-drawer

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Groups | --- | missing_in_pfj |

## DOM Comparison

### Basic

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-no-offset` on `<div>` — present in PF, absent in PFJ
- `.pf-m-primary` on `<button>` — present in PF, absent in PFJ
- `.pf-m-truncate` on `<h2>` — present in PF, absent in PFJ
- `.pf-v6-c-button__text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-notification-drawer` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-notification-drawer__list-item-action` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-bottom-left` on `<div>` — present in PFJ, absent in PF
- `.pf-m-css-positioning` on `<div>` — present in PFJ, absent in PF
- `.pf-m-danger` on `<li>` — present in PFJ, absent in PF
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
- PF has <div class="pf-m-no-offset pf-v6-c-notification-drawer__list-item-action"> — missing in PFJ
- PF has <div class="pf-v6-c-notification-drawer"> — missing in PFJ
- PF has <div class="pf-v6-c-notification-drawer__list-item-action"> — missing in PFJ
- PF has <li class="pf-m-custom pf-m-hoverable pf-v6-c-notification-drawer__list-item"> — missing in PFJ
- PF has <li class="pf-m-read pf-m-success pf-v6-c-notification-drawer__list-item"> — missing in PFJ
- PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
- PFJ has <div class="pf-v6-c-menu"> — not in PF
- PFJ has <div class="pf-v6-c-menu__content"> — not in PF
- PFJ has <h2 class="pf-v6-c-notification-drawer__list-item-header-title"> — not in PF
- PFJ has <li class="pf-m-custom pf-m-hoverable pf-m-read pf-v6-c-notification-drawer__list-item"> — not in PF
- PFJ has <li class="pf-m-danger pf-m-hoverable pf-v6-c-notification-drawer__list-item"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF
- PFJ has <span class="pf-v6-c-notification-drawer__list-item-header-icon"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-label="Menu toggle" on <button> — present in PF, absent in PFJ
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

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Add variation:** Groups — implement Groups variation in PFJ
2. **Fix CSS:** Basic — add missing class pf-m-no-offset on <div>
3. **Fix CSS:** Basic — add missing class pf-m-primary on <button>
4. **Fix CSS:** Basic — add missing class pf-m-truncate on <h2>
5. **Fix CSS:** Basic — add missing class pf-v6-c-button__text on <span>
6. **Fix CSS:** Basic — add missing class pf-v6-c-notification-drawer on <div>
7. **Fix CSS:** Basic — add missing class pf-v6-c-notification-drawer__list-item-action on <div>
8. **Fix structure:** Basic — PF has <div class="pf-m-no-offset pf-v6-c-notification-drawer__list-item-action"> — missing in PFJ
9. **Fix structure:** Basic — PF has <div class="pf-v6-c-notification-drawer"> — missing in PFJ
10. **Fix structure:** Basic — PF has <div class="pf-v6-c-notification-drawer__list-item-action"> — missing in PFJ
11. **Fix structure:** Basic — PF has <li class="pf-m-custom pf-m-hoverable pf-v6-c-notification-drawer__list-item"> — missing in PFJ
12. **Fix structure:** Basic — PF has <li class="pf-m-read pf-m-success pf-v6-c-notification-drawer__list-item"> — missing in PFJ
13. **Fix structure:** Basic — PFJ has <div class="pf-m-bottom-left pf-m-css-positioning pf-v6-c-overlay"> — not in PF
14. **Fix structure:** Basic — PFJ has <div class="pf-v6-c-menu"> — not in PF
15. **Fix structure:** Basic — PFJ has <div class="pf-v6-c-menu__content"> — not in PF
16. **Fix structure:** Basic — PFJ has <h2 class="pf-v6-c-notification-drawer__list-item-header-title"> — not in PF
17. **Fix structure:** Basic — PFJ has <li class="pf-m-custom pf-m-hoverable pf-m-read pf-v6-c-notification-drawer__list-item"> — not in PF
18. **Fix structure:** Basic — PFJ has <li class="pf-m-danger pf-m-hoverable pf-v6-c-notification-drawer__list-item"> — not in PF
19. **Fix structure:** Basic — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
20. **Fix structure:** Basic — PFJ has <span class="pf-v6-c-notification-drawer__list-item-header-icon"> — not in PF
21. **Fix structure:** Basic — PFJ has <span class="pf-v6-screen-reader"> — not in PF
22. **Fix structure:** Basic — PFJ has <svg class="pf-v6-svg"> — not in PF
23. **Fix attribute:** Basic — aria-label="Menu toggle" on <button> — present in PF, absent in PFJ
24. **Fix attribute:** Basic — aria-disabled="true" on <a> — present in PFJ, absent in PF
25. **Fix attribute:** Basic — aria-label="Column actions" on <button> — present in PFJ, absent in PF
26. **Fix attribute:** Basic — role="menu" on <ul> — present in PFJ, absent in PF
27. **Fix attribute:** Basic — role="menuitem" on <a> — present in PFJ, absent in PF
28. **Fix attribute:** Basic — role="menuitem" on <button> — present in PFJ, absent in PF
29. **Fix attribute:** Basic — role="none" on <li> — present in PFJ, absent in PF
30. **Fix attribute:** Basic — role="separator" on <li> — present in PFJ, absent in PF
31. **Fix attribute:** Basic — tabindex="-1" on <a> — present in PFJ, absent in PF
32. **Fix attribute:** Basic — tabindex="-1" on <button> — present in PFJ, absent in PF
33. **Fix attribute:** Basic — tabindex="0" on <button> — present in PFJ, absent in PF
34. **Fix icon:** Basic — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
