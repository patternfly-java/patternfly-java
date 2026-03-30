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
import org.patternfly.position.AnchorPositioning;
import org.patternfly.position.CssPositioning;
import org.patternfly.style.Classes;
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
import static org.patternfly.popper.Placement.auto;
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
public class NativeTooltip extends BaseComponent<HTMLDivElement, NativeTooltip> implements
        Attachable,
        Closeable<HTMLDivElement, NativeTooltip>,
        ElementContainerDelegate<HTMLDivElement, NativeTooltip>,
        ElementTextDelegate<HTMLDivElement, NativeTooltip> {

    // ------------------------------------------------------ factory

    public static NativeTooltip nativeTooltip() {
        return new NativeTooltip(null, null);
    }

    public static NativeTooltip nativeTooltip(String text) {
        return new NativeTooltip(null, text);
    }

    public static NativeTooltip nativeTooltip(By trigger) {
        return new NativeTooltip(() -> Elements.querySelector(document.body, trigger), null);
    }

    public static NativeTooltip nativeTooltip(By trigger, String text) {
        return new NativeTooltip(() -> Elements.querySelector(document.body, trigger), text);
    }

    public static NativeTooltip nativeTooltip(HTMLElement trigger) {
        return new NativeTooltip(() -> trigger, null);
    }

    public static NativeTooltip nativeTooltip(HTMLElement trigger, String text) {
        return new NativeTooltip(() -> trigger, text);
    }

    public static NativeTooltip nativeTooltip(Supplier<HTMLElement> trigger) {
        return new NativeTooltip(trigger, null);
    }

    public static NativeTooltip nativeTooltip(Supplier<HTMLElement> trigger, String text) {
        return new NativeTooltip(trigger, text);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(NativeTooltip.class.getName());

    public static final int DISTANCE = 15;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;

    private final String id;
    private final AnchorPositioning ap;
    private final HTMLElement contentElement;
    private final List<CloseHandler<NativeTooltip>> closeHandler;

    private boolean visible;
    private int entryDelay;
    private int exitDelay;
    private double showTimeout;
    private double hideTimeout;
    private Placement placement;
    private TriggerAria aria;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration anchorHandlers;
    private HandlerRegistration scrollHandler;

    NativeTooltip(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.NativeTooltip, div().css(component(Classes.tooltip))
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .attr(popover, "manual")
                .element());

        this.id = Id.unique(componentType().id);
        this.ap = new AnchorPositioning(id, element(), trigger, DISTANCE, CssPositioning.tooltipEnabled());
        this.closeHandler = new ArrayList<>();
        this.visible = false;
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
        ap.detach();
    }

    // ------------------------------------------------------ builder

    public NativeTooltip distance(int distance) {
        ap.distance(distance);
        return this;
    }

    public NativeTooltip entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public NativeTooltip exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public NativeTooltip leftAligned() {
        contentElement.classList.add(modifier(textAlignLeft));
        return this;
    }

    public NativeTooltip placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public NativeTooltip trigger(String trigger) {
        ap.trigger(trigger);
        return this;
    }

    public NativeTooltip trigger(By trigger) {
        ap.trigger(trigger);
        return this;
    }

    public NativeTooltip trigger(HTMLElement trigger) {
        ap.trigger(trigger);
        return this;
    }

    public NativeTooltip trigger(Supplier<HTMLElement> trigger) {
        ap.trigger(trigger);
        return this;
    }

    @Override
    public NativeTooltip that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public NativeTooltip aria(TriggerAria aria) {
        this.aria = aria;
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public NativeTooltip onClose(CloseHandler<NativeTooltip> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        HTMLElement trigger = ap.trigger();
        if (!visible && trigger != null) {
            if (ap.cssPositioning()) {
                // CSS handles position-try-fallbacks; just apply preferred placement and show
                ap.applyPlacement(placement == auto ? top : placement);
                element().showPopover();
            } else {
                // JS calculates best placement via viewport measurements
                style("visibility", "hidden");
                element().showPopover();
                ap.applyBestPlacement(placement);
                element().style.removeProperty("visibility");
            }
            visible = true;
            if (aria != none) {
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
        if (visible) {
            ap.applyBestPlacement(placement);
        }
    }

    private void cancelTimers() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }

}
