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

import java.util.ArrayList;
import java.util.List;

import org.patternfly.components.SubComponent;
import org.patternfly.components.divider.Divider;
import org.patternfly.core.Aria;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.hr;
import static org.patternfly.components.menu.MenuGroup.menuGroup;
import static org.patternfly.components.menu.MenuList.menuList;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.menu;

public class MenuContent extends SubComponent<HTMLDivElement, MenuContent> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    public static MenuContent menuContent() {
        return new MenuContent();
    }

    // ------------------------------------------------------ instance

    MenuList list;
    final List<MenuGroup> groups;
    private MenuGroup favoritesGroup;
    private MenuList favoritesList;
    private Divider favoritesDivider;

    MenuContent() {
        super(div().css(component(menu, content)).element());
        this.groups = new ArrayList<>();
    }

    @Override
    public void passMenu(Menu menu) {
        if (menu.favorites) {
            favoritesGroup = menuGroup("Favorites")
                    .addList(favoritesList = menuList());
            favoritesDivider = divider(hr);
            showFavorites(false);

            if (groups.isEmpty()) {
                // repackage existing list into groups
                failSafeRemoveFromParent(list);
                MenuGroup listGroup = menuGroup().addList(list);
                addGroup(favoritesGroup);
                add(favoritesDivider);
                addGroup(listGroup);
                list = null;
            } else {
                groups.add(0, favoritesGroup);
                insertFirst(element(), favoritesDivider);
                insertFirst(element(), favoritesGroup);
            }

            for (MenuItem item : menu.items()) {
                item.addFavoriteItemAction().onClick((e, itemAction) -> menu.toggleFavorite(item));
            }
        }
        for (MenuGroup group : groups) {
            group.passMenu(menu);
        }
        if (list != null) {
            list.passMenu(menu);
        }
    }

    @Override
    public MenuContent that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public MenuContent addGroup(MenuGroup group) {
        return add(group);
    }

    public MenuContent addList(MenuList list) {
        return add(list);
    }

    public MenuContent addDivider() {
        return add(divider(hr));
    }

    // override to assure internal wiring
    public MenuContent add(MenuGroup group) {
        groups.add(group);
        add(group.element());
        return this;
    }

    // override to assure internal wiring
    public MenuContent add(MenuList list) {
        this.list = list;
        add(list.element());
        return this;
    }

    // ------------------------------------------------------ internals

    void addToFavorites(MenuItem favoriteItem) {
        if (favoritesList != null) {
            favoritesList.addItem(favoriteItem);
            showFavorites(true);
        }
    }

    void removeFromFavorites(MenuItem favoriteItem) {
        if (favoritesList != null) {
            favoritesList.removeItem(favoriteItem);
            showFavorites(favoritesList.element().childElementCount != 0);
        }
    }

    void showFavorites(boolean visible) {
        if (favoritesDivider != null) {
            setVisible(favoritesDivider, visible);
            favoritesDivider.element().hidden = !visible;
            favoritesDivider.element().setAttribute(Aria.hidden, !visible);
        }
        if (favoritesGroup != null) {
            setVisible(favoritesGroup, visible);
            favoritesGroup.element().hidden = !visible;
            favoritesGroup.element().setAttribute(Aria.hidden, !visible);
        }
    }
}
