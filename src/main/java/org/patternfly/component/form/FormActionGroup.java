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

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.component.button.Button;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.layout.Classes.action;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.modifier;

public class FormActionGroup extends SubComponent<HTMLElement, FormActionGroup> implements
        Inline<HTMLElement, FormActionGroup>, ComponentReference<Form> {

    // ------------------------------------------------------ factory

    public static FormActionGroup formActionGroup() {
        return new FormActionGroup();
    }

    // ------------------------------------------------------ instance

    private Form form;
    private final FormGroupControl control;
    private final HTMLElement actionsContainer;

    FormActionGroup() {
        super(div().css(component(Classes.form, group), modifier(action)).element());
        add(control = formGroupControl()
                .add(actionsContainer = div().css(component(Classes.form, Classes.actions)).element()));
    }

    @Override
    public void passComponent(Form form) {
        this.form = form;
        control.passComponent(form);
    }

    @Override
    public Form mainComponent() {
        return form;
    }

    // ------------------------------------------------------ add

    public FormActionGroup addButton(Button button) {
        return add(button);
    }

    // override to assure internal wiring
    public FormActionGroup add(Button button) {
        actionsContainer.appendChild(button.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public FormActionGroup that() {
        return this;
    }
}
