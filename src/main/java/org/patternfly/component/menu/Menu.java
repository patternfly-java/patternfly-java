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
import org.jboss.elemento.By;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Modifiers.Plain;
import org.patternfly.core.SelectionMode;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuHeader.menuHeader;
import static org.patternfly.core.SelectionMode.none;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.favorited;
import static org.patternfly.layout.Classes.flyout;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.scrollable;
import static org.patternfly.layout.Classes.select;

/**
 * A menu is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user
 * needs to choose between multiple values, options, or actions. A menu is most often paired with a {@link MenuToggle} as its
 * trigger, but can also be used inline or can be attached to other interactable elements to toggle it open and close.
 * <p>
 * {@snippet class = MenuDemo region = menu}
 *
 * @see <a href="https://www.patternfly.org/components/menu/html">https://www.patternfly.org/components/menu/html</a>
 */
public class Menu extends BaseComponent<HTMLDivElement, Menu> implements Attachable,
        Plain<HTMLDivElement, Menu> {

    // ------------------------------------------------------ factory methods

    public static Menu menu() {
        return new Menu(MenuType.menu, none);
    }

    public static Menu menu(SelectionMode selectionMode) {
        return new Menu(MenuType.menu, selectionMode);
    }

    // ------------------------------------------------------ instance

    private static final By MENU_ITEMS = By.classname(component(menu, item));
    private static final By SELECT_ICONS = By.classname(component(menu, item, select, icon));

    final MenuType menuType;
    final SelectionMode selectionMode;
    boolean favorites;
    private SelectHandler<MenuItem> selectHandler;
    private MultiSelectHandler<MenuItem> multiSelectHandler;
    private MenuActionHandler actionHandler;
    private MenuContent content;
    private MenuSearchInput searchInput;

    Menu(MenuType menuType, SelectionMode selectionMode) {
        super(div().css(component(menu)).element(), ComponentType.Menu);
        this.menuType = menuType;
        this.selectionMode = selectionMode;
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (content != null) {
            content.passComponent(this);
        }
        if (searchInput != null) {
            searchInput.passComponent(this);
        }
    }

    @Override
    public Menu that() {
        return this;
    }

    // ------------------------------------------------------ add methods

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

    // override to assure internal wiring
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

    // override to assure internal wiring
    public Menu add(MenuSearchInput searchInput) {
        this.searchInput = searchInput;
        add(searchInput.element());
        return this;
    }

    public Menu addDivider() {
        return add(divider(hr));
    }

    // ------------------------------------------------------ events

    public Menu onSingleSelect(SelectHandler<MenuItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    public Menu onMultiSelect(MultiSelectHandler<MenuItem> selectHandler) {
        this.multiSelectHandler = selectHandler;
        return this;
    }

    public Menu onAction(MenuActionHandler actionHandler) {
        this.actionHandler = actionHandler;
        return this;
    }

    // ------------------------------------------------------ select

    public void select(String itemId) {
        select(findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(findItem(itemId), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        select(item, true, fireEvent);
    }

    public void select(MenuItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if (selectionMode == none || selectionMode == single) {
                unselectAllItems();
            }
            switch (selectionMode) {
                case none:
                    item.makeCurrent(selected);
                    break;
                case single:
                case multi:
                    item.markSelected(selected);
                    break;
            }
            if (fireEvent) {
                if (selectHandler != null) {
                    selectHandler.onSelect(item);
                }
                if (multiSelectHandler != null) {
                    List<MenuItem> selection = items()
                            .stream()
                            .filter(MenuItem::isSelected)
                            .collect(toList());
                    multiSelectHandler.onSelect(selection);
                }
            }
        }
    }

    private void unselectAllItems() {
        if (selectionMode == none) {
            for (HTMLElement element : findAll(MENU_ITEMS)) {
                element.setAttribute(Aria.current, false);
            }
        } else if (selectionMode == single) {
            for (HTMLElement element : findAll(MENU_ITEMS)) {
                element.setAttribute(Aria.selected, false);
                element.classList.remove(modifier(Classes.selected));
            }
            for (HTMLElement element : findAll(SELECT_ICONS)) {
                failSafeRemoveFromParent(element);
            }
        }
    }

    // ------------------------------------------------------ modifiers

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
        return style("--pf-v5-c-menu__content--MaxHeight:" + height);
    }

    // ------------------------------------------------------ internals

    MenuItem findItem(String id) {
        MenuItem menuItem = null;
        if (content != null) {
            for (MenuGroup group : content.groups) {
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

    void handleItemAction(MenuItemAction itemAction) {
        if (actionHandler != null && itemAction != null) {
            actionHandler.onAction(itemAction);
        }
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
}
