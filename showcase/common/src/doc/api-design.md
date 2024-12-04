# API design

PatternFly Java integrates with and builds upon Elemento's [builder API](https://hal-console.gitbook.io/elemento/builder-api). Static factory methods are used to create the components, and public instances methods add child elements and modify the component.

In general, the API for a component can be classified into these groups:

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

## ARIA-related methods

These methods set ARIA-related attributes in the component. They're usually named `aria<Attribute>()` and return the component so that the method call can be chained with other methods.

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

These methods do something with the component or return a value, a property, or some other kind of information. They return either `void` or a value/property.

```java
Switch switch_ = switch_("id", "name");
boolean value = switch_.value();
```

## Common interfaces

The best way to experience the API is to browse the code snippets of the [components](components/all-components) and [layouts](layouts/about-layouts) in this showcase.
