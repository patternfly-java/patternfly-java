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

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.list.List;
import org.patternfly.component.list.ListItem;
import org.patternfly.component.toolbar.AlignItems;
import org.patternfly.component.toolbar.RowWrap;
import org.patternfly.component.toolbar.Toolbar;
import org.patternfly.component.toolbar.ToolbarColor;
import org.patternfly.component.toolbar.ToolbarContent;
import org.patternfly.component.toolbar.ToolbarFilterChipGroup;
import org.patternfly.component.toolbar.ToolbarFilterContent;
import org.patternfly.component.toolbar.ToolbarGroup;
import org.patternfly.component.toolbar.ToolbarGroupType;
import org.patternfly.component.toolbar.ToolbarItem;
import org.patternfly.component.toolbar.ToolbarItemType;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Classes;
import org.patternfly.style.Inset;

import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.list.List.list;
import static org.patternfly.component.list.ListItem.listItem;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.toolbar.AlignItems.center;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarColor.noBackground;
import static org.patternfly.component.toolbar.ToolbarColor.primary;
import static org.patternfly.component.toolbar.ToolbarColor.secondary;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarGroup.toolbarGroup;
import static org.patternfly.component.toolbar.ToolbarGroupType.actionGroup;
import static org.patternfly.component.toolbar.ToolbarGroupType.actionGroupPlain;
import static org.patternfly.component.toolbar.ToolbarGroupType.filterGroup;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
import static org.patternfly.component.toolbar.ToolbarToggleGroup.toolbarToggleGroup;
import static org.patternfly.icon.IconSets.fas.clone_;
import static org.patternfly.icon.IconSets.fas.edit;
import static org.patternfly.icon.IconSets.fas.sync;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Variable.componentVar;

@Route(value = "/components/toolbar", title = "Toolbar")
public class ToolbarComponent extends SnippetPage {

