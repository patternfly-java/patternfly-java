# Report Template

Use this template when generating the comparison report in Step 7.

```markdown
---
component: <COMPONENT>
date: <YYYY-MM-DD>
pf_version: <PF_VERSION>
pf_url: <PF_URL>
pfj_url: <PFJ_URL>
completeness:
  pf_total: <N>
  pfj_total: <M>
  matched: <K>
  missing_in_pfj:
    - slug1
    - slug2
  extra_in_pfj:
    - id1
---

# PF Compare: <COMPONENT>

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | PF title | PFJ title | matched |
| 2 | PF title | --- | missing_in_pfj |

## DOM Comparison

### <Variation Title>

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-xxx` on `<element>` — present in PF, absent in PFJ

#### Extra CSS Classes
- `.pf-m-xxx` on `<element>` — present in PFJ, absent in PF

#### Structural Differences
- description

#### Attribute Differences
- description

## Action Items

1. **Add variation:** title — implement this PF variation in PFJ
2. **Fix CSS:** variation — add missing class `.pf-m-xxx`
3. **Fix structure:** variation — description
4. **Fix attribute:** variation — description
```
