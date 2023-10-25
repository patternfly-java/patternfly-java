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

import java.util.List;
import java.util.Set;
import java.util.function.Consumer;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLElementBuilder;
import org.jboss.elemento.Key;

import elemental2.core.JsArray;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.document;
import static jsinterop.base.Js.isTripleEqual;
import static jsinterop.base.Js.undefined;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.jboss.elemento.EventType.bind;
import static org.patternfly.thirdparty.popper.Placement.auto;
import static org.patternfly.thirdparty.popper.TriggerAction.click;
import static org.patternfly.thirdparty.popper.TriggerAction.focus;
import static org.patternfly.thirdparty.popper.TriggerAction.manual;
import static org.patternfly.thirdparty.popper.TriggerAction.mouseenter;

public class PopperBuilder {

    private final HTMLElement trigger;
    private final HTMLElement popper;
    private Placement placement;
    private JsArray<Modifier> modifiers;

    public PopperBuilder(HTMLElement trigger, HTMLElement popper) {
        this.trigger = trigger;
        this.popper = popper;
        this.placement = auto;
        this.modifiers = new JsArray<>();
    }

    public PopperBuilder placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public PopperBuilder addModifier(Modifier... modifiers) {
        this.modifiers.push(modifiers);
        return this;
    }

    public PopperBuilder applyStyles(int zIndex, int animationDuration) {
        HTMLElementBuilder<HTMLElement> element = wrapHtmlElement(popper);
        element.style("z-index", zIndex);
        element.style("opacity", 0);
        element.style("transition", "opacity " + animationDuration + "ms cubic-bezier(.54, 1.5, .38, 1.11)");
        return this;
    }

    @SuppressWarnings("Convert2MethodRef")
    public PopperBuilder registerHandler(Set<TriggerAction> triggerActions,
            List<HandlerRegistration> handlerRegistrations, Consumer<Event> show, Consumer<Event> hide) {
        if (triggerActions.contains(mouseenter)) {
            handlerRegistrations.add(bind(trigger, EventType.mouseenter, e -> show.accept(e)));
            handlerRegistrations.add(bind(trigger, EventType.mouseleave, e -> hide.accept(e)));
            handlerRegistrations.add(bind(popper, EventType.mouseenter, e -> show.accept(e)));
            handlerRegistrations.add(bind(popper, EventType.mouseleave, e -> hide.accept(e)));
        }
        if (triggerActions.contains(focus)) {
            handlerRegistrations.add(bind(trigger, EventType.focus, e -> show.accept(e)));
            handlerRegistrations.add(bind(trigger, EventType.blur, e -> hide.accept(e)));
        }
        if (triggerActions.contains(click)) {
            handlerRegistrations.add(bind(document, EventType.click, true, e -> {
                if (isVisible(popper)) {
                    hide.accept(e);
                } else if (e.target == trigger) {
                    show.accept(e);
                }
            }));
        }
        if (!triggerActions.contains(manual)) {
            handlerRegistrations.add(bind(document, EventType.keydown, true, e -> {
                if (isVisible(popper) && Key.Escape.match(e)) {
                    hide.accept(e);
                }
            }));
            handlerRegistrations.add(bind(popper, EventType.keydown, e -> {
                if (Key.Enter.match(e)) {
                    if (isVisible(popper)) {
                        hide.accept(e);
                    } else {
                        show.accept(e);
                    }
                }
            }));
        }
        return this;
    }

    public Popper build() {
        Object createPopperFn = Js.global().get("createPopper");
        if (isTripleEqual(createPopperFn, undefined())) {
            console.error("Unable to create popper: 'createPopper' is undefined. " +
                    "Please see https://github.com/patternfly-java/patternfly-java#third-party for more details. ");
            return null;
        }

        Options options = new Options();
        options.placement = placement.value;
        options.modifiers = modifiers;
        return Popper.createPopper(trigger, popper, options);
    }
}
