---
component: button
date: 2026-05-28
pf_version: "Release 6.5.1"
pf_url: https://www.patternfly.org/components/button/html
pfj_url: https://patternfly-java.github.io/components/button
completeness:
  pf_total: 18
  pfj_total: 8
  matched: 8
  missing_in_pfj:
    - clicked-buttons
    - aria-disabled
    - inline-link-as-span
    - types
    - circle-buttons
    - plain-with-no-padding
    - stateful
    - favorite
    - settings
    - hamburger
  extra_in_pfj: []
---

# PF Compare: button

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Variations | Variant examples | matched |
| 2 | Clicked buttons | — | missing_in_pfj |
| 3 | Small buttons | Small buttons | matched |
| 4 | Disabled | Disabled buttons | matched |
| 5 | Aria-disabled | — | missing_in_pfj |
| 6 | Links as buttons | Links as buttons | matched |
| 7 | Inline link as span | — | missing_in_pfj |
| 8 | Block level | Block level buttons | matched |
| 9 | Types | — | missing_in_pfj |
| 10 | Call to action | Call to action (CTA) buttons | matched |
| 11 | Progress | Progress indicators | matched |
| 12 | Circle buttons | — | missing_in_pfj |
| 13 | Counts | Button with count | matched |
| 14 | Plain with no padding | — | missing_in_pfj |
| 15 | Stateful | — | missing_in_pfj |
| 16 | Favorite | — | missing_in_pfj |
| 17 | Settings | — | missing_in_pfj |
| 18 | Hamburger | — | missing_in_pfj |

## DOM Comparison

### Variations ↔ Variant examples

**Status:** ok

Core button structure matches: `<button class="pf-v6-c-button pf-m-{variant}"><span class="pf-v6-c-button__text">...</span></button>`. CSS class order differs between PF and PFJ (e.g., `pf-m-danger pf-m-secondary` vs `pf-m-secondary pf-m-danger`) but this is functionally equivalent.

### Small buttons

**Status:** ok

Both use `pf-m-small` modifier on the button element with matching structure.

### Disabled ↔ Disabled buttons

**Status:** ok

Both use the `disabled` attribute on the button element with matching PF class structure.

### Links as buttons

**Status:** ok

Both render `<a>` elements with `pf-v6-c-button` class for link-styled buttons.

### Block level ↔ Block level buttons

**Status:** ok

Both use `pf-m-block pf-m-primary` on the button. Class order differs but is functionally equivalent.

### Call to action ↔ Call to action (CTA) buttons

**Status:** ok

Both use `pf-m-display-lg` modifier for CTA styling.

### Progress ↔ Progress indicators

**Status:** ok

Both use `pf-m-progress pf-m-in-progress` modifiers with spinner elements inside the button.

### Counts ↔ Button with count

**Status:** ok

Both use `<span class="pf-v6-c-button__count">` with a nested badge component.

## Action Items

1. **Add variation:** Clicked buttons — implement clicked/active state button examples
2. **Add variation:** Aria-disabled — implement aria-disabled button examples (buttons that look disabled but remain focusable)
3. **Add variation:** Inline link as span — implement inline link rendered as `<span>` instead of `<button>`
4. **Add variation:** Types — implement button type examples (submit, reset, default)
5. **Add variation:** Circle buttons — implement circular icon-only buttons
6. **Add variation:** Plain with no padding — implement plain buttons without padding
7. **Add variation:** Stateful — implement stateful toggle buttons (note: PFJ has stateful buttons in "Variant examples" already, but PF has a dedicated section with more variations)
8. **Add variation:** Favorite — implement favorite/star toggle button
9. **Add variation:** Settings — implement settings/gear icon button
10. **Add variation:** Hamburger — implement hamburger menu icon button
