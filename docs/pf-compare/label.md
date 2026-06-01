---
component: label
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/label/html
pfj_url: http://localhost:1234/components/label
completeness:
  pf_total: 25
  pfj_total: 10
  matched: 15
  missing_in_pfj:
    - overflow
    - add-label
    - label-group-with-overflow-expanded
    - editable-labels-dynamic-label-group
    - editable-labels-label-active-dynamic-label-group
    - static-labels-dynamic-label-group
    - mixed-labels-static--editable-dynamic-label-group
    - label-group-with-compact-labels
    - label-group-with-compact-labels-and-overflow
    - labels-with-truncation
  extra_in_pfj: []
---

# PF Compare: label

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Filled | Filled labels | matched (exact) |
| 2 | Outline | Filled labels | matched (semantic — PFJ "Filled labels" snippet includes outlined variants too; PFJ id is "label-outlined") |
| 3 | Compact | Compact labels | matched (exact) |
| 4 | Overflow | --- | missing_in_pfj |
| 5 | Editable | Editable labels | matched (exact) |
| 6 | Add label | --- | missing_in_pfj |
| 7 | Basic label group | Basic label group | matched (exact) |
| 8 | Label group with overflow | Label group with overflow | matched (exact) |
| 9 | Label group with overflow expanded | --- | missing_in_pfj |
| 10 | Editable label group with add button | Editable label group | matched (semantic — PFJ editable group includes add button) |
| 11 | Label group with category label | Label group with categories | matched (semantic) |
| 12 | Label group with removable categories | Label group with removable categories | matched (exact) |
| 13 | Vertical label group | Vertical label group | matched (exact) |
| 14 | Vertical label group with overflow | Vertical label group | matched (semantic — PFJ vertical group demo includes overflow) |
| 15 | Vertical label group with overflow expanded | Vertical label group | matched (semantic — PFJ vertical group demo covers expanded state) |
| 16 | Vertical label group with category | Vertical label group | matched (semantic — PFJ vertical group supports categories) |
| 17 | Vertical label group with removable category | Label group with removable categories | matched (semantic — PFJ removable categories demo covers vertical) |
| 18 | Editable labels, dynamic label group | --- | missing_in_pfj |
| 19 | Editable labels, label active, dynamic label group | --- | missing_in_pfj |
| 20 | Static labels, dynamic label group | --- | missing_in_pfj |
| 21 | Mixed labels (static / editable), dynamic label group | --- | missing_in_pfj |
| 22 | Label group with compact labels | --- | missing_in_pfj |
| 23 | Label group with compact labels and overflow | --- | missing_in_pfj |
| 24 | Vertical label group with compact labels | --- | missing_in_pfj |
| 25 | Labels with truncation | --- | missing_in_pfj |

## DOM Comparison

### Filled / Filled labels

**Status:** ok — Both render `<span>` with `pf-v6-c-label` class. Color variants use `pf-m-blue`, `pf-m-green`, `pf-m-orange`, `pf-m-red`, `pf-m-purple`, `pf-m-teal`, `pf-m-yellow`. Both support icons, close buttons, and clickable labels.

### Outline / Filled labels (outlined)

**Status:** ok — Both apply `pf-m-outline` modifier to label elements.

### Compact / Compact labels

**Status:** ok — Both apply `pf-m-compact` modifier to label elements.

### Overflow

**Status:** missing_in_pfj — PF shows a standalone overflow label using `pf-m-overflow` modifier that acts as a toggle button to show/hide additional labels. This is distinct from the label group overflow mechanism.

### Editable / Editable labels

**Status:** ok — Both support editable labels with `pf-m-editable` modifier and `contenteditable` on the label text.

### Add label

**Status:** missing_in_pfj — PF shows a standalone "Add label" button styled as a label with `pf-m-add` modifier.

### Basic label group / Basic label group

**Status:** ok — Both render `pf-v6-c-label-group` with `pf-v6-c-label-group__list` containing label items.

### Label group with overflow / Label group with overflow

**Status:** ok — Both use an overflow item in the label group list to toggle visibility of additional labels.

### Label group with overflow expanded

**Status:** missing_in_pfj — PF shows the expanded state of a label group with overflow, where all labels are visible.

### Editable label group with add button / Editable label group

**Status:** ok — Both show an editable label group with an add button for adding new labels.

### Label group with category label / Label group with categories

**Status:** ok — Both use `pf-v6-c-label-group__label` for the category name.

### Label group with removable categories / Label group with removable categories

**Status:** ok — Both include a close button on the label group for removing the entire category.

### Vertical label group / Vertical label group

**Status:** ok — Both apply `pf-m-vertical` modifier to the label group.

### Editable labels, dynamic label group

**Status:** missing_in_pfj — PF shows dynamic label groups where editable labels can be added, removed, and modified in real time.

### Static labels, dynamic label group

**Status:** missing_in_pfj — PF shows dynamic label groups with non-editable (static) labels.

### Mixed labels (static / editable), dynamic label group

**Status:** missing_in_pfj — PF shows a dynamic label group containing both static and editable labels.

### Label group with compact labels

**Status:** missing_in_pfj — PF shows label groups where all labels use `pf-m-compact` modifier.

### Label group with compact labels and overflow

**Status:** missing_in_pfj — PF shows compact label groups with overflow toggle.

### Labels with truncation

**Status:** missing_in_pfj — PF shows labels with `pf-m-truncated` modifier and `--pf-v6-c-label-group--m-truncated--MaxWidth` CSS variable to truncate long label text.

## Action Items

1. **Add variation:** Overflow — implement standalone overflow label with `pf-m-overflow` modifier
2. **Add variation:** Add label — implement standalone "Add label" button with `pf-m-add` modifier
3. **Add variation:** Label group with overflow expanded — add demo showing expanded state of overflow label group
4. **Add variation:** Editable labels, dynamic label group — add interactive demo with add/remove/edit label functionality
5. **Add variation:** Static labels, dynamic label group — add interactive demo with static labels in dynamic group
6. **Add variation:** Mixed labels (static / editable), dynamic label group — add interactive demo with mixed label types
7. **Add variation:** Label group with compact labels — add demo showing compact labels in a group
8. **Add variation:** Label group with compact labels and overflow — add demo showing compact labels with overflow toggle
9. **Add variation:** Vertical label group with compact labels — add demo showing compact labels in vertical layout
10. **Add variation:** Labels with truncation — implement `pf-m-truncated` modifier and `--pf-v6-c-label-group--m-truncated--MaxWidth` CSS variable support
