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
package org.patternfly.components.page;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.main;
import static org.patternfly.resources.Constants.page;
import static org.patternfly.resources.Constants.tabs;

/**
 * Container to nest a {@link org.patternfly.components.Tabs} component in a {@link PageMainGroup} or
 * {@link PageMain} container.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageMainTabs extends PageSectionBuilder<HTMLElement, PageMainTabs>
        implements PageSection<HTMLElement, PageMainTabs> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMainTabs pageMainTabs() {
        return new PageMainTabs();
    }

    // ------------------------------------------------------ instance

    PageMainTabs() {
        super(section().css(component(page, main, tabs))
                .element());
    }

    @Override
    public PageMainTabs that() {
        return this;
    }
}
