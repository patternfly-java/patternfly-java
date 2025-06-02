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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.radio;

public class RadioBody extends RadioSubComponent<HTMLElement, RadioBody> implements ElementTextMethods<HTMLElement, RadioBody> {

    // ------------------------------------------------------ factory

    public static RadioBody radioBody() {
        return new RadioBody(null);
    }

    public static RadioBody radioBody(String text) {
        return new RadioBody(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "rb";

    RadioBody(String text) {
        super(SUB_COMPONENT_NAME, span().css(component(radio, body)).element());
        if (text != null) {
            element().textContent = text;
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public RadioBody that() {
        return this;
    }
}
