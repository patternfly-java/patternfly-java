/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.overlay;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.handler.OverlayHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Placement;
import elemental2.dom.DOMRect;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static org.gwtproject.event.shared.HandlerRegistrations.compose;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.focusin;
import static org.jboss.elemento.EventType.focusout;
import static org.jboss.elemento.EventType.mouseenter;
import static org.jboss.elemento.EventType.mouseleave;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.overlay.TriggerMode.manual;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Placement.bottom;
import static org.patternfly.style.Placement.left;
import static org.patternfly.style.Placement.right;
import static org.patternfly.style.Placement.top;
import static org.patternfly.style.TypedModifier.swap;

/**
 * Centralized controller for native popover management. Combines CSS anchor positioning, event listener registration,
 * entry/exit delay timers, and show/hide lifecycle management into a single reusable unit.
 * <p>
 * Components such as Tooltip and Popover delegate all overlay behavior to this class, keeping their own code focused on
 * component-specific concerns (DOM structure, ARIA, content).
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">Popover API</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning">CSS Anchor Positioning</a>
 */
public class Overlay {

    // ------------------------------------------------------ factory

    public static Overlay overlay(HTMLElement overlayElement, Placement placement) {
        return new Overlay(overlayElement, placement);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Overlay.class.getName());

    private final String id;
    private final HTMLElement overlayElement;
    private final List<OverlayHandler> toggleHandlers;

    // anchor positioning
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;
    private boolean cssPositioning;
    private boolean matchTriggerWidth;
    private int distance;
    private Placement placement;

    // trigger mode
    private TriggerMode triggerMode;

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

    Overlay(HTMLElement overlayElement, Placement placement) {
        this.id = Id.unique("overlay");
        this.overlayElement = overlayElement;
        this.toggleHandlers = new ArrayList<>();
        this.triggerMode = manual;
        this.cssPositioning = false;
        this.matchTriggerWidth = false;
        this.visible = false;
        this.distance = 0;
        this.entryDelay = 0;
        this.exitDelay = 0;
        this.showTimeout = 0;
        this.hideTimeout = 0;
        placement(placement);
    }

    // ------------------------------------------------------ builder

    public Overlay triggerMode(TriggerMode mode) {
        this.triggerMode = mode;
        return this;
    }

