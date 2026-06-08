---
component: button
date: 2026-06-03
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/button/html
pfj_url: http://localhost:1234/components/button
completeness:
  pf_total: 18
  pfj_total: 18
  matched: 18
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Variant examples | matched (semantic) |
| 2 | Clicked buttons | Clicked buttons | matched (semantic) |
| 3 | Small buttons | Small buttons | matched (semantic) |
| 4 | Disabled | Disabled buttons | matched (exact) |
| 5 | Aria-disabled | Aria-disabled | matched (exact) |
| 6 | Links as buttons | Links as buttons | matched (semantic) |
| 7 | Inline link as span | Inline link as span | matched (semantic) |
| 8 | Block level | Block level buttons | matched (semantic) |
| 9 | Types | Types | matched (exact) |
| 10 | Call to action | Call to action (CTA) buttons | matched (semantic) |
| 11 | Progress | Progress indicators | matched (semantic) |
| 12 | Circle buttons | Circle buttons | matched (semantic) |
| 13 | Counts | Button with count | matched (semantic) |
| 14 | Plain with no padding | Plain with no padding | matched (semantic) |
| 15 | Stateful | Stateful | matched (exact) |
| 16 | Favorite | Favorite | matched (exact) |
| 17 | Settings | Settings | matched (exact) |
| 18 | Hamburger | Hamburger | matched (exact) |

## DOM Comparison

### Variations

**Status:** differences_found
**Element count:** PF: 39 buttons, PFJ: 18 buttons

#### Missing Sub-Groups
- "Icon" -- PF repeats every variant with a start icon; this is a PF showcase layout choice, not a missing PFJ feature
- "Icon end" -- PF repeats every variant with an end icon; this is a PF showcase layout choice, not a missing PFJ feature

#### Attribute Differences
- Plain button -- PF has `aria-label="Remove"`, PFJ has none
- Plain with text button -- PF has `aria-label="Remove"`, PFJ has none
- Control icon-only button -- PF has `aria-label="Copy input"`, PFJ has none

### Clicked buttons

**Status:** differences_found
**Element count:** PF: 39 buttons, PFJ: 11 buttons

#### Missing Sub-Groups
- "Icon" -- PF showcase layout choice (repeats variants with start icon)
- "Icon end" -- PF showcase layout choice (repeats variants with end icon)

#### Missing Modifier Combinations
- `pf-m-clicked,pf-m-danger,pf-m-link` -- Danger link clicked variant

#### Attribute Differences
- Plain clicked button -- PF has `aria-label="Remove"`, PFJ has none
- Control clicked icon-only button -- PF has `aria-label="Copy input"`, PFJ has none

### Small buttons

**Status:** differences_found
**Element count:** PF: 39 buttons, PFJ: 11 buttons

#### Missing Sub-Groups
- "Icon" -- PF showcase layout choice
- "Icon end" -- PF showcase layout choice

#### Missing Modifier Combinations
- `pf-m-danger,pf-m-link,pf-m-small` -- Danger link small variant

#### Attribute Differences
- Plain small button -- PF has `aria-label="Remove"`, PFJ has none
- Control small icon-only button -- PF has `aria-label="Copy input"`, PFJ has none

### Disabled

**Status:** differences_found
**Element count:** PF: 39 buttons, PFJ: 12 buttons

#### Missing Sub-Groups
- "Icon" -- PF showcase layout choice
- "Icon end" -- PF showcase layout choice

Note: PF uses non-disabled base variants alongside the disabled sub-group; PFJ uses `pf-m-disabled` modifier directly on buttons. The disabled modifier combinations are structurally equivalent despite different organization.

### Aria-disabled

**Status:** differences_found
**Element count:** PF: 39 buttons, PFJ: 9 buttons

#### Missing Sub-Groups
- "Icon" -- PF showcase layout choice
- "Icon end" -- PF showcase layout choice

#### Missing Modifier Combinations
- `pf-m-aria-disabled,pf-m-danger,pf-m-secondary` -- Danger secondary aria-disabled variant
- `pf-m-aria-disabled,pf-m-danger,pf-m-link` -- Danger link aria-disabled variant

