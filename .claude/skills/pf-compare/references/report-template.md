# Report Template

Use this template when generating the markdown comparison report. A companion JSON file (`<COMPONENT>.json`) is written alongside this markdown report using the schema from `report-schema.json`.

```markdown
---
component: <COMPONENT>
date: <YYYY-MM-DD>
pf_version: <PF_VERSION>
pf_url: <PF_URL>
pfj_url: <PFJ_URL>
sections:
  pf_count: <N>
  pfj_count: <M>
  matched: <K>
  missing_in_pfj:
    - title1
    - title2
  extra_in_pfj:
    - title1
---

# PF Compare: <COMPONENT>

## Section Coverage

| # | PF Section | PFJ Section | Group | Status |
|---|------------|-------------|-------|--------|
| 1 | PF title | PFJ title | Examples | matched |
| 2 | PF title | --- | Examples | missing_in_pfj |

## DOM Differences

### <Section Title>

**Status:** ok | differences_found

#### P1: Missing Component Elements
- `pf-v6-c-button__icon` — present in PF, absent in PFJ

#### P2: Modifier Differences
- `pf-m-danger` on `<button>` — present in PF, absent in PFJ

#### P3: Attribute Differences
- Plain button: PF has `aria-label="Remove"`, PFJ has none

#### P4: Icon Differences
- CTA link button: PF viewBox `0 0 32 32`, PFJ viewBox `0 0 512 512`

#### P5: Cosmetic Differences
- PF shows 20 elements, PFJ shows 16 (different showcase layout)

## Action Items

1. **[P1] Add variation:** title — description
2. **[P2] Fix CSS:** title — description
3. **[P3] Fix attribute:** title — description
4. **[P4] Fix icon:** title — description
5. **[P5] Cosmetic:** title — description (low priority)
```
