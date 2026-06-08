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
    - Types
---

# PF Compare: button

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
| 10 | Aria-disabled examples | Aria-disabled | Examples | matched |
| 11 | Button with count | Button with count | Examples | matched |
| 12 | Plain with no padding | Plain with no padding | Examples | matched |
| 13 | Stateful | Stateful | Examples | matched |
| 14 | Circle buttons | Circle buttons | Examples | matched |
| 15 | Favorite | Favorite | Animated examples | matched |
| 16 | Settings | Settings | Animated examples | matched |
| 17 | Hamburger | Hamburger | Animated examples | matched |
| -- | --- | Types | --- | extra_in_pfj |

## DOM Differences

### Variant examples

**Status:** differences_found

#### P3: Attribute Differences
- Plain button: PF has `aria-label="Remove"`, PFJ has none

### Disabled buttons

**Status:** ok

### Hamburger

**Status:** differences_found

#### P3: Attribute Differences
- Hamburger button: PF has `aria-expanded="false"`, PFJ has none
- Hamburger button: PF has `aria-label="Hamburger"`, PFJ has `aria-label="Menu"`

### Favorite

**Status:** differences_found

#### P4: Icon Differences
- Unfavorited button: PF viewBox `0 0 576 512` (FontAwesome star), PFJ viewBox `0 0 32 32` (Red Hat star)

#### P3: Attribute Differences
- PF has `aria-label="not starred"` (lowercase), PFJ has `aria-label="Not starred"` (capitalized)

## Action Items

1. **[P1] Add variation:** Custom component — PF has a 'Custom component' section demonstrating button rendered as a custom element; PFJ has no equivalent section
2. **[P3] Fix attribute:** Hamburger aria-expanded — PF hamburger button has `aria-expanded="false"`, PFJ has none; add `aria-expanded` attribute toggled on open/close
3. **[P3] Fix attribute:** Favorite aria-label casing — PFJ capitalizes aria-label ("Not starred"/"Starred"), PF uses lowercase; align casing with PF
4. **[P4] Fix icon:** Favorite icon set — PFJ uses Red Hat star icon (viewBox `0 0 32 32`), PF uses FontAwesome star (viewBox `0 0 576 512`); switch to FontAwesome for consistency
