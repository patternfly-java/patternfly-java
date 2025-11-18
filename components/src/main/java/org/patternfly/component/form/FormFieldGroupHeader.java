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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.fieldGroup;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.title;

public class FormFieldGroupHeader extends FormSubComponent<HTMLElement, FormFieldGroupHeader> {

    // ------------------------------------------------------ factory

    public static FormFieldGroupHeader formFieldGroupHeader() {
        return new FormFieldGroupHeader();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ffgh";
    private final HTMLElement mainContainer;
    private HTMLElement actionContainer;
    HTMLElement titleElement;
    private HTMLElement descriptionElement;

    FormFieldGroupHeader() {
        super(SUB_COMPONENT_NAME, div().css(component(form, fieldGroup, header)).element());
        add(mainContainer = div().css(component(form, fieldGroup, header, main)).element());
    }

    // ------------------------------------------------------ add

    public FormFieldGroupHeader addAction(Button action) {
        return add(action);
    }

    public FormFieldGroupHeader add(Button action) {
        failSafeActionContainer().appendChild(action.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public FormFieldGroupHeader title(String title) {
        failSafeTitleElement().textContent = title;
        return this;
    }

    public FormFieldGroupHeader description(String description) {
        failSafeDescriptionElement().textContent = description;
        return this;
    }

    @Override
    public FormFieldGroupHeader that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeTitleElement() {
        if (titleElement == null) {
            insertFirst(mainContainer, div().css(component(form, fieldGroup, header, title))
                    .add(titleElement = div().css(component(form, fieldGroup, header, title, text))
                            .element())
                    .element());
        }
        return titleElement;
    }

    private HTMLElement failSafeDescriptionElement() {
        if (descriptionElement == null) {
            mainContainer.appendChild(descriptionElement = div().css(component(form, fieldGroup, header, description))
                    .element());
        }
        return descriptionElement;
    }

    private HTMLElement failSafeActionContainer() {
        if (actionContainer == null) {
            insertAfter(actionContainer = div().css(component(form, fieldGroup, header, actions)).element(), mainContainer);
        }
        return actionContainer;
    }
}
