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

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.Expandable;
import org.patternfly.handler.ToggleHandler;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.aside;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.style.Classes.collapsed;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.sidebar;

/**
 * Container for the page sidebar.
 */
public class PageSidebar extends PageSubComponent<HTMLElement, PageSidebar> implements Expandable<HTMLElement, PageSidebar> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageSidebar pageSidebar() {
        return new PageSidebar();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "psb";

    private boolean keepExpanded;
    private final List<ToggleHandler<PageSidebar>> toggleHandler;

    PageSidebar() {
        super(SUB_COMPONENT_NAME, aside().css(component(page, sidebar), modifier(expanded))
                .aria(hidden, false)
                .element());
        this.keepExpanded = false;
        this.toggleHandler = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageSidebarBody} to this component.
     */
    public PageSidebar addBody(PageSidebarBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    public PageSidebar keepExpanded() {
        this.keepExpanded = true;
        return this;
    }

    @Override
    public PageSidebar that() {
        return this;
    }

    // ------------------------------------------------------ events

    public PageSidebar onToggle(ToggleHandler<PageSidebar> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        if (!keepExpanded) {
            element().classList.remove(modifier(expanded));
            element().classList.add(modifier(collapsed));
            aria(hidden, true);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        element().classList.remove(modifier(collapsed));
        element().classList.add(modifier(expanded));
        aria(hidden, false);
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
        }
    }
}
