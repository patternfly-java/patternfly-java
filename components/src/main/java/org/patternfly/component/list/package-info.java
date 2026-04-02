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
 * Provides list components for displaying collections of items in various formats.
 *
 * <p>This package contains several list components: basic lists ({@link org.patternfly.component.list.List}),
 * action lists ({@link org.patternfly.component.list.ActionList}), data lists
 * ({@link org.patternfly.component.list.DataList}), description lists
 * ({@link org.patternfly.component.list.DescriptionList}), and simple lists
 * ({@link org.patternfly.component.list.SimpleList}). Each list type serves a different purpose, from
 * simple unordered lists to complex data display with expandable content and actions.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.list.List} - Basic unordered or ordered list</li>
 *     <li>{@link org.patternfly.component.list.ListItem} - Item within a basic list</li>
 *     <li>{@link org.patternfly.component.list.ActionList} - List of actions (buttons, dropdowns)</li>
 *     <li>{@link org.patternfly.component.list.DataList} - Flexible list for displaying structured data</li>
 *     <li>{@link org.patternfly.component.list.DescriptionList} - Key-value pair list with terms and descriptions</li>
 *     <li>{@link org.patternfly.component.list.SimpleList} - Selectable list with grouped items</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Basic lists with different styles:
 *
 * {@snippet :
 * import static org.jboss.elemento.Elements.ol;
 * import static org.patternfly.component.list.List.list;
 * import static org.patternfly.component.list.ListItem.listItem;
 * import static org.patternfly.icon.IconSets.fas.bookOpen;
 * import static org.patternfly.icon.IconSets.fas.desktop;
 *
 * // Basic unordered list
 * List basicList = list()
 *         .addItem(listItem("item-0").text("First"))
 *         .addItem(listItem("item-1").text("Second"))
 *         .addItem(listItem("item-2").text("Third"));
 *
 * // Ordered list
 * List orderedList = list(ol())
 *         .addItem(listItem("item-0").text("First"))
 *         .addItem(listItem("item-1").text("Second"))
 *         .addItem(listItem("item-2").text("Third"));
 *
 * // Plain list with icons
 * List iconList = list().plain()
 *         .addItem(listItem("item-0").text("Books").icon(bookOpen()))
 *         .addItem(listItem("item-1").text("Computers").icon(desktop()));
 *
 * // Inline list
 * List inlineList = list().inline()
 *         .addItem(listItem("item-0").text("First"))
 *         .addItem(listItem("item-1").text("Second"));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/list">PatternFly List</a>
 * @see <a href="https://www.patternfly.org/components/data-list">PatternFly Data List</a>
 * @see <a href="https://www.patternfly.org/components/description-list">PatternFly Description List</a>
 */
package org.patternfly.component.list;