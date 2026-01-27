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

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.AsyncItems;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.help.HelperText;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuList;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.MultiSelect;
import org.patternfly.component.menu.MultiSelectMenu;
import org.patternfly.component.menu.MultiTypeahead;
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.component.menu.SingleSelectMenu;
import org.patternfly.component.menu.SingleTypeahead;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Modifiers.FullWidth;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.stream;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.router.Link.link;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.checkboxMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MultiSelect.multiSelect;
import static org.patternfly.component.menu.MultiSelectMenu.multiSelectCheckboxMenu;
import static org.patternfly.component.menu.MultiSelectMenu.multiSelectMenu;
import static org.patternfly.component.menu.MultiTypeahead.multiTypeahead;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.menu.SingleTypeahead.singleTypeahead;
import static org.patternfly.icon.IconSets.fas.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.Showcase.placeManager;

@Route(value = "/components/menus/select", title = "Select")
public class SelectComponent extends SnippetPage {

    public SelectComponent() {
        super(components.get("select"));

        startExamples(content(p).editorial()
                .add("Select builds off of the menu component suite to adapt commonly used properties and functions to create a select menu. See the ")
                .add(link(placeManager(), "/components/menus/menu").text("menu documentation"))
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
                                                        .addItem(menuItem("option-0", "Option 1"))
                                                        .addItem(menuItem("option-1", "Option 2"))
                                                        .addItem(menuItem("option-2", "Option 3"))))))
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
                                                        .addItem(menuItem("option-0", "Basic option"))
                                                        .addItem(menuItem("option-1", "Option with description")
                                                                .description("This is a description"))
                                                        .addItem(linkMenuItem("option-3", "Option with link",
                                                                placeManager().href("/components/menus/select"))
                                                                .external())
                                                        .addItem(menuItem("option-4", "Option with icon")
                                                                .icon(bell()))
                                                        .addItem(menuItem("option-5", "Disabled options")
                                                                .disabled())
                                                        .addItem(menuItem("option-6",
                                                                "See menu for additional variants"))))))
                        .element()
                // @code-end:select-option-variants
        ));

        addSnippet(new Snippet("select-groups", "With grouped items",
                code("select-groups"), () ->
                // @code-start:select-groups
                div()
                        .add(singleSelect("Select a value")
                                .style("width", "200px")
                                .addMenu(singleSelectMenu()
                                        .addContent(menuContent()
                                                .addGroup(menuGroup("Group 1")
                                                        .addList(menuList()
                                                                .addItem(menuItem("option-0", "Option 1"))
                                                                .addItem(menuItem("option-1", "Option 2"))
                                                                .addItem(menuItem("option-2", "Option 3"))))
                                                .addDivider()
                                                .addGroup(menuGroup("Group 2"))
                                                .addList(menuList()
                                                        .addItem(menuItem("option-3", "Option 4"))
                                                        .addItem(menuItem("option-4", "Option 5"))
                                                        .addItem(menuItem("option-5", "Option 6"))))))
                        .element()
                // @code-end:select-groups
        ));

        addSnippet(new Snippet("select-validation", "With validation",
                code("select-validation"), () -> {
            // @code-start:select-validation
            MenuToggle menuToggle = menuToggle("Select a value");
            HelperText helperText = helperText().liveRegion().addItem(helperTextItem());
            setVisible(helperText, false);
            return div()
                    .add(singleSelect(menuToggle)
                            .style("width", "200px")
                            .addMenu(singleSelectMenu()
                                    .onSingleSelect((event, menuItem, selected) -> {
                                        ValidationStatus validationStatus = menuItem.get("status");
                                        menuToggle.validated(validationStatus);
                                        setVisible(helperText, validationStatus == warning || validationStatus == error);
                                        helperText.firstItem().status(validationStatus);
                                        if (validationStatus == warning) {
                                            helperText.firstItem().text("Danger text that explains the issue.");
                                        } else if (validationStatus == error) {
                                            helperText.firstItem().text("Warning text that explains the issue.");
                                        }
                                    })
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(menuItem("success", "Success").store("status", success))
                                                    .addItem(menuItem("warning", "Warning").store("status", warning))
                                                    .addItem(menuItem("danger", "Danger").store("status", error))))))
                    .add(helperText)
                    .element();
            // @code-end:select-validation
        }));

        addSnippet(new Snippet("multi-select", "Checkbox select",
                code("multi-select"), () ->
                // @code-start:multi-select
                div()
                        .add(multiSelect("Filter by status")
                                .addMenu(multiSelectCheckboxMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(checkboxMenuItem("debug", "Debug"))
                                                        .addItem(checkboxMenuItem("info", "Info"))
                                                        .addItem(checkboxMenuItem("warn", "Warn"))
                                                        .addItem(checkboxMenuItem("error", "Error")
                                                                .disabled())))))
                        .element()
                // @code-end:multi-select
        ));

        addSnippet(new Snippet("single-typeahead", "Typeahead",
                code("single-typeahead"), () ->
                // @code-start:single-typeahead
                div()
                        .add(singleTypeahead("single-typeahead-0", "Select a state")
                                .applyTo(FullWidth::fullWidth)
                                .addMenu(singleSelectMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("alabama", "Alabama"))
                                                        .addItem(menuItem("florida", "Florida"))
                                                        .addItem(menuItem("new-jersey", "New Jersey"))
                                                        .addItem(menuItem("new-mexico", "New Mexico"))
                                                        .addItem(menuItem("new-york", "New York"))
                                                        .addItem(menuItem("north-carolina", "North Carolina"))))))
                        .element()
                // @code-end:single-typeahead
        ));

        addSnippet(new Snippet("single-typeahead-create", "Typeahead with create option",
                code("single-typeahead-create"), () -> {
            // @code-start:single-typeahead-create
            SingleTypeahead typeahead = singleTypeahead("single-typeahead-create-0", "Select a state");
            MenuList menuList = menuList();
            return div()
                    .add(typeahead
                            .applyTo(FullWidth::fullWidth)
                            .allowNewItems(value -> "Create new item \"" + value + "\"",
                                    value -> Promise.resolve(menuItem(Id.build(value), value)))
                            .addMenu(singleSelectMenu()
                                    .addContent(menuContent()
                                            .addList(menuList
                                                    .addItem(menuItem("alabama", "Alabama"))
                                                    .addItem(menuItem("florida", "Florida"))
                                                    .addItem(menuItem("new-jersey", "New Jersey"))
                                                    .addItem(menuItem("new-mexico", "New Mexico"))
                                                    .addItem(menuItem("new-york", "New York"))
                                                    .addItem(menuItem("north-carolina", "North Carolina"))))))
                    .element();
            // @code-end:single-typeahead-create
        }));

        addSnippet(new Snippet("single-typeahead-async", "Typeahead (async)",
                code("single-typeahead-async"), () -> {
            // @code-start:single-typeahead-async
            AsyncItems<MenuList, MenuItem> asyncItems = c -> new Promise<>((res, rej) ->
                    setTimeout(__ -> res.onInvoke(stream(LoremIpsum.words(100).split(" "))
                                    .distinct()
                                    .sorted()
                                    .map(word -> menuItem(Id.build("item-", word), word))
                                    .collect(toList())),
                            1234 + new Random().nextInt(3456)));


            return div()
                    .add(singleTypeahead("single-typeahead-async-0", "Lorem ipsum")
                            .applyTo(FullWidth::fullWidth)
                            .addMenu(singleSelectMenu().scrollable()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItems(asyncItems)))))
                    .element();
            // @code-end:single-typeahead-async
        }));

        addSnippet(new Snippet("multi-typeahead", "Multiple typeahead with labels",
                code("multi-typeahead"), () ->
                // @code-start:multi-typeahead
                div()
                        .add(multiTypeahead("multi-typeahead-0", "Select a state")
                                .applyTo(FullWidth::fullWidth)
                                .addMenu(multiSelectMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("alabama", "Alabama"))
                                                        .addItem(menuItem("florida", "Florida"))
                                                        .addItem(menuItem("new-jersey", "New Jersey"))
                                                        .addItem(menuItem("new-mexico", "New Mexico"))
                                                        .addItem(menuItem("new-york", "New York"))
                                                        .addItem(menuItem("north-carolina", "North Carolina"))))))
                        .element()
                // @code-end:multi-typeahead
        ));

        addSnippet(new Snippet("multi-typeahead-create", "Multiple typeahead with create option",
                code("multi-typeahead-create"), () -> {
            // @code-start:multi-typeahead-create
            MultiTypeahead typeahead = multiTypeahead("multi-typeahead-create-0", "Select a state");
            MenuList menuList = menuList();
            return div()
                    .add(typeahead
                            .applyTo(FullWidth::fullWidth)
                            .addMenu(multiSelectMenu()
                                    .addContent(menuContent()
                                            .addList(menuList
                                                    .addItem(menuItem("alabama", "Alabama"))
                                                    .addItem(menuItem("florida", "Florida"))
                                                    .addItem(menuItem("new-jersey", "New Jersey"))
                                                    .addItem(menuItem("new-mexico", "New Mexico"))
                                                    .addItem(menuItem("new-york", "New York"))
                                                    .addItem(menuItem("north-carolina", "North Carolina"))))))
                    .element();
            // @code-end:multi-typeahead-create
        }));

        addSnippet(new Snippet("multi-typeahead-async", "Multiple typeahead (async)",
                code("multi-typeahead-async"), () -> {
            // @code-start:multi-typeahead-async
            AsyncItems<MenuList, MenuItem> asyncItems = c -> new Promise<>((res, rej) ->
                    setTimeout(__ -> res.onInvoke(stream(LoremIpsum.words(100).split(" "))
                                    .distinct()
                                    .sorted()
                                    .map(word -> menuItem(Id.build("item-", word), word))
                                    .collect(toList())),
                            1234 + new Random().nextInt(3456)));


            return div()
                    .add(multiTypeahead("multi-typeahead-async-0", "Lorem ipsum")
                            .applyTo(FullWidth::fullWidth)
                            .addMenu(multiSelectMenu().scrollable()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItems(asyncItems)))))
                    .element();
            // @code-end:multi-typeahead-async
        }));

        startApiDocs(MultiSelect.class);
        addApiDoc(MultiSelect.class, component);
        addApiDoc(MultiSelectMenu.class, component);
        addApiDoc(SingleSelect.class, component);
        addApiDoc(SingleSelectMenu.class, component);
    }
}
