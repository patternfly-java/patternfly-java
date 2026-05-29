# Code Generation Reference

## Insertion Patterns by Action Item Type

### Type: add_variation

1. **Translate HTML to Java** using the translation table below. Read component class patterns first, match existing method names and modifiers, preserve fluent API style.

2. **Generate snippet ID:** Format: `<component>-<variation-slug>` (e.g., `button-primary-disabled`)

3. **Generate snippet code:**
   ```java
   addSnippet(new Snippet("<snippet-id>", "<title>",
       code("<snippet-id>"), () ->
       // @code-start:<snippet-id>
       <translated-java-code>
       // @code-end:<snippet-id>
   ));
   ```

4. **Insert location:** Before `startApiDocs()` call in showcase file, after existing snippets. Maintain spacing/indentation.

### Type: fix_css

1. **Identify modifier method:** Extract class name from description (e.g., `.pf-m-danger` -> `danger()`). Check if method exists in component class.

2. **Generate modifier method:**
   ```java
   public <Component> danger() {
       return css(modifier("danger"));
   }
   ```

3. **Insert location:** In `// ------------------------------------------------------ builder` section, after existing modifier methods, alphabetically sorted.

### Type: fix_structure

1. **Identify affected method:** Parse description for target (e.g., "Icon placement" -> icon-related methods). Read existing implementation.

2. **Generate wrapper code:**
   ```java
   return span().css(component(button, icon))
       .add(<existing-icon-code>);
   ```

3. **Insert/update location:** In relevant builder method or add method. Preserve existing logic. Update section markers if needed.

### Type: fix_attribute

1. **Identify ARIA method:** Extract attribute from description (e.g., `aria-label` -> `ariaLabel()`).

2. **Generate ARIA method:**
   ```java
   public <Component> ariaLabel(String label) {
       return aria(Aria.label, label);
   }
   ```

3. **Insert location:** In `// ------------------------------------------------------ aria` section, after existing ARIA methods, alphabetically sorted.

---

## HTML-to-Java Translation Table

### Button patterns

| PatternFly HTML | PFJ Builder API |
|-----------------|-----------------|
| `<button class="pf-v6-c-button pf-m-primary">Text</button>` | `button("Text").primary()` |
| `<button class="pf-v6-c-button pf-m-danger" disabled>Text</button>` | `button("Text").danger().disabled()` |
| `<button class="pf-v6-c-button"><span class="pf-v6-c-button__icon">...</span>Text</button>` | `button("Text").icon(...)` |
| `<button aria-label="Close">X</button>` | `button("X").ariaLabel("Close")` |

### Card patterns (container with sub-components)

| PatternFly HTML | PFJ Builder API |
|-----------------|-----------------|
| `<div class="pf-v6-c-card">...</div>` | `card()` |
| `<div class="pf-v6-c-card__header">...</div>` | `cardHeader()` |
| `<div class="pf-v6-c-card__body">Content</div>` | `cardBody().textContent("Content")` |
| `<div class="pf-v6-c-card__footer">...</div>` | `cardFooter()` |
| `<div class="pf-v6-c-card pf-m-compact">...</div>` | `card().compact()` |
| `<div class="pf-v6-c-card pf-m-flat">...</div>` | `card().flat()` |
| Full card with header, body, footer | `card().addHeader(cardHeader()).addBody(cardBody()).addFooter(cardFooter())` |

### Alert patterns (status modifiers + icon)

| PatternFly HTML | PFJ Builder API |
|-----------------|-----------------|
| `<div class="pf-v6-c-alert pf-m-info">...</div>` | `alert(info, "Title")` |
| `<div class="pf-v6-c-alert pf-m-success">...</div>` | `alert(success, "Title")` |
| `<div class="pf-v6-c-alert pf-m-warning">...</div>` | `alert(warning, "Title")` |
| `<div class="pf-v6-c-alert pf-m-danger">...</div>` | `alert(danger, "Title")` |
| `<div class="pf-v6-c-alert pf-m-inline">...</div>` | `alert(...).inline()` |
| Alert with description | `alert(info, "Title").addDescription(alertDescription("Details"))` |

### Badge patterns (simple element with count)

| PatternFly HTML | PFJ Builder API |
|-----------------|-----------------|
| `<span class="pf-v6-c-badge pf-m-read">7</span>` | `badge(7).read()` |
| `<span class="pf-v6-c-badge pf-m-unread">24</span>` | `badge(24).unread()` |

---

## General Translation Rules

**Text content:**
- Literal text -> First argument to factory method: `button("Click me")`
- No text -> Empty string: `button()`

**CSS classes:**
- `.pf-m-*` -> Modifier method: `.pf-m-primary` -> `.primary()`
- `.pf-c-<component>__*` / `.pf-v6-c-<component>__*` -> Component part (usually handled internally)

**Boolean attributes:**
- Presence = true, absence = false
- Examples: `disabled` -> `.disabled()`, `readonly` -> `.readonly()`

**ARIA attributes:**
- `aria-label="X"` -> `.ariaLabel("X")`
- `aria-hidden="true"` -> `.ariaHidden(true)`

**Icons:**
- FontAwesome: `fas fa-times` -> `fas("times")`
- PatternFly: `pf-icon pf-icon-close` -> `icon("close")`
- Import: `import static org.patternfly.icon.IconSets.*`

**Containers:**
- `<div>` -> `div()`
- `<span>` -> `span()`
- `<section>` -> `section()`

**Layout wrappers:**
- Use `div()` for generic containers
- Use `flex()` for flex layouts
- Use `flexItem()` for flex children

## General Translation Principles

1. **Always read component class first** -- identify existing factory methods, match naming conventions, reuse existing modifiers.

2. **Unknown patterns:** If HTML structure is unfamiliar, ask user for clarification. If modifier not found, create new modifier method. If component part unclear, examine existing component code.

3. **Preserve existing style** -- match indentation (4 spaces), method chaining style, comment formatting, and import patterns.