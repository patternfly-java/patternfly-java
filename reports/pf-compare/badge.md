---
component: badge
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/badge/html
pfj_url: http://localhost:1234/components/badge
completeness:
  pf_total: 3
  pfj_total: 2
  matched: 2
  missing_in_pfj:
    - disabled
  extra_in_pfj: []
---

# PF Compare: badge

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Read | Badge (read) | matched (semantic) |
| 2 | Unread | Badge (unread) | matched (semantic) |
| 3 | Disabled | --- | missing_in_pfj |

## DOM Comparison

### Read

**Status:** ok

No differences found.

### Unread

**Status:** differences_found

#### Missing CSS Classes
- `.pf-v6-screen-reader` on `<span>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <span class="pf-v6-screen-reader"> — missing in PFJ

## Action Items

1. **Add variation:** Disabled — implement Disabled variation in PFJ
2. **Fix CSS:** Unread — add missing class pf-v6-screen-reader on <span>
3. **Fix structure:** Unread — PF has <span class="pf-v6-screen-reader"> — missing in PFJ
