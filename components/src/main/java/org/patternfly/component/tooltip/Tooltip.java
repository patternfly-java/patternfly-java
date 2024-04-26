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

import java.util.EnumSet;
import java.util.Set;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.component.WithText;
import org.patternfly.core.Roles;
import org.patternfly.handler.CloseHandler;
import org.patternfly.popper.Modifiers;
import org.patternfly.popper.Placement;
import org.patternfly.popper.Popper;
import org.patternfly.popper.PopperBuilder;
import org.patternfly.popper.TriggerAction;

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
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.top;
import static org.patternfly.popper.TriggerAction.focus;
import static org.patternfly.popper.TriggerAction.mouseenter;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textAlignLeft;
import static org.patternfly.style.Classes.tooltip;

/**
 * A tooltip is in-app messaging used to identify elements on a page with short, clarifying text.
 */
public class Tooltip extends BaseComponent<HTMLDivElement, Tooltip> implements
        Closeable<HTMLDivElement, Tooltip>,
        WithText<HTMLDivElement, Tooltip>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Tooltip tooltip() {
        return new Tooltip(null, null);
    }

    public static Tooltip tooltip(String text) {
        return new Tooltip(null, text);
    }

    public static Tooltip tooltip(By trigger) {
        return new Tooltip(() -> Elements.find(document.body, trigger), null);
    }

    public static Tooltip tooltip(By trigger, String text) {
        return new Tooltip(() -> Elements.find(document.body, trigger), text);
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

    public static final int ANIMATION_DURATION = 300;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;
    public static final int DISTANCE = 15;
    public static final int Z_INDEX = 9999;

    private final String id;
    private final HTMLElement contentElement;
    private final Set<TriggerAction> triggerActions;
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
    private CloseHandler<Tooltip> closeHandler;

    Tooltip(Supplier<HTMLElement> trigger, String text) {
        super(ComponentType.Tooltip, div().css(component(tooltip))
                .style("display", "none")
                .attr(role, Roles.tooltip)
                .aria(live, "polite")
                .element());

        this.id = Id.unique(componentType().id);
        this.trigger = trigger;
        this.triggerActions = EnumSet.of(mouseenter, focus);
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
                if (isAttached(triggerElement)) {
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
                    logger.error("Trigger element %o is not attached for tooltip %o", triggerElement, element());
                }
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

    public Tooltip appendToBody() {
        return appendTo(document.body);
    }

    public Tooltip appendTo(Node node) {
        if (node != null) {
            node.appendChild(element());
        }
        return this;
    }

    public Tooltip animationDuration(int animationDuration) {
        this.animationDuration = animationDuration;
        return this;
    }

    public Tooltip distance(int distance) {
        this.distance = distance;
        return this;
    }

    public Tooltip flip(boolean flip) {
        this.flip = flip;
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
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return this;
    }

    @Override
    public Tooltip text(String text) {
        contentElement.textContent = text;
        if (isAttached(this) && isVisible(this)) {
            popper.update();
        }
        return this;
    }

    public Tooltip trigger(String trigger) {
        return trigger(() -> Elements.find(document.body, By.selector(trigger)));
    }

    public Tooltip trigger(By trigger) {
        return trigger(() -> Elements.find(document.body, trigger));
    }

    public Tooltip trigger(HTMLElement trigger) {
        return trigger(() -> trigger);
    }

    public Tooltip trigger(Supplier<HTMLElement> trigger) {
        this.trigger = trigger;
        return this;
    }

    public Tooltip triggerActions(TriggerAction... triggerActions) {
        if (triggerActions != null) {
            this.triggerActions.clear();
            this.triggerActions.addAll(asList(triggerActions));
        }
        return this;
    }

    public Tooltip zIndex(int zIndex) {
        this.zIndex = zIndex;
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
        this.closeHandler = closeHandler;
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
        return contentElement.textContent;
    }

}
