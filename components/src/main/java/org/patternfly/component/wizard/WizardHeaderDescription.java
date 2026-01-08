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
package org.patternfly.component.wizard;

import org.jboss.elemento.ElementTextMethods;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.p;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.wizard;

public class WizardHeaderDescription extends WizardSubComponent<HTMLElement, WizardHeaderDescription> implements
        ElementTextMethods<HTMLElement, WizardHeaderDescription> {

    // ------------------------------------------------------ factory

    public static WizardHeaderDescription wizardHeaderDescription() {
        return new WizardHeaderDescription();
    }

    public static WizardHeaderDescription wizardHeaderDescription(String text) {
        return new WizardHeaderDescription().text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzhd";

    WizardHeaderDescription() {
        super(SUB_COMPONENT_NAME, p().css(component(wizard, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardHeaderDescription that() {
        return this;
    }
}
