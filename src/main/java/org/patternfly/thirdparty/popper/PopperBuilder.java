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
package org.patternfly.thirdparty.popper;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.function.Consumer;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.EventType;
import org.jboss.elemento.Key;

import elemental2.core.JsArray;
import elemental2.dom.CSSProperties;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.document;
import static jsinterop.base.Js.isTripleEqual;
import static jsinterop.base.Js.undefined;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.onDetach;
import static org.jboss.elemento.EventType.bind;
import static org.patternfly.thirdparty.popper.Placement.auto;
import static org.patternfly.thirdparty.popper.TriggerAction.click;
import static org.patternfly.thirdparty.popper.TriggerAction.focus;
import static org.patternfly.thirdparty.popper.TriggerAction.manual;
import static org.patternfly.thirdparty.popper.TriggerAction.mouseenter;

public class PopperBuilder {

    private final HTMLElement triggerElement;
    private final HTMLElement popperElement;
    private final JsArray<Modifier> modifiers;
    private final List<HandlerRegistration> handlerRegistrations;
    private int animationDuration;
    private int entryDelay;
    private int exitDelay;
    private int zIndex;
    private Placement placement;

    public PopperBuilder(HTMLElement triggerElement, HTMLElement popperElement) {
        this.triggerElement = triggerElement;
        this.popperElement = popperElement;
        this.modifiers = new JsArray<>();
        this.handlerRegistrations = new ArrayList<>();
        this.animationDuration = PopperWrapper.UNDEFINED;
        this.entryDelay = PopperWrapper.UNDEFINED;
        this.exitDelay = PopperWrapper.UNDEFINED;
        this.zIndex = PopperWrapper.UNDEFINED;
        this.placement = auto;
    }

    public PopperBuilder animationDuration(int animationDuration) {
        this.animationDuration = animationDuration;
        if (animationDuration != PopperWrapper.UNDEFINED) {
            popperElement.style.opacity = CSSProperties.OpacityUnionType.of(0);
            popperElement.style.transition = "opacity " + animationDuration + "ms cubic-bezier(.54, 1.5, .38, 1.11)";
        }
        return this;
    }

    public PopperBuilder entryDelay(int entryDelay) {
        this.entryDelay = entryDelay;
        return this;
    }

    public PopperBuilder exitDelay(int exitDelay) {
        this.exitDelay = exitDelay;
        return this;
    }

    public PopperBuilder zIndex(int zIndex) {
        this.zIndex = zIndex;
        if (zIndex != PopperWrapper.UNDEFINED) {
            popperElement.style.zIndex = CSSProperties.ZIndexUnionType.of(zIndex);
        }
        return this;
    }

    public PopperBuilder placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public PopperBuilder addModifier(Modifier... modifiers) {
        this.modifiers.push(modifiers);
        return this;
    }

    public PopperBuilder registerHandler(Set<TriggerAction> triggerActions, Consumer<Event> show, Consumer<Event> hide) {
        return registerHandler(triggerElement, triggerActions, show, hide);
    }

    @SuppressWarnings("Convert2MethodRef")
    public PopperBuilder registerHandler(HTMLElement triggerElement, Set<TriggerAction> triggerActions, Consumer<Event> show, Consumer<Event> hide) {
        if (triggerActions.contains(mouseenter)) {
            handlerRegistrations.add(bind(triggerElement, EventType.mouseenter, e -> show.accept(e)));
            handlerRegistrations.add(bind(triggerElement, EventType.mouseleave, e -> hide.accept(e)));
            handlerRegistrations.add(bind(popperElement, EventType.mouseenter, e -> show.accept(e)));
            handlerRegistrations.add(bind(popperElement, EventType.mouseleave, e -> hide.accept(e)));
        }
        if (triggerActions.contains(focus)) {
            handlerRegistrations.add(bind(triggerElement, EventType.focus, e -> show.accept(e)));
            handlerRegistrations.add(bind(triggerElement, EventType.blur, e -> hide.accept(e)));
        }
        if (triggerActions.contains(click)) {
            handlerRegistrations.add(bind(document, EventType.click, true, e -> {
                if (isVisible(popperElement)) {
                    hide.accept(e);
                } else if (e.target == triggerElement || triggerElement.contains(((Node) e.target))) {
                    show.accept(e);
                }
            }));
        }
        if (!triggerActions.contains(manual)) {
            handlerRegistrations.add(bind(document, EventType.keydown, true, e -> {
                if (isVisible(popperElement) && Key.Escape.match(e)) {
                    hide.accept(e);
                }
            }));
            handlerRegistrations.add(bind(popperElement, EventType.keydown, e -> {
                if (Key.Enter.match(e)) {
                    if (isVisible(popperElement)) {
                        hide.accept(e);
                    } else {
                        show.accept(e);
                    }
                }
            }));
        }
        return this;
    }

    public PopperBuilder removePopperOnTriggerDetach() {
        onDetach(triggerElement, mr -> failSafeRemoveFromParent(popperElement));
        return this;
    }

    public PopperWrapper build() {
        Object createPopperFn = Js.global().get("createPopper");
        if (isTripleEqual(createPopperFn, undefined())) {
            return new PopperWrapperError();
        } else {
            Options options = new Options();
            options.placement = placement.value;
            options.modifiers = modifiers;
            Popper popper = Popper.createPopper(triggerElement, popperElement, options);
            return new PopperWrapperImpl(popper, handlerRegistrations, animationDuration, entryDelay, exitDelay);
        }
    }
}
