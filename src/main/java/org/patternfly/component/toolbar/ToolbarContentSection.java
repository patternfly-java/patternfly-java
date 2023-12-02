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

import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.alert;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.description;

/**
 * Container for a content section in a toolbar. This is used to separate static elements from dynamic elements within a
 * {@link ToolbarContent}. There should be no more than one {@link ToolbarContentSection} per {@link ToolbarContent}.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/toolbar/html#usage-0">https://www.patternfly.org/components/toolbar/html#usage-0</a>
 */
public class ToolbarContentSection extends BaseSubComponent<HTMLDivElement, ToolbarContentSection> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static ToolbarContentSection toolbarContentSection() {
        return new ToolbarContentSection();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tcs";

    ToolbarContentSection() {
        super(div().css(component(alert, description)).element(), ComponentType.Toolbar, SUB_COMPONENT_NAME);
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarContentSection that() {
        return this;
    }
}
