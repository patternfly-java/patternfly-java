---
component: button
date: 2026-06-08
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/button
pfj_url: http://localhost:1234/components/button
sections:
  pf_count: 17
  pfj_count: 18
  matched: 16
  missing_in_pfj:
    - Custom component
  extra_in_pfj:
    - Clicked buttons
    - Types
---

# PF Compare: Button

## Section Coverage

| # | PF Section | PFJ Section | Group | Status |
|---|------------|-------------|-------|--------|
| 1 | Variant examples | Variant examples | Examples | matched |
| 2 | Disabled buttons | Disabled buttons | Examples | matched |
| 3 | Small buttons | Small buttons | Examples | matched |
| 4 | Call to action (CTA) buttons | Call to action (CTA) buttons | Examples | matched |
| 5 | Block level buttons | Block level buttons | Examples | matched |
| 6 | Progress indicators | Progress indicators | Examples | matched |
| 7 | Links as buttons | Links as buttons | Examples | matched |
| 8 | Inline link as span | Inline link as span | Examples | matched |
| 9 | Custom component | --- | Examples | missing_in_pfj |
| 10 | Aria-disabled examples | Aria-disabled | Examples | matched (semantic) |
| 11 | Button with count | Button with count | Examples | matched |
| 12 | Plain with no padding | Plain with no padding | Examples | matched |
| 13 | Stateful | Stateful | Examples | matched |
| 14 | Circle buttons | Circle buttons | Examples | matched |
| 15 | Favorite | Favorite | Animated examples | matched |
| 16 | Settings | Settings | Animated examples | matched |
| 17 | Hamburger | Hamburger | Animated examples | matched |

## DOM Differences

### Variant examples

**Status:** differences_found

#### P2: Modifier Differences
- PFJ icon spans in link buttons missing `pf-m-start` / `pf-m-end` position modifiers. PF uses `pf-m-start` on the icon span when icon is before text, and `pf-m-end` when icon is after text.
- PFJ stateful button icon spans missing `pf-m-start` modifier. PF stateful buttons have `pf-m-start` on the icon span.

#### P3: Attribute Differences
- PFJ plain button missing `aria-label="Action"`. PF has `aria-label="Action"` on the plain icon-only button.
- PFJ control icon button missing `aria-label="Copy"`. PF has `aria-label="Copy"`.

#### P4: Icon Differences
- PFJ stateful buttons use SVG viewBox `0 0 448 512` (FontAwesome), PF uses `0 0 32 32` (Red Hat icons).

### Disabled buttons

**Status:** differences_found

#### P2: Modifier Differences
- PFJ disabled buttons add `pf-m-disabled` modifier class. PF disabled buttons do NOT use `pf-m-disabled` — they rely on the native `disabled` attribute only.

#### P3: Attribute Differences
- PFJ disabled buttons add `aria-disabled="true"` alongside `disabled`. PF only uses the `disabled` attribute (no `aria-disabled`).
- PFJ plain disabled button missing `aria-label="Action"`. PF has it.
- PFJ control disabled icon button missing `aria-label="Copy"`. PF has it.

### Small buttons

**Status:** differences_found

#### P2: Modifier Differences
- PFJ includes `pf-m-danger,pf-m-secondary,pf-m-small` variant (danger secondary small). PF small-buttons section does not include this variant — PFJ has extra showcase coverage here.

#### P5: Cosmetic Differences
- PFJ shows additional small variants (link, inline link, plain, control, control icon) beyond what PF shows. This is extra PFJ coverage, not a gap.

### Call to action (CTA) buttons

**Status:** differences_found

#### P4: Icon Differences
- PFJ CTA link button arrow icon: viewBox `0 0 512 512` (FontAwesome). PF uses viewBox `null` (inline SVG without explicit viewBox).

#### P5: Cosmetic Differences
- PFJ includes disabled CTA variants. PF does not show disabled CTAs in this section.

### Block level buttons

**Status:** ok

### Progress indicators

**Status:** differences_found

#### P3: Attribute Differences
- PFJ plain upload button missing `aria-label="Upload"`. PF has `aria-label="Upload"`.

### Links as buttons

**Status:** differences_found

#### P5: Cosmetic Differences
- PFJ shows additional link variants (danger secondary, danger link, jump link). PF shows primary, secondary, disabled tertiary, and link. The extra PFJ variants are additional coverage.
- PFJ text content differs slightly ("Link to docs" vs PF "Link to PatternFly home").

### Inline link as span

**Status:** differences_found

#### P1: Missing Component Elements
- PF has TWO inline span buttons (one explaining keyboard event handling). PFJ has only ONE.

#### P3: Attribute Differences
- PFJ inline span button missing `type="button"` attribute. PF has `type="button"` on the span element.

### Aria-disabled examples

**Status:** differences_found