    public ToolbarComponent() {
        super(components.get("toolbar"));

        // ------------------------------------------------------ examples

        addHeader("toolbar-examples", "Examples");
        addSnippet(new Snippet("toolbar-items", "Toolbar items",
                code("toolbar-items"), () ->
                // @code-start:toolbar-items
                div()
                        .add(toolbar()
                                .addContent(toolbarContent()
                                        .addItem(toolbarItem()
                                                .add(textInputGroup("toolbar-items-tig-0").clear()))
                                        .addItem(toolbarItem()
                                                .add(button("Action").secondary()))
                                        .addDivider()
                                        .addItem(toolbarItem()
                                                .add(button("Action").primary()))))
                        .element()
                // @code-end:toolbar-items
        ));

        addSnippet(new Snippet("toolbar-inset", "With adjusted inset",
                code("toolbar-inset"), () ->
                // @code-start:toolbar-inset
                div()
                        .add(toolbar().inset(breakpoints(
                                        Breakpoint.default_, Inset.md,
                                        Breakpoint.md, Inset.sm,
                                        Breakpoint.xl, Inset._2xl,
                                        Breakpoint._2xl, Inset.lg))
                                .addContent(toolbarContent()
                                        .addGroup(toolbarGroup(actionGroup)
                                                .addItem(toolbarItem().add(button("Action").secondary()))
                                                .addItem(toolbarItem().add(button("Action").secondary()))
                                                .addItem(toolbarItem().add(button("Action").secondary()))
                                                .addItem(toolbarItem().add(button("Action").secondary())))
                                        .addDivider()
                                        .addGroup(toolbarGroup(actionGroup)
                                                .addItem(toolbarItem().add(button("Action").secondary()))
                                                .addItem(toolbarItem().add(button("Action").primary())))
                                        .addDivider()
                                        .addGroup(toolbarGroup(actionGroup)
                                                .addItem(toolbarItem().add(button("Action").secondary()))
                                                .addItem(toolbarItem().add(button("Action").primary())))))
                        .element()
                // @code-end:toolbar-inset
        ));

        addSnippet(new Snippet("toolbar-sticky", "Sticky toolbar",
                code("toolbar-sticky"), () -> {
            // @code-start:toolbar-sticky
            Toolbar toolbar = toolbar();
            List numbers = list(ol())
                    .plain()
                    .style(componentVar(component(Classes.list), "Gap").name, 0)
                    .addItems(range(1, 31).boxed().collect(toList()), number ->
                            listItem(Id.build("toolbar-sticky", number.toString()))
                                    .store("number", number)
                                    .text(number.toString()));
            Checkbox even = checkbox("toolbar-sticky-even", "toolbar-sticky-even", "Show only even number items")
                    .onChange((event, component, value) -> {
                        for (ListItem item : numbers.items()) {
                            int number = item.get("number");
                            setVisible(item, !value || number % 2 == 0);
                        }
                    });
            Checkbox sticky = checkbox("toolbar-sticky-sticky", "toolbar-sticky-sticky", "Is toolbar sticky")
                    .value(true)
                    .onChange((event, component, value) -> toolbar.sticky(value));
            return div().style("overflow-y: scroll; height: 200px;")
                    .add(toolbar.sticky()
                            .addContent(toolbarContent().alignItems(center)
                                    .addItem(toolbarItem()
                                            .add(textInputGroup("toolbar-sticky-tig-0").clear()))
                                    .addItem(toolbarItem()
                                            .add(even))))
                    .add(numbers.css(util("mt-sm")))
                    .add(sticky.css(util("mt-sm")))
                    .element();
            // @code-end:toolbar-sticky
        }));

        addSnippet(new Snippet("toolbar-groups", "With groups of items",
                code("toolbar-groups"), () ->
                // @code-start:toolbar-groups
                div()
                        .add(toolbar()
                                .addContent(toolbarContent()
                                        .addGroup(toolbarGroup(filterGroup)
                                                .addItem(toolbarItem().add(singleSelect("A")
                                                        .style("width", "88px")
                                                        .addMenu(singleSelectMenu()
                                                                .addContent(menuContent()
                                                                        .addList(menuList()
                                                                                .addItem(menuItem("toolbar-groups-a", "A")
                                                                                        .selected())
                                                                                .addItem(menuItem("toolbar-groups-b", "B"))
                                                                                .addItem(menuItem("toolbar-groups-c", "C")))))))
                                                .addItem(toolbarItem().add(singleSelect("1")
                                                        .style("width", "120px")
                                                        .addMenu(singleSelectMenu()
                                                                .addContent(menuContent()
                                                                        .addList(menuList()
                                                                                .addItem(menuItem("toolbar-groups-1", "1")
                                                                                        .selected())
                                                                                .addItem(menuItem("toolbar-groups-2", "2"))
                                                                                .addItem(menuItem("toolbar-groups-3", "3")))))))
                                                .addItem(toolbarItem().add(singleSelect("I")
                                                        .style("width", "96px")
                                                        .addMenu(singleSelectMenu()
                                                                .addContent(menuContent()
                                                                        .addList(menuList()
                                                                                .addItem(menuItem("toolbar-groups-i", "I")
                                                                                        .selected())
                                                                                .addItem(menuItem("toolbar-groups-ii", "II"))
                                                                                .addItem(menuItem("toolbar-groups-iii",
                                                                                        "III"))))))))
                                        .addGroup(toolbarGroup(actionGroupPlain)
                                                .addItem(toolbarItem().add(button(edit()).plain()))
                                                .addItem(toolbarItem().add(button(clone_()).plain()))
                                                .addItem(toolbarItem().add(button(sync()).plain())))
                                        .addGroup(toolbarGroup(actionGroup)
                                                .addItem(toolbarItem().add(button("Action").primary()))
                                                .addItem(toolbarItem().add(button("Secondary").secondary()))
                                                .addItem(toolbarItem().add(button("Tertiary").tertiary())))))
                        .element()
                // @code-end:toolbar-groups
        ));

        addSnippet(new Snippet("toolbar-color", "Background color variants",
                code("toolbar-color"), () ->
                // @code-start:toolbar-color
                div()
                        .add("No background")
                        .add(toolbar().color(noBackground)
                                .addContent(toolbarContent()
                                        .addItem(toolbarItem()
                                                .add(textInputGroup("toolbar-color-tig-0").clear()))
                                        .addItem(toolbarItem()
                                                .add(button("Action").secondary()))
                                        .addDivider()
                                        .addItem(toolbarItem()
                                                .add(button("Action").primary()))))
                        .add(br())
                        .add("Primary background")
                        .add(toolbar().color(primary)
                                .addContent(toolbarContent()
                                        .addItem(toolbarItem()
                                                .add(textInputGroup("toolbar-color-tig-1").clear()))
                                        .addItem(toolbarItem()
                                                .add(button("Action").secondary()))
                                        .addDivider()
                                        .addItem(toolbarItem()
                                                .add(button("Action").primary()))))
                        .add(br())
                        .add("Secondary background")
                        .add(toolbar().color(secondary)
                                .addContent(toolbarContent()
                                        .addItem(toolbarItem()
                                                .add(textInputGroup("toolbar-color-tig-2").clear()))
                                        .addItem(toolbarItem()
                                                .add(button("Action").secondary()))
                                        .addDivider()
                                        .addItem(toolbarItem()
                                                .add(button("Action").primary()))))
                        .element()
                // @code-end:toolbar-color
        ));

        // ------------------------------------------------------ examples

        addHeader("toolbar-filters", "Examples with toggle groups and filters",
                "The following examples use toggle groups to allow for more responsive and complex toolbars " +
                        "with multiple items and groups of items. To visualize responsive toolbar behavior in the following " +
                        "examples, resize the browser to a smaller screen width.");

        addSnippet(new Snippet("toolbar-tg", "Toggle groups",
                "A toggle group allows you to collapse a set of items into an overlay panel at a certain breakpoint. " +
                        "For example, when a toggle group contains filter controls, its contents will collapse into an " +
                        "overlay panel when the toolbar adapts to a change in the viewport size. The contents can be toggled " +
                        "by selecting the filter icon in the overlay panel.",
                code("toolbar-tg"), () ->
                // @code-start:toolbar-tg
                div()
                        .add(toolbar()
                                .addContent(toolbarContent()
                                        .addToggleGroup(toolbarToggleGroup()
                                                .addItem(toolbarItem()
                                                        .add(textInputGroup("toolbar-tg-0").clear()))
                                                .addGroup(toolbarGroup(filterGroup)
                                                        .addItem(toolbarItem().add(singleSelect("Running")
                                                                .style("width", "150px")
                                                                .addMenu(singleSelectMenu()
                                                                        .addContent(menuContent()
                                                                                .addList(menuList()
                                                                                        .addItem(menuItem("toolbar-tg-p",
                                                                                                "Pending"))
                                                                                        .addItem(menuItem("toolbar-tg-r",
                                                                                                "Running")
                                                                                                .selected())
                                                                                        .addItem(menuItem("toolbar-tg-c",
                                                                                                "Cancelled")))))))
                                                        .addItem(toolbarItem().add(singleSelect("Medium")
                                                                .style("width", "120px")
                                                                .addMenu(singleSelectMenu()
                                                                        .addContent(menuContent()
                                                                                .addList(menuList()
                                                                                        .addItem(
                                                                                                menuItem("toolbar-tg-l", "Low"))
                                                                                        .addItem(menuItem("toolbar-tg-m",
                                                                                                "Medium")
                                                                                                .selected())
                                                                                        .addItem(menuItem("toolbar-tg-h",
                                                                                                "High")))))))))))
                        .element()
                // @code-end:toolbar-tg
        ));

        startApiDocs(Toolbar.class);
        addApiDoc(AlignItems.class, other);
        addApiDoc(RowWrap.class, other);
        addApiDoc(Toolbar.class, component);
        addApiDoc(ToolbarColor.class, other);
        addApiDoc(ToolbarContent.class, subcomponent);
        addApiDoc(ToolbarFilterChipGroup.class, subcomponent);
        addApiDoc(ToolbarFilterContent.class, subcomponent);
        addApiDoc(ToolbarGroup.class, subcomponent);
        addApiDoc(ToolbarGroupType.class, other);
        addApiDoc(ToolbarItem.class, subcomponent);
        addApiDoc(ToolbarItemType.class, other);
    }
}
