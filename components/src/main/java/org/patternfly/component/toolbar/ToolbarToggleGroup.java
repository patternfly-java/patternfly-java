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
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.patternfly.component.HasItems;
import org.patternfly.component.label.Label;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
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
    private final List<BiConsumer<ToolbarToggleGroup, ToolbarItem>> onAdd;
    private final List<BiConsumer<ToolbarToggleGroup, ToolbarItem>> onRemove;

    ToolbarToggleGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, group), modifier(toggleGroup), modifier(show)).element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        add(div().css(component(toolbar, toggle))
                .add(button(filter()).plain()
                        .aria(hasPopup, false)
                        .aria(label, "Show filters")));
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarToggleGroup add(ToolbarItem item) {
        items.put(item.identifier(), item);
        ToolbarToggleGroup result = add(item.element());
        onAdd.forEach(bc -> bc.accept(this, item));
        return result;
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

    // ------------------------------------------------------ events

    @Override
    public ToolbarToggleGroup onAdd(BiConsumer<ToolbarToggleGroup, ToolbarItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public ToolbarToggleGroup onRemove(BiConsumer<ToolbarToggleGroup, ToolbarItem> onRemove) {
        this.onRemove.add(onRemove);
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
    public void removeItem(String identifier) {
        ToolbarItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<ToolbarItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            ToolbarItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
