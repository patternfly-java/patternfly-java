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
 * Provides a multi-column finder component inspired by the macOS Finder for hierarchical data navigation.
 *
 * <p>The finder displays data in a series of columns, where selecting an item in one column reveals its children
 * in the next column. Columns support asynchronous loading, keyboard navigation, filtering, sorting, and an
 * optional preview pane. Finder paths can be serialized for URL routing and restored programmatically.
 *
 * <p><strong>Key classes:</strong>
 * <ul>
 *     <li>{@link org.patternfly.extension.finder.Finder} - the main container managing columns and navigation</li>
 *     <li>{@link org.patternfly.extension.finder.FinderColumn} - a single column displaying a list of items</li>
 *     <li>{@link org.patternfly.extension.finder.FinderItem} - an individual selectable item within a column</li>
 *     <li>{@link org.patternfly.extension.finder.FinderPreview} - preview pane shown alongside the columns</li>
 *     <li>{@link org.patternfly.extension.finder.FinderPath} - lightweight path for serialization and URL routing</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * Finder finder = finder()
 *     .addColumn(finderColumn("categories")
 *         .addItem(finderItem("cat-1", "Category 1")
 *             .nextColumn(() -> finderColumn("items")
 *                 .addItem(finderItem("item-1", "Item 1"))
 *                 .addItem(finderItem("item-2", "Item 2")))));
 * }
 *
 * @see org.patternfly.extension.finder.Finder
 * @see org.patternfly.extension.finder.FinderColumn
 * @see org.patternfly.extension.finder.FinderPath
 */
package org.patternfly.extension.finder;
