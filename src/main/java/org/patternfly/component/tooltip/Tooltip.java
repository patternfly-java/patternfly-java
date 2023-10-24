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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.Id;
import org.jboss.elemento.Key;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.popper.Modifier;
import org.patternfly.popper.ModifierOptions;
import org.patternfly.popper.Options;
import org.patternfly.popper.Placement;
import org.patternfly.popper.Popper;

import elemental2.core.JsArray;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.patternfly.component.tooltip.Position.auto;
import static org.patternfly.component.tooltip.Position.top;
import static org.patternfly.component.tooltip.Trigger.click;
import static org.patternfly.component.tooltip.Trigger.focus;
import static org.patternfly.component.tooltip.Trigger.manual;
import static org.patternfly.component.tooltip.Trigger.mouseenter;
import static org.patternfly.component.tooltip.TriggerAria.describedBy;
import static org.patternfly.component.tooltip.TriggerAria.none;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.layout.Classes.arrow;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.textAlignLeft;
import static org.patternfly.layout.Classes.tooltip;
import static org.patternfly.popper.ModifierPhase.main;

/**
 * A tooltip is in-app messaging used to identify elements on a page with short, clarifying text.
 *
 * @see <a href="https://www.patternfly.org/components/tooltip/html">https://www.patternfly.org/components/tooltip/html</a>
 */
public class Tooltip extends BaseComponent<HTMLElement, Tooltip> implements Attachable {

    // ------------------------------------------------------ factory

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

    public static final int ANIMATION_DURATION = 300;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;
    public static final int DISTANCE = 15;
    public static final int Z_INDEX = 9999;

    private static final Map<Position, Placement> positionToPlacement = new HashMap<>();
    private static final Map<String, Position> placementToPosition = new HashMap<>();
    static {
        positionToPlacement.put(Position.auto, Placement.auto);
        positionToPlacement.put(Position.top, Placement.top);
        positionToPlacement.put(Position.topStart, Placement.topStart);
        positionToPlacement.put(Position.topEnd, Placement.topEnd);
        positionToPlacement.put(Position.bottom, Placement.bottom);
        positionToPlacement.put(Position.bottomStart, Placement.bottomStart);
        positionToPlacement.put(Position.bottomEnd, Placement.bottomEnd);
        positionToPlacement.put(Position.left, Placement.left);
        positionToPlacement.put(Position.leftStart, Placement.leftStart);
        positionToPlacement.put(Position.leftEnd, Placement.leftEnd);
        positionToPlacement.put(Position.right, Placement.right);
        positionToPlacement.put(Position.rightStart, Placement.rightStart);
        positionToPlacement.put(Position.rightEnd, Placement.rightEnd);

        placementToPosition.put(Placement.top.value, Position.top);
        placementToPosition.put(Placement.topStart.value, Position.topStart);
        placementToPosition.put(Placement.topEnd.value, Position.topEnd);
        placementToPosition.put(Placement.bottom.value, Position.bottom);
        placementToPosition.put(Placement.bottomStart.value, Position.bottomStart);
        placementToPosition.put(Placement.bottomEnd.value, Position.bottomEnd);
        placementToPosition.put(Placement.left.value, Position.left);
        placementToPosition.put(Placement.leftStart.value, Position.leftStart);
        placementToPosition.put(Placement.leftEnd.value, Position.leftEnd);
        placementToPosition.put(Placement.right.value, Position.right);
        placementToPosition.put(Placement.rightStart.value, Position.rightStart);
        placementToPosition.put(Placement.rightEnd.value, Position.rightEnd);
    }

    private final String id;
    private final Supplier<HTMLElement> trigger;
    private final HTMLElement contentElement;
    private final Set<Trigger> triggers;
    private final List<HandlerRegistration> handlerRegistrations;
    private boolean flip;
    private int distance;
    private int animationDuration;
    private int entryDelay;
    private int exitDelay;
    private Popper popper;
    private TriggerAria aria;
    private Position position;
    private ComponentHandler<Tooltip> onHidden;
    private double transitionTimer, hideTimer, showTimer;

