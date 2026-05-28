---
name: pf-align
description: Align PatternFly Java components with PatternFly by implementing action items from pf-compare reports
author: Harald Pehl
license: Apache-2.0
version: 0.1.0
---

# /pf-align — PatternFly Java Alignment

This skill implements action items from `/pf-compare` reports to align PatternFly Java (PFJ) components with the upstream PatternFly design system. It extracts reference HTML from PatternFly documentation, translates it to Java builder API code, and integrates it into the existing component implementation.

## Tools

**Pre-allowed tools:**
- Read
- Write
- Edit
- Bash

**Chrome DevTools MCP tools:**
- new_page
- select_page
- evaluate_script
- close_page

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
- If either not found → ERROR (class not found)

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

**Construct variation slug:**
- Convert title to kebab-case: "Primary disabled" → "primary-disabled"
- Remove special chars: "Primary (disabled)" → "primary-disabled"

**Extract HTML:**
```javascript
evaluate_script({
  function: `
    (componentSlug, variationSlug) => {
      const prefix = 'ws-core-c-' + componentSlug + '-';
      const container = document.getElementById(prefix + variationSlug);
      if (!container) return null;
      const preview = container.querySelector('.ws-preview-html');
      return preview ? preview.innerHTML.trim() : null;
    }
  `,
  args: [<component>, <variation-slug>]
})
```

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

**Handle by type:**

#### Type: add_variation

1. **Translate HTML to Java:**
   - Use Code Generation Reference (see section below)
   - Read component class patterns first
   - Match existing method names and modifiers
   - Preserve fluent API style

2. **Generate snippet ID:**
   - Format: `<component>-<variation-slug>` (e.g., `button-primary-disabled`)

3. **Generate snippet code:**
   ```java
   addSnippet(new Snippet("<snippet-id>", "<title>",
       code("<snippet-id>"), () ->
       // @code-start:<snippet-id>
       <translated-java-code>
       // @code-end:<snippet-id>
   ));
   ```

4. **Insert location:**
   - Before `startApiDocs()` call in showcase file
   - After existing snippets
   - Maintain spacing/indentation

#### Type: fix_css

1. **Identify modifier method:**
   - Extract class name from description (e.g., `.pf-m-danger` → `danger()`)
   - Check if method exists in component class

2. **Generate modifier method:**
   ```java
   public <Component> danger() {
       return css(modifier("danger"));
   }
   ```

3. **Insert location:**
   - In `// ------------------------------------------------------ builder` section
   - After existing modifier methods
   - Alphabetically sorted

#### Type: fix_structure

1. **Identify affected method:**
   - Parse description for target (e.g., "Icon placement" → icon-related methods)
   - Read existing implementation

2. **Generate wrapper code:**
   ```java
   // Wrap icon in span with class
   return span().css(component(button, icon))
       .add(<existing-icon-code>);
   ```

3. **Insert/update location:**
   - In relevant builder method or add method
   - Preserve existing logic
   - Update section markers if needed

#### Type: fix_attribute

1. **Identify ARIA method:**
   - Extract attribute from description (e.g., `aria-label` → `ariaLabel()`)

2. **Generate ARIA method:**
   ```java
   public <Component> ariaLabel(String label) {
       return aria(Aria.label, label);
   }
   ```

3. **Insert location:**
   - In `// ------------------------------------------------------ aria` section
   - After existing ARIA methods
   - Alphabetically sorted

**For all types:**
- Preserve existing imports
- Add new imports if needed (e.g., `import static org.patternfly.style.Classes.*`)
- Maintain 4-space indentation
- Keep line length ≤ 128 characters
- Follow existing code style

### Step 7: Build Verify

**Run build:**
```bash
mvn compile -Dquickly -P showcase
```

**Handle build failure:**
- Print full error output
- Ask: "Build failed. Revert changes? (yes/no)"
- If yes → Revert all changes to component/showcase files
- If no → Keep changes, allow manual fix
- Continue to next item or exit

**On success:**
- Print: "Build passed ✓"
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
  2. Run tests: mvn test -Dtest=<Component>Test
  3. Commit: git add -A && git commit -m "feat: Align <component> with PatternFly"
  4. Update report: /pf-compare <component> --update
