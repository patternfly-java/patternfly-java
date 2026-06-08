---
component: page
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/page/html
pfj_url: http://localhost:1234/components/page
completeness:
  pf_total: 9
  pfj_total: 7
  matched: 5
  missing_in_pfj:
    - with-or-without-fill
    - main-section-variations
    - with-dock
    - sticky-section-dynamic
  extra_in_pfj:
    - page-filled-sections
    - page-group
---

# PF Compare: page

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Vertical nav | Vertical navigation | matched (semantic) |
| 2 | Horizontal nav | Horizontal navigation | matched (semantic) |
| 3 | Multiple sidebar body elements, padding, and fill | Multiple sidebar body | matched (semantic) |
| 4 | Main section padding | Main section padding | matched (exact) |
| 5 | Centered section | Centered section | matched (exact) |
| 6 | With or without fill | --- | missing_in_pfj |
| 7 | Main section variations | --- | missing_in_pfj |
| 8 | With dock | --- | missing_in_pfj |
| 9 | Sticky section dynamic | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Filled page sections (`page-filled-sections`)
- Group section (`page-group`)

## DOM Comparison

### Vertical nav

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-page__main-body` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-page__sidebar-main` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-display-inline-on-md` on `<header>` — present in PFJ, absent in PF
- `.pf-m-expanded` on `<aside>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
- PF has <header class="pf-v6-c-masthead"> — missing in PFJ
- PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
- PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
- PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF

#### Attribute Differences
- aria-label="Default main section example 1" on <section> — present in PF, absent in PFJ
- aria-label="Default main section example 2" on <section> — present in PF, absent in PFJ
- aria-label="Global navigation" on <button> — present in PF, absent in PFJ
- aria-label="Multiple main body section example" on <section> — present in PF, absent in PFJ
- aria-label="Secondary main section example 1" on <section> — present in PF, absent in PFJ
- tabindex="-1" on <div> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PFJ, absent in PF
- aria-hidden="false" on <aside> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="main" on <main> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 32 32`

### Horizontal nav

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-masthead__toggle` on `<span>` — present in PF, absent in PFJ
- `.pf-v6-c-page__main-body` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-disabled` on `<button>` — present in PFJ, absent in PF
- `.pf-m-display-inline-on-md` on `<header>` — present in PFJ, absent in PF
- `.pf-m-horizontal` on `<nav>` — present in PFJ, absent in PF
- `.pf-m-overflow-container` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-nav` on `<nav>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__item` on `<li>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__link` on `<a>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__link-text` on `<span>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__list` on `<ul>` — present in PFJ, absent in PF
- `.pf-v6-c-nav__scroll-button` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__content` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__content-section` on `<div>` — present in PFJ, absent in PF
- `.pf-v6-c-toolbar__item` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
- PF has <header class="pf-v6-c-masthead"> — missing in PFJ
- PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
- PFJ has <div class="pf-v6-c-toolbar"> — not in PF
- PFJ has <div class="pf-v6-c-toolbar__content"> — not in PF
- PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF

#### Attribute Differences
- aria-label="Global navigation" on <button> — present in PF, absent in PFJ
- aria-label="Horizontal nav default main section example 1" on <section> — present in PF, absent in PFJ
- aria-label="Horizontal nav default main section example 2" on <section> — present in PF, absent in PFJ
- aria-label="Horizontal nav secondary main section example" on <section> — present in PF, absent in PFJ
- tabindex="-1" on <div> — present in PF, absent in PFJ
- aria-disabled="true" on <button> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Global" on <nav> — present in PFJ, absent in PF
- aria-label="Scroll back" on <button> — present in PFJ, absent in PF
- aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="list" on <ul> — present in PFJ, absent in PF
- role="main" on <main> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 20 20`

### Multiple sidebar body elements, padding, and fill

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-m-inset-none` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-page__main-body` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-page__sidebar-main` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-context-selector` on `<div>` — present in PFJ, absent in PF
- `.pf-m-display-inline-on-md` on `<header>` — present in PFJ, absent in PF
- `.pf-m-expanded` on `<aside>` — present in PFJ, absent in PF
- `.pf-m-page-insets` on `<div>` — present in PFJ, absent in PF
- `.pf-m-secondary` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-m-fill pf-m-inset-none pf-v6-c-page__sidebar-body"> — missing in PFJ
- PF has <div class="pf-m-no-fill pf-v6-c-page__sidebar-body"> — missing in PFJ
- PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar-body"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
- PF has <header class="pf-v6-c-masthead"> — missing in PFJ
- PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
- PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-m-context-selector pf-v6-c-page__sidebar-body"> — not in PF
- PFJ has <div class="pf-m-no-fill pf-m-page-insets pf-v6-c-page__sidebar-body"> — not in PF
- PFJ has <div class="pf-m-page-insets pf-v6-c-page__sidebar-body"> — not in PF
- PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
- PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
- PFJ has <section class="pf-m-secondary pf-v6-c-page__main-section"> — not in PF

#### Attribute Differences
- aria-label="Global navigation" on <button> — present in PF, absent in PFJ
- aria-label="Sidebar body layout section" on <section> — present in PF, absent in PFJ
- tabindex="-1" on <div> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PFJ, absent in PF
- aria-hidden="false" on <aside> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="main" on <main> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 32 32`

