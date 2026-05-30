---
title: PatternFly Java Lint Summary
last_updated: 2026-05-30
---

# PF Lint Summary

Tracks which components have been linted with `/pf-lint`, what was found, and whether issues were fixed.

| Component | Date | Files | Errors | Warnings | Fixed | Status |
|-----------|------|-------|--------|----------|-------|--------|
| alert | 2026-05-30 | 7 | 4 | 3 | all | clean |
| avatar | 2026-05-30 | 2 | 0 | 0 | — | clean |
| backdrop | 2026-05-30 | 2 | 0 | 1 | all | clean |
| backtotop | 2026-05-30 | 2 | 1 | 1 | all | clean |
| badge | 2026-05-30 | 2 | 0 | 0 | — | clean |
| banner | 2026-05-30 | 2 | 0 | 0 | — | clean |
| brand | 2026-05-30 | 2 | 0 | 0 | — | clean |
| breadcrumb | 2026-05-30 | 4 | 1 | 0 | all | clean |
| button | 2026-05-30 | 2 | 0 | 0 | — | clean |
| card | 2026-05-30 | 10 | 1 | 0 | all | clean |

## Fixed Issues Log

### alert (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | Alert.java | ERROR | `decl-implements-format` | `Expandable` and `Attachable` on same line |
| 2 | Alert.java | WARN | `decl-implements-order` | `Attachable` not first alphabetically |
| 3 | Alert.java | WARN | `field-order` | `timeoutHandle` (private non-final) before private final fields |
| 4 | Alert.java | WARN | `store-component` | Missing `storeComponent()` in constructor |
| 5 | AlertDescription.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 6 | AlertActionGroup.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |
| 7 | AlertGroup.java | ERROR | `section-instance-content` | Static field `toast` in factory section |

### backdrop (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | package-info.java | WARN | `doc-pkg-usage` | Missing usage snippet |

### backtotop (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | BackToTop.java | ERROR | `decl-implements-format` | `implements` on separate line, interfaces not on own lines |
| 2 | BackToTop.java | WARN | `decl-implements-order` | `Attachable` not first alphabetically |

### breadcrumb (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | BreadcrumbItem.java | ERROR | `doc-class-javadoc` | Missing class Javadoc |

### card (2026-05-30)

| # | File | Sev | Rule | Detail |
|---|------|-----|------|--------|
| 1 | CardActions.java | ERROR | `decl-implements-format` | `implements` on separate line from `extends` |
