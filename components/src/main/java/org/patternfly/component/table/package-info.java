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
 * Provides table components for displaying structured data in rows and columns.
 *
 * <p>This package contains a composable table implementation with support for captions, header rows, body rows,
 * selection (single and multi), compact and borderless variants, tree tables, and wrapping options. Tables are built
 * using standard HTML table semantics ({@code thead}, {@code tbody}, {@code tr}, {@code th}, {@code td}).
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.table.Table} - Main table component</li>
 *     <li>{@link org.patternfly.component.table.Thead} - Table header section</li>
 *     <li>{@link org.patternfly.component.table.Tbody} - Table body section</li>
 *     <li>{@link org.patternfly.component.table.Tr} - Table row</li>
 *     <li>{@link org.patternfly.component.table.Th} - Table header cell</li>
 *     <li>{@link org.patternfly.component.table.Td} - Table data cell</li>
 *     <li>{@link org.patternfly.component.table.TableCaption} - Table caption</li>
 *     <li>{@link org.patternfly.component.table.TableText} - Wrapped/truncated cell text</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a basic table with a caption, header row, and data rows:
 *
 * {@snippet :
 * import static org.patternfly.component.table.Table.table;
 * import static org.patternfly.component.table.TableCaption.tableCaption;
 * import static org.patternfly.component.table.Tbody.tbody;
 * import static org.patternfly.component.table.Td.td;
 * import static org.patternfly.component.table.Th.th;
 * import static org.patternfly.component.table.Thead.thead;
 * import static org.patternfly.component.table.Tr.tr;
 *
 * Table table = table()
 *         .addCaption(tableCaption().text("Repositories"))
 *         .addHead(thead()
 *                 .addRow(tr("head")
 *                         .addItem(th("name").text("Name"))
 *                         .addItem(th("branches").text("Branches"))
 *                         .addItem(th("prs").text("Pull requests"))))
 *         .addBody(tbody()
 *                 .addRow(tr("row-0")
 *                         .addItem(td("Name").text("Repository 1"))
 *                         .addItem(td("Branches").text("10"))
 *                         .addItem(td("Pull requests").text("25"))));
 * }
 *
 * <p>Create a compact table without borders:
 *
 * {@snippet :
 * import static org.patternfly.component.table.Table.table;
 *
 * Table compact = table().compact(true).noBorders(true);
 * }
 *
 * @see org.patternfly.component.table.Table
 * @see <a href="https://www.patternfly.org/components/table">PatternFly Table</a>
 */
package org.patternfly.component.table;