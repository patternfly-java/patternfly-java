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
 * Provides the PatternFly grid layout for placing content on a fixed 12-column grid system.
 * <p>
 * The grid layout allows positioning items across 12 columns with support for spanning multiple columns and rows, gutters for
 * spacing, responsive column overrides at different breakpoints, and ordering control.
 *
 * <h2>Usage</h2>
 *
 * A basic grid layout with column spans and gutters:
 *
 * {@snippet :
 * import static org.patternfly.layout.grid.Grid.grid;
 * import static org.patternfly.layout.grid.GridItem.gridItem;
 *
 * grid().gutter()
 *         .addItem(gridItem().span(8).text("Main content"))
 *         .addItem(gridItem().span(4).text("Sidebar"))
 *         .addItem(gridItem().span(4).text("Footer left"))
 *         .addItem(gridItem().span(8).text("Footer right"));
 * }
 *
 * A grid with responsive column overrides:
 *
 * {@snippet :
 * import static org.patternfly.layout.grid.Grid.grid;
 * import static org.patternfly.layout.grid.GridItem.gridItem;
 * import static org.patternfly.style.Breakpoint._2xl;
 * import static org.patternfly.style.Breakpoint.lg;
 * import static org.patternfly.style.Breakpoint.md;
 * import static org.patternfly.style.Breakpoint.sm;
 * import static org.patternfly.style.Breakpoints.breakpoints;
 *
 * grid().columns(breakpoints(sm, 6, md, 4, lg, 3, _2xl, 1))
 *         .addItem(gridItem().text("Grid item"))
 *         .addItem(gridItem().text("Grid item"))
 *         .addItem(gridItem().text("Grid item"))
 *         .addItem(gridItem().text("Grid item"));
 * }
 *
 * @see Grid
 * @see GridItem
 * @see <a href="https://www.patternfly.org/layouts/grid">PatternFly Grid</a>
 */
package org.patternfly.layout.grid;