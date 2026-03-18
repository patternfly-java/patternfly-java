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
package org.patternfly.showcase.extension;

import java.util.function.Function;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.extension.finder.Finder;
import org.patternfly.extension.finder.FinderColumn;
import org.patternfly.extension.finder.FinderColumnActions;
import org.patternfly.extension.finder.FinderColumnHeader;
import org.patternfly.extension.finder.FinderColumnSearch;
import org.patternfly.extension.finder.FinderItem;
import org.patternfly.extension.finder.FinderItemActions;
import org.patternfly.extension.finder.FinderItemDescription;
import org.patternfly.extension.finder.FinderPreview;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.showcase.model.File;
import org.patternfly.showcase.model.Files;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.component.list.DescriptionList.descriptionList;
import static org.patternfly.component.list.DescriptionListDescription.descriptionListDescription;
import static org.patternfly.component.list.DescriptionListGroup.descriptionListGroup;
import static org.patternfly.component.list.DescriptionListTerm.descriptionListTerm;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.extension.finder.Finder.finder;
import static org.patternfly.extension.finder.FinderColumn.finderColumn;
import static org.patternfly.extension.finder.FinderColumnActions.finderColumnActions;
import static org.patternfly.extension.finder.FinderColumnHeader.finderColumnHeader;
import static org.patternfly.extension.finder.FinderColumnSearch.finderColumnSearch;
import static org.patternfly.extension.finder.FinderItem.finderItem;
import static org.patternfly.extension.finder.FinderPreview.finderPreview;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.icon.IconSets.fas.redo;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.PredefinedIcon.predefinedIcon;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.extensions;
import static org.patternfly.style.Classes.filtered;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.util;

@Route(value = "/extensions/finder", title = "Finder")
public class FinderExtension extends SnippetPage {

    @SuppressWarnings("unchecked")
    public FinderExtension() {
        super(extensions.get("finder"));

        startExamples(content(p).editorial()
                .add("Some of the examples below rely on JSON data. Please see ")
                .add(a("https://github.com/patternfly-java/patternfly-java/blob/main/showcase/src/main/resources/org/patternfly/showcase/files.json",
                        "_blank").add(Elements.code("files.json")))
                .add(" and ")
                .add(a("https://github.com/patternfly-java/patternfly-java/blob/main/showcase/src/main/resources/org/patternfly/showcase/rhcp.json",
                        "_blank").add(Elements.code("rhcp.json")))
                .add(" for more information.")
        );
        addSnippet(new Snippet("finder-basic", "Basic",
                code("finder-basic"), () -> {
            // @code-start:finder-basic
            // Declare the functions as final arrays here so that they can call each other
            final Function<File, FinderItem>[] fileItem = new Function[1];
            final Function<File, FinderColumn>[] fileColumn = new Function[1];

            Function<String, FinderColumnHeader> demoHeader = text -> finderColumnHeader(text)
                    .addActions(finderColumnActions()
                            .addButton(button(plus()).plain())
                            .addButton(button(redo()).plain())
                            .addDropdown(mixedKebab(Id.build("finder-basic", text, "ca"))));

            fileColumn[0] = file -> finderColumn(file.id)
                    .addHeader(demoHeader.apply(file.name))
                    .run(column -> {
                        if (file.children != null) {
                            column.addItems(file.children.asList(), fileItem[0]);
                        }
                    });

            fileItem[0] = file -> finderItem(file.id, file.name)
                    .icon(predefinedIcon(file.icon))
                    .run(item -> {
                        if (file.description != null) {
                            item.addDescription(file.description);
                        }
                        if (file.children != null) {
                            item.nextColumn(() -> fileColumn[0].apply(file));
                        }
                    });

            return finder().addItem(finderColumn("root").run(column -> column
                            .addHeader(demoHeader.apply("Root"))
                            .addSearch(finderColumnSearch()
                                    .addSearchInput(searchInput(Id.unique("finder-basic"))
                                            .icon(search())
                                            .placeholder("Filter by name")
                                            .onInput((e, si, value) -> {
                                                String lcv = value.toLowerCase();
                                                for (FinderItem item : column.items()) {
                                                    item.classList().toggle(modifier(filtered),
                                                            !value.isEmpty() && !item.text()
                                                                    .toLowerCase()
                                                                    .contains(lcv));
                                                }
                                            })
                                            .onClear((e, si) ->
                                                    column.items().forEach(item ->
                                                            item.classList().remove(modifier(filtered))))))
                            .addItems(Files.data.asList(), fileItem[0])))
                    .element();
            // @code-end:finder-basic
        }));

        addSnippet(new Snippet("finder-preview", "With preview",
                code("finder-preview"), () ->
                // @code-start:finder-preview
                finder()
                        .addItem(finderColumn("root")
                                .addHeader(finderColumnHeader("Root"))
                                .addItems(Files.data.asList(), file -> finderItem(file.id, file.name)
                                        .icon(predefinedIcon(file.icon))
                                        .store("file", file)
                                        .run(item -> {
                                            if (file.description != null) {
                                                item.addDescription(file.description);
                                            }
                                        }))
                                .onPreview((item, preview) -> {
                                    File file = item.get("file");
                                    removeChildrenFrom(preview);
                                    preview.add(content(h1)
                                            .add(icon(predefinedIcon(file.icon)).inline())
                                            .add(" " + file.name));
                                    if (file.description != null) {
                                        preview.add(content(p).editorial().text(file.description));
                                    }
                                    if (file.meta != null) {
                                        preview.add(descriptionList().run(dl -> file.meta.forEach(key ->
                                                dl.addItem(descriptionListGroup(Id.unique("finder-preview", key))
                                                        .addTerm(descriptionListTerm(key))
                                                        .addDescription(descriptionListDescription(file.meta.get(key)))))));
                                    }
                                }))
                        .addPreview(finderPreview().css(util("p-md"))
                                .add(content(h1).text("Preview"))
                                .add(content(p).editorial().text("Please select an item to see the preview.")))
                        .element()
                // @code-end:finder-preview
        ));

        startApiDocs(Finder.class);
        addApiDoc(Finder.class, component);
        addApiDoc(FinderColumn.class, subcomponent);
        addApiDoc(FinderColumnHeader.class, subcomponent);
        addApiDoc(FinderColumnActions.class, subcomponent);
        addApiDoc(FinderColumnSearch.class, subcomponent);
        addApiDoc(FinderItem.class, subcomponent);
        addApiDoc(FinderItemActions.class, subcomponent);
        addApiDoc(FinderItemDescription.class, subcomponent);
        addApiDoc(FinderPreview.class, subcomponent);
    }
}
