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

import java.util.List;
import java.util.Random;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.router.Route;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.component.table.Table;
import org.patternfly.component.table.TableCaption;
import org.patternfly.component.table.TableText;
import org.patternfly.component.table.Tbody;
import org.patternfly.component.table.Td;
import org.patternfly.component.table.Th;
import org.patternfly.component.table.Thead;
import org.patternfly.component.table.Tr;
import org.patternfly.component.table.Wrap;
import org.patternfly.component.togglegroup.ToggleGroup;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.showcase.model.Repository;
import org.patternfly.style.Size;

import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.htmlElement;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.table.Table.table;
import static org.patternfly.component.table.TableCaption.tableCaption;
import static org.patternfly.component.table.TableText.tableText;
import static org.patternfly.component.table.TableType.treeTable;
import static org.patternfly.component.table.Tbody.tbody;
import static org.patternfly.component.table.Td.td;
import static org.patternfly.component.table.Th.th;
import static org.patternfly.component.table.Thead.thead;
import static org.patternfly.component.table.TitleCell.titleCell;
import static org.patternfly.component.table.Tr.tr;
import static org.patternfly.component.table.Wrap.fitContent;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.icon.IconSets.fas.codeBranch;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.icon.IconSets.fas.folder;
import static org.patternfly.icon.IconSets.fas.folderOpen;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;
import static org.patternfly.showcase.model.Repositories.repositories;
import static org.patternfly.showcase.model.Repository.columns;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/table", title = "Table")
public class TableComponent extends SnippetPage {

