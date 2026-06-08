---
component: navigation
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/navigation/html
pfj_url: http://localhost:1234/components/navigation
completeness:
  pf_total: 17
  pfj_total: 14
  matched: 14
  missing_in_pfj:
    - expanded-with-subnav-titles
    - nav-with-drilldown-menu-level-two
    - nav-with-drilldown-menu-level-three
  extra_in_pfj: []
---

# PF Compare: navigation

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Default | Default | matched (exact) |
| 2 | Grouped nav | Grouped | matched (semantic) |
| 3 | Grouped nav, no titles | Grouped, no titles | matched (semantic) |
| 4 | Expanded | Expandable | matched (semantic) |
| 5 | Mixed | Mixed | matched (exact) |
| 6 | Expandable, third level | Expandable third level | matched (exact) |
| 7 | Horizontal | Horizontal navigation | matched (semantic) |
| 8 | Horizontal overflow | Horizontal overflow | matched (exact) |
| 9 | Horizontal subnav | Horizontal subnav | matched (exact) |
| 10 | Horizontal subnav overflow | Horizontal subnav overflow | matched (exact) |
| 11 | Nav with flyout | Flyout | matched (semantic) |
| 12 | Nav with drilldown menu | Drilldown | matched (semantic) |
| 13 | Nav item icons | With item icons | matched (semantic) |
| 14 | Docked nav | Docked | matched (semantic) |
| 15 | Expanded with subnav titles | --- | missing_in_pfj |
| 16 | Nav with drilldown menu level two | --- | missing_in_pfj |
| 17 | Nav with drilldown menu level three | --- | missing_in_pfj |

## DOM Comparison

### Default

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ

### Grouped nav

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-labelledby="grouped-title1" on <section> — present in PF, absent in PFJ
- aria-labelledby="grouped-title2" on <section> — present in PF, absent in PFJ
- aria-labelledby="nav-grouped-0-title-id-60" on <section> — present in PFJ, absent in PF
- aria-labelledby="nav-grouped-1-title-id-61" on <section> — present in PFJ, absent in PF

### Grouped nav, no titles

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- role="separator" on <hr> — present in PFJ, absent in PF

### Expanded

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
- PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
- PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-labelledby="expandable-example1" on <section> — present in PF, absent in PFJ
- aria-labelledby="expandable-example2" on <section> — present in PF, absent in PFJ
- aria-labelledby="expandable-example3" on <section> — present in PF, absent in PFJ
- aria-labelledby="nav-exp-0-title-id-78" on <section> — present in PFJ, absent in PF
- aria-labelledby="nav-exp-1-title-id-79" on <section> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Mixed

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
- PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-labelledby="nav-mixed-link2" on <section> — present in PF, absent in PFJ
- aria-labelledby="nav-mixed-link4" on <section> — present in PF, absent in PFJ
- aria-labelledby="nav-mixed-0-title-id-115" on <section> — present in PFJ, absent in PF
- aria-labelledby="nav-mixed-1-title-id-116" on <section> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Expandable, third level

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-expanded` on `<li>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-expandable` on `<li>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-v6-c-nav__link"> — missing in PFJ
- PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
- PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
- PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF

#### Attribute Differences
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-labelledby="-sub-example-1" on <section> — present in PF, absent in PFJ
- aria-labelledby="expandable-third-level-example-example-1" on <section> — present in PF, absent in PFJ
- aria-labelledby="expandable-third-level-example-example-2" on <section> — present in PF, absent in PFJ
- aria-labelledby="nav-exp3-0-title-id-96" on <section> — present in PFJ, absent in PF
- aria-labelledby="nav-exp3-1-title-id-97" on <section> — present in PFJ, absent in PF
- aria-labelledby="nav-exp3-2-title-id-98" on <section> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Horizontal

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__scroll-button` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-nav__scroll-button"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Horizontal overflow

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-scrollable` on `<nav>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <nav class="pf-m-horizontal pf-m-scrollable pf-v6-c-nav"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <nav class="pf-m-horizontal pf-v6-c-nav"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-label="Scroll end" on <button> — present in PF, absent in PFJ
- aria-label="Scroll start" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF

### Horizontal subnav

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-plain` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button` on `<button>` — present in PFJ, absent in PF
- `.pf-v6-c-button__icon` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__scroll-button` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-svg` on `<svg>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-nav__scroll-button"> — not in PF
- PFJ has <span class="pf-v6-c-button__icon"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- type="button" on <button> — present in PFJ, absent in PF

