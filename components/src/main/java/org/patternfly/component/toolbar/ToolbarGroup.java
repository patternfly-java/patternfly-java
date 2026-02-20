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

import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
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

    public static ToolbarGroup toolbarGroup() {
        return new ToolbarGroup(null);
    }

    public static ToolbarGroup toolbarGroup(ToolbarGroupType type) {
        return new ToolbarGroup(type);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "tg";
    private final Map<String, ToolbarItem> items;
    private final AurHandler<ToolbarGroup, ToolbarItem> aur;

    ToolbarGroup(ToolbarGroupType type) {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, group)).element());
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);
        if (type != null) {
            css(type.modifier());
        }
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarGroup add(ToolbarItem item) {
        items.put(item.identifier(), item);
        ToolbarGroup result = add(item.element());
        return aur.added(item);
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarGroup that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public ToolbarGroup onAdd(AddItemHandler<ToolbarGroup, ToolbarItem> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public ToolbarGroup onUpdate(UpdateItemHandler<ToolbarGroup, ToolbarItem> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public ToolbarGroup onRemove(RemoveItemHandler<ToolbarGroup, ToolbarItem> onRemove) {
        return aur.onRemove(onRemove);
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
    public void updateItem(ToolbarItem item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        ToolbarItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<ToolbarItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            ToolbarItem item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }
}
