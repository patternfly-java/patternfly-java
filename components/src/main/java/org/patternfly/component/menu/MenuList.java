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

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.patternfly.core.Aria;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuItemType.action;
import static org.patternfly.component.menu.MenuItemType.link;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;

public class MenuList extends MenuSubComponent<HTMLUListElement, MenuList> implements Attachable {

    // ------------------------------------------------------ factory

    /**
     * Creates a new menu list component .
     */
    public static MenuList menuList() {
        return new MenuList();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ml";

    final Map<String, MenuItem> items;

    MenuList() {
        super(SUB_COMPONENT_NAME, ul().css(component(Classes.menu, list)).attr(role, "menu").element());
        this.items = new HashMap<>();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        switch (menu.menuType) {
            case menu:
            case dropdown:
                attr(role, "menu");
                break;
            case select:
                attr(role, "listbox");
                break;
        }
        if (menu.selectionMode == single) {
            aria(Aria.multiSelectable, false);
        } else if (menu.selectionMode == multi) {
            aria(Aria.multiSelectable, true);
        }
    }

    // ------------------------------------------------------ add

    public <T> MenuList addItems(Iterable<T> items, Function<T, MenuItem> display) {
        for (T item : items) {
            MenuItem menuItem = display.apply(item);
            addItem(menuItem);
        }
        return this;
    }

    public MenuList addItem(String id, String text) {
        return addItem(menuItem(id, action)
                .text(text));
    }

    public MenuList addItem(String id, String text, String href) {
        return addItem(menuItem(id, link)
                .text(text)
                .href(href));
    }

    public MenuList addItem(MenuItem item) {
        return add(item);
    }

    // override to assure internal wiring
    public MenuList add(MenuItem item) {
        items.put(item.id, item);
        return add(item.element());
    }

    public MenuList addDivider() {
        return add(divider(li));
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuList that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void clear() {
        for (MenuItem item : items.values()) {
            failSafeRemoveFromParent(item);
        }
        items.clear();
    }

    // ------------------------------------------------------ internal

    void removeItem(MenuItem favoriteItem) {
        items.remove(favoriteItem.id);
        failSafeRemoveFromParent(favoriteItem);
    }
}
