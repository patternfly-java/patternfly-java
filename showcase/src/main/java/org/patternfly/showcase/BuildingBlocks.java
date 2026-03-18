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
package org.patternfly.showcase;

import org.jboss.elemento.Id;
import org.patternfly.component.menu.Dropdown;

import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.icon.IconSets.fas.ellipsisV;

public class BuildingBlocks {

    public static Dropdown mixedKebab(String baseId) {
        return dropdown(ellipsisV(), "Column actions")
                .addMenu(dropdownMenu()
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(menuItem(Id.build(baseId, "item-0"), "Action"))
                                        .addItem(linkMenuItem(Id.build(baseId, "item-1"),
                                                "Link", "#" + Id.build(baseId, "item-1")))
                                        .addItem(menuItem(Id.build(baseId, "item-2"),
                                                "Disabled action")
                                                .disabled())
                                        .addItem(linkMenuItem(Id.build(baseId, "item-3"),
                                                "Disabled link", "#" + Id.build(baseId, "item-3"))
                                                .disabled())
                                        .addDivider()
                                        .addItem(menuItem(Id.build(baseId, "item-4"),
                                                "Separated action"))
                                        .addItem(linkMenuItem(Id.build(baseId, "item-5"),
                                                "Separated link", "#" + Id.build(baseId, "item-5"))))));
    }
}
