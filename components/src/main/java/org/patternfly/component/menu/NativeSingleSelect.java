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
import java.util.function.BiConsumer;
import java.util.function.Consumer;

import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;

import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;

/**
 * A select component to select exactly one item from a list.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The select uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues. CSS {@code position-try-fallbacks} handles menu
 * flipping when there is not enough space.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class NativeSingleSelect extends NativeMenuToggleMenu<NativeSingleSelect> {

    // ------------------------------------------------------ factory

    public static NativeSingleSelect nativeSingleSelect(String text) {
        return new NativeSingleSelect(MenuToggle.menuToggle(text));
    }

    public static NativeSingleSelect nativeSingleSelect(MenuToggle menuToggle) {
        return new NativeSingleSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    private boolean defaultSelectHandler;
    private MenuContent menuContent;
    private MenuList menuList;

    NativeSingleSelect(MenuToggle menuToggle) {
        super(ComponentType.NativeSingleSelect, menuToggle);
        this.defaultSelectHandler = true;
    }

    // ------------------------------------------------------ add

    @Override
    public NativeSingleSelect add(Menu menu) {
        super.add(menu);
        if (menu.menuType == MenuType.select && menu.selectionMode == SelectionMode.single && defaultSelectHandler) {
            menu.onSingleSelect((e, menuItem, s) -> updateMenuToggle(menuItem));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link NativeSingleSelect}. If the
     * menu, menu content, or menu list is not yet initialized, they will be created as part of this method. This allows for
     * modification or customization of the menu list using the specified consumer.
     * <p>
     * This method simplifies the process of adding menu items to the select menu. It is a shortcut for creating and adding a
     * {@link SingleSelectMenu}, {@link MenuContent}, and {@link MenuList} in a single step.
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link NativeSingleSelect} instance for method chaining
     */
    public NativeSingleSelect applyToMenuList(Consumer<MenuList> consumer) {
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
        return this;
    }

    public NativeSingleSelect noDefaultSelectHandler() {
        this.defaultSelectHandler = false;
        return this;
    }

    @Override
    public NativeSingleSelect that() {
        return this;
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

    // ------------------------------------------------------ internal

    private void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }
}