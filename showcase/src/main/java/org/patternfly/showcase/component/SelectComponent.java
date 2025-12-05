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
import org.patternfly.component.Severity;
import org.patternfly.component.help.HelperText;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuList;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.MultiSelect;
import org.patternfly.component.menu.MultiSelectMenu;
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.component.menu.SingleSelectMenu;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Modifiers;

import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.stream;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.router.Link.link;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
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
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.menu.SingleTypeahead.singleTypeahead;
import static org.patternfly.component.menu.SingleTypeaheadMenu.singleTypeaheadMenu;
import static org.patternfly.icon.IconSets.fas.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.Showcase.placeManager;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;

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
            HelperText helperText = helperText().liveRegion().addItem(helperTextItem().defaultIcon());
            setVisible(helperText, false);
            return div()
                    .add(singleSelect(menuToggle)
                            .style("width", "200px")
                            .addMenu(singleSelectMenu()
                                    .onSingleSelect((event, menuItem, selected) -> {
                                        Severity severity = menuItem.get("status");
                                        menuToggle.status(severity);
                                        setVisible(helperText, severity == warning || severity == danger);
                                        helperText.firstItem().status(severity.asValidationStatus());
                                        if (severity == warning) {
                                            helperText.firstItem().text("Danger text that explains the issue.");
                                        } else if (severity == danger) {
                                            helperText.firstItem().text("Warning text that explains the issue.");
                                        }
                                    })
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItem(menuItem("success", "Success").store("status", success))
                                                    .addItem(menuItem("warning", "Warning").store("status", warning))
                                                    .addItem(menuItem("danger", "Danger").store("status", danger))))))
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

        addSnippet(new Snippet("typeahead", "Typeahead",
                code("typeahead"), () ->
                // @code-start:typeahead
                div()
                        .add(singleTypeahead("typeahead-0", "Select a state")
                                .applyTo(Modifiers.FullWidth::fullWidth)
                                .addMenu(singleTypeaheadMenu()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItem(menuItem("alabama", "Alabama"))
                                                        .addItem(menuItem("florida", "Florida"))
                                                        .addItem(menuItem("new-jersey", "New Jersey"))
                                                        .addItem(menuItem("new-mexico", "New Mexico"))
                                                        .addItem(menuItem("new-york", "New York"))
                                                        .addItem(menuItem("north-carolina", "North Carolina"))))))
                        .element()
                // @code-end:typeahead
        ));

        addSnippet(new Snippet("typeahead-async", "Typeahead (async)",
                code("typeahead-async"), () -> {
            // @code-start:typeahead-async
            AsyncItems<MenuList, MenuItem> asyncItems = c -> new Promise<>((res, rej) ->
                    setTimeout(__ -> res.onInvoke(stream(LoremIpsum.words(100).split(" "))
                                    .distinct()
                                    .sorted()
                                    .map(word -> menuItem(Id.build("item-", word), word))
                                    .collect(toList())),
                            1234 + new Random().nextInt(3456)));


            return div()
                    .add(singleTypeahead("typeahead-async-0", "Lorem ipsum")
                            .applyTo(Modifiers.FullWidth::fullWidth)
                            .addMenu(singleTypeaheadMenu().scrollable()
                                    .addContent(menuContent()
                                            .addList(menuList()
                                                    .addItems(asyncItems)))))
                    .element();
            // @code-end:typeahead-async
        }));

        addSnippet(new Snippet("typeahead-create", "Typeahead with create option",
                code("typeahead-create"), () ->
                // @code-start:typeahead-create
                div()
                        .add(nyi())
                        .element()
                // @code-end:typeahead-create
        ));

        addSnippet(new Snippet("typeahead-chips", "Multiple typeahead with chips",
                code("typeahead-chips"), () ->
                // @code-start:typeahead-chips
                div()
                        .add(nyi())
                        .element()
                // @code-end:typeahead-chips
        ));

        addSnippet(new Snippet("typeahead-create-multiple", "Multiple typeahead with create option",
                code("typeahead-create-multiple"), () ->
                // @code-start:typeahead-create-multiple
                div()
                        .add(nyi())
                        .element()
                // @code-end:typeahead-create-multiple
        ));

        addSnippet(new Snippet("typeahead-checkboxes", "Multiple typeahead with checkboxes",
                code("typeahead-checkboxes"), () ->
                // @code-start:typeahead-checkboxes
                div()
                        .add(nyi())
                        .element()
                // @code-end:typeahead-checkboxes
        ));

        addSnippet(new Snippet("select-view-more", "With view more",
                code("select-view-more"), () ->
                // @code-start:select-view-more
                div()
                        .add(nyi())
                        .element()
                // @code-end:select-view-more
        ));

        addSnippet(new Snippet("select-footer", "With a footer",
                code("select-footer"), () ->
                // @code-start:select-footer
                div()
                        .add(nyi())
                        .element()
                // @code-end:select-footer
        ));

        startApiDocs(MultiSelect.class);
        addApiDoc(MultiSelect.class, component);
        addApiDoc(MultiSelectMenu.class, component);
        addApiDoc(SingleSelect.class, component);
        addApiDoc(SingleSelectMenu.class, component);
    }
}
