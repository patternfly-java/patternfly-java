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
package org.patternfly.component.inputgroup;

import org.patternfly.component.button.Button;
import org.patternfly.component.form.FormControl;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.style.Modifiers.Box;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Fill;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.inputGroup;
import static org.patternfly.style.Classes.item;

public class InputGroupItem extends InputGroupSubComponent<HTMLDivElement, InputGroupItem> implements
        Box<HTMLDivElement, InputGroupItem>,
        Disabled<HTMLDivElement, InputGroupItem>,
        Fill<HTMLDivElement, InputGroupItem>,
        Plain<HTMLDivElement, InputGroupItem> {

    // ------------------------------------------------------ factory

    public static InputGroupItem inputGroupItem() {
        return new InputGroupItem();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "igi";
    private Disabled<?, ?> componentImplementingDisabled;

    InputGroupItem() {
        super(SUB_COMPONENT_NAME, div().css(component(inputGroup, item)).element());
    }

    // ------------------------------------------------------ add

    public InputGroupItem addButton(Button button) {
        return add(button);
    }

    public InputGroupItem addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    public InputGroupItem addFormControl(FormControl<?, ?> formControl) {
        return add(formControl);
    }

    public InputGroupItem add(Disabled<?, ?> component) {
        this.componentImplementingDisabled = component;
        return add(component.element());
    }

    public InputGroupItem addText(InputGroupText text) {
        return add(text);
    }

    // ------------------------------------------------------ builder

    @Override
    public InputGroupItem disabled(boolean disabled) {
        if (componentImplementingDisabled != null) {
            componentImplementingDisabled.disabled(disabled);
        }
        return Disabled.super.disabled(disabled);
    }

    @Override
    public InputGroupItem that() {
        return this;
    }
}
