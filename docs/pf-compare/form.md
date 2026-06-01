---
component: form
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/forms/form/html
pfj_url: http://localhost:1234/components/forms/form
completeness:
  pf_total: 10
  pfj_total: 10
  matched: 7
  missing_in_pfj:
    - help-text
    - label-with-additional-info
    - label-with-additional-info-horizontal-form
  extra_in_pfj:
    - form-lw
    - form-invalid
    - form-invalid-alert
    - form-hzs-npt
    - form-hzs-hot
    - form-grid
---

# PF Compare: form

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Vertically aligned labels | Basic | matched (semantic — PFJ "Basic" uses vertical/default label alignment) |
| 2 | Horizontally aligned labels | Horizontal | matched (semantic — PFJ "Horizontal" demonstrates horizontal label alignment) |
| 3 | Horizontal layout at a custom breakpoint | Horizontal | matched (semantic — PFJ "Horizontal" covers custom breakpoint layout) |
| 4 | Form sections | Form sections | matched (exact) |
| 5 | Help text | --- | missing_in_pfj |
| 6 | Label with additional info | --- | missing_in_pfj |
| 7 | Label with additional info (horizontal form) | --- | missing_in_pfj |
| 8 | Action group | Basic | matched (semantic — PFJ "Basic" includes action group with submit/cancel buttons) |
| 9 | Field group (non-expandable) | Field groups | matched (semantic — PFJ "Field groups" covers non-expandable field groups) |
| 10 | Expandable and nested field groups | Field groups | matched (semantic — PFJ "Field groups" covers expandable and nested field groups) |
| -- | --- | Limit width | extra_in_pfj |
| -- | --- | Invalid | extra_in_pfj |
| -- | --- | Invalid with form alert | extra_in_pfj |
| -- | --- | Horizontal stacked no padding top | extra_in_pfj |
| -- | --- | Horizontal stacked helper text on top | extra_in_pfj |
| -- | --- | Form grid | extra_in_pfj |

## Action Items

### Missing PF variations (3)

1. **Help text** (`help-text`) — PF demonstrates form fields with helper text items (default, warning, error states). PFJ may already support helper text via the helper-text component but lacks a dedicated form-level demo. **Action:** Add a "Help text" snippet showing form fields with helper text in various states.

2. **Label with additional info** (`label-with-additional-info`) — PF shows form labels with additional info popover (info icon next to label). **Action:** Add a snippet demonstrating form labels with popover-based additional info.

3. **Label with additional info (horizontal form)** (`label-with-additional-info-horizontal-form`) — Same as above but in horizontal form layout. **Action:** Add a snippet showing label additional info in horizontal layout.

### Extra PFJ snippets (6)

These PFJ snippets go beyond the PF HTML examples:

1. **Limit width** (`form-lw`) — Shows `limitWidth()` modifier. Valid PFJ enhancement.
2. **Invalid** (`form-invalid`) — Shows form validation states. Valid PFJ enhancement.
3. **Invalid with form alert** (`form-invalid-alert`) — Shows form-level alert for validation. Valid PFJ enhancement.
4. **Horizontal stacked no padding top** (`form-hzs-npt`) — Shows horizontal stacked layout variant. Valid PFJ enhancement.
5. **Horizontal stacked helper text on top** (`form-hzs-hot`) — Shows helper text positioning variant. Valid PFJ enhancement.
6. **Form grid** (`form-grid`) — Shows grid-based form layout. Valid PFJ enhancement.
