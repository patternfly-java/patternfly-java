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
import java.util.EnumSet;
import java.util.List;

import org.patternfly.component.ComponentType;
import org.patternfly.component.badge.Badge;
import org.patternfly.popper.TriggerAction;

import static org.patternfly.component.badge.Badge.badge;

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
        super(ComponentType.MultiSelect, menuToggle, EnumSet.of(TriggerAction.stayOpen));
        if (menuToggle.badge() != null) {
            menuToggle.badge().style("visibility", "hidden", true);
        }
    }

    // ------------------------------------------------------ add

    @Override
    public MultiSelect add(Menu menu) {
        menu.onMultiSelect((e, m, items) -> {
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
        });
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiSelect that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void selectIds(List<String> itemIds) {
        List<MenuItem> menuItems = new ArrayList<>();
        for (String itemId : itemIds) {
            menuItems.add(menu.findItem(itemId));
        }
        selectItems(menuItems, true);
    }

    public void selectIds(List<String> itemIds, boolean fireEvent) {
        List<MenuItem> menuItems = new ArrayList<>();
        for (String itemId : itemIds) {
            menuItems.add(menu.findItem(itemId));
        }
        selectItems(menuItems, fireEvent);
    }

    public void selectItems(List<MenuItem> items) {
        selectItems(items, true);
    }

    public void selectItems(List<MenuItem> items, boolean fireEvent) {
        if (menu != null && menuToggle != null && !items.isEmpty()) {
            for (MenuItem item : items) {
                menu.select(item, true, false);
            }
            if (fireEvent) {
                menu.fireMultiSelection();
            }
        }
    }
}
