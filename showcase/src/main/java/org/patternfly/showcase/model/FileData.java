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
import org.jboss.elemento.IsElement;
import org.patternfly.extension.finder.FinderItemActions;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

import static java.util.Arrays.asList;
import static java.util.Arrays.copyOfRange;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleAction.menuToggleAction;
import static org.patternfly.component.menu.MenuToggleType.split;
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
            for (String action : actions.asList()) {
                var actionElement = action(action);
                if (actionElement != null) {
                    fia.add(actionElement);
                }
            }
            return fia;
        }
        return null;
    }

    @JsOverlay
    final IsElement<? extends HTMLElement> action(String value) {
        if (value.contains(":")) {
            String prefix = value.substring(0, value.indexOf(":"));
            String suffix = value.substring(value.indexOf(":") + 1);
            switch (prefix) {
                case "control":
                    return button(suffix).control().small();
                case "icon":
                    return button(predefinedIcon(suffix)).plain().small();
                case "link":
                    return button(suffix).link().small();
                case "link-inline":
                    return button(suffix).link().inline().small();
                case "plain":
                    return button(suffix).plain().small();
                case "kebab":
                    return dropdown(menuToggle(ellipsisV()).small())
                            .applyToMenuList(list -> list
                                    .addItems(asList(suffix.split("\\|")), text ->
                                            menuItem(Id.build(text), text)));
                case "split":
                    String[] actions = suffix.split("\\|");
                    String first = actions[0];
                    String[] rest = copyOfRange(actions, 1, actions.length);
                    return dropdown(menuToggle(split).small()
                            .addAction(menuToggleAction(first)))
                            .applyToMenuList(list -> list
                                    .addItems(asList(rest), text ->
                                            menuItem(Id.build(text), text)));
            }
        }
        return null;
    }
}
