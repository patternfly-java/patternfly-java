# Code Generation Reference

Patterns for auto-generated simple fixes. For complex items (add_variation, fix_structure, fix_icon, implement_feature), the skill presents context only — the user implements manually.

## fix_css — Add Modifier Method

1. Extract modifier name from the CSS class (e.g., `.pf-m-danger` → `danger`)
2. Check if the method already exists in the component class
3. Generate:
   ```java
   public <Component> danger() {
       return css(modifier("danger"));
   }
   ```
4. Insert in `// ------------------------------------------------------ builder` section, after existing modifier methods, alphabetically sorted

## fix_attribute — Add ARIA Method

1. Extract attribute name (e.g., `aria-label` → `ariaLabel`, `aria-expanded` → `ariaExpanded`)
2. Check if the method already exists in the component class
3. Generate:
   ```java
   // String value
   public <Component> ariaLabel(String label) {
       return aria(Aria.label, label);
   }

   // Boolean value
   public <Component> ariaExpanded(boolean expanded) {
       return aria(Aria.expanded, expanded);
   }
   ```
4. Insert in `// ------------------------------------------------------ aria` section, after existing ARIA methods, alphabetically sorted

## General Rules

These apply when generating code and are also useful as reference when implementing complex items manually:

- **Modifier methods** return `this` via `css(modifier("name"))`
- **ARIA methods** return `this` via `aria(Aria.name, value)`
- **Indentation**: 4 spaces, match existing style
- **Imports**: Add `import static org.patternfly.style.Classes.modifier` if not present
- **Section markers**: `// ------------------------------------------------------ <section>` — respect these boundaries
- **ElementTextDelegate vs ElementTextMethods**: Use Delegate when text is in a child element, Methods when the component IS the text element
