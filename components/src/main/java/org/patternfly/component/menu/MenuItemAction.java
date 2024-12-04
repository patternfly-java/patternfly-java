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

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.Aria;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.icon.IconSets.fas.star;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.favorite;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;

public class MenuItemAction extends MenuSubComponent<HTMLButtonElement, MenuItemAction> implements
        HasIdentifier<HTMLButtonElement, MenuItemAction>,
        ComponentIcon<HTMLButtonElement, MenuItemAction> {

    // ------------------------------------------------------ factory

    public static MenuItemAction menuItemAction(String identifier) {
        return new MenuItemAction(identifier, null, false);
    }

    public static MenuItemAction menuItemAction(String identifier, PredefinedIcon icon) {
        return new MenuItemAction(identifier, icon.element(), false);
    }

    public static MenuItemAction menuItemAction(String identifier, Element icon) {
        return new MenuItemAction(identifier, icon, false);
    }

    static MenuItemAction favoriteMenuItemAction(String identifier) {
        return new MenuItemAction(identifier, star().element(), true)
                .css(modifier(favorite))
                .aria(Aria.label, "not starred");
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mia";

    private final String identifier;
    private final HTMLElement iconContainer;
    private final List<ComponentHandler<MenuItemAction>> handler;
    public MenuItem menuItem;

    MenuItemAction(String identifier, Element icon, boolean favorite) {
        super(SUB_COMPONENT_NAME, button(ButtonType.button).css(component(Classes.menu, item, action))
                .attr(tabindex, -1)
                .data(Dataset.identifier, identifier)
                .add(span().css(component(Classes.menu, item, action, Classes.icon))
                        .add(icon))
                .element());
        this.identifier = identifier;
        this.iconContainer = querySelector(By.classname(component(Classes.menu, item, action, Classes.icon)));
        this.handler = new ArrayList<>();

        if (!favorite) {
            on(click, e -> {
                Menu menu = lookupComponent();
                menu.actionHandler.forEach(ah -> ah.onAction(menu, menuItem, this));
            });
        }
    }

    // constructor must only be used to clone an item action of a favorite item!
    MenuItemAction(Menu menu, MenuItem favoriteItem, MenuItemAction sourceItemAction,
            HTMLButtonElement itemActionElement) {
        super(SUB_COMPONENT_NAME, itemActionElement);
        this.identifier = Id.build("fav", sourceItemAction.identifier);
        this.iconContainer = querySelector(By.classname(component(Classes.menu, Classes.item, action, icon)));
        this.menuItem = favoriteItem;
        this.handler = new ArrayList<>();
        for (ComponentHandler<MenuItemAction> h : sourceItemAction.handler) {
            onClick(h);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuItemAction icon(Element icon) {
        removeIcon();
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public MenuItemAction removeIcon() {
        removeChildrenFrom(iconContainer);
        return this;
    }

    @Override
    public MenuItemAction that() {
        return this;
    }

    // ------------------------------------------------------ events

    public MenuItemAction onClick(ComponentHandler<MenuItemAction> handler) {
        this.handler.add(handler);
        return on(click, e -> handler.handle(e, this));
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }
}
