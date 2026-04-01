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
import org.patternfly.position.AnchorPositioning;
import org.patternfly.position.CssPositioning;
import org.patternfly.style.Classes;
import org.patternfly.style.Placement;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
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
import static org.patternfly.core.Attributes.popover;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textAlignLeft;
import static org.patternfly.style.Classes.tooltip;
import static org.patternfly.style.Placement.auto;
import static org.patternfly.style.Placement.top;

/**
 * A tooltip is in-app messaging used to identify elements on a page with short, clarifying text.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The tooltip uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues.
 *
 * @see <a href= "https://www.patternfly.org/components/tooltip">https://www.patternfly.org/components/tooltip</a>
 */
public class Tooltip extends BaseComponent<HTMLDivElement, Tooltip> implements
        Attachable,
        Closeable<HTMLDivElement, Tooltip>,
        ElementContainerDelegate<HTMLDivElement, Tooltip>,
        ElementTextDelegate<HTMLDivElement, Tooltip> {

    // ------------------------------------------------------ factory

    public static Tooltip tooltip() {
        return new Tooltip(null, null);
    }

    public static Tooltip tooltip(String text) {
        return new Tooltip(null, text);
    }

    public static Tooltip tooltip(By trigger) {
        return new Tooltip(() -> Elements.querySelector(document.body, trigger), null);
    }

    public static Tooltip tooltip(By trigger, String text) {
        return new Tooltip(() -> Elements.querySelector(document.body, trigger), text);
    }

    public static Tooltip tooltip(HTMLElement trigger) {
        return new Tooltip(() -> trigger, null);
    }

    public static Tooltip tooltip(HTMLElement trigger, String text) {
        return new Tooltip(() -> trigger, text);
    }

    public static Tooltip tooltip(Supplier<HTMLElement> trigger) {
        return new Tooltip(trigger, null);
    }

    public static Tooltip tooltip(Supplier<HTMLElement> trigger, String text) {
        return new Tooltip(trigger, text);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Tooltip.class.getName());

    public static final int DISTANCE = 15;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;

    private final String id;
    private final AnchorPositioning ap;
    private final HTMLElement contentElement;
    private final List<CloseHandler<Tooltip>> closeHandler;

    private int entryDelay;
    private int exitDelay;
    private double showTimeout;
    private double hideTimeout;
    private Placement placement;
    private TriggerAria aria;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration anchorHandlers;
    private HandlerRegistration scrollHandler;

    Tooltip(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.Tooltip, div().css(component(Classes.tooltip))
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .attr(popover, "manual")
                .element());

        this.id = Id.unique(componentType().id);
        this.ap = new AnchorPositioning(id, element(), trigger, DISTANCE, CssPositioning.tooltipEnabled(), false);
        this.closeHandler = new ArrayList<>();
        this.showTimeout = 0;
        this.hideTimeout = 0;
        this.entryDelay = ENTRY_DELAY;
        this.exitDelay = EXIT_DELAY;
        this.placement = auto;
        this.aria = describedBy;

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
        HTMLElement trigger = ap.attach();
        if (trigger != null) {
            // top is the default for auto and recalculated on show()
            ap.applyPlacement(placement == auto ? top : placement);

            triggerHandlers = compose(
                    bind(trigger, mouseenter, e -> scheduleShow()),
                    bind(trigger, mouseleave, e -> scheduleHide()),
                    bind(trigger, focusin, e -> scheduleShow()),
                    bind(trigger, focusout, e -> scheduleHide()));
            anchorHandlers = compose(
                    bind(element(), mouseenter, e -> cancelTimers()),
                    bind(element(), mouseleave, e -> scheduleHide()));

            if (!ap.cssPositioning()) {
                scrollHandler = bind(document, scroll, true, e -> recalculatePlacement());
            }

        } else if (ap.hasTriggerSupplier()) {
            logger.error("Unable to find trigger element for tooltip %o", element());
        } else {
            logger.error("No trigger element defined for tooltip %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        cancelTimers();
        if (ap.visible()) {
            ap.hide();
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
        ap.detach();
    }

    // ------------------------------------------------------ builder

    public Tooltip distance(int distance) {
        ap.distance(distance);
        return this;
    }

    public Tooltip entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public Tooltip exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public Tooltip leftAligned() {
        contentElement.classList.add(modifier(textAlignLeft));
        return this;
    }

    public Tooltip placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public Tooltip trigger(String trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Tooltip trigger(By trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Tooltip trigger(HTMLElement trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Tooltip trigger(Supplier<HTMLElement> trigger) {
        ap.trigger(trigger);
        return this;
    }

    @Override
    public Tooltip that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Tooltip aria(TriggerAria aria) {
        this.aria = aria;
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Tooltip onClose(CloseHandler<Tooltip> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        HTMLElement trigger = ap.trigger();
        if (!ap.visible() && trigger != null) {
            if (ap.cssPositioning()) {
                // CSS handles position-try-fallbacks; just apply preferred placement and show
                ap.applyPlacement(placement == auto ? top : placement);
                ap.show();
            } else {
                // JS calculates the best placement via viewport measurements.
                // For the calculation to work, the tooltip must be at least hidden
                style("visibility", "hidden");
                ap.show();
                ap.applyBestPlacement(placement);
                element().style.removeProperty("visibility");
            }
            if (aria != none) {
                trigger.setAttribute(aria.attribute, id);
            }
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            if (ap.visible()) {
                ap.hide();
                HTMLElement trigger = ap.trigger();
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

    private void scheduleShow() {
        cancelTimers();
        showTimeout = setTimeout(e -> show(), entryDelay);
    }

    private void scheduleHide() {
        cancelTimers();
        hideTimeout = setTimeout(e -> close(new Event(""), true), exitDelay);
    }

    private void recalculatePlacement() {
        if (ap.visible()) {
            ap.applyBestPlacement(placement);
        }
    }

    private void cancelTimers() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }

}
