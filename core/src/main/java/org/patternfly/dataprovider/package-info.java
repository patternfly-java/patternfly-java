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
 * Data provider API for managing items and state in data-driven components.
 *
 * <p>This package provides a unified interface for binding data to PatternFly components like data lists and tables.
 * The {@link org.patternfly.dataprovider.DataProvider} class manages items, filtering, sorting, pagination, and selection,
 * automatically updating bound displays when state changes.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.dataprovider.DataProvider} - Central class for managing items with support for filtering,
 *         sorting, paging, and selection</li>
 *     <li>{@link org.patternfly.dataprovider.Display} - Interface implemented by components to receive data and state updates</li>
 *     <li>{@link org.patternfly.dataprovider.PageInfo} - Holds pagination state (page size, current page, total items)</li>
 *     <li>{@link org.patternfly.dataprovider.SelectionInfo} - Tracks selected items and selection state</li>
 *     <li>{@link org.patternfly.dataprovider.SortInfo} - Manages sort order and comparator for items</li>
 *     <li>{@link org.patternfly.dataprovider.ItemDisplay} - Simplified display interface for components showing a single item</li>
 * </ul>
 *
 * <h2>Usage Pattern</h2>
 *
 * <p>The typical workflow involves creating a {@link org.patternfly.dataprovider.DataProvider}, binding it to one or more
 * {@link org.patternfly.dataprovider.Display} components, and then manipulating the data:
 *
 * {@snippet :
 * // Create a data provider with an identifier function
 * DataProvider<User> dataProvider = new DataProvider<>(user -> user.id());
 *
 * // Bind it to a display component (e.g., DataList)
 * DataList<User> dataList = dataList(dataProvider);
 * dataProvider.bindDisplay(dataList);
 *
 * // Update items - this automatically updates all bound displays
 * dataProvider.update(users);
 *
 * // Add filtering
 * dataProvider.addFilter("active", user -> user.isActive());
 *
 * // Configure sorting
 * dataProvider.sort(new SortInfo<>(Comparator.comparing(User::name)));
 *
 * // Navigate pages
 * dataProvider.gotoNextPage();
 * }
 *
 * <h2>Features</h2>
 *
 * <h3>Item Management</h3>
 * <p>The data provider maintains three collections of items:
 * <ul>
 *     <li><strong>All items</strong> - The complete dataset</li>
 *     <li><strong>Filtered items</strong> - Items matching active filters</li>
 *     <li><strong>Visible items</strong> - Current page of filtered items</li>
 * </ul>
 *
 * <h3>Filtering</h3>
 * <p>Multiple filters can be registered by ID and combined using predicates. When filters change,
 * the data provider automatically recalculates filtered and visible items.
 *
 * <h3>Sorting</h3>
 * <p>Items are sorted using a {@link java.util.Comparator}. Sort changes are immediately reflected in bound displays.
 *
 * <h3>Pagination</h3>
 * <p>Automatic pagination with configurable page size. The {@link org.patternfly.dataprovider.PageInfo} class
 * tracks current page, total pages, and item counts.
 *
 * <h3>Selection</h3>
 * <p>Support for single and multi-selection with selection events. The {@link org.patternfly.dataprovider.SelectionInfo}
 * maintains the set of selected items and provides methods to query selection state.
 *
 * @see org.patternfly.dataprovider.DataProvider
 * @see org.patternfly.dataprovider.Display
 */
package org.patternfly.dataprovider;