---
name: pf-lint
description: >-
  Verify that a PatternFly Java component follows project conventions for
  documentation, code structure, naming, and formatting. This skill should be
  used when the user asks to "/pf-lint", "lint component", "verify component
  structure", "check component format", "validate component", "check code
  structure", "verify PFJ component", "lint PFJ code", "check component
  conventions", "review component code", "check naming conventions",
  "audit component", "check section order", or "verify section separators".
metadata:
  version: "0.1.0"
---

# /pf-lint — PatternFly Java Component Linter

Verify that PatternFly Java component and sub-component classes follow the project's documentation, naming, code structure, and formatting conventions. Report violations as a structured checklist so the user can fix or approve fixes.

## Arguments

```
/pf-lint <component> [--fix]
```

**Parameters:**
- `<component>` (required) — Component name or package (e.g., `card`, `button`, `tabs`, `alert`)
- `--fix` (optional) — Automatically fix violations where possible instead of only reporting them

**Examples:**
```
/pf-lint card
/pf-lint tabs --fix
```

## Workflow

### Step 1: Locate component files

Resolve the component package directory:

```
components/src/main/java/org/patternfly/component/<component>/
```

If the directory does not exist, report an error and stop.

Classify every `.java` file in the package:

| Classification | Criteria |
|---|---|
| **Component** | Extends `BaseComponent` or `BaseComponentSVG` |
| **SubComponent base** | Extends `SubComponent`, is `abstract`, package-private |
| **Sub-component** | Extends the SubComponent base class |
| **package-info** | Named `package-info.java` |
| **Other** | Anything else (enums, helpers, interfaces) — note but skip lint |

If the package has no sub-components, skip the SubComponent base and Sub-component classifications entirely.

### Step 2: Run checks

Run every check from `references/checklist.md` against each classified file. For each violation, record:

- **Severity**: ERROR (must fix) or WARN (should fix)
- **File**: Relative path
- **Line(s)**: Line number or range
- **Rule**: Short rule ID from the checklist
- **Detail**: What is wrong and what is expected

### Step 3: Report

Print a summary table grouped by file:

```
## <ComponentName> Lint Report

### <FileName>.java — N issues

| # | Sev | Line | Rule | Detail |
|---|-----|------|------|--------|
| 1 | ERROR | 42 | section-order | "builder" section appears before "add" section |
| 2 | WARN  | 78 | javadoc-see | Missing @see link to PatternFly docs |
```

End with a summary line: `N errors, M warnings across K files.`

### Step 4: Fix (if --fix)

If `--fix` was passed, apply fixes for violations that can be resolved mechanically:
- Missing or malformed section separators
- Wrong section order (reorder sections)
- Missing `@see` tag in class Javadoc
- Wrong import order
- Missing blank lines around separators
- Missing `@Override` annotations

For violations that require judgment (missing Javadoc content, architectural issues), report them as `MANUAL` and skip.

After fixing, re-run the checks and report the final state.

## Reference material

For the full checklist of rules, consult:

- **`references/checklist.md`** — Complete verification checklist with rule IDs, severity, and examples
- **`references/common-concepts.md`** — Component store, modifier interfaces, event handlers, and other shared patterns

### Template component

A template component that follows all conventions is available at:

```
components/src/main/java/org/patternfly/component/template/
├── TemplateComponent.java      — Component (extends BaseComponent)
├── TemplateSubComponent.java   — SubComponent base (package-private, abstract)
├── TemplateItem.java           — Sub-component (extends TemplateSubComponent)
└── package-info.java           — Package-level Javadoc
```

Compare against the template when a rule is ambiguous.