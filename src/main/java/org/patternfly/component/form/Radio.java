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
package org.patternfly.component.form;

import org.jboss.elemento.InputType;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.Modifiers.Required;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.EventType.change;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.standalone;

/**
 * A radio button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or
 * more.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/radio/html">https://www.patternfly.org/components/forms/radio/html</a>
 */
public class Radio extends BaseComponent<HTMLElement, Radio> implements
        HasValue<Boolean>,
        Disabled<HTMLElement, Radio>,
        Required<HTMLElement, Radio> {

    // ------------------------------------------------------ factory

    public static Radio radio(String id, String name) {
        return new Radio(id, name, null, false);
    }

    public static Radio radio(String id, String name, boolean checked) {
        return new Radio(id, name, null, checked);
    }

    public static Radio radio(String id, String name, String label) {
        return new Radio(id, name, label, false);
    }

    public static Radio radio(String id, String name, String label, boolean checked) {
        return new Radio(id, name, label, checked);
    }

    // ------------------------------------------------------ instance

    private final HTMLInputElement inputElement;
    private HTMLLabelElement labelElement;

    Radio(String id, String name, String label, boolean checked) {
        super(div().css(component(Classes.radio))
                .add(input(InputType.radio).css(component(Classes.radio, input))
                        .id(id)
                        .name(name)
                        .checked(checked))
                .element(),
                ComponentType.Radio);

        inputElement = (HTMLInputElement) element().firstElementChild;
        add(labelElement = label().css(component(Classes.radio, Classes.label))
                .apply(l -> l.htmlFor = id)
                .element());
        if (label != null) {
            labelElement.textContent = label;
        }
    }

    // ------------------------------------------------------ add

    public Radio addBody(RadioBody body) {
        return add(body);
    }

    public Radio addDescription(RadioDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ builder

    @Override
    public Radio disabled(boolean disabled) {
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

    public Radio reversed() {
        if (inputElement != null && labelElement != null) {
            failSafeRemoveFromParent(inputElement);
            failSafeRemoveFromParent(labelElement);
            insertFirst(element(), inputElement);
            insertFirst(element(), labelElement);
        }
        return this;
    }

    /** Same as {@linkplain #standalone(boolean) standalone(true)} */
    public Radio standalone() {
        return standalone(true);
    }

    public Radio standalone(boolean removeLabel) {
        css(modifier(standalone));
        if (removeLabel) {
            failSafeRemoveFromParent(labelElement);
            labelElement = null;
        }
        return this;
    }

    public Radio value(boolean checked) {
        inputElement.checked = checked;
        return this;
    }

    @Override
    public Radio that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Radio onChange(ChangeHandler<Radio, Boolean> handler) {
        inputElement.addEventListener(change.name, e -> handler.onChange(this, inputElement.checked));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Boolean value() {
        return inputElement.checked;
    }

    public HTMLInputElement inputElement() {
        return inputElement;
    }
}
