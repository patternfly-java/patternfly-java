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

import org.jboss.elemento.ElementContainerDelegate;
import org.patternfly.style.Modifiers.Fill;
import org.patternfly.style.Modifiers.NoFill;
import org.patternfly.style.Modifiers.Secondary;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.section;

/**
 * Container for a section in a {@link PageGroup} or {@link PageMain} component. Note: By default, the last/only section will
 * grow to fill the available vertical space. You can change this behavior using {@link #fill()} and {@link #noFill()}.
 */
public class PageSection extends PageSectionBuilder<HTMLElement, PageSection> implements
        Fill<HTMLElement, PageSection>,
        ElementContainerDelegate<HTMLElement, PageSection>,
        NoFill<HTMLElement, PageSection>,
        Secondary<HTMLElement, PageSection> {

    // ------------------------------------------------------ factory

    public static PageSection pageSection() {
        return new PageSection();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pms";
    private final HTMLElement container;

    PageSection() {
        super(SUB_COMPONENT_NAME, section().css(component(page, main, section)).element());
        element().appendChild(container = div().css(component(page, main, body)).element());
    }

    @Override
    public Element containerDelegate() {
        return container;
    }

    // ------------------------------------------------------ builder

    @Override
    public PageSection that() {
        return this;
    }
}
