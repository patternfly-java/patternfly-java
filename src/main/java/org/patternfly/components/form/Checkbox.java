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

import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.core.Disable;
import org.patternfly.layout.Classes;

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
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.disabled;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.label;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.required;
import static org.patternfly.layout.Classes.standalone;

/**
 * A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect
 * a binary setting.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/checkbox/html">https://www.patternfly.org/components/forms/checkbox/html</a>
 */
public class Checkbox extends BaseComponent<HTMLElement, Checkbox> implements Disable<Checkbox> {

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

    public Checkbox check(boolean checked) {
        inputElement.checked = checked;
        return this;
    }

    public boolean checked() {
        return inputElement.checked;
    }

    @Override
    public Checkbox disable() {
        inputElement.disabled = true;
        if (labelElement != null) {
            labelElement.classList.add(modifier(disabled));
        }
        return this;
    }

    @Override
    public Checkbox enable() {
        inputElement.disabled = false;
        if (labelElement != null) {
            labelElement.classList.remove(modifier(disabled));
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Checkbox required() {
        inputElement.required = true;
        if (labelElement != null) {
            labelElement.appendChild(span().css(component(check, label, required))
                    .aria(hidden, true)
                    .innerHtml(fromSafeConstant("&#42;"))
                    .element());
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
