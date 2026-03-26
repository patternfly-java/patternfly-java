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
package org.patternfly.component.tooltip;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Roles;
import org.patternfly.handler.CloseHandler;
import org.patternfly.popper.Placement;
import elemental2.dom.DOMRect;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static org.gwtproject.event.shared.HandlerRegistrations.compose;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.focusin;
import static org.jboss.elemento.EventType.focusout;
import static org.jboss.elemento.EventType.mouseenter;
import static org.jboss.elemento.EventType.mouseleave;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.component.tooltip.TriggerAria.describedBy;
import static org.patternfly.component.tooltip.TriggerAria.none;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.popper.Placement.top;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textAlignLeft;
import static org.patternfly.style.Classes.tooltip;

/**
 * A tooltip is in-app messaging used to identify elements on a page with short, clarifying text.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The tooltip uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues.
 */
public class Tooltip2 extends BaseComponent<HTMLDivElement, Tooltip2> implements
        Attachable,
        Closeable<HTMLDivElement, Tooltip2>,
        ElementContainerDelegate<HTMLDivElement, Tooltip2>,
        ElementTextDelegate<HTMLDivElement, Tooltip2> {

    // ------------------------------------------------------ factory

    public static Tooltip2 tooltip2() {
        return new Tooltip2(null, null);
    }

    public static Tooltip2 tooltip2(String text) {
        return new Tooltip2(null, text);
    }

    public static Tooltip2 tooltip2(By trigger) {
        return new Tooltip2(() -> Elements.querySelector(document.body, trigger), null);
    }

    public static Tooltip2 tooltip2(By trigger, String text) {
        return new Tooltip2(() -> Elements.querySelector(document.body, trigger), text);
    }

    public static Tooltip2 tooltip2(HTMLElement trigger) {
        return new Tooltip2(() -> trigger, null);
    }

    public static Tooltip2 tooltip2(HTMLElement trigger, String text) {
        return new Tooltip2(() -> trigger, text);
    }

    public static Tooltip2 tooltip2(Supplier<HTMLElement> trigger) {
        return new Tooltip2(trigger, null);
    }

    public static Tooltip2 tooltip2(Supplier<HTMLElement> trigger, String text) {
        return new Tooltip2(trigger, text);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Tooltip2.class.getName());

    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;
    public static final int DISTANCE = 15;

    private final String id;
    private final HTMLElement contentElement;
    private final List<CloseHandler<Tooltip2>> closeHandler;
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;
    private boolean visible;
    private int distance;
    private int entryDelay;
    private int exitDelay;
    private double showTimeout;
    private double hideTimeout;
    private Placement placement;
    private TriggerAria aria;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration anchorHandlers;
    private HandlerRegistration scrollHandler;

    Tooltip2(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.Tooltip2, div().css(component(tooltip))
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .attr("popover", "manual")
                .element());

        this.id = Id.unique(componentType().id);
        this.triggerSupplier = trigger;
        this.closeHandler = new ArrayList<>();
        this.visible = false;
        this.distance = DISTANCE;
        this.entryDelay = ENTRY_DELAY;
        this.exitDelay = EXIT_DELAY;
        this.placement = auto;
        this.aria = describedBy;
        this.showTimeout = 0;
        this.hideTimeout = 0;

        id(id);
        element().appendChild(div().css(component(tooltip, arrow)).element());
        element().appendChild(contentElement = div().css(component(tooltip, content)).element());
        if (text != null) {
            contentElement.textContent = text;
        }

        Attachable.register(this, this);
    }

    @Override
    public Element containerDelegate() {
        return contentElement;
    }

    @Override
    public Element textDelegate() {
        return contentElement;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (triggerSupplier != null) {
            trigger = triggerSupplier.get();
            if (trigger != null) {
                // CSS anchor positioning
                String anchorName = "--" + id;
                trigger.style.setProperty("anchor-name", anchorName);
                style("position-anchor", anchorName);
                style("margin", distance + "px");

                // top is the default for auto and recalculated on show()
                applyPlacement(placement == auto ? top : placement);

                // event listeners on trigger
                triggerHandlers = compose(
                        bind(trigger, mouseenter, this::scheduleShow),
                        bind(trigger, mouseleave, this::scheduleHide),
                        bind(trigger, focusin, this::scheduleShow),
                        bind(trigger, focusout, this::scheduleHide));

                // event listeners on tooltip itself:
                // hovering into the tooltip cancels the hide timer,
                // hovering out of the tooltip schedules hide
                anchorHandlers = compose(
                        bind(element(), mouseenter, this::cancelTimers),
                        bind(element(), mouseleave, this::scheduleHide));

                // hide tooltip immediately on scroll to prevent jump artifacts
                scrollHandler = bind(window, scroll.name, this::hideOnScroll);
            } else {
                logger.error("Unable to find trigger element for tooltip %o", element());
            }
        } else {
            logger.error("No trigger element defined for tooltip %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        cancelTimers(new Event(""));
        if (visible) {
            element().hidePopover();
            visible = false;
        }
        if (scrollHandler != null) {
            scrollHandler.removeHandler();
        }
        if (anchorHandlers != null) {
            anchorHandlers.removeHandler();
        }
        if (triggerHandlers != null) {
            triggerHandlers.removeHandler();
        }
        if (trigger != null) {
            trigger.style.removeProperty("anchor-name");
            trigger = null;
        }
    }

    // ------------------------------------------------------ builder

    public Tooltip2 entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public Tooltip2 exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public Tooltip2 distance(int distance) {
        this.distance = distance;
        return this;
    }

    public Tooltip2 leftAligned() {
        contentElement.classList.add(modifier(textAlignLeft));
        return this;
    }

    public Tooltip2 placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public Tooltip2 trigger(String trigger) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, By.selector(trigger));
        return this;
    }

    public Tooltip2 trigger(By trigger) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, trigger);
        return this;
    }

    public Tooltip2 trigger(HTMLElement trigger) {
        this.triggerSupplier = () -> trigger;
        return this;
    }

    public Tooltip2 trigger(Supplier<HTMLElement> trigger) {
        this.triggerSupplier = trigger;
        return this;
    }

    @Override
    public Tooltip2 that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Tooltip2 aria(TriggerAria aria) {
        this.aria = aria;
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Tooltip2 onClose(CloseHandler<Tooltip2> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        show(new Event(""));
    }

    public void show(Event event) {
        if (!visible && trigger != null) {
            // Show invisibly to get measurable dimensions, calculate placement, then reveal
            style("visibility", "hidden");
            element().showPopover();
            applyPlacement(bestPlacement(placement));
            element().style.removeProperty("visibility");
            visible = true;
            if (aria != none && trigger != null) {
                trigger.setAttribute(aria.attribute, id);
            }
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            if (visible) {
                element().hidePopover();
                visible = false;
                if (aria != none && trigger != null) {
                    trigger.removeAttribute(aria.attribute);
                }
                fireEvent(this, closeHandler, event, fireEvent);
            }
        }
    }

    @Override
    public String text() {
        return Elements.textNode(contentElement);
    }

    // ------------------------------------------------------ internal

    private void scheduleShow(Event event) {
        cancelTimers(event);
        showTimeout = setTimeout(e -> show(), entryDelay);
    }

    private void scheduleHide(Event event) {
        cancelTimers(event);
        hideTimeout = setTimeout(e -> close(new Event(""), true), exitDelay);
    }

    private void hideOnScroll(Event event) {
        cancelTimers(event);
        if (visible) {
            close(event, true);
        }
    }

    private void cancelTimers(Event event) {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }

    private void applyPlacement(Placement p) {
        for (String mod : Placement.modifiers) {
            classList().remove(mod);
        }
        if (p.modifier != null && !p.modifier.isEmpty()) {
            classList().add(p.modifier);
        }
    }

    private Placement bestPlacement(Placement preferred) {
        DOMRect triggerRect = trigger.getBoundingClientRect();
        DOMRect tooltipRect = element().getBoundingClientRect();
        double above = triggerRect.top;
        double below = window.innerHeight - triggerRect.bottom;
        double toLeft = triggerRect.left;
        double toRight = window.innerWidth - triggerRect.right;

        // Check which directions have enough space for the tooltip
        boolean topFits = above >= tooltipRect.height + distance;
        boolean bottomFits = below >= tooltipRect.height + distance;
        boolean leftFits = toLeft >= tooltipRect.width / 3 + distance;
        boolean rightFits = toRight >= tooltipRect.width / 3 + distance;

        // Honor explicit preference if it fits
        if (preferred != auto) {
            if (preferred == top && topFits) {return top;}
            if (preferred == bottom && bottomFits) {return bottom;}
            if (preferred == left && leftFits) {return left;}
            if (preferred == right && rightFits) {return right;}
        }

        // Otherwise apply these rules:
        // - prefer top, but only if the trigger is not near a horizontal edge
        // - prefer horizontal when the trigger is near a horizontal edge
        // - top wins over bottom when both horizontal directions fit
        // - last resort: pick the side with the most space
        if (topFits && leftFits && rightFits) {return top;}
        if (rightFits && !leftFits) {return right;}
        if (leftFits && !rightFits) {return left;}
        if (topFits) {return top;}
        if (bottomFits) {return bottom;}
        return toRight >= toLeft ? right : left;
    }
}
