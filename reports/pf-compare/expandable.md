---
component: expandable-section
date: 2026-07-07
pf_version: Release 6.6.0
pf_url: https://www.patternfly.org/components/expandable-section
pfj_url: http://localhost:1234/components/expandable-section
sections:
  pf_count: 10
  pfj_count: 8
  matched: 7
  missing_in_pfj:
    - Uncontrolled
    - Uncontrolled with dynamic toggle content (function)
    - With heading semantics
  extra_in_pfj:
    - Detached (after)
---

# PF Compare: expandable-section

## Section Coverage

| # | PF Section | PFJ Section | Group | Status |
|---|------------|-------------|-------|--------|
| 1 | Basic | Basic | Examples | matched |
| 2 | Uncontrolled | --- | Examples | missing_in_pfj |
| 3 | Uncontrolled with dynamic toggle text | Basic with dynamic toggle text | Examples | semantic_match |
| 4 | Uncontrolled with dynamic toggle content (function) | --- | Examples | missing_in_pfj |
| 5 | Detached | Detached (before) | Examples | semantic_match |
| 6 | --- | Detached (after) | Examples | extra_in_pfj |
| 7 | Disclosure variation | Disclosure variation | Examples | matched |
| 8 | Indented expandable content | Indented | Examples | semantic_match |
| 9 | With custom toggle content | With custom toggle content | Examples | matched |
| 10 | With heading semantics | --- | Examples | missing_in_pfj |
| 11 | Truncate expansion | Truncate | Examples | semantic_match |

## DOM Differences

### Basic

**Status:** differences_found

#### P2: Modifier Differences
- PFJ `<button>` has extra class `pf-v6-c-expandable-section__toggle` alongside `pf-v6-c-button`. PF only has `pf-v6-c-button` on the button; the `__toggle` class is on the wrapper `<div>`.

#### P4: Icon Differences
- Toggle icon: PF viewBox `0 0 20 20` (chevron-down), PFJ viewBox `0 0 32 32` (caret-right with CSS rotation)

### Basic with dynamic toggle text

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.

#### P4: Icon Differences
- Same as Basic: PF viewBox `0 0 20 20`, PFJ viewBox `0 0 32 32`.

### Detached

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.

#### P4: Icon Differences
- Same as Basic: PF viewBox `0 0 20 20`, PFJ viewBox `0 0 32 32`.

### Disclosure variation

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.
- Root modifiers `pf-m-display-lg pf-m-limit-width` match correctly.

#### P4: Icon Differences
- Same as Basic: PF viewBox `0 0 20 20`, PFJ viewBox `0 0 32 32`.

### Indented

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.
- Root `pf-m-indented` modifier matches correctly.

#### P4: Icon Differences
- Same as Basic: PF viewBox `0 0 20 20`, PFJ viewBox `0 0 32 32`.

#### P5: Cosmetic Differences
- PF demo shows expanded state (`pf-m-expanded`) with a checkbox to toggle `displaySize`. PFJ shows collapsed state without checkbox. This is a showcase layout difference only.

### With custom toggle content

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.

#### P4: Icon Differences
- Toggle icon: PF viewBox `0 0 20 20`, PFJ viewBox `0 0 32 32`.
- Check-circle icon inside toggle content: Both use viewBox `0 0 32 32` — OK.
- Badge `pf-v6-c-badge pf-m-read` — matches correctly.

#### P5: Cosmetic Differences
- PF wraps in `pf-v6-l-stack` with an accessibility note section. PFJ shows only the expandable section without the note. This is showcase layout only.

### Truncate

**Status:** differences_found

#### P2: Modifier Differences
- Same as Basic: PFJ button has extra `pf-v6-c-expandable-section__toggle` class.
- PFJ root has extra `pf-m-expand-top` modifier not present in PF. PF achieves content-first order through DOM ordering alone.
- Button `pf-m-inline pf-m-link` modifiers match correctly.

## Action Items

1. **[P1] Add section: Uncontrolled** — PF has an "Uncontrolled" demo showing controlled state management. Add equivalent PFJ demo or document why it's not applicable.
2. **[P1] Add section: Uncontrolled with dynamic toggle content (function)** — PF shows a `toggleContent` function that receives expanded state and returns dynamic JSX. Evaluate whether PFJ needs an equivalent callback-based API for dynamic toggle content.
3. **[P1] Add section: With heading semantics** — PF uses `toggleWrapper` prop to wrap the toggle button in a heading element (h1-h6) for document structure. PFJ should support this for accessibility.
4. **[P2] Fix toggle button class** — PFJ button has extra `pf-v6-c-expandable-section__toggle` class. PF only applies this class to the wrapper `<div>`, not the `<button>` itself. Remove the extra class from the button element. Affects all sections.
5. **[P2] Fix truncate modifier** — PFJ truncate adds `pf-m-expand-top` on the root element. PF truncate does not use this modifier. Remove it if not required by CSS.
6. **[P4] Fix toggle icon** — PFJ uses caret-right (viewBox `0 0 32 32`) while PF uses chevron-down (viewBox `0 0 20 20`). This reflects a Red Hat vs FontAwesome icon set difference. Affects all sections with toggle icons.
