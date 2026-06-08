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
  version: "0.2.0"
---

# /pf-compare — PatternFly Component Comparison

Compares a PatternFly (React) component against its PatternFly Java implementation. Uses two phases: section coverage (which demo sections exist?) and DOM comparison (how do matched sections differ structurally?).

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

## Step 1: Pre-flight Checks

Run in order. Stop on failure.

1. **Parse arguments**: Extract `COMPONENT` and optional `--port` (default `1234`). If no component is provided, ask the user.

2. **Resolve PFJ showcase URL** — try in order:
   - Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:<port>/components/<COMPONENT>`
   - If HTTP 200, set `PFJ_URL = http://localhost:<port>/components/<COMPONENT>`
   - Otherwise, use the published showcase: set `PFJ_URL = https://patternfly-java.github.io/components/<COMPONENT>`
     - Note: The published PFJ showcase is a single-page app with client-side routing. `curl` will return 404 for deep links, but the page loads correctly in a browser. Do NOT use curl to verify this URL — trust it and verify via browser navigation in Step 2.

3. **Verify PF site**:
   - Run: `curl -s -o /dev/null -w "%{http_code}" -L https://www.patternfly.org/components/<COMPONENT>`
   - Note the `-L` flag to follow redirects (PF site uses 302 redirects to add trailing slashes).
   - If not 200, stop with: "Could not reach PF showcase at `https://www.patternfly.org/components/<COMPONENT>`. Verify the component name."

4. **Set variables**: `PF_URL = https://www.patternfly.org/components/<COMPONENT>`, `PFJ_URL`, `COMPONENT`

5. **Print**: "Pre-flight OK. Comparing PF (`PF_URL`) against PFJ (`PFJ_URL`)."

---

## Step 2: Extract Sections

Extract example sections from both pages using jump links navigation.

### 2a: PF sections

1. Open `PF_URL` in a new Chrome tab via `new_page`.
2. Read the script from `references/extract-sections.js` and pass it to `evaluate_script` with `args: ["pf", COMPONENT]`. The component slug is needed to validate that each section has a corresponding `ws-react-c-{component}-{id}` preview container.
3. Store the result as `PF_SECTIONS` — an array of `{ id, title, group }`.
4. Report: "Extracted N PF sections: (list of titles)"

### 2b: PFJ sections

1. Open `PFJ_URL` in a new Chrome tab via `new_page`.
2. Read the script from `references/extract-sections.js` and pass it to `evaluate_script` with `args: ["pfj"]`.
3. Store the result as `PFJ_SECTIONS` — an array of `{ id, title, group }`.
4. If `PFJ_SECTIONS` is empty, warn the user that the PFJ page may not have loaded correctly and suggest checking `PFJ_URL` in a browser manually before continuing.
5. Report: "Extracted M PFJ sections: (list of titles)"

---

## Step 3: Match Sections

Perform AI-assisted semantic matching between `PF_SECTIONS` and `PFJ_SECTIONS`. Apply rules in order:

1. **Exact match** (case-insensitive title comparison) — automatic match.
2. **Semantic match** (e.g., "Aria-disabled examples" matches "Aria-disabled") — match with a note explaining the reasoning.
3. **No match** — mark as `missing_in_pfj`.

After matching, check for unmatched PFJ sections — mark as `extra_in_pfj`.

Produce three lists:

- **MATCHED** — array of `{ pf: { id, title, group }, pfj: { id, title, group } }`
- **MISSING_IN_PFJ** — PF sections with no PFJ counterpart
- **EXTRA_IN_PFJ** — PFJ sections with no PF counterpart

Report the matching table showing each PF section, its matched PFJ section (or "---"), the group, and the match status.

---

## Step 4: DOM Comparison

For each entry in `MATCHED`, compare the rendered preview HTML.

### 4a: Extract preview HTML

For each matched pair:

1. **PF preview**: Switch to the PF tab. Run `evaluate_script` to extract innerHTML from the preview container. The container has `id="ws-react-c-<COMPONENT>-<pf.id>"` (e.g., `ws-react-c-button-variant-examples`). Extract its `innerHTML`.

   ```javascript
   (sectionId) => {
     const el = document.getElementById(sectionId);
     return el ? el.innerHTML : null;
   }
   ```

   Pass `args: ["ws-react-c-" + COMPONENT + "-" + pf.id]`.

2. **PFJ preview**: Switch to the PFJ tab. Run `evaluate_script` to find the `[data-pfj-demo]` element within the section identified by the PFJ heading ID. The heading has `id="<pfj.id>"`. Walk up to the parent stack, find the `[data-pfj-demo]` element, and extract its `innerHTML`.

   ```javascript
   (headingId) => {
     const heading = document.getElementById(headingId);
     if (!heading) return null;
     const stack = heading.parentElement?.parentElement?.parentElement;
     if (!stack) return null;
     const demo = stack.querySelector('[data-pfj-demo]');
     return demo ? demo.innerHTML : null;
   }
   ```

   Pass `args: [pfj.id]`.

Store both HTML strings as `PF_HTML` and `PFJ_HTML`.

### 4b: Normalize both sides

For each matched pair:

1. Read the script from `references/normalize-dom.js`.
2. Run it via `evaluate_script` twice — once with `PF_HTML` and once with `PFJ_HTML` as the argument.
3. Store the results as `PF_ELEMENTS` and `PFJ_ELEMENTS` — arrays of element signature objects.

### 4c: AI comparison