```

**Files changed:**
- List all modified files with absolute paths
- Show line count changes (+X -Y)

**Suggest next steps:**
- If --item was used and other items remain → Suggest running without filter
- If all items processed → Suggest running /pf-compare --update to verify
- If showcase not running → Suggest starting showcase server

## Code Generation Reference

### HTML-to-Java Translation Table

**Common Button patterns:**

| PatternFly HTML | PFJ Builder API |
|-----------------|-----------------|
| `<button class="pf-c-button pf-m-primary">Text</button>` | `button("Text").primary()` |
| `<button class="pf-c-button pf-m-danger" disabled>Text</button>` | `button("Text").danger().disabled()` |
| `<button class="pf-c-button"><span class="pf-c-button__icon">...</span>Text</button>` | `button("Text").icon(...)` |
| `<button aria-label="Close">X</button>` | `button("X").ariaLabel("Close")` |
| `<div>...</div>` wrapper | `div().add(...)` |

**Text content:**
- Literal text → First argument to factory method: `button("Click me")`
- No text → Empty string: `button()`

**CSS classes:**
- `.pf-m-*` → Modifier method: `.pf-m-primary` → `.primary()`
- `.pf-c-button__*` → Component part (usually handled internally)

**Boolean attributes:**
- `disabled` → `.disabled()`
- `readonly` → `.readonly()`
- Presence = true, absence = false

**ARIA attributes:**
- `aria-label="X"` → `.ariaLabel("X")`
- `aria-hidden="true"` → `.ariaHidden(true)`

**Icons:**
- FontAwesome: `fas fa-times` → `fas("times")`
- PatternFly: `pf-icon pf-icon-close` → `icon("close")`

**Containers:**
- `<div>` → `div()`
- `<span>` → `span()`
- `<section>` → `section()`

### General Translation Principles

1. **Always read component class first:**
   - Identify existing factory methods
   - Match naming conventions
   - Reuse existing modifiers

2. **Layout wrappers:**
   - Use `div()` for generic containers
   - Use `flex()` for flex layouts
   - Use `flexItem()` for flex children

3. **Icons:**
   - Import: `import static org.patternfly.icon.IconSets.*`
   - FontAwesome: `fas("icon-name")`
   - PatternFly: `patternfly("icon-name")`

4. **Unknown patterns:**
   - If HTML structure is unfamiliar → Ask user for clarification
   - If modifier not found → Create new modifier method
   - If component part unclear → Examine existing component code

5. **Preserve existing style:**
   - Match indentation (4 spaces)
   - Match method chaining style
   - Match comment formatting
   - Use existing import patterns

## Error Handling

| Scenario | Action |
|----------|--------|
| Report not found | Print error: "Report not found at docs/pf-compare/<component>.md. Run /pf-compare <component> first." Exit. |
| Component class not found | Print error: "Component class not found at <path>. Verify component name." Exit. |
| Showcase file not found | Print error: "Showcase file not found at <path>. Component may not have demo page." Exit. |
| Showcase not running | Print error: "Showcase server not accessible at http://localhost:<port>. Start with: cd showcase && npm run watch". Exit. |
| Chrome DevTools unavailable | Print error: "Chrome DevTools MCP not available. Ensure chrome-devtools-mcp is running." Exit. |
| HTML extraction failed | Print warning: "Could not extract HTML for '<title>'. Selector tried: ws-core-c-<component>-<variation-slug>. Skip item." Continue. |
| Build failure | Ask to revert changes. If yes, revert. If no, keep changes. Continue. |
| Already implemented | Print: "Item N already implemented (found <snippet-id> / <method-name>). Skip." Continue. |
| Unknown pattern | Print: "Unknown HTML pattern in '<title>'. Manual implementation needed. Skip item." Continue. |
| Invalid item number | Print error: "Item <number> not found in report. Valid range: 1-<total>." Exit. |

## Anti-Patterns

**DON'T:**
- ❌ Generate code without reading existing component patterns first
- ❌ Modify code outside the scope of the action item
- ❌ Skip the build verification step
- ❌ Proceed without user approval after showing diff
- ❌ Hardcode HTML-to-Java translations (always read component class)
- ❌ Overwrite user changes (check git status first)

**DO:**
- ✅ Read component class before translating HTML
- ✅ Preserve existing code style and patterns
- ✅ Run build after every change
- ✅ Ask for approval before finalizing
- ✅ Skip items that are already implemented
- ✅ Provide clear error messages and next steps
