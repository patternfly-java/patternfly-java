# PatternFly Java Component Lint Checklist

Each rule has an ID, severity (ERROR or WARN), and applies to a file classification (Component, SubComponent base, Sub-component, package-info).

---

## 1. Package structure

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `pkg-location` | ERROR | All | Component package is directly under `org.patternfly.component.<name>` |
| `pkg-info` | ERROR | package-info | A `package-info.java` file exists in the package |
| `pkg-subcomponent-base` | ERROR | SubComponent base | If sub-components exist, a shared abstract SubComponent base class exists |
| `pkg-subcomponent-visibility` | ERROR | SubComponent base | SubComponent base class is package-private (no `public` modifier on class) |

---

## 2. Documentation

### 2.1 Class-level Javadoc

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `doc-class-javadoc` | ERROR | Component, Sub-component | Class has a Javadoc comment |
| `doc-class-description` | WARN | Component, Sub-component | Javadoc first sentence describes the component's purpose |
| `doc-class-see` | ERROR | Component | Javadoc contains `@see` tag linking to `https://www.patternfly.org/components/<component>` |

### 2.2 Package-info Javadoc

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `doc-pkg-javadoc` | ERROR | package-info | `package-info.java` has a Javadoc comment |
| `doc-pkg-description` | WARN | package-info | First sentence describes what the package provides |
| `doc-pkg-usage` | WARN | package-info | Contains a `<h2>Usage</h2>` section with `{@snippet}` code examples |
| `doc-pkg-see-classes` | WARN | package-info | Contains `@see` tags referencing the main classes in the package |
| `doc-pkg-see-pf` | WARN | package-info | Contains `@see` tag linking to the PatternFly docs |

### 2.3 Method-level Javadoc

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `doc-builder-linkplain` | WARN | Component, Sub-component | Builder method overloads (no-arg delegating to boolean variant) use single-line `/** Same as {@linkplain #method(params) method(values)} */` |

---

## 3. Code structure — Sections

### 3.1 Section separators

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `section-format` | ERROR | Component, Sub-component | Section separators use format: `// ------------------------------------------------------ <name>` (exactly `//` + space + 54 dashes + space + name; the prefix before the name is always 60 characters wide) |
| `section-blank-before` | WARN | Component, Sub-component | Exactly one blank line before each section separator |
| `section-blank-after` | WARN | Component, Sub-component | Exactly one blank line after each section separator |

### 3.2 Section order

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `section-order` | ERROR | Component, Sub-component | Sections appear in this order (all optional, but order must be preserved): `factory` → `instance` → `add` → `builder` → `aria` → `events` → `api` → `internal` |
| `section-factory` | WARN | Component, Sub-component | A `factory` section exists |
| `section-instance` | WARN | Component, Sub-component | An `instance` section exists |

### 3.3 Section content

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `section-factory-content` | ERROR | Component, Sub-component | Factory methods (public static) appear only in the `factory` section |
| `section-instance-content` | ERROR | Component, Sub-component | Fields and constructors appear in the `instance` section |
| `section-add-content` | WARN | Component | `add*()` methods (that add sub-components) appear in the `add` section |
| `section-builder-that` | WARN | Component, Sub-component | `that()` method is the last method in the `builder` section |
| `section-events-content` | WARN | Component, Sub-component | `on*()` event handler methods appear in the `events` section |
| `section-internal-visibility` | WARN | Component, Sub-component | Methods in `internal` section are package-private or private |

---

## 4. Code structure — Fields and constructors

### 4.1 Field ordering (within `instance` section)

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `field-order` | WARN | Component, Sub-component | Fields follow this order: (1) static final (Logger first if present), (2) static non-final, (3) public final, (4) public non-final, (5) package-private final, (6) package-private non-final, (7) protected final, (8) protected non-final, (9) private final, (10) private non-final |
| `field-logger-first` | WARN | Component | If a Logger field exists, it is the first field in the `instance` section |

### 4.2 Constructor

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `ctor-visibility` | ERROR | Component, Sub-component | Constructors are package-private (no access modifier) |
| `ctor-in-instance` | ERROR | Component, Sub-component | Constructor is in the `instance` section, after fields |

---

## 5. Naming conventions