For each matched section, compare `PF_ELEMENTS` and `PFJ_ELEMENTS`. Classify each difference by priority:

| Priority | Category | What to look for |
|----------|----------|-----------------|
| **P1** | Missing component elements | PF has an element with a `pf-v6-c-*` class that has no counterpart in PFJ (by class signature). This usually means a sub-component or structural element is missing. |
| **P2** | Modifier differences | Same element exists on both sides (matching `pf-v6-c-*` class) but different `pf-m-*` modifiers. A modifier combination in PF has no match in PFJ, or vice versa. |
| **P3** | Attribute differences | Same element, but different `aria-*` attributes, `role`, `type`, `disabled`, or `tabindex` values. Missing or different `aria-label` is a common finding. |
| **P4** | Icon differences | SVG elements with different `viewBox` values. This usually indicates different icon sets (FontAwesome vs Red Hat icons). |
| **P5** | Cosmetic / showcase-only | Element count differences from showcase layout (flex wrappers, spacing elements), text content differences, or differences in non-functional attributes. |

**Guidelines for the AI comparison:**
- Compare elements by their `classes` array (component class signature). Two elements "match" if they share the same primary `pf-v6-c-*` class.
- Do NOT report differences in element count alone — only report what specifically differs.
- When PF has more elements than PFJ, identify which specific elements are missing, not just the count delta.
- Consider showcase layout context: flex wrappers (`pf-v6-l-flex`, `pf-v6-l-stack`) are often showcase layout, not component structure.
- If both sides have the same component elements with the same modifiers and attributes, report "ok".

### 4d: Store results

For each matched section, produce:
```json
{
  "section": "<PF title>",
  "status": "ok | differences_found",
  "differences": [
    {
      "priority": "P1",
      "description": "..."
    }
  ]
}
```

Store as `COMPARISON_RESULTS`.

---

## Step 5: Print Inline Summary

Print the following summary directly in the conversation:

```
## PF Compare: <COMPONENT>

### Section Coverage: <MATCHED count>/<PF total> sections (<percentage>%)

Missing in PFJ:
  - title 1
  - title 2

Extra in PFJ:
  - title 1

### DOM Differences:
  section: P2 (2 modifier diffs), P3 (1 attribute diff)
  section: OK
  section: P4 (1 icon diff)

Full report: reports/pf-compare/<COMPONENT>.md
```

---

## Step 6: Write Detailed Report

1. Create the output directory:
   ```
   mkdir -p reports/pf-compare
   ```

2. Detect the PF version by switching to the PF tab and running the script from `references/detect-pf-version.js` via `evaluate_script`.

3. Generate the report file using the template from `references/report-template.md`. Read that file and fill in the placeholders with actual data.

4. Write the report to `reports/pf-compare/<COMPONENT>.md`.

5. **Write the JSON companion report** to `reports/pf-compare/<COMPONENT>.json`. This file contains the same data in structured form. Use the schema from `references/report-schema.json` and match the format in `examples/button.json`. The JSON includes:
   - Metadata: skillVersion (from `metadata.version` in this SKILL.md, currently `"0.2.0"`), component, date, pfVersion, pfUrl, pfjUrl
   - Section coverage: pfCount, pfjCount, matched, missingInPfj, extraInPfj
   - Full `variations` array from Step 4a — each entry has `{ slug, title, html }` where `slug` is the PF section ID, `title` is the section heading, and `html` is the raw (pre-normalization) PF preview innerHTML. This array is consumed by `/pf-align` for reference HTML.
   - Action items with number, type, priority, title, description, category, and affected variations

6. Report: "Reports saved to `reports/pf-compare/<COMPONENT>.md` and `reports/pf-compare/<COMPONENT>.json`"

---

## Step 7: Cleanup

1. Use `list_pages` to find the PF and PFJ tabs opened during the workflow.
2. Close them with `close_page` (keep at least one tab open in the browser).
3. Print completion message with next steps:
   - Review the report at `reports/pf-compare/<COMPONENT>.md`
   - JSON data available at `reports/pf-compare/<COMPONENT>.json` (used by `/pf-align`)
   - Use the report as input for a future `/pf-align` skill
   - Run `/pf-compare` on another component

---

## Error Handling

- **Component not found**: If curl returns non-200 for both PFJ URLs, report clearly and suggest checking the component slug or starting the dev server.
- **No sections extracted**: If PF or PFJ returns zero sections, warn the user that the page structure may have changed and the jump links selectors may need updating.
- **Chrome DevTools unavailable**: If MCP tools fail, report the error and suggest ensuring Chrome is running with DevTools MCP connected.
- **Preview HTML not found**: If a preview container is not found for a matched section, skip that section's DOM comparison and note it in the report. This can happen if the PF page uses a different preview container pattern for that section.
- **Partial data**: If only some comparisons succeed, still produce the report with available data and note which comparisons failed.

## Anti-Patterns

- **Blocking on cosmetic differences**: Do not report P5 cosmetic differences as blocking issues.
- **Comparing non-PF classes**: Only compare classes prefixed with `pf-v6-` or `pf-m-`. Ignore application-specific or utility classes.
- **Deep SVG comparison**: Do not traverse SVG internals. Only compare the `viewBox` attribute.
- **Overwriting reports without asking**: If a report already exists at the target path, note it in the output but proceed with overwriting (the file is regenerable).
- **Reporting element counts as issues**: An element count difference alone is not a finding. Identify what specifically is missing or extra.