    public TableComponent() {
        super(components.get("table"));

        startExamples();
        addSnippet(new Snippet("table-basic", "Basic",
                code("table-basic"), () -> {
            // @code-start:table-basic
            List<Repository> repositories = repositories(3);
            Table table = table()
                    .addCaption(tableCaption().text("Simple table using composable components"))
                    .addHead(thead()
                            .addRow(tr("table-basic-head")
                                    .addItems(columns, t -> th(t.key).text(t.value))))
                    .addBody(tbody()
                            .addRows(repositories, repository -> tr("table-basic-" + repository.id)
                                    .addItem(td(columns.get(0).value).text(repository.name))
                                    .addItem(td(columns.get(1).value).text(String.valueOf(repository.branches)))
                                    .addItem(td(columns.get(2).value).text(String.valueOf(repository.pullRequests)))
                                    .addItem(td(columns.get(3).value).text(String.valueOf(repository.workspaces)))
                                    .addItem(td(columns.get(4).value)
                                            .add(htmlElement("relative-time", HTMLElement.class)
                                                    .attr("datetime", repository.lastCommit.toISOString())
                                                    .text(repository.lastCommit.toISOString())))));
            ToggleGroup toggleGroup = toggleGroup(single)
                    .addItem(toggleGroupItem("table-basic-default", "Default")
                            .onClick((e, tgi) -> {
                                table.compact(false);
                                table.noBorders(false);
                            }))
                    .addItem(toggleGroupItem("table-basic-compact", "Compact")
                            .onClick((e, tgi) -> {
                                table.compact(true);
                                table.noBorders(false);
                            }))
                    .addItem(toggleGroupItem("table-basic-default-compact-borderless", "Compact borderless")
                            .onClick((e, tgi) -> {
                                table.compact(true);
                                table.noBorders(true);
                            }));
            toggleGroup.select("table-basic-default");
            return div()
                    .add(toggleGroup)
                    .add(table)
                    .element();
            // @code-end:table-basic
        }));

        addSnippet(new Snippet("table-row-wrapper", "Custom row wrapper, header tooltips & popovers",
                code("table-row-wrapper"), () ->
                // @code-start:table-row-wrapper
                nyi().element()
                // @code-end:table-row-wrapper
        ));

        addSnippet(new Snippet("table-sort", "Sortable & wrapping headers",
                code("table-sort"), () ->
                // @code-start:table-sort
                nyi().element()
                // @code-end:table-sort
        ));

        addSnippet(new Snippet("table-sort-custom", "Sortable - custom control",
                code("table-sort-custom"), () ->
                // @code-start:table-sort-custom
                nyi().element()
                // @code-end:table-sort-custom
        ));

        addSnippet(new Snippet("table-sel-check", "Selectable with checkbox",
                code("table-sel-check"), () ->
                // @code-start:table-sel-check
                nyi().element()
                // @code-end:table-sel-check
        ));

        addSnippet(new Snippet("table-sel-radio", "Selectable radio input",
                code("table-sel-radio"), () ->
                // @code-start:table-sel-radio
                nyi().element()
                // @code-end:table-sel-radio
        ));

        addSnippet(new Snippet("table-sel-click", "Row click handler, clickable rows",
                code("table-sel-click"), () -> {
            // @code-start:table-sel-click
            List<Repository> repositories = repositories(5);
            return table()
                    .addHead(thead()
                            .addRow(tr("table-sel-click-head")
                                    .addItems(columns, t -> th(t.key).text(t.value))))
                    .addBody(tbody()
                            .addRows(repositories, repository -> tr("table-sel-click-" + repository.id).clickable()
                                    .addItem(td(columns.get(0).value).text(repository.name))
                                    .addItem(td(columns.get(1).value).text(String.valueOf(repository.branches)))
                                    .addItem(td(columns.get(2).value).text(String.valueOf(repository.pullRequests)))
                                    .addItem(td(columns.get(3).value).text(String.valueOf(repository.workspaces)))
                                    .addItem(td(columns.get(4).value)
                                            .add(htmlElement("relative-time", HTMLElement.class)
                                                    .attr("datetime", repository.lastCommit.toISOString())
                                                    .text(repository.lastCommit.toISOString())))))
                    .element();
            // @code-end:table-sel-click
        }));

        addSnippet(new Snippet("table-actions", "Actions",
                code("table-actions"), () -> {
            // @code-start:table-actions
            List<Repository> repositories = repositories(5);
            Supplier<Dropdown> dropdown = () -> dropdown(ellipsisV(), "kebab dropdown toggle")
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
                                            .addItem(linkMenuItem("item-5", "Separated link", "#item-5")))));
            return table()
                    .addHead(thead()
                            .addRow(tr("table-actions-head")
                                    .addItems(columns, t -> th(t.key).text(t.value))
                                    .addItem(th().screenReader("Primary action"))
                                    .addItem(th().screenReader("Secondary action"))))
                    .addBody(tbody()
                            .addRows(repositories, repository -> tr("table-actions-" + repository.id)
                                    .addItem(td(columns.get(0).value).text(repository.name))
                                    .addItem(td(columns.get(1).value).text(String.valueOf(repository.branches)))
                                    .addItem(td(columns.get(2).value).text(String.valueOf(repository.pullRequests)))
                                    .addItem(td(columns.get(3).value).text(String.valueOf(repository.workspaces)))
                                    .addItem(td(columns.get(4).value)
                                            .add(htmlElement("relative-time", HTMLElement.class)
                                                    .attr("datetime", repository.lastCommit.toISOString())
                                                    .text(repository.lastCommit.toISOString())))
                                    .run(tr -> {
                                        boolean primaryAction = repository.pullRequests % 5 != 0;
                                        boolean secondaryAction = repository.pullRequests % 2 != 0;
                                        if (primaryAction) {
                                            tr.addItem(td("Primary action").action().wrap(fitContent)
                                                    .add(tableText()
                                                            .add(button().secondary().text("Start"))));
                                            tr.addItem(td().actions().add(dropdown.get().disabled(secondaryAction)));
                                        } else {
                                            tr.addItem(td());
                                            tr.addItem(td());
                                        }
                                    })))
                    .element();
            // @code-end:table-actions
        }));

        addSnippet(new Snippet("table-actions-overflow", "Actions overflow",
                code("table-actions-overflow"), () ->
                // @code-start:table-actions-overflow
                nyi().element()
                // @code-end:table-actions-overflow
        ));

        addSnippet(new Snippet("table-exp", "Expandable",
                code("table-exp"), () ->
                // @code-start:table-exp
                nyi().element()
                // @code-end:table-exp
        ));

        addSnippet(new Snippet("table-exp-compound", "Compound expandable",
                code("table-exp-compound"), () ->
                // @code-start:table-exp-compound
                nyi().element()
                // @code-end:table-exp-compound
        ));

        addSnippet(new Snippet("table-cell-width", "Cell width, breakpoint modifiers",
                code("table-cell-width"), () ->
                // @code-start:table-cell-width
                nyi().element()
                // @code-end:table-cell-width
        ));

        addSnippet(new Snippet("table-text", "Controlling text",
                code("table-text"), () ->
                // @code-start:table-text
                nyi().element()
                // @code-end:table-text
        ));

        addSnippet(new Snippet("table-text-mod", "Modifiers with table text",
                code("table-text-mod"), () ->
                // @code-start:table-text-mod
                nyi().element()
                // @code-end:table-text-mod
        ));

        addSnippet(new Snippet("table-empty", "Empty state",
                code("table-empty"), () -> {
            // @code-start:table-empty
            return table()
                    .addHead(thead()
                            .addRow(tr("table-empty-head")
                                    .addItems(columns, t -> th(t.key).text(t.value))))
                    .addBody(tbody()
                            .empty(columns.size(), emptyState()
                                    .size(Size.sm)
                                    .headingLevel(2)
                                    .icon(search())
                                    .text("No results found")
                                    .addBody(emptyStateBody().text(
                                            "Clear all filters and try again."))
                                    .addFooter(emptyStateFooter()
                                            .add(button().link().text("Clear all filters")))))
                    .element();
            // @code-end:table-empty
        }));

        addSnippet(new Snippet("table-fav", "Favoritable (implemented with sortable)",
                code("table-fav"), () ->
                // @code-start:table-fav
                nyi().element()
                // @code-end:table-fav
        ));

        addSnippet(new Snippet("table-tree-static", "Tree table (static)",
                code("table-tree-static"), () -> {
            // @code-start:table-tree-static
            Function<Repository, Tr> repositoryTr = repository -> tr("table-tree-static-" + repository.id)
                    .addTitleCell(titleCell()
                            .text(repository.name)
                            .run(titleCell -> {
                                if (repository.children != null && !repository.children.isEmpty()) {
                                    titleCell.icon(folder()).expandedIcon(folderOpen());
                                } else {
                                    titleCell.icon(codeBranch());
                                }
                            }))
                    .addItem(td(columns.get(1).value).text(String.valueOf(repository.branches)))
                    .addItem(td(columns.get(2).value).text(String.valueOf(repository.pullRequests)))
                    .addItem(td(columns.get(3).value).text(String.valueOf(repository.workspaces)))
                    .addItem(td(columns.get(4).value)
                            .add(htmlElement("relative-time", HTMLElement.class)
                                    .attr("datetime", repository.lastCommit.toISOString())
                                    .text(repository.lastCommit.toISOString())));

            List<Repository> repositories = repositories(5, 2);
            return table(treeTable)
                    .addHead(thead()
                            .addRow(tr("table-tree-static-head")
                                    .addItems(columns, t -> th(t.key).text(t.value))))
                    .addBody(tbody()
                            .addRows(repositories, r0 -> repositoryTr.apply(r0) // level 1
                                    .addChildren(r0.children, r1 -> repositoryTr.apply(r1) // level 2
                                            .addChildren(r1.children, repositoryTr)))) // level 3
                    .element();
            // @code-end:table-tree-static
        }));

        addSnippet(new Snippet("table-tree-async", "Tree table (async)",
                code("table-tree-async"), () -> {
            // @code-start:table-tree-async
            Function<Repository, Tr> repositoryTr = repository -> tr("table-tree-async-" + repository.id)
                    .addTitleCell(titleCell()
                            .text(repository.name)
                            .run(titleCell -> {
                                if (repository.children != null && !repository.children.isEmpty()) {
                                    titleCell.icon(folder()).expandedIcon(folderOpen());
                                } else {
                                    titleCell.icon(codeBranch());
                                }
                            }))
                    .addItem(td(columns.get(1).value).text(String.valueOf(repository.branches)))
                    .addItem(td(columns.get(2).value).text(String.valueOf(repository.pullRequests)))
                    .addItem(td(columns.get(3).value).text(String.valueOf(repository.workspaces)))
                    .addItem(td(columns.get(4).value)
                            .add(htmlElement("relative-time", HTMLElement.class)
                                    .attr("datetime", repository.lastCommit.toISOString())
                                    .text(repository.lastCommit.toISOString())));

            Function<Repository, Function<Tr, Promise<Iterable<Tr>>>> repositoryChildren = repository -> tr ->
                    new Promise<>((resolve, reject) -> {
                        boolean boom = Math.random() < 0.25;
                        int delay = new Random().nextInt(2000); // simulate remote call
                        setTimeout(__ -> {
                            if (boom) {
                                reject.onInvoke("Random error");
                            } else {
                                resolve.onInvoke(repository.children.stream()
                                        .map(repositoryTr)
                                        .collect(toList()));
                            }
                        }, delay);
                    });

            Table table = table(treeTable);
            List<Repository> repositories = repositories(5, 1);
            return div()
                    .add(button("Reset all").css(util("mb-sm"))
                            .primary()
                            .onClick((e, b) -> table.reset()))
                    .add(table
                            .addHead(thead()
                                    .addRow(tr("table-tree-async-head")
                                            .addItems(columns, t -> th(t.key).text(t.value))))
                            .addBody(tbody()
                                    .addRows(repositories, repository -> repositoryTr.apply(repository)
                                            .addChildren(repositoryChildren.apply(repository)))))
                    .element();
            // @code-end:table-tree-async
        }));

        addSnippet(new Snippet("table-tree-no-inset", "Flat tree table with no inset",
                code("table-tree-no-inset"), () ->
                // @code-start:table-tree-no-inset
                nyi().element()
                // @code-end:table-tree-no-inset
        ));

        addSnippet(new Snippet("table-draggable", "Draggable row table",
                code("table-draggable"), () ->
                // @code-start:table-draggable
                nyi().element()
                // @code-end:table-draggable
        ));

        addSnippet(new Snippet("table-sticky-mod", "Sticky table modifiers",
                code("table-sticky-mod"), () ->
                // @code-start:table-sticky-mod
                nyi().element()
                // @code-end:table-sticky-mod
        ));

        addSnippet(new Snippet("table-sticky-col", "Sticky column",
                code("table-sticky-col"), () ->
                // @code-start:table-sticky-col
                nyi().element()
                // @code-end:table-sticky-col
        ));

        addSnippet(new Snippet("table-sticky-col-left", "Multiple left-aligned sticky columns",
                code("table-sticky-col-left"), () ->
                // @code-start:table-sticky-col-left
                nyi().element()
                // @code-end:table-sticky-col-left
        ));

        addSnippet(new Snippet("table-sticky-col-right", "Multiple right-aligned sticky columns",
                code("table-sticky-col-right"), () ->
                // @code-start:table-sticky-col-right
                nyi().element()
                // @code-end:table-sticky-col-right
        ));

        addSnippet(new Snippet("table-sticky-col-header", "Sticky columns and header",
                code("table-sticky-col-header"), () ->
                // @code-start:table-sticky-col-header
                nyi().element()
                // @code-end:table-sticky-col-header
        ));

        addSnippet(new Snippet("table-nested-column-headers", "Nested column headers",
                code("table-nested-column-headers"), () ->
                // @code-start:table-nested-column-headers
                nyi().element()
                // @code-end:table-nested-column-headers
        ));

        addSnippet(new Snippet("table-nested-column-headers-exp", "Nested column headers and expandable rows",
                code("table-nested-column-headers-exp"), () ->
                // @code-start:table-nested-column-headers-exp
                nyi().element()
                // @code-end:table-nested-column-headers-exp
        ));

        addSnippet(new Snippet("table-nested-expandable", "Expandable with nested table",
                code("table-nested-expandable"), () ->
                // @code-start:table-nested-expandable
                nyi().element()
                // @code-end:table-nested-expandable
        ));

        addSnippet(new Snippet("table-nested-sticky-header", "Nested sticky header",
                code("table-nested-sticky-header"), () ->
                // @code-start:table-nested-sticky-header
                nyi().element()
                // @code-end:table-nested-sticky-header
        ));

        addSnippet(new Snippet("table-striped", "Striped",
                code("table-striped"), () ->
                // @code-start:table-striped
                nyi().element()
                // @code-end:table-striped
        ));

        addSnippet(new Snippet("table-striped-expandable", "Striped expandable",
                code("table-striped-expandable"), () ->
                // @code-start:table-striped-expandable
                nyi().element()
                // @code-end:table-striped-expandable
        ));

        addSnippet(new Snippet("table-striped-tbody", "Striped multiple tobdy",
                code("table-striped-tbody"), () ->
                // @code-start:table-striped-tbody
                nyi().element()
                // @code-end:table-striped-tbody
        ));

        addSnippet(new Snippet("table-striped-tr", "Striped tr",
                code("table-striped-tr"), () ->
                // @code-start:table-striped-tr
                nyi().element()
                // @code-end:table-striped-tr
        ));

        startApiDocs(Table.class);
        addApiDoc(Table.class, component);
        addApiDoc(TableText.class, subcomponent);
        addApiDoc(TableCaption.class, subcomponent);
        addApiDoc(Tbody.class, subcomponent);
        addApiDoc(Td.class, subcomponent);
        addApiDoc(Th.class, subcomponent);
        addApiDoc(Thead.class, subcomponent);
        addApiDoc(Tr.class, subcomponent);
        addApiDoc(Wrap.class, modifier);
    }
}
