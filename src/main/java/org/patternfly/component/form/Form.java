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

import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLFormElement;

import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.horizontal;
import static org.patternfly.style.Classes.limitWidth;
import static org.patternfly.style.Classes.modifier;

/**
 * A form is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a
 * wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in,
 * registering, configuring settings, or completing surveys.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/form/html">https://www.patternfly.org/components/forms/form/html</a>
 */
public class Form extends BaseComponent<HTMLFormElement, Form> {

    // ------------------------------------------------------ factory

    public static Form form() {
        return new Form();
    }

    // ------------------------------------------------------ instance

    Form() {
        super(ComponentType.Form, Elements.form().css(component(form)).apply(f -> f.noValidate = true).element());
        storeComponent();
    }

    // ------------------------------------------------------ add

    public Form addAlert(FormAlert alert) {
        return add(alert);
    }

    public Form addGroup(FormGroup group) {
        return add(group);
    }

    public Form addActionGroup(FormActionGroup actionGroup) {
        return add(actionGroup);
    }

    // ------------------------------------------------------ builder

    public Form horizontal() {
        return css(modifier(horizontal));
    }

    public Form limitWidth() {
        return css(modifier(limitWidth));
    }

    @Override
    public Form that() {
        return this;
    }
}