### Horizontal subnav overflow

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-scrollable` on `<nav>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
- PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <nav class="pf-m-horizontal pf-m-scrollable pf-m-subnav pf-v6-c-nav"> — missing in PFJ
- PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <nav class="pf-m-horizontal pf-m-subnav pf-v6-c-nav"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-label="Global" on <nav> — present in PF, absent in PFJ
- aria-label="Scroll end" on <button> — present in PF, absent in PFJ
- aria-label="Scroll start" on <button> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-label="Local" on <nav> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF

### Nav with flyout

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ
- `.pf-m-flyout` on `<li>` — present in PF, absent in PFJ
- `.pf-m-nav` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-main` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__list` on `<ul>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__list-item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-nav` on `<nav>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__link` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__link-text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__list` on `<ul>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-nav__toggle-icon` on `<span>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
- PF has <a class="pf-v6-c-nav__link"> — missing in PFJ
- PF has <div class="pf-m-flyout pf-m-nav pf-v6-c-menu"> — missing in PFJ
- PF has <div class="pf-v6-c-menu__content"> — missing in PFJ
- PF has <li class="pf-m-flyout pf-v6-c-nav__item"> — missing in PFJ
- PF has <li class="pf-v6-c-menu__list-item"> — missing in PFJ
- PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
- PF has <nav class="pf-v6-c-nav"> — missing in PFJ
- PF has <span class="pf-v6-c-nav__link-text"> — missing in PFJ
- PF has <span class="pf-v6-c-nav__toggle"> — missing in PFJ
- PF has <ul class="pf-v6-c-menu__list"> — missing in PFJ
- PF has <ul class="pf-v6-c-nav__list"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ
- aria-expanded="true" on <a> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PF, absent in PFJ
- aria-haspopup="true" on <a> — present in PF, absent in PFJ
- aria-label="Global" on <nav> — present in PF, absent in PFJ
- role="list" on <ul> — present in PF, absent in PFJ
- role="menu" on <ul> — present in PF, absent in PFJ
- role="menuitem" on <a> — present in PF, absent in PFJ
- role="menuitem" on <button> — present in PF, absent in PFJ
- role="none" on <li> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Nav with drilldown menu

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<button>` — present in PF, absent in PFJ
- `.pf-m-drill-up` on `<li>` — present in PF, absent in PFJ
- `.pf-m-drilldown` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__content` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-main` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-text` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__item-toggle-icon` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__list` on `<ul>` — present in PF, absent in PFJ
- `.pf-v6-c-menu__list-item` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-nav` on `<nav>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-alert__icon` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-alert__title` on `<p>` — present in PFJ, absent in PF
- `.pf-v6-screen-reader` on `<span>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <div class="pf-m-drilldown pf-v6-c-menu"> — missing in PFJ
- PF has <div class="pf-v6-c-menu__content"> — missing in PFJ
- PF has <li class="pf-v6-c-menu__list-item"> — missing in PFJ
- PF has <nav class="pf-v6-c-nav"> — missing in PFJ
- PF has <ul class="pf-v6-c-menu__list"> — missing in PFJ
- PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
- PFJ has <p class="pf-v6-c-alert__title"> — not in PF
- PFJ has <span class="pf-v6-screen-reader"> — not in PF
- PFJ has <svg class="pf-v6-svg"> — not in PF

#### Attribute Differences
- aria-expanded="false" on <button> — present in PF, absent in PFJ
- aria-label="Drilldown menu example" on <nav> — present in PF, absent in PFJ
- role="menu" on <ul> — present in PF, absent in PFJ
- role="menuitem" on <button> — present in PF, absent in PFJ
- role="none" on <li> — present in PF, absent in PFJ
- tabindex="0" on <button> — present in PF, absent in PFJ
- type="button" on <button> — present in PF, absent in PFJ

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 20 20`, PFJ uses viewBox `0 0 32 32`

### Nav item icons

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ

### Docked nav

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-current` on `<a>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ

#### Attribute Differences
- aria-current="page" on <a> — present in PF, absent in PFJ

## Action Items

