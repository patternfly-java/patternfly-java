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
                                .addItem(actionMenuItem("item-0", "Action")))));
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

Common behavior across all components is implemented by base classes and interfaces. All components extend from either [`BaseComponent`](https://patternfly-java.github.io/apidocs/org/patternfly/component/BaseComponent.html) or [`BaseComponentSVG`](https://patternfly-java.github.io/apidocs/org/patternfly/component/BaseComponentSVG.html). These base classes implement [interfaces from Elemento](https://hal-console.gitbook.io/elemento/builder-api#classes-and-interfaces) to manipulate the component element.

In addition, components implement these interfaces to provide a common API:

- [`Modifiers.*`](https://patternfly-java.github.io/apidocs/org/patternfly/style/Modifiers.html)<br/>The sub-interfaces defined in this 'umbrella' interface are used to toggle one specific flag of a component. For example, `card().plain()` toggles the `plain` flag of the card component and is defined in the [`Modifiers.Plain`](https://patternfly-java.github.io/apidocs/org/patternfly/style/Modifiers.Plain.html) interface. Other components that also provide a `plain` flag implement the `Modifiers.Plain` interface as well.
- [`Closable`](https://patternfly-java.github.io/apidocs/org/patternfly/component/Closeable.html)<br/>Implemented by components that provide some kind of popup that can be closed. The interface provides methods to register event handlers when the popup is closed.
- [`ComponentContext`](https://patternfly-java.github.io/apidocs/org/patternfly/core/ComponentContext.html), [`HasIdentifier`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasIdentifier.html), and [`HasItems`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasItems.html)<br/>These interfaces are often implemented by components that have a parent-child relationship, like [`DataList`](https://patternfly-java.github.io/apidocs/org/patternfly/component/list/DataList.html) and [`DataLiistItem`](https://patternfly-java.github.io/apidocs/org/patternfly/component/list/DataListItem.html). [`HasItems`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasItems.html) is implemented by the parent component and provides methods to add and remove child items. [`ComponentContext`](https://patternfly-java.github.io/apidocs/org/patternfly/core/ComponentContext.html) and [`HasIdentifier`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasIdentifier.html) are implemented by the child components and provide methods to store and retrieve arbitrary values and get a unique identifier for the child item.
- [`ComponentIcon`](https://patternfly-java.github.io/apidocs/org/patternfly/component/ComponentIcon.html) and [`ComponentIconAndText`](https://patternfly-java.github.io/apidocs/org/patternfly/component/ComponentIconAndText.html)<br/>These interfaces are implemented by components that provide text resp. an icon and a text.
- [`ComponentProgress`](https://patternfly-java.github.io/apidocs/org/patternfly/component/ComponentProgress.html)<br/>Implemented by components that provide some kind of progress.
- [`Expandable`](https://patternfly-java.github.io/apidocs/org/patternfly/component/Expandable.html)<br/>Implemented by components that provide some kind of expandable content.
- [`HasValue`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasValue.html) and [`HasObservableValue`](https://patternfly-java.github.io/apidocs/org/patternfly/component/HasObservableValue.html)<br/>These interfaces are implemented by components that provide a value or an observable value.

---

The best way to experience the API is to take a look at the code snippets of the various components and layouts in the [showcase](https://patternfly-java.github.io/).
