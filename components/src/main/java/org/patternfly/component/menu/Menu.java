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
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.EventType;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Plain;

import elemental2.core.JsArray;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;
import elemental2.dom.NodeList;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.ArrowDown;
import static org.jboss.elemento.Key.ArrowLeft;
import static org.jboss.elemento.Key.ArrowRight;
import static org.jboss.elemento.Key.ArrowUp;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Spacebar;
import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.SelectionMode.group;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuHeader.menuHeader;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.disabled;
import static org.patternfly.style.Classes.divider;
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
public class Menu extends BaseComponent<HTMLDivElement, Menu> implements
        Attachable,
        Plain<HTMLDivElement, Menu> {

    // ------------------------------------------------------ factory

    public static Menu menu(MenuType menuType, SelectionMode selectionMode) {
        return new Menu(menuType, selectionMode);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Menu.class.getName());

    final String menuName;
    final MenuType menuType;
    final SelectionMode selectionMode;
    final List<MenuActionHandler> actionHandler;
    boolean favorites;
    MenuContent content;
    private final List<SelectHandler<MenuItem>> selectHandler;
    private final List<MultiSelectHandler<Menu, MenuItem>> multiSelectHandler;
    private MenuItem noResultsItem;
    private HandlerRegistration keyHandler;

    Menu(MenuType menuType, SelectionMode selectionMode) {
        super(ComponentType.Menu, div().css(component(menu)).element());
        this.menuType = menuType;
        this.selectionMode = selectionMode;
        this.menuName = Id.unique(componentType().id, "name"); // a common name for the checkboxes
        this.actionHandler = new ArrayList<>();
        this.selectHandler = new ArrayList<>();
        this.multiSelectHandler = new ArrayList<>();
        // TODO Without this workaround the menu "flickers" when showing.
        //  This could be solved by replacing the show/hide alg with an add/remove alg in the Popper class
        componentVar(component(menu), "TransitionDuration").applyTo(this).set(0);
        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        allowTabFirstItem();
        keyHandler = EventType.bind(window, keydown, this::keyHandler);
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (keyHandler != null) {
            keyHandler.removeHandler();
        }
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

    public Menu addSearch(MenuSearch search) {
        return add(search);
    }

    public Menu addDivider() {
        return add(divider(hr));
    }

    // ------------------------------------------------------ builder

    public Menu favorites() {
        favorites = true;
        return this;
    }

    public Menu flyout() {
        return css(modifier(flyout));
    }

    /** Sets the {@code --pf-v5-c-menu__content--MaxHeight} variable to the specified value */
    public Menu height(String height) {
        return componentVar(component(menu, Classes.content), MaxHeight).applyTo(this).set(height);
    }

    public Menu scrollable() {
        return css(modifier(scrollable));
    }

    @Override
    public Menu that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Menu onAction(MenuActionHandler actionHandler) {
        this.actionHandler.add(actionHandler);
        return this;
    }

    public Menu onSingleSelect(SelectHandler<MenuItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public Menu onMultiSelect(MultiSelectHandler<Menu, MenuItem> selectHandler) {
        this.multiSelectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    /**
     * Sets the `tabIndex` property of the first focusable item within a menu to `0`, allowing it to be reachable via the Tab
     * key. Focusable items are identified as non-disabled `<button>` or `<a>` elements within a `<ul>` container. This method
     * ensures accessibility by enabling keyboard navigation to the first actionable item in the menu. It should be called after
     * the menu items have changed (e.g., after filtering or searching items).
     */
    public void allowTabFirstItem() {
        HTMLElement first = querySelector(By.selector("ul button:not(:disabled), ul a:not(:disabled)"));
        if (first != null) {
            first.tabIndex = 0;
        }
    }

    /**
     * Checks if the menu contains any asynchronous items that are currently in a pending status. This method inspects the
     * {@linkplain MenuList menu lists} to determine if any {@linkplain MenuList#status() status} is
     * {@linkplain org.patternfly.core.AsyncStatus#pending pending}.
     *
     * @return {@code true} if any {@link MenuList} has a {@linkplain MenuList#status() status} of
     * {@linkplain org.patternfly.core.AsyncStatus#pending pending}, otherwise {@code false}.
     */
    public boolean hasAsyncItems() {
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    if (group.list.status() == pending) {
                        return true;
                    }
                }
            }
            return content.list != null && content.list.status() == pending;
        }
        return false;
    }

    public void reload() {
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    group.list.reload();
                }
            }
            if (content.list != null) {
                content.list.reload();
            }
        }
    }

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

    public MenuItem findItem(String id) {
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

    // ------------------------------------------------------ internal

    void search(SearchFilter searchFilter, Function<String, MenuItem> noResultsProvider, String value) {
        // no search if one of the menu lists is pending
        if (hasAsyncItems()) {
            return;
        }

        int visibleItems = 0;
        for (MenuItem menuItem : items()) {
            boolean visible = searchFilter.test(menuItem, value);
            setVisible(menuItem, visible);
            if (visible) {
                visibleItems++;
            }
        }
        failSafeRemoveFromParent(noResultsItem);
        if (visibleItems == 0) {
            if (content != null && content.list != null) {
                noResultsItem = noResultsProvider.apply(value);
                // Don't use content.list.addItem(noResultsItem) here
                // The no-result item should not be part of the item map
                content.list.add(noResultsItem.element());
            }
        } else {
            allowTabFirstItem();
        }
    }

    void clearSearch() {
        failSafeRemoveFromParent(noResultsItem);
        for (MenuItem menuItem : items()) {
            setVisible(menuItem, true);
        }
        allowTabFirstItem();
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
        if (content != null && item.markAsFavorite != null) {
            item.markAsFavorite.element().classList.toggle(modifier(favorited));
            boolean isFavorite = item.markAsFavorite.element().classList.contains(modifier(favorited));
            if (isFavorite) {
                MenuItem favItem = new MenuItem(this, item);
                content.addToFavorites(favItem);
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
        if (content != null && favoriteItem.sourceItem != null && favoriteItem.sourceItem.markAsFavorite != null) {
            content.removeFromFavorites(favoriteItem);
            MenuItem sourceItem = favoriteItem.sourceItem;
            sourceItem.markAsFavorite.element().classList.remove(modifier(favorited));
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

    Promise<Void> loadAll() {
        if (content != null) {
            List<Promise<Iterable<MenuItem>>> promises = new ArrayList<>();
            for (MenuGroup group : content.groups) {
                if (group.list != null && group.list.status() == pending) {
                    promises.add(group.list.load());
                }
            }
            if (content.list != null && content.list.status() == pending) {
                promises.add(content.list.load());
            }
            return Promise.all(promises.toArray(new Promise[0])).then((__) -> Promise.resolve((Void) null));
        }
        return Promise.resolve((Void) null);
    }

    // ------------------------------------------------------ keyboard navigation

    private void keyHandler(KeyboardEvent event) {
        HTMLElement activeElement = (HTMLElement) document.activeElement;
        if (element().contains(((Node) event.target))) {
            JsArray<HTMLElement> navigableElements = navigableElement(element());
            if (navigableElements.length == 0) {
                logger.warn("Menu %o has no navigable elements. Keyboard navigation will be ignored.", element());
            }

            if (Enter.match(event)) {
                event.preventDefault();
                event.stopImmediatePropagation();
                activeElement.click();
            } else if (Spacebar.match(event)) {
                event.preventDefault();
                event.stopImmediatePropagation();
                activeElement.click();
            }
            handleArrows(event, activeElement, navigableElements);
        }
    }

    private void handleArrows(KeyboardEvent event, HTMLElement activeElement, JsArray<HTMLElement> navigableElements) {
        HTMLElement moveTarget = null;
        boolean arrowUp = ArrowUp.match(event);
        boolean arrowDown = ArrowDown.match(event);
        boolean arrowLeft = ArrowLeft.match(event);
        boolean arrowRight = ArrowRight.match(event);

        if (arrowUp || arrowDown) {
            event.preventDefault();
            event.stopImmediatePropagation();

            int currentIndex;
            for (int index = 0; index < navigableElements.length; index++) {
                HTMLElement element = navigableElements.at(index);
                if (isActiveElement(element)) {
                    int increment = 0;
                    while (moveTarget == null &&
                            increment < navigableElements.length &&
                            increment * -1 < navigableElements.length) {
                        increment = arrowUp ? increment - 1 : increment + 1;
                        currentIndex = index + increment;
                        if (currentIndex >= navigableElements.length) {
                            currentIndex = 0;
                        }
                        if (currentIndex < 0) {
                            currentIndex = navigableElements.length - 1;
                        }
                        moveTarget = getFocusableElement(navigableElements.at(currentIndex));
                    }
                }
            }

        } else {
            if (arrowLeft || arrowRight) {
                event.preventDefault();
                event.stopImmediatePropagation();

                JsArray<String> validSiblingTags = JsArray.of("BUTTON", "A");
                for (int i = 0; i < navigableElements.length; i++) {
                    HTMLElement element = navigableElements.at(i);
                    if (isActiveElement(element)) {
                        NodeList<Element> activeRow = element.querySelectorAll(validSiblingTags.join(","));
                        if (activeRow.length > 0) {
                            HTMLElement nextSibling = (HTMLElement) document.activeElement;
                            while (nextSibling != null) {
                                boolean isDirectChildOfNavigableElement = nextSibling.parentElement == element;
                                HTMLElement nextSiblingMainElement = isDirectChildOfNavigableElement ? nextSibling : ((HTMLElement) nextSibling.parentElement);
                                nextSibling = (HTMLElement) (arrowLeft
                                        ? nextSiblingMainElement.previousElementSibling
                                        : nextSiblingMainElement.nextElementSibling);
                                if (nextSibling != null) {
                                    if (validSiblingTags.includes(nextSibling.tagName)) {
                                        moveTarget = nextSibling;
                                        break;
                                    }
                                    // For cases where the validSiblingTag is inside a div wrapper
                                    if (nextSibling.firstElementChild != null && validSiblingTags.includes(
                                            nextSibling.firstElementChild.tagName)) {
                                        moveTarget = (HTMLElement) nextSibling.firstElementChild;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (moveTarget != null) {
            activeElement.tabIndex = -1;
            moveTarget.tabIndex = 0;
            moveTarget.focus();
        }
    }

    private JsArray<HTMLElement> navigableElement(HTMLElement element) {
        JsArray<HTMLElement> elements = JsArray.from(element.querySelectorAll("li").values());
        return elements.filter((e, i) ->
                isVisible(e) && !(e.classList.contains(modifier(disabled)) || e.classList.contains(component(divider))));
    }

    private HTMLElement getFocusableElement(HTMLElement navigableElement) {
        HTMLElement focusableElement = null;
        if ("DIV".equals(navigableElement.tagName)) {
            focusableElement = (HTMLElement) navigableElement.querySelector("input");
        }

        if (focusableElement == null) {
            HTMLElement firstChild = (HTMLElement) navigableElement.firstChild;
            if (firstChild != null) {
                if ("LABEL".equals(firstChild.tagName)) {
                    focusableElement = (HTMLElement) navigableElement.querySelector("input");
                } else if ("DIV".equals(firstChild.tagName)) {
                    focusableElement = (HTMLElement) navigableElement.querySelector("a, button, input");
                } else {
                    focusableElement = firstChild;
                }
            }
        }
        return focusableElement;
    }

    private boolean isActiveElement(HTMLElement element) {
        return document.activeElement.closest("li") == element ||
                document.activeElement.parentElement == element ||
                document.activeElement.closest(component(menu, Classes.search)) == element ||
                (document.activeElement.closest("ol") != null &&
                        document.activeElement.closest("ol").firstChild == element);
    }
}
