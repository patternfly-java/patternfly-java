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

import org.patternfly.component.navigation.Navigation;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.page;

/**
 * Container to nest a {@link Navigation} in a {@link PageMainGroup} or {@link PageMain} container.
 */
public class PageMainNavigation extends PageSectionBuilder<HTMLElement, PageMainNavigation> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMainNavigation pageMainNavigation() {
        return new PageMainNavigation();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pmn";

    PageMainNavigation() {
        super(SUB_COMPONENT_NAME, section().css(component(page, main, nav)).element());
    }

    // ------------------------------------------------------ add

    public PageMainNavigation addNavigation(Navigation navigation) {
        return add(navigation);
    }

    // ------------------------------------------------------ builder

    @Override
    public PageMainNavigation that() {
        return this;
    }
}
