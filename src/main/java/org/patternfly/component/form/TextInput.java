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

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.jboss.elemento.InputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.ComponentType;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Plain;
import org.patternfly.core.Modifiers.Readonly;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithText;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.input;
import static org.patternfly.core.Aria.invalid;
import static org.patternfly.core.Modifiers.toggleModifier;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.formControl;
import static org.patternfly.layout.Classes.modifier;

/**
 * A text input is used to gather free-form text from a user.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/text-input">https://www.patternfly.org/components/forms/text-input</a>
 */
public class TextInput extends FormControl<HTMLElement, TextInput> implements
        HasValue<String>,
        Plain<HTMLElement, TextInput>,
        Readonly<HTMLElement, TextInput>,
        WithIcon<HTMLElement, TextInput>,
        WithText<HTMLElement, TextInput> {

    // ------------------------------------------------------ factory

    public static TextInput textInput(String id) {
        return new TextInput(TextInputType.text, id);
    }

    public static TextInput textInput(TextInputType type, String id) {
        return new TextInput(type, id);
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
    }

    private final HTMLInputElement inputElement;

    TextInput(TextInputType type, String id) {
        super(id, span().css(component(formControl))
                .add(input(typeMapping.getOrDefault(type, InputType.text))
                        .id(id)
                        .name(id)
                        .aria(invalid, false))
                .element(),
                ComponentType.TextInput);
        inputElement = (HTMLInputElement) element().firstElementChild;
    }

    // ------------------------------------------------------ builder

    @Override
    public TextInput disabled(boolean disabled) {
        inputElement.disabled = disabled;
        return super.disabled(disabled);
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

    public TextInput value(String value) {
        inputElement.value = value;
        return this;
    }

    /** Same as {@link #value(String)} */
    @Override
    public TextInput text(String text) {
        return value(text);
    }

    public TextInput placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    /** Provides access to the underlying input element using a fluent API style */
    public TextInput applyTo(Consumer<InputElementBuilder<HTMLInputElement>> inputElementConsumer) {
        inputElementConsumer.accept(inputElement());
        return this;
    }

    @Override
    public TextInput icon(InlineIcon icon) {
        css(modifier(Classes.icon));
        insertFirst(failSafeUtilitiesContainer(), span().css(component(formControl, Classes.icon))
                .add(icon)
                .element());
        return this;
    }

    @Override
    public TextInput that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Handles {@link org.jboss.elemento.EventType#change} events for this component.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event">https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event</a>
     */
    public TextInput onChange(ChangeHandler<TextInput, String> handler) {
        inputElement.addEventListener(change.name, e -> handler.onChange(this, inputElement.value));
        return this;
    }

    /**
     * Handles {@link org.jboss.elemento.EventType#input} events for this component.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event">https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event</a>
     */
    public TextInput onInput(ChangeHandler<TextInput, String> handler) {
        inputElement.addEventListener(input.name, e -> handler.onChange(this, inputElement.value));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return inputElement.value;
    }

    /** Returns the underlying input element */
    public InputElementBuilder<HTMLInputElement> inputElement() {
        return wrapInputElement(inputElement);
    }
}
