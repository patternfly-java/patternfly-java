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
package org.patternfly.component.textinputgroup;

import java.util.Objects;
import java.util.function.Consumer;

import org.jboss.elemento.Elements;
import org.jboss.elemento.InputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.HasValue;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithText;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.keyup;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textInput;

public class TextInputGroupMain extends TextInputGroupSubComponent<HTMLDivElement, TextInputGroupMain> implements
        HasValue<String>,
        Disabled<HTMLDivElement, TextInputGroupMain>,
        WithIcon<HTMLDivElement, TextInputGroupMain>,
        WithText<HTMLDivElement, TextInputGroupMain> {

    // ------------------------------------------------------ factory

    public static TextInputGroupMain textInputGroupMain(String id) {
        return new TextInputGroupMain(id);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tigm";

    private final HTMLInputElement inputElement;
    private final HTMLElement textContainer;
    private HTMLElement iconContainer;
    private ChipGroup chipGroup;
    private TextInputGroup textInputGroup;
    private ChangeHandler<TextInputGroup, String> changeHandler;

    TextInputGroupMain(String id) {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.textInputGroup, main)).element());
        add(textContainer = span().css(component(Classes.textInputGroup, Classes.text))
                .add(inputElement = input(InputType.text).css(component(Classes.textInputGroup, textInput))
                        .id(id)
                        .name(id)
                        .element())
                .element());
    }

    // ------------------------------------------------------ add

    public TextInputGroupMain addChipGroup(ChipGroup chipGroup) {
        return add(chipGroup);
    }

    // override to assure internal wiring
    public TextInputGroupMain add(ChipGroup chipGroup) {
        this.chipGroup = chipGroup;
        insertFirst(element(), chipGroup);
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public TextInputGroupMain icon(Element icon) {
        css(modifier(Classes.icon));
        if (iconContainer == null) {
            Elements.insertFirst(textContainer,
                    iconContainer = span().css(component(Classes.textInputGroup, Classes.icon)).element());
        }
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public TextInputGroupMain removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        iconContainer = null;
        element().classList.remove(modifier(icon));
        return this;
    }

    public TextInputGroupMain placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    /** Same as {@link #value(String)} */
    @Override
    public TextInputGroupMain text(String text) {
        return value(text);
    }

    /** Same as {@linkplain #value(String, boolean) value(value, false)} */
    public TextInputGroupMain value(String value) {
        return value(value, false);
    }

    public TextInputGroupMain value(String value, boolean fireEvent) {
        boolean changed = !Objects.equals(inputElement.value, value);
        inputElement.value = value;
        if (fireEvent && changed && changeHandler != null) {
            if (textInputGroup == null) {
                textInputGroup = lookupComponent(true); // might not be available yet!
                if (textInputGroup != null) {
                    changeHandler.onChange(new Event(""), textInputGroup, value);
                }
            } else {
                changeHandler.onChange(new Event(""), textInputGroup, value);
            }
        }
        return this;
    }

    /** Provides access to the underlying input element using a fluent API style */
    public TextInputGroupMain applyTo(Consumer<InputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(inputElement());
        return this;
    }

    @Override
    public TextInputGroupMain that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of input element changes. Changes are detected by
     * adding an event listener for the keyup event to the text area element.
     */
    public TextInputGroupMain onChange(ChangeHandler<TextInputGroup, String> changeHandler) {
        this.changeHandler = changeHandler;
        inputElement.addEventListener(keyup.name, e -> {
            if (textInputGroup == null) {
                textInputGroup = lookupComponent();
            }
            changeHandler.onChange(e, textInputGroup, inputElement.value);
        });
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return inputElement.value;
    }

    @Override
    public String text() {
        return value();
    }

    /** Returns the underlying input element */
    public InputElementBuilder<HTMLInputElement> inputElement() {
        return wrapInputElement(inputElement);
    }

    public ChipGroup chipGroup() {
        return chipGroup;
    }
}
