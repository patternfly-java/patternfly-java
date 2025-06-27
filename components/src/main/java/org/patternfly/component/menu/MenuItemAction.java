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

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLElementBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.button.Button;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.menu;

public class MenuItemAction extends MenuSubComponent<HTMLElement, MenuItemAction> implements
        HasIdentifier<HTMLElement, MenuItemAction>,
        ComponentIcon<HTMLElement, MenuItemAction> {

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

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mia";

    private final String identifier;
    private final List<ComponentHandler<MenuItemAction>> handler;
    final Button action;
    public MenuItem menuItem;

    MenuItemAction(String identifier, Element icon, boolean favorite) {
        super(SUB_COMPONENT_NAME, div().css(component(menu, item, Classes.action))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.handler = new ArrayList<>();

        add(action = button().icon(icon).plain());
        action.onClick((e, b) -> handler.forEach(h -> h.handle(e, this)));
        if (!favorite) {
            action.onClick((e, b) -> {
                Menu menu = lookupComponent();
                menu.actionHandler.forEach(ah -> ah.onAction(menu, menuItem, this));
            });
        }
    }

    // constructor must only be used to clone an item action of a favorite item!
    MenuItemAction(MenuItem sourceItem, MenuItemAction sourceItemAction, HTMLElement rootElement) {
        super(SUB_COMPONENT_NAME, rootElement);
        this.identifier = Id.build(sourceItemAction.identifier, "favorite");
        this.handler = new ArrayList<>();
        this.handler.addAll(sourceItemAction.handler);
        this.menuItem = sourceItem;
        this.action = sourceItemAction.action;

        HTMLElement actionElement = querySelector(By.classname(component(button)));
        if (actionElement != null) {
            HTMLElementBuilder<HTMLElement> eb = wrapHtmlElement(actionElement);
            eb.on(click, e -> handler.forEach(h -> h.handle(e, sourceItemAction)));
            eb.on(click, e -> {
                Menu menu = lookupComponent();
                menu.actionHandler.forEach(ah -> ah.onAction(menu, menuItem, sourceItemAction));
            });
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuItemAction icon(Element icon) {
        action.icon(icon);
        return this;
    }

    @Override
    public MenuItemAction removeIcon() {
        action.removeIcon();
        return this;
    }

    @Override
    public MenuItemAction that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Registers a click event handler for the menu item action. If the menu item has been marked as a favorite, the handler
     * will be called with the original menu item action, <em>not</em> the favorite item action.
     *
     * @param handler the handler to be executed when the menu item action is clicked. The handler is a {@link ComponentHandler}
     *                which processes the event and the associated menu item action.
     * @return the {@code MenuItemAction} instance to allow method chaining.
     */
    public MenuItemAction onClick(ComponentHandler<MenuItemAction> handler) {
        this.handler.add(handler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }
}
