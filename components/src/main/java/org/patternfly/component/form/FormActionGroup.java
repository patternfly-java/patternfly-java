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

import org.patternfly.component.button.Button;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.modifier;

public class FormActionGroup extends FormSubComponent<HTMLElement, FormActionGroup> {

    // ------------------------------------------------------ factory

    public static FormActionGroup formActionGroup() {
        return new FormActionGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "fag";

    private final HTMLElement actionsContainer;

    FormActionGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.form, group), modifier(action)).element());
        add(div().css(component(Classes.form, group, Classes.control)) // no need for a real FormGroupControl subcomponent
                .add(actionsContainer = div().css(component(Classes.form, Classes.actions)).element()));
    }

    // ------------------------------------------------------ add

    public FormActionGroup addButton(Button button) {
        return add(button);
    }

    // override to ensure internal wiring
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
