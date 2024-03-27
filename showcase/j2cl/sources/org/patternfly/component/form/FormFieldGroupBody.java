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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.fieldGroup;
import static org.patternfly.style.Classes.form;

public class FormFieldGroupBody extends FormSubComponent<HTMLElement, FormFieldGroupBody> {

    // ------------------------------------------------------ factory

    public static FormFieldGroupBody formFieldGroupBody() {
        return new FormFieldGroupBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ffgb";

    FormFieldGroupBody() {
        super(SUB_COMPONENT_NAME, div().css(component(form, fieldGroup, body)).element());
    }

    // ------------------------------------------------------ add

    public FormFieldGroupBody addFieldGroup(FormFieldGroup fieldGroup) {
        return add(fieldGroup);
    }

    public FormFieldGroupBody addGroup(FormGroup group) {
        return add(group);
    }

    // ------------------------------------------------------ builder

    @Override
    public FormFieldGroupBody that() {
        return this;
    }
}
