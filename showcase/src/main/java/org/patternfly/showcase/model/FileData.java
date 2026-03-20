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
package org.patternfly.showcase.model;

import org.jboss.elemento.Id;
import org.patternfly.component.button.Button;
import org.patternfly.extension.finder.FinderItemActions;

import elemental2.core.JsArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.extension.finder.FinderItemActions.finderItemActions;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.icon.PredefinedIcon.predefinedIcon;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class FileData {

    public String id;
    public String name;
    public String description;
    public String icon;
    public JsArray<String> actions;
    public JsPropertyMap<String> meta;
    public JsArray<FileData> children;

    @JsOverlay
    public final FinderItemActions itemActions() {
        if (actions != null && actions.length > 0) {
            FinderItemActions fia = finderItemActions();
            fia.addButton(iconOrText(actions.getAt(0)));
            if (actions.length > 2) { // all actions should be text only
                fia.addDropdown(dropdown(ellipsisV(), "kebab dropdown toggle")
                        .addMenu(dropdownMenu()
                                .addContent(menuContent()
                                        .addList(menuList().run(ml -> {
                                            for (int i = 1; i < actions.length; i++) {
                                                ml.addItem(menuItem(Id.build(actions.getAt(i)), actions.getAt(i)));
                                            }
                                        })))));
            } else {
                for (int i = 1; i < actions.length; i++) {
                    fia.addButton(iconOrText(actions.getAt(i)));
                }
            }
            return fia;
        }
        return null;
    }

    @JsOverlay
    final Button iconOrText(String value) {
        if (value.startsWith("fa") && value.contains(".")) {
            return button(predefinedIcon(value)).plain();
        } else {
            return button(value).plain();
        }
    }
}
