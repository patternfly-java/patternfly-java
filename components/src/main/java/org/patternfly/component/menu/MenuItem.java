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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ButtonType;
import org.jboss.elemento.By;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentIconAndText;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.IconPosition;
import org.patternfly.component.SelectionMode;
import org.patternfly.component.form.Checkbox;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Element;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.group;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.menu.MenuItemType.async;
import static org.patternfly.component.menu.MenuItemType.checkbox;
import static org.patternfly.component.menu.MenuItemType.link;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.menuitem;
import static org.patternfly.core.Roles.none;
import static org.patternfly.core.Roles.option;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.icon.IconSets.fas.externalLinkAlt;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.danger;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.disabled;
import static org.patternfly.style.Classes.externalIcon;
import static org.patternfly.style.Classes.favorite;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.load;
import static org.patternfly.style.Classes.loading;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.select;
import static org.patternfly.style.Size.lg;

public class MenuItem extends MenuSubComponent<HTMLElement, MenuItem> implements
        Attachable,
        ComponentContext<HTMLElement, MenuItem>,
        ComponentIcon<HTMLElement, MenuItem>,
        ComponentIconAndText<HTMLElement, MenuItem>,
        Disabled<HTMLElement, MenuItem>,
        ElementTextDelegate<HTMLElement, MenuItem>,
        HasIdentifier<HTMLElement, MenuItem> {

    // ------------------------------------------------------ factory

    /**
     * Create a new menu item with type {@link MenuItemType#action}.
     */
    public static MenuItem menuItem(String identifier, String text) {
        return new MenuItem(identifier, text, MenuItemType.action, null);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem linkMenuItem(String identifier, String text, String href) {
        return new MenuItem(identifier, text, link, null).href(href);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem checkboxMenuItem(String identifier, String text) {
        return new MenuItem(identifier, text, checkbox, null);
    }

    public static MenuItem asyncMenuItem(String identifier, String text,
            Function<MenuList, Promise<List<MenuItem>>> loadItems) {
        return new MenuItem(identifier, text, async, loadItems);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuItem.class.getName());
    static final String SUB_COMPONENT_NAME = "";

    final MenuItemType itemType;
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement itemElement;
    private final HTMLElement mainElement;
    private final HTMLElement textElement;
    private final List<ComponentHandler<MenuItem>> handler;
    MenuItem sourceItem;
    MenuItem favoriteItem;
    MenuItemAction markAsFavorite;
    private String loadingText;
    private double loadingTimeout;
    private boolean initialSelection;
    private Checkbox checkboxComponent;
    private MenuItemAction itemAction;
    private HTMLElement iconContainer;
    private HTMLElement descriptionElement;
    private HTMLElement selectIcon;

    MenuItem(String identifier, String text, MenuItemType itemType, Function<MenuList, Promise<List<MenuItem>>> loadItems) {
        super(SUB_COMPONENT_NAME, li().css(component(Classes.menu, list, item))
                .attr(role, none)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.itemType = itemType;
        this.data = new HashMap<>();
        this.handler = new ArrayList<>();

        HTMLContainerBuilder<? extends HTMLElement> itemBuilder;
        if (itemType == MenuItemType.action || itemType == link || itemType == async) {
            itemBuilder = itemType == MenuItemType.action || itemType == async
                    ? button(ButtonType.button).attr(tabindex, -1)
                    : a().attr(tabindex, -1);
            itemBuilder.add(mainElement = span().css(component(Classes.menu, item, main))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else if (itemType == checkbox) {
            String checkboxId = Id.unique(identifier, "check");
            itemBuilder = label()
                    .apply(l -> {
                        l.htmlFor = checkboxId;
                        l.tabIndex = -1;
                    })
                    .add(mainElement = span().css(component(Classes.menu, item, main))
                            .add(span().css(component(Classes.menu, item, Classes.check))
                                    .add(checkboxComponent = checkbox(checkboxId, checkboxId)
                                            .standalone()
                                            .applyTo(checkbox -> checkbox.tabIndex(-1))))
                            .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                                    .element())
                            .element());

        } else {
            // create a pseudo-element but don't add it
            itemBuilder = div()
                    .add(mainElement = div()
                            .add(textElement = div().element())
                            .element());
            logger.error("Unknown menu item type %s for %o", itemType, element());
        }

        add(itemElement = itemBuilder.css(component(Classes.menu, item))
                .on(click, e -> {
                    if (!isAriaDisabled(((HTMLElement) e.currentTarget))) {
                        handler.forEach(h -> h.handle(e, this));
                    }
                })
                .element());
        if (text != null) {
            textElement.textContent = text;
        }

        if (itemType == async) {
            css(modifier(load));
            if (loadItems == null) {
                logger.error("No load items promise for menu item %o defined!", element());
            } else {
                loadItems(loadItems);
            }
        } else if (loadItems != null) {
            logger.warn("Ignore load items promise for menu item %o with type '%s'", element(), itemType.name());
        }

        Attachable.register(this, this);
    }

    // constructor must only be used to clone an item as a favorite item!
    MenuItem(Menu menu, MenuItem sourceItem) {
        super(SUB_COMPONENT_NAME, ((HTMLElement) sourceItem.element().cloneNode(true)));
        this.identifier = Id.build(sourceItem.identifier, "favorite");
        this.itemType = sourceItem.itemType;
        this.data = new HashMap<>();
        this.data.putAll(sourceItem.data);
        this.handler = new ArrayList<>();
        this.handler.addAll(sourceItem.handler);
        this.initialSelection = false;
        this.sourceItem = sourceItem;
        this.favoriteItem = null;
        sourceItem.favoriteItem = this;

        this.itemElement = querySelector(By.classname(component(Classes.menu, item)));
        this.itemElement.addEventListener(click.name, e -> {
            if (!isAriaDisabled(((HTMLElement) e.currentTarget))) {
                handler.forEach(h -> h.handle(e, sourceItem));
            }
        });
        this.mainElement = querySelector(By.classname(component(Classes.menu, item, main)));
        this.textElement = querySelector(By.classname(component(Classes.menu, item, Classes.text)));
        this.iconContainer = querySelector(By.classname(component(Classes.menu, item, icon)));
        this.descriptionElement = querySelector(By.classname(component(Classes.menu, item, description)));
        HTMLElement favoriteItemActionElement = querySelector(
                By.classname(component(Classes.menu, item, Classes.action))
                        .and(By.classname(modifier(favorite))));
        if (favoriteItemActionElement != null) {
            favoriteItemActionElement.addEventListener(click.name, e -> menu.removeFavorite(this));
        }

        if (sourceItem.itemAction != null) {
            HTMLElement element = querySelector(By.classname(component(Classes.menu, item, Classes.action)));
            if (element != null) {
                this.itemAction = new MenuItemAction(sourceItem, sourceItem.itemAction, element);
            }
        }
        attachSelectionMode(menu, sourceItem);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        if (itemAction != null) {
            // redo the initially disabled call for the item action
            if (element().classList.contains(modifier(disabled))) {
                itemAction.action.disabled(true);
            }
        }
        switch (menu.menuType) {
            case menu:
                itemElement.setAttribute(role, menuitem);
                break;
            case select:
                itemElement.setAttribute(role, option);
                break;
            case checkbox:
                element().setAttribute(role, menuitem);
                break;
        }
        if (checkboxComponent != null) {
            checkboxComponent.inputElement().name(menu.menuName);
        }
        attachSelectionMode(menu, this);
    }

    private void attachSelectionMode(Menu menu, MenuItem menuItem) {
        if (menu.selectionMode == single || menu.selectionMode == SelectionMode.click) {
            itemElement.addEventListener(click.name, e -> {
                if (!isAriaDisabled(((HTMLElement) e.currentTarget))) {
                    menu.select(menuItem, true, true);
                }
            });
        } else if (menu.selectionMode == group || menu.selectionMode == multi) {
            itemElement.addEventListener(click.name, e -> {
                if (!isAriaDisabled(((HTMLElement) e.currentTarget))) {
                    if (itemType == checkbox) {
                        if (((HTMLElement) e.target).id.equals(checkboxComponent.inputElement().element().id)) {
                            menu.select(menuItem, isSelected(), true);
                        } else {
                            e.preventDefault();
                            menu.select(menuItem, !isSelected(), true);
                        }
                    } else {
                        menu.select(menuItem, !isSelected(), true);
                    }
                }
            }, itemType == checkbox); // useCapture is true for checkbox!
            // see also: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture
        }
        if (initialSelection) {
            menu.select(menuItem, true, false);
        }
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ add

    public MenuItem addAction(MenuItemAction itemAction) {
        return add(itemAction);
    }

    // override to ensure internal wiring
    public MenuItem add(MenuItemAction itemAction) {
        this.itemAction = itemAction;
        this.itemAction.menuItem = this;
        add(itemAction.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public MenuItem ariaDisabled() {
        return ariaDisabled(true);
    }

    public MenuItem ariaDisabled(boolean ariaDisabled) {
        classList().toggle(modifier(Classes.ariaDisabled), ariaDisabled);
        itemElement.setAttribute(Aria.disabled, Boolean.toString(ariaDisabled));
        return this;
    }

    public MenuItem danger() {
        return css(modifier(danger));
    }

    @Override
    public MenuItem disabled(boolean disabled) {
        switch (itemType) {
            case action:
            case async:
                ((HTMLButtonElement) itemElement).disabled = disabled;
                break;
            case link:
                itemElement.setAttribute(Aria.disabled, disabled);
                break;
            case checkbox:
                checkboxComponent.disabled(disabled);
                break;
        }
        if (itemAction != null) {
            itemAction.action.disabled(disabled);
        }
        return Disabled.super.disabled(disabled);
    }

    public MenuItem description(String description) {
        if (descriptionElement != null) {
            descriptionElement.textContent = description;
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(Classes.menu, item, Classes.description))
                    .text(description)
                    .element());
        }
        return this;
    }

    public MenuItem description(HTMLElement element) {
        if (descriptionElement != null) {
            removeChildrenFrom(descriptionElement);
            descriptionElement.appendChild(element);
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(Classes.menu, item, description))
                    .add(element)
                    .element());
        }
        return this;
    }

    public MenuItem external() {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).target = "_blank";
            mainElement.appendChild(span().css(component(Classes.menu, item, externalIcon))
                    .add(externalLinkAlt())
                    .element());
            mainElement.appendChild(span().css(screenReader)
                    .text("(opens a new window)")
                    .element());
        } else {
            logger.warn("Ignore external flag for menu item %o with type '%s'", element(), itemType.name());
        }
        return this;
    }

    public MenuItem href(String href) {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).href = href;
        } else {
            logger.warn("Ignore href for menu item %o with type '%s'", element(), itemType.name());
        }
        return this;
    }

    @Override
    public MenuItem icon(Element icon) {
        if (iconContainer != null) {
            removeChildrenFrom(iconContainer);
            iconContainer.appendChild(icon);
        } else {
            insertFirst(mainElement, iconContainer = span().css(component(Classes.menu, item, Classes.icon))
                    .add(icon)
                    .element());
        }
        return this;
    }

    @Override
    public MenuItem iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    @Override
    public MenuItem removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    public MenuItem selected() {
        initialSelection = true;
        return this;
    }

    @Override
    public <T> MenuItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    public MenuItem text(HTMLElement element) {
        removeChildrenFrom(textElement);
        textElement.appendChild(element);
        return this;
    }

    @Override
    public MenuItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Registers an event handler to be invoked when the menu item is clicked. If the menu item has been marked as a favorite,
     * the handler will be called with the original menu item, <em>not</em> the favorite item.
     *
     * @param handler the event handler to associate with this menu item. This handler is invoked with the event and the current
     *                menu item instance when a click event occurs.
     * @return the current {@code MenuItem} instance, allowing for method chaining.
     */
    public MenuItem onClick(ComponentHandler<MenuItem> handler) {
        this.handler.add(handler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    // ------------------------------------------------------ internal

    void makeCurrent(boolean current) {
        itemElement.setAttribute(Aria.current, current);
    }

    void markSelected(boolean selected) {
        if (itemType == checkbox) {
            checkboxComponent.value(selected);
        } else {
            itemElement.setAttribute(Aria.selected, selected);
            if (selected) {
                itemElement.classList.add(modifier(Classes.selected));
            } else {
                itemElement.classList.remove(modifier(Classes.selected));
            }
        }
        if (selectIcon == null) {
            selectIcon = span().css(component(Classes.menu, item, select, icon))
                    .add(check())
                    .element();
        }
        if (selected) {
            if (!mainElement.contains(selectIcon)) {
                mainElement.appendChild(selectIcon);
            }
        } else {
            failSafeRemoveFromParent(selectIcon);
        }
    }

    boolean isSelected() {
        if (itemType == checkbox) {
            return checkboxComponent.value();
        } else {
            return Boolean.parseBoolean(itemElement.getAttribute(Aria.selected));
        }
    }

    private boolean isAriaDisabled(HTMLElement element) {
        return Boolean.parseBoolean(element.getAttribute(Aria.disabled));
    }

    private void loadItems(Function<MenuList, Promise<List<MenuItem>>> loadItems) {
        itemElement.addEventListener(click.name, e -> {
            clearTimeout(loadingTimeout);
            MenuList menuList = lookupSubComponent(MenuList.SUB_COMPONENT_NAME);
            loadingTimeout = setTimeout(__ -> startLoading(), LOADING_TIMEOUT);
            loadItems.apply(menuList).then(loadedItems -> {
                        stopLoading();
                        menuList.removeItem(this);
                        for (MenuItem item : loadedItems) {
                            menuList.addItem(item);
                        }
                        return null;
                    })
                    .catch_(error -> {
                        stopLoading();
                        text(loadingText);
                        logger.error("Unable to load menu items for %o: %s", element(), error);
                        return null;
                    });
        });
    }

    private void startLoading() {
        loadingText = text(); // store in case of an error
        removeChildrenFrom(textElement);
        classList().remove(modifier(load));
        classList().add(modifier(loading));
        textElement.appendChild(spinner(lg).element());
    }

    private void stopLoading() {
        clearTimeout(loadingTimeout);
        removeChildrenFrom(textElement);
    }
}
