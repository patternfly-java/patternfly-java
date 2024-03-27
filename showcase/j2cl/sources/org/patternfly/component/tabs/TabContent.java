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
package org.patternfly.component.tabs;

import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.tabContent;

public class TabContent extends TabSubComponent<HTMLElement, TabContent> implements Disabled<HTMLElement, TabContent> {

    // ------------------------------------------------------ factory

    public static TabContent tabContent() {
        return new TabContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tc";

    TabContent() {
        super(SUB_COMPONENT_NAME, section().css(component(tabContent))
                .apply(s -> s.tabIndex = 0)
                .attr(role, "tabpanel")
                .element());
    }

    // ------------------------------------------------------ add

    public TabContent addBody(TabContentBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    @Override
    public TabContent that() {
        return this;
    }
}
