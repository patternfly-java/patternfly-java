---
component: alert
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/alert/html
pfj_url: http://localhost:1234/components/alert
completeness:
  pf_total: 8
  pfj_total: 14
  matched: 8
  missing_in_pfj: []
  extra_in_pfj: [alert-timeout, alert-truncate, alert-plain-inline-variations, alert-static-live-region, alert-group-toast, alert-group-asynchronous]
---

# Alert -- PF / PFJ Comparison

## Completeness: 8 / 8 (100%)

All PatternFly variations have a corresponding PFJ snippet.

## Variation Mapping

| # | PF Variation | PF Slug | PFJ Snippet | PFJ ID | Implemented |
|---|-------------|---------|-------------|--------|-------------|
| 1 | Types | `types` | Alert variants | `alert-variants` | No |
| 2 | Variations | `variations` | Alert variations | `alert-variations` | Yes |
| 3 | Inline types | `inline-types` | Inline alert variants | `alert-inline-variants` | No |
| 4 | Inline variations | `inline-variations` | Inline alert variations | `alert-inline-variations` | Yes |
| 5 | Custom icon | `custom-icon` | Custom icons | `alert-custom-icons` | No |
| 6 | Inline plain | `inline-plain` | Plain inline alert variants | `alert-plain-inline-variants` | No |
| 7 | Expandable | `expandable` | Expandable alerts | `alert-expandable` | Yes |
| 8 | Static alert group | `static-alert-group` | Static inline alert group | `alert-group-static-inline` | Yes |

## Extra PFJ Snippets (no direct PF match)

These PFJ snippets go beyond the PF HTML examples:

| # | PFJ Snippet | PFJ ID | Implemented |
|---|-------------|--------|-------------|
| 1 | Alert timeout | `alert-timeout` | Yes |
| 2 | Truncated alerts | `alert-truncate` | No |
| 3 | Plain inline alert variations | `alert-plain-inline-variations` | Yes |
| 4 | Static live region alerts | `alert-static-live-region` | Yes |
| 5 | Toast alert group | `alert-group-toast` | Yes |
| 6 | Asynchronous alert groups | `alert-group-asynchronous` | Yes |

## Notes

- "Implemented" reflects whether the PFJ showcase snippet has working Java code (no warning banner).
- PFJ splits some PF variations into separate "variants" (types) and "variations" (with description, close button, action links) snippets.
- PFJ adds extra demos for timeout, truncation, live regions, toast, and async alert groups that are not present in the PF HTML examples page.
