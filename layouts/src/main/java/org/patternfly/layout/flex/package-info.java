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
 * Provides the PatternFly flex layout for building custom layouts with full control over spacing, direction, alignment,
 * justification, wrapping, and width.
 * <p>
 * The flex layout utilizes the PatternFly spacer and breakpoint systems to create completely custom layouts. It supports
 * nesting flex containers, individual item spacing, responsive breakpoints, and various alignment and justification options.
 *
 * <h2>Usage</h2>
 *
 * A basic flex layout with items:
 *
 * {@snippet :
 * import static org.patternfly.layout.flex.Flex.flex;
 * import static org.patternfly.layout.flex.FlexItem.flexItem;
 *
 * flex()
 *         .addItem(flexItem().text("Flex item"))
 *         .addItem(flexItem().text("Flex item"))
 *         .addItem(flexItem().text("Flex item"));
 * }
 *
 * A flex layout with custom spacing and responsive direction:
 *
 * {@snippet :
 * import static org.patternfly.layout.flex.Flex.flex;
 * import static org.patternfly.layout.flex.FlexItem.flexItem;
 * import static org.patternfly.style.Breakpoint.default_;
 * import static org.patternfly.style.Breakpoint.lg;
 * import static org.patternfly.style.Breakpoints.breakpoints;
 *
 * flex()
 *         .direction(breakpoints(default_, Direction.column, lg, Direction.row))
 *         .spaceItems(breakpoints(default_, SpaceItems.md))
 *         .addItem(flexItem().text("Item 1"))
 *         .addItem(flexItem().text("Item 2"))
 *         .addItem(flexItem().text("Item 3"));
 * }
 *
 * @see Flex
 * @see FlexItem
 * @see Direction
 * @see SpaceItems
 * @see Spacer
 * @see AlignItems
 * @see JustifyContent
 * @see Gap
 * @see <a href="https://www.patternfly.org/layouts/flex">PatternFly Flex</a>
 */
package org.patternfly.layout.flex;