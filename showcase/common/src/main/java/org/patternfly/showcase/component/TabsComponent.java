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
import org.patternfly.component.button.Button;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.tabs.Tab;
import org.patternfly.component.tabs.TabContent;
import org.patternfly.component.tabs.TabContentBody;
import org.patternfly.component.tabs.Tabs;
import org.patternfly.handler.CloseHandler;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Inset;
import elemental2.dom.Event;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.nav;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.tabs.Tab.tab;
import static org.patternfly.component.tabs.TabContent.tabContent;
import static org.patternfly.component.tabs.TabContentBody.tabContentBody;
import static org.patternfly.component.tabs.Tabs.tabs;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.icon.IconSets.fas.box;
import static org.patternfly.icon.IconSets.fas.database;
import static org.patternfly.icon.IconSets.fas.laptop;
import static org.patternfly.icon.IconSets.fas.projectDiagram;
import static org.patternfly.icon.IconSets.fas.server;
import static org.patternfly.icon.IconSets.fas.users;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.ExpandableModifier.expandable;
import static org.patternfly.style.ExpandableModifier.nonExpandable;

@Route(value = "/components/tabs", title = "Tabs")
public class TabsComponent extends SnippetPage {

    public TabsComponent() {
        super(components.get("tabs"));

        startExamples();
        addSnippet(new Snippet("tabs-default", "Default tabs",
                code("tabs-default"), () ->
        {
            // @code-start:tabs-default
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-default-box", "tabs-default-box", "Box");
            Checkbox secondaryToggle = checkbox("tabs-default-secondary", "tabs-default-secondary", "Secondary tabs");
            return div()
                    .add(tabs
                            .addItem(tab("tabs-default-users", "Users")
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-default-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-default-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-default-disabled", "Disabled")
                                    .disabled()
                                    .addContent(tabContent().text("Disabled")))
                            .addItem(tab("tabs-default-disabled-aria", "ARIA Disabled")
                                    .ariaDisabled()
                                    .addContent(tabContent().text("ARIA Disabled")))
                            .addItem(tab("tabs-default-disabled-aria-tt", "ARIA Disabled (Tooltip)")
                                    .ariaDisabled()
                                    .tooltip(tooltip(
                                            "Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."))
                                    .addContent(tabContent().text("ARIA Disabled (Tooltip)"))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .add(div().css(util("mt-sm"))
                            .add(secondaryToggle.onChange((event, component, value) -> tabs.secondary(value))))
                    .element();
            // @code-end:tabs-default
        }));

        addSnippet(new Snippet("tabs-vertical", "Vertical tabs",
                code("tabs-vertical"), () ->
        {
            // @code-start:tabs-vertical
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-vertical-box", "tabs-vertical-box", "Box");
            return div()
                    .add(tabs.vertical()
                            .addItem(tab("tabs-vertical-users", "Users")
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-vertical-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-vertical-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-vertical-disabled", "Disabled")
                                    .disabled()
                                    .addContent(tabContent().text("Disabled")))
                            .addItem(tab("tabs-vertical-disabled-aria", "ARIA Disabled")
                                    .ariaDisabled()
                                    .addContent(tabContent().text("ARIA Disabled")))
                            .addItem(tab("tabs-vertical-disabled-aria-tt", "ARIA Disabled (Tooltip)")
                                    .ariaDisabled()
                                    .tooltip(tooltip(
                                            "Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."))
                                    .addContent(tabContent().text("ARIA Disabled (Tooltip)"))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-vertical
        }));

        addSnippet(new Snippet("tabs-expandable", "Vertical expandable tabs",
                code("tabs-expandable"), () ->
                // @code-start:tabs-expandable
                div()
                        .add(tabs().vertical()
                                .expandable(breakpoints(
                                        default_, expandable,
                                        md, nonExpandable,
                                        lg, expandable))
                                .addItem(tab("tabs-expandable-users", "Users")
                                        .addContent(tabContent().text("Users")))
                                .addItem(tab("tabs-expandable-containers", "Containers")
                                        .addContent(tabContent().text("Containers")))
                                .addItem(tab("tabs-expandable-database", "Database")
                                        .addContent(tabContent().text("Database")))
                                .addItem(tab("tabs-expandable-server", "Server")
                                        .addContent(tabContent().text("Server")))
                                .addItem(tab("tabs-expandable-system", "System")
                                        .addContent(tabContent().text("System")))
                                .addItem(tab("tabs-expandable-network", "Network")
                                        .addContent(tabContent().text("Network"))))
                        .element()
                // @code-end:tabs-expandable
        ));

        addSnippet(new Snippet("tabs-overflow-default", "Default overflow tabs",
                code("tabs-overflow-default"), () -> {
            // @code-start:tabs-overflow-default
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-overflow-default-box", "tabs-overflow-default-box", "Box");
            return div()
                    .add(tabs
                            .addItem(tab("tabs-overflow-default-users", "Users")
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-overflow-default-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-overflow-default-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-overflow-default-server", "Server")
                                    .addContent(tabContent().text("Server")))
                            .addItem(tab("tabs-overflow-default-system", "System")
                                    .addContent(tabContent().text("System")))
                            .addItem(tab("tabs-overflow-default-network", "Network")
                                    .addContent(tabContent().text("Network")))
                            .addItems(range(7, 20).boxed().collect(toList()), index ->
                                    tab("tabs-overflow-default-" + index, "Tab item " + index)
                                            .addContent(tabContent().text("Tab section " + index))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-overflow-default
        }));

        addSnippet(new Snippet("tabs-overflow-hz", "Horizontal overflow tabs",
                code("tabs-overflow-hz"), () ->
                // @code-start:tabs-overflow-hz
                div()
                        .add(tabs().overflowHorizontal().showTabCount()
                                .addItem(tab("tabs-overflow-hz-users", "Users")
                                        .addContent(tabContent().text("Users")))
                                .addItem(tab("tabs-overflow-hz-containers", "Containers")
                                        .addContent(tabContent().text("Containers")))
                                .addItem(tab("tabs-overflow-hz-database", "Database")
                                        .addContent(tabContent().text("Database")))
                                .addItem(tab("tabs-overflow-hz-server", "Server")
                                        .addContent(tabContent().text("Server")))
                                .addItem(tab("tabs-overflow-hz-system", "System")
                                        .addContent(tabContent().text("System")))
                                .addItem(tab("tabs-overflow-hz-network", "Network")
                                        .addContent(tabContent().text("Network")))
                                .addItems(range(7, 20).boxed().collect(toList()), index ->
                                        tab("tabs-overflow-hz-" + index, "Tab item " + index)
                                                .addContent(tabContent().text("Tab section " + index))))
                        .element()
                // @code-end:tabs-overflow-hz
        ));

        addSnippet(new Snippet("tabs-inset", "With adjusted inset",
                code("tabs-inset"), () -> {
            // @code-start:tabs-inset
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-inset-box", "tabs-inset-box", "Box");
            return div()
                    .add(tabs.inset(breakpoints(
                                    default_, Inset.none,
                                    md, Inset.sm,
                                    xl, Inset.lg,
                                    _2xl, Inset._2xl))
                            .addItem(tab("tabs-inset-users", "Users")
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-inset-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-inset-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-inset-server", "Server")
                                    .addContent(tabContent().text("Server")))
                            .addItem(tab("tabs-inset-system", "System")
                                    .addContent(tabContent().text("System")))
                            .addItem(tab("tabs-inset-network", "Network")
                                    .addContent(tabContent().text("Network"))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-inset
        }));

        addSnippet(new Snippet("tabs-page-insets", "With page insets",
                code("tabs-page-insets"), () -> {
            // @code-start:tabs-page-insets
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-page-insets-box", "tabs-page-insets-box", "Box");
            return div()
                    .add(tabs.pageInsets()
                            .addItem(tab("tabs-page-insets-users", "Users")
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-page-insets-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-page-insets-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-page-insets-server", "Server")
                                    .addContent(tabContent().text("Server")))
                            .addItem(tab("tabs-page-insets-system", "System")
                                    .addContent(tabContent().text("System")))
                            .addItem(tab("tabs-page-insets-network", "Network")
                                    .addContent(tabContent().text("Network"))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-page-insets
        }));

        addSnippet(new Snippet("tabs-icon-text", "With icons and text",
                code("tabs-icon-text"), () ->
                // @code-start:tabs-icon-text
                div()
                        .add(tabs()
                                .addItem(tab("tabs-icon-text-users", "Users")
                                        .icon(users())
                                        .addContent(tabContent().text("Users")))
                                .addItem(tab("tabs-icon-text-containers", "Containers")
                                        .icon(box())
                                        .addContent(tabContent().text("Containers")))
                                .addItem(tab("tabs-icon-text-database", "Database")
                                        .icon(database())
                                        .addContent(tabContent().text("Database")))
                                .addItem(tab("tabs-icon-text-server", "Server")
                                        .icon(server())
                                        .addContent(tabContent().text("Server")))
                                .addItem(tab("tabs-icon-text-system", "System")
                                        .icon(laptop())
                                        .addContent(tabContent().text("System")))
                                .addItem(tab("tabs-icon-text-network", "Network")
                                        .icon(projectDiagram())
                                        .addContent(tabContent().text("Network"))))
                        .element()
                // @code-end:tabs-icon-text
        ));

        addSnippet(new Snippet("tabs-subtab", "Subtabs",
                code("tabs-subtab"), () -> {
            // @code-start:tabs-subtab
            Tabs tabs = tabs();
            Tabs subtab = tabs().subtab();
            Checkbox boxToggle = checkbox("tabs-subtab-box", "tabs-subtab-box", "Box");
            return div()
                    .add(tabs
                            .addItem(tab("tabs-subtab-users", "Users")
                                    .addContent(tabContent()
                                            .add(subtab
                                                    .addItems(range(1, 12).boxed().collect(toList()), index ->
                                                            tab("secondary-tab-" + index, "Secondary tab item " + index)
                                                                    .addContent(tabContent()
                                                                            .text("Secondary tab section " + index))))))
                            .addItem(tab("tabs-subtab-containers", "Containers")
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-subtab-database", "Database")
                                    .addContent(tabContent().text("Database")))
                            .addItem(tab("tabs-subtab-server", "Server")
                                    .addContent(tabContent().text("Server")))
                            .addItem(tab("tabs-subtab-system", "System")
                                    .addContent(tabContent().text("System")))
                            .addItem(tab("tabs-subtab-network", "Network")
                                    .addContent(tabContent().text("Network")))
                            .addItems(range(7, 20).boxed().collect(toList()), index ->
                                    tab("tabs-subtab-" + index, "Tab item " + index)
                                            .addContent(tabContent().text("Tab section " + index))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-subtab
        }));

        addSnippet(new Snippet("tabs-icon-filled", "Filled tabs with icons",
                code("tabs-icon-filled"), () -> {
            // @code-start:tabs-icon-filled
            Tabs tabs = tabs();
            Checkbox boxToggle = checkbox("tabs-icon-filled-box", "tabs-icon-filled-box", "Box");
            return div()
                    .add(tabs.fill()
                            .addItem(tab("tabs-icon-filled-users", "Users")
                                    .icon(users())
                                    .addContent(tabContent().text("Users")))
                            .addItem(tab("tabs-icon-filled-containers", "Containers")
                                    .icon(box())
                                    .addContent(tabContent().text("Containers")))
                            .addItem(tab("tabs-icon-filled-database", "Database")
                                    .icon(database())
                                    .addContent(tabContent().text("Database"))))
                    .add(div().css(util("mt-md"))
                            .add(boxToggle.onChange((event, component, value) -> tabs.box(value))))
                    .element();
            // @code-end:tabs-icon-filled
        }));

        addSnippet(new Snippet("tabs-nav", "Tabs linked to nav elements",
                code("tabs-nav"), () ->
                // @code-start:tabs-nav
                div()
                        .add(tabs(nav())
                                .addItem(tab(a(), "tabs-nav-users", "Users")
                                        .href("#item-0")
                                        .addContent(tabContent().text("Users")))
                                .addItem(tab(a(), "tabs-nav-containers", "Containers")
                                        .href("#item-1")
                                        .addContent(tabContent().text("Containers")))
                                .addItem(tab(a(), "tabs-nav-database", "Database")
                                        .href("#item-2")
                                        .addContent(tabContent().text("Database")))
                                .addItem(tab(a(), "tabs-nav-disabled", "Disabled")
                                        .href("#item-3")
                                        .disabled()
                                        .addContent(tabContent().text("Disabled")))
                                .addItem(tab(a(), "tabs-nav-disabled-aria", "ARIA Disabled")
                                        .href("#item-4")
                                        .ariaDisabled()
                                        .addContent(tabContent().text("ARIA Disabled")))
                                .addItem(tab(a(), "tabs-secondary-network", "Network")
                                        .href("#item-5")
                                        .addContent(tabContent().text("Network"))))
                        .element()
                // @code-end:tabs-nav
        ));

        addSnippet(new Snippet("tabs-subtab-nav", "Subtabs linked to nav elements",
                code("tabs-subtab-nav"), () ->
                // @code-start:tabs-subtab-nav
                div()
                        .add(tabs(nav())
                                .addItem(tab(a(), "tabs-subtab-nav-users", "Users")
                                        .href("#item-0")
                                        .addContent(tabContent()
                                                .add(tabs(nav()).subtab()
                                                        .addItem(tab(a(), "secondary-tab-item-1", "Item 1")
                                                                .href("#item-00")
                                                                .addContent(tabContent().text("Item 1")))
                                                        .addItem(tab(a(), "secondary-tab-item-2", "Item 2")
                                                                .href("#item-01")
                                                                .addContent(tabContent().text("Item 2")))
                                                        .addItem(tab(a(), "secondary-tab-item-3", "Item 3")
                                                                .href("#item-02")
                                                                .addContent(tabContent().text("Item 3")))
                                                        .addItem(tab(a(), "secondary-tab-disabled", "Disabled")
                                                                .href("#item-03")
                                                                .disabled()
                                                                .addContent(tabContent().text("Disabled")))
                                                        .addItem(tab(a(), "secondary-tab-disabled-aria", "ARIA Disabled")
                                                                .href("#item-04")
                                                                .ariaDisabled()
                                                                .addContent(tabContent().text("ARIA Disabled")))
                                                        .addItem(tab(a(), "secondary-tab-item-6", "Item 6")
                                                                .href("#item-05")
                                                                .addContent(tabContent().text("Item 6"))))))
                                .addItem(tab(a(), "tabs-subtab-nav-containers", "Containers")
                                        .href("#item-1")
                                        .addContent(tabContent().text("Containers")))
                                .addItem(tab(a(), "tabs-subtab-nav-database", "Database")
                                        .href("#item-2")
                                        .addContent(tabContent().text("Database")))
                                .addItem(tab(a(), "tabs-subtab-nav-disabled", "Disabled")
                                        .href("#item-3")
                                        .disabled()
                                        .addContent(tabContent().text("Disabled")))
                                .addItem(tab(a(), "tabs-subtab-nav-disabled-aria", "ARIA Disabled")
                                        .href("#item-4")
                                        .ariaDisabled()
                                        .addContent(tabContent().text("ARIA Disabled")))
                                .addItem(tab(a(), "tabs-secondary-network", "Network")
                                        .href("#item-5")
                                        .addContent(tabContent().text("Network"))))
                        .element()
                // @code-end:tabs-subtab-nav
        ));

        addSnippet(new Snippet("tabs-body-padding", "With tab content with body and padding",
                code("tabs-body-padding"), () ->
                // @code-start:tabs-body-padding
                div()
                        .add(tabs()
                                .addItems(range(1, 4).boxed().collect(toList()), index ->
                                        tab("tabs-body-padding-" + index, "Tab item " + index)
                                                .addContent(tabContent()
                                                        .addBody(tabContentBody().padding()
                                                                .text("Tab section " + index + " with body and padding")))))
                        .element()
                // @code-end:tabs-body-padding
        ));

        addSnippet(new Snippet("tabs-promise", "Children mounting on click",
                code("tabs-promise"), () ->
                // @code-start:tabs-promise
                div()
                        .add(tabs().noInitialSelection()
                                .addItems(range(1, 4).boxed().collect(toList()), index ->
                                        tab("tabs-promise-" + index, "Tab item " + index)
                                                .addContent(tabs -> new Promise<>((res, rej) -> setTimeout(__ ->
                                                                res.onInvoke(tabContent().text("Tab section " + index)),
                                                        1234 + new Random().nextInt(3456))))))
                        .element()
                // @code-end:tabs-promise
        ));

        addSnippet(new Snippet("tabs-hide-tab", "Toggled tab content",
                code("tabs-hide-tab"), () -> {
            // @code-start:tabs-hide-tab
            Tabs tabs = tabs();
            Button button = button("Hide tab 2").primary()
                    .onClick((event, btn) -> {
                        Tab tab = tabs.tab("tabs-hide-tab-2");
                        tab.hidden(!tab.hidden());
                        btn.text((tab.hidden() ? "Show" : "Hide") + " tab 2");
                    });
            return div()
                    .add(button.css(util("mb-lg")))
                    .add(tabs
                            .addItems(range(1, 4).boxed().collect(toList()), index ->
                                    tab("tabs-hide-tab-" + index, "Tab item " + index)
                                            .addContent(tabContent().text("Tab section " + index))))
                    .element();
            // @code-end:tabs-hide-tab
        }));

        addSnippet(new Snippet("tabs-dynamic", "Dynamic tabs",
                code("tabs-dynamic"), () -> {
            // @code-start:tabs-dynamic
            int[] counter = new int[]{6};
            //noinspection Convert2Diamond
            CloseHandler<Tab> closeHandler = new CloseHandler<Tab>() {
                @Override
                public boolean shouldClose(Event event, Tab tab) {
                    return window.confirm("Are you sure you want to close '" + tab.text() + "'?");
                }

                @Override
                public void onClose(Event event, Tab tab) {
                    console.log(tab.text() + " left the building.");
                }
            };
            return div()
                    .add(tabs()
                            .closeable()
                            .onAdd(tabs -> {
                                counter[0]++;
                                return tab("tabs-dynamic-" + counter[0], "Terminal " + counter[0])
                                        .addContent(tabContent().text("Terminal " + counter[0]));
                            })
                            .addItems(range(1, 4).boxed().collect(toList()), index ->
                                    tab("tabs-dynamic-" + index, "Terminal " + index)
                                            .addContent(tabContent().text("Terminal " + index)))
                            .addItem(tab("tabs-dynamic-4", "Terminal 4")
                                    .onClose(closeHandler)
                                    .addContent(tabContent().text("Terminal 4")))
                            .addItems(range(5, 7).boxed().collect(toList()), index ->
                                    tab("tabs-dynamic-" + index, "Terminal " + index)
                                            .addContent(tabContent().text("Terminal " + index))))
                    .element();
            // @code-end:tabs-dynamic
        }));

        addSnippet(new Snippet("tabs-help", "With help action popover",
                code("tabs-help"), () ->
                // @code-start:tabs-help
                div()
                        .add(tabs()
                                .addItem(tab("tabs-help-users", "Users")
                                        .addContent(tabContent().text("Users"))
                                        .help(popover()
                                                .addHeader("Help popover for Users")
                                                .addBody(LoremIpsum.paragraphs(3))
                                                .addFooter("Popover footer")))
                                .addItem(tab("tabs-help-containers", "Containers")
                                        .addContent(tabContent().text("Containers"))
                                        .help(popover()
                                                .addHeader("Help popover for Containers")
                                                .addBody(LoremIpsum.paragraphs(3))
                                                .addFooter("Popover footer")))
                                .addItem(tab("tabs-help-database", "Database")
                                        .addContent(tabContent().text("Database"))
                                        .help(popover()
                                                .addHeader("Help popover for Database")
                                                .addBody(LoremIpsum.paragraphs(3))
                                                .addFooter("Popover footer")))
                                .addItem(tab("tabs-help-disabled", "Disabled")
                                        .disabled()
                                        .addContent(tabContent().text("Disabled"))
                                        .help(popover()
                                                .addHeader("Help popover for Disabled")
                                                .addBody(LoremIpsum.paragraphs(3))
                                                .addFooter("Popover footer")))
                                .addItem(tab("tabs-help-disabled-aria", "ARIA Disabled")
                                        .ariaDisabled()
                                        .addContent(tabContent().text("ARIA Disabled"))
                                        .help(popover()
                                                .addHeader("Help popover for ARIA Disabled")
                                                .addBody(LoremIpsum.paragraphs(3))
                                                .addFooter("Popover footer"))))
                        .element()
                // @code-end:tabs-help
        ));

        addSnippet(new Snippet("tabs-help-close", "With help and close actions",
                code("tabs-help-close"), () ->
                // @code-start:tabs-help-close
                div()
                        .add(tabs()
                                .closeable()
                                .addItems(range(1, 4).boxed().collect(toList()), index ->
                                        tab("tabs-help-close-" + index, "Terminal " + index)
                                                .help(popover()
                                                        .addHeader("Help popover for terminal " + index)
                                                        .addBody(LoremIpsum.paragraphs(3))
                                                        .addFooter("Popover footer"))
                                                .addContent(tabContent().text("Terminal " + index))))
                        .element()
                // @code-end:tabs-help-close
        ));

        startApiDocs(Tabs.class);
        addApiDoc(Tab.class, subcomponent);
        addApiDoc(TabContent.class, subcomponent);
        addApiDoc(TabContentBody.class, subcomponent);
        addApiDoc(Tabs.class, component);
    }
}
