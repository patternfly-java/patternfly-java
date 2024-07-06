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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ButtonType;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.IconPosition;
import org.patternfly.component.SelectionMode;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithIconAndText;
import org.patternfly.component.WithText;
import org.patternfly.component.form.Checkbox;
import org.patternfly.core.Aria;
import org.patternfly.core.DataHolder;
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
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.menu.MenuItemAction.favoriteMenuItemAction;
import static org.patternfly.component.menu.MenuItemType.async;
import static org.patternfly.component.menu.MenuItemType.checkbox;
import static org.patternfly.component.menu.MenuItemType.link;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.menuitem;
import static org.patternfly.core.Roles.none;
import static org.patternfly.core.Roles.option;
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
import static org.patternfly.style.Timeouts.LOADING_TIMEOUT;

public class MenuItem extends MenuSubComponent<HTMLElement, MenuItem> implements
        DataHolder<HTMLElement, MenuItem>,
        Disabled<HTMLElement, MenuItem>,
        WithText<HTMLElement, MenuItem>,
        WithIcon<HTMLElement, MenuItem>,
        WithIconAndText<HTMLElement, MenuItem>,
        Attachable {

    // ------------------------------------------------------ factory

    /**
     * Create a new menu item with type {@link MenuItemType#action}.
     */
    public static MenuItem actionMenuItem(String id, String text) {
        return new MenuItem(id, text, MenuItemType.action, null);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem linkMenuItem(String id, String text, String href) {
        return new MenuItem(id, text, link, null).href(href);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem checkboxMenuItem(String id, String text) {
        return new MenuItem(id, text, checkbox, null);
    }

    public static MenuItem asyncMenuItem(String id, String text, Function<MenuList, Promise<List<MenuItem>>> loadItems) {
        return new MenuItem(id, text, async, loadItems);
    }

    /**
     * Create a new menu item with the specified type. Use this method, if you want full control over the text and type.
     */
    public static MenuItem menuItem(String id, MenuItemType type) {
        return new MenuItem(id, null, MenuItemType.action, null);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuItem.class.getName());
    static final String SUB_COMPONENT_NAME = "";

    public final String id;
    final MenuItemType itemType;
    private final Map<String, Object> data;
    private final HTMLElement itemElement;
    private final HTMLElement mainElement;
    private final HTMLElement textElement;
    MenuItem sourceItem;
    MenuItem favoriteItem;
    MenuItemAction favoriteItemAction;
    private String loadingText;
    private double loadingTimeout;
    private boolean initialSelection;
    private Checkbox checkboxComponent;
    private MenuItemAction itemAction;
    private HTMLElement iconContainer;
    private HTMLElement descriptionElement;
    private HTMLElement selectIcon;
    private ComponentHandler<MenuItem> handler;

    MenuItem(String id, String text, MenuItemType itemType, Function<MenuList, Promise<List<MenuItem>>> loadItems) {
        super(SUB_COMPONENT_NAME, li().css(component(Classes.menu, list, item))
                .attr(role, none)
                .element());
        this.id = id;
        this.itemType = itemType;
        this.data = new HashMap<>();

        HTMLContainerBuilder<? extends HTMLElement> itemBuilder;
        if (itemType == MenuItemType.action || itemType == link || itemType == async) {
            itemBuilder = itemType == MenuItemType.action || itemType == MenuItemType.async
                    ? button(ButtonType.button).attr(tabindex, 0)
                    : a().attr(tabindex, -1);
            itemBuilder.add(mainElement = span().css(component(Classes.menu, item, main))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else if (itemType == checkbox) {
            String checkboxId = Id.build(id, "check");
            itemBuilder = label()
                    .apply(l -> l.htmlFor = checkboxId);
            itemBuilder.add(mainElement = span().css(component(Classes.menu, item, main))
                    .add(span().css(component(Classes.menu, item, Classes.check))
                            .add(checkboxComponent = checkbox(checkboxId, checkboxId)))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else {
            // create a pseudo-element, but don't add it
            itemBuilder = div()
                    .add(mainElement = div()
                            .add(textElement = div().element())
                            .element());
            logger.error("Unknown menu item type %s for %o", itemType, element());
        }

        add(itemElement = itemBuilder.css(component(Classes.menu, item)).element());
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

    // constructor must only be used to clone an item as favorite item!
    MenuItem(Menu menu, MenuItem item, MenuItemType itemType) {
        super(SUB_COMPONENT_NAME, ((HTMLElement) item.element().cloneNode(true)));

        this.id = Id.build("fav", item.id);
        this.data = new HashMap<>(item.data);
        this.itemType = itemType;
        this.favoriteItem = null;
        this.initialSelection = item.initialSelection;
        this.itemElement = find(By.classname(component(Classes.menu, Classes.item)));
        this.mainElement = find(By.classname(component(Classes.menu, Classes.item, main)));
        this.textElement = find(By.classname(component(Classes.menu, Classes.item, Classes.text)));
        this.iconContainer = find(By.classname(component(Classes.menu, Classes.item, icon)));
        this.descriptionElement = find(By.classname(component(Classes.menu, Classes.item, Classes.description)));
        // checkbox must not be used for cloned favorite items!

        if (item.handler != null) {
            onClick(item.handler);
        }
        if (item.itemAction != null) {
            HTMLElement element = find(By.classname(component(Classes.menu, Classes.item, Classes.action)));
            if (element instanceof HTMLButtonElement) {
                this.itemAction = new MenuItemAction(menu, this, item.itemAction, ((HTMLButtonElement) element));
            }
        }

        this.sourceItem = item;
        item.favoriteItem = this;
        HTMLElement favoriteItemActionElement = find(
                By.classname(component(Classes.menu, Classes.item, Classes.action))
                        .and(By.classname(modifier(favorite))));
        if (favoriteItemActionElement != null) {
            favoriteItemActionElement.addEventListener(click.name, e -> menu.removeFavorite(this));
        }
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        if (itemAction != null) {
            // redo initial disabled call for item action
            if (element().classList.contains(modifier(disabled))) {
                itemAction.element().disabled = true;
            }
        }
        switch (menu.menuType) {
            case menu:
            case dropdown:
                itemElement.setAttribute(role, menuitem);
                break;
            case select:
                itemElement.setAttribute(role, option);
                break;
        }
        if (checkboxComponent != null) {
            checkboxComponent.inputElement().name(menu.menuName);
        }
        if (menu.selectionMode == single || menu.selectionMode == SelectionMode.click) {
            itemElement.addEventListener(click.name, e -> menu.select(this, true, true));
        } else if (menu.selectionMode == multi) {
            itemElement.addEventListener(click.name, e -> {
                if (itemType == checkbox) {
                    //noinspection ObjectEquality,EqualsBetweenInconvertibleTypes
                    if (e.target == checkboxComponent.inputElement()) {
                        menu.select(this, isSelected(), true);
                    } else {
                        e.preventDefault();
                        menu.select(this, !isSelected(), true);
                    }
                } else {
                    menu.select(this, !isSelected(), true);
                }
            }, itemType == checkbox); // useCapture is true for checkbox!
            // see also: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture
        }
        if (initialSelection) {
            menu.select(this, true, false);
        }
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

    public MenuItem danger() {
        return css(modifier(danger));
    }

    public MenuItem selected() {
        initialSelection = true;
        return this;
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
            itemAction.element().disabled = disabled;
        }
        return Disabled.super.disabled(disabled);
    }

    @Override
    public MenuItem text(String text) {
        textElement.textContent = text;
        return this;
    }

    public MenuItem text(HTMLElement element) {
        removeChildrenFrom(textElement);
        textElement.appendChild(element);
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

    public MenuItem external() {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).target = "_blank";
            mainElement.appendChild(span().css(component(Classes.menu, item, externalIcon))
                    .add(externalLinkAlt())
                    .element());
            mainElement.appendChild(span().css(screenReader)
                    .textContent("(opens a new window)")
                    .element());
        } else {
            logger.warn("Ignore external flag for menu item %o with type '%s'", element(), itemType.name());
        }
        return this;
    }

    public MenuItem description(String description) {
        if (descriptionElement != null) {
            descriptionElement.textContent = description;
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(Classes.menu, item, Classes.description))
                    .textContent(description)
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
    public MenuItem removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    @Override
    public MenuItem iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    @Override
    public <T> MenuItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public MenuItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public MenuItem onClick(ComponentHandler<MenuItem> handler) {
        this.handler = handler;
        itemElement.addEventListener(click.name, e -> handler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return Elements.textNode(textElement);
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

    MenuItemAction addFavoriteItemAction() {
        String actionId = Id.build(id, "mark-as-favorite");
        favoriteItemAction = favoriteMenuItemAction(actionId);
        element().appendChild(favoriteItemAction.element());
        return favoriteItemAction;
    }

    void makeCurrent(boolean current) {
        itemElement.setAttribute(Aria.current, current);
    }

    void markSelected(boolean selected) {
        if (itemType == checkbox) {
            checkboxComponent.value(selected);
        } else {
            if (selectIcon == null) {
                selectIcon = span().css(component(Classes.menu, item, select, icon))
                        .add(check())
                        .element();
            }
            itemElement.setAttribute(Aria.selected, selected);
            if (selected) {
                itemElement.classList.add(modifier(Classes.selected));
                mainElement.appendChild(selectIcon);
            } else {
                itemElement.classList.remove(modifier(Classes.selected));
                failSafeRemoveFromParent(selectIcon);
            }
        }
    }

    boolean isSelected() {
        if (itemType == checkbox) {
            return checkboxComponent.value();
        } else {
            return Boolean.parseBoolean(itemElement.getAttribute(Aria.selected));
        }
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
        Elements.removeChildrenFrom(textElement);
        classList().remove(modifier(load));
        classList().add(modifier(loading));
        textElement.appendChild(spinner(lg).element());
    }

    private void stopLoading() {
        clearTimeout(loadingTimeout);
        Elements.removeChildrenFrom(textElement);
    }
}
