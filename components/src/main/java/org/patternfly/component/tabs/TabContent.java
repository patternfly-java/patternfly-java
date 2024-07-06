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

import java.util.HashMap;
import java.util.Map;

import org.patternfly.core.ComponentContext;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.tabpanel;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.tabContent;

public class TabContent extends TabSubComponent<HTMLElement, TabContent> implements ComponentContext<HTMLElement, TabContent>, Disabled<HTMLElement, TabContent> {

    // ------------------------------------------------------ factory

    public static TabContent tabContent() {
        return new TabContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tc";
    private final Map<String, Object> data;

    TabContent() {
        super(SUB_COMPONENT_NAME, section().css(component(tabContent))
                .apply(s -> s.tabIndex = 0)
                .attr(role, tabpanel)
                .element());
        this.data = new HashMap<>();
    }

    // ------------------------------------------------------ add

    public TabContent addBody(TabContentBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    @Override
    public <T> TabContent store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public TabContent that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }
}
