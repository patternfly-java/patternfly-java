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

import java.util.function.BiConsumer;
import java.util.function.Consumer;

import org.patternfly.component.ComponentType;
import org.patternfly.icon.PredefinedIcon;

import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;

/**
 * A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new
 * location.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The dropdown uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues. CSS {@code position-try-fallbacks} handles menu
 * flipping when there is not enough space.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/menus/dropdown/">https://www.patternfly.org/components/menus/dropdown/</a>
 */
public class NativeDropdown extends NativeMenuToggleMenu<NativeDropdown> {

    // ------------------------------------------------------ factory

    public static NativeDropdown nativeDropdown(String text) {
        return new NativeDropdown(MenuToggle.menuToggle(text));
    }

    public static NativeDropdown nativeDropdown(PredefinedIcon icon, String label) {
        return new NativeDropdown(MenuToggle.menuToggle(icon, label));
    }

    public static NativeDropdown nativeDropdown(MenuToggle menuToggle) {
        return new NativeDropdown(menuToggle);
    }

    // ------------------------------------------------------ instance

    private MenuContent menuContent;
    private MenuList menuList;

    NativeDropdown(MenuToggle menuToggle) {
        super(ComponentType.NativeDropdown, menuToggle);
    }

    // ------------------------------------------------------ builder

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link NativeDropdown}. If the menu,
     * menu content, or menu list is not yet initialized, they will be created as part of this method. This allows for
     * modification or customization of the menu list using the specified consumer.
     * <p>
     * This method simplifies the process of adding menu items to the dropdown menu. It is a shortcut for creating and adding a
     * {@link DropdownMenu}, {@link MenuContent}, and {@link MenuList} in a single step.
     * <p>
     * The two dropdowns below are exactly the same. Use the explicit approach if you need to customize the menu, content or
     * list or if you want to add {@link MenuGroup}s.
     * {@snippet :
     *  NativeDropdown implicit = nativeDropdown("Dropdown")
     *     .applyToMenuList((menu, list) -> list.addItem(menuItem("item-0", "Action")));
     *
     * NativeDropdown explicit = nativeDropdown("Dropdown")
     *     .addContent(menuContent()
     *         .addList(menuList()
     *             .addItem(menuItem("item-0", "Action"))));
     *}
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link NativeDropdown} instance for method chaining
     */
    public NativeDropdown applyToMenuList(Consumer<MenuList> consumer) {
        if (menu == null) {
            add(dropdownMenu());
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

    @Override
    public NativeDropdown that() {
        return this;
    }
}