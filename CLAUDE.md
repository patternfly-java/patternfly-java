# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PatternFly Java is a pure Java implementation of [PatternFly](https://www.patternfly.org/) web UI components. No JavaScript dependencies (except charts). Built on Elemento's builder API, compatible with both GWT and J2CL compilation targets. Published under `org.patternfly` on Maven Central.

## Build Commands

| Command | Purpose |
|---------|---------|
| `mvn clean verify` | Full build with all checks (format, checkstyle, tests) |
| `mvn verify -Dquickly` | Quick build (skip tests, checkstyle, javadoc) |
| `mvn test -Dtest=ModifierTest` | Run a single test class |
| `mvn test -Dtest=ModifierTest#testModifiers` | Run a single test method |
| `mvn j2cl:watch -P showcase` | Watch J2CL compilation for showcase dev |
| `cd showcase && npm run watch` | Watch CSS/HTML and serve showcase locally |
| `mvn clean package -P showcase,prod` | Build production showcase |

Uses Maven Wrapper (`mvnw`). Requires Java 21+ and Maven 3.9.9+.

## Module Structure

- **bom** - Bill of Materials for dependency version management
- **core** - Core classes, handlers, styles, utilities (`org.patternfly.core`, `org.patternfly.style`, `org.patternfly.handler`)
- **components** - All UI components (`org.patternfly.component.*`) — 50+ component packages
- **layouts** - Page layouts (Page, Sidebar, etc.)
- **icons** - IconSets (FontAwesome, PatternFly icons)
- **tokens** - PatternFly design tokens as enum constants
- **charts** - Chart web components wrapper (NPM package)
- **extensions/codeeditor**, **extensions/finder** - Extensions
- **gwt**, **j2cl** - Compilation target support
- **showcase** - Interactive demo website

## Architecture & Patterns

**Fluent Builder API**: All components use method chaining with static factory methods:
```java
Button button = button("Click me").danger().disabled(false).onClick((e, c) -> {});
```

**Static Factory Methods**: Components are created via lowercase factory methods named after the component (e.g., `button()`, `card()`, `cardBody()`).

**Component Composition**: Components compose sub-components via `add<SubComponent>()` methods:
```java
card().addHeader(cardHeader()).addBody(cardBody()).addFooter(cardFooter());
```

**Modifier Interfaces**: Shared behavior through interfaces in `Modifiers.*` (e.g., `Disabled`, `Plain`, `Primary`, `Compact`). Modifier methods toggle CSS classes and return `this`.

**Event Handlers**: Follow `on<Event>()` naming with `(event, component)` lambda signature. Handler interfaces are in `org.patternfly.handler`.

**CSS Classes**: Applied via helpers from `org.patternfly.style.Classes`:
```java
element().css(component(button, Classes.text));
element().css(modifier("danger"));
```

## Source File Conventions

**Section Comments**: Code is organized with section markers:
```java
// ------------------------------------------------------ factory
// ------------------------------------------------------ instance
// ------------------------------------------------------ add
// ------------------------------------------------------ builder
// ------------------------------------------------------ aria
// ------------------------------------------------------ events
// ------------------------------------------------------ api
// ------------------------------------------------------ internal
```

**Naming Conventions**:
- Factory methods: component name (`button()`, `card()`)
- Add methods: `add<Component>()`
- Modifier methods: property name (`flat()`, `plain()`)
- Event handlers: `on<Event>()`
- ARIA methods: `aria<Attribute>()`

**Demo/Snippet Code**: Located in `src/demo/java/` per module, used in JavaDoc via `--snippet-path`.

## Formatting & Code Quality

- 4 spaces indent, 128 char max line length, LF line endings, UTF-8
- **No final newline** (`insert_final_newline = false`)
- Import order enforced: `java.` → `javax.` → `jakarta.` → `org.` → `io.` → `com.`, then static imports
- Checkstyle: WildFly rules
- License headers: Apache 2.0 (enforced by build)
- All checks run on `mvn clean verify`

## Key Dependencies

- **Elemento** (2.4.9) - Base builder API and DOM utilities
- **Elemental2** (1.3.2) - Typed DOM API bindings
- **GWT** (2.13.0) - GWT compilation support
- **JUnit Jupiter** (6.0.3) - Test framework
