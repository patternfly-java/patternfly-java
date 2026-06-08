---
component: content
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/content/html
pfj_url: http://localhost:1234/components/content
completeness:
  pf_total: 4
  pfj_total: 8
  matched: 2
  missing_in_pfj:
    - basic
    - long-formeditorial-content-in-content-wrapper
  extra_in_pfj:
    - content-headings
    - content-body
    - content-ul
    - content-ol
    - content-plain-list
    - content-dl
---

# PF Compare: content

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Plain HTML in content wrapper | Content as wrapper | matched (semantic) |
| 2 | Long-form/editorial content | Editorial content | matched (semantic) |
| 3 | Basic | --- | missing_in_pfj |
| 4 | Long-form/editorial content in content wrapper | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Headings (`content-headings`)
- Body (`content-body`)
- Unordered list (`content-ul`)
- Ordered list (`content-ol`)
- Plain list (`content-plain-list`)
- Description list (`content-dl`)

## DOM Comparison

### Plain HTML in content wrapper

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-page-title` on `<h1>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<ol>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-content--p` on `<p>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-plain"> — missing in PFJ
- PF has <h1 class="pf-m-page-title"> — missing in PFJ
- PF has <ol class="pf-m-plain"> — missing in PFJ
- PFJ has <p class="pf-v6-c-content--p"> — not in PF

