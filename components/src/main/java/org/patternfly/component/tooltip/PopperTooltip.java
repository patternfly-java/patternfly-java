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
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Roles;
import org.patternfly.handler.CloseHandler;
import org.patternfly.popper.Modifiers;
import org.patternfly.popper.Popper;
import org.patternfly.popper.PopperBuilder;
import org.patternfly.popper.TriggerAction;
import org.patternfly.style.Placement;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isVisible;
import static org.patternfly.component.tooltip.TriggerAria.describedBy;
import static org.patternfly.component.tooltip.TriggerAria.none;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.popper.TriggerAction.focus;
import static org.patternfly.popper.TriggerAction.mouseenter;
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
 *
 * @deprecated This implementation uses the Popper.js API, which is due to be removed soon. Use {@link Tooltip} instead.
 */
@Deprecated
public class PopperTooltip extends BaseComponent<HTMLDivElement, PopperTooltip> implements
        Attachable,
        Closeable<HTMLDivElement, PopperTooltip>,
        ElementTextMethods<HTMLDivElement, PopperTooltip> {

    // ------------------------------------------------------ factory

    public static PopperTooltip tooltip() {
        return new PopperTooltip(null, null);
    }

    public static PopperTooltip tooltip(String text) {
        return new PopperTooltip(null, text);
    }

    public static PopperTooltip tooltip(By trigger) {
        return new PopperTooltip(() -> Elements.querySelector(document.body, trigger), null);
    }

    public static PopperTooltip tooltip(By trigger, String text) {
        return new PopperTooltip(() -> Elements.querySelector(document.body, trigger), text);
    }

    public static PopperTooltip tooltip(HTMLElement trigger) {
        return new PopperTooltip(() -> trigger, null);
    }

    public static PopperTooltip tooltip(HTMLElement trigger, String text) {
        return new PopperTooltip(() -> trigger, text);
    }

    public static PopperTooltip tooltip(Supplier<HTMLElement> trigger) {
        return new PopperTooltip(trigger, null);
    }

    public static PopperTooltip tooltip(Supplier<HTMLElement> trigger, String text) {
        return new PopperTooltip(trigger, text);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(PopperTooltip.class.getName());

    public static final int ANIMATION_DURATION = 300;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;
    public static final int DISTANCE = 15;
    public static final int Z_INDEX = 9999;

    private final String id;
    private final HTMLElement contentElement;
    private final Set<TriggerAction> triggerActions;
    private final List<CloseHandler<PopperTooltip>> closeHandler;
    private Supplier<HTMLElement> trigger;
    private boolean flip;
    private int distance;
    private int animationDuration;
    private int entryDelay;
    private int exitDelay;
    private int zIndex;
    private Popper popper;
    private TriggerAria aria;
    private Placement placement;

    PopperTooltip(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.PopperTooltip, div().css(component(tooltip))
                .style("display", "none")
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .element());

        this.id = Id.unique(componentType().id);
        this.trigger = trigger;
        this.triggerActions = EnumSet.of(mouseenter, focus);
        this.closeHandler = new ArrayList<>();
        this.flip = true;
        this.placement = top;
        this.aria = describedBy;
        this.zIndex = Z_INDEX;
        this.distance = DISTANCE;
        this.entryDelay = ENTRY_DELAY;
        this.exitDelay = EXIT_DELAY;
        this.animationDuration = ANIMATION_DURATION;

        id(id);
        add(div().css(component(tooltip, arrow)));
        add(contentElement = div().css(component(tooltip, content)).element());
        if (text != null) {
            contentElement.textContent = text;
        }

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (trigger != null) {
            HTMLElement triggerElement = trigger.get();
            if (triggerElement != null) {
                popper = new PopperBuilder(componentType().componentName, triggerElement, element())
                        .animationDuration(animationDuration)
                        .entryDelay(entryDelay)
                        .exitDelay(exitDelay)
                        .zIndex(zIndex)
                        .placement(placement)
                        .addModifier(Modifiers.offset(distance),
                                Modifiers.noOverflow(),
                                Modifiers.hide(),
                                Modifiers.flip(placement == auto || flip),
                                Modifiers.placement(),
                                Modifiers.eventListeners(false))
                        .registerHandler(triggerActions, this::show, this::close)
                        .removePopperOnTriggerDetach()
                        .build();
            } else {
                logger.error("Unable to find trigger element for tooltip %o", element());
            }
        } else {
            logger.error("No trigger element defined for tooltip %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        popper.cleanup();
    }

    // ------------------------------------------------------ builder

    public PopperTooltip appendToBody() {
        return appendTo(document.body);
    }

    public PopperTooltip appendTo(Node node) {
        if (node != null) {
            node.appendChild(element());
        }
        return this;
    }

    public PopperTooltip animationDuration(int animationDuration) {
        this.animationDuration = animationDuration;
        return this;
    }

    public PopperTooltip distance(int distance) {
        this.distance = distance;
        return this;
    }

    public PopperTooltip flip(boolean flip) {
        this.flip = flip;
        return this;
    }

    public PopperTooltip entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public PopperTooltip exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public PopperTooltip leftAligned() {
        contentElement.classList.add(modifier(textAlignLeft));
        return this;
    }

    public PopperTooltip placement(Placement placement) {
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return this;
    }

    @Override
    public PopperTooltip text(String text) {
        Elements.textNode(contentElement, text);
        if (isAttached(this) && isVisible(this)) {
            popper.update();
        }
        return this;
    }

    public PopperTooltip trigger(String trigger) {
        return trigger(() -> Elements.querySelector(document.body, By.selector(trigger)));
    }

    public PopperTooltip trigger(By trigger) {
        return trigger(() -> Elements.querySelector(document.body, trigger));
    }

    public PopperTooltip trigger(HTMLElement trigger) {
        return trigger(() -> trigger);
    }

    public PopperTooltip trigger(Supplier<HTMLElement> trigger) {
        this.trigger = trigger;
        return this;
    }

    public PopperTooltip triggerActions(TriggerAction... triggerActions) {
        if (triggerActions != null) {
            this.triggerActions.clear();
            this.triggerActions.addAll(asList(triggerActions));
        }
        return this;
    }

    public PopperTooltip zIndex(int zIndex) {
        this.zIndex = zIndex;
        return this;
    }

    @Override
    public PopperTooltip that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public PopperTooltip aria(TriggerAria aria) {
        this.aria = aria;
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public PopperTooltip onClose(CloseHandler<PopperTooltip> closeHandler) {
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
        popper.show(() -> {
            if (aria != none && trigger.get() != null) {
                trigger.get().setAttribute(aria.attribute, id);
            }
        });
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            popper.hide(() -> {
                if (aria != none && trigger.get() != null) {
                    trigger.get().removeAttribute(aria.attribute);
                }
                fireEvent(this, closeHandler, event, fireEvent);
            });
        }
    }

    @Override
    public String text() {
        return Elements.textNode(contentElement);
    }
}
