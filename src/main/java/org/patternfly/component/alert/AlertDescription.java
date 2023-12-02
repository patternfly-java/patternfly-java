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
package org.patternfly.component.alert;

import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.alert;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.description;

public class AlertDescription extends SubComponent<HTMLDivElement, AlertDescription> {

    // ------------------------------------------------------ factory

    public static AlertDescription alertDescription() {
        return new AlertDescription(null);
    }

    public static AlertDescription alertDescription(String text) {
        return new AlertDescription(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ad";

    AlertDescription(String text) {
        super(div().css(component(alert, description)).element(), ComponentType.Alert, SUB_COMPONENT_NAME);
        if (text != null) {
            textContent(text);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public AlertDescription that() {
        return this;
    }
}
