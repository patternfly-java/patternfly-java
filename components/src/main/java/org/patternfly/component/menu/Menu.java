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
import java.util.List;

import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.SelectionMode.group;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuHeader.menuHeader;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.favorited;
import static org.patternfly.style.Classes.flyout;
import static org.patternfly.style.Classes.menu;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.scrollable;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.MaxHeight;

/**
 * A menu is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user
 * needs to choose between multiple values, options, or actions. A menu is most often paired with a {@link MenuToggle} as its
 * trigger, but can also be used inline or can be attached to other interactable elements to toggle it open and close.
 * <p>
 * {@snippet class = MenuDemo region = menu}
 *
 * @see <a href="https://www.patternfly.org/components/menu">https://www.patternfly.org/components/menu</a>
 */
public class Menu extends BaseComponent<HTMLDivElement, Menu> implements Plain<HTMLDivElement, Menu> {

    // ------------------------------------------------------ factory

    public static Menu menu(MenuType menuType, SelectionMode selectionMode) {
        return new Menu(menuType, selectionMode);
    }

    // ------------------------------------------------------ instance

    final String menuName;
    final MenuType menuType;
    final SelectionMode selectionMode;
    final List<MenuActionHandler> actionHandler;
    boolean favorites;
    private MenuContent content;
    private final List<SelectHandler<MenuItem>> selectHandler;
    private final List<MultiSelectHandler<Menu, MenuItem>> multiSelectHandler;

    Menu(MenuType menuType, SelectionMode selectionMode) {
        super(ComponentType.Menu, div().css(component(menu)).element());
        // TODO Without this workaround the menu "flickers" when showing.
        //  This could be solved by replacing the show/hide alg with an add/remove alg in the Popper class
        componentVar(component(menu), "TransitionDuration").applyTo(this).set(0);
        this.menuType = menuType;
        this.selectionMode = selectionMode;
        this.menuName = Id.unique(componentType().id, "name"); // a common name for the checkboxes
        this.actionHandler = new ArrayList<>();
        this.selectHandler = new ArrayList<>();
        this.multiSelectHandler = new ArrayList<>();
        storeComponent();
    }

    // ------------------------------------------------------ add

    /**
     * Shortcut for {@code addHeader(menuHeader(text))}
     */
    public Menu addHeader(String text) {
        return addHeader(menuHeader(text));
    }

    public Menu addHeader(MenuHeader header) {
        return add(header);
    }

    public Menu addContent(MenuContent content) {
        return add(content);
    }

    // override to ensure internal wiring
    public Menu add(MenuContent content) {
        this.content = content;
        add(content.element());
        return this;
    }

    /**
     * Shortcut for {@code addFooter(menuFooter(text))}
     */
    public Menu addFooter(String text) {
        return addFooter(menuFooter(text));
    }

    public Menu addFooter(MenuFooter footer) {
        return add(footer);
    }

    public Menu addSearchInput(MenuSearchInput searchInput) {
        return addSearchInput(searchInput, false);
    }

    public Menu addSearchInput(MenuSearchInput searchInput, boolean noSeparator) {
        add(searchInput);
        if (!noSeparator) {
            addDivider();
        }
        return this;
    }

    public Menu addDivider() {
        return add(divider(hr));
    }

    // ------------------------------------------------------ builder

    public Menu flyout() {
        return css(modifier(flyout));
    }

    public Menu scrollable() {
        return css(modifier(scrollable));
    }

    public Menu favorites() {
        favorites = true;
        return this;
    }

    /** Sets the {@code --pf-v5-c-menu__content--MaxHeight} variable to the specified value */
    public Menu height(String height) {
        return componentVar(component(menu, Classes.content), MaxHeight).applyTo(this).set(height);
    }