### Main section padding

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-page__main-body` on `<div>` — present in PF, absent in PFJ
- `.pf-v6-c-page__sidebar-main` on `<div>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-display-inline-on-md` on `<header>` — present in PFJ, absent in PF
- `.pf-m-expanded` on `<aside>` — present in PFJ, absent in PF
- `.pf-m-no-padding-on-md` on `<section>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
- PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
- PF has <header class="pf-v6-c-masthead"> — missing in PFJ
- PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
- PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
- PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
- PFJ has <section class="pf-m-no-padding-on-md pf-v6-c-page__main-section"> — not in PF

#### Attribute Differences
- aria-label="Default padding main section example" on <section> — present in PF, absent in PFJ
- aria-label="Global navigation" on <button> — present in PF, absent in PFJ
- aria-label="No padding main section example" on <section> — present in PF, absent in PFJ
- aria-label="Responsive padding main section example" on <section> — present in PF, absent in PFJ
- tabindex="-1" on <div> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PFJ, absent in PF
- aria-hidden="false" on <aside> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="main" on <main> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 32 32`

### Centered section

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-hamburger` on `<button>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon` on `<svg>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--arrow` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--bottom` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--middle` on `<path>` — present in PF, absent in PFJ
- `.pf-v6-c-button--hamburger-icon--top` on `<path>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-display-inline-on-md` on `<header>` — present in PFJ, absent in PF
- `.pf-m-expanded` on `<aside>` — present in PFJ, absent in PF
- `.pf-v6-c-page__sidebar` on `<aside>` — present in PFJ, absent in PF
- `.pf-v6-c-page__sidebar-body` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
- PF has <header class="pf-v6-c-masthead"> — missing in PFJ
- PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
- PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
- PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
- PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
- PFJ has <div class="pf-v6-c-page__sidebar-body"> — not in PF
- PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF

