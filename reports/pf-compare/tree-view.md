---
component: tree-view
date: 2026-06-25
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/tree-view
pfj_url: http://localhost:1234/components/tree-view
sections:
  pf_count: 14
  pfj_count: 6
  matched: 5
  missing_in_pfj:
    - Multiselectable
    - With search
    - With unique icon per item
    - With badges
    - With custom badges
    - With action items
    - Compact
    - Compact, no background
    - With memoization
  extra_in_pfj:
    - Async items
---

# PF Compare: tree-view

## Section Coverage

| # | PF Section | PFJ Section | Group | Status |
|---|------------|-------------|-------|--------|
| 1 | Single selectable | Default | Examples | matched (semantic) |
| 2 | Multiselectable | --- | Examples | missing_in_pfj |
| 3 | With separate selection and expansion | With separate selection and expansion | Examples | matched |
| 4 | With search | --- | Examples | missing_in_pfj |
| 5 | With checkboxes | With checkboxes | Examples | matched |
| 6 | With icons | With icons | Examples | matched |
| 7 | With unique icon per item | --- | Examples | missing_in_pfj |
| 8 | With badges | --- | Examples | missing_in_pfj |
| 9 | With custom badges | --- | Examples | missing_in_pfj |
| 10 | With action items | --- | Examples | missing_in_pfj |
| 11 | Guides | Guides | Examples | matched |
| 12 | Compact | --- | Examples | missing_in_pfj |
| 13 | Compact, no background | --- | Examples | missing_in_pfj |
| 14 | With memoization | --- | Examples | missing_in_pfj |
| — | --- | Async items | Examples | extra_in_pfj |

## DOM Differences

### Single selectable / Default

**Status:** differences_found

#### ~~P1: Missing Component Elements~~ — FALSE POSITIVE
- ~~`div.pf-v6-c-tree-view` wrapper~~ — PFJ does have this wrapper (`TreeView` constructor line 106). The comparison flagged it because `[data-pfj-demo]` captured only the inner `<ul>`, not the outer `<div>`.

#### P3: Attribute Differences
- Tree `<ul>`: PF has `aria-multiselectable="false"`; PFJ does not set this attribute
- Tree `<ul>`: PF has `aria-label="Tree View single selectable example"`; PFJ has `ariaLabel()` method but it sets label on the wrapper `<div>`, not on the `<ul role="tree">`
- Tree items `<li>`: PF has `aria-selected="false"`; PFJ does not set `aria-selected`
- Node `<button class="pf-v6-c-tree-view__node">`: PF has `type="button"`; PFJ omits `type` (browser defaults to `submit`)
- Toggle `<span class="pf-v6-c-tree-view__node-toggle">`: PF has `tabindex="-1"`; PFJ omits `tabindex` (only in `default_` case; `selectableItems` and `checkboxes` use `<button>` which already has `tabindex="-1"`)

#### ~~P4: Icon Differences~~ — FIXED
- ~~Toggle icon SVG~~ — Fixed: changed from `caretRight()` to `rhMicrons.caretDown()` to match PF's icon (viewBox `0 0 20 20`)

### With separate selection and expansion

**Status:** differences_found

#### P3: Attribute Differences
- Tree `<ul>`: PF has `aria-multiselectable="false"` and `aria-label`; PFJ has neither on the `<ul>`
- Tree items `<li>`: PF has `aria-selected="false"`; PFJ does not set `aria-selected`

#### ~~P4: Icon Differences~~ — FIXED

### With checkboxes

**Status:** differences_found

#### P3: Attribute Differences
- Tree items `<li>`: PF has `aria-checked="false"`; PFJ does not set `aria-checked`
- Checkbox `<input>`: PF has `aria-label` (e.g., `"app-launcher-check"`); PFJ uses `aria-labelledby` instead — different labelling strategy, both are valid accessibility approaches

#### ~~P4: Icon Differences~~ — FIXED

### With icons

**Status:** differences_found

#### P3: Attribute Differences
- Tree `<ul>`: PF has `aria-multiselectable="false"` and `aria-label`; PFJ has neither on the `<ul>`
- Tree items `<li>`: PF has `aria-selected="false"`; PFJ does not set `aria-selected`
- Node `<button>`: PF has `type="button"`; PFJ omits `type`

