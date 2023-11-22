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

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.component.form.Checkbox;
import org.patternfly.core.Aria;
import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.SelectionMode;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

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
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.menu.MenuItemAction.menuItemAction;
import static org.patternfly.component.menu.MenuItemType.checkbox;
import static org.patternfly.component.menu.MenuItemType.link;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.danger;
import static org.patternfly.layout.Classes.description;
import static org.patternfly.layout.Classes.disabled;
import static org.patternfly.layout.Classes.externalIcon;
import static org.patternfly.layout.Classes.favorite;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.screenReader;
import static org.patternfly.layout.Classes.select;
import static org.patternfly.layout.PredefinedIcon.externalLinkAlt;
import static org.patternfly.layout.PredefinedIcon.star;

public class MenuItem extends SubComponent<HTMLElement, MenuItem>
        implements Disabled<HTMLElement, MenuItem>, ComponentReference<Menu> {

    // ------------------------------------------------------ factory

    /**
     * Create a new menu item with type {@link MenuItemType#action}.
     */
    public static MenuItem actionMenuItem(String id, String text) {
        return new MenuItem(id, text, MenuItemType.action);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem linkMenuItem(String id, String text, String href) {
        return new MenuItem(id, text, link);
    }

    /**
     * Create a new menu item with type {@link MenuItemType#link}.
     */
    public static MenuItem checkboxMenuItem(String id, String text) {
        return new MenuItem(id, text, checkbox);
    }

    /**
     * Create a new menu item with the specified type. Use this method, if you want full control over the text and type.
     */
    public static MenuItem menuItem(String id, MenuItemType type) {
        return new MenuItem(id, null, MenuItemType.action);
    }

    // ------------------------------------------------------ instance

    public final String id;
    final MenuItemType itemType;
    private final HTMLElement itemElement;
    private final HTMLElement mainElement;
    private final HTMLElement textElement;
    MenuItem sourceItem;
    MenuItem favoriteItem;
    MenuItemAction favoriteItemAction;
    private boolean initialSelection;
    private Checkbox checkboxComponent;
    private MenuItemAction itemAction;
    private HTMLElement iconElement;
    private HTMLElement descriptionElement;
    private HTMLElement selectIcon;
    private ComponentHandler<MenuItem> handler;
    private Menu menu;

    MenuItem(String id, String text, MenuItemType itemType) {
        super(li().css(component(Classes.menu, list, item))
                .attr(role, "none")
                .element());
        this.id = id;
        this.itemType = itemType;

        HTMLContainerBuilder<? extends HTMLElement> itemBuilder;
        if (itemType == MenuItemType.action || itemType == link) {
            itemBuilder = itemType == MenuItemType.action ? button().attr(tabindex, 0) : a().attr(tabindex, -1);
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
                            .add(checkboxComponent = checkbox(checkboxId)))
                    .add(textElement = span().css(component(Classes.menu, item, Classes.text))
                            .element())
                    .element());

        } else {
            // create a pseudo-element, but don't add it
            itemBuilder = div()
                    .add(mainElement = div()
                            .add(textElement = div().element())
                            .element());
            Logger.unknown(ComponentType.Menu, "Unknown menu item type " + itemType);
        }

        add(itemElement = itemBuilder.css(component(Classes.menu, item)).element());
        if (text != null) {
            textElement.textContent = text;
        }
    }

    // constructor must only be used to clone an item as favorite item!
    MenuItem(Menu menu, MenuItem item, MenuItemType itemType) {
        super(((HTMLElement) item.element().cloneNode(true)));

        this.id = Id.build("fav", item.id);
        this.itemType = itemType;
        this.favoriteItem = null;
        this.initialSelection = item.initialSelection;
        this.itemElement = find(By.classname(component(Classes.menu, Classes.item)));
        this.mainElement = find(By.classname(component(Classes.menu, Classes.item, main)));
        this.textElement = find(By.classname(component(Classes.menu, Classes.item, Classes.text)));
        this.iconElement = find(By.classname(component(Classes.menu, Classes.item, icon)));
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

        passComponent(menu);
    }

    @Override
    public void passComponent(Menu menu) {
        this.menu = menu;
        if (itemAction != null) {
            itemAction.passComponent(menu);
            // redo initial disabled call for item action
            if (element().classList.contains(modifier(disabled))) {
                itemAction.element().disabled = true;
            }
        }
        switch (menu.menuType) {
            case menu:
            case dropdown:
                itemElement.setAttribute(role, "menuitem");
                break;
            case select:
                itemElement.setAttribute(role, "option");
                break;
        }
        if (menu.selectionMode == single || menu.selectionMode == SelectionMode.click) {
            itemElement.addEventListener(click.name, e -> menu.select(this, true, true));
        } else if (menu.selectionMode == multi) {
            itemElement.addEventListener(click.name, e -> {
                if (itemType == checkbox) {
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
            // see also : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#usecapture
        }
        if (initialSelection) {
            menu.select(this, true, false);
        }
    }

    @Override
    public Menu mainComponent() {
        return menu;
    }

    // ------------------------------------------------------ add

    public MenuItem addAction(MenuItemAction itemAction) {
        return add(itemAction);
    }

    // override to assure internal wiring
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
            Logger.unsupported(ComponentType.Menu,
                    "Ignore href on menu item '" + id + "' with type '" + itemType.name() + "'");
        }
        return this;
    }

    public MenuItem external() {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).target = "_blank";
            mainElement.appendChild(span().css(component(Classes.menu, item, externalIcon))
                    .add(inlineIcon(externalLinkAlt))
                    .element());
            mainElement.appendChild(span().css(screenReader)
                    .textContent("(opens a new window)")
                    .element());
        } else {
            Logger.unsupported(ComponentType.Menu,
                    "Ignore external flag on menu item '" + id + "' with type '" + itemType.name() + "'");
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

    public MenuItem icon(PredefinedIcon predefinedIcon) {
        return icon(predefinedIcon.className);
    }

    public MenuItem icon(String iconClass) {
        if (iconElement != null) {
            removeChildrenFrom(iconElement);
            iconElement.appendChild(inlineIcon(iconClass).element());
        } else {
            insertFirst(mainElement, iconElement = span().css(component(Classes.menu, item, icon))
                    .add(inlineIcon(iconClass))
                    .element());
        }
        return this;
    }

    public MenuItem icon(HTMLElement element) {
        if (iconElement != null) {
            removeChildrenFrom(iconElement);
            iconElement.appendChild(element);
        } else {
            insertFirst(mainElement, iconElement = span().css(component(Classes.menu, item, icon))
                    .add(element)
                    .element());
        }
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

    // ------------------------------------------------------ internal

    MenuItemAction addFavoriteItemAction() {
        String actionId = Id.build(id, "mark-as-favorite");
        favoriteItemAction = menuItemAction(actionId, star.className)
                .css(modifier(favorite))
                .aria(Aria.label, "not starred");
        // Don't use add(markAsFavorite); !!
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
                        .add(inlineIcon(PredefinedIcon.check))
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
}
