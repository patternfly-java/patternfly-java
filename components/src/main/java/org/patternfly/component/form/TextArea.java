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
import java.util.Objects;
import java.util.function.Consumer;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.HTMLTextAreaElementBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.core.Attributes;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Modifiers.Plain;
import org.patternfly.style.Modifiers.Readonly;

import elemental2.dom.CSSStyleDeclaration;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTextAreaElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.DomGlobal.window;
import static org.jboss.elemento.Elements.textarea;
import static org.jboss.elemento.Elements.wrapTextAreaElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.input;
import static org.jboss.elemento.EventType.keyup;
import static org.patternfly.core.Aria.invalid;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textarea;

/**
 * A text area component is used for entering a paragraph of text that is longer than one line.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/forms/text-area">https://www.patternfly.org/components/forms/text-area</a>
 */
public class TextArea extends FormControl<HTMLElement, TextArea> implements
        Attachable,
        ElementTextMethods<HTMLElement, TextArea>,
        HasValue<String>,
        Plain<HTMLElement, TextArea>,
        Readonly<HTMLElement, TextArea> {

    // ------------------------------------------------------ factory

    public static TextArea textArea(String id) {
        return new TextArea(id, null);
    }

    public static TextArea textArea(String id, String value) {
        return new TextArea(id, value);
    }

    // ------------------------------------------------------ instance

    private final HTMLTextAreaElement textAreaElement;
    private final List<ChangeHandler<TextArea, String>> keyupChangeHandlers;
    private final List<ChangeHandler<TextArea, String>> valueChangeHandlers;
    private boolean autoResize;
    private TextAreaResize resize;

    TextArea(String id, String value) {
        super(id, formControlContainer()
                        .css(modifier(textarea))
                        .add(textarea()
                                .id(id)
                                .apply(ta -> {
                                    ta.name = id;
                                    ta.spellcheck = false;
                                })
                                .aria(invalid, false))
                        .element(),
                ComponentType.TextInput);
        this.keyupChangeHandlers = new ArrayList<>();
        this.valueChangeHandlers = new ArrayList<>();

        textAreaElement = (HTMLTextAreaElement) element().firstElementChild;
        textAreaElement.addEventListener(keyup.name,
                e -> keyupChangeHandlers.forEach(ch -> ch.onChange(e, this, textAreaElement.value)));
        textAreaElement.addEventListener(change.name,
                e -> valueChangeHandlers.forEach(ch -> ch.onChange(e, this, textAreaElement.value)));
        if (value != null) {
            value(value);
        }
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (autoResize) {
            autoHeight();
            textAreaElement.addEventListener(input.name, e -> autoHeight());
        }
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying text area element using a fluent API style */
    public TextArea applyTo(Consumer<HTMLTextAreaElementBuilder<HTMLTextAreaElement>> textArea) {
        textArea.accept(wrapTextAreaElement(textAreaElement));
        return this;
    }

    public TextArea autoResize() {
        this.autoResize = true;
        return this;
    }

    @Override
    public TextArea readonly(boolean readonly) {
        textAreaElement.readOnly = readonly;
        return Readonly.super.readonly(readonly);
    }

    @Override
    public TextArea plain(boolean plain) {
        if (plain) {
            // plain requires readonly
            readonly();
        }
        return Plain.super.plain(plain);
    }

    public TextArea placeholder(String placeholder) {
        textAreaElement.placeholder = placeholder;
        return this;
    }

    public TextArea resize(TextAreaResize resize) {
        if (this.resize != null) {
            element().classList.remove(this.resize.modifier);
        }
        this.resize = resize;
        return css(resize.modifier);
    }

    @Override
    public TextArea required(boolean required) {
        if (required) {
            textAreaElement.setAttribute(Attributes.required, true);
        } else {
            textAreaElement.removeAttribute(Attributes.required);
        }
        return this;
    }

    /** Same as {@link #value(String)} */
    @Override
    public TextArea text(String text) {
        return value(text);
    }

    /** Same as {@linkplain #value(String, boolean) value(value, false)} */
    public TextArea value(String value) {
        return value(value, false);
    }

    public TextArea value(String value, boolean fireEvent) {
        //noinspection DuplicatedCode
        boolean changed = !Objects.equals(textAreaElement.value, value);
        textAreaElement.value = value;
        if (fireEvent && changed && !valueChangeHandlers.isEmpty()) {
            valueChangeHandlers.forEach(ch -> ch.onChange(new Event(""), this, value));
        }
        return this;
    }

    @Override
    public TextArea that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this text area changes. Changes are detected by
     * adding an event listener for the {@link org.jboss.elemento.EventType#keyup} event to the text area element.
     */
    public TextArea onKeyup(ChangeHandler<TextArea, String> changeHandler) {
        keyupChangeHandlers.add(changeHandler);
        return this;
    }

    /**
     * Defines a change handler that is called when the {@link #value()} of this text area changes. Changes are detected by
     * adding an event listener for the {@link org.jboss.elemento.EventType#change} event to the text area element.
     */
    public TextArea onChange(ChangeHandler<TextArea, String> changeHandler) {
        valueChangeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return textAreaElement.value;
    }

    /** Returns the underlying text area element */
    public HTMLTextAreaElementBuilder<HTMLTextAreaElement> textArea() {
        return wrapTextAreaElement(textAreaElement);
    }

    @Override
    public String text() {
        return value();
    }

    // ------------------------------------------------------ internal

    @Override
    void disableControl(boolean disabled) {
        textAreaElement.disabled = disabled;
    }

    private void autoHeight() {
        style("height", "inherit");
        CSSStyleDeclaration computed = window.getComputedStyle(textAreaElement);
        int height = Integer.parseInt(stripUnit(computed.getPropertyValue("border-top-width"))) +
                Integer.parseInt(stripUnit(computed.getPropertyValue("padding-top"))) +
                textAreaElement.scrollHeight +
                Integer.parseInt(stripUnit(computed.getPropertyValue("padding-bottom"))) +
                Integer.parseInt(stripUnit(computed.getPropertyValue("border-bottom-width")));
        style("height", height + "px");
    }

    private String stripUnit(String value) {
        int index = value.indexOf("px");
        return index == -1 ? value : value.substring(0, index);
    }
}
