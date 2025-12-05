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
package org.patternfly.component.notification;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.Elements;
import org.patternfly.component.HasItems;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Roles.list;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.notificationDrawer;

public class NotificationDrawerList extends NotificationDrawerSubComponent<HTMLElement, NotificationDrawerList> implements
        HasItems<HTMLElement, NotificationDrawerList, NotificationDrawerItem> {

    // ------------------------------------------------------ factory

    public static NotificationDrawerList notificationDrawerList() {
        return new NotificationDrawerList();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ndl";
    final Map<String, NotificationDrawerItem> items;
    private final List<BiConsumer<NotificationDrawerList, NotificationDrawerItem>> onAdd;
    private final List<BiConsumer<NotificationDrawerList, NotificationDrawerItem>> onRemove;

    NotificationDrawerList() {
        super(SUB_COMPONENT_NAME, ul().css(component(notificationDrawer, Classes.list))
                .role(list)
                .element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    /**
     * Unlike other add methods, this method doesn't append the item to the list but inserts it as the first child.
     */
    @Override
    public NotificationDrawerList add(NotificationDrawerItem item) {
        items.put(item.identifier(), item);
        insertFirst(element(), item.element());
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    public NotificationDrawerList insertAfter(NotificationDrawerItem newItem, NotificationDrawerItem afterItem) {
        items.put(newItem.identifier(), newItem);
        if (afterItem == null) {
            insertFirst(element(), newItem.element());
        } else {
            Elements.insertAfter(newItem.element(), afterItem.element());
        }
        onAdd.forEach(bc -> bc.accept(this, newItem));
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NotificationDrawerList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public NotificationDrawerList onAdd(BiConsumer<NotificationDrawerList, NotificationDrawerItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public NotificationDrawerList onRemove(BiConsumer<NotificationDrawerList, NotificationDrawerItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<NotificationDrawerItem> iterator() {
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
    public NotificationDrawerItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        NotificationDrawerItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        Iterator<NotificationDrawerItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            NotificationDrawerItem item = iterator.next();
            failSafeRemoveFromParent(item);
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
