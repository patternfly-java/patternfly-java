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
package org.patternfly.component.toolbar;

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Inset;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Modifiers.NoPadding;
import org.patternfly.style.Modifiers.Static;
import org.patternfly.style.Modifiers.Sticky;
import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.toolbar;
import static org.patternfly.style.TypedModifier.swap;

/**
 * A toolbar allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a
 * list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied
 * filters in chip groups.
 * <p>
 * {@snippet class = ToolbarDemo region = toolbar}
 *
 * @see <a href="https://www.patternfly.org/components/toolbar">https://www.patternfly.org/components/toolbar</a>
 */
public class Toolbar extends BaseComponent<HTMLDivElement, Toolbar> implements
        FullHeight<HTMLDivElement, Toolbar>,
        NoPadding<HTMLDivElement, Toolbar>,
        Static<HTMLDivElement, Toolbar>,
        Sticky<HTMLDivElement, Toolbar> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Toolbar toolbar() {
        return new Toolbar();
    }

    // ------------------------------------------------------ instance

    private ToolbarFilterContent filterContent;
    private List<ComponentHandler<Toolbar>> clearAllFilters;

    Toolbar() {
        super(ComponentType.Toolbar, div().css(component(toolbar)).element());
        this.clearAllFilters = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    public Toolbar addContent(ToolbarContent content) {
        return add(content);
    }

    public Toolbar addFilterContent(ToolbarFilterContent filterContent) {
        return add(filterContent);
    }

    public Toolbar add(ToolbarFilterContent filterContent) {
        this.filterContent = filterContent;
        return add(filterContent.element());
    }

    // ------------------------------------------------------ builder

    /** Background color variant of the toolbar */
    public Toolbar color(ToolbarColor color) {
        return swap(this, element(), color, ToolbarColor.values());
    }

    /**
     * Same as {@code inset(breakpoints(default_, inset))}
     */
    public Toolbar inset(Inset inset) {
        return inset(breakpoints(default_, inset));
    }

    /** Insets at various breakpoints. */
    public Toolbar inset(Breakpoints<Inset> inset) {
        return css(inset.modifiers());
    }

    @Override
    public Toolbar that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Optional callback for clearing all filters in the toolbar.
     */
    public Toolbar onClearAllFilters(ComponentHandler<Toolbar> clearAllFilters) {
        this.clearAllFilters.add(clearAllFilters);
        return this;
    }

    // ------------------------------------------------------ api

    public void removeFilterContent() {
        failSafeRemoveFromParent(filterContent);
    }
}
