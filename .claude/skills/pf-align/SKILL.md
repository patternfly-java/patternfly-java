---
name: pf-align
description: >-
  This skill should be used when aligning a PatternFly Java component with its
  PatternFly counterpart by implementing action items from pf-compare reports.
  Triggers include /pf-align, "align component", "implement missing variations",
  "fix PFJ component", "apply pf-compare recommendations", "add missing PFJ
  variations", "sync with PatternFly", "bring component up to date",
  "implement pf-compare action items", or any request to implement changes
  identified by a comparison report.
metadata:
  version: "0.1.0"
---

# /pf-align — PatternFly Java Alignment

This skill implements action items from `/pf-compare` reports to align PatternFly Java (PFJ) components with the upstream PatternFly design system. It extracts reference HTML from PatternFly documentation, translates it to Java builder API code, and integrates it into the existing component implementation.

## Tools

### Chrome DevTools MCP (require approval on first use)

- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__new_page** — Open new browser tabs
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__select_page** — Switch between tabs
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__evaluate_script** — Run JS in the page context
- **mcp__plugin_chrome-devtools-mcp_chrome-devtools__close_page** — Close browser tabs

## Arguments

```
/pf-align <component> [--port <port>] [--item <number>]
```

**Parameters:**
- `<component>` (required) — Component name matching report file (e.g., `button`, `card`, `alert`)
- `--port <port>` (optional) — Showcase server port (default: 8888)
- `--item <number>` (optional) — Process only the specified action item number (default: process all)

**Examples:**
```
/pf-align button
/pf-align card --port 9000
/pf-align alert --item 3
```

## Workflow

### Step 1: Pre-flight Checks

**Parse arguments:**
- Extract component name, port (default 8888), item filter
- Validate component name is not empty

**Check report exists:**
- Path: `docs/pf-compare/<COMPONENT>.md`
- If not found → ERROR (report not found)

**Locate component files:**
- Component class: `components/src/main/java/org/patternfly/component/<component>/<Component>.java`
- Showcase file: `showcase/src/main/java/org/patternfly/showcase/component/<Component>Component.java`
- For compound names (e.g., `description-list`), convert to PascalCase: `DescriptionList.java`, `DescriptionListComponent.java`
- If not found at expected path, search with: `find components/src -name "<Component>.java" -path "*/component/*"`
- If still not found → ERROR (class not found)

**Verify showcase server:**
- Check `http://localhost:<port>/` is accessible
- If not → ERROR (showcase not running)

### Step 2: Parse Report

**Read report file:**
```bash
Read docs/pf-compare/<COMPONENT>.md
```

**Extract YAML frontmatter:**
```yaml
component: button
pf_url: https://www.patternfly.org/components/button
pfj_url: http://localhost:8888/#button
completeness:
  missing_in_pfj: [...]
  extra_in_pfj: [...]
```

**Parse Action Items section:**

Look for `## Action Items` heading and extract numbered items:

```markdown
1. **Add variation:** Primary — implement primary button variant
2. **Fix CSS:** .pf-m-danger — add danger modifier class
3. **Fix structure:** Icon placement — wrap icon in span.pf-c-button__icon
4. **Fix attribute:** aria-label — add aria-label attribute support
```

**Item format:**
```
<number>. **<type>:** <title> — <description>
```

**Types:**
- `Add variation` — New component variation (HTML extraction required)
- `Fix CSS` — Missing CSS class/modifier (component class change)
- `Fix structure` — HTML structure mismatch (component class change)
- `Fix attribute` — Missing HTML attribute (component class change)

**Store parsed items:**
```javascript
{
  number: 1,
  type: "add_variation",
  title: "Primary",
  description: "implement primary button variant",
  raw: "1. **Add variation:** Primary — implement primary button variant"
}
```

### Step 3: Present Action Items

**Print numbered list:**
```
Found 4 action items in docs/pf-compare/button.md:
  1. Add variation: Primary — implement primary button variant
  2. Fix CSS: .pf-m-danger — add danger modifier class
  3. Fix structure: Icon placement — wrap icon in span.pf-c-button__icon
  4. Fix attribute: aria-label — add aria-label attribute support
```

**Handle --item filter:**
- If `--item N` specified, filter to only item N
- If item N not found → ERROR (invalid item number)
- If no --item, process all items sequentially

**For each item:**
- Print: `Processing item N: <type> — <title>`
- Continue to Step 4

### Step 4: Analyze Existing Code

**Read component class:**
```bash
Read components/src/main/java/org/patternfly/component/<component>/<Component>.java
```

**Identify patterns:**
- **Builder methods:** `public <Component> methodName(...)` returning `this`
- **Modifiers:** Methods that toggle CSS classes (e.g., `primary()`, `danger()`)
- **Section markers:** `// ------------------------------------------------------ <section>`
- **Typical sections:** factory, instance, add, builder, aria, events, api, internal

**Read showcase file:**
```bash
Read showcase/src/main/java/org/patternfly/showcase/component/<Component>Component.java
```

**Identify patterns:**
- **Snippet IDs:** First argument to `addSnippet(new Snippet("id", ...))`
- **Layout patterns:** `div()`, `section()`, `flex()` wrappers in snippet code
- **Code markers:** `// @code-start:id` and `// @code-end:id`
- **Imports:** `import static` statements at top

**Store context:**
- Existing modifiers (e.g., `primary()`, `danger()`, `disabled()`)
- Existing ARIA methods (e.g., `ariaLabel()`, `ariaDisabled()`)
- Existing snippet IDs
- Import patterns

### Step 5: Extract Reference HTML

**Only for `add_variation` items.**

**Open PatternFly page:**
```javascript
new_page({ url: <pf_url from YAML> })
```