#### Attribute Differences
- Plain aria-disabled button -- PF has `aria-label="Remove"`, PFJ has none

### Links as buttons

**Status:** differences_found
**Element count:** PF: 6 buttons, PFJ: 6 buttons

#### Attribute Differences
- All link buttons have different `href` values (expected -- showcase uses different example URLs)
- Two secondary links -- PF has `aria-label="Read more about button documentation"`, PFJ has none

Note: The `href` and `target` differences are expected since each showcase uses different example URLs. Not actionable.

### Inline link as span

**Status:** differences_found
**Element count:** PF: 3 buttons, PFJ: 1 button

#### Missing Sub-Groups
- "Plain" -- PF shows a plain `<span>` button example
- "Plain no padding" -- PF shows a plain no-padding `<span>` button example
- "Inline link" -- PF shows an inline link `<span>` button example

Note: PF shows 3 different `<span>` button examples; PFJ only shows the inline link variant. The extra plain/no-padding span variants could be added but are low priority.

### Block level

**Status:** ok

No differences found.

### Types

**Status:** differences_found
**Element count:** PF: 3 buttons, PFJ: 3 buttons

#### Extra Modifier Combinations
- `pf-m-secondary` -- PFJ uses secondary for reset, PF uses a different variant
- `pf-m-tertiary` -- PFJ uses tertiary for default, PF uses a different variant

Note: PFJ uses different button variants for the reset and default type examples. The button types (`submit`, `reset`, `button`) are correctly demonstrated; only the visual variants differ. Not actionable.

### Call to action

**Status:** differences_found
**Element count:** PF: 10 buttons, PFJ: 8 buttons

#### Missing Modifier Combinations
- `pf-m-display-lg,pf-m-inline,pf-m-link` -- CTA inline link variant (with end icon)

#### Icon Differences
- CTA link button -- PF uses viewBox `0 0 32 32` (Red Hat arrow), PFJ uses viewBox `0 0 512 512` (FontAwesome arrow-right)

Note: PFJ includes disabled CTA variants using `pf-m-disabled` modifier (structurally equivalent to PF). The icon viewBox difference is because PFJ uses FontAwesome arrow-right while PF uses a Red Hat icon.

### Progress

**Status:** differences_found
**Element count:** PF: 8 buttons, PFJ: 4 buttons

#### Missing Modifier Combinations
- `pf-m-primary,pf-m-progress` -- Primary button with progress indicator but not currently loading
- `pf-m-progress,pf-m-secondary` -- Secondary button with progress indicator but not currently loading
- `pf-m-in-progress,pf-m-plain` -- Plain button with in-progress spinner (no icon)
- `pf-m-inline,pf-m-link,pf-m-progress` -- Inline link button with progress indicator but not currently loading

#### Icon Differences
- Plain upload button -- PF uses viewBox `0 0 32 32` (Red Hat upload icon), PFJ uses viewBox `0 0 448 512` (FontAwesome upload)

#### Attribute Differences
- Plain upload button -- PF has `aria-label="Upload"`, PFJ has none

### Circle buttons

**Status:** differences_found
**Element count:** PF: 10 buttons, PFJ: 8 buttons

#### Missing Modifier Combinations
- `pf-m-circle,pf-m-tertiary` -- Tertiary circle button
- `pf-m-circle,pf-m-warning` -- Warning circle button
- `pf-m-circle,pf-m-plain` -- Plain circle button
- `pf-m-circle,pf-m-control` -- Control circle button
- `pf-m-circle,pf-m-in-progress,pf-m-plain` -- Plain circle button with in-progress spinner

#### Attribute Differences
- All circle buttons -- PF has `aria-label` (e.g. "Add primary circle variant"), PFJ has none

### Counts

**Status:** differences_found
**Element count:** PF: 8 buttons, PFJ: 20 buttons

#### Extra Sub-Groups
- "Read" -- PFJ shows read badge count variants (PF only shows unread)
- "Read disabled" -- PFJ shows read disabled badge count variants

Note: PFJ implements more count badge combinations (secondary, tertiary, control, read badges, disabled variants) than PF shows in its showcase. The extra coverage in PFJ is fine.

