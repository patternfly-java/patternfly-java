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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.wizard;

public class WizardHeader extends WizardSubComponent<HTMLElement, WizardHeader> {

    // ------------------------------------------------------ factory

    public static WizardHeader wizardHeader() {
        return new WizardHeader();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzh";
    private final HTMLElement closeContainer;

    WizardHeader() {
        super(SUB_COMPONENT_NAME, div().css(component(wizard, header)).element());
        add(closeContainer = div().css(component(wizard, close))
                .add(button().plain().icon(times()).onClick((e, c) -> {
                    Wizard wizard = lookupComponent();
                    wizard.cancel();
                }))
                .element());
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardHeader that() {
        return this;
    }

    // ------------------------------------------------------ add

    public WizardHeader addTitle(WizardHeaderTitle title) {
        return add(title);
    }

    public WizardHeader add(WizardHeaderTitle title) {
        insertAfter(title.element(), closeContainer);
        return this;
    }

    public WizardHeader addDescription(WizardHeaderDescription description) {
        return add(description);
    }

    public WizardHeader add(WizardHeaderDescription description) {
        return add(description.element());
    }
}