### Long-form/editorial content

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-page-title` on `<h1>` — present in PF, absent in PFJ
- `.pf-m-plain` on `<ol>` — present in PF, absent in PFJ
- `.pf-v6-c-content--a` on `<a>` — present in PF, absent in PFJ
- `.pf-v6-c-content--blockquote` on `<blockquote>` — present in PF, absent in PFJ
- `.pf-v6-c-content--dd` on `<dd>` — present in PF, absent in PFJ
- `.pf-v6-c-content--dl` on `<dl>` — present in PF, absent in PFJ
- `.pf-v6-c-content--dt` on `<dt>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h2` on `<h2>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h3` on `<h3>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h4` on `<h4>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h5` on `<h5>` — present in PF, absent in PFJ
- `.pf-v6-c-content--h6` on `<h6>` — present in PF, absent in PFJ
- `.pf-v6-c-content--hr` on `<hr>` — present in PF, absent in PFJ
- `.pf-v6-c-content--li` on `<li>` — present in PF, absent in PFJ
- `.pf-v6-c-content--ol` on `<ol>` — present in PF, absent in PFJ
- `.pf-v6-c-content--small` on `<small>` — present in PF, absent in PFJ
- `.pf-v6-c-content--ul` on `<ul>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-v6-c-content` on `<div>` — present in PFJ, absent in PF

#### Structural Differences
- PF has <a class="pf-m-editorial pf-m-plain pf-v6-c-content--a"> — missing in PFJ
- PF has <a class="pf-m-editorial pf-v6-c-content--a"> — missing in PFJ
- PF has <blockquote class="pf-m-editorial pf-v6-c-content--blockquote"> — missing in PFJ
- PF has <dd class="pf-m-editorial pf-v6-c-content--dd"> — missing in PFJ
- PF has <dl class="pf-m-editorial pf-v6-c-content--dl"> — missing in PFJ
- PF has <dt class="pf-m-editorial pf-v6-c-content--dt"> — missing in PFJ
- PF has <h1 class="pf-m-editorial pf-m-page-title pf-v6-c-content--h1"> — missing in PFJ
- PF has <h2 class="pf-m-editorial pf-v6-c-content--h2"> — missing in PFJ
- PF has <h3 class="pf-m-editorial pf-v6-c-content--h3"> — missing in PFJ
- PF has <h4 class="pf-m-editorial pf-v6-c-content--h4"> — missing in PFJ
- PF has <h5 class="pf-m-editorial pf-v6-c-content--h5"> — missing in PFJ
- PF has <h6 class="pf-m-editorial pf-v6-c-content--h6"> — missing in PFJ
- PF has <hr class="pf-m-editorial pf-v6-c-content--hr"> — missing in PFJ
- PF has <li class="pf-m-editorial pf-v6-c-content--li"> — missing in PFJ
- PF has <ol class="pf-m-editorial pf-m-plain pf-v6-c-content--ol"> — missing in PFJ
- PF has <ol class="pf-m-editorial pf-v6-c-content--ol"> — missing in PFJ
- PF has <p class="pf-m-editorial pf-v6-c-content--p"> — missing in PFJ
- PF has <small class="pf-m-editorial pf-v6-c-content--small"> — missing in PFJ
- PF has <ul class="pf-m-editorial pf-v6-c-content--ul"> — missing in PFJ
- PFJ has <div class="pf-m-editorial pf-v6-c-content"> — not in PF
- PFJ has <h1 class="pf-v6-c-content--h1"> — not in PF
- PFJ has <p class="pf-v6-c-content--p"> — not in PF

## Action Items

1. **Add variation:** Basic — implement Basic variation in PFJ
2. **Add variation:** Long-form/editorial content in content wrapper — implement Long-form/editorial content in content wrapper variation in PFJ
3. **Fix CSS:** Plain HTML in content wrapper — add missing class pf-m-page-title on <h1>
4. **Fix CSS:** Plain HTML in content wrapper — add missing class pf-m-plain on <ol>
5. **Fix structure:** Plain HTML in content wrapper — PF has <a class="pf-m-plain"> — missing in PFJ
6. **Fix structure:** Plain HTML in content wrapper — PF has <h1 class="pf-m-page-title"> — missing in PFJ
7. **Fix structure:** Plain HTML in content wrapper — PF has <ol class="pf-m-plain"> — missing in PFJ
8. **Fix structure:** Plain HTML in content wrapper — PFJ has <p class="pf-v6-c-content--p"> — not in PF
9. **Fix CSS:** Long-form/editorial content — add missing class pf-m-page-title on <h1>
10. **Fix CSS:** Long-form/editorial content — add missing class pf-m-plain on <ol>
11. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--a on <a>
12. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--blockquote on <blockquote>
13. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--dd on <dd>
14. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--dl on <dl>
15. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--dt on <dt>
16. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--h2 on <h2>
17. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--h3 on <h3>
18. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--h4 on <h4>
19. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--h5 on <h5>
20. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--h6 on <h6>
21. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--hr on <hr>
22. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--li on <li>
23. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--ol on <ol>
24. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--small on <small>
25. **Fix CSS:** Long-form/editorial content — add missing class pf-v6-c-content--ul on <ul>
26. **Fix structure:** Long-form/editorial content — PF has <a class="pf-m-editorial pf-m-plain pf-v6-c-content--a"> — missing in PFJ
27. **Fix structure:** Long-form/editorial content — PF has <a class="pf-m-editorial pf-v6-c-content--a"> — missing in PFJ
28. **Fix structure:** Long-form/editorial content — PF has <blockquote class="pf-m-editorial pf-v6-c-content--blockquote"> — missing in PFJ
29. **Fix structure:** Long-form/editorial content — PF has <dd class="pf-m-editorial pf-v6-c-content--dd"> — missing in PFJ
30. **Fix structure:** Long-form/editorial content — PF has <dl class="pf-m-editorial pf-v6-c-content--dl"> — missing in PFJ
31. **Fix structure:** Long-form/editorial content — PF has <dt class="pf-m-editorial pf-v6-c-content--dt"> — missing in PFJ
32. **Fix structure:** Long-form/editorial content — PF has <h1 class="pf-m-editorial pf-m-page-title pf-v6-c-content--h1"> — missing in PFJ
33. **Fix structure:** Long-form/editorial content — PF has <h2 class="pf-m-editorial pf-v6-c-content--h2"> — missing in PFJ
34. **Fix structure:** Long-form/editorial content — PF has <h3 class="pf-m-editorial pf-v6-c-content--h3"> — missing in PFJ
35. **Fix structure:** Long-form/editorial content — PF has <h4 class="pf-m-editorial pf-v6-c-content--h4"> — missing in PFJ
36. **Fix structure:** Long-form/editorial content — PF has <h5 class="pf-m-editorial pf-v6-c-content--h5"> — missing in PFJ
37. **Fix structure:** Long-form/editorial content — PF has <h6 class="pf-m-editorial pf-v6-c-content--h6"> — missing in PFJ
38. **Fix structure:** Long-form/editorial content — PF has <hr class="pf-m-editorial pf-v6-c-content--hr"> — missing in PFJ
39. **Fix structure:** Long-form/editorial content — PF has <li class="pf-m-editorial pf-v6-c-content--li"> — missing in PFJ
40. **Fix structure:** Long-form/editorial content — PF has <ol class="pf-m-editorial pf-m-plain pf-v6-c-content--ol"> — missing in PFJ
41. **Fix structure:** Long-form/editorial content — PF has <ol class="pf-m-editorial pf-v6-c-content--ol"> — missing in PFJ
42. **Fix structure:** Long-form/editorial content — PF has <p class="pf-m-editorial pf-v6-c-content--p"> — missing in PFJ
43. **Fix structure:** Long-form/editorial content — PF has <small class="pf-m-editorial pf-v6-c-content--small"> — missing in PFJ
44. **Fix structure:** Long-form/editorial content — PF has <ul class="pf-m-editorial pf-v6-c-content--ul"> — missing in PFJ
45. **Fix structure:** Long-form/editorial content — PFJ has <div class="pf-m-editorial pf-v6-c-content"> — not in PF
46. **Fix structure:** Long-form/editorial content — PFJ has <h1 class="pf-v6-c-content--h1"> — not in PF
47. **Fix structure:** Long-form/editorial content — PFJ has <p class="pf-v6-c-content--p"> — not in PF
