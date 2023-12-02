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
package org.patternfly.component.navigation;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.patternfly.component.divider.Divider;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.navigationGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.nav;
import static org.patternfly.layout.Classes.title;

public class NavigationGroup extends NavigationSubComponent<HTMLElement, NavigationGroup> {

    // ------------------------------------------------------ factory

    public static NavigationGroup navigationGroup(String id, String text) {
        return new NavigationGroup(id, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ng";

    public final String id;
    private final Map<String, NavigationItem> items;
    private final HTMLUListElement ul;

    NavigationGroup(String id, String text) {
        super(SUB_COMPONENT_NAME, section().css(component(nav, Classes.section))
                .data(navigationGroup, id)
                .element());
        this.id = id;
        this.items = new HashMap<>();

        add(h(2, text).css(component(nav, Classes.section, title)));
        add(ul = ul().css(component(nav, list))
                .attr(role, "list")
                .element());
    }

    // ------------------------------------------------------ add

    public <T> NavigationGroup addItems(Iterable<T> items, Function<T, NavigationItem> display) {
        for (T item : items) {
            NavigationItem navigationItem = display.apply(item);
            addItem(navigationItem);
        }
        return this;
    }

    public NavigationGroup addItem(NavigationItem item) {
        items.put(item.id, item);
        ul.appendChild(item.element());
        return this;
    }

    public NavigationGroup addDivider(Divider divider) {
        ul.appendChild(divider.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NavigationGroup that() {
        return this;
    }

    // ------------------------------------------------------ internal

    NavigationItem findItem(String id) {
        return items.get(id);
    }
}
