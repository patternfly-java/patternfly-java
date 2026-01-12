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

import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuType;

import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuList.menuList;

@SuppressWarnings("unused")
public class MenuDemo {

    public void menuDemo() {
        // @start region = menu
        Menu menu = menu(MenuType.menu, click)
                .scrollable()
                .height("200px")
                .addHeader("Header")
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(MenuItem.menuItem("1", "Item 1"))
                                .addItem(MenuItem.menuItem("2", "Item 2"))
                                .addDivider()
                                .addItem(MenuItem.linkMenuItem("3", "Item 3", "#third"))))
                .addFooter(menuFooter()
                        .add(button("Footer")));
        // @end region = menu
    }

    public void groupsDemo() {
        // @start region = groups
        Menu menu = menu(MenuType.menu, click)
                .addContent(menuContent()
                        .addGroup(menuGroup()
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("1", "Item 1"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 1")
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("11", "Group 1 - Item 1"))
                                        .addItem(MenuItem.menuItem("12", "Group 1 - Item 2"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 2")
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("21", "Group 2 - Item 1"))
                                        .addItem(MenuItem.menuItem("22", "Group 2 - Item 2")))));
        // @end region = groups
    }
}