#### P1: Missing Component Elements
- PF has tooltip examples: a primary button with tooltip and a secondary link-as-button with `aria-disabled`. PFJ does not include these tooltip variations.

#### P2: Modifier Differences
- PFJ includes additional aria-disabled variants (secondary, danger, warning, plain, control) beyond PF's examples. PFJ has broader coverage.

#### P3: Attribute Differences
- PFJ aria-disabled plain button missing `aria-label`. PF plain buttons have aria-labels.

### Button with count

**Status:** differences_found

#### P2: Modifier Differences
- PFJ disabled buttons with count add `pf-m-disabled` modifier. PF uses only the `disabled` attribute without `pf-m-disabled`.
- PFJ disabled badges do NOT have `pf-m-disabled` modifier. PF badges inside disabled buttons DO have `pf-m-disabled`.

### Plain with no padding

**Status:** differences_found

#### P3: Attribute Differences
- PFJ button missing `aria-label="More info"`. PF has `aria-label="More info"`.

### Stateful

**Status:** differences_found

#### P2: Modifier Differences
- PFJ stateful button icon spans missing `pf-m-start` modifier. PF stateful buttons have `pf-m-start` on icon spans.

#### P4: Icon Differences
- PFJ stateful icons: viewBox `0 0 448 512` (FontAwesome). PF: `0 0 32 32` (Red Hat icons).

### Circle buttons

**Status:** differences_found

#### P1: Missing Component Elements
- PFJ shows 4 basic circle buttons + 4 loading circles. PF shows 12 circle variants (primary, secondary, tertiary, danger, warning, link, control, plain, 3 stateful, upload). PFJ is missing: warning, link, control, plain, all 3 stateful, and upload circle variants.

#### P3: Attribute Differences
- PFJ circle buttons missing `aria-label` attributes. PF circle buttons all have descriptive aria-labels.

### Favorite

**Status:** ok

### Settings

**Status:** ok

### Hamburger

**Status:** differences_found

#### P2: Modifier Differences
- PFJ hamburger buttons missing `pf-m-expand` and `pf-m-collapse` modifiers. PF has three hamburger states: default, expand, and collapse.

#### P3: Attribute Differences
- PFJ hamburger button missing `aria-expanded` attribute. PF hamburger buttons have `aria-expanded="false"` (default/expand) and `aria-expanded="true"` (collapse).

## Action Items

1. **[P1] Add variation:** Inline span second example — PF shows a second inline span button with keyboard event handling text. Add this to the PFJ showcase.
2. **[P1] Add variation:** Aria-disabled tooltip examples — PF shows aria-disabled buttons with tooltips (primary button + secondary link-as-button). Implement tooltip support for aria-disabled buttons.
3. **[P1] Add variation:** Circle button variants — PFJ missing 8 circle button variants (warning, link, control, plain, 3 stateful, upload). Add these to the showcase.
4. **[P2] Fix modifier:** Icon position modifiers — Add `pf-m-start` / `pf-m-end` to `pf-v6-c-button__icon` spans across all sections (variant examples, disabled, stateful, etc.).
5. **[P2] Fix modifier:** Disabled button modifier — PFJ adds `pf-m-disabled` to disabled buttons but PF does not. Remove `pf-m-disabled` from natively disabled buttons (keep only `disabled` attribute). Note: `pf-m-disabled` is correct for `<a>` elements where native `disabled` doesn't work.
6. **[P2] Fix modifier:** Badge disabled modifier — PFJ disabled button badges missing `pf-m-disabled` on the `pf-v6-c-badge` span. PF adds `pf-m-disabled` to badges inside disabled buttons.
7. **[P2] Fix modifier:** Hamburger expand/collapse — Add `pf-m-expand` and `pf-m-collapse` modifiers to hamburger button states.
8. **[P3] Fix attribute:** aria-label on icon-only buttons — Multiple sections (variant, disabled, progress, plain-no-padding, circle) have icon-only buttons missing `aria-label`. Add appropriate aria-labels.
9. **[P3] Fix attribute:** Disabled button aria-disabled — PFJ adds `aria-disabled="true"` to natively disabled buttons. PF only uses `disabled`. Remove redundant `aria-disabled` from buttons that already have `disabled`.
10. **[P3] Fix attribute:** Inline span type attribute — PFJ inline span button missing `type="button"`. Add it.
11. **[P3] Fix attribute:** Hamburger aria-expanded — Add `aria-expanded` attribute to hamburger buttons.
12. **[P4] Fix icon:** Stateful button icons — PFJ uses FontAwesome icons (viewBox `0 0 448 512`) for stateful buttons. PF uses Red Hat icons (viewBox `0 0 32 32`). Align icon sets.
13. **[P4] Fix icon:** CTA link arrow icon — PFJ CTA link button uses FontAwesome arrow. PF uses a different icon. Align icon.
14. **[P1] Add section:** Custom component — PF has a "Custom component" section. Implement this in PFJ if the feature is supported.
