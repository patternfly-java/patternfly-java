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
package org.patternfly.component.menu;

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ElementTextDelegate;
import org.patternfly.component.HasValue;
import org.patternfly.core.Aria;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;

import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.invalid;
import static org.patternfly.style.Classes.check;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;

public class MenuToggleCheckbox extends MenuToggleSubComponent<HTMLElement, MenuToggleCheckbox> implements
        Disabled<HTMLElement, MenuToggleCheckbox>,
        ElementTextDelegate<HTMLElement, MenuToggleCheckbox>,
        HasValue<Boolean> {

    // ------------------------------------------------------ factory

    public static MenuToggleCheckbox menuToggleCheckbox(String text) {
        return menuToggleCheckbox().text(text);
    }

    public static MenuToggleCheckbox menuToggleCheckbox() {
        return new MenuToggleCheckbox();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mtc";

    private final HTMLInputElement inputElement;
    private final List<ChangeHandler<MenuToggleCheckbox, Boolean>> changeHandlers;
    private HTMLElement textElement;

    MenuToggleCheckbox() {
        super(SUB_COMPONENT_NAME, label().css(component(check)).element());
        this.changeHandlers = new ArrayList<>();

        String id = Id.unique(ComponentType.MenuToggle.id, "check");
        ((HTMLLabelElement) element()).htmlFor = id;
        add(inputElement = input(checkbox).css(component(check, Classes.input))
                .id(id)
                .name(id)
                .aria(invalid, false)
                .element());
        inputElement.addEventListener(change.name,
                e -> changeHandlers.forEach(ch -> ch.onChange(e, this, inputElement.checked)));
    }

    @Override
    public Element textDelegate() {
        return failSafeTextElement();
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuToggleCheckbox disabled(boolean disabled) {
        inputElement.disabled = disabled;
        if (textElement != null) {
            if (disabled) {
                textElement.classList.add(modifier(Classes.disabled));
            } else {
                textElement.classList.remove(modifier(Classes.disabled));
            }
        }
        return this;
    }

    /** Same as {@linkplain #value(boolean, boolean) value(checked, false)} */
    public MenuToggleCheckbox value(boolean checked) {
        return value(checked, false);
    }

    /** Sets the {@code checked} attribute of the input element. */
    public MenuToggleCheckbox value(boolean checked, boolean fireEvent) {
        //noinspection DuplicatedCode
        boolean changed = inputElement.checked != checked;
        inputElement.checked = checked;
        if (fireEvent && changed && !changeHandlers.isEmpty()) {
            changeHandlers.forEach(ch -> ch.onChange(new Event(""), this, inputElement.checked));
        }
        return this;
    }

    @Override
    public MenuToggleCheckbox that() {
        return null;
    }

    // ------------------------------------------------------ aria

    public MenuToggleCheckbox ariaLabel(String label) {
        inputElement.setAttribute(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of the checkbox changes.
     */
    public MenuToggleCheckbox onChange(ChangeHandler<MenuToggleCheckbox, Boolean> changeHandler) {
        changeHandlers.add(changeHandler);
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

    @Override
    public String text() {
        if (textElement != null) {
            return textElement.textContent;
        }
        return "";
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeTextElement() {
        if (textElement == null) {
            add(textElement = span().css(component(check, Classes.label))
                    .aria(hidden, true)
                    .element());
        }
        return textElement;
    }
}