### Plain with no padding

**Status:** differences_found
**Element count:** PF: 1 button, PFJ: 1 button

#### Icon Differences
- Plain no-padding button -- PF uses viewBox `0 0 32 32` (Red Hat question-circle icon), PFJ uses viewBox `0 0 20 20` (close icon)

#### Attribute Differences
- Plain no-padding button -- PF has `aria-label="More info"`, PFJ has none

### Stateful

**Status:** differences_found
**Element count:** PF: 18 buttons, PFJ: 18 buttons

#### Icon Differences
- All stateful buttons -- PF uses viewBox `0 0 32 32` (Red Hat bell icon), PFJ uses viewBox `0 0 448 512` (FontAwesome bell)

#### Structural Differences
- PFJ stateful buttons include a `pf-v6-c-button__count` element with a badge, PF stateful buttons do not have counts in the Stateful variation

Note: PFJ stateful buttons include count badges. PF shows counts separately in the "Counts" variation. The icon viewBox difference is due to different icon sets (Red Hat vs FontAwesome). The sub-group organization differs (PF uses Read/Unread/Attention/Plain sub-groups, PFJ puts them at the top level) but the same combinations are present.

### Favorite

**Status:** differences_found
**Element count:** PF: 2 buttons, PFJ: 2 buttons

#### Icon Differences
- Unfavorited button -- PF uses viewBox `0 0 576 512` (FontAwesome star), PFJ uses viewBox `0 0 32 32` (Red Hat star)
- Favorited button -- PF uses viewBox `0 0 576 512` (FontAwesome star), PFJ uses viewBox `0 0 32 32` (Red Hat star)

#### Attribute Differences
- Unfavorited button -- PF has `aria-label="not starred"` (lowercase), PFJ has `aria-label="Not starred"` (capitalized)
- Favorited button -- PF has `aria-label="starred"` (lowercase), PFJ has `aria-label="Starred"` (capitalized)

### Settings

**Status:** ok

No differences found.

### Hamburger

**Status:** differences_found
**Element count:** PF: 3 buttons, PFJ: 1 button

#### Missing Modifier Combinations
- `pf-m-expand,pf-m-hamburger,pf-m-plain` -- Hamburger in expanded state
- `pf-m-collapse,pf-m-hamburger,pf-m-plain` -- Hamburger in collapsed state

#### Attribute Differences
- Hamburger button -- PF has `aria-expanded="false"`, PFJ has none
- Hamburger button -- PF has `aria-label="Hamburger"`, PFJ has `aria-label="Menu"`

## Action Items

1. **Fix icon:** Favorite -- PFJ uses Red Hat star icon (viewBox `0 0 32 32`), PF uses FontAwesome star (viewBox `0 0 576 512`); switch to FontAwesome star for consistency
2. **Fix attribute:** Favorite -- PFJ capitalizes aria-label ("Not starred"/"Starred"), PF uses lowercase ("not starred"/"starred"); align casing with PF
3. **Fix attribute:** Hamburger -- PFJ is missing `aria-expanded` attribute; add `aria-expanded="false"` (toggled to `"true"` when open)
4. **Fix attribute:** Hamburger -- PFJ uses `aria-label="Menu"`, PF uses `aria-label="Hamburger"`; align with PF
5. **Fix icon:** Plain with no padding -- PFJ uses close icon (viewBox `0 0 20 20`), PF uses question-circle icon (viewBox `0 0 32 32`); use the correct icon in the showcase demo
6. **Add variation:** Circle buttons -- add missing tertiary and warning circle button variants
7. **Add variation:** Circle buttons -- add missing plain and control circle button variants
8. **Add variation:** Aria-disabled -- add missing danger-secondary and danger-link aria-disabled combinations
9. **Add variation:** Progress -- add non-in-progress states (primary with progress but not loading, secondary with progress but not loading)
10. **Add variation:** Progress -- add plain in-progress spinner and inline link progress variants
11. **Add variation:** Hamburger -- add expand and collapse animated state variants
12. **Add variation:** Inline link as span -- add plain and plain no-padding `<span>` button examples
