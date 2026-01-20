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

import org.patternfly.component.ComponentType;
import org.patternfly.component.badge.Badge;
import org.patternfly.popper.TriggerAction;

import static java.util.Collections.emptyList;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.menu.MenuType.checkbox;

/**
 * A select list enables users to select one or more items from a list. Use a select list when options are dynamic or variable.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class MultiSelect extends MenuToggleMenu<MultiSelect> {

    // ------------------------------------------------------ factory

    public static MultiSelect multiSelect(String text) {
        return new MultiSelect(MenuToggle.menuToggle(text).addBadge(badge(0).read()));
    }

    public static MultiSelect multiSelect(MenuToggle menuToggle) {
        return new MultiSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    MultiSelect(MenuToggle menuToggle) {
        super(ComponentType.MultiSelect, menuToggle, TriggerAction.stayOpen);
        if (menuToggle.badge() != null) {
            menuToggle.badge().style("visibility", "hidden", true);
        }
    }

    // ------------------------------------------------------ add

    @Override
    public MultiSelect add(Menu menu) {
        if (menu.menuType == checkbox && menu.selectionMode == multi) {
            menu.onMultiSelect((e, m, items) -> updateBadge(items));
        }
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiSelect that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        menu.unselectAllItems();
        updateBadge(emptyList());
        if (fireEvent) {
            menu.fireMultiSelection();
        }
    }

    public void selectIdentifiers(List<String> identifiers) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, true, true);
        updateBadge(items);
    }

    public void selectIdentifiers(List<String> identifiers, boolean fireEvent) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, true, fireEvent);
        updateBadge(items);
    }

    public void selectItems(List<MenuItem> items) {
        makeSelection(items, true, true);
        updateBadge(items);
    }

    public void selectItems(List<MenuItem> items, boolean fireEvent) {
        makeSelection(items, true, fireEvent);
        updateBadge(items);
    }

    public void unselectIdentifiers(List<String> identifiers) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, false, true);
        updateBadge(items);
    }

    public void unselectIdentifiers(List<String> identifiers, boolean fireEvent) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, false, fireEvent);
        updateBadge(items);
    }

    public void unselectItems(List<MenuItem> items) {
        makeSelection(items, false, true);
        updateBadge(items);
    }

    public void unselectItems(List<MenuItem> items, boolean fireEvent) {
        makeSelection(items, false, fireEvent);
        updateBadge(items);
    }

    // ------------------------------------------------------ internal

    private void updateBadge(List<MenuItem> items) {
        Badge badge = menuToggle.badge();
        if (badge != null) {
            int size = items.size();
            badge.count(size);
            if (size == 0) {
                badge.style("visibility", "hidden", true);
            } else {
                badge.style("visibility", "unset");
            }
        }
    }
}
