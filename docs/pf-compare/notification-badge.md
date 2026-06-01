---
component: notification-badge
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/notification-badge/html
pfj_url: http://localhost:1234/components/notification-badge
completeness:
  pf_total: 3
  pfj_total: 3
  matched: 3
  missing_in_pfj: []
  extra_in_pfj: []
---

# PF Compare: notification-badge

## Completeness

| # | PF Variation | PFJ Snippet | Status |
|---|---|---|---|
| 1 | Basic | Basic | matched (exact) |
| 2 | With count | With count | matched (exact) |
| 3 | Expanded | With animation | matched (semantic — PFJ "With animation" covers expanded state plus animation) |

## DOM Comparison

### Basic ↔ Basic

**Status:** equivalent

Both use:
- `button.pf-v6-c-notification-badge` with stateful modifiers (`pf-m-read`, `pf-m-unread`, `pf-m-attention`)
- `span.pf-v6-c-notification-badge__icon` containing the bell/attention-bell icon
- `span.pf-v6-c-notification-badge__count` (hidden when count is 0)

PF shows three separate buttons for read, unread, and attention states. PFJ uses `status(NotificationStatus)` API with `read()`, `unread()`, and `attention()` convenience methods to switch between states dynamically.

### With count ↔ With count

**Status:** equivalent

Both display:
- `span.pf-v6-c-notification-badge__count` with the numeric count text
- Count is visible when > 0, hidden when 0

PFJ supports `count(int)` API and also `bind(ObservableValue<Integer>)` for reactive count updates.

### Expanded ↔ With animation

**Status:** equivalent

- PF "Expanded" shows the badge with `aria-expanded=true` and `pf-m-clicked` modifier
- PFJ covers both expanded state (via `Expandable` interface with `expand()`/`collapse()`) and animation (via `triggerNotification()` which adds `pf-m-notify` modifier temporarily)
- PFJ `With animation` snippet demonstrates the `triggerNotification()` method which is an extra feature not shown in PF HTML examples

## Action Items

No action items. PFJ fully covers all PF notification-badge variations with equivalent or enhanced functionality.
