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

import org.patternfly.component.ComponentType;
import org.patternfly.popper.TriggerAction;

import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuType.select;

/**
 * A select list enables users to select one or more items from a list. Use a select list when options are dynamic or variable.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class SingleSelect extends MenuToggleMenu<SingleSelect> {

    // ------------------------------------------------------ factory

    public static SingleSelect singleSelect(String text) {
        return new SingleSelect(MenuToggle.menuToggle(text));
    }

    public static SingleSelect singleSelect(MenuToggle menuToggle) {
        return new SingleSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    private boolean customSelectHandler;

    SingleSelect(MenuToggle menuToggle) {
        super(ComponentType.SingleSelect, menuToggle, TriggerAction.click);
        this.customSelectHandler = false;
    }

    // ------------------------------------------------------ add

    @Override
    public SingleSelect add(Menu menu) {
        if (menu.menuType == select && menu.selectionMode == single && !customSelectHandler) {
            menu.onSingleSelect((e, menuItem, s) -> menuToggle.text(menuItem.text()));
        }
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    public SingleSelect customSelectHandler() {
        this.customSelectHandler = true;
        return this;
    }

    @Override
    public SingleSelect that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(menu.findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(menu.findItem(itemId), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            menuToggle.text(item.text());
        }
    }
}
