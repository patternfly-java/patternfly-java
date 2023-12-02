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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.layout.Classes;

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
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.modifier;

public class MenuToggleCheckbox extends SubComponent<HTMLElement, MenuToggleCheckbox> implements HasValue<Boolean>,
        Modifiers.Disabled<HTMLElement, MenuToggleCheckbox> {

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
    private HTMLElement textElement;

    MenuToggleCheckbox() {
        super(label().css(component(check)).element(), ComponentType.Menu, SUB_COMPONENT_NAME);
        String id = Id.unique(ComponentType.MenuToggle.id, "check");
        ((HTMLLabelElement) element()).htmlFor = id;
        add(inputElement = input(checkbox).css(component(check, Classes.input))
                .id(id)
                .name(id)
                .aria(invalid, false)
                .element());
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

    public MenuToggleCheckbox text(String text) {
        failSafeTextElement().textContent = text;
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

    public MenuToggleCheckbox onChange(ChangeHandler<MenuToggleCheckbox, Boolean> handler) {
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
