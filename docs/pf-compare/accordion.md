---
component: accordion
date: 2026-05-29
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/accordion/html
pfj_url: http://localhost:1234/components/accordion
completeness:
  pf_total: 6
  pfj_total: 6
  matched: 6
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: accordion

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Fluid | Single expand behavior | matched (semantic — both are basic default accordions) |
| 2 | Fixed | Fixed with multiple expand behavior | matched (semantic — both demonstrate fixed content height) |
| 3 | Definition list | Definition list | matched (exact) |
| 4 | Bordered | Bordered | matched (exact) |
| 5 | Large bordered | Large | matched (semantic — PFJ has large display but missing bordered modifier) |
| 6 | Toggle icon at start | Toggle icon at start | matched (exact) |

## DOM Comparison

### Fluid ↔ Single expand behavior

**Status:** differences_found

#### Structural Differences
- PF uses `<div>` as root element; PFJ uses `<dl>` — this is a PFJ design choice (always uses definition list markup) and is acceptable
- PF wraps toggle button in `<h3>` heading; PFJ puts `<button>` directly inside `__item` div without any wrapper element — when using `<dl>`, toggle buttons should be wrapped in `<dt>` elements for semantic correctness

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon — different icon set/glyph)

---

### Fixed ↔ Fixed with multiple expand behavior

**Status:** differences_found

#### Structural Differences
- PF wraps toggle button in `<h3>`; PFJ puts `<button>` directly inside `__item` div without `<dt>` wrapper

#### Attribute Differences
- PF's fixed expandable content has `role="region"` — missing in PFJ
- PF's fixed expandable content has `tabindex="0"` — missing in PFJ

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon)

---

### Definition list

**Status:** differences_found

#### Structural Differences
- PF wraps toggle button in `<dt>` element inside `__item` div; PFJ puts `<button>` directly inside `__item` div without `<dt>` wrapper — semantically, `<dl>` children should use `<dt>` for terms (toggle) and `<dd>` for definitions (content)

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon)

---

### Bordered

**Status:** differences_found

#### Structural Differences
- PF wraps toggle button in `<h3>`; PFJ puts `<button>` directly inside `__item` div without `<dt>` wrapper

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon)

---

### Large bordered ↔ Large

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-bordered` on `<dl>` (accordion root) — present in PF (`pf-m-display-lg pf-m-bordered`), absent in PFJ (`pf-m-display-lg` only)

#### Structural Differences
- PF wraps toggle button in `<h3>`; PFJ puts `<button>` directly inside `__item` div without `<dt>` wrapper

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon)

---

### Toggle icon at start

**Status:** differences_found

#### Missing CSS Classes
- `.pf-m-toggle-start` on `<dl>` (accordion root) — present in PF, absent in PFJ. Note: PFJ correctly places the icon span before the text span in the button DOM order, but is missing the CSS class that PF uses for styling.

#### Structural Differences
- PF wraps toggle button in `<h3>`; PFJ puts `<button>` directly inside `__item` div without `<dt>` wrapper

#### Icon Differences
- `pf-v6-c-accordion__toggle-icon` — PF uses viewBox `0 0 20 20` (angle-down icon), PFJ uses viewBox `0 0 32 32` (caret-right icon)

---

## Action Items

1. **Fix icon:** All variations — PFJ uses `caret-right` icon (viewBox `0 0 32 32`) but PF uses `angle-down` icon (viewBox `0 0 20 20`). Replace the toggle icon to match PF's angle-down chevron.
2. **Fix structure:** All variations using `<dl>` — wrap the toggle `<button>` in a `<dt>` element for semantic correctness. PF's definition list variation uses `<dt>` / `<dd>` pairs inside each `__item` div.
3. **Fix CSS:** Toggle icon at start — add `pf-m-toggle-start` class to the accordion root element.
4. **Fix CSS:** Large — the PF "Large bordered" variation uses both `pf-m-display-lg` and `pf-m-bordered`. PFJ's "Large" only has `pf-m-display-lg`. Either rename to "Large" (without bordered) to match the current CSS, or add `pf-m-bordered` to match PF's variation.
5. **Fix attribute:** Fixed variation — add `role="region"` and `tabindex="0"` to the expandable content element when `pf-m-fixed` modifier is applied.
