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

import static org.jboss.elemento.Elements.aside;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.*;

/**
 * Container within the {@link PageSidebar} to hold content. Note: By default, the last/only body will grow to fill the
 * available vertical space. You can change this behavior using {@link #fill()} and {@link #noFill()}.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageSidebarBody extends ElementBuilder<HTMLElement, PageSidebarBody>
        implements HtmlContent<HTMLElement, PageSidebarBody> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageSidebarBody pageSidebarBody() {
        return new PageSidebarBody();
    }

    // ------------------------------------------------------ instance

    PageSidebarBody() {
        super(aside().css(component(page, main, body))
                .element());
    }

    @Override
    public PageSidebarBody that() {
        return this;
    }

    // ------------------------------------------------------ modifiers

    /**
     * Modifies the element to grow to fill the available space.
     */
    public PageSidebarBody fill() {
        return css(modifier(fill));
    }

    /**
     * Modifies the element to not grow to fill the available vertical space.
     */
    public PageSidebarBody noFill() {
        return css(modifier(noFill));
    }

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
}
