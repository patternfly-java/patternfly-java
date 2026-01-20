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
 * PatternFly layouts provide structure and positioning for content on a page. They offer flexible, responsive
 * solutions for organizing UI elements and are designed to work seamlessly across different screen sizes and
 * breakpoints.
 *
 * <h2>Available Layouts</h2>
 *
 * This package provides the following layout types:
 *
 * <dl>
 *     <dt>{@link org.patternfly.layout.bullseye.Bullseye Bullseye}</dt>
 *     <dd>Centers content both vertically and horizontally within a container.</dd>
 *
 *     <dt>{@link org.patternfly.layout.flex.Flex Flex}</dt>
 *     <dd>Provides a completely custom layout utilizing the PatternFly spacer and breakpoint systems. Supports
 *     adjustments to spacing, direction, alignment, justification, wrapping, and width.</dd>
 *
 *     <dt>{@link org.patternfly.layout.gallery.Gallery Gallery}</dt>
 *     <dd>Arranges content in a responsive grid with uniform rows and columns that wrap automatically.</dd>
 *
 *     <dt>{@link org.patternfly.layout.grid.Grid Grid}</dt>
 *     <dd>Places content on a fixed 12-column grid system.</dd>
 *
 *     <dt>{@link org.patternfly.layout.level.Level Level}</dt>
 *     <dd>Distributes content evenly across a horizontal row.</dd>
 *
 *     <dt>{@link org.patternfly.layout.split.Split Split}</dt>
 *     <dd>Distributes content horizontally with support for wrapping and spacing control.</dd>
 *
 *     <dt>{@link org.patternfly.layout.stack.Stack Stack}</dt>
 *     <dd>Positions items vertically, with one or more items filling the available vertical space.</dd>
 * </dl>
 *
 * <h2>Common API Pattern</h2>
 *
 * All layouts follow a consistent API design:
 *
 * <ol>
 *     <li><strong>Static factory methods</strong> - Create layout instances using static methods named after the layout</li>
 *     <li><strong>Add methods</strong> - Add child items using {@code addItem()} or {@code addItems()} methods</li>
 *     <li><strong>Builder methods</strong> - Configure layout properties using fluent builder methods</li>
 *     <li><strong>Responsive breakpoints</strong> - Many properties support responsive values at different breakpoints</li>
 * </ol>
 *
 * <h2>Usage Examples</h2>
 *
 * <h3>Bullseye Layout</h3>
 *
 * Center content both vertically and horizontally:
 *
 * {@snippet :
 * Bullseye bullseye = bullseye()
 *     .addItem(bullseyeItem()
 *         .add(div().textContent("Centered content")));
 * }
 *
 * <h3>Flex Layout</h3>
 *
 * Create a flexible layout with custom spacing and alignment:
 *
 * {@snippet :
 * Flex flex = flex()
 *     .direction(Direction.column)
 *     .spaceItems(SpaceItems.md)
 *     .addItem(flexItem().add(div().textContent("Item 1")))
 *     .addItem(flexItem().add(div().textContent("Item 2")))
 *     .addItem(flexItem().add(div().textContent("Item 3")));
 * }
 *
 * <h3>Gallery Layout</h3>
 *
 * Create a responsive grid of cards:
 *
 * {@snippet :
 * Gallery gallery = gallery()
 *     .gutter()
 *     .addItem(galleryItem().add(card()))
 *     .addItem(galleryItem().add(card()))
 *     .addItem(galleryItem().add(card()));
 * }
 *
 * <h3>Grid Layout</h3>
 *
 * Position content on a 12-column grid:
 *
 * {@snippet :
 * Grid grid = grid()
 *     .gutter()
 *     .addItem(gridItem().span(8).add(div().textContent("Main content")))
 *     .addItem(gridItem().span(4).add(div().textContent("Sidebar")));
 * }
 *
 * <h3>Stack Layout</h3>
 *
 * Arrange items vertically:
 *
 * {@snippet :
 * Stack stack = stack()
 *     .gutter()
 *     .addItem(stackItem().add(div().textContent("Header")))
 *     .addItem(stackItem().fill().add(div().textContent("Main content")))
 *     .addItem(stackItem().add(div().textContent("Footer")));
 * }
 *
 * <h2>Base Classes</h2>
 *
 * All layouts extend from {@link org.patternfly.layout.BaseLayout BaseLayout}, which implements common
 * interfaces from Elemento for element manipulation:
 *
 * <ul>
 *     <li>{@link org.jboss.elemento.ElementAttributeMethods ElementAttributeMethods}</li>
 *     <li>{@link org.jboss.elemento.ElementClassListMethods ElementClassListMethods}</li>
 *     <li>{@link org.jboss.elemento.ElementContainerMethods ElementContainerMethods}</li>
 *     <li>{@link org.jboss.elemento.HTMLElementStyleMethods HTMLElementStyleMethods}</li>
 *     <li>And more...</li>
 * </ul>
 *
 * This provides a rich set of methods to manipulate the layout's underlying DOM element.
 *
 * <h2>Responsive Design</h2>
 *
 * Many layout properties support responsive values at different breakpoints using the
 * {@link org.patternfly.style.Breakpoints Breakpoints} API:
 *
 * {@snippet :
 * Flex flex = flex()
 *     .direction(breakpoints(
 *         default_, Direction.column,
 *         md, Direction.row))
 *     .spaceItems(breakpoints(
 *         default_, SpaceItems.sm,
 *         lg, SpaceItems.lg));
 * }
 *
 * Available breakpoints:
 * <ul>
 *     <li>{@link org.patternfly.style.Breakpoint#default_ default_} - Default value</li>
 *     <li>{@link org.patternfly.style.Breakpoint#sm sm} - Small screens (576px+)</li>
 *     <li>{@link org.patternfly.style.Breakpoint#md md} - Medium screens (768px+)</li>
 *     <li>{@link org.patternfly.style.Breakpoint#lg lg} - Large screens (992px+)</li>
 *     <li>{@link org.patternfly.style.Breakpoint#xl xl} - Extra large screens (1200px+)</li>
 *     <li>{@link org.patternfly.style.Breakpoint#_2xl _2xl} - 2X large screens (1450px+)</li>
 * </ul>
 *
 * <h2>Gutter Support</h2>
 *
 * Several layouts implement the {@link org.patternfly.style.Modifiers.Gutter Gutter} interface, which provides
 * methods to add spacing between child items:
 *
 * {@snippet :
 * Gallery gallery = gallery()
 *     .gutter()  // Enable gutter spacing
 *     .addItem(galleryItem().add(card()))
 *     .addItem(galleryItem().add(card()));
 * }
 *
 * Layouts supporting gutters:
 * <ul>
 *     <li>{@link org.patternfly.layout.gallery.Gallery Gallery}</li>
 *     <li>{@link org.patternfly.layout.grid.Grid Grid}</li>
 *     <li>{@link org.patternfly.layout.level.Level Level}</li>
 *     <li>{@link org.patternfly.layout.split.Split Split}</li>
 *     <li>{@link org.patternfly.layout.stack.Stack Stack}</li>
 * </ul>
 *
 * @see <a href="https://www.patternfly.org/layouts/about-layouts">PatternFly Layouts Documentation</a>
 * @see org.patternfly.layout.BaseLayout
 * @see org.patternfly.style.Breakpoints
 */
package org.patternfly.layout;