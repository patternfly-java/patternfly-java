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
package org.patternfly.component.sidebar;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.layout.Brightness;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.aside;
import static org.patternfly.core.Aria.hidden;
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
public class Sidebar extends BaseComponent<HTMLElement, Sidebar> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Sidebar sidebar() {
        return new Sidebar();
    }

    // ------------------------------------------------------ instance

    Sidebar() {
        super(ComponentType.Sidebar, aside().css(component(page, sidebar), modifier(expanded))
                .aria(hidden, false)
                .element());
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link SidebarBody} to this component.
     */
    public Sidebar addBody(SidebarBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies the sidebar for the expanded state.
     */
    public Sidebar expanded() {
        element().classList.remove(modifier(collapsed));
        element().classList.add(modifier(expanded));
        aria(hidden, false);
        return this;
    }

    /**
     * Modifies the sidebar for the collapsed state.
     */
    public Sidebar collapsed() {
        element().classList.remove(modifier(expanded));
        element().classList.add(modifier(collapsed));
        aria(hidden, true);
        return this;
    }

    /**
     * Modifies the sidebar to have a light theme. Note: for use with a light themed
     * {@link org.patternfly.component.navigation.Navigation} component.
     */
    public Sidebar light() {
        return css(Brightness.light.modifier);
    }

    @Override
    public Sidebar that() {
        return this;
    }

    // ------------------------------------------------------ api

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
}
