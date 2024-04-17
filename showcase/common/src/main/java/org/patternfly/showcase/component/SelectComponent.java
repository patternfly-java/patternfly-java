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
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.component.menu.SingleSelectMenu;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.router.Link.link;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.icon.IconSets.fas.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.Showcase.placeManager;

@Route(value = "/components/menus/select", title = "Select")
public class SelectComponent extends SnippetPage {

    public SelectComponent() {
        super(components.get("select"));

        startExamples(p()
                .add("Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the ")
                .add(link(placeManager(), "/components/menus/menu").textContent("menu documentation"))
                .add(" for a full list of properties that may be used to further customize a select menu."));
        addSnippet(new Snippet("single-select", "Single select",
                code("single-select"), () ->
                // @code-start:single-select
                div()
                        .add(singleSelect("Select a value")
                                .style("width", "200px")
                                .addMenu(singleSelectMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("option-0", "Option 1"))
                                                        .addItem(actionMenuItem("option-1", "Option 2"))
                                                        .addItem(actionMenuItem("option-2", "Option 3"))))))
                        .element()
                // @code-end:single-select
        ));

        addSnippet(new Snippet("select-option-variants", "Select option variants",
                code("select-option-variants"), () ->
                // @code-start:select-option-variants
                div()
                        .add(singleSelect("Select a value")
                                .style("width", "200px")
                                .addMenu(singleSelectMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(actionMenuItem("option-0", "Basic option"))
                                                        .addItem(actionMenuItem("option-1", "Option with description")
                                                                .description("This is a description"))
                                                        .addItem(linkMenuItem("option-3", "Option with link",
                                                                placeManager().href("/components/menus/select"))
                                                                .external())
                                                        .addItem(actionMenuItem("option-4", "Option with icon")
                                                                .icon(bell()))
                                                        .addItem(actionMenuItem("option-5", "Disabled options")
                                                                .disabled())
                                                        .addItem(actionMenuItem("option-6",
                                                                "See menu for additional variants"))))))
                        .element()
                // @code-end:select-option-variants
        ));

        startApiDocs(SingleSelect.class);
        addApiDoc(SingleSelect.class, component);
        addApiDoc(SingleSelectMenu.class, component);
    }
}
