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
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.core.Aria.hasPopup;
import static org.patternfly.core.Aria.label;
import static org.patternfly.icon.IconSets.fas.filter;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.show;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Classes.toggleGroup;
import static org.patternfly.style.Classes.toolbar;
import static org.patternfly.style.Orientation.vertical;

/**
 * Container for a toolbar group.
 */
public class ToolbarToggleGroup extends ToolbarSubComponent<HTMLDivElement, ToolbarToggleGroup> implements
        HasItems<HTMLDivElement, ToolbarToggleGroup, ToolbarItem> {

    // ------------------------------------------------------ factory

    public static ToolbarToggleGroup toolbarToggleGroup() {
        return new ToolbarToggleGroup();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ttg";
    private final Map<String, ToolbarItem> items;

    ToolbarToggleGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, group), modifier(toggleGroup), modifier(show)).element());
        add(div().css(component(toolbar, toggle))
                .add(button(filter()).plain()
                        .aria(hasPopup, false)
                        .aria(label, "Show filters")));
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarToggleGroup add(ToolbarItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    public ToolbarToggleGroup addDivider() {
        return add(divider(hr).orientation(vertical));
    }

    public ToolbarToggleGroup addGroup(ToolbarGroup group) {
        return add(group);
    }

    public ToolbarToggleGroup add(ToolbarGroup group) {
        add(group.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarToggleGroup that() {
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
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public ToolbarItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
