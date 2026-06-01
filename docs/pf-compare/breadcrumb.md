---
component: breadcrumb
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/breadcrumb/html
pfj_url: http://localhost:1234/components/breadcrumb
completeness:
  pf_total: 5
  pfj_total: 4
  matched: 4
  missing_in_pfj: [with-buttons]
  extra_in_pfj: []
---

# Breadcrumb -- PF / PFJ Comparison

## Completeness: 4 / 5 (80%)

One PatternFly variation is missing from the PFJ showcase.

## Variation Mapping

| # | PF Variation | PF Slug | PFJ Snippet | PFJ ID | Implemented |
|---|-------------|---------|-------------|--------|-------------|
| 1 | Basic | `basic` | Basic | `breadcrumb-basic` | Yes |
| 2 | Without home link | `without-home-link` | Without home link | `breadcrumb-no-home-link` | Yes |
| 3 | With heading | `with-heading` | With heading | `breadcrumb-heading` | No |
| 4 | With menu dropdown | `with-menu-dropdown` | With dropdown | `breadcrumb-dropdown` | No |
| 5 | With buttons | `with-buttons` | -- | -- | -- |

## Missing in PFJ

| # | PF Variation | PF Slug | Description |
|---|-------------|---------|-------------|
| 1 | With buttons | `with-buttons` | Breadcrumb items rendered as buttons instead of links |

## Not Yet Implemented in PFJ

These snippets exist in the PFJ showcase but show a warning (not yet implemented):

| # | PFJ Snippet | PFJ ID |
|---|-------------|--------|
| 1 | With heading | `breadcrumb-heading` |
| 2 | With dropdown | `breadcrumb-dropdown` |

## Action Items

1. **Implement "With heading" variation** -- Add support for wrapping breadcrumb in a heading element (`breadcrumb-heading`).
2. **Implement "With dropdown" variation** -- Add menu dropdown support within breadcrumb items (`breadcrumb-dropdown`).
3. **Add "With buttons" variation** -- Add a breadcrumb variant using button elements and create a corresponding showcase snippet.

## Notes

- "Implemented" reflects whether the PFJ showcase snippet has working Java code (no warning banner).
- Two existing PFJ snippets are placeholders without working implementations.
