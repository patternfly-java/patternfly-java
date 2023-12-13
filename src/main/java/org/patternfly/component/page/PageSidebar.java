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

import java.util.EnumSet;
import java.util.stream.Stream;

import org.patternfly.core.Expandable;
import org.patternfly.core.Logger;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Brightness;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.aside;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.style.Brightness.dark;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.sidebar;

/**
 * Container for the page sidebar.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
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

    static final String SUB_COMPONENT_NAME = "psb";

    private ToggleHandler<PageSidebar> toggleHandler;

    PageSidebar() {
        super(SUB_COMPONENT_NAME, aside().css(component(page, sidebar), modifier(expanded))
                .aria(hidden, false)
                .element());
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageSidebarBody} to this component.
     */
    public PageSidebar addBody(PageSidebarBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    public PageSidebar theme(Brightness theme) {
        if (!EnumSet.of(dark, light).contains(theme)) {
            Logger.unsupported("PF5/PageSidebar", element(),
                    "Theme " + theme + " not supported. Valid values: " +
                            Stream.of(dark, light).map(Brightness::name).collect(joining(" ")));
            return this;
        }
        return css(theme.modifier());
    }

    @Override
    public PageSidebar that() {
        return this;
    }

    // ------------------------------------------------------ events

    public PageSidebar onToggle(ToggleHandler<PageSidebar> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), null, element());
        aria(hidden, true);
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), null, element());
        aria(hidden, false);
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    // ------------------------------------------------------ internal

    void resize(int pageWidth, int pageHeight) {

    }
}
