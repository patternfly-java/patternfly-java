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

import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.popper.TriggerAction;

import elemental2.dom.HTMLElement;

import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuType.select;

/**
 * Represents an abstract implementation of a menu-based toggle component that supports single-selection. This class serves as a
 * base for creating specialized single-menu toggle components, providing functionality for managing selected menu items and
 * updating the toggle display.
 *
 * @param <B> the type of the builder for this component
 */
abstract class SingleMenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends MenuToggleMenu<B> {

    // ------------------------------------------------------ instance

    boolean defaultSelectHandler;

    SingleMenuToggleMenu(ComponentType componentType, MenuToggle menuToggle, TriggerAction triggerAction) {
        super(componentType, menuToggle, triggerAction);
        this.defaultSelectHandler = true;
    }

    abstract void updateMenuToggle(MenuItem item);

    // ------------------------------------------------------ add

    @Override
    public B add(Menu menu) {
        super.add(menu);
        if (menu.menuType == select && menu.selectionMode == single && defaultSelectHandler) {
            menu.onSingleSelect((e, menuItem, s) -> updateMenuToggle(menuItem));
        }
        return that();
    }

    // ------------------------------------------------------ builder

    public B noDefaultSelectHandler() {
        this.defaultSelectHandler = false;
        return that();
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        List<MenuItem> selectedItems = menu.selectedItems();
        menu.clearSearch();
        menu.unselectAllItems();
        menuToggle.text("");
        if (fireEvent && !selectedItems.isEmpty()) {
            menu.fireSingleSelection(selectedItems.get(0), false);
        }
    }

    public void select(String identifier) {
        select(menu().findItem(identifier), true);
    }

    public void select(String identifier, boolean fireEvent) {
        select(menu().findItem(identifier), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            if (!fireEvent && defaultSelectHandler) {
                updateMenuToggle(item);
            }
        }
    }
}
