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
/**
 * Provides a tree view component for displaying hierarchical data.
 *
 * <p>A tree view renders data in a hierarchical structure with expandable/collapsible nodes. It supports
 * selectable items, checkboxes, custom icons, action buttons, and lazy loading of child items. Tree view
 * items can be nested to any depth.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.tree.TreeView} - Main tree view component</li>
 *     <li>{@link org.patternfly.component.tree.TreeViewItem} - Individual node in the tree</li>
 *     <li>{@link org.patternfly.component.tree.TreeViewType} - Tree view variants (selectable, checkboxes)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a basic tree view with nested items:
 *
 * {@snippet :
 * import static org.patternfly.component.tree.TreeView.treeView;
 * import static org.patternfly.component.tree.TreeViewItem.treeViewItem;
 *
 * TreeView tree = treeView()
 *         .addItem(treeViewItem("app-launcher", "Application launcher")
 *                 .addItem(treeViewItem("app-1", "Application 1")
 *                         .addItem(treeViewItem("settings", "Settings"))
 *                         .addItem(treeViewItem("current", "Current")))
 *                 .addItem(treeViewItem("app-2", "Application 2")))
 *         .addItem(treeViewItem("cost", "Cost management")
 *                 .addItem(treeViewItem("app-3", "Application 3")));
 * }
 *
 * <p>Create a tree view with checkboxes:
 *
 * {@snippet :
 * import static org.patternfly.component.tree.TreeView.treeView;
 * import static org.patternfly.component.tree.TreeViewItem.treeViewItem;
 * import static org.patternfly.component.tree.TreeViewType.checkboxes;
 *
 * TreeView checkboxTree = treeView(checkboxes)
 *         .addItem(treeViewItem("item-1", "Item 1")
 *                 .addItem(treeViewItem("child-1", "Child 1"))
 *                 .addItem(treeViewItem("child-2", "Child 2")))
 *         .addItem(treeViewItem("item-2", "Item 2"));
 * }
 *
 * @see org.patternfly.component.tree.TreeView
 * @see org.patternfly.component.tree.TreeViewItem
 * @see <a href="https://www.patternfly.org/components/tree-view">PatternFly Tree View</a>
 */
package org.patternfly.component.tree;