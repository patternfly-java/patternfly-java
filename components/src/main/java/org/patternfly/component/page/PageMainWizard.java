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
package org.patternfly.component.page;

import org.patternfly.component.wizard.Wizard;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.wizard;

/**
 * Container to nest a {@link Wizard} in a {@link PageGroup} or {@link PageMain} container.
 */
public class PageMainWizard extends PageSectionBuilder<HTMLElement, PageMainWizard> {

    // ------------------------------------------------------ factory

    public static PageMainWizard pageMainWizard() {
        return new PageMainWizard();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pmw";

    PageMainWizard() {
        super(SUB_COMPONENT_NAME, section().css(component(page, main, wizard)).element());
    }

    // ------------------------------------------------------ add

    public PageMainWizard addWizard(Wizard wizard) {
        return add(wizard);
    }

    // ------------------------------------------------------ builder

    @Override
    public PageMainWizard that() {
        return this;
    }
}
