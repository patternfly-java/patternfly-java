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

import java.util.Random;

import org.jboss.elemento.router.Route;
import org.patternfly.component.AsyncItems;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuActionHandler;
import org.patternfly.component.menu.MenuContent;
import org.patternfly.component.menu.MenuFooter;
import org.patternfly.component.menu.MenuGroup;
import org.patternfly.component.menu.MenuHeader;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuItemAction;
import org.patternfly.component.menu.MenuList;
import org.patternfly.component.menu.MenuSearch;
import org.patternfly.component.menu.MenuType;
import org.patternfly.core.Aria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;
import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.asyncMenuItem;
import static org.patternfly.component.menu.MenuItem.checkboxMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuItemAction.menuItemAction;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuSearch.menuSearch;
import static org.patternfly.component.menu.MenuType.checkbox;
import static org.patternfly.component.menu.MenuType.menu;
import static org.patternfly.component.menu.MenuType.select;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.icon.IconSets.fas.bars;
import static org.patternfly.icon.IconSets.fas.clipboard;
import static org.patternfly.icon.IconSets.fas.codeBranch;
import static org.patternfly.icon.IconSets.fas.cube;
import static org.patternfly.icon.IconSets.fas.layerGroup;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.IconSets.fas.table;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.handler;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;

@Route(value = "/components/menus/menu", title = "Menu")
public class MenuComponent extends SnippetPage {

