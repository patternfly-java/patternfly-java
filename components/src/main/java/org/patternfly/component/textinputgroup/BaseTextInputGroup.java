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

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.Validatable;
import org.patternfly.component.ValidationStatus;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.keyup;
import static org.jboss.elemento.InputType.text;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.handler.ChangeHandler.fireIfChanged;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textInput;
import static org.patternfly.style.Classes.textInputGroup;

public abstract class BaseTextInputGroup<T extends BaseTextInputGroup<T>> extends BaseComponent<HTMLElement, T> implements
        ComponentIcon<HTMLElement, T>,
        Disabled<HTMLElement, T>,
        HasValue<String>,
        Plain<HTMLElement, T>,
        Validatable<HTMLElement, T> {

    // ------------------------------------------------------ instance

    protected final HTMLElement mainContainer;
    protected final HTMLInputElement inputElement;
    protected final HTMLElement textContainer;
    protected final List<ChangeHandler<T, String>> keyupChangeHandlers;
    protected final List<ChangeHandler<T, String>> valueChangeHandlers;
    protected ValidationStatus status;
    protected HTMLElement iconContainer;
    protected HTMLElement statusContainer;
    protected TextInputGroupUtilities utilities;

    protected BaseTextInputGroup(ComponentType componentType, String id) {
        super(componentType, div().css(component(textInputGroup)).element());
        this.keyupChangeHandlers = new ArrayList<>();
        this.valueChangeHandlers = new ArrayList<>();
        this.status = null;

        add(mainContainer = div().css(component(textInputGroup, main))
                .add(textContainer = span().css(component(textInputGroup, Classes.text))
                        .add(inputElement = Elements.input(text).css(component(textInputGroup, textInput))
                                .id(id)
                                .name(id)
                                .element())
                        .element())
                .element());

        inputElement.addEventListener(keyup.name, e ->
                keyupChangeHandlers.forEach(h -> h.onChange(e, that(), inputElement.value)));
        inputElement.addEventListener(change.name, e ->
                valueChangeHandlers.forEach(h -> h.onChange(e, that(), inputElement.value)));
    }

    // ------------------------------------------------------ add

    public T addUtilities(TextInputGroupUtilities utilities) {
        return add(utilities);
    }

    // override to ensure internal wiring
    public T add(TextInputGroupUtilities utilities) {
        this.utilities = utilities;
        add(utilities.element());
        return that();
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying input element using a fluent API style */
    public T applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(input());
        return that();
    }

    @Override
    public T disabled(boolean disabled) {
        inputElement.disabled = disabled;
        return Disabled.super.disabled(disabled);
    }

    @Override
    public T icon(Element icon) {
        mainContainer.classList.add(modifier(Classes.icon));
        removeChildrenFrom(iconContainer);
        failSafeIconContainer().appendChild(icon);
        return that();
    }

    public T placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return that();
    }

    @Override
    public T removeIcon() {
        mainContainer.classList.remove(modifier(icon));
        failSafeRemoveFromParent(iconContainer);
        iconContainer = null;
        return that();
    }

    @Override
    public T validated(ValidationStatus status) {
        // remove old status
        if (status != this.status) {
            if (this.status != null) {
                if (this.status.modifier != null) {
                    classList().remove(this.status.modifier);
                }
                if (this.status.icon != null) {
                    failSafeRemoveFromParent(statusContainer);
                    statusContainer = null;
                }
            }

            // assign status
            this.status = status;

            // apply new status
            if (status.modifier != null) {
                css(status.modifier);
            }
            if (status != default_ && status.icon != null) {
                failSafeStatusContainer().appendChild(status.icon.get().element());
            }
        }
        return that();
    }

    /** Same as {@linkplain #value(String, boolean) value(value, false)} */
    public T value(String value) {
        return value(value, false);
    }

    public T value(String value, boolean fireEvent) {
        inputElement.value = value;
        if (fireEvent) {
            fireIfChanged(that(), inputElement.value, value, valueChangeHandlers);
        }
        return that();
    }

    // ------------------------------------------------------ events

    public T onKeyup(ChangeHandler<T, String> changeHandler) {
        keyupChangeHandlers.add(changeHandler);
        return that();
    }

    public T onChange(ChangeHandler<T, String> changeHandler) {
        valueChangeHandlers.add(changeHandler);
        return that();
    }

    // ------------------------------------------------------ api

    /** Returns the underlying input element */
    public HTMLInputElementBuilder<HTMLInputElement> input() {
        return wrapInputElement(inputElement);
    }

    public TextInputGroupUtilities utilities() {
        return utilities;
    }

    @Override
    public void resetValidation() {
        if (status != null) {
            classList().remove(this.status.modifier);
            failSafeRemoveFromParent(statusContainer);
            statusContainer = null;
        }
    }

    @Override
    public String value() {
        return inputElement.value;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(textContainer, iconContainer = span().css(component(textInputGroup, icon)).element());
        }
        return iconContainer;
    }

    private HTMLElement failSafeStatusContainer() {
        if (statusContainer == null) {
            insertAfter(statusContainer = span().css(component(textInputGroup, icon), modifier(Classes.status)).element(),
                    inputElement);
        }
        return statusContainer;
    }
}
