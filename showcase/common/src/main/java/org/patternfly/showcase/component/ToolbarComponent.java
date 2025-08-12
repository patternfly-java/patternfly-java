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
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.list.List.list;
import static org.patternfly.component.list.ListItem.listItem;
import static org.patternfly.component.textinputgroup.TextInputGroup.searchInputGroup;
import static org.patternfly.component.toolbar.AlignItems.center;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarGroup.toolbarGroup;
import static org.patternfly.component.toolbar.ToolbarGroupType.actionGroup;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
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

        startExamples();
        addSnippet(new Snippet("toolbar-items", "Toolbar items",
                code("toolbar-items"), () ->
                // @code-start:toolbar-items
                div()
                        .add(toolbar()
                                .addContent(toolbarContent()
                                        .addItem(toolbarItem()
                                                .add(searchInputGroup()))
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
                                            .add(searchInputGroup()))
                                    .addItem(toolbarItem()
                                            .add(even))))
                    .add(numbers.css(util("mt-sm")))
                    .add(sticky.css(util("mt-sm")))
                    .element();
            // @code-end:toolbar-sticky
        }));

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
