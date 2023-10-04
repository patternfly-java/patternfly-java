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
package org.patternfly.components.form;

import org.jboss.elemento.EventCallbackFn;
import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.core.Modifiers;
import org.patternfly.layout.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.label;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.standalone;

/**
 * A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect
 * a binary setting.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/checkbox/html">https://www.patternfly.org/components/forms/checkbox/html</a>
 */
public class Checkbox extends BaseComponent<HTMLElement, Checkbox>
        implements Modifiers.Disabled<Checkbox>, Modifiers.Required<Checkbox> {

    // ------------------------------------------------------ factory methods

    public static Checkbox checkbox(String id) {
        return new Checkbox(id, null, false);
    }

    public static Checkbox checkbox(String id, boolean checked) {
        return new Checkbox(id, null, checked);
    }

    public static Checkbox checkbox(String id, String label) {
        return new Checkbox(id, label, false);
    }

    public static Checkbox checkbox(String id, String label, boolean checked) {
        return new Checkbox(id, label, checked);
    }

    // ------------------------------------------------------ instance

    private final HTMLInputElement inputElement;
    private final HTMLLabelElement labelElement;
    private HTMLElement requiredMarker;

    Checkbox(String id, String label, boolean checked) {
        super(div().css(component(check))
                .add(input(checkbox).css(component(check, input))
                        .id(id)
                        .name(id)
                        .checked(checked))
                .element(),
                ComponentType.Checkbox);

        inputElement = (HTMLInputElement) element().firstElementChild;
        if (label != null) {
            add(labelElement = label().css(component(check, Classes.label))
                    .apply(l -> l.htmlFor = id)
                    .textContent(label)
                    .element());
        } else {
            labelElement = null;
            css(modifier(standalone));
        }
    }

    @Override
    public Checkbox that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public Checkbox addBody(CheckboxBody body) {
        return add(body);
    }

    public Checkbox addDescription(CheckboxDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ public API

    public boolean checked() {
        return inputElement.checked;
    }

    public Checkbox checked(boolean checked) {
        inputElement.checked = checked;
        return this;
    }

    public Checkbox onChange(EventCallbackFn<Event> callback) {
        inputElement.addEventListener(change.getName(), callback::onEvent);
        return this;
    }

    // ------------------------------------------------------ modifiers

    @Override
    public Checkbox disabled(boolean disabled) {
        inputElement.disabled = disabled;
        if (labelElement != null) {
            if (disabled) {
                labelElement.classList.add(modifier(Classes.disabled));
            } else {
                labelElement.classList.remove(modifier(Classes.disabled));
            }
        }
        return this;
    }

    @Override
    public Checkbox required(boolean required) {
        inputElement.required = required;
        if (labelElement != null) {
            if (required) {
                if (requiredMarker == null) {
                    requiredMarker = span().css(component(check, label, Classes.required))
                            .aria(hidden, true)
                            .innerHtml(fromSafeConstant("&#42;"))
                            .element();
                }
                labelElement.appendChild(requiredMarker);
            } else {
                failSafeRemoveFromParent(requiredMarker);
            }
        }
        return this;
    }

    public Checkbox reversed() {
        if (inputElement != null && labelElement != null) {
            failSafeRemoveFromParent(inputElement);
            failSafeRemoveFromParent(labelElement);
            insertFirst(element(), inputElement);
            insertFirst(element(), labelElement);
        }
        return this;
    }
}
