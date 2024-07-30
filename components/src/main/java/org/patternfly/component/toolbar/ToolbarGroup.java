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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.patternfly.component.HasItems;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.toolbar;

/**
 * Container for a toolbar group.
 */
public class ToolbarGroup extends ToolbarSubComponent<HTMLDivElement, ToolbarGroup> implements
        HasItems<HTMLDivElement, ToolbarGroup, ToolbarItem> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static ToolbarGroup toolbarGroup() {
        return new ToolbarGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tg";
    private final Map<String, ToolbarItem> items;

    ToolbarGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, group)).element());
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarGroup add(ToolbarItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<ToolbarItem> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
