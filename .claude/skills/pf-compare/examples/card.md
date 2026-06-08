---
component: card
date: 2026-06-08
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/card
pfj_url: http://localhost:1234/components/card
sections:
  pf_count: 22
  pfj_count: 7
  matched: 6
  missing_in_pfj:
    - Card with subtitle and Actions
    - Modifiers
    - Header images and actions
    - Title inline with images and actions
    - Card header without title
    - Card with header that wraps
    - With HTML heading element
    - With multiple body sections
    - With a primary body section that fills
    - Selectable
    - Single selectable
    - Actionable
    - Actionable and selectable
    - Expandable cards
    - Expandable with icon
    - Card with dividers
  extra_in_pfj: []
---

# PF Compare: card

## Section Coverage

| # | PF Section | PFJ Section | Group | Status |
|---|------------|-------------|-------|--------|
| 1 | Basic cards | Basic card | Examples | matched |
| 2 | Card with subtitle | Card with subtitle | Examples | matched |
| 3 | Card with subtitle and Actions | --- | Examples | missing_in_pfj |
| 4 | Secondary cards | Secondary card | Examples | matched |
| 5 | Modifiers | --- | Examples | missing_in_pfj |
| ... | ... | ... | ... | ... |

## DOM Differences

### Basic cards

**Status:** ok

### Card with subtitle

**Status:** differences_found

#### P2: Modifier Differences
- `pf-m-no-fill` on `div.pf-v6-c-card__body`: present in PF, absent in PFJ

## Action Items

1. **[P1] Add variation:** Card with subtitle and Actions — implement card header with actions dropdown
2. **[P1] Add variation:** Modifiers — implement modifier showcase (compact, flat, rounded, etc.)
3. **[P2] Fix CSS:** Card body no-fill — add `pf-m-no-fill` modifier support to card body
