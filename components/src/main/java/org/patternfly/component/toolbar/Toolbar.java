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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.toolbar;

/**
 * A toolbar allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a
 * list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied
 * filters in chip groups.
 * <p>
 * {@snippet class = ToolbarDemo region = toolbar}
 *
 * @see <a href="https://www.patternfly.org/components/toolbar">https://www.patternfly.org/components/toolbar</a>
 */
public class Toolbar extends BaseComponent<HTMLDivElement, Toolbar> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Toolbar toolbar() {
        return new Toolbar();
    }

    // ------------------------------------------------------ instance

    private ToolbarFilterContent filterContent;

    Toolbar() {
        super(ComponentType.Toolbar, div().css(component(toolbar)).element());
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

    @Override
    public Toolbar that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void removeFilterContent() {
        failSafeRemoveFromParent(filterContent);
    }
}
