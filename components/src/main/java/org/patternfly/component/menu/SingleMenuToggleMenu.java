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

import java.util.List;
import java.util.function.Consumer;

import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;

import elemental2.dom.HTMLElement;

import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;

/**
 * Represents an abstract implementation of a menu-based toggle component that supports single-selection. This class serves as a
 * base for creating specialized single-menu toggle components, providing functionality for managing selected menu items and
 * updating the toggle display.
 *
 * @param <B> the type of the builder for this component
 */
abstract class SingleMenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends MenuToggleMenu<B> {

    // ------------------------------------------------------ instance

    boolean defaultSelectHandler;
    private MenuContent menuContent;
    private MenuList menuList;

    SingleMenuToggleMenu(ComponentType componentType, MenuToggle menuToggle) {
        super(componentType, menuToggle);
        this.defaultSelectHandler = true;
    }

    abstract void updateMenuToggle(MenuItem item);

    // ------------------------------------------------------ add

    @Override
    public B add(Menu menu) {
        super.add(menu);
        if (menu.menuType == MenuType.select && menu.selectionMode == SelectionMode.single && defaultSelectHandler) {
            menu.onSingleSelect((e, menuItem, s) -> updateMenuToggle(menuItem));
        }
        return that();
    }

    // ------------------------------------------------------ builder

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link SingleSelect}. If the menu,
     * menu content, or menu list is not yet initialized, they will be created as part of this method.
     * <p>
     * This method simplifies the process of adding menu items to the component. It is a shortcut for creating and adding a
     * {@link SingleSelectMenu}, {@link MenuContent}, and {@link MenuList} in a single step. Don't use this method if you need
     * to us another menu type, want to customize the menu, content or list or if you want to use {@link MenuGroup}s.
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link SingleSelect} instance for method chaining
     */
    public B applyToMenuList(Consumer<MenuList> consumer) {
        if (menu == null) {
            add(singleSelectMenu());
        }
        if (menuContent == null) {
            menuContent = menuContent();
            menu.addContent(menuContent);
        }
        if (menuList == null) {
            menuList = menuList();
            menuContent.addList(menuList);
        }

        consumer.accept(menuList);
        return that();
    }

    public B noDefaultSelectHandler() {
        this.defaultSelectHandler = false;
        return that();
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        List<MenuItem> selectedItems = menu.selectedItems();
        menu.clearSearch();
        menu.unselectAllItems();
        menuToggle.text("");
        if (fireEvent && !selectedItems.isEmpty()) {
            menu.fireSingleSelection(selectedItems.get(0), false);
        }
    }

    public void select(String identifier) {
        select(menu().findItem(identifier), true);
    }

    public void select(String identifier, boolean fireEvent) {
        select(menu().findItem(identifier), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            if (!fireEvent && defaultSelectHandler) {
                updateMenuToggle(item);
            }
        }
    }
}