    Tooltip(Supplier<HTMLElement> trigger, String text) {
        super(div().css(component(tooltip))
                .style("display", "none")
                .attr(role, "tooltip")
                .aria(live, "polite")
                .element(),
                ComponentType.Tooltip);

        this.id = Id.unique(componentType().id);
        this.flip = true;
        this.distance = DISTANCE;
        this.animationDuration = ANIMATION_DURATION;
        this.entryDelay = ENTRY_DELAY;
        this.exitDelay = EXIT_DELAY;
        this.aria = describedBy;
        this.position = top;
        this.trigger = trigger;
        this.triggers = EnumSet.of(mouseenter, focus);
        this.handlerRegistrations = new ArrayList<>();

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
        HTMLElement triggerElement = trigger.get();
        if (triggerElement != null) {
            setupStyles();
            setupPopper(triggerElement);
            setupHandlers(triggerElement);
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        for (HandlerRegistration handlerRegistration : handlerRegistrations) {
            handlerRegistration.removeHandler();
        }
        if (popper != null) {
            popper.destroy();
        }
    }

    // ------------------------------------------------------ builder

    public Tooltip animationDuration(int animationDuration) {
        this.animationDuration = animationDuration;
        return this;
    }

    public Tooltip aria(TriggerAria aria) {
        this.aria = aria;
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

    public Tooltip position(Position position) {
        if (position == auto) {
            flip = true;
        }
        this.position = position;
        return this;
    }

    public Tooltip text(String text) {
        contentElement.textContent = text;
        if (isAttached(this) && isVisible(this) && popper != null) {
            popper.update();
        }
        return this;
    }

    public Tooltip trigger(Trigger... trigger) {
        if (trigger != null) {
            triggers.clear();
            triggers.addAll(asList(trigger));
        }
        return this;
    }

    public Tooltip zIndex(int zIndex) {
        return style("z-index", zIndex);
    }

    @Override
    public Tooltip that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Tooltip onHidden(ComponentHandler<Tooltip> handler) {
        this.onHidden = handler;
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        clearTimeout(transitionTimer);
        clearTimeout(hideTimer);
        if (aria != none && trigger.get() != null) {
            trigger.get().setAttribute(aria.attribute, id);
        }
        showTimer = setTimeout(o1 -> {
            setVisible(this, true);
            popper.update().then(o2 -> {
                style("opacity", 1);
                return null;
            });
        }, entryDelay);
    }

    public void hide() {
        hide(new Event(""));
    }

    private void hide(Event event) {
        clearTimeout(showTimer);
        if (aria != none && trigger.get() != null) {
            trigger.get().removeAttribute(aria.attribute);
        }
        hideTimer = setTimeout(o1 -> {
            style("opacity", 0);
            transitionTimer = setTimeout(o2 -> {
                setVisible(this, false);
                if (onHidden != null) {
                    onHidden.handle(event, this);
                }
            }, animationDuration);
        }, exitDelay);
    }

    public String text() {
        return contentElement.textContent;
    }

    // ------------------------------------------------------ internals

    private void setupStyles() {
        style("z-index", Z_INDEX);
        style("opacity", 0);
        style("transition", "opacity " + animationDuration + "ms cubic-bezier(.54, 1.5, .38, 1.11)");
    }

    private void setupPopper(HTMLElement triggerElement) {
        Modifier offset = new Modifier();
        offset.name = "offset";
        offset.options = new ModifierOptions();
        offset.options.offset = new int[] { 0, distance };

        Modifier preventOverflow = new Modifier();
        preventOverflow.name = "preventOverflow";
        preventOverflow.enabled = false;

        Modifier hide = new Modifier();
        hide.name = "hide";
        hide.enabled = true;

        Modifier flip = new Modifier();
        flip.name = "flip";
        flip.enabled = position == auto || this.flip;

        // our very own modifier to adjust the position CSS modifier
        Modifier positionModifier = new Modifier();
        positionModifier.name = "positionModifier";
        positionModifier.enabled = true;
        positionModifier.phase = main.name();
        positionModifier.fn = (args) -> {
            if (args.state != null && args.state.elements != null) {
                String placement = args.state.placement;
                HTMLElement popperElement = args.state.elements.popper;
                if (placement != null && popperElement != null) {
                    Position position = placementToPosition.get(placement);
                    if (position != null) {
                        for (Position p : Position.values()) {
                            if (!p.modifier.isEmpty()) {
                                popperElement.classList.remove(p.modifier);
                            }
                        }
                        popperElement.classList.add(position.modifier);
                    }
                }
            }
        };

        Options options = new Options();
        options.placement = positionToPlacement.getOrDefault(position, Placement.auto).value;
        options.modifiers = JsArray.of(offset, preventOverflow, hide, flip, positionModifier);
        this.popper = Popper.createPopper(triggerElement, element(), options);
    }

    @SuppressWarnings("Convert2MethodRef")
    private void setupHandlers(HTMLElement triggerElement) {
        if (triggers.contains(mouseenter)) {
            handlerRegistrations.add(bind(triggerElement, EventType.mouseenter, e -> show()));
            handlerRegistrations.add(bind(triggerElement, EventType.mouseleave, e -> hide(e)));
        }
        if (triggers.contains(focus)) {
            handlerRegistrations.add(bind(triggerElement, EventType.focus, e -> show()));
            handlerRegistrations.add(bind(triggerElement, EventType.blur, e -> hide(e)));
        }
        if (triggers.contains(click)) {
            handlerRegistrations.add(bind(document, EventType.click, true, e -> {
                if (isVisible(this)) {
                    hide(e);
                } else if (e.target == triggerElement) {
                    show();
                }
            }));
        }
        if (!triggers.contains(manual)) {
            handlerRegistrations.add(bind(document, EventType.keydown, true, e -> {
                if (isVisible(this) && Key.Escape.match(e)) {
                    hide();
                }
            }));
            handlerRegistrations.add(bind(this, EventType.keydown, e -> {
                if (Key.Enter.match(e)) {
                    if (isVisible(this)) {
                        hide(e);
                    } else {
                        show();
                    }
                }
            }));
        }
    }
}
