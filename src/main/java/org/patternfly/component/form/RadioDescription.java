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

import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.radio;

public class RadioDescription extends SubComponent<HTMLElement, RadioDescription> {

    // ------------------------------------------------------ factory

    public static RadioDescription radioDescription() {
        return new RadioDescription(null);
    }

    public static RadioDescription radioDescription(String description) {
        return new RadioDescription(description);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "rd";

    RadioDescription(String description) {
        super(span().css(component(radio, Classes.description)).element(), ComponentType.Radio, SUB_COMPONENT_NAME);
        if (description != null) {
            element().textContent = description;
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public RadioDescription that() {
        return this;
    }
}
