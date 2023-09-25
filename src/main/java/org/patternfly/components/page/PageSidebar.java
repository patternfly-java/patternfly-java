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

import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.layout.Brightness;
import org.patternfly.layout.Constants;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.aside;
import static org.patternfly.layout.Classes.collapsed;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expanded;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.page;
import static org.patternfly.layout.Classes.sidebar;

/**
 * Container for the page sidebar.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageSidebar extends BaseComponent<HTMLElement, PageSidebar> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageSidebar pageSidebar() {
        return new PageSidebar();
    }

    // ------------------------------------------------------ instance

    PageSidebar() {
        super(aside().css(component(page, sidebar), modifier(expanded))
                .aria(Constants.hidden, false)
                .element(),
                ComponentType.Sidebar);
    }

    @Override
    public PageSidebar that() {
        return this;
    }

    /**
     * Toggles the collapse/expanded state of the sidebar.
     */
    public void toggle() {
        if (element().classList.contains(modifier(collapsed))) {
            expanded();
        } else if (element().classList.contains(modifier(expanded))) {
            collapsed();
        }
    }

    // ------------------------------------------------------ add methods

    /**
     * Adds a {@link PageSidebarBody} to this component.
     */
    public PageSidebar addBody(PageSidebarBody body) {
        return add(body);
    }

    // ------------------------------------------------------ modifiers

    /**
     * Modifies the sidebar for the expanded state.
     */
    public PageSidebar expanded() {
        element().classList.remove(modifier(collapsed));
        element().classList.add(modifier(expanded));
        aria(Constants.hidden, false);
        return this;
    }

    /**
     * Modifies the sidebar for the collapsed state.
     */
    public PageSidebar collapsed() {
        element().classList.remove(modifier(expanded));
        element().classList.add(modifier(collapsed));
        aria(Constants.hidden, true);
        return this;
    }

    /**
     * Modifies the sidebar to have a light theme. Note: for use with a light themed
     * {@link org.patternfly.components.navigation.Navigation} component.
     */
    public PageSidebar light() {
        return css(Brightness.light.modifier);
    }
}