    public Overlay trigger(String selector) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, By.selector(selector));
        return this;
    }

    public Overlay trigger(By selector) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, selector);
        return this;
    }

    public Overlay trigger(HTMLElement element) {
        this.triggerSupplier = () -> element;
        return this;
    }

    public Overlay trigger(Supplier<HTMLElement> supplier) {
        this.triggerSupplier = supplier;
        return this;
    }

    public Overlay placement(Placement placement) {
        // The placement is assigned here but not mapped to CSS modifiers yet. That won't happen until attach()
        this.placement = placement;
        return this;
    }

    public Overlay distance(int distance) {
        this.distance = distance;
        return this;
    }

    public Overlay entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public Overlay exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public Overlay cssPositioning(boolean enabled) {
        this.cssPositioning = enabled;
        return this;
    }

    public Overlay matchTriggerWidth(boolean match) {
        this.matchTriggerWidth = match;
        return this;
    }

    // ------------------------------------------------------ events

    /** Register a handler called after show/hide transitions. */
    public Overlay onToggle(OverlayHandler handler) {
        if (handler != null) {
            this.toggleHandlers.add(handler);
        }
        return this;
    }

    // ------------------------------------------------------ lifecycle

    /**
     * Resolves the trigger element, sets up CSS anchor positioning, and registers event listeners based on the configured
     * {@link TriggerMode}. Returns the resolved trigger element or {@code null}.
     */
    public HTMLElement attach() {
        if (triggerSupplier != null) {
            trigger = triggerSupplier.get();
            if (trigger != null) {
                setupOverlayAndTrigger();
                switch (triggerMode) {
                    case hover:
                        registerHoverListeners();
                        break;
                    case click:
                        registerClickListeners();
                        break;
                    case manual:
                        break;
                }
            } else {
                logger.error("Unable to find trigger element for overlay %o", overlayElement);
            }
        } else {
            logger.error("No trigger element defined for overlay %o", overlayElement);
        }
        return trigger;
    }

    /**
     * Removes all event listeners, cancels pending timers, hides the overlay if visible, and tears down CSS anchor
     * positioning.
     */
    public void detach() {
        cancelTimers();
        if (visible) {
            internalHide(new Event(""));
        }
        if (scrollHandler != null) {
            scrollHandler.removeHandler();
            scrollHandler = null;
        }
        if (overlayHandlers != null) {
            overlayHandlers.removeHandler();
            overlayHandlers = null;
        }
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
            outsideClickHandler = null;
        }
        if (triggerHandlers != null) {
            triggerHandlers.removeHandler();
            triggerHandlers = null;
        }
        teardownOverlayAndTrigger();
    }

    // ------------------------------------------------------ show / hide

    /** Shows the overlay. */
    public void show() {
        show(new Event(""));
    }

    /** Shows the overlay. */
    public void show(Event event) {
        if (visible || trigger == null) {
            return;
        }
        internalShow(event);
    }

    /** Hides the overlay. */
    public void hide() {
        hide(new Event(""));
    }

    /** Hides the overlay. */
    public void hide(Event event) {
        if (!visible) {
            return;
        }
        internalHide(event);
    }

    /** Toggles the overlay between shown and hidden states. */
    public void toggle() {
        toggle(new Event(""));
    }

    /** Toggles the overlay between shown and hidden states. */
    public void toggle(Event event) {
        if (visible) {
            hide(event);
        } else {
            show(event);
        }
    }

    // ------------------------------------------------------ access

    public HTMLElement overlayElement() {
        return overlayElement;
    }

    public HTMLElement trigger() {
        return trigger;
    }

    public boolean cssPositioning() {
        return cssPositioning;
    }

    public int distance() {
        return distance;
    }

    /** Returns whether the overlay is currently visible. */
    public boolean visible() {
        return visible;
    }

    // ------------------------------------------------------ internal setup / teardown

    private void setupOverlayAndTrigger() {
        overlayElement.setAttribute("popover", "manual");
        String anchorName = "--" + id;
        trigger.style.setProperty("anchor-name", anchorName);
        overlayElement.style.setProperty("position-anchor", anchorName);
        overlayElement.style.setProperty("margin", distance + "px");
        overlayElement.classList.add(placement.modifier());
        if (cssPositioning) {
            overlayElement.classList.add(modifier(Classes.cssPositioning));
        }
    }

    private void applyMinWidth() {
        if (matchTriggerWidth && trigger != null) {
            overlayElement.style.setProperty("min-width", trigger.offsetWidth + "px");
        }
    }

    private void teardownOverlayAndTrigger() {
        overlayElement.classList.remove(modifier(Classes.cssPositioning));
        for (Placement p : Placement.values()) {
            overlayElement.classList.remove(p.modifier());
        }
        overlayElement.style.removeProperty("margin");
        overlayElement.style.removeProperty("position-anchor");
        if (trigger != null) {
            trigger.style.removeProperty("anchor-name");
            trigger = null;
        }
        overlayElement.removeAttribute("popover");
    }

    // ------------------------------------------------------ internal listeners

    private void registerHoverListeners() {
        triggerHandlers = compose(
                bind(trigger, mouseenter, e -> scheduleShow()),
                bind(trigger, mouseleave, e -> scheduleHide()),
                bind(trigger, focusin, e -> scheduleShow()),
                bind(trigger, focusout, e -> scheduleHide()));
        overlayHandlers = compose(
                bind(overlayElement, mouseenter, e -> cancelTimers()),
                bind(overlayElement, mouseleave, e -> scheduleHide()));
    }

    private void registerClickListeners() {
        triggerHandlers = bind(trigger, click, this::toggleOnClick);
    }

    private void toggleOnClick(Event event) {
        if (visible) {
            hide(event);
        } else {
            show(event);
        }
    }

    private void onOutsideClick(Event event) {
        if (visible && trigger != null) {
            Element target = (Element) event.target;
            if (!overlayElement.contains(target) && !trigger.contains(target)) {
                hide(event);
            }
        }
    }

    // ------------------------------------------------------ internal show / hide

    private void scheduleShow() {
        cancelTimers();
        showTimeout = setTimeout(e -> show(), entryDelay);
    }

    private void scheduleHide() {
        cancelTimers();
        hideTimeout = setTimeout(e -> hide(), exitDelay);
    }

    private void cancelTimers() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }

    private void internalShow(Event event) {
        applyMinWidth();
        if (cssPositioning) {
            overlayElement.showPopover();
        } else {
            overlayElement.style.setProperty("visibility", "hidden");
            overlayElement.showPopover();
            recalculatePlacement();
            overlayElement.style.removeProperty("visibility");
            scrollHandler = bind(document, scroll, true, e -> recalculatePlacement());
        }
        visible = true;
        if (triggerMode == TriggerMode.click) {
            outsideClickHandler = bind(document, click.name, this::onOutsideClick);
        }
        for (OverlayHandler handler : toggleHandlers) {
            handler.handle(event, true);
        }
    }

    private void internalHide(Event event) {
        overlayElement.hidePopover();
        visible = false;
        if (scrollHandler != null) {
            scrollHandler.removeHandler();
            scrollHandler = null;
        }
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
            outsideClickHandler = null;
        }
        for (OverlayHandler handler : toggleHandlers) {
            handler.handle(event, false);
        }
    }

    // ------------------------------------------------------ placement calculation (cssPositioning == false)

    private void recalculatePlacement() {
        Placement best = bestPlacement();
        if (!overlayElement.classList.contains(best.modifier())) {
            logger.debug("Best placement for %s is now %s", id, best.name());
            swap(null, overlayElement, best, Placement.values());
        }
    }

    private Placement bestPlacement() {
        DOMRect triggerRect = trigger.getBoundingClientRect();
        DOMRect overlayRect = overlayElement.getBoundingClientRect();
        double above = triggerRect.top;
        double below = window.innerHeight - triggerRect.bottom;
        double toLeft = triggerRect.left;
        double toRight = window.innerWidth - triggerRect.right;

        boolean topFits = above >= overlayRect.height + distance;
        boolean bottomFits = below >= overlayRect.height + distance;
        boolean leftFits = toLeft >= overlayRect.width / 3 + distance;
        boolean rightFits = toRight >= overlayRect.width / 3 + distance;

        Placement result;

        // If the initial placement fits, keep the exact preferred placement (including start/end alignment)
        if (directionFits(placement.base(), topFits, bottomFits, leftFits, rightFits)) {
            result = placement;
        } else {
            // Find the best fallback direction
            Placement fallbackBase;
            // @formatter:off
            if      (topFits   && leftFits && rightFits) { fallbackBase = top; }
            else if (rightFits && !leftFits)             { fallbackBase = right; }
            else if (leftFits  && !rightFits)            { fallbackBase = left; }
            else if (topFits)                            { fallbackBase = top; }
            else if (bottomFits)                         { fallbackBase = bottom; }
            else                                         { fallbackBase = toRight >= toLeft ? right : left; }
            // @formatter:on

            // Preserve start/end alignment from the initial placement
            result = placement.withBase(fallbackBase);
        }

        return result;
    }

    private boolean directionFits(Placement base,
            boolean topFits, boolean bottomFits,
            boolean leftFits, boolean rightFits) {
        return switch (base) {
            case top -> topFits;
            case bottom -> bottomFits;
            case left -> leftFits;
            case right -> rightFits;
            default -> false;
        };
    }
}