#### Attribute Differences
- aria-label="Centered section example" on <section> — present in PF, absent in PFJ
- aria-label="Global navigation" on <button> — present in PF, absent in PFJ
- tabindex="-1" on <div> — present in PF, absent in PFJ
- aria-expanded="true" on <button> — present in PFJ, absent in PF
- aria-hidden="false" on <aside> — present in PFJ, absent in PF
- aria-hidden="true" on <svg> — present in PFJ, absent in PF
- aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
- role="img" on <svg> — present in PFJ, absent in PF
- role="main" on <main> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-c-button--hamburger-icon pf-v6-svg` — PF uses viewBox `0 0 10 10`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Add variation:** With or without fill — implement With or without fill variation in PFJ
2. **Add variation:** Main section variations — implement Main section variations variation in PFJ
3. **Add variation:** With dock — implement With dock variation in PFJ
4. **Add variation:** Sticky section dynamic — implement Sticky section dynamic variation in PFJ
5. **Fix CSS:** Vertical nav — add missing class pf-m-hamburger on <button>
6. **Fix CSS:** Vertical nav — add missing class pf-v6-c-button--hamburger-icon on <svg>
7. **Fix CSS:** Vertical nav — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
8. **Fix CSS:** Vertical nav — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
9. **Fix CSS:** Vertical nav — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
10. **Fix CSS:** Vertical nav — add missing class pf-v6-c-button--hamburger-icon--top on <path>
11. **Fix CSS:** Vertical nav — add missing class pf-v6-c-page__main-body on <div>
12. **Fix CSS:** Vertical nav — add missing class pf-v6-c-page__sidebar-main on <div>
13. **Fix structure:** Vertical nav — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
14. **Fix structure:** Vertical nav — PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
15. **Fix structure:** Vertical nav — PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
16. **Fix structure:** Vertical nav — PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
17. **Fix structure:** Vertical nav — PF has <header class="pf-v6-c-masthead"> — missing in PFJ
18. **Fix structure:** Vertical nav — PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
19. **Fix structure:** Vertical nav — PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
20. **Fix structure:** Vertical nav — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
21. **Fix structure:** Vertical nav — PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
22. **Fix structure:** Vertical nav — PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
23. **Fix attribute:** Vertical nav — aria-label="Default main section example 1" on <section> — present in PF, absent in PFJ
24. **Fix attribute:** Vertical nav — aria-label="Default main section example 2" on <section> — present in PF, absent in PFJ
25. **Fix attribute:** Vertical nav — aria-label="Global navigation" on <button> — present in PF, absent in PFJ
26. **Fix attribute:** Vertical nav — aria-label="Multiple main body section example" on <section> — present in PF, absent in PFJ
27. **Fix attribute:** Vertical nav — aria-label="Secondary main section example 1" on <section> — present in PF, absent in PFJ
28. **Fix attribute:** Vertical nav — tabindex="-1" on <div> — present in PF, absent in PFJ
29. **Fix attribute:** Vertical nav — aria-expanded="true" on <button> — present in PFJ, absent in PF
30. **Fix attribute:** Vertical nav — aria-hidden="false" on <aside> — present in PFJ, absent in PF
31. **Fix attribute:** Vertical nav — aria-hidden="true" on <svg> — present in PFJ, absent in PF
32. **Fix attribute:** Vertical nav — aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
33. **Fix attribute:** Vertical nav — role="img" on <svg> — present in PFJ, absent in PF
34. **Fix attribute:** Vertical nav — role="main" on <main> — present in PFJ, absent in PF
35. **Fix icon:** Vertical nav — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 32 32
36. **Fix CSS:** Horizontal nav — add missing class pf-m-hamburger on <button>
37. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-button--hamburger-icon on <svg>
38. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
39. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
40. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
41. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-button--hamburger-icon--top on <path>
42. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-masthead__toggle on <span>
43. **Fix CSS:** Horizontal nav — add missing class pf-v6-c-page__main-body on <div>
44. **Fix structure:** Horizontal nav — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
45. **Fix structure:** Horizontal nav — PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
46. **Fix structure:** Horizontal nav — PF has <header class="pf-v6-c-masthead"> — missing in PFJ
47. **Fix structure:** Horizontal nav — PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
48. **Fix structure:** Horizontal nav — PFJ has <div class="pf-v6-c-toolbar"> — not in PF
49. **Fix structure:** Horizontal nav — PFJ has <div class="pf-v6-c-toolbar__content"> — not in PF
50. **Fix structure:** Horizontal nav — PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
51. **Fix attribute:** Horizontal nav — aria-label="Global navigation" on <button> — present in PF, absent in PFJ
52. **Fix attribute:** Horizontal nav — aria-label="Horizontal nav default main section example 1" on <section> — present in PF, absent in PFJ
53. **Fix attribute:** Horizontal nav — aria-label="Horizontal nav default main section example 2" on <section> — present in PF, absent in PFJ
54. **Fix attribute:** Horizontal nav — aria-label="Horizontal nav secondary main section example" on <section> — present in PF, absent in PFJ
55. **Fix attribute:** Horizontal nav — tabindex="-1" on <div> — present in PF, absent in PFJ
56. **Fix attribute:** Horizontal nav — aria-disabled="true" on <button> — present in PFJ, absent in PF
57. **Fix attribute:** Horizontal nav — aria-hidden="true" on <svg> — present in PFJ, absent in PF
58. **Fix attribute:** Horizontal nav — aria-label="Global" on <nav> — present in PFJ, absent in PF
59. **Fix attribute:** Horizontal nav — aria-label="Scroll back" on <button> — present in PFJ, absent in PF
60. **Fix attribute:** Horizontal nav — aria-label="Scroll forward" on <button> — present in PFJ, absent in PF
61. **Fix attribute:** Horizontal nav — role="img" on <svg> — present in PFJ, absent in PF
62. **Fix attribute:** Horizontal nav — role="list" on <ul> — present in PFJ, absent in PF
63. **Fix attribute:** Horizontal nav — role="main" on <main> — present in PFJ, absent in PF
64. **Fix icon:** Horizontal nav — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 20 20
65. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-m-hamburger on <button>
66. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-m-inset-none on <div>
67. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-button--hamburger-icon on <svg>
68. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
69. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
70. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
71. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-button--hamburger-icon--top on <path>
72. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-page__main-body on <div>
73. **Fix CSS:** Multiple sidebar body elements, padding, and fill — add missing class pf-v6-c-page__sidebar-main on <div>
74. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
75. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-m-fill pf-m-inset-none pf-v6-c-page__sidebar-body"> — missing in PFJ
76. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-m-no-fill pf-v6-c-page__sidebar-body"> — missing in PFJ
77. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
78. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
79. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-v6-c-page__sidebar-body"> — missing in PFJ
80. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
81. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <header class="pf-v6-c-masthead"> — missing in PFJ
82. **Fix structure:** Multiple sidebar body elements, padding, and fill — PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
83. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
84. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
85. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <div class="pf-m-context-selector pf-v6-c-page__sidebar-body"> — not in PF
86. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <div class="pf-m-no-fill pf-m-page-insets pf-v6-c-page__sidebar-body"> — not in PF
87. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <div class="pf-m-page-insets pf-v6-c-page__sidebar-body"> — not in PF
88. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
89. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
90. **Fix structure:** Multiple sidebar body elements, padding, and fill — PFJ has <section class="pf-m-secondary pf-v6-c-page__main-section"> — not in PF
91. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-label="Global navigation" on <button> — present in PF, absent in PFJ
92. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-label="Sidebar body layout section" on <section> — present in PF, absent in PFJ
93. **Fix attribute:** Multiple sidebar body elements, padding, and fill — tabindex="-1" on <div> — present in PF, absent in PFJ
94. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-expanded="true" on <button> — present in PFJ, absent in PF
95. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-hidden="false" on <aside> — present in PFJ, absent in PF
96. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-hidden="true" on <svg> — present in PFJ, absent in PF
97. **Fix attribute:** Multiple sidebar body elements, padding, and fill — aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
98. **Fix attribute:** Multiple sidebar body elements, padding, and fill — role="img" on <svg> — present in PFJ, absent in PF
99. **Fix attribute:** Multiple sidebar body elements, padding, and fill — role="main" on <main> — present in PFJ, absent in PF
100. **Fix icon:** Multiple sidebar body elements, padding, and fill — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 32 32
101. **Fix CSS:** Main section padding — add missing class pf-m-hamburger on <button>
102. **Fix CSS:** Main section padding — add missing class pf-v6-c-button--hamburger-icon on <svg>
103. **Fix CSS:** Main section padding — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
104. **Fix CSS:** Main section padding — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
105. **Fix CSS:** Main section padding — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
106. **Fix CSS:** Main section padding — add missing class pf-v6-c-button--hamburger-icon--top on <path>
107. **Fix CSS:** Main section padding — add missing class pf-v6-c-page__main-body on <div>
108. **Fix CSS:** Main section padding — add missing class pf-v6-c-page__sidebar-main on <div>
109. **Fix structure:** Main section padding — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
110. **Fix structure:** Main section padding — PF has <div class="pf-v6-c-page__main-body"> — missing in PFJ
111. **Fix structure:** Main section padding — PF has <div class="pf-v6-c-page__sidebar"> — missing in PFJ
112. **Fix structure:** Main section padding — PF has <div class="pf-v6-c-page__sidebar-main"> — missing in PFJ
113. **Fix structure:** Main section padding — PF has <header class="pf-v6-c-masthead"> — missing in PFJ
114. **Fix structure:** Main section padding — PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
115. **Fix structure:** Main section padding — PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
116. **Fix structure:** Main section padding — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
117. **Fix structure:** Main section padding — PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
118. **Fix structure:** Main section padding — PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
119. **Fix structure:** Main section padding — PFJ has <section class="pf-m-no-padding-on-md pf-v6-c-page__main-section"> — not in PF
120. **Fix attribute:** Main section padding — aria-label="Default padding main section example" on <section> — present in PF, absent in PFJ
121. **Fix attribute:** Main section padding — aria-label="Global navigation" on <button> — present in PF, absent in PFJ
122. **Fix attribute:** Main section padding — aria-label="No padding main section example" on <section> — present in PF, absent in PFJ
123. **Fix attribute:** Main section padding — aria-label="Responsive padding main section example" on <section> — present in PF, absent in PFJ
124. **Fix attribute:** Main section padding — tabindex="-1" on <div> — present in PF, absent in PFJ
125. **Fix attribute:** Main section padding — aria-expanded="true" on <button> — present in PFJ, absent in PF
126. **Fix attribute:** Main section padding — aria-hidden="false" on <aside> — present in PFJ, absent in PF
127. **Fix attribute:** Main section padding — aria-hidden="true" on <svg> — present in PFJ, absent in PF
128. **Fix attribute:** Main section padding — aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
129. **Fix attribute:** Main section padding — role="img" on <svg> — present in PFJ, absent in PF
130. **Fix attribute:** Main section padding — role="main" on <main> — present in PFJ, absent in PF
131. **Fix icon:** Main section padding — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 32 32
132. **Fix CSS:** Centered section — add missing class pf-m-hamburger on <button>
133. **Fix CSS:** Centered section — add missing class pf-v6-c-button--hamburger-icon on <svg>
134. **Fix CSS:** Centered section — add missing class pf-v6-c-button--hamburger-icon--arrow on <path>
135. **Fix CSS:** Centered section — add missing class pf-v6-c-button--hamburger-icon--bottom on <path>
136. **Fix CSS:** Centered section — add missing class pf-v6-c-button--hamburger-icon--middle on <path>
137. **Fix CSS:** Centered section — add missing class pf-v6-c-button--hamburger-icon--top on <path>
138. **Fix structure:** Centered section — PF has <button class="pf-m-hamburger pf-m-plain pf-v6-c-button"> — missing in PFJ
139. **Fix structure:** Centered section — PF has <header class="pf-v6-c-masthead"> — missing in PFJ
140. **Fix structure:** Centered section — PF has <span class="pf-v6-c-masthead__toggle"> — missing in PFJ
141. **Fix structure:** Centered section — PFJ has <aside class="pf-m-expanded pf-v6-c-page__sidebar"> — not in PF
142. **Fix structure:** Centered section — PFJ has <button class="pf-m-plain pf-v6-c-button"> — not in PF
143. **Fix structure:** Centered section — PFJ has <div class="pf-v6-c-masthead__toggle"> — not in PF
144. **Fix structure:** Centered section — PFJ has <div class="pf-v6-c-page__sidebar-body"> — not in PF
145. **Fix structure:** Centered section — PFJ has <header class="pf-m-display-inline-on-md pf-v6-c-masthead"> — not in PF
146. **Fix attribute:** Centered section — aria-label="Centered section example" on <section> — present in PF, absent in PFJ
147. **Fix attribute:** Centered section — aria-label="Global navigation" on <button> — present in PF, absent in PFJ
148. **Fix attribute:** Centered section — tabindex="-1" on <div> — present in PF, absent in PFJ
149. **Fix attribute:** Centered section — aria-expanded="true" on <button> — present in PFJ, absent in PF
150. **Fix attribute:** Centered section — aria-hidden="false" on <aside> — present in PFJ, absent in PF
151. **Fix attribute:** Centered section — aria-hidden="true" on <svg> — present in PFJ, absent in PF
152. **Fix attribute:** Centered section — aria-label="Global Navigation" on <button> — present in PFJ, absent in PF
153. **Fix attribute:** Centered section — role="img" on <svg> — present in PFJ, absent in PF
154. **Fix attribute:** Centered section — role="main" on <main> — present in PFJ, absent in PF
155. **Fix icon:** Centered section — icon mismatch on pf-v6-c-button--hamburger-icon pf-v6-svg: PF viewBox=0 0 10 10, PFJ viewBox=0 0 32 32
