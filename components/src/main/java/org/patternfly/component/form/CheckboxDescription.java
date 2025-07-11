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

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.check;
import static org.patternfly.style.Classes.component;

public class CheckboxDescription extends CheckboxSubComponent<HTMLElement, CheckboxDescription>
        implements ElementTextMethods<HTMLElement, CheckboxDescription> {

    // ------------------------------------------------------ factory

    public static CheckboxDescription checkboxDescription() {
        return new CheckboxDescription(null);
    }

    public static CheckboxDescription checkboxDescription(String description) {
        return new CheckboxDescription(description);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "cbd";

    CheckboxDescription(String description) {
        super(SUB_COMPONENT_NAME, span().css(component(check, Classes.description)).element());
        if (description != null) {
            element().textContent = description;
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public CheckboxDescription that() {
        return this;
    }
}