### 5.1 Factory methods

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `name-factory` | ERROR | Component | Factory method name matches component class name in camelCase (e.g., `Card` → `card()`, `EmptyState` → `emptyState()`) |
| `name-factory-sub` | ERROR | Sub-component | Factory method name matches sub-component class in camelCase (e.g., `CardBody` → `cardBody()`, `TabContent` → `tabContent()`) |
| `name-factory-static` | ERROR | Component, Sub-component | Factory methods are `public static` |

### 5.2 Builder methods

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `name-builder-return` | WARN | Component, Sub-component | Builder methods in the `builder` section return `this` (the component/sub-component type) |
| `name-add-prefix` | WARN | Component | Methods adding sub-components use `add<SubComponentName>()` naming |

### 5.3 Event handler methods

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `name-event-prefix` | WARN | Component, Sub-component | Event handler registration methods use `on<Event>()` naming |

### 5.4 ARIA methods

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `name-aria-prefix` | WARN | Component, Sub-component | ARIA methods use `aria<Attribute>()` naming and call `aria(Aria.<attr>, value)` |

### 5.5 Sub-component constants

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `name-subid` | ERROR | Sub-component | Defines `public static final String SUB_COMPONENT_ID` |
| `name-subname` | ERROR | Sub-component | Defines `public static final String SUB_COMPONENT_NAME` |

---

## 6. Inheritance and registration

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `inherit-component` | ERROR | Component | Extends `BaseComponent<E, Self>` or `BaseComponentSVG<E, Self>` |
| `inherit-sub-base` | ERROR | SubComponent base | Extends `SubComponent<E, B>` |
| `inherit-sub` | ERROR | Sub-component | Extends the package's SubComponent base class (not `SubComponent` directly) |
| `inherit-sub-base-ctor` | ERROR | SubComponent base | Constructor passes `ComponentType.<type>` as first argument to `super()` |
| `type-enum` | ERROR | Component | A corresponding entry exists in `org.patternfly.component.ComponentType` for this component |

---

## 7. Class declaration formatting

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `decl-implements-format` | ERROR | Component, Sub-component | When implementing more than one interface, each interface is on its own line with 8-space indent, `implements` is on the same line as `extends`, and a newline follows it. The opening brace `{` is on the last interface line. |
| `decl-implements-order` | WARN | Component, Sub-component | Interfaces in the `implements` clause are listed in alphabetical order |
| `decl-modifiers-import` | WARN | Component, Sub-component | Nested interfaces from `org.patternfly.style.Modifiers` (e.g., `Compact`, `Disabled`, `Plain`) are imported as regular nested-class imports (`import org.patternfly.style.Modifiers.Compact`), not static imports. Only utility methods like `toggleModifier` use static imports. |

**Example:**
```java
public class Card extends BaseComponent<HTMLDivElement, Card> implements
        Compact<HTMLDivElement, Card>,
        Disabled<HTMLDivElement, Card>,
        FullHeight<HTMLDivElement, Card>,
        Glass<HTMLDivElement, Card>,
        Plain<HTMLDivElement, Card> {
```

---

## 8. General code formatting

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `fmt-indent` | WARN | All | 4-space indentation, no tabs |
| `fmt-line-length` | WARN | All | Lines do not exceed 128 characters |
| `fmt-final-newline` | WARN | All | File ends with exactly one trailing newline (`insert_final_newline = true`) |
| `fmt-import-order` | WARN | All | Imports follow: `java.*` → `javax.*` → `jakarta.*` → `org.*` (includes `org.patternfly.*`, `org.jboss.*`) → `io.*` → `com.*`, then blank line, then static imports |
| `fmt-no-star-import` | ERROR | All | No wildcard/star imports |
| `fmt-license-header` | WARN | All | File starts with Apache 2.0 license header (also enforced by the build, so typically caught there) |

---

## 9. Component store

| ID | Sev | Applies to | Rule |
|---|---|---|---|
| `store-component` | WARN | Component | If sub-components use `lookupComponent()`, the component calls `storeComponent()` in its constructor |
| `store-sub` | WARN | Sub-component | If other sub-components use `lookupSubComponent("<id>")` for this sub-component, it calls `storeSubComponent()` in its constructor |
| `store-lookup-timing` | WARN | Sub-component | `lookupComponent()` and `lookupSubComponent()` are only called after DOM attachment (in `attach()` callbacks or event handlers), never in the constructor |
