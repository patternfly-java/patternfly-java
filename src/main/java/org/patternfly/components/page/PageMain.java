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

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.HtmlContent;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.main;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.page;
import static org.patternfly.layout.Constants.role;
import static org.patternfly.layout.Constants.tabindex;

/**
 * Container for the main page area. The page main container typically contains multiple {@link PageMainGroup}s and/or
 * {@link PageMainSection}s.
 * <p>
 * Usage:
 * {@snippet class = PageDemo region = pageMain}
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageMain extends ElementBuilder<HTMLElement, PageMain>
        implements HtmlContent<HTMLElement, PageMain> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMain pageMain(String id) {
        return new PageMain(id);
    }

    // ------------------------------------------------------ instance

    PageMain(String id) {
        super(main().css(component(page, main))
                .attr(role, main)
                .attr(tabindex, -1)
                .element());
    }

    @Override
    public PageMain that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    /**
     * Adds a {@link PageMainGroup} to this component.
     */
    public PageMain addGroup(PageMainGroup group) {
        return add(group);
    }

    /**
     * Adds a {@link PageSection} to this component.
     */
    public <E extends HTMLElement, P extends PageSection<E, P>> PageMain addSection(PageSection<E, P> pageSection) {
        return add(pageSection);
    }
}
