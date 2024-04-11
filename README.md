[![Verify Codebase](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml/badge.svg)](https://github.com/patternfly-java/patternfly-java/actions/workflows/verify.yml) [![Javadoc](https://img.shields.io/badge/JavaDoc-Online-green)](https://patternfly-java.github.io/apidocs/) [![Maven Central](https://img.shields.io/maven-central/v/org.patternfly/patternfly-java-parent)](https://central.sonatype.com/search?q=g%3Aorg.patternfly) ![GWT3/J2CL compatible](https://img.shields.io/badge/GWT3/J2CL-compatible-brightgreen.svg) [![Chat on Gitter](https://badges.gitter.im/patternfly-java/patternfly-java.svg)](https://app.gitter.im/#/room/#pf4-java_core:gitter.im)

**TOC**
* [Getting Started](#getting-started)
  * [Dependencies](#dependencies)
* [Modules](#modules)
* [API Design](#api-design)
  * [Static Factory Methods](#static-factory-methods)
  * [Add Methods](#add-methods)
  * [Builder / Modifier Methods](#builder--modifier-methods)
  * [ARIA Related Methods](#aria-related-methods)
  * [Event Handlers](#event-handlers)
  * [Public API / Getters](#public-api--getters)
* [PatternFly Support](#patternfly-support)
* [Get Involved](#get-involved)

PatternFly Java is a Java implementation of [PatternFly](https://www.patternfly.org/). Its goal is to provide an easy-to-use, elegant, and efficient API to build complex web applications with PatternFly in Java. PatternFly Java integrates with and builds upon Elemento's [builder API](https://github.com/hal/elemento#builder-api). It works with both GWT and J2CL. The following code snippet gives a taste of what PatternFly Java looks like:

```java
body().add(page()
        .addSkipToContent(skipToContent("main-id"))
        .addMasthead(masthead()
                .addToggle(mastheadToggle())
                .addBrand(brand("/assets/your-logo.svg"), "/home"))
        .addSidebar(sidebar()
                .addBody(sidebarBody()
                        .addNavigation(navigation(flat)
                                .addItem(navigationItem("get-started", "Get started", "/get-started"))
                                .addItem(navigationItem("contribute", "Contribute", "/contribute"))
                                .addItem(navigationItem("get-in-touch", "Get in touch", "/get-in-touch")))))
        .addMain(pageMain("main-id")
                .addSection(pageMainSection()
                        .light()
                        .add(textContent()
                                .add(title(1, "PatternFly - Java"))
                                .add(p()
                                        .add(a("https://github.com/patternfly-java/patternfly-java", "_blank")
                                                .textContent("PatternFly Java"))
                                        .add(" is a Java implementation of ")
                                        .add(a("https://www.patternfly.org/", "_blank")
                                                .textContent("PatternFly"))
                                        .add(" based on GWT/J2CL and ")
                                        .add(a("https://github.com/hal/elemento", "_blank")
                                                .textContent("Elemento"))
                                        .add("."))))));
```

PatternFly Java aims to provide almost complete support for all components, charts, extensions, and layouts. To see it in action, head over to the [showcase](https://patternfly-java.github.io/). It demonstrates all currently supported components and layouts. To get all the details about using PatternFly Java, look at the [API documentation](https://patternfly-java.github.io/apidocs/).

# Getting Started

PatternFly Java is available on [Maven Central](https://central.sonatype.com/search?q=g%3Aorg.patternfly). The easiest way is to import its BOM

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.patternfly</groupId>
            <artifactId>patternfly-java-bom</artifactId>
            <version>0.2.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

and add a dependency to either

```xml
<dependency>
    <groupId>org.patternfly</groupId>
    <artifactId>patternfly-java-gwt</artifactId>
</dependency>
```

or

```xml
<dependency>
    <groupId>org.patternfly</groupId>
    <artifactId>patternfly-java-j2cl</artifactId>
</dependency>
```

depending on your stack. If you're using GWT, inherit from `org.patternfly.PatternFly`:

```xml
<module>
    <inherits name="org.patternfly.PatternFly"/>
</module>
```

## Dependencies

PatternFly Java has **no JavaScript** dependencies. Everything necessary is included in the code base for both GWT and J2CL. However, Patternfly Java does **not** come with **stylesheets**. You are expected to include or bundle the necessary stylesheets yourself. Take a look at the PatternFly [getting started guide](https://www.patternfly.org/get-started/develop#htmlcss) for more information.

You can also take a look at the code of the [showcase](https://github.com/patternfly-java/patternfly-java/tree/main/showcase#readme) for [GWT](https://github.com/patternfly-java/patternfly-java/tree/main/showcase/gwt) and [J2CL](https://github.com/patternfly-java/patternfly-java/tree/main/showcase/j2cl) to see how to setup and use PatternFly Java.

# Modules

PatternFly Java consists of these Maven modules (a-z):

| Module                     | Description                      |
|----------------------------|----------------------------------|
| patternfly-java-bom        | Bill of materials                |
| patternfly-java-codeeditor | PatternFly codeeditor            |
| patternfly-java-components | PatternFly components            |
| patternfly-java-core       | Core PatternFly Java classes     |
| patternfly-java-finder     | PatternFly Java Finder extension |
| patternfly-java-gwt        | PatternFly Java for GWT          |
| patternfly-java-icons      | PatternFly Java icons            |
| patternfly-java-j2cl       | PatternFly Java for J2CL         |
| patternfly-java-layouts    | PatternFly Java layouts          |

Here’s the dependency graph of these maven modules and its external dependencies:

![Dependency graph](./dependency-graph.png)

# API Design

PatternFly Java integrates with and builds upon Elemento's [builder API](https://github.com/hal/elemento#builder-api). Static factory methods are used to create the components, and public instances methods add child elements and modify the component.

In general the API for an component can be classified into these groups:

## Static Factory Methods

These methods are used to create a component. They are usually named after the component, are overloaded to accept required and optional arguments, and return an instance of the newly created component:

```java
Button button1 = button("Click me!");
Button button2 = button("PatternFly", "https://www.patternfly.org");
```

## Add Methods

These methods add subcomponents to a main component. They are usually called `add<SubComponent>()` and return the main component so that the method call can be chained with other methods.

```java
Dropdown dropdown = dropdown()
        .addToggle(menuToggle("Dropdown"))
        .addMenu(menu()
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(actionMenuItem("item-0", "Action"))))))
```

## Builder / Modifier Methods

These methods modify the current componemt. They return the current component so that the method call can be chained with other methods.

```java
Card card = card()
        .flat()
        .rounded()
        .large();
```

## ARIA Related Methods

These methods set ARIA related attributes in the component. They're usually named `aria<Attribute>()` and return the component so that the method call can be chained with other methods.

```java
Navigation navigation = navigation(flat)
        .ariaScrollBackLabel("← back")
        .ariaScrollForwardLabel("→ forward");
```

## Event Handlers

These methods add event handlers for various event to the component. They are usually named `on<Event>()`, accept an event handler, and return the component so that the method call can be chained with other methods. PatternFly Java defines some [common event handlers](https://patternfly-java.github.io/apidocs/org/patternfly/handler/package-summary.html) that are reused in all components. In some cases, components also use specific event handlers that only apply to the component.

```java
Drawer drawer = drawer().id("drw")
        .onToggle((e, c, expanded) -> console.log("Drawer expanded: " + expanded));
```

## Public API / Getters

These methods do something with the component or return a value, a property or some other kind of information. They return either `void` or a value/property.

```java
Switch switch_ = switch_("id", "name");
boolean value = switch_.value();
```

---

The best way to experience the API is to take a look at the code snippets of the various components and layouts in the [showcase](https://patternfly-java.github.io/).

# PatternFly Support

PatternFly Java aims to provide almost complete support for all components, charts, extensions, and layouts. The following issues show how many components, charts, extensions, and layouts have already been implemented.

- [component progress](https://github.com/patternfly-java/patternfly-java/issues/125)
- [chart progress](https://github.com/patternfly-java/patternfly-java/issues/127)
- [extension progress](https://github.com/patternfly-java/patternfly-java/issues/126)
- [layout progress](https://github.com/patternfly-java/patternfly-java/issues/128)

# Get Involved

PatternFly Java is still under development. The API might change, and things might not work as expected. Please give it a try and share your feedback. Join the [chat](https://app.gitter.im/#/room/#pf4-java_core:gitter.im), enter the [discussions](https://github.com/orgs/patternfly-java/discussions) or use the GitHub [issues](https://github.com/patternfly-java/patternfly-java/issues) to report bugs or request new features.

Of course, you're welcome to [contribute](CONTRIBUTING.md) to PatternFly Java. If you like what you're seeing, leave us a star!
