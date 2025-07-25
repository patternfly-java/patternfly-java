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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;

import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.core.Aria;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Plain;
import org.patternfly.style.Modifiers.Readonly;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.keyup;
import static org.patternfly.core.Aria.invalid;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.formControl;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * A text input is used to gather free-form text from a user.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/forms/text-input">https://www.patternfly.org/components/forms/text-input</a>
 */
public class TextInput extends FormControl<HTMLElement, TextInput> implements
        ComponentIcon<HTMLElement, TextInput>,
        ElementTextMethods<HTMLElement, TextInput>,
        HasValue<String>,
        Plain<HTMLElement, TextInput>,
        Readonly<HTMLElement, TextInput> {

    // ------------------------------------------------------ factory

    public static TextInput textInput(String id) {
        return new TextInput(TextInputType.text, id, null);
    }

    public static TextInput textInput(String id, String value) {
        return new TextInput(TextInputType.text, id, value);
    }

    public static TextInput textInput(TextInputType type, String id) {
        return new TextInput(type, id, null);
    }

    public static TextInput textInput(TextInputType type, String id, String value) {
        return new TextInput(type, id, value);
    }

    // ------------------------------------------------------ instance

    private static final Map<TextInputType, InputType> typeMapping = new HashMap<>();

    static {
        typeMapping.put(TextInputType.date, InputType.date);
        typeMapping.put(TextInputType.email, InputType.email);
        typeMapping.put(TextInputType.month, InputType.month);
        typeMapping.put(TextInputType.number, InputType.number);
        typeMapping.put(TextInputType.search, InputType.search);
        typeMapping.put(TextInputType.tel, InputType.tel);
        typeMapping.put(TextInputType.text, InputType.text);
        typeMapping.put(TextInputType.time, InputType.time);
        typeMapping.put(TextInputType.password, InputType.password);
    }

    private final HTMLInputElement inputElement;
    private final List<ChangeHandler<TextInput, String>> keyupChangeHandlers;
    private final List<ChangeHandler<TextInput, String>> valueChangeHandlers;
    private HTMLElement iconContainer;

    TextInput(TextInputType type, String id, String value) {
        super(id, formControlContainer()
                        .add(Elements.input(typeMapping.getOrDefault(type, InputType.text))
                                .id(id)
                                .name(id)
                                .aria(invalid, false))
                        .element(),
                ComponentType.TextInput);
        this.keyupChangeHandlers = new ArrayList<>();
        this.valueChangeHandlers = new ArrayList<>();

        inputElement = (HTMLInputElement) element().firstElementChild;
        inputElement.addEventListener(keyup.name,
                e -> keyupChangeHandlers.forEach(ch -> ch.onChange(e, this, inputElement.value)));
        inputElement.addEventListener(change.name,
                e -> valueChangeHandlers.forEach(ch -> ch.onChange(e, this, inputElement.value)));
        if (value != null) {
            value(value);
        }
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying input element using a fluent API style */
    public TextInput applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> input) {
        input.accept(wrapInputElement(inputElement));
        return this;
    }

    @Override
    public TextInput readonly(boolean readonly) {
        inputElement.readOnly = readonly;
        return Readonly.super.readonly(readonly);
    }

    /** Same as {@linkplain #expanded(boolean) expanded(true)} */
    public TextInput expanded() {
        return expanded(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(expanded)} */
    public TextInput expanded(boolean expanded) {
        aria(Aria.expanded, expanded);
        return toggleModifier(that(), element(), Classes.expanded, expanded);
    }

    @Override
    public TextInput plain(boolean plain) {
        if (plain) {
            // plain requires readonly
            readonly();
        }
        return Plain.super.plain(plain);
    }

    @Override
    public TextInput required(boolean required) {
        inputElement.required = required;
        return this;
    }

    /** Same as {@link #value(String)} */
    @Override
    public TextInput text(String text) {
        return value(text);
    }

    /** Same as {@linkplain #value(String, boolean) value(value, false)} */
    public TextInput value(String value) {
        return value(value, false);
    }

    public TextInput value(String value, boolean fireEvent) {
        //noinspection DuplicatedCode
        boolean changed = !Objects.equals(inputElement.value, value);
        inputElement.value = value;
        if (fireEvent && changed && !valueChangeHandlers.isEmpty()) {
            valueChangeHandlers.forEach(ch -> ch.onChange(new Event(""), this, value));
        }
        return this;
    }

    public TextInput placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    @Override
    public TextInput icon(Element icon) {
        css(modifier(Classes.icon));
        if (iconContainer == null) {
            insertFirst(failSafeUtilitiesContainer(), iconContainer = span().css(component(formControl, Classes.icon))
                    .element());
        }
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public TextInput removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        if (utilitiesContainer != null && utilitiesContainer.childElementCount == 0) {
            failSafeRemoveFromParent(utilitiesContainer);
        }
        element().classList.remove(modifier(icon));
        return this;
    }

    @Override
    public TextInput that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this text area changes. Changes are detected by
     * adding an event listener for the {@link org.jboss.elemento.EventType#keyup} event to the text input element.
     */
    public TextInput onKeyup(ChangeHandler<TextInput, String> changeHandler) {
        keyupChangeHandlers.add(changeHandler);
        return this;
    }

    /**
     * Defines a change handler that is called when the {@link #value()} of this text area changes. Changes are detected by
     * adding an event listener for the {@link org.jboss.elemento.EventType#change} event to the text input element.
     */
    public TextInput onChange(ChangeHandler<TextInput, String> changeHandler) {
        valueChangeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return inputElement.value;
    }

    /** Returns the underlying input element */
    public HTMLInputElementBuilder<HTMLInputElement> input() {
        return wrapInputElement(inputElement);
    }

    @Override
    public String text() {
        return value();
    }

    // ------------------------------------------------------ internal

    @Override
    void disableControl(boolean disabled) {
        inputElement.disabled = disabled;
    }
}
