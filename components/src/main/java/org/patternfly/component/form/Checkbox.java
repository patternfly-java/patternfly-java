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

import org.jboss.elemento.HTMLInputElementBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Required;

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
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.style.Classes.check;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.input;
import static org.patternfly.style.Classes.label;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.standalone;

/**
 * A checkbox is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect
 * a binary setting.
 *
 * @see <a href= "https://www.patternfly.org/components/forms/checkbox">https://www.patternfly.org/components/forms/checkbox</a>
 */
public class Checkbox extends BaseComponent<HTMLElement, Checkbox> implements
        HasValue<Boolean>,
        Disabled<HTMLElement, Checkbox>,
        Required<HTMLElement, Checkbox> {

    // ------------------------------------------------------ factory

    public static Checkbox checkbox(String id, String name) {
        return new Checkbox(id, name, null, false);
    }

    public static Checkbox checkbox(String id, String name, boolean checked) {
        return new Checkbox(id, name, null, checked);
    }

    public static Checkbox checkbox(String id, String name, String label) {
        return new Checkbox(id, name, label, false);
    }

    public static Checkbox checkbox(String id, String name, String label, boolean checked) {
        return new Checkbox(id, name, label, checked);
    }

    // ------------------------------------------------------ instance

    private final HTMLInputElement inputElement;
    private final List<ChangeHandler<Checkbox, Boolean>> changeHandlers;
    private HTMLLabelElement labelElement;
    private HTMLElement requiredMarker;

    Checkbox(String id, String name, String label, boolean checked) {
        super(ComponentType.Checkbox, div().css(component(check))
                .add(input(checkbox).css(component(check, input))
                        .id(id)
                        .name(name)
                        .checked(checked))
                .element());
        this.changeHandlers = new ArrayList<>();

        inputElement = (HTMLInputElement) element().firstElementChild;
        inputElement.addEventListener(change.name, e -> changeHandlers.forEach(h -> h.onChange(e, this, inputElement.checked)));
        add(labelElement = label().css(component(check, Classes.label))
                .apply(l -> l.htmlFor = id)
                .element());
        if (label != null) {
            labelElement.textContent = label;
        }
    }

    // ------------------------------------------------------ add

    public Checkbox addBody(CheckboxBody body) {
        return add(body);
    }

    public Checkbox addDescription(CheckboxDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ builder

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
                            .html(fromSafeConstant("&#42;"))
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

    /** Same as {@linkplain #standalone(boolean) standalone(true)} */
    public Checkbox standalone() {
        return standalone(true);
    }

    public Checkbox standalone(boolean removeLabel) {
        css(modifier(standalone));
        if (removeLabel) {
            failSafeRemoveFromParent(labelElement);
            labelElement = null;
        }
        return this;
    }

    /** Same as {@linkplain #value(boolean, boolean) value(checked, false)} */
    public Checkbox value(boolean checked) {
        return value(checked, false);
    }

    /** Sets the {@code checked} attribute of the input element. */
    public Checkbox value(boolean checked, boolean fireEvent) {
        boolean changed = inputElement.checked != checked;
        inputElement.checked = checked;
        if (fireEvent && changed && !changeHandlers.isEmpty()) {
            changeHandlers.forEach(h -> h.onChange(new Event(""), this, inputElement.checked));
        }
        return this;
    }

    /** Provides access to the underlying checkbox element using a fluent API style */
    public Checkbox applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(inputElement());
        return this;
    }

    @Override
    public Checkbox that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this checkbox changes.
     */
    public Checkbox onChange(ChangeHandler<Checkbox, Boolean> changeHandler) {
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
