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
package org.patternfly.showcase.component;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.component.menu.DropdownMenu;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleType.split;
import static org.patternfly.icon.IconSets.fas.cog;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Assets.avatarLight;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/menus/dropdown", title = "Dropdown")
public class DropdownComponent extends SnippetPage {

    public DropdownComponent() {
        super(components.get("dropdown"));

        startExamples(p()
                .add(Elements.code("Dropdown"))
                .add(" builds off of the Menu component suite to wrap commonly used properties and functions for a dropdown menu."));
        addSnippet(new Snippet("dropdown-basic", "Basic dropdown",
                code("dropdown-basic"), () ->
                // @code-start:dropdown-basic
                div()
                        .add(dropdown("Dropdown")
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-basic
        ));

        addSnippet(new Snippet("dropdown-kebab", "With kebab toggle",
                code("dropdown-kebab"), () ->
                // @code-start:dropdown-kebab
                div()
                        .add(dropdown(ellipsisV(), "kebab dropdown toggle")
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-kebab
        ));

        addSnippet(new Snippet("dropdown-badge", "With a badge",
                code("dropdown-badge"), () ->
                // @code-start:dropdown-badge
                div()
                        .add(dropdown(menuToggle("Count").addBadge(badge(4).unread()))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-badge
        ));

        addSnippet(new Snippet("dropdown-icon", "With an icon",
                code("dropdown-icon"), () ->
                // @code-start:dropdown-icon
                div()
                        .add(dropdown(menuToggle("Icon").icon(cog()))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-icon
        ));

        addSnippet(new Snippet("dropdown-avatar", "With an avatar",
                code("dropdown-avatar"), () ->
                // @code-start:dropdown-avatar
                div()
                        .add(dropdown(menuToggle("John Doe").addAvatar(avatar(avatarLight, "avatar")))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-avatar
        ));

        addSnippet(new Snippet("dropdown-split-check", "With a checkbox",
                code("dropdown-split-check"), () ->
                // @code-start:dropdown-split-check
                div()
                        .add(dropdown(menuToggle(split).addCheckbox(checkbox(Id.unique(), "dropdown-split-check")))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .add(br())
                        .add(br())
                        .add(dropdown(menuToggle(split)
                                .addCheckbox(checkbox(Id.unique(), "dropdown-split-check"))
                                .text("10 selected"))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-split-check
        ));

/*
        TODO Fix split type
        addSnippet(new Snippet("dropdown-split-action", "With an action",
                code("dropdown-split-action"), () ->
                // @code-start:dropdown-split-action
                div()
                        .add(dropdown(menuToggle(split)
                                .addAction(menuToggleAction("Action")))
                                .addMenu(dropdownMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Action"))
                                                        .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                        .addItem(menuItem("item-2", "Disabled action")
                                                                .disabled())
                                                        .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                .disabled())
                                                        .addDivider()
                                                        .addItem(menuItem("item-4", "Separated action"))
                                                        .addItem(linkMenuItem("item-5", "Separated link", "#item-5"))))))
                        .element()
                // @code-end:dropdown-split-action
        ));
*/

        startApiDocs(Dropdown.class);
        addApiDoc(Dropdown.class, component);
        addApiDoc(DropdownMenu.class, component);
    }
}
