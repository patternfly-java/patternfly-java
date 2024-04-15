# Get started

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

You can also take a look at the code of the [showcase](https://github.com/patternfly-java/patternfly-java/tree/main/showcase#readme) to see how to set up and use PatternFly Java.

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

![Dependency graph](https://raw.githubusercontent.com/patternfly-java/patternfly-java/main/dependency-graph.png)

# API design

PatternFly Java integrates with and builds upon Elemento's [builder API](https://github.com/hal/elemento#builder-api). Static factory methods are used to create the components, and public instances methods add child elements and modify the component.

In general the API for a component can be classified into these groups:

## Static factory methods

These methods are used to create a component. They are usually named after the component, are overloaded to accept required and optional arguments, and return an instance of the newly created component:

```java
Button button1 = button("Click me!");
Button button2 = button("PatternFly", "https://www.patternfly.org");
```

## Add methods

These methods add subcomponents to a main component. They are usually called `add<SubComponent>()` and return the main component so that the method call can be chained with other methods.

```java
Dropdown dropdown = dropdown()
        .addToggle(menuToggle("Dropdown"))
        .addMenu(menu()
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(actionMenuItem("item-0", "Action"))))))
```

## Builder / modifier methods

These methods modify the current component. They return the current component so that the method call can be chained with other methods.

```java
Card card = card()
        .flat()
        .rounded()
        .large();
```

## ARIA related methods

These methods set ARIA related attributes in the component. They're usually named `aria<Attribute>()` and return the component so that the method call can be chained with other methods.

```java
Navigation navigation = navigation(flat)
        .ariaScrollBackLabel("← back")
        .ariaScrollForwardLabel("→ forward");
```

## Event handlers

These methods add event handlers for various event to the component. They are usually named `on<Event>()`, accept an event handler, and return the component so that the method call can be chained with other methods. PatternFly Java defines some [common event handlers](https://patternfly-java.github.io/apidocs/org/patternfly/handler/package-summary.html) that are reused in all components. In some cases, components also use specific event handlers that only apply to the component.

```java
Drawer drawer = drawer().id("drw")
        .onToggle((e, c, expanded) -> console.log("Drawer expanded: " + expanded));
```

## Public API / getters

These methods do something with the component or return a value, a property or some other kind of information. They return either `void` or a value/property.

```java
Switch switch_ = switch_("id", "name");
boolean value = switch_.value();
```

---

The best way to experience the API is to browse the code snippets of the [components](components/all-components) and [layouts](layouts/about-layouts) in this showcase.
