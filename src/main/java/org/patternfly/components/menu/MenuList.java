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
package org.patternfly.components.menu;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.patternfly.components.SubComponent;
import org.patternfly.core.Aria;

import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.li;
import static org.patternfly.components.divider.MenuItemType.action;
import static org.patternfly.components.divider.MenuItemType.link;
import static org.patternfly.components.menu.MenuItem.menuItem;
import static org.patternfly.core.Constants.role;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.menu;

public class MenuList extends SubComponent<HTMLUListElement, MenuList> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    /**
     * Creates a new menu list component .
     */
    public static MenuList menuList() {
        return new MenuList();
    }

    // ------------------------------------------------------ instance

    final Map<String, MenuItem> items;

    MenuList() {
        super(ul().css(component(menu, list)).attr(role, "menu").element());
        this.items = new HashMap<>();
    }

    @Override
    public void passMenu(Menu menu) {
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
        for (MenuItem menuItem : items.values()) {
            menuItem.passMenu(menu);
        }
    }

    @Override
    public MenuList that() {
        return this;
    }

    // ------------------------------------------------------ add methods

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
        items.put(item.id, item);
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

    // ------------------------------------------------------ internals

    void removeItem(MenuItem favoriteItem) {
        items.remove(favoriteItem.id);
        failSafeRemoveFromParent(favoriteItem);
    }
}