    @Override
    public Menu that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Menu onSingleSelect(SelectHandler<MenuItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public Menu onMultiSelect(MultiSelectHandler<Menu, MenuItem> selectHandler) {
        this.multiSelectHandler.add(selectHandler);
        return this;
    }

    public Menu onAction(MenuActionHandler actionHandler) {
        this.actionHandler.add(actionHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(findItem(itemId), true, true);
    }

    public void select(String itemId, boolean selected) {
        select(findItem(itemId), selected, true);
    }

    public void select(String itemId, boolean selected, boolean fireEvent) {
        select(findItem(itemId), selected, fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true, true);
    }

    public void select(MenuItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(MenuItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if (selectionMode == click || selectionMode == single) {
                unselectAllItems();
            } else if (selectionMode == group) {
                unselectAllInGroup(item);
            }
            switch (selectionMode) {
                case click:
                    item.makeCurrent(selected);
                    break;
                case single:
                case group:
                case multi:
                    item.markSelected(selected);
                    break;
            }
            if (fireEvent) {
                selectHandler.forEach(sh -> sh.onSelect(new Event(""), item, selected));
                if (!multiSelectHandler.isEmpty()) {
                    fireMultiSelection();
                }
            }
        }
    }

    // ------------------------------------------------------ internal

    MenuItem findItem(String id) {
        MenuItem menuItem = null;
        if (content != null) {
            for (Iterator<MenuGroup> iterator = content.groups.iterator(); iterator.hasNext() && menuItem == null; ) {
                MenuGroup group = iterator.next();
                if (group.list != null) {
                    menuItem = group.list.items.get(id);
                }
            }
            if (menuItem == null) {
                if (content.list != null) {
                    menuItem = content.list.items.get(id);
                }
            }
        }
        return menuItem;
    }

    List<MenuItem> items() {
        List<MenuItem> items = new ArrayList<>();
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    items.addAll(group.list.items.values());
                }
            }
            if (content.list != null) {
                items.addAll(content.list.items.values());
            }
        }
        return items;
    }

    // called by regular menu items
    void toggleFavorite(MenuItem item) {
        if (content != null && item.favoriteItemAction != null) {
            item.favoriteItemAction.element().classList.toggle(modifier(favorited));
            boolean isFavorite = item.favoriteItemAction.element().classList.contains(modifier(favorited));
            if (isFavorite) {
                MenuItem favoriteItem = new MenuItem(this, item, item.itemType);
                content.addToFavorites(favoriteItem);
            } else {
                if (item.favoriteItem != null) {
                    content.removeFromFavorites(item.favoriteItem);
                    item.favoriteItem = null;
                }
            }
        }
    }

    // called by cloned favorite items
    void removeFavorite(MenuItem favoriteItem) {
        if (content != null && favoriteItem.sourceItem != null && favoriteItem.sourceItem.favoriteItemAction != null) {
            content.removeFromFavorites(favoriteItem);
            MenuItem sourceItem = favoriteItem.sourceItem;
            sourceItem.favoriteItemAction.element().classList.remove(modifier(favorited));
            sourceItem.favoriteItem = null;
        }
    }

    void fireMultiSelection() {
        List<MenuItem> selection = items()
                .stream()
                .filter(MenuItem::isSelected)
                .collect(toList());
        multiSelectHandler.forEach(msh -> msh.onSelect(new Event(""), this, selection));
    }

    void unselectAllItems() {
        for (MenuItem menuItem : items()) {
            if (selectionMode == click) {
                menuItem.makeCurrent(false);
            } else {
                menuItem.markSelected(false);
            }
        }
    }

    private void unselectAllInGroup(MenuItem item) {
        MenuGroup groupOfItem = null;
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    if (group.list.items.containsKey(item.identifier())) {
                        groupOfItem = group;
                        break;
                    }
                }
            }
        }
        if (groupOfItem != null) {
            for (MenuItem menuItem : groupOfItem.list.items.values()) {
                menuItem.markSelected(false);
            }
        }
    }
}
