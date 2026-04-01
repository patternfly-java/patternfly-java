# Plan: Centralized Native Popover Manager (`Overlay`)

## Context

The project has duplicated popover lifecycle logic across `Tooltip`, `Popover`, and `MenuToggleMenu`:
- Timer management (entry/exit delays, `scheduleShow`/`scheduleHide`/`cancelTimers`)
- Event listener registration/cleanup (hover, click, outside-click, scroll)
- Show/hide with CSS vs JS positioning paths
- Handler registration lifecycle (`attach`/`detach`)

`AnchorPositioning` handles positioning but explicitly leaves listeners to components, causing each component to reimplement the same patterns. The deprecated `PopperBuilder` was a similar centralized approach but for Popper.js.

**Goal**: Create a new class that centralizes ALL native popover concerns (positioning + listeners + timers + lifecycle callbacks) so components only manage their DOM structure, ARIA, and content.

## Package & Name

**Package: `org.patternfly.overlay`** - a new dedicated package in the core module for the overlay/popover management infrastructure. Clean separation from `org.patternfly.position` (which handles CSS anchor positioning specifics) and `org.patternfly.popper` (deprecated Popper.js wrapper).

**Name: `Overlay`** - a well-understood UI term for any element that floats above page content (maps to browser "top layer"). Short, works naturally as `Overlay.overlay(element)`. Avoids collision with `Popper` (deprecated), `Popover` (component), and `AnchorPositioning`.

## Files to Create

| File | Purpose |
|---|---|
| `core/.../overlay/TriggerMode.java` | Enum: `hover`, `click`, `manual` |
| `core/.../overlay/Overlay.java` | Main class |
| `core/.../handler/OverlayHandler.java` | `@FunctionalInterface` for toggle callbacks |

## Design

### `TriggerMode` enum

```java
package org.patternfly.overlay;

public enum TriggerMode {
    /** mouseenter/focusin shows, mouseleave/focusout hides. Overlay element keeps it open on hover. */
    hover,
    /** Click toggles. Outside-click dismisses. */
    click,
    /** No automatic listeners. Caller controls show/hide. */
    manual
}
```

### `OverlayHandler` functional interface

```java
package org.patternfly.handler;

@FunctionalInterface
public interface OverlayHandler {
    void handle(Event event, boolean open);
}
```

### `Overlay` class structure

