---
component: empty-state
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/empty-state/html
pfj_url: http://localhost:1234/components/empty-state
completeness:
  pf_total: 6
  pfj_total: 8
  matched: 6
  missing_in_pfj: []
  extra_in_pfj:
    - empty-state-spinner
    - empty-state-no-match
---

# PF Compare: empty-state

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | Extra small | Extra small | matched (exact) |
| 3 | Small | Small | matched (exact) |
| 4 | Large | Large | matched (exact) |
| 5 | Extra large | Extra large | matched (exact) |
| 6 | With status | With status | matched (exact) |

### Extra in PFJ (no PF counterpart)

- Spinner (`empty-state-spinner`)
- No match found (`empty-state-no-match`)

## DOM Comparison

### Basic

**Status:** ok

No differences found.

### Extra small

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-small` on `<button>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
- PFJ has <button class="pf-m-link pf-v6-c-button"> — not in PF

### Small

**Status:** ok

No differences found.

### Large

**Status:** ok

No differences found.

### Extra large

**Status:** ok

No differences found.

### With status

**Status:** differences_found

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 512 512`, PFJ uses viewBox `0 0 32 32`

## Action Items

1. **Fix CSS:** Extra small — add missing class pf-m-small on <button>
2. **Fix structure:** Extra small — PF has <button class="pf-m-link pf-m-small pf-v6-c-button"> — missing in PFJ
3. **Fix structure:** Extra small — PFJ has <button class="pf-m-link pf-v6-c-button"> — not in PF
4. **Fix icon:** With status — icon mismatch on pf-v6-svg: PF viewBox=0 0 512 512, PFJ viewBox=0 0 32 32
