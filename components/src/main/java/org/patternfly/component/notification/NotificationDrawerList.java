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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

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

    NotificationDrawerList() {
        super(SUB_COMPONENT_NAME, ul().css(component(notificationDrawer, Classes.list))
                .role(list)
                .element());
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ add

    /**
     * Unlike other add methods this methods doesn't append the item to the list, but inserts it as the first child.
     */
    @Override
    public NotificationDrawerList add(NotificationDrawerItem item) {
        items.put(item.identifier(), item);
        insertFirst(element(), item.element());
        return this;
    }

    public NotificationDrawerList insertAfter(NotificationDrawerItem newItem, NotificationDrawerItem afterItem) {
        items.put(newItem.identifier(), newItem);
        if (afterItem == null) {
            insertFirst(element(), newItem.element());
        } else {
            Elements.insertAfter(newItem.element(), afterItem.element());
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NotificationDrawerList that() {
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
    public void clear() {
        for (NotificationDrawerItem item : items.values()) {
            failSafeRemoveFromParent(item);
        }
        items.clear();
    }

    @Override
    public void removeItem(String identifier) {
        NotificationDrawerItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
    }
}
