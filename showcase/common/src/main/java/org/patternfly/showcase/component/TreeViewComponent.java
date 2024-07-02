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

import org.jboss.elemento.router.Route;
import org.patternfly.component.tree.TreeView;
import org.patternfly.component.tree.TreeViewItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.patternfly.component.tree.TreeView.treeView;
import static org.patternfly.component.tree.TreeViewItem.treeViewItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

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

        startApiDocs(TreeView.class);
        addApiDoc(TreeView.class, component);
        addApiDoc(TreeViewItem.class, subcomponent);
    }
}
