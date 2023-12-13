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

import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.core.Tuples;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Sticky;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.overflowScroll;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.shadowBottom;
import static org.patternfly.style.Classes.shadowTop;
import static org.patternfly.style.Classes.typedModifier;

/**
 * Container to group multiple {@link PageSection} containers. Can be used in combination with the {@link #sticky(Sticky)}
 * modifier to make multiple sections sticky.
 * <p>
 * {@snippet class = PageDemo region = pageMainGroup}
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageMainGroup extends SubComponent<HTMLDivElement, PageMainGroup> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMainGroup pageMainGroup() {
        return new PageMainGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pmg";

    PageMainGroup() {
        super(ComponentType.Page, SUB_COMPONENT_NAME, div().css(component(page, main, group)).element());
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageSection} to this component.
     */
    public <E extends HTMLElement, P extends PageSection<E, P>> PageMainGroup addSection(
            PageSection<E, P> pageSection) {
        return add(pageSection);
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies this component to be sticky at the given breakpoints.
     */
    public PageMainGroup sticky(Tuples<Breakpoint, Sticky> sticky) {
        return css(typedModifier(sticky));
    }

    /**
     * Modifies this component to have a top shadow.
     */
    public PageMainGroup shadowTop() {
        return css(modifier(shadowTop));
    }

    /**
     * Modifies this component to have a bottom shadow.
     */
    public PageMainGroup shadowBottom() {
        return css(modifier(shadowBottom));
    }

    /**
     * Modifies this component to show a scrollbar if it has overflow content.
     */
    public PageMainGroup overflowScroll() {
        return css(modifier(overflowScroll));
    }

    @Override
    public PageMainGroup that() {
        return this;
    }
}
