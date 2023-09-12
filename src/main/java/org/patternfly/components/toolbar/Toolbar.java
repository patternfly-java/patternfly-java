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
package org.patternfly.components.toolbar;

import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.toolbar;

/**
 * A toolbar allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a
 * list, or a data visualization (chart), for example. The toolbar responsively accommodates controls and displays applied
 * filters in chip groups.
 * <p>
 * {@snippet class = ToolbarDemo region = toolbar}
 *
 * @see <a href="https://www.patternfly.org/components/toolbar/html">https://www.patternfly.org/components/toolbar/html</a>
 */
public class Toolbar extends BaseComponent<HTMLDivElement, Toolbar> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static Toolbar toolbar() {
        return new Toolbar();
    }

    // ------------------------------------------------------ instance

    Toolbar() {
        super(div().css(component(toolbar)).element(), ComponentType.Toolbar);
    }

    @Override
    public Toolbar that() {
        return this;
    }
}
