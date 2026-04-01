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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Roles;
import org.patternfly.handler.CloseHandler;
import org.patternfly.overlay.Overlay;
import org.patternfly.overlay.CssPositioning;
import org.patternfly.style.Classes;
import org.patternfly.style.Placement;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.tooltip.TriggerAria.describedBy;
import static org.patternfly.component.tooltip.TriggerAria.none;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.overlay.Overlay.overlay;
import static org.patternfly.overlay.TriggerMode.hover;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textAlignLeft;
import static org.patternfly.style.Classes.tooltip;
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

    public static final int DISTANCE = 15;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;

    private final String id;
    private final Overlay overlay;
    private final HTMLElement contentElement;
    private final List<CloseHandler<Tooltip>> closeHandler;
    private TriggerAria aria;

    Tooltip(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.Tooltip, div().css(component(Classes.tooltip))
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .element());

        this.id = Id.unique(componentType().id);
        this.overlay = overlay(element(), top)
                .triggerMode(hover)
                .trigger(trigger)
                .distance(DISTANCE)
                .entryDelay(ENTRY_DELAY)
                .exitDelay(EXIT_DELAY)
                .cssPositioning(CssPositioning.tooltipEnabled());
        this.closeHandler = new ArrayList<>();
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
        overlay.onToggle((event, open) -> {
            HTMLElement trigger = overlay.trigger();
            if (open) {
                if (aria != none && trigger != null) {
                    trigger.setAttribute(aria.attribute, id);
                }
            } else {
                if (aria != none && trigger != null) {
                    trigger.removeAttribute(aria.attribute);
                }
                fireEvent(this, closeHandler, event, true);
            }
        });
        overlay.attach();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        overlay.detach();
    }

    // ------------------------------------------------------ builder

    public Tooltip distance(int distance) {
        overlay.distance(distance);
        return this;
    }

    public Tooltip entryDelay(int delay) {
        overlay.entryDelay(delay);
        return this;
    }

    public Tooltip exitDelay(int delay) {
        overlay.exitDelay(delay);
        return this;
    }

    public Tooltip leftAligned() {
        contentElement.classList.add(modifier(textAlignLeft));
        return this;
    }

    public Tooltip placement(Placement placement) {
        overlay.placement(placement);
        return this;
    }

    public Tooltip trigger(String trigger) {
        overlay.trigger(trigger);
        return this;
    }

    public Tooltip trigger(By trigger) {
        overlay.trigger(trigger);
        return this;
    }

    public Tooltip trigger(HTMLElement trigger) {
        overlay.trigger(trigger);
        return this;
    }

    public Tooltip trigger(Supplier<HTMLElement> trigger) {
        overlay.trigger(trigger);
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
        overlay.show();
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            overlay.hide(event);
        }
    }

    @Override
    public String text() {
        return Elements.textNode(contentElement);
    }
}
