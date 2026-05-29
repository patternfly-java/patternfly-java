# Common Concepts

Patterns and abstractions shared across PatternFly Java components. Understanding these is essential for correctly verifying component implementations.

---

## Component store (storeComponent / lookupComponent)

The component store enables sub-components to find their parent component or sibling sub-components at runtime. It works through DOM dataset attributes.

### Components

A component that needs to be discoverable by its sub-components calls `storeComponent()` in its constructor, after the `super()` call:

```java
Card() {
    super(ComponentType.Card, div().css(component(card)).element());
    storeComponent();
}
```

### Sub-components → component lookup

Sub-components use `lookupComponent()` to find their parent component. **This must only be called after the sub-component has been attached to the DOM** — typically in event handlers or lifecycle callbacks, never in the constructor.

```java
// strict lookup — throws if component not found
Card card = lookupComponent();

// lenient lookup — returns null if component not found
Card card = lookupComponent(true);
```

### Sub-components → sub-component lookup

Sub-components can store themselves for discovery by other sub-components using `storeSubComponent()`. Other sub-components find them via `lookupSubComponent(String subComponentId)`:

```java
// In the sub-component that stores itself
TabContent(String identifier) {
    super(SUB_COMPONENT_ID, SUB_COMPONENT_NAME, ...);
    storeSubComponent();
}

// In another sub-component that looks it up
TabContent content = lookupSubComponent(TabContent.SUB_COMPONENT_ID);
TabContent content = lookupSubComponent(TabContent.SUB_COMPONENT_ID, true); // lenient
```

---

## Modifier interfaces

Defined in `org.patternfly.style.Modifiers`, each modifier interface provides a no-arg convenience method and a boolean toggle method:

```java
public interface Compact<E extends HTMLElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {
    default B compact() { return compact(true); }
    default B compact(boolean compact) { return toggleModifier(that(), element(), Classes.compact, compact); }
}
```

Components declare modifiers in their `implements` clause:

```java
public class Card extends BaseComponent<HTMLDivElement, Card> implements
        Compact<HTMLDivElement, Card>,
        Disabled<HTMLDivElement, Card>,
        Plain<HTMLDivElement, Card> {
```

Common modifiers: `Bordered`, `Compact`, `Disabled`, `Fill`, `FullHeight`, `FullWidth`, `Glass`, `Inline`, `Plain`, `Primary`, `Secondary`, `Vertical`.

---

## Event handler pattern

Handler interfaces live in `org.patternfly.handler`:

| Interface | Signature |
|---|---|
| `ComponentHandler<C>` | `void handle(Event event, C component)` |
| `SelectHandler<C>` | `void onSelect(Event event, C component, boolean selected)` |
| `ToggleHandler<C>` | `void onToggle(Event event, C component, boolean expanded)` |
| `CloseHandler<C>` | `void shouldClose(Event event, C component)` |
| `ChangeHandler<C, T>` | `void onChange(Event event, C component, T value)` |

Registration follows the pattern:

```java
// Field (in instance section)
private final List<SelectHandler<Tab>> selectHandler;

// Registration (in events section)
public Tabs onSelect(SelectHandler<Tab> selectHandler) {
    this.selectHandler.add(selectHandler);
    return this;
}
```

---

## AurHandler (Add/Update/Remove lifecycle)

For components that manage a collection of items, `AurHandler` provides lifecycle callbacks:

```java
// Field
private final AurHandler<Tabs, Tab> aur;

// Constructor
this.aur = new AurHandler<>(this);

// In add() method
public Tabs add(Tab item) {
    items.put(item.identifier(), item);
    return aur.added(item);
}

// In events section — delegate to aur
public Tabs onAdd(AddItemHandler<Tabs, Tab> onAdd) { return aur.onAdd(onAdd); }
public Tabs onUpdate(UpdateItemHandler<Tabs, Tab> onUpdate) { return aur.onUpdate(onUpdate); }
public Tabs onRemove(RemoveItemHandler<Tabs, Tab> onRemove) { return aur.onRemove(onRemove); }
```

---

## Ordered interface

Components implementing `Ordered<E, C, S>` maintain items in a sorted order:

```java
public class List extends BaseComponent<HTMLElement, List> implements
        Ordered<HTMLElement, List, ListItem> {

    // In add section
    public List add(ListItem item) {
        addOrdered(this, item);
        // ...
    }

    // In builder section
    public List ordered(Comparator<ListItem> comparator) {
        this.comparator = comparator;
        return this;
    }
}
```

---

## ComponentContext

Allows storing arbitrary key-value data on components and sub-components:

```java
public class Tab extends TabsSubComponent<HTMLElement, Tab> implements
        ComponentContext<HTMLElement, Tab> {

    private final Map<String, Object> data;

    // In builder section
    public <T> Tab store(String key, T value) {
        data.put(key, value);
        return this;
    }

    // In api section
    public boolean has(String key) { return data.containsKey(key); }
    public <T> T get(String key) { return (T) data.get(key); }
}
```

---

## HasIdentifier

Marks items that carry a unique identifier, typically used with `HasItems` containers:

```java
public class Tab extends TabsSubComponent<HTMLElement, Tab> implements
        HasIdentifier<HTMLElement, Tab> {

    public static final String SUB_COMPONENT_ID = "tab";
    public static final String SUB_COMPONENT_NAME = "Tab";

    private final String identifier;

    Tab(String identifier) {
        super(SUB_COMPONENT_ID, SUB_COMPONENT_NAME,
                li().css(component(tabs, item))
                        .data(Dataset.identifier, identifier)
                        .element());
        this.identifier = identifier;
    }

    public String identifier() { return identifier; }
}
```

---

## CSS class helpers

From `org.patternfly.style.Classes`:

| Method | Output | Example |
|---|---|---|
| `component(String, String...)` | `pf-6-c-<component>__<element>` | `component(card)` → `"pf-6-c-card"` |
| `layout(String, String...)` | `pf-6-l-<layout>__<element>` | `layout(grid)` → `"pf-6-l-grid"` |
| `modifier(String)` | `pf-m-<modifier>` | `modifier(current)` → `"pf-m-current"` |
| `util(String)` | `pf-6-u-<utility>` | `util(screenReader)` → `"pf-6-u-screen-reader"` |

CSS class name constants are defined as `String` fields in `Classes` (e.g., `card`, `button`, `tabs`, `item`, `current`).

---

## ComponentType enum

Each component registers a `ComponentType` with a short ID and canonical name:

```java
Card("crd", "PF6/Component/Card"),
Button("btn", "PF6/Component/Button"),
```

Used in `BaseComponent` constructor and `SubComponent` constructor to tie everything together.

---

## SubComponent base class pattern

Each component package that has sub-components defines a package-private abstract base:

```java
abstract class CardSubComponent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends SubComponent<E, B> {
    CardSubComponent(String subComponentId, String subComponentName, E element) {
        super(ComponentType.Card, subComponentId, subComponentName, element);
    }
}
```

This ensures all sub-components share the same `ComponentType` and keeps the base class inaccessible outside the package.