```java
package org.patternfly.overlay;

public class Overlay {

    // ------------------------------------------------------ factory
    public static Overlay overlay(HTMLElement overlayElement) { ... }

    // ------------------------------------------------------ instance
    // identity & elements
    private final String id;
    private final HTMLElement overlayElement;

    // anchor positioning (from AnchorPositioning)
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;
    private boolean cssPositioning;
    private boolean matchTriggerWidth;
    private int distance;
    private Placement placement;

    // trigger mode
    private TriggerMode triggerMode;  // default: manual

    // timers
    private int entryDelay;
    private int exitDelay;
    private double showTimeout;
    private double hideTimeout;

    // state
    private boolean visible;

    // managed handler registrations
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration overlayHandlers;
    private HandlerRegistration outsideClickHandler;
    private HandlerRegistration scrollHandler;

    // callbacks
    private List<OverlayHandler> toggleHandlers;
    private Predicate<Event> shouldShow;
    private Predicate<Event> shouldHide;
    private Predicate<Event> stayOpen;

    // ------------------------------------------------------ builder
    public Overlay triggerMode(TriggerMode mode) { ... }
    public Overlay trigger(HTMLElement | By | String | Supplier<HTMLElement>) { ... }
    public Overlay placement(Placement placement) { ... }
    public Overlay distance(int distance) { ... }
    public Overlay entryDelay(int delay) { ... }
    public Overlay exitDelay(int delay) { ... }
    public Overlay cssPositioning(boolean enabled) { ... }
    public Overlay matchTriggerWidth(boolean match) { ... }
    public Overlay shouldShow(Predicate<Event> predicate) { ... }
    public Overlay shouldHide(Predicate<Event> predicate) { ... }
    public Overlay stayOpen(Predicate<Event> predicate) { ... }

    // ------------------------------------------------------ events
    public Overlay onToggle(OverlayHandler handler) { ... }

    // ------------------------------------------------------ lifecycle
    /** Resolve trigger, set up CSS anchor, register listeners per TriggerMode. */
    public HTMLElement attach() { ... }
    /** Remove all listeners, cancel timers, hide, tear down anchor. */
    public void detach() { ... }

    // ------------------------------------------------------ show / hide
    public void show() { ... }   // respects shouldShow, CSS vs JS path
    public void hide() { ... }   // respects shouldHide
    public void toggle() { ... }
    public boolean visible() { ... }

    // ------------------------------------------------------ placement
    public void applyPlacement(Placement placement) { ... }
    public void applyBestPlacement(Placement preferred) { ... }

    // ------------------------------------------------------ access
    public HTMLElement overlayElement() { ... }
    public HTMLElement trigger() { ... }

    // ------------------------------------------------------ internal
    private void scheduleShow() { ... }
    private void scheduleHide() { ... }
    private void cancelTimers() { ... }
    private void doShow() { ... }
    private void doHide() { ... }
    private void registerHoverListeners(HTMLElement trigger) { ... }
    private void registerClickListeners(HTMLElement trigger) { ... }
    private void onOutsideClick(Event event) { ... }
    private void recalculatePlacement() { ... }
    private Placement bestPlacement(Placement preferred) { ... }
    private void applyMinWidth() { ... }
}
```

### Key method behavior

**`attach()`**: Resolve trigger -> set CSS anchor properties (`anchor-name`, `position-anchor`, `margin`) -> apply initial placement -> register listeners based on `triggerMode` (hover: mouseenter/mouseleave/focusin/focusout on trigger + mouseenter/mouseleave on overlay element; click: click on trigger + outside-click on document; manual: none) -> register scroll handler if `!cssPositioning`.

**`show()`**: Check `shouldShow` predicate -> apply min-width if `matchTriggerWidth` -> CSS path: apply placement + `showPopover()` / JS path: `visibility:hidden` + `showPopover()` + `bestPlacement()` + remove `visibility:hidden` -> fire `onToggle(event, true)`.

**`hide()`**: Check `shouldHide` predicate -> `hidePopover()` -> remove outside-click handler -> fire `onToggle(event, false)`.

**`detach()`**: Cancel timers -> force hide (bypass shouldHide) -> remove all handler registrations -> remove CSS anchor properties -> clear trigger.

### How components would use it (future migration, not part of this task)

**Tooltip**:
```java
this.overlay = Overlay.overlay(element())
    .trigger(trigger)
    .triggerMode(TriggerMode.hover)
    .placement(auto)
    .distance(DISTANCE)
    .entryDelay(ENTRY_DELAY).exitDelay(EXIT_DELAY)
    .cssPositioning(CssPositioning.tooltipEnabled());
```

**Popover**:
```java
this.overlay = Overlay.overlay(element())
    .trigger(trigger)
    .triggerMode(TriggerMode.click)  // or .hover via hoverable()
    .placement(auto)
    .distance(DISTANCE)
    .cssPositioning(CssPositioning.popoverEnabled());
```

**MenuToggleMenu** (manual mode, keeps its own keyboard handlers):
```java
this.overlay = Overlay.overlay(menuPopover)
    .trigger(menuToggle::element)
    .triggerMode(TriggerMode.manual)
    .placement(bottomStart)
    .matchTriggerWidth(true);
```

## Verification

- `mvn verify -Dquickly` to confirm compilation across all modules
- The new class is additive only (no existing code changes), so no regressions expected
- No tests to write yet (planning phase); tests will come when components migrate to use `Overlay`