**Construct variation slug from title:**
1. Lowercase the entire string
2. Remove parentheses and their contents: "Primary (disabled)" → "primary"
3. Replace spaces, underscores, and non-alphanumeric chars with hyphens
4. Collapse consecutive hyphens into one
5. Trim leading/trailing hyphens

Examples:
- "Primary disabled" → "primary-disabled"
- "Link (disabled)" → "link"
- "Call to action" → "call-to-action"
- "Stateful toggle" → "stateful-toggle"

**Extract HTML:** Read the script from `references/extract-variation-html.js` and pass it to `evaluate_script` with `args: [<component>, <variation-slug>]`.

**Handle extraction failure:**
- If HTML is null → ERROR (HTML extraction failed)
- Log the attempted selector for debugging

**Store extracted HTML:**
- Trim whitespace
- Validate not empty
- Continue to Step 6

### Step 6: Generate Code

**Pre-check implementation:**
- For `add_variation`: Check if snippet ID exists in showcase file
- For `fix_css`: Check if modifier method exists in component class
- For `fix_attribute`: Check if ARIA method exists in component class
- If already implemented → Skip with message

**IMPORTANT: Read `references/code-generation.md` before generating any code.** Find the insertion pattern matching the item type (`add_variation`, `fix_css`, `fix_structure`, `fix_attribute`) and apply the corresponding template. Use the HTML-to-Java translation table from the same file.

**For all types:**
- Preserve existing imports
- Add new imports if needed (e.g., `import static org.patternfly.style.Classes.*`)
- Maintain 4-space indentation
- Keep line length ≤ 128 characters
- Follow existing code style

### Step 7: Build Verify

**Run build:**
```bash
mvn verify -Dquickly -P showcase
```

**Handle build failure:**
- Print full error output
- Ask: "Build failed. Revert changes? (yes/no)"
- If yes → Revert all changes to component/showcase files
- If no → Keep changes, allow manual fix
- Continue to next item or exit

**On success:**
- Print: "Build passed."
- Continue to Step 8

### Step 8: Show Diff & Approve

**Show summary:**
```
Changes for item N (<type>):
  Modified: components/src/main/java/org/patternfly/component/<component>/<Component>.java
  Modified: showcase/src/main/java/org/patternfly/showcase/component/<Component>Component.java

  Added:
    - Modifier method: danger()
    - Snippet: button-danger

  Lines changed: +15
```

**Ask for approval:**
```
Approve these changes? (yes/no/skip)
  yes  - Keep changes and continue
  no   - Revert changes and continue
  skip - Keep changes but skip remaining items
```

**Handle response:**
- `yes` → Continue to next item
- `no` → Revert changes, continue to next item
- `skip` → Continue to Step 9 (cleanup)
- Invalid input → Ask again

**Revert if rejected:**
```bash
git checkout components/src/main/java/org/patternfly/component/<component>/<Component>.java
git checkout showcase/src/main/java/org/patternfly/showcase/component/<Component>Component.java
```

### Step 9: Cleanup & Summary

**Close Chrome tabs:**
```javascript
close_page()
```

**Print summary:**
```
Alignment complete for <component>:
  Processed: 3 items
  Skipped: 1 item (already implemented)
  Remaining: 0 items

Next steps:
  1. Review changes: git diff
  2. Full build: mvn clean verify -P showcase
  3. Run tests: mvn test -Dtest=<Component>Test
  4. Commit: git add -A && git commit -m "feat: Align <component> with PatternFly"
  5. Update report: /pf-compare <component> --update
```

**Files changed:**
- List all modified files with absolute paths
- Show line count changes (+X -Y)

**Suggest next steps:**
- If --item was used and other items remain → Suggest running without filter
- If all items processed → Suggest running /pf-compare --update to verify

## Code Generation Reference

For HTML-to-Java translation patterns, read `references/code-generation.md`. For the expected input report format, see `examples/sample-report-input.md`.

## Error Handling

| Scenario | Action |
|----------|--------|
| Report not found | Print error: "Report not found at docs/pf-compare/<component>.md. Run /pf-compare <component> first." Exit. |
| Component class not found | Print error: "Component class not found at <path>. Verify component name." Exit. |
| Showcase file not found | Print error: "Showcase file not found at <path>. Component may not have demo page." Exit. |
| Showcase not running | Print error: "Showcase server not accessible at http://localhost:<port>. Start with: cd showcase && pnpm run watch". Exit. |
| Chrome DevTools unavailable | Print error: "Chrome DevTools MCP not available. Ensure chrome-devtools-mcp is running." Exit. |
| HTML extraction failed | Print warning: "Could not extract HTML for '<title>'. Selector tried: ws-core-c-<component>-<variation-slug>. Skip item." Continue. |
| Build failure | Ask to revert changes. If yes, revert. If no, keep changes. Continue. |
| Already implemented | Print: "Item N already implemented (found <snippet-id> / <method-name>). Skip." Continue. |
| Unknown pattern | Print: "Unknown HTML pattern in '<title>'. Manual implementation needed. Skip item." Continue. |
| Invalid item number | Print error: "Item <number> not found in report. Valid range: 1-<total>." Exit. |

## Anti-Patterns

**DON'T:**
- Generate code without reading existing component patterns first
- Modify code outside the scope of the action item
- Skip the build verification step
- Proceed without user approval after showing diff
- Hardcode HTML-to-Java translations (always read component class)
- Overwrite user changes (check git status first)

**DO:**
- Read component class before translating HTML
- Preserve existing code style and patterns
- Run build after every change
- Ask for approval before finalizing
- Skip items that are already implemented
- Provide clear error messages and next steps
