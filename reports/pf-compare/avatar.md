---
component: avatar
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/avatar/html
pfj_url: http://localhost:1234/components/avatar
completeness:
  pf_total: 6
  pfj_total: 3
  matched: 2
  missing_in_pfj:
    - small
    - medium
    - large
    - extra-large
  extra_in_pfj:
    - avatar-size
---

# PF Compare: avatar

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Bordered | Bordered | matched (exact) |
| 3 | Small | --- | missing_in_pfj |
| 4 | Medium | --- | missing_in_pfj |
| 5 | Large | --- | missing_in_pfj |
| 6 | Extra large | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Size variations (`avatar-size`)

## DOM Comparison

### Basic

**Status:** ok

No differences found.

### Bordered

**Status:** ok

No differences found.

## Action Items

1. **Add variation:** Small — implement Small variation in PFJ
2. **Add variation:** Medium — implement Medium variation in PFJ
3. **Add variation:** Large — implement Large variation in PFJ
4. **Add variation:** Extra large — implement Extra large variation in PFJ
