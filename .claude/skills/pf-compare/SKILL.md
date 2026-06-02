---
name: pf-compare
description: >-
  This skill should be used when comparing a PatternFly component against its
  PatternFly Java (PFJ) implementation. Triggers include /pf-compare,
  "compare PF component", "check PFJ completeness", "compare button component",
  "what's missing in the Java card", "gap analysis for alert",
  "generate comparison report for tabs", "find missing PF variations",
  "coverage report", "DOM differences", or any request to identify variation
  coverage gaps or DOM/CSS differences between PatternFly and PatternFly Java.
metadata:
  version: "0.1.0"
---

# /pf-compare — PatternFly Component Comparison

Compares a PatternFly (React/HTML) component against its PatternFly Java implementation to identify variation coverage gaps and DOM/CSS structural differences.

## Tools

Uses Chrome DevTools MCP tools for browser interaction (navigate_page, new_page, select_page, evaluate_script, close_page, list_pages, take_snapshot). Requires approval on first use.

## Arguments

```
/pf-compare <component> [--port <port>]
```

- **component** (required) — URL slug of a single component (e.g., `button`, `card`, `data-list`). One component per invocation. **Reject `template`** — it is a blueprint component, not a real UI component.
- **--port** (optional) — PFJ local dev server port (default: `1234`)

Parse from the ARGUMENTS string. If no component is provided, ask the user which component to compare.

---

## Workflow — Step 1: Pre-flight Checks

Run in order. Stop on failure.

1. **Parse arguments**: Extract `COMPONENT` and optional `--port` (default `1234`). If no component is provided, ask the user.

2. **Resolve PFJ showcase URL** — try in order:
   - Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:<port>/components/<COMPONENT>`
   - If HTTP 200, set `PFJ_URL = http://localhost:<port>/components/<COMPONENT>`
   - Otherwise, use the published showcase: set `PFJ_URL = https://patternfly-java.github.io/components/<COMPONENT>`
     - Note: The published PFJ showcase is a single-page app with client-side routing. `curl` will return 404 for deep links, but the page loads correctly in a browser. Do NOT use curl to verify this URL — trust it and verify via browser navigation in Step 3.

3. **Verify PF site**:
   - Run: `curl -s -o /dev/null -w "%{http_code}" -L https://www.patternfly.org/components/<COMPONENT>/html`
   - Note the `-L` flag to follow redirects (PF site uses 302 redirects to add trailing slashes).
   - If not 200, stop with: "Could not reach PF showcase at `https://www.patternfly.org/components/<COMPONENT>/html`. Verify the component name."

4. **Set variables**: `PF_URL`, `PFJ_URL`, `COMPONENT`

5. **Print**: "Pre-flight OK. Comparing PF (`PF_URL`) against PFJ (`PFJ_URL`)."

---

## Workflow — Step 2: Extract PF Variations

1. Open `PF_URL` in a new Chrome tab via `new_page`.

2. Read the script from `references/extract-pf-variations.js` and pass it to `evaluate_script` with `args: [COMPONENT]`.

3. Store the result as `PF_VARIATIONS` — an array of `{ slug, title, html }`.

4. Report: "Extracted N PF variations: (list of titles)"

---

## Workflow — Step 3: Extract PFJ Snippets

1. Open `PFJ_URL` in a new Chrome tab via `new_page`.

2. Read the script from `references/extract-pfj-snippets.js` and pass it to `evaluate_script` (no args needed).

3. Store the result as `PFJ_SNIPPETS` — an array of `{ id, title, html }`.

4. If `PFJ_SNIPPETS` is empty, warn the user that the PFJ page may not have loaded correctly and suggest checking `PFJ_URL` in a browser manually before continuing.

5. Report: "Extracted M PFJ snippets: (list of titles)"

---

## Workflow — Step 4: Match Variations

Perform AI-assisted semantic matching between `PF_VARIATIONS` and `PFJ_SNIPPETS`. Apply rules in order:

1. **Exact match** (case-insensitive title comparison) — automatic match.
2. **Semantic match** (e.g., "Variations" matches "Variant examples") — match with a note explaining the reasoning.
3. **No match** — mark as `missing_in_pfj`.

After matching, check for unmatched PFJ snippets — mark as `extra_in_pfj`.

Produce three lists:

- **MATCHED** — array of `{ pf: { slug, title, html }, pfj: { id, title, html } }`
- **MISSING_IN_PFJ** — PF variations with no PFJ counterpart
- **EXTRA_IN_PFJ** — PFJ snippets with no PF counterpart

