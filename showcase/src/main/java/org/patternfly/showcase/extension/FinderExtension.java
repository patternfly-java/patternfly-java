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

import java.util.List;
import java.util.Random;
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
import org.patternfly.extension.finder.PreviewHandler;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.showcase.model.FileData;
import org.patternfly.showcase.model.Files;
import org.patternfly.showcase.model.Record;
import org.patternfly.showcase.model.Track;

import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;
import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
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
import static org.patternfly.extension.finder.FinderItem.emptyItem;
import static org.patternfly.extension.finder.FinderItem.finderItem;
import static org.patternfly.extension.finder.FinderPreview.finderPreview;
import static org.patternfly.icon.IconSets.fas.ban;
import static org.patternfly.icon.IconSets.fas.folder;
import static org.patternfly.icon.IconSets.fas.music;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.icon.IconSets.fas.recordVinyl;
import static org.patternfly.icon.IconSets.fas.redo;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.PredefinedIcon.predefinedIcon;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.extensions;
import static org.patternfly.showcase.model.Discography.records;
import static org.patternfly.style.Classes.filtered;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size.xs;

@Route(value = "/extensions/finder", title = "Finder")
public class FinderExtension extends SnippetPage {

    @SuppressWarnings({"unchecked", "ExtractMethodRecommender"})
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
            final Function<FileData, FinderItem>[] fileItem = new Function[1];
            final Function<FileData, FinderColumn>[] fileColumn = new Function[1];

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
                                    FileData file = item.get("file");
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

        addSnippet(new Snippet("finder-async", "Async items",
                content(p).editorial().add("The finder below contains the ")
                        .add(a("https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers#Discography", "_blank")
                                .text("discography"))
                        .add(" of the Red Hot Chili Peppers. The decades are added statically, the records are loaded ")
                        .add("asynchronously (with a random delay and error). If there are no records in a decade, an ")
                        .add("empty item is displayed. Once loaded the records won't be loaded again, until you reload them."),
                code("finder-async"), () -> {
            // @code-start:finder-async
            int[][] decades = new int[][]{
                    new int[]{1970, 1979},
                    new int[]{1980, 1989},
                    new int[]{1990, 1999},
                    new int[]{2000, 2009},
                    new int[]{2010, 2019},
                    new int[]{2020, 2029},
                    new int[]{2030, 2039},
            };

            PreviewHandler recordPreview = (item, preview) -> {
                Record record = item.get("record");
                preview.add(content(h1).text(record.title))
                        .add(content(p).editorial().text("Released " + record.released))
                        .add(div().add(img(record.cover)))
                        .add(content(p)
                                .add("More infos: ")
                                .add(a(record.url, "_blank").text(record.url)));
            };
            PreviewHandler trackPreview = (item, preview) -> {
                Track track = item.get("track");
                preview.add(content(h1).text(track.title))
                        .add(descriptionList().horizontal().css(util("mt-sm"))
                                .addItem(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Title"))
                                        .addDescription(descriptionListDescription(track.title)))
                                .addItem(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Length"))
                                        .addDescription(descriptionListDescription(track.length)))
                                .run(dl -> {
                                    if (track.writer != null) {
                                        dl.addItem(descriptionListGroup()
                                                .addTerm(descriptionListTerm("Writer"))
                                                .addDescription(descriptionListDescription(String.join(", ", track.writer()))));
                                    }
                                }));
            };

            Function<Record, FinderItem> recordItem = record -> finderItem(Id.build(record.title))
                    .text(record.title)
                    .addDescription(String.valueOf(record.year))
                    .icon(recordVinyl())
                    .store("record", record)
                    .nextColumn(finderColumn(Id.build(record.title))
                            .addHeader(finderColumnHeader(record.title))
                            .addItems(record.tracks.asList(), track ->
                                    finderItem(Id.build(record.title, String.valueOf(track.track)))
                                            .text(track.track + ". " + track.title)
                                            .icon(music())
                                            .store("track", track))
                            .onPreview(trackPreview));

            Function<int[], FinderColumn> decadeColumn = decade -> finderColumn(
                    Id.build(String.valueOf(decade[0]), String.valueOf(decade[1])))
                    .run(column -> column.addHeader(finderColumnHeader(decade[0] + " - " + decade[1])
                            .addActions(finderColumnActions()
                                    .addButton(button(redo()).plain()
                                            .onClick((e, b) -> column.reload())))))
                    .addItems(item -> new Promise<>((resolve, reject) -> {
                        boolean boom = Math.random() < 0.25;
                        int delay = new Random().nextInt(2000); // simulate remote call
                        setTimeout(__ -> {
                            if (boom) {
                                reject.onInvoke("Random error");
                            } else {
                                List<FinderItem> items = records(r -> r.year >= decade[0] && r.year <= decade[1])
                                        .stream()
                                        .map(recordItem)
                                        .collect(toList());
                                if (items.isEmpty()) {
                                    resolve.onInvoke(singletonList(emptyItem(emptyState()
                                            .size(xs)
                                            .text("No records")
                                            .icon(ban())
                                            .addBody(emptyStateBody().text("No records have been released in this decade")))));
                                } else {
                                    resolve.onInvoke(items);
                                }
                            }
                        }, delay);
                    }))
                    .onPreview(recordPreview);

            return finder().style("height: 450px;")
                    .addItem(finderColumn("Decades")
                            .addHeader(finderColumnHeader("Decades"))
                            .addItems(asList(decades),
                                    decade -> finderItem(Id.build(String.valueOf(decade[0]), String.valueOf(decade[1])))
                                            .text(decade[0] + " - " + decade[1])
                                            .icon(folder())
                                            .nextColumn(decadeColumn.apply(decade))))
                    .addPreview(finderPreview().css(util("p-md")))
                    .element();
            // @code-end:finder-async
        }));

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
