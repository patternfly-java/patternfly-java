---
component: expandable-section
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/expandable-section/html
pfj_url: http://localhost:1234/components/expandable-section
completeness:
  pf_total: 9
  pfj_total: 8
  matched: 9
  missing_in_pfj: []
  extra_in_pfj:
    - es-dynamic-text
    - es-custom-toggle
---

# PF Compare: expandable-section

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Hidden | Basic | matched (semantic — PFJ "Basic" shows the collapsed/hidden state) |
| 2 | Expanded | Basic | matched (semantic — PFJ "Basic" toggles to expanded state) |
| 3 | Indented | Indented | matched (exact) |
| 4 | Disclosure variation (hidden) | Disclosure variation | matched (semantic — PFJ combines hidden/expanded disclosure states) |
| 5 | Disclosure variation (expanded) | Disclosure variation | matched (semantic — PFJ combines hidden/expanded disclosure states) |
| 6 | Disclosure variation (indented) | Indented | matched (semantic — PFJ indented demo covers disclosure indented variant) |
| 7 | Detached | Detached (before) / Detached (after) | matched (semantic — PFJ splits detached into before and after) |
| 8 | Truncate expansion (hidden) | Truncate | matched (semantic — PFJ "Truncate" covers hidden state) |
| 9 | Truncate expansion (expanded) | Truncate | matched (semantic — PFJ "Truncate" covers expanded state) |
| -- | --- | Basic with dynamic toggle text | extra_in_pfj |
| -- | --- | With custom toggle content | extra_in_pfj |

## Action Items

### No missing variations

All 9 PF variations are covered by PFJ snippets.

### Extra PFJ snippets (2)

These PFJ snippets go beyond the PF HTML examples:

1. **Basic with dynamic toggle text** (`es-dynamic-text`) — Demonstrates changing toggle text dynamically based on expand/collapse state. This is a valid PFJ-specific enhancement, no action needed.
2. **With custom toggle content** (`es-custom-toggle`) — Shows custom content in the toggle area (e.g., badges, icons). This is a valid PFJ-specific enhancement, no action needed.