#### ~~P4: Icon Differences~~ — FIXED

### Guides

**Status:** differences_found

#### ~~P1: Missing Component Elements~~ — FALSE POSITIVE
- ~~`div.pf-v6-c-tree-view` wrapper~~ — Same as above; PFJ has the wrapper.

#### ~~P2: Modifier Differences~~ — FALSE POSITIVE
- ~~`pf-m-guides` modifier~~ — PFJ showcase calls `.guides()` which correctly applies `pf-m-guides` on the wrapper `<div>`. Not visible in comparison because `[data-pfj-demo]` only captures the inner `<ul>`.

#### P3: Attribute Differences
- Tree `<ul>`: PF has `aria-multiselectable="false"` and `aria-label`; PFJ has neither on the `<ul>`
- Tree items `<li>`: PF has `aria-selected="false"`; PFJ does not set `aria-selected`
- Node `<button>`: PF has `type="button"`; PFJ omits `type`
- Toggle `<span>`: PF has `tabindex="-1"`; PFJ omits `tabindex`

#### ~~P4: Icon Differences~~ — FIXED

## Action Items

### DONE

- ~~**[P1] #1 Fix structure:** Add `div.pf-v6-c-tree-view` wrapper~~ — FALSE POSITIVE, already exists
- ~~**[P2] #9 Fix modifier:** Guides variant~~ — FALSE POSITIVE, `.guides()` already works
- ~~**[P4] #16 Fix icon:** Toggle icon~~ — FIXED, changed to `rhMicrons.caretDown()`

### Remaining — Missing Variations

2. **[P1] Add variation:** Multiselectable — PF supports multi-selection (`aria-multiselectable="true"`) where multiple tree items can be selected simultaneously. PFJ only has single selection.

3. **[P1] Add variation:** With search — PF has a built-in search/filter variant with a text input above the tree that filters visible items.

4. **[P1] Add variation:** With badges — PF supports displaying badges next to tree item text (e.g., count badges).

5. **[P1] Add variation:** With custom badges — PF supports custom badge content alongside tree items.

6. **[P1] Add variation:** With action items — PF supports action buttons (e.g., kebab menus, action icons) on individual tree items.

7. **[P1] Add variation:** Compact — PF has a compact variant (`pf-m-compact`) with reduced spacing.

8. **[P1] Add variation:** Compact, no background — PF has a compact variant without the background styling (`pf-m-compact` + `pf-m-no-background`).

### Remaining — Attributes

10. **[P3] Fix attribute:** Add `aria-multiselectable` — PF sets `aria-multiselectable="false"` (or `"true"`) on the tree `<ul>` element. PFJ does not set this attribute. Affects all tree view types.

11. **[P3] Fix attribute:** `aria-label` targets wrong element — PFJ's `ariaLabel()` sets the label on the wrapper `<div>`. PF sets it on the `<ul role="tree">` element. The label should be on the element with `role="tree"`.

12. **[P3] Fix attribute:** Add `aria-selected` on tree items — PF sets `aria-selected="false"` on each `<li role="treeitem">`. PFJ's `markSelected()` toggles CSS but never sets `aria-selected`. Affects `default_` and `selectableItems` types.

13. **[P3] Fix attribute:** Add `type="button"` on node button — PF sets `type="button"` on `<button class="pf-v6-c-tree-view__node">` in the `default_` case. PFJ omits the `type` attribute (browser defaults to `submit`).

14. **[P3] Fix attribute:** Add `tabindex="-1"` on toggle span — In the `default_` case, PFJ uses a `<span>` for the toggle without `tabindex`. PF sets `tabindex="-1"`. Only affects `default_` type (other types use `<button>` which already has `tabindex="-1"`).

15. **[P3] Fix attribute:** Add `aria-checked` on checkbox tree items — PF sets `aria-checked="false"` on `<li>` elements in the checkboxes variant. PFJ omits this. Should be updated when checkbox state changes.

### Not Applicable

17. **[P5] Cosmetic:** With memoization — React-specific performance optimization section, not applicable to PFJ.
