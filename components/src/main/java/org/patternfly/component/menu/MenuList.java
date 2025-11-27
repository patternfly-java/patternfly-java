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
package org.patternfly.component.menu;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.Attachable;
import org.patternfly.component.HasItems;
import org.patternfly.component.label.Label;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;

import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.menu;

public class MenuList extends MenuSubComponent<HTMLUListElement, MenuList> implements
        HasItems<HTMLUListElement, MenuList, MenuItem>,
        Attachable {

    // ------------------------------------------------------ factory

    /**
     * Creates a new menu list component.
     */
    public static MenuList menuList() {
        return new MenuList();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ml";
    final Map<String, MenuItem> items;
    private final List<BiConsumer<MenuList, MenuItem>> onAdd;
    private final List<BiConsumer<MenuList, MenuItem>> onRemove;

    MenuList() {
        super(SUB_COMPONENT_NAME, ul().css(component(menu, list)).element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        storeSubComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        switch (menu.menuType) {
            case menu:
            case checkbox:
                attr(role, Roles.menu);
                break;
            case select:
                attr(role, Roles.listbox);
                if (menu.selectionMode == single) {
                    aria(Aria.multiSelectable, false);
                } else if (menu.selectionMode == multi) {
                    aria(Aria.multiSelectable, true);
                }
                break;
        }
    }

    // ------------------------------------------------------ add

    @Override
    public MenuList add(MenuItem item) {
        items.put(item.identifier(), item);
        MenuList result = add(item.element());
        onAdd.forEach(listbcner -> listbcner.accept(this, item));
        return result;
    }

    public MenuList addDivider() {
        return add(divider(li));
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public MenuList onAdd(BiConsumer<MenuList, MenuItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public MenuList onRemove(BiConsumer<MenuList, MenuItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<MenuItem> iterator() {
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
    public MenuItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        MenuItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        Iterator<MenuItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            MenuItem item = iterator.next();
            failSafeRemoveFromParent(item);
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    // ------------------------------------------------------ internal

    void removeItem(MenuItem item) {
        items.remove(item.identifier());
        failSafeRemoveFromParent(item);
    }
}
