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

import org.jboss.elemento.router.Route;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuActionHandler;
import org.patternfly.component.menu.MenuContent;
import org.patternfly.component.menu.MenuFooter;
import org.patternfly.component.menu.MenuGroup;
import org.patternfly.component.menu.MenuHeader;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuItemAction;
import org.patternfly.component.menu.MenuItemType;
import org.patternfly.component.menu.MenuList;
import org.patternfly.component.menu.MenuSearch;
import org.patternfly.component.menu.MenuSearchInput;
import org.patternfly.component.menu.MenuType;
import org.patternfly.core.Aria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.checkboxMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItemAction.menuItemAction;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.icon.IconSets.fas.bars;
import static org.patternfly.icon.IconSets.fas.clipboard;
import static org.patternfly.icon.IconSets.fas.codeBranch;
import static org.patternfly.icon.IconSets.fas.cube;
import static org.patternfly.icon.IconSets.fas.layerGroup;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.handler;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/menus/menu", title = "Menu")
public class MenuComponent extends SnippetPage {

    public MenuComponent() {
        super(components.get("menu"));

        startExamples();
        addSnippet(new Snippet("menu-basic", "Basic menu",
                code("menu-basic"), () ->
                // @code-start:menu-basic
                div()
                        .add(menu(click)
                                .onSingleSelect((e, item, selected) -> console.log("Item " + item.id + " selected"))
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Action")
                                                        .onClick((e, actionItem) -> console.log(
                                                                "Clicked on action item " + actionItem.id)))
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1")
                                                        .onClick((e, item) -> e.preventDefault()))
                                                .addItem(actionMenuItem("item-2", "Disabled action")
                                                        .disabled())
                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                        .disabled()))))
                        .element()
                // @code-end:menu-basic
        ));

        addSnippet(new Snippet("menu-danger", "Danger menu item",
                code("menu-danger"), () ->
                // @code-start:menu-danger
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Action 1"))
                                                .addItem(actionMenuItem("item-1", "Action 2"))
                                                .addDivider()
                                                .addItem(actionMenuItem("item-2", "Delete")
                                                        .danger()))))
                        .element()
                // @code-end:menu-danger
        ));

        addSnippet(new Snippet("menu-icons", "With icons",
                code("menu-icons"), () ->
                // @code-start:menu-icons
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Item 1")
                                                        .icon(codeBranch()))
                                                .addItem(actionMenuItem("item-1", "Container image")
                                                        .icon(layerGroup()))
                                                .addItem(actionMenuItem("item-2", "From Dockerfile")
                                                        .icon(cube())))))
                        .element()
                // @code-end:menu-icons
        ));

        addSnippet(new Snippet("menu-actions", "With action",
                code("menu-actions"), () ->
                // @code-start:menu-actions
                div()
                        .add(menu(multi)
                                .onAction((menu, item, itemAction) -> console.log(
                                        "Action " + itemAction.id + " on item " + item.id + " clicked"))
                                .addContent(menuContent()
                                        .addGroup(menuGroup("Actions")
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Item 1")
                                                                .description("This is a description")
                                                                .addAction(menuItemAction("action-0", codeBranch())
                                                                        .aria(Aria.label, "Code")
                                                                        .onClick((e, itemAction) -> console.log(
                                                                                "Code action clicked"))))
                                                        .addItem(actionMenuItem("item-1", "Item 2")
                                                                .description("This is a description")
                                                                .disabled()
                                                                .addAction(menuItemAction("action-1", bell())))
                                                        .addItem(actionMenuItem("item-2", "Item 3")
                                                                .addAction(menuItemAction("action-2", clipboard())))
                                                        .addItem(actionMenuItem("item-3", "Item 4")
                                                                .description("This is a description")
                                                                .addAction(menuItemAction("action-3", bars())))))))
                        .element()
                // @code-end:menu-actions
        ));

        addSnippet(new Snippet("menu-links", "With links",
                code("menu-links"), () ->
                // @code-start:menu-links
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(linkMenuItem("item-0", "Link 1", "#item-0")
                                                        .external())
                                                .addItem(linkMenuItem("item-1", "Link 2", "#item-1")
                                                        .external())
                                                .addItem(linkMenuItem("item-2", "Link 3", "#item-2")))))
                        .element()
                // @code-end:menu-links
        ));

        addSnippet(new Snippet("menu-descriptions", "With descriptions",
                code("menu-descriptions"), () ->
                // @code-start:menu-descriptions
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Action 1")
                                                        .icon(codeBranch())
                                                        .description("Description"))
                                                .addItem(actionMenuItem("item-1", "Action 2 disabled")
                                                        .icon(codeBranch())
                                                        .description("Description")
                                                        .disabled())
                                                .addItem(actionMenuItem("item-2", "Action 3")
                                                        .icon(codeBranch())
                                                        .description(LoremIpsum.words(50))))))
                        .element()
                // @code-end:menu-descriptions
        ));

        addSnippet(new Snippet("menu-checkbox", "Item checkbox",
                code("menu-checkbox"), () ->
                // @code-start:menu-checkbox
                div()
                        .add(menu(multi)
                                .onMultiSelect((e, menu, menuItems) -> console.log("### Selected items: " + menuItems.stream()
                                        .map(mi -> mi.id)
                                        .collect(joining(", "))))
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(checkboxMenuItem("item-0", "Checkbox 1")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.id)))
                                                .addItem(checkboxMenuItem("item-1", "Checkbox 2")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.id)))
                                                .addItem(checkboxMenuItem("item-2", "Checkbox 3")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.id))
                                                        .disabled()))))
                        .element()
                // @code-end:menu-checkbox
        ));

        addSnippet(new Snippet("menu-footer", "Menu footer",
                code("menu-footer"), () ->
                // @code-start:menu-footer
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Action"))
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                .addItem(actionMenuItem("item-2", "Disabled action")
                                                        .disabled())
                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                        .disabled())))
                                .addFooter(menuFooter()
                                        .add(button("Action").link().inline())))
                        .element()
                // @code-end:menu-footer
        ));

        addSnippet(new Snippet("menu-separator", "Separated items",
                code("menu-separator"), () ->
                // @code-start:menu-separator
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(actionMenuItem("item-0", "Action 1"))
                                                .addItem(actionMenuItem("item-1", "Action 2"))
                                                .addDivider()
                                                .addItem(actionMenuItem("item-2", "Action 3")))))
                        .element()
                // @code-end:menu-separator
        ));

        addSnippet(new Snippet("menu-titled-groups", "Titled groups of items",
                code("menu-titled-groups"), () ->
                // @code-start:menu-titled-groups
                div()
                        .add(menu(click)
                                .addContent(menuContent()
                                        .addGroup(menuGroup()
                                                .addList(menuList()
                                                        .addItem(linkMenuItem("item-0", "Link not in group", "#item-0"))))
                                        .addDivider()
                                        .addGroup(menuGroup("Group 1")
                                                .addList(menuList()
                                                        .add(linkMenuItem("item-10", "Link 1", "#item-10"))
                                                        .add(linkMenuItem("item-11", "Link 2", "#item-11"))))
                                        .addDivider()
                                        .addGroup(menuGroup("Group 2")
                                                .addList(menuList()
                                                        .add(linkMenuItem("item-20", "Link 1", "#item-20"))
                                                        .add(linkMenuItem("item-21", "Link 2", "#item-21"))))))
                        .element()
                // @code-end:menu-titled-groups
        ));

        addSnippet(new Snippet("menu-favorites", "With favorites",
                code("menu-favorites"), () ->
                // @code-start:menu-favorites
                div()
                        .add(menu(click)
                                .onSingleSelect((e, item, selected) -> console.log("Item " + item.id + " selected"))
                                .onAction((menu, item, itemAction) -> console.log(
                                        "Action " + itemAction.id + " on item " + item.id + " clicked"))
                                .favorites()
                                .addContent(menuContent()
                                        .addGroup(menuGroup("All actions")
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("item-0", "Item 1")
                                                                .description("Description 1")
                                                                .addAction(menuItemAction("action-0", bars())))
                                                        .addItem(actionMenuItem("item-1", "Item 2")
                                                                .onClick((e, item) -> console.log(
                                                                        "# Item " + item.id + " clicked"))
                                                                .description("Description 2")
                                                                .addAction(menuItemAction("action-1", clipboard())
                                                                        .onClick((e, itemAction) -> console.log(
                                                                                "# Action " + itemAction.id + " on item "
                                                                                        + itemAction.menuItem.id
                                                                                        + " clicked"))))
                                                        .addItem(actionMenuItem("item-2", "Item 3")
                                                                .description("Description 3")
                                                                .addAction(menuItemAction("action-2", bell())))))))
                        .element()
                // @code-end:menu-favorites
        ));

        startApiDocs(Menu.class);
        addApiDoc(Menu.class, component);
        addApiDoc(MenuActionHandler.class, handler);
        addApiDoc(MenuContent.class, subcomponent);
        addApiDoc(MenuFooter.class, subcomponent);
        addApiDoc(MenuGroup.class, subcomponent);
        addApiDoc(MenuHeader.class, subcomponent);
        addApiDoc(MenuItem.class, subcomponent);
        addApiDoc(MenuItemAction.class, subcomponent);
        addApiDoc(MenuItemType.class, other);
        addApiDoc(MenuList.class, subcomponent);
        addApiDoc(MenuSearch.class, subcomponent);
        addApiDoc(MenuSearchInput.class, subcomponent);
        addApiDoc(MenuType.class, other);
    }
}
