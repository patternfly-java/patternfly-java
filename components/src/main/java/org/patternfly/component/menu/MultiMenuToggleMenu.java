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
import java.util.Objects;
import java.util.function.Consumer;

import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;

import elemental2.dom.HTMLElement;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MultiSelectMenu.multiSelectMenu;

/**
 * Represents an abstract implementation of a menu-based toggle component that supports multi-selection. This class serves as a
 * base for creating specialized multi-menu toggle components, providing functionality for managing selected menu items and
 * updating the toggle display.
 *
 * @param <B> the type of the builder for this component
 */
abstract class MultiMenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends MenuToggleMenu<B> {

    // ------------------------------------------------------ instance

    private MenuContent menuContent;
    private MenuList menuList;

    MultiMenuToggleMenu(ComponentType componentType, MenuToggle menuToggle) {
        super(componentType, menuToggle);
    }

    abstract void updateMenuToggle(List<MenuItem> items);

    // ------------------------------------------------------ add

    @Override
    public B add(Menu menu) {
        super.add(menu);
        if (menu.selectionMode == SelectionMode.multi) {
            menu.onMultiSelect((e, m, items) -> updateMenuToggle(items));
        }
        return that();
    }

    // ------------------------------------------------------ api

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link MultiSelect}. If the menu, menu
     * content, or menu list is not yet initialized, they will be created as part of this method.
     * <p>
     * This method simplifies the process of adding menu items to the component. It is a shortcut for creating and adding a
     * {@link MultiSelectMenu}, {@link MenuContent}, and {@link MenuList} in a single step. Don't use this method if you need to
     * us another menu type, want to customize the menu, content or list or if you want to use {@link MenuGroup}s.
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link MultiSelect} instance for method chaining
     */
    public B applyToMenuList(Consumer<MenuList> consumer) {
        if (menu == null) {
            add(multiSelectMenu());
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

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        menu.unselectAllItems();
        updateMenuToggle(emptyList());
        if (fireEvent) {
            menu.fireMultiSelection();
        }
    }

    public void selectIdentifiers(List<String> identifiers) {
        selectItems(identifiers.stream()
                .map(identifier -> menu().findItem(identifier))
                .filter(Objects::nonNull)
                .collect(toList()), true);
    }

    public void selectIdentifiers(List<String> identifiers, boolean fireEvent) {
        selectItems(identifiers.stream()
                .map(identifier -> menu().findItem(identifier))
                .filter(Objects::nonNull)
                .collect(toList()), fireEvent);
    }

    public void selectItems(List<MenuItem> items) {
        selectItems(items, true);
    }

    public void selectItems(List<MenuItem> items, boolean fireEvent) {
        if (menu != null && menuToggle != null && !items.isEmpty()) {
            for (MenuItem item : items) {
                menu.select(item, true, false);
            }
            if (fireEvent) {
                menu.fireMultiSelection();
            }
        }
        updateMenuToggle(items);
    }
}
