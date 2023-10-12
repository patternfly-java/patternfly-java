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

import org.patternfly.component.SubComponent;
import org.patternfly.layout.Breakpoint;
import org.patternfly.layout.Sticky;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.overflowScroll;
import static org.patternfly.layout.Classes.page;
import static org.patternfly.layout.Classes.shadowBottom;
import static org.patternfly.layout.Classes.shadowTop;

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

    PageMainGroup() {
        super(div().css(component(page, main, group))
                .element());
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
     * Modifies this component to be sticky to the top of its container.
     */
    public PageMainGroup sticky(Sticky sticky) {
        return css(sticky.modifier);
    }

    /**
     * Modifies this component to be sticky to the top of its container at the given breakpoint.
     */
    public PageMainGroup sticky(Sticky sticky, Breakpoint breakpoint) {
        return css(sticky.onHeight(breakpoint));
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
