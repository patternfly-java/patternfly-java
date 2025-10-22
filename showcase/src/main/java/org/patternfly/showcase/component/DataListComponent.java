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

import java.util.function.Function;

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.list.DataList;
import org.patternfly.component.list.DataListAction;
import org.patternfly.component.list.DataListCell;
import org.patternfly.component.list.DataListExpandableContent;
import org.patternfly.component.list.DataListItem;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.list.DataList.dataList;
import static org.patternfly.component.list.DataListAction.dataListAction;
import static org.patternfly.component.list.DataListCell.dataListCell;
import static org.patternfly.component.list.DataListExpandableContent.dataListExpandableContent;
import static org.patternfly.component.list.DataListItem.dataListItem;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.icon.IconSets.fas.codeBranch;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.alignRight;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.noFill;

@Route(value = "/components/data-list", title = "Data list")
public class DataListComponent extends SnippetPage {

    public DataListComponent() {
        super(components.get("data-list"));

        startExamples();
        addSnippet(new Snippet("data-list-basic", "Basic",
                code("data-list-basic"), () ->
                // @code-start:data-list-basic
                div()
                        .add(dataList()
                                .addItem(dataListItem("data-list-basic-0")
                                        .addCell(dataListCell()
                                                .add(span().id("data-list-basic-0")
                                                        .text("Primary content")))
                                        .addCell(dataListCell()
                                                .text("Secondary content")))
                                .addItem(dataListItem("data-list-basic-1")
                                        .addCell(dataListCell().noFill()
                                                .add(span().id("data-list-basic-1")
                                                        .text("Secondary content (" + modifier(noFill) + ")")))
                                        .addCell(dataListCell().noFill().alignRight()
                                                .text("Secondary content (" + modifier(alignRight) + " " +
                                                        modifier(noFill) + ")"))))
                        .element()
                // @code-end:data-list-basic
        ));

        addSnippet(new Snippet("data-list-compact", "Compact",
                code("data-list-compact"), () ->
                // @code-start:data-list-compact
                div()
                        .add(dataList().compact()
                                .addItem(dataListItem("data-list-compact-0")
                                        .addCell(dataListCell()
                                                .add(span().id("data-list-compact-0")
                                                        .text("Primary content")))
                                        .addCell(dataListCell()
                                                .text("Secondary content")))
                                .addItem(dataListItem("data-list-compact-1")
                                        .addCell(dataListCell().noFill()
                                                .add(span().id("data-list-compact-1")
                                                        .text("Secondary content (" + modifier(noFill) + ")")))
                                        .addCell(dataListCell().noFill().alignRight()
                                                .text("Secondary content (" + modifier(alignRight) + " " +
                                                        modifier(noFill) + ")"))))
                        .element()
                // @code-end:data-list-compact
        ));

        addSnippet(new Snippet("data-list-expandable", "Expandable",
                code("data-list-expandable"), () -> {
            // @code-start:data-list-expandable
            Function<String, Dropdown> dropdown = id -> dropdown(ellipsisV(), "kebab dropdown toggle")
                    .addMenu(dropdownMenu()
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItem(menuItem(Id.build(id, "item-0"), "Action"))
                                            .addItem(linkMenuItem(Id.build(id, "item-1"), "Link", "#item-1"))
                                            .addItem(menuItem(Id.build(id, "item-2"), "Disabled action")
                                                    .disabled())
                                            .addItem(linkMenuItem(Id.build(id, "item-3"), "Disabled link", "#item-3")
                                                    .disabled()))));

            DataListItem item0 = dataListItem("data-list-expandable-0");
            DataListItem item2 = dataListItem("data-list-expandable-2");
            DataList dataList = dataList()
                    .addItem(item0
                            .expandable()
                            .addCell(dataListCell().icon(codeBranch()))
                            .addCell(dataListCell()
                                    .add(span().id("data-list-expandable-0")
                                            .text("Primary content. "))
                                    .add(span().text(LoremIpsum.paragraph())))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addAction(dataListAction(true)
                                    .add(dropdown.apply("data-list-expandable-0")))
                            .addExpandableContent(dataListExpandableContent()
                                    .text(LoremIpsum.paragraphs(5))))
                    .addItem(dataListItem("data-list-expandable-1")
                            .expandable()
                            .addCell(dataListCell().icon(codeBranch()))
                            .addCell(dataListCell()
                                    .add(span().id("data-list-expandable-1")
                                            .text("Secondary content. "))
                                    .add(span().text(LoremIpsum.paragraph())))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addAction(dataListAction(true)
                                    .add(dropdown.apply("data-list-expandable-1")))
                            .addExpandableContent(dataListExpandableContent()
                                    .text(LoremIpsum.paragraphs(5))))
                    .addItem(item2
                            .expandable()
                            .addCell(dataListCell().icon(codeBranch()))
                            .addCell(dataListCell()
                                    .add(span().id("data-list-expandable-2")
                                            .text("Tertiary content. "))
                                    .add(span().text(LoremIpsum.paragraph())))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addCell(dataListCell().text(LoremIpsum.paragraph()))
                            .addAction(dataListAction(true)
                                    .add(dropdown.apply("data-list-expandable-2")))
                            .addExpandableContent(dataListExpandableContent().noPadding()
                                    .text("This expandable section has no padding. ")));
            item0.expand();
            item2.expand();
            return dataList.element();
            // @code-end:data-list-expandable
        }));

        startApiDocs(DataList.class);
        addApiDoc(DataList.class, component);
        addApiDoc(DataListAction.class, subcomponent);
        addApiDoc(DataListCell.class, subcomponent);
        addApiDoc(DataListExpandableContent.class, subcomponent);
        addApiDoc(DataListItem.class, subcomponent);
    }
}