    public MenuComponent() {
        super(components.get("menu"));

        startExamples();
        addSnippet(new Snippet("menu-basic", "Basic menu",
                code("menu-basic"), () ->
                // @code-start:menu-basic
                div()
                        .add(menu(menu, click)
                                .onSingleSelect((e, item, selected) -> console.log("Item " + item.identifier() + " clicked"))
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action")
                                                        .onClick((e, actionItem) -> console.log(
                                                                "Clicked on action item " + actionItem.identifier())))
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1")
                                                        .onClick((e, item) -> e.preventDefault()))
                                                .addItem(menuItem("item-2", "Disabled action")
                                                        .disabled())
                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                        .disabled())
                                                .addItem(menuItem("item-4", "Aria-disabled action")
                                                        .ariaDisabled())
                                                .addItem(linkMenuItem("item-5", "Aria-disabled link", "#item-5")
                                                        .ariaDisabled())
                                        )))
                        .element()
                // @code-end:menu-basic
        ));

        addSnippet(new Snippet("menu-danger", "Danger menu item",
                code("menu-danger"), () ->
                // @code-start:menu-danger
                div()
                        .add(menu(menu, click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action 1"))
                                                .addItem(menuItem("item-1", "Action 2"))
                                                .addDivider()
                                                .addItem(menuItem("item-2", "Delete")
                                                        .danger()))))
                        .element()
                // @code-end:menu-danger
        ));

        addSnippet(new Snippet("menu-icons", "With icons",
                code("menu-icons"), () ->
                // @code-start:menu-icons
                div()
                        .add(menu(menu, click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Item 1")
                                                        .icon(codeBranch()))
                                                .addItem(menuItem("item-1", "Container image")
                                                        .icon(layerGroup()))
                                                .addItem(menuItem("item-2", "From Dockerfile")
                                                        .icon(cube())))))
                        .element()
                // @code-end:menu-icons
        ));

        addSnippet(new Snippet("menu-actions", "With action",
                code("menu-actions"), () ->
                // @code-start:menu-actions
                div()
                        .add(menu(select, multi)
                                .onAction((menu, item, itemAction) -> console.log(
                                        "Action " + itemAction.identifier() + " on item " + item.identifier() + " clicked"))
                                .addContent(menuContent()
                                        .addGroup(menuGroup("Actions")
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Item 1")
                                                                .description("This is a description")
                                                                .onClick((e, item) -> console.log(
                                                                        "Item " + item.identifier() + " clicked (local)"))
                                                                .addAction(menuItemAction("action-0", codeBranch())
                                                                        .aria(Aria.label, "Code")
                                                                        .onClick((e, itemAction) -> console.log(
                                                                                "Action " + itemAction.identifier() + " on item "
                                                                                        + itemAction.menuItem.identifier()
                                                                                        + " clicked (local)"))))
                                                        .addItem(menuItem("item-1", "Item 2")
                                                                .description("This is a description")
                                                                .disabled()
                                                                .addAction(menuItemAction("action-1", bell())))
                                                        .addItem(menuItem("item-2", "Item 3")
                                                                .addAction(menuItemAction("action-2", clipboard())))
                                                        .addItem(menuItem("item-3", "Item 4")
                                                                .description("This is a description")
                                                                .addAction(menuItemAction("action-3", bars())))))))
                        .element()
                // @code-end:menu-actions
        ));

        addSnippet(new Snippet("menu-links", "With links",
                code("menu-links"), () ->
                // @code-start:menu-links
                div()
                        .add(menu(menu, click)
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
                        .add(menu(menu, click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action 1")
                                                        .icon(codeBranch())
                                                        .description("Description"))
                                                .addItem(menuItem("item-1", "Action 2 disabled")
                                                        .icon(codeBranch())
                                                        .description("Description")
                                                        .disabled())
                                                .addItem(menuItem("item-2", "Action 3")
                                                        .icon(codeBranch())
                                                        .description(LoremIpsum.words(50))))))
                        .element()
                // @code-end:menu-descriptions
        ));

        addSnippet(new Snippet("menu-checkbox", "Item checkbox",
                code("menu-checkbox"), () ->
                // @code-start:menu-checkbox
                div()
                        .add(menu(checkbox, multi)
                                .onMultiSelect((e, menu, menuItems) -> console.log("### Selected items: " + menuItems.stream()
                                        .map(MenuItem::identifier)
                                        .collect(joining(", "))))
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(checkboxMenuItem("item-0", "Checkbox 1")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.identifier())))
                                                .addItem(checkboxMenuItem("item-1", "Checkbox 2")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.identifier())))
                                                .addItem(checkboxMenuItem("item-2", "Checkbox 3")
                                                        .onClick((e, mi) -> console.log("Clicked on item " + mi.identifier()))
                                                        .disabled()))))
                        .element()
                // @code-end:menu-checkbox
        ));

        addSnippet(new Snippet("menu-footer", "Menu footer",
                code("menu-footer"), () ->
                // @code-start:menu-footer
                div()
                        .add(menu(menu, click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action"))
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                .addItem(menuItem("item-2", "Disabled action")
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
                        .add(menu(menu, click)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action 1"))
                                                .addItem(menuItem("item-1", "Action 2"))
                                                .addDivider()
                                                .addItem(menuItem("item-2", "Action 3")))))
                        .element()
                // @code-end:menu-separator
        ));

        addSnippet(new Snippet("menu-titled-groups", "Titled groups of items",
                code("menu-titled-groups"), () ->
                // @code-start:menu-titled-groups
                div()
                        .add(menu(menu, click)
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
                        .add(menu(menu, click)
                                .onSingleSelect((e, item, selected) -> console.log("Item " + item.identifier() + " clicked"))
                                .onAction((menu, item, itemAction) -> console.log(
                                        "Action " + itemAction.identifier() + " on item " + item.identifier() + " clicked"))
                                .favorites()
                                .addContent(menuContent()
                                        .addGroup(menuGroup("All actions")
                                                .addList(menuList()
                                                        .addItem(menuItem("item-0", "Item 1")
                                                                .description("Description 1")
                                                                .addAction(menuItemAction("action-0", bars())))
                                                        .addItem(menuItem("item-1", "Item 2")
                                                                .onClick((e, item) -> console.log(
                                                                        "Item " + item.identifier() + " clicked (local)"))
                                                                .description("Description 2")
                                                                .addAction(menuItemAction("action-1", clipboard())
                                                                        .onClick((e, itemAction) -> console.log(
                                                                                "Action " + itemAction.identifier() + " on item "
                                                                                        + itemAction.menuItem.identifier()
                                                                                        + " clicked (local)"))))
                                                        .addItem(menuItem("item-2", "Item 3")
                                                                .description("Description 3")
                                                                .addAction(menuItemAction("action-2", bell())))))))
                        .element()
                // @code-end:menu-favorites
        ));

        addSnippet(new Snippet("menu-filter", "Filtering with search input",
                code("menu-filter"), () ->
                // @code-start:menu-filter
                div()
                        .add(menu(menu, click)
                                .addSearch(menuSearch()
                                        .addSearchInput(searchInput("menu-filter-0").icon(search())))
                                .addDivider()
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("item-0", "Action 1"))
                                                .addItem(menuItem("item-1", "Action 2"))
                                                .addItem(menuItem("item-2", "Action 3")))))
                        .element()
                // @code-end:menu-filter
        ));

        addSnippet(new Snippet("menu-option-single", "Option single select menu",
                code("menu-option-single"), () ->
                // @code-start:menu-option-single
                div()
                        .add(menu(select, single)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("option-0", "Option 1"))
                                                .addItem(menuItem("option-1", "Option 2"))
                                                .addItem(menuItem("option-2", "Option 3").icon(table())))))
                        .element()
                // @code-end:menu-option-single
        ));

        addSnippet(new Snippet("menu-option-multi", "Option multi select menu",
                code("menu-option-multi"), () ->
                // @code-start:menu-option-multi
                div()
                        .add(menu(select, multi)
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .addItem(menuItem("option-0", "Option 1"))
                                                .addItem(menuItem("option-1", "Option 2"))
                                                .addItem(menuItem("option-2", "Option 3").icon(table())))))
                        .element()
                // @code-end:menu-option-multi
        ));

        addSnippet(new Snippet("menu-scrollable", "Scrollable menus",
                code("menu-scrollable"), () ->
                // @code-start:menu-scrollable
                div()
                        .add(menu(menu, click).scrollable()
                                .addContent(menuContent()
                                        .addList(menuList()
                                                .run(ml -> {
                                                    for (int i = 0; i < 15; i++) {
                                                        ml.addItem(menuItem("item-" + 1, "Action " + (i + 1)));
                                                    }
                                                })
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1")
                                                        .onClick((e, item) -> e.preventDefault()))
                                                .addItem(menuItem("item-2", "Disabled action")
                                                        .disabled())
                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                        .disabled()))))
                        .element()
                // @code-end:menu-scrollable
        ));

        addSnippet(new Snippet("menu-scrollable-height", "Scrollable menu with custom height",
                code("menu-scrollable-height"), () ->
                // @code-start:menu-scrollable-height
                div()
                        .add(menu(menu, click).scrollable()
                                .addContent(menuContent().height("200px")
                                        .addList(menuList()
                                                .run(ml -> {
                                                    for (int i = 0; i < 15; i++) {
                                                        ml.addItem(menuItem("item-" + 1, "Action " + (i + 1)));
                                                    }
                                                })
                                                .addItem(linkMenuItem("item-1", "Link", "#item-1")
                                                        .onClick((e, item) -> e.preventDefault()))
                                                .addItem(menuItem("item-2", "Disabled action")
                                                        .disabled())
                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                        .disabled()))))
                        .element()
                // @code-end:menu-scrollable-height
        ));

        addSnippet(new Snippet("menu-async", "With view more",
                code("menu-async"), () -> {
            // @code-start:menu-async
            AsyncItems<MenuList, MenuItem> finalNetworkCall = ml -> new Promise<>((res, rej) ->
                    setTimeout(__ -> res.onInvoke(asList(
                                    menuItem("item-20", "Action 4"),
                                    menuItem("item-21", "Action 5"),
                                    menuItem("item-22", "Final action"))),
                            1234 + new Random().nextInt(3456)));

            AsyncItems<MenuList, MenuItem> firstNetworkCall = ml -> new Promise<>((res, rej) ->
                    setTimeout(__ -> res.onInvoke(asList(
                                    menuItem("item-10", "Action 2"),
                                    menuItem("item-11", "Action 3"),
                                    asyncMenuItem("item-12", "View even more", finalNetworkCall))),
                            1234 + new Random().nextInt(3456)));

            return div()
                    .add(menu(menu, click)
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItem(menuItem("item-0", "Action")
                                                    .onClick((e, actionItem) -> console.log(
                                                            "Clicked on action item " + actionItem.identifier())))
                                            .addItem(linkMenuItem("item-1", "Link", "#item-1")
                                                    .onClick((e, item) -> e.preventDefault()))
                                            .addItem(menuItem("item-2", "Disabled action")
                                                    .disabled())
                                            .addItem(asyncMenuItem("item-3", "View more", firstNetworkCall)))))
                    .element();
            // @code-end:menu-async
        }));

        addSnippet(new Snippet("menu-drilldown", "With drilldown",
                code("menu-drilldown"), () ->
                // @code-start:menu-drilldown
                nyi().element()
                // @code-end:menu-drilldown
        ));

        addSnippet(new Snippet("menu-drilled-in", "Initially drilled-in menu",
                code("menu-drilled-in"), () ->
                // @code-start:menu-drilled-in
                nyi().element()
                // @code-end:menu-drilled-in
        ));

        addSnippet(new Snippet("menu-drilled-smf", "With drilldown - submenu functions",
                code("menu-drilldown-smf"), () ->
                // @code-start:menu-drilldown-smf
                nyi().element()
                // @code-end:menu-drilldown-smf
        ));

        addSnippet(new Snippet("menu-drilldown-breadcrumb", "With drilldown breadcrumbs",
                code("menu-drilldown-breadcrumb"), () ->
                // @code-start:menu-drilldown-breadcrumb
                nyi().element()
                // @code-end:menu-drilldown-breadcrumb
        ));

        addSnippet(new Snippet("menu-drilldown-filter", "With drilldown and inline filter",
                code("menu-drilldown-filter"), () ->
                // @code-start:menu-drilldown-filter
                nyi().element()
                // @code-end:menu-drilldown-filter
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
        addApiDoc(MenuList.class, subcomponent);
        addApiDoc(MenuSearch.class, subcomponent);
        addApiDoc(MenuSearch.class, subcomponent);
        addApiDoc(MenuType.class, other);
    }
}
