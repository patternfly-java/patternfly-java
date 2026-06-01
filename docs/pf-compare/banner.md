---
component: banner
date: 2026-06-01
pf_version: Release 6.5.1
pf_url: https://www.patternfly.org/components/banner/html
pfj_url: http://localhost:1234/components/banner
completeness:
  pf_total: 4
  pfj_total: 3
  matched: 3
  missing_in_pfj: [pill]
  extra_in_pfj: []
---

# Banner -- PF / PFJ Comparison

## Completeness: 3 / 4 (75%)

One PatternFly variation is missing from the PFJ showcase.

## Variation Mapping

| # | PF Variation | PF Slug | PFJ Snippet | PFJ ID | Implemented |
|---|-------------|---------|-------------|--------|-------------|
| 1 | Basic | `basic` | Basic | `banner-basic` | Yes |
| 2 | Banner with links | `banner-with-links` | Banner with links | `banner-links` | Yes |
| 3 | Status | `status` | Status | `banner-status` | Yes |
| 4 | Pill | `pill` | -- | -- | -- |

## Missing in PFJ

| # | PF Variation | PF Slug | Description |
|---|-------------|---------|-------------|
| 1 | Pill | `pill` | Banner with pill/rounded styling variant |

## Action Items

1. **Add pill banner variation** -- Implement the `pf-m-pill` modifier for rounded banner styling and add a corresponding showcase snippet.

## Notes

- "Implemented" reflects whether the PFJ showcase snippet has working Java code (no warning banner).
- All existing PFJ snippets are fully implemented with working Java code.