Report the matching table showing each PF variation, its matched PFJ snippet (or "---"), and the match type.

---

## Workflow — Step 5: Compare DOM/CSS for Matched Variations

For each entry in `MATCHED`, compare the `html` fields. Focus on:

1. **CSS class differences** — PF-specific classes (`pf-v6-c-*`, `pf-m-*`, `pf-v6-l-*`). Report missing and extra classes.
2. **Structural differences** — Element tag hierarchy. Report missing or extra wrapper elements.
3. **Attribute differences** — ARIA attributes, `type`, `role`, `tabindex`. Report missing or extra attributes.
4. **Icon differences** — Compare `viewBox` attributes on `<svg>` elements. A mismatched viewBox indicates a different icon (e.g., PF uses `rhMicrons` with viewBox `0 0 20 20` while PFJ uses `rhUi` with viewBox `0 0 32 32`). Report as an icon mismatch with both viewBox values and the containing element's CSS class for context.

### Filtering rules

Read `references/ignore-patterns.md` for the full list of patterns to ignore during comparison (dynamic IDs, SVG internals, whitespace, non-PF classes, version-dependent constants).

### Output per matched pair

```json
{
  "variation": "<PF title>",
  "status": "ok | differences_found",
  "missingClasses": [{ "class": "pf-m-xxx", "element": "<tag>", "context": "..." }],
  "extraClasses": [{ "class": "pf-m-xxx", "element": "<tag>", "context": "..." }],
  "structuralDiffs": ["description"],
  "attributeDiffs": ["description"],
  "iconDiffs": [{ "element": "<context class>", "pfViewBox": "0 0 W H", "pfjViewBox": "0 0 W H" }]
}
```

Store as `COMPARISON_RESULTS`.

---

## Workflow — Step 6: Print Inline Summary

Print the following summary directly in the conversation:

```
## PF Compare: <COMPONENT>

### Completeness: <MATCHED count>/<PF total> variations (<percentage>%)

Missing in PFJ:
  - title 1
  - title 2

Extra in PFJ:
  - title 1

### DOM Comparison (matched variations):
  variation: N class differences, M structural issues
  variation: OK

Full report: docs/pf-compare/<COMPONENT>.md
```

---

## Workflow — Step 7: Write Detailed Report

1. Create the output directory:
   ```
   mkdir -p docs/pf-compare
   ```

2. Detect the PF version by switching to the PF tab and running the script from `references/detect-pf-version.js` via `evaluate_script`.

3. Generate the report file using the template from `references/report-template.md`. Read that file and fill in the placeholders with actual data.

4. Write the report to `docs/pf-compare/<COMPONENT>.md`.

5. Report: "Detailed report saved to `docs/pf-compare/<COMPONENT>.md`"

For sample report output, see `examples/button.md` and `examples/card.md`.

---

## Workflow — Step 8: Cleanup

1. Use `list_pages` to find the PF and PFJ tabs opened during the workflow.
2. Close them with `close_page` (keep at least one tab open in the browser).
3. Print completion message with next steps:
   - Review the report at `docs/pf-compare/<COMPONENT>.md`
   - Use the report as input for a future `/pf-align` skill
   - Run `/pf-compare` on another component

---

## Error Handling

- **Component not found**: If curl returns non-200 for both PFJ URLs, report clearly and suggest checking the component slug or starting the dev server.
- **No variations extracted**: If PF or PFJ returns zero variations/snippets, warn the user that the page structure may have changed and the JS selectors may need updating. Empty PFJ results are most commonly caused by DOM structure changes in the showcase layout, not by missing components — check `references/extract-pfj-snippets.js` for the expected DOM traversal.
- **Chrome DevTools unavailable**: If MCP tools fail, report the error and suggest ensuring Chrome is running with DevTools MCP connected.
- **Partial data**: If only some comparisons succeed, still produce the report with available data and note which comparisons failed.

## Anti-Patterns

- **Blocking on cosmetic differences**: Do not report whitespace, formatting, or dynamic ID differences as issues.
- **Comparing non-PF classes**: Only compare classes prefixed with `pf-v6-` or `pf-m-`. Ignore application-specific or utility classes.
- **Deep SVG comparison**: Do not traverse SVG internals. Only compare the wrapping `<svg>` element's classes.
- **Overwriting reports without asking**: If a report already exists at the target path, note it in the output but proceed with overwriting (the file is regenerable).
