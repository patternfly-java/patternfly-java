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

import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.component.badge.Badge;

import elemental2.dom.Node;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MultiSelectMenu.multiSelectMenu;

/**
 * A select component to select multiple items from a list.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The select uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues. CSS {@code position-try-fallbacks} handles menu
 * flipping when there is not enough space.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class NativeMultiSelect extends NativeMenuToggleMenu<NativeMultiSelect> {

    // ------------------------------------------------------ factory

    public static NativeMultiSelect nativeMultiSelect(String text) {
        return new NativeMultiSelect(MenuToggle.menuToggle(text).addBadge(badge(0).read()));
    }

    public static NativeMultiSelect nativeMultiSelect(MenuToggle menuToggle) {
        return new NativeMultiSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    private MenuContent menuContent;
    private MenuList menuList;

    NativeMultiSelect(MenuToggle menuToggle) {
        super(ComponentType.NativeMultiSelect, menuToggle);
        if (menuToggle.badge() != null) {
            menuToggle.badge().style("visibility", "hidden", true);
        }
        stayOpen((e, mt, m) -> menu != null && menu.element().contains(((Node) e.target)));
    }

    // ------------------------------------------------------ add

    @Override
    public NativeMultiSelect add(Menu menu) {
        super.add(menu);
        if (menu.selectionMode == SelectionMode.multi) {
            menu.onMultiSelect((e, m, items) -> updateMenuToggle(items));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link NativeMultiSelect}. If the
     * menu, menu content, or menu list is not yet initialized, they will be created as part of this method.
     * <p>
     * This method simplifies the process of adding menu items to the component. It is a shortcut for creating and adding a
     * {@link MultiSelectMenu}, {@link MenuContent}, and {@link MenuList} in a single step. Don't use this method if you need to
     * us another menu type, want to customize the menu, content or list or if you want to use {@link MenuGroup}s.
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link NativeMultiSelect} instance for method chaining
     */
    public NativeMultiSelect applyToMenuList(Consumer<MenuList> consumer) {
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
        return this;
    }

    @Override
    public NativeMultiSelect that() {
        return this;
    }

    // ------------------------------------------------------ api

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

    // ------------------------------------------------------ internal

    private void updateMenuToggle(List<MenuItem> items) {
        Badge badge = menuToggle.badge();
        if (badge != null) {
            int size = items.size();
            badge.count(size);
            if (size == 0) {
                badge.style("visibility", "hidden", true);
            } else {
                badge.style("visibility", "unset");
            }
        }
    }
}