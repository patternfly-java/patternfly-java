---
id: home
title: PatternFly Java
---

# PatternFly Java

Build enterprise web applications in pure Java with [PatternFly](https://www.patternfly.org/) components — no JavaScript required.

PatternFly Java is a 💯 Java implementation of PatternFly that integrates with and builds upon Elemento's [builder API](https://hal-console.gitbook.io/elemento/builder-api). It works with both GWT and J2CL, giving you a type-safe, fluent API to create complex web applications entirely in Java.

## A Taste of the API

The following code snippet shows how PatternFly Java lets you build a complete page layout with just a few lines of Java:

```java
body().add(page()
        .addSkipToContent(skipToContent("main-id"))
        .addMasthead(masthead()
                .addMain(mastheadMain()
                        .addToggle(mastheadToggle())
                        .addBrand(mastheadBrand()
                                .addLogo(mastheadLogo("/"))))
                .addContent(mastheadContent()
                        .addToolbar(toolbar())))
        .addSidebar(pageSidebar()
                .addBody(pageSidebarBody()
                        .addNavigation(navigation(flat)
                                .addItem(navigationItem("get-started", "Get started", "/get-started"))
                                .addItem(navigationItem("get-involved", "Get involved", "/get-involved")))))
        .addMain(pageMain("main-id")
                .addSection(pageSection()
                        .add(content()
                                .add(title(1, "PatternFly - Java"))
                                .add(p()
                                        .add(a("https://github.com/patternfly-java/patternfly-java", "_blank")
                                                .text("PatternFly Java"))
                                        .add(" is a 💯 Java implementation of ")
                                        .add(a("https://www.patternfly.org/", "_blank")
                                                .text("PatternFly"))
                                        .add(" without any JavaScript dependencies based on GWT/J2CL and ")
                                        .add(a("https://github.com/hal/elemento", "_blank")
                                                .text("Elemento"))
                                        .add("."))))));
```

Static factory methods, method chaining, and type-safe builders make it easy to create components, compose layouts, and wire up event handlers — all with full IDE support.

## What You Get

PatternFly Java aims to provide almost complete support for PatternFly's design system:

- **50+ Components** — Alerts, buttons, cards, dropdowns, modals, tables, tabs, and many more. Browse the component demos in the sidebar.
- **Charts** — Area, bar, donut, line, pie, and other chart types via the [`@patternfly-java/charts`](https://www.npmjs.com/package/@patternfly-java/charts) NPM package.
- **Layouts** — Bullseye, flex, gallery, grid, level, split, and stack layouts for responsive page design.
- **Extensions** — Code editor and finder extensions for specialized use cases.
- **Design Tokens** — All PatternFly [design tokens](https://www.patternfly.org/tokens/about-tokens) available as type-safe Java enum constants.
- **Icons** — FontAwesome, PatternFly, and Red Hat icon sets with convenient factory methods.

## Get Started

Ready to try PatternFly Java? Here's how to begin:

- **[Get started](/get-started)** — Add PatternFly Java to your Maven project
- **[API documentation](https://patternfly-java.github.io/apidocs/)** — Full Javadoc reference
- **[GitHub](https://github.com/patternfly-java/patternfly-java)** — Source code, issues, and discussions

## Charts

To use charts, you need to install the [`@patternfly-java/charts`](https://www.npmjs.com/package/@patternfly-java/charts) NPM package. This package wraps the supported PatternFly React Chart components as web components.

Install the package using npm:

```
npm install @patternfly-java/charts
```

Import it in your JavaScript file:

```js
import "@patternfly-java/charts/dist/charts";
```
