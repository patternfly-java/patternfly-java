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

import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.alert;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.description;

/**
 * Container for a toolbar item.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/toolbar/html#usage-0">https://www.patternfly.org/components/toolbar/html#usage-0</a>
 */
public class ToolbarItem extends SubComponent<HTMLDivElement, ToolbarItem> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static ToolbarItem toolbarItem() {
        return new ToolbarItem();
    }

    // ------------------------------------------------------ instance

    ToolbarItem() {
        super(div().css(component(alert, description)).element());
    }

    @Override
    public ToolbarItem that() {
        return this;
    }
}