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
import java.util.function.Function;

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.tree.TreeView;
import org.patternfly.component.tree.TreeViewItem;
import org.patternfly.component.tree.TreeViewType;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.showcase.model.Record;

import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.tree.TreeView.treeView;
import static org.patternfly.component.tree.TreeViewItem.treeViewItem;
import static org.patternfly.component.tree.TreeViewType.checkboxes;
import static org.patternfly.component.tree.TreeViewType.selectableItems;
import static org.patternfly.icon.IconSets.fas.box;
import static org.patternfly.icon.IconSets.fas.boxOpen;
import static org.patternfly.icon.IconSets.fas.cog;
import static org.patternfly.icon.IconSets.fas.folder;
import static org.patternfly.icon.IconSets.fas.folderOpen;
import static org.patternfly.icon.IconSets.fas.music;
import static org.patternfly.icon.IconSets.fas.pencilAlt;
import static org.patternfly.icon.IconSets.fas.recordVinyl;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.model.Discography.records;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/tree-view", title = "Tree view")
public class TreeViewComponent extends SnippetPage {

    public TreeViewComponent() {
        super(components.get("tree-view"));

        startExamples();
        addSnippet(new Snippet("tv-default", "Default",
                code("tv-default"), () ->
                // @code-start:tv-default
                treeView()
                        .addItem(treeViewItem("tv-default-app-launcher", "Application launcher")
                                .addItem(treeViewItem("tv-default-app-1", "Application 1")
                                        .addItem(treeViewItem("tv-default-settings-1", "Settings"))
                                        .addItem(treeViewItem("tv-default-current-1", "Current")))
                                .addItem(treeViewItem("tv-default-app-2", "Application 2")
                                        .addItem(treeViewItem("tv-default-settings-2", "Settings"))
                                        .addItem(treeViewItem("tv-default-loader", "Loader")
                                                .addItem(treeViewItem("tv-default-loading-1", "Loading App 1"))
                                                .addItem(treeViewItem("tv-default-loading-2", "Loading App 2"))
                                                .addItem(treeViewItem("tv-default-loading-3", "Loading App 3")))))
                        .addItem(treeViewItem("tv-default-cost", "Cost management")
                                .addItem(treeViewItem("tv-default-app-3", "Application 3")
                                        .addItem(treeViewItem("tv-default-settings-3", "Settings"))
                                        .addItem(treeViewItem("tv-default-current-2", "Current"))))
                        .addItem(treeViewItem("tv-default-sources", "Sources")
                                .addItem(treeViewItem("tv-default-app-4", "Application 4")
                                        .addItem(treeViewItem("tv-default-settings-4", "Settings"))))
                        .addItem(treeViewItem("tv-default-long",
                                "Really really really long folder name that overflows the container it is in")
                                .addItem(treeViewItem("tv-default-app-5", "Application 5")))
                        .element()
                // @code-end:tv-default
        ));

        addSnippet(new Snippet("tv-selectable", "With separate selection and expansion",
                code("tv-selectable"), () ->
                // @code-start:tv-selectable
                treeView(selectableItems)
                        .addItem(treeViewItem("tv-selectable-app-launcher", "Application launcher")
                                .addItem(treeViewItem("tv-selectable-app-1", "Application 1")
                                        .addItem(treeViewItem("tv-selectable-settings-1", "Settings"))
                                        .addItem(treeViewItem("tv-selectable-current-1", "Current")))
                                .addItem(treeViewItem("tv-selectable-app-2", "Application 2")
                                        .addItem(treeViewItem("tv-selectable-settings-2", "Settings"))
                                        .addItem(treeViewItem("tv-selectable-loader", "Loader")
                                                .addItem(treeViewItem("tv-selectable-loading-1", "Loading App 1"))
                                                .addItem(treeViewItem("tv-selectable-loading-2", "Loading App 2"))
                                                .addItem(treeViewItem("tv-selectable-loading-3", "Loading App 3")))))
                        .addItem(treeViewItem("tv-selectable-cost", "Cost management")
                                .addItem(treeViewItem("tv-selectable-app-3", "Application 3")
                                        .addItem(treeViewItem("tv-selectable-settings-3", "Settings"))
                                        .addItem(treeViewItem("tv-selectable-current-2", "Current"))))
                        .addItem(treeViewItem("tv-selectable-sources", "Sources")
                                .addItem(treeViewItem("tv-selectable-app-4", "Application 4")
                                        .addItem(treeViewItem("tv-selectable-settings-4", "Settings"))))
                        .addItem(treeViewItem("tv-selectable-long",
                                "Really really really long folder name that overflows the container it is in")
                                .addItem(treeViewItem("tv-selectable-app-5", "Application 5")))
                        .element()
                // @code-end:tv-selectable
        ));

        addSnippet(new Snippet("tv-check", "With checkboxes",
                code("tv-check"), () ->
                // @code-start:tv-check
                treeView(checkboxes)
                        .addItem(treeViewItem("tv-check-app-launcher", "Application launcher")
                                .addItem(treeViewItem("tv-check-app-1", "Application 1")
                                        .addItem(treeViewItem("tv-check-settings-1", "Settings"))
                                        .addItem(treeViewItem("tv-check-current-1", "Current")))
                                .addItem(treeViewItem("tv-check-app-2", "Application 2")
                                        .addItem(treeViewItem("tv-check-settings-2", "Settings"))
                                        .addItem(treeViewItem("tv-check-loader", "Loader")
                                                .addItem(treeViewItem("tv-check-loading-1", "Loading App 1"))
                                                .addItem(treeViewItem("tv-check-loading-2", "Loading App 2"))
                                                .addItem(treeViewItem("tv-check-loading-3", "Loading App 3")))))
                        .addItem(treeViewItem("tv-check-cost", "Cost management")
                                .addItem(treeViewItem("tv-check-app-3", "Application 3")
                                        .addItem(treeViewItem("tv-check-settings-3", "Settings"))
                                        .addItem(treeViewItem("tv-check-current-2", "Current"))))
                        .addItem(treeViewItem("tv-check-sources", "Sources")
                                .addItem(treeViewItem("tv-check-app-4", "Application 4")
                                        .addItem(treeViewItem("tv-check-settings-4", "Settings"))))
                        .addItem(treeViewItem("tv-check-long",
                                "Really really really long folder name that overflows the container it is in")
                                .addItem(treeViewItem("tv-check-app-5", "Application 5")))
                        .element()
                // @code-end:tv-check
        ));

        addSnippet(new Snippet("tv-icons", "With icons",
                code("tv-icons"), () ->
                // @code-start:tv-icons
                treeView()
                        .icon(() -> folder().element())
                        .expandedIcon(() -> folderOpen().element())
                        .addItem(treeViewItem("tv-icons-app-launcher", "Application launcher")
                                .addItem(treeViewItem("tv-icons-app-1", "Application 1")
                                        .addItem(treeViewItem("tv-icons-settings-1", "Settings").icon(cog()))
                                        .addItem(treeViewItem("tv-icons-current-1", "Current")))
                                .addItem(treeViewItem("tv-icons-app-2", "Application 2")
                                        .addItem(treeViewItem("tv-icons-settings-2", "Settings").icon(cog()))
                                        .addItem(treeViewItem("tv-icons-loader", "Loader")
                                                .addItem(treeViewItem("tv-icons-loading-1", "Loading App 1"))
                                                .addItem(treeViewItem("tv-icons-loading-2", "Loading App 2"))
                                                .addItem(treeViewItem("tv-icons-loading-3", "Loading App 3")))))
                        .addItem(treeViewItem("tv-icons-cost", "Cost management")
                                .addItem(treeViewItem("tv-icons-app-3", "Application 3")
                                        .addItem(treeViewItem("tv-icons-settings-3", "Settings").icon(cog()))
                                        .addItem(treeViewItem("tv-icons-current-2", "Current"))))
                        .addItem(treeViewItem("tv-icons-sources", "Sources")
                                .icon(box())
                                .expandedIcon(boxOpen())
                                .addItem(treeViewItem("tv-icons-app-4", "Application 4")
                                        .addItem(treeViewItem("tv-icons-settings-4", "Settings").icon(cog()))))
                        .addItem(treeViewItem("tv-icons-long",
                                "Really really really long folder name that overflows the container it is in")
                                .addItem(treeViewItem("tv-icons-app-5", "Application 5")))
                        .element()
                // @code-end:tv-icons
        ));

        addSnippet(new Snippet("tv-guides", "Guides",
                code("tv-guides"), () ->
                // @code-start:tv-guides
                treeView().guides()
                        .addItem(treeViewItem("tv-guides-app-launcher", "Application launcher")
                                .addItem(treeViewItem("tv-guides-app-1", "Application 1")
                                        .addItem(treeViewItem("tv-guides-settings-1", "Settings"))
                                        .addItem(treeViewItem("tv-guides-current-1", "Current")))
                                .addItem(treeViewItem("tv-guides-app-2", "Application 2")
                                        .addItem(treeViewItem("tv-guides-settings-2", "Settings"))
                                        .addItem(treeViewItem("tv-guides-loader", "Loader")
                                                .addItem(treeViewItem("tv-guides-loading-1", "Loading App 1"))
                                                .addItem(treeViewItem("tv-guides-loading-2", "Loading App 2"))
                                                .addItem(treeViewItem("tv-guides-loading-3", "Loading App 3")))))
                        .addItem(treeViewItem("tv-guides-cost", "Cost management")
                                .addItem(treeViewItem("tv-guides-app-3", "Application 3")
                                        .addItem(treeViewItem("tv-guides-settings-3", "Settings"))
                                        .addItem(treeViewItem("tv-guides-current-2", "Current"))))
                        .addItem(treeViewItem("tv-guides-sources", "Sources")
                                .addItem(treeViewItem("tv-guides-app-4", "Application 4")
                                        .addItem(treeViewItem("tv-guides-settings-4", "Settings"))))
                        .addItem(treeViewItem("tv-guides-long",
                                "Really really really long folder name that overflows the container it is in")
                                .addItem(treeViewItem("tv-guides-app-5", "Application 5")))
                        .element()
                // @code-end:tv-guides
        ));

        addSnippet(new Snippet("tv-async", "Async items",
                p().add("The tree below contains the ")
                        .add(a("https://en.wikipedia.org/wiki/Red_Hot_Chili_Peppers#Discography", "_blank")
                                .text("discography"))
                        .add(" of the Red Hot Chili Peppers. ")
                        .add("The decades are added statically, the records are loaded asynchronously (with a random delay). ")
                        .add("If there are no records in a decade, the toggle icon is removed. Once loaded the items ")
                        .add("won't be loaded again, until you reset the state."),
                code("tv-async"), () -> {
            // @code-start:tv-async
            int[][] decades = new int[][]{
                    new int[]{1970, 1979},
                    new int[]{1980, 1989},
                    new int[]{1990, 1999},
                    new int[]{2000, 2009},
                    new int[]{2010, 2019},
                    new int[]{2020, 2029},
                    new int[]{2030, 2039},
            };

            Function<Record, TreeViewItem> recordItem = record -> treeViewItem(Id.build(record.title))
                    .text(record.title + " (" + record.year + ")")
                    .icon(recordVinyl())
                    .addItems(record.tracks.asList(), track ->
                            treeViewItem(Id.build(record.title, String.valueOf(track.track)))
                                    .text(track.track + ". " + track.title)
                                    .icon(music())
                                    .addItems(track.writer(), writer ->
                                            treeViewItem(Id.build(record.title, String.valueOf(track.track), writer))
                                                    .text(writer)
                                                    .icon(pencilAlt())));

            TreeView treeView = treeView(selectableItems);
            return div()
                    .add(button("Reset all").css(util("mb-sm"))
                            .primary()
                            .onClick((e, b) -> treeView.reset()))
                    .add(treeView.addItems(asList(decades), decade ->
                            treeViewItem(Id.build("tv-async", String.valueOf(decade[0]), String.valueOf(decade[1])))
                                    .icon(folder())
                                    .expandedIcon(folderOpen())
                                    .store("range", decade)
                                    .text(decade[0] + " - " + decade[1])
                                    .addItems(item -> new Promise<>((resolve, reject) -> {
                                        int[] range = item.get("range");
                                        boolean boom = Math.random() < 0.25;
                                        int delay = new Random().nextInt(2000); // simulate remote call
                                        setTimeout(__ -> {
                                            if (boom) {
                                                reject.onInvoke("Random error");
                                            } else {
                                                resolve.onInvoke(records(r -> r.year >= range[0] && r.year <= range[1])
                                                        .stream()
                                                        .map(recordItem)
                                                        .collect(toList()));
                                            }
                                        }, delay);
                                    }))))
                    .element();
            // @code-end:tv-async
        }));

        startApiDocs(TreeView.class);
        addApiDoc(TreeView.class, component);
        addApiDoc(TreeViewItem.class, subcomponent);
        addApiDoc(TreeViewType.class, modifier);
    }
}
