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
package org.patternfly.components.textinputgroup;

import java.util.function.Consumer;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.InputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.components.SubComponent;
import org.patternfly.core.ChangeHandler;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.textInput;
import static org.patternfly.layout.Classes.textInputGroup;

public class TextInputGroupMain extends SubComponent<HTMLDivElement, TextInputGroupMain>
        implements HasValue<String>, Disabled<HTMLDivElement, TextInputGroupMain>, TextInputGroupHolder {

    // ------------------------------------------------------ factory methods

    public static TextInputGroupMain textInputGroupMain(String id) {
        return new TextInputGroupMain(id);
    }

    // ------------------------------------------------------ instance

    final HTMLInputElement inputElement;
    private final HTMLElement inputContainer;

    TextInputGroupMain(String id) {
        super(div().css(component(textInputGroup, main))
                .add(span().css(component(textInputGroup, Classes.text))
                        .add(input(InputType.text).css(component(textInputGroup, textInput))
                                .id(id)
                                .name(id)))
                .element());
        inputContainer = find(By.classname(component(textInputGroup, Classes.text)));
        inputElement = find(By.classname(component(textInputGroup, textInput)));
    }

    @Override
    public void passTextInputGroup(TextInputGroup textInputGroup) {
        if (textInputGroup.initialDisabled) {
            disabled(true);
        }
    }

    @Override
    public TextInputGroupMain that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public TextInputGroupMain addIcon(String icon) {
        css(modifier(Classes.icon));
        Elements.insertFirst(inputContainer, span().css(component(textInputGroup, Classes.icon))
                .add(i().css(icon).aria(hidden, true)));
        return this;
    }

    // ------------------------------------------------------ modifiers

    @Override
    public TextInputGroupMain disabled(boolean disabled) {
        inputElement.disabled = disabled;
        return this;
    }

    // ------------------------------------------------------ public API

    @Override
    public String value() {
        return inputElement.value;
    }

    public TextInputGroupMain value(String value) {
        inputElement.value = value;
        return this;
    }

    public TextInputGroupMain placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    public TextInputGroupMain onChange(ChangeHandler<String> handler) {
        inputElement.addEventListener(change.name, e -> handler.onChange(inputElement.value));
        return this;
    }

    /** Provides access to the underlying input element using a fluent API style */
    public TextInputGroupMain withInputElement(
            Consumer<InputElementBuilder<HTMLInputElement>> inputElementConsumer) {
        inputElementConsumer.accept(inputElement());
        return this;
    }

    /** Returns the underlying input element */
    public InputElementBuilder<HTMLInputElement> inputElement() {
        return wrapInputElement(inputElement);
    }
}