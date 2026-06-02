---
component: toggle-group
date: 2026-06-02
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/toggle-group/html
pfj_url: http://localhost:1234/components/toggle-group
completeness:
  pf_total: 5
  pfj_total: 5
  matched: 2
  missing_in_pfj:
    - default
    - icon-and-text
    - full-width-toggle
  extra_in_pfj:
    - toggle-group-single
    - toggle-group-multiple
    - toggle-group-text-icon
---

# PF Compare: toggle-group

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | With icon | With icons | matched (semantic) |
| 2 | Compact | Compact toggle group | matched (semantic) |
| 3 | Default | --- | missing_in_pfj |
| 4 | Icon-and-text | --- | missing_in_pfj |
| 5 | Full width toggle | --- | missing_in_pfj |

### Extra in PFJ (no PF counterpart)

- Single select toggle group (`toggle-group-single`)
- Multi select toggle group (`toggle-group-multiple`)
- With text and icons (`toggle-group-text-icon`)

## DOM Comparison

### With icon

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-selected` on `<button>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — missing in PFJ

#### Attribute Differences
- aria-label="Copy button" on <button> — present in PF, absent in PFJ
- aria-label="Share button" on <button> — present in PF, absent in PFJ
- aria-label="Undo button" on <button> — present in PF, absent in PFJ
- aria-pressed="false" on <button> — present in PFJ, absent in PF
- role="group" on <div> — present in PFJ, absent in PF

#### Icon Differences
- `pf-v6-svg` — PF uses viewBox `0 0 32 32`, PFJ uses viewBox `0 0 448 512`

### Compact

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-selected` on `<button>` — present in PF, absent in PFJ

#### Structural Differences
- PF has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — missing in PFJ

#### Attribute Differences
- aria-pressed="false" on <button> — present in PFJ, absent in PF
- role="group" on <div> — present in PFJ, absent in PF

## Action Items

1. **Add variation:** Default — implement Default variation in PFJ
2. **Add variation:** Icon-and-text — implement Icon-and-text variation in PFJ
3. **Add variation:** Full width toggle — implement Full width toggle variation in PFJ
4. **Fix CSS:** With icon — add missing class pf-m-selected on <button>
5. **Fix structure:** With icon — PF has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — missing in PFJ
6. **Fix attribute:** With icon — aria-label="Copy button" on <button> — present in PF, absent in PFJ
7. **Fix attribute:** With icon — aria-label="Share button" on <button> — present in PF, absent in PFJ
8. **Fix attribute:** With icon — aria-label="Undo button" on <button> — present in PF, absent in PFJ
9. **Fix attribute:** With icon — aria-pressed="false" on <button> — present in PFJ, absent in PF
10. **Fix attribute:** With icon — role="group" on <div> — present in PFJ, absent in PF
11. **Fix icon:** With icon — icon mismatch on pf-v6-svg: PF viewBox=0 0 32 32, PFJ viewBox=0 0 448 512
12. **Fix CSS:** Compact — add missing class pf-m-selected on <button>
13. **Fix structure:** Compact — PF has <button class="pf-m-selected pf-v6-c-toggle-group__button"> — missing in PFJ
14. **Fix attribute:** Compact — aria-pressed="false" on <button> — present in PFJ, absent in PF
15. **Fix attribute:** Compact — role="group" on <div> — present in PFJ, absent in PF
