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
import org.patternfly.style.Modifiers.Fill;
import org.patternfly.style.Modifiers.NoFill;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.insetNone;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.pageInsets;
import static org.patternfly.style.Classes.sidebar;

/**
 * Container within the {@link PageSidebar} to hold content. Note: By default, the last/only body will grow to fill the
 * available vertical space. You can change this behavior using {@link #fill()} and {@link #noFill()}.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageSidebarBody extends PageSubComponent<HTMLDivElement, PageSidebarBody>
        implements Fill<HTMLDivElement, PageSidebarBody>, NoFill<HTMLDivElement, PageSidebarBody> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageSidebarBody pageSidebarBody() {
        return new PageSidebarBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "psbb";

    PageSidebarBody() {
        super(SUB_COMPONENT_NAME, div().css(component(page, sidebar, body)).element());
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link Navigation} to this component.
     */
    public PageSidebarBody addNavigation(Navigation navigation) {
        return add(navigation);
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies the padding/inset to visually match padding of page elements.
     */
    public PageSidebarBody inset() {
        return css(modifier(pageInsets));
    }

    /**
     * Removes a sidebar body left/right inset.
     */
    public PageSidebarBody noInset() {
        return css(modifier(insetNone));
    }

    @Override
    public PageSidebarBody that() {
        return this;
    }
}
