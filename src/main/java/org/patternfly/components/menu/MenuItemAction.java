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
package org.patternfly.components.menu;

import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.patternfly.components.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Constants.tabindex;
import static org.patternfly.layout.Classes.action;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.menu;

public class MenuItemAction extends SubComponent<HTMLButtonElement, MenuItemAction> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    public static MenuItemAction menuItemAction(String id) {
        return new MenuItemAction(id, null);
    }

    public static MenuItemAction menuItemAction(String id, String icon) {
        return new MenuItemAction(id, icon);
    }

    // ------------------------------------------------------ instance

    public final String id;
    private final HTMLElement iconContainer;
    public MenuItem menuItem;
    MenuItemActionClickHandler onClick;

    MenuItemAction(String id, String icon) {
        super(button()
                .css(component(menu, item, action))
                .attr(tabindex, -1)
                .add(span().css(component(menu, item, action, Classes.icon))
                        .add(i().css(icon)))
                .element());
        this.id = id;
        this.iconContainer = find(By.classname(component(menu, item, action, Classes.icon)));
    }

    // constructor must only be used to clone an item action of a favorite item!
    MenuItemAction(Menu menu, MenuItem favoriteItem, MenuItemAction sourceItemAction,
            HTMLButtonElement itemActionElement) {
        super(itemActionElement);
        this.id = Id.build("fav", sourceItemAction.id);
        this.iconContainer = find(By.classname(component(Classes.menu, Classes.item, action, Classes.icon)));
        this.menuItem = favoriteItem;
        if (sourceItemAction.onClick != null) {
            onClick(sourceItemAction.onClick);
        }
        // Don't call passMenu(menu) here. It's called by MenuItem(Menu, MenuItem, MenuItemType) constructor!
    }

    @Override
    public void passMenu(Menu menu) {
        on(click, e -> menu.handleItemAction(this));
    }

    @Override
    public MenuItemAction that() {
        return this;
    }

    public MenuItemAction icon(String icon) {
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(add(i().css(icon)).element());
        return this;
    }

    public MenuItemAction icon(HTMLElement icon) {
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    public MenuItemAction onClick(MenuItemActionClickHandler onClick) {
        this.onClick = onClick;
        return on(click, e -> onClick.onClick(e, this));
    }

}