1. **Add variation:** Expanded with subnav titles — implement Expanded with subnav titles variation in PFJ
2. **Add variation:** Nav with drilldown menu level two — implement Nav with drilldown menu level two variation in PFJ
3. **Add variation:** Nav with drilldown menu level three — implement Nav with drilldown menu level three variation in PFJ
4. **Fix CSS:** Default — add missing class pf-m-current on <a>
5. **Fix structure:** Default — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
6. **Fix attribute:** Default — aria-current="page" on <a> — present in PF, absent in PFJ
7. **Fix CSS:** Grouped nav — add missing class pf-m-current on <a>
8. **Fix structure:** Grouped nav — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
9. **Fix attribute:** Grouped nav — aria-current="page" on <a> — present in PF, absent in PFJ
10. **Fix attribute:** Grouped nav — aria-labelledby="grouped-title1" on <section> — present in PF, absent in PFJ
11. **Fix attribute:** Grouped nav — aria-labelledby="grouped-title2" on <section> — present in PF, absent in PFJ
12. **Fix attribute:** Grouped nav — aria-labelledby="nav-grouped-0-title-id-60" on <section> — present in PFJ, absent in PF
13. **Fix attribute:** Grouped nav — aria-labelledby="nav-grouped-1-title-id-61" on <section> — present in PFJ, absent in PF
14. **Fix CSS:** Grouped nav, no titles — add missing class pf-m-current on <a>
15. **Fix attribute:** Grouped nav, no titles — aria-current="page" on <a> — present in PF, absent in PFJ
16. **Fix attribute:** Grouped nav, no titles — role="separator" on <hr> — present in PFJ, absent in PF
17. **Fix CSS:** Expanded — add missing class pf-m-current on <a>
18. **Fix CSS:** Expanded — add missing class pf-m-expanded on <li>
19. **Fix structure:** Expanded — PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
20. **Fix structure:** Expanded — PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
21. **Fix structure:** Expanded — PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF
22. **Fix attribute:** Expanded — aria-current="page" on <a> — present in PF, absent in PFJ
23. **Fix attribute:** Expanded — aria-expanded="true" on <button> — present in PF, absent in PFJ
24. **Fix attribute:** Expanded — aria-labelledby="expandable-example1" on <section> — present in PF, absent in PFJ
25. **Fix attribute:** Expanded — aria-labelledby="expandable-example2" on <section> — present in PF, absent in PFJ
26. **Fix attribute:** Expanded — aria-labelledby="expandable-example3" on <section> — present in PF, absent in PFJ
27. **Fix attribute:** Expanded — aria-labelledby="nav-exp-0-title-id-78" on <section> — present in PFJ, absent in PF
28. **Fix attribute:** Expanded — aria-labelledby="nav-exp-1-title-id-79" on <section> — present in PFJ, absent in PF
29. **Fix attribute:** Expanded — type="button" on <button> — present in PFJ, absent in PF
30. **Fix CSS:** Mixed — add missing class pf-m-current on <a>
31. **Fix CSS:** Mixed — add missing class pf-m-expanded on <li>
32. **Fix structure:** Mixed — PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
33. **Fix structure:** Mixed — PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF
34. **Fix attribute:** Mixed — aria-current="page" on <a> — present in PF, absent in PFJ
35. **Fix attribute:** Mixed — aria-expanded="true" on <button> — present in PF, absent in PFJ
36. **Fix attribute:** Mixed — aria-labelledby="nav-mixed-link2" on <section> — present in PF, absent in PFJ
37. **Fix attribute:** Mixed — aria-labelledby="nav-mixed-link4" on <section> — present in PF, absent in PFJ
38. **Fix attribute:** Mixed — aria-labelledby="nav-mixed-0-title-id-115" on <section> — present in PFJ, absent in PF
39. **Fix attribute:** Mixed — aria-labelledby="nav-mixed-1-title-id-116" on <section> — present in PFJ, absent in PF
40. **Fix attribute:** Mixed — type="button" on <button> — present in PFJ, absent in PF
41. **Fix CSS:** Expandable, third level — add missing class pf-m-expanded on <li>
42. **Fix structure:** Expandable, third level — PF has <a class="pf-v6-c-nav__link"> — missing in PFJ
43. **Fix structure:** Expandable, third level — PF has <li class="pf-m-expanded pf-v6-c-nav__item"> — missing in PFJ
44. **Fix structure:** Expandable, third level — PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
45. **Fix structure:** Expandable, third level — PFJ has <li class="pf-m-expandable pf-v6-c-nav__item"> — not in PF
46. **Fix attribute:** Expandable, third level — aria-expanded="true" on <button> — present in PF, absent in PFJ
47. **Fix attribute:** Expandable, third level — aria-labelledby="-sub-example-1" on <section> — present in PF, absent in PFJ
48. **Fix attribute:** Expandable, third level — aria-labelledby="expandable-third-level-example-example-1" on <section> — present in PF, absent in PFJ
49. **Fix attribute:** Expandable, third level — aria-labelledby="expandable-third-level-example-example-2" on <section> — present in PF, absent in PFJ
50. **Fix attribute:** Expandable, third level — aria-labelledby="nav-exp3-0-title-id-96" on <section> — present in PFJ, absent in PF
51. **Fix attribute:** Expandable, third level — aria-labelledby="nav-exp3-1-title-id-97" on <section> — present in PFJ, absent in PF
52. **Fix attribute:** Expandable, third level — aria-labelledby="nav-exp3-2-title-id-98" on <section> — present in PFJ, absent in PF
53. **Fix attribute:** Expandable, third level — type="button" on <button> — present in PFJ, absent in PF
54. **Fix CSS:** Horizontal — add missing class pf-m-current on <a>
55. **Fix structure:** Horizontal — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
56. **Fix structure:** Horizontal — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
57. **Fix structure:** Horizontal — PFJ has <div class="pf-v6-c-nav__scroll-button"> — not in PF
58. **Fix structure:** Horizontal — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
59. **Fix structure:** Horizontal — PFJ has <svg class="pf-v6-svg"> — not in PF
60. **Fix attribute:** Horizontal — aria-current="page" on <a> — present in PF, absent in PFJ
61. **Fix attribute:** Horizontal — aria-disabled="true" on <button> — present in PFJ, absent in PF
62. **Fix attribute:** Horizontal — aria-hidden="true" on <svg> — present in PFJ, absent in PF
63. **Fix attribute:** Horizontal — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
64. **Fix attribute:** Horizontal — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
65. **Fix attribute:** Horizontal — role="img" on <svg> — present in PFJ, absent in PF
66. **Fix attribute:** Horizontal — type="button" on <button> — present in PFJ, absent in PF
67. **Fix CSS:** Horizontal overflow — add missing class pf-m-current on <a>
68. **Fix CSS:** Horizontal overflow — add missing class pf-m-scrollable on <nav>
69. **Fix structure:** Horizontal overflow — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
70. **Fix structure:** Horizontal overflow — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
71. **Fix structure:** Horizontal overflow — PF has <nav class="pf-m-horizontal pf-m-scrollable pf-v6-c-nav"> — missing in PFJ
72. **Fix structure:** Horizontal overflow — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
73. **Fix structure:** Horizontal overflow — PFJ has <nav class="pf-m-horizontal pf-v6-c-nav"> — not in PF
74. **Fix attribute:** Horizontal overflow — aria-current="page" on <a> — present in PF, absent in PFJ
75. **Fix attribute:** Horizontal overflow — aria-label="Scroll end" on <button> — present in PF, absent in PFJ
76. **Fix attribute:** Horizontal overflow — aria-label="Scroll start" on <button> — present in PF, absent in PFJ
77. **Fix attribute:** Horizontal overflow — aria-disabled="true" on <button> — present in PFJ, absent in PF
78. **Fix attribute:** Horizontal overflow — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
79. **Fix attribute:** Horizontal overflow — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
80. **Fix CSS:** Horizontal subnav — add missing class pf-m-current on <a>
81. **Fix structure:** Horizontal subnav — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
82. **Fix structure:** Horizontal subnav — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
83. **Fix structure:** Horizontal subnav — PFJ has <div class="pf-v6-c-nav__scroll-button"> — not in PF
84. **Fix structure:** Horizontal subnav — PFJ has <span class="pf-v6-c-button__icon"> — not in PF
85. **Fix structure:** Horizontal subnav — PFJ has <svg class="pf-v6-svg"> — not in PF
86. **Fix attribute:** Horizontal subnav — aria-current="page" on <a> — present in PF, absent in PFJ
87. **Fix attribute:** Horizontal subnav — aria-disabled="true" on <button> — present in PFJ, absent in PF
88. **Fix attribute:** Horizontal subnav — aria-hidden="true" on <svg> — present in PFJ, absent in PF
89. **Fix attribute:** Horizontal subnav — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
90. **Fix attribute:** Horizontal subnav — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
91. **Fix attribute:** Horizontal subnav — role="img" on <svg> — present in PFJ, absent in PF
92. **Fix attribute:** Horizontal subnav — type="button" on <button> — present in PFJ, absent in PF
93. **Fix CSS:** Horizontal subnav overflow — add missing class pf-m-current on <a>
94. **Fix CSS:** Horizontal subnav overflow — add missing class pf-m-scrollable on <nav>
95. **Fix structure:** Horizontal subnav overflow — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
96. **Fix structure:** Horizontal subnav overflow — PF has <button class="pf-m-plain pf-v6-c-button"> — missing in PFJ
97. **Fix structure:** Horizontal subnav overflow — PF has <nav class="pf-m-horizontal pf-m-scrollable pf-m-subnav pf-v6-c-nav"> — missing in PFJ
98. **Fix structure:** Horizontal subnav overflow — PFJ has <button class="pf-m-disabled pf-m-plain pf-v6-c-button"> — not in PF
99. **Fix structure:** Horizontal subnav overflow — PFJ has <nav class="pf-m-horizontal pf-m-subnav pf-v6-c-nav"> — not in PF
100. **Fix attribute:** Horizontal subnav overflow — aria-current="page" on <a> — present in PF, absent in PFJ
101. **Fix attribute:** Horizontal subnav overflow — aria-label="Global" on <nav> — present in PF, absent in PFJ
102. **Fix attribute:** Horizontal subnav overflow — aria-label="Scroll end" on <button> — present in PF, absent in PFJ
103. **Fix attribute:** Horizontal subnav overflow — aria-label="Scroll start" on <button> — present in PF, absent in PFJ
104. **Fix attribute:** Horizontal subnav overflow — aria-disabled="true" on <button> — present in PFJ, absent in PF
105. **Fix attribute:** Horizontal subnav overflow — aria-label="Local" on <nav> — present in PFJ, absent in PF
106. **Fix attribute:** Horizontal subnav overflow — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
107. **Fix attribute:** Horizontal subnav overflow — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
108. **Fix CSS:** Nav with flyout — add missing class pf-m-current on <a>
109. **Fix CSS:** Nav with flyout — add missing class pf-m-flyout on <li>
110. **Fix CSS:** Nav with flyout — add missing class pf-m-nav on <div>
111. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu on <div>
112. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__content on <div>
113. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__item on <a>
114. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__item-main on <span>
115. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__item-text on <span>
116. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__item-toggle-icon on <span>
117. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__list on <ul>
118. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-menu__list-item on <li>
119. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav on <nav>
120. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__item on <li>
121. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__link on <a>
122. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__link-text on <span>
123. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__list on <ul>
124. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__toggle on <span>
125. **Fix CSS:** Nav with flyout — add missing class pf-v6-c-nav__toggle-icon on <span>
126. **Fix structure:** Nav with flyout — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
127. **Fix structure:** Nav with flyout — PF has <a class="pf-v6-c-nav__link"> — missing in PFJ
128. **Fix structure:** Nav with flyout — PF has <div class="pf-m-flyout pf-m-nav pf-v6-c-menu"> — missing in PFJ
129. **Fix structure:** Nav with flyout — PF has <div class="pf-v6-c-menu__content"> — missing in PFJ
130. **Fix structure:** Nav with flyout — PF has <li class="pf-m-flyout pf-v6-c-nav__item"> — missing in PFJ
131. **Fix structure:** Nav with flyout — PF has <li class="pf-v6-c-menu__list-item"> — missing in PFJ
132. **Fix structure:** Nav with flyout — PF has <li class="pf-v6-c-nav__item"> — missing in PFJ
133. **Fix structure:** Nav with flyout — PF has <nav class="pf-v6-c-nav"> — missing in PFJ
134. **Fix structure:** Nav with flyout — PF has <span class="pf-v6-c-nav__link-text"> — missing in PFJ
135. **Fix structure:** Nav with flyout — PF has <span class="pf-v6-c-nav__toggle"> — missing in PFJ
136. **Fix structure:** Nav with flyout — PF has <ul class="pf-v6-c-menu__list"> — missing in PFJ
137. **Fix structure:** Nav with flyout — PF has <ul class="pf-v6-c-nav__list"> — missing in PFJ
138. **Fix structure:** Nav with flyout — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
139. **Fix structure:** Nav with flyout — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
140. **Fix structure:** Nav with flyout — PFJ has <span class="pf-v6-screen-reader"> — not in PF
141. **Fix structure:** Nav with flyout — PFJ has <svg class="pf-v6-svg"> — not in PF
142. **Fix attribute:** Nav with flyout — aria-current="page" on <a> — present in PF, absent in PFJ
143. **Fix attribute:** Nav with flyout — aria-expanded="true" on <a> — present in PF, absent in PFJ
144. **Fix attribute:** Nav with flyout — aria-expanded="true" on <button> — present in PF, absent in PFJ
145. **Fix attribute:** Nav with flyout — aria-haspopup="true" on <a> — present in PF, absent in PFJ
146. **Fix attribute:** Nav with flyout — aria-label="Global" on <nav> — present in PF, absent in PFJ
147. **Fix attribute:** Nav with flyout — role="list" on <ul> — present in PF, absent in PFJ
148. **Fix attribute:** Nav with flyout — role="menu" on <ul> — present in PF, absent in PFJ
149. **Fix attribute:** Nav with flyout — role="menuitem" on <a> — present in PF, absent in PFJ
150. **Fix attribute:** Nav with flyout — role="menuitem" on <button> — present in PF, absent in PFJ
151. **Fix attribute:** Nav with flyout — role="none" on <li> — present in PF, absent in PFJ
152. **Fix attribute:** Nav with flyout — type="button" on <button> — present in PF, absent in PFJ
153. **Fix icon:** Nav with flyout — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
154. **Fix CSS:** Nav with drilldown menu — add missing class pf-m-current on <button>
155. **Fix CSS:** Nav with drilldown menu — add missing class pf-m-drill-up on <li>
156. **Fix CSS:** Nav with drilldown menu — add missing class pf-m-drilldown on <div>
157. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu on <div>
158. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__content on <div>
159. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__item on <button>
160. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__item-main on <span>
161. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__item-text on <span>
162. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__item-toggle-icon on <span>
163. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__list on <ul>
164. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-menu__list-item on <li>
165. **Fix CSS:** Nav with drilldown menu — add missing class pf-v6-c-nav on <nav>
166. **Fix structure:** Nav with drilldown menu — PF has <div class="pf-m-drilldown pf-v6-c-menu"> — missing in PFJ
167. **Fix structure:** Nav with drilldown menu — PF has <div class="pf-v6-c-menu__content"> — missing in PFJ
168. **Fix structure:** Nav with drilldown menu — PF has <li class="pf-v6-c-menu__list-item"> — missing in PFJ
169. **Fix structure:** Nav with drilldown menu — PF has <nav class="pf-v6-c-nav"> — missing in PFJ
170. **Fix structure:** Nav with drilldown menu — PF has <ul class="pf-v6-c-menu__list"> — missing in PFJ
171. **Fix structure:** Nav with drilldown menu — PFJ has <div class="pf-v6-c-alert__icon"> — not in PF
172. **Fix structure:** Nav with drilldown menu — PFJ has <p class="pf-v6-c-alert__title"> — not in PF
173. **Fix structure:** Nav with drilldown menu — PFJ has <span class="pf-v6-screen-reader"> — not in PF
174. **Fix structure:** Nav with drilldown menu — PFJ has <svg class="pf-v6-svg"> — not in PF
175. **Fix attribute:** Nav with drilldown menu — aria-expanded="false" on <button> — present in PF, absent in PFJ
176. **Fix attribute:** Nav with drilldown menu — aria-label="Drilldown menu example" on <nav> — present in PF, absent in PFJ
177. **Fix attribute:** Nav with drilldown menu — role="menu" on <ul> — present in PF, absent in PFJ
178. **Fix attribute:** Nav with drilldown menu — role="menuitem" on <button> — present in PF, absent in PFJ
179. **Fix attribute:** Nav with drilldown menu — role="none" on <li> — present in PF, absent in PFJ
180. **Fix attribute:** Nav with drilldown menu — tabindex="0" on <button> — present in PF, absent in PFJ
181. **Fix attribute:** Nav with drilldown menu — type="button" on <button> — present in PF, absent in PFJ
182. **Fix icon:** Nav with drilldown menu — icon mismatch on pf-v6-svg: PF viewBox=0 0 20 20, PFJ viewBox=0 0 32 32
183. **Fix CSS:** Nav item icons — add missing class pf-m-current on <a>
184. **Fix structure:** Nav item icons — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
185. **Fix attribute:** Nav item icons — aria-current="page" on <a> — present in PF, absent in PFJ
186. **Fix CSS:** Docked nav — add missing class pf-m-current on <a>
187. **Fix structure:** Docked nav — PF has <a class="pf-m-current pf-v6-c-nav__link"> — missing in PFJ
188. **Fix attribute:** Docked nav — aria-current="page" on <a> — present in PF, absent in PFJ
