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

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Required;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.patternfly.handler.ChangeHandler.fireIfChanged;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.input;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.standalone;

/**
 * A radio button is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or
 * more.
 *
 * @see <a href= "https://www.patternfly.org/components/forms/radio">https://www.patternfly.org/components/forms/radio</a>
 */
public class Radio extends BaseComponent<HTMLElement, Radio> implements
        Disabled<HTMLElement, Radio>,
        ElementTextDelegate<HTMLElement, Radio>,
        HasValue<Boolean>,
        Required<HTMLElement, Radio> {

    // ------------------------------------------------------ factory

    public static Radio radio(String id, String name) {
        return new Radio(id, name);
    }

    public static Radio radio(String id, String name, String label) {
        return new Radio(id, name).text(label);
    }

    // ------------------------------------------------------ instance

    private final HTMLInputElement inputElement;
    private final List<ChangeHandler<Radio, Boolean>> changeHandlers;
    private final HTMLLabelElement labelElement;

    Radio(String id, String name) {
        super(ComponentType.Radio, div().css(component(Classes.radio))
                .add(input(InputType.radio).css(component(Classes.radio, input))
                        .id(id)
                        .name(name))
                .element());
        this.changeHandlers = new ArrayList<>();

        inputElement = (HTMLInputElement) element().firstElementChild;
        inputElement.addEventListener(change.name,
                e -> changeHandlers.forEach(ch -> ch.onChange(e, this, inputElement.checked)));
        add(labelElement = label().css(component(Classes.radio, Classes.label))
                .apply(l -> l.htmlFor = id)
                .element());
    }

    @Override
    public Element textDelegate() {
        return labelElement;
    }

    // ------------------------------------------------------ add

    public Radio addBody(RadioBody body) {
        return add(body);
    }

    public Radio addDescription(RadioDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying radio element using a fluent API style */
    public Radio applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(inputElement());
        return this;
    }

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
        }
        return this;
    }

    /** Same as {@linkplain #value(boolean, boolean) value(checked, false)} */
    public Radio value(boolean checked) {
        return value(checked, false);
    }

    public Radio value(boolean checked, boolean fireEvent) {
        inputElement.checked = checked;
        if (fireEvent) {
            fireIfChanged(this, inputElement.checked, checked, changeHandlers);
        }
        return this;
    }

    @Override
    public Radio that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this radio changes.
     */
    public Radio onChange(ChangeHandler<Radio, Boolean> changeHandler) {
        changeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Boolean value() {
        return inputElement.checked;
    }

    public HTMLInputElementBuilder<HTMLInputElement> inputElement() {
        return wrapInputElement(inputElement);
    }
}
