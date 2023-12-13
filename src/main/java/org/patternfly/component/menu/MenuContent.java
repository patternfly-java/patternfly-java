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
import java.util.List;

import org.jboss.elemento.Attachable;
import org.patternfly.component.divider.Divider;
import org.patternfly.core.Aria;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;

public class MenuContent extends MenuSubComponent<HTMLDivElement, MenuContent> implements Attachable {

    // ------------------------------------------------------ factory

    public static MenuContent menuContent() {
        return new MenuContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mc";

    MenuList list;
    final List<MenuGroup> groups;
    private MenuGroup favoritesGroup;
    private MenuList favoritesList;
    private Divider favoritesDivider;

    MenuContent() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.menu, content)).element());
        this.groups = new ArrayList<>();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
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
                // Don't use item.addFavoriteItemAction().onClick((e, itemAction) -> menu.toggleFavorite(item)) here !!
                item.addFavoriteItemAction().on(click, e -> menu.toggleFavorite(item));
            }
        }
    }

    // ------------------------------------------------------ add

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

    // ------------------------------------------------------ builder

    @Override
    public MenuContent that() {
        return this;
    }

    // ------------------------------------------------------ internal

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
