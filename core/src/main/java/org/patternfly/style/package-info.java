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
 * Styling utilities including CSS classes, modifiers, breakpoints, and CSS variables.
 *
 * <p>This package provides programmatic access to PatternFly's CSS styling system. It includes utilities for
 * applying modifier classes, working with responsive breakpoints, managing CSS variables, and using typed
 * modifier interfaces for component styling.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.style.Classes} - Constants for PatternFly CSS class names</li>
 *     <li>{@link org.patternfly.style.Modifiers} - Reusable modifier interfaces for common styling flags</li>
 *     <li>{@link org.patternfly.style.Breakpoint} - Responsive breakpoint definitions (sm, md, lg, xl, 2xl)</li>
 *     <li>{@link org.patternfly.style.Breakpoints} - Container for breakpoint-specific values</li>
 *     <li>{@link org.patternfly.style.Variable} - Type-safe CSS variable definitions</li>
 *     <li>{@link org.patternfly.style.Variables} - CSS variable assignments for components</li>
 *     <li>{@link org.patternfly.style.Color} - PatternFly color enumeration</li>
 *     <li>{@link org.patternfly.style.Size} - Size enumeration (default, sm, md, lg, xl, 2xl, 3xl, 4xl)</li>
 * </ul>
 *
 * <h2>CSS Classes</h2>
 *
 * <p>The {@link org.patternfly.style.Classes} class provides constants for PatternFly CSS classes:
 *
 * {@snippet :
 * import static org.patternfly.style.Classes.*;
 *
 * // Base classes
 * div().css(component("alert"))
 *     .add(div().css(component("alert", "title")));
 *
 * // Modifier classes
 * div().css(modifier("bordered"), modifier("compact"));
 * }
 *
 * <h2>Modifiers</h2>
 *
 * <p>The {@link org.patternfly.style.Modifiers} interface defines sub-interfaces for common styling flags.
 * Components implement these interfaces to provide type-safe modifier methods:
 *
 * {@snippet :
 * // Components implement modifier interfaces
 * Card card = card()
 *     .bordered()      // from Modifiers.Bordered
 *     .compact()       // from Modifiers.Compact
 *     .fullHeight();   // from Modifiers.FullHeight
 *
 * // Toggle modifiers conditionally
 * Alert alert = alert("Warning")
 *     .inline(isInlineMode)
 *     .plain(!hasIcon);
 * }
 *
 * <p>Available modifier interfaces include:
 * <ul>
 *     <li>{@code Bordered, Box, Center, Compact, Disabled}</li>
 *     <li>{@code Fill, FullHeight, FullWidth, Gutter}</li>
 *     <li>{@code Horizontal, Inline, Invalid}</li>
 *     <li>{@code NoFill, NoPadding, NoOffset}</li>
 *     <li>{@code Padding, PageInsets, Plain, Primary}</li>
 *     <li>{@code Readonly, Required, Secondary, Static, Sticky, Vertical}</li>
 * </ul>
 *
 * <h2>Responsive Breakpoints</h2>
 *
 * <p>Use {@link org.patternfly.style.Breakpoint} for responsive design:
 *
 * {@snippet :
 * // Determine current breakpoint
 * Breakpoint current = Breakpoint.breakpoint(window.innerWidth);
 *
 * // Apply breakpoint-specific styles
 * if (current == Breakpoint.lg || current == Breakpoint.xl) {
 *     showDesktopLayout();
 * }
 *
 * // Use Breakpoints container for responsive values
 * Breakpoints<Integer> columns = new Breakpoints<Integer>()
 *     .default_(1)
 *     .sm(2)
 *     .md(3)
 *     .lg(4);
 *
 * int cols = columns.get(current);
 * }
 *
 * <h2>CSS Variables</h2>
 *
 * <p>PatternFly uses CSS custom properties (variables) for theming. The {@link org.patternfly.style.Variable}
 * class provides type-safe access:
 *
 * {@snippet :
 * // Create a typed variable
 * Variable<String> colorVar = new Variable<>("--pf-v6-global--primary-color--100");
 *
 * // Apply variables to elements
 * Variables variables = new Variables();
 * variables.set(colorVar, "#0066cc");
 * element.style.cssText = variables.toCss();
 * }
 *
 * <h2>Colors and Sizes</h2>
 *
 * <p>Use enum constants for consistent colors and sizes:
 *
 * {@snippet :
 * // Colors
 * Badge badge = badge("New")
 *     .color(Color.blue);
 *
 * Label label = label("Success")
 *     .color(Color.green);
 *
 * // Sizes
 * Button button = button("Click me")
 *     .size(Size.lg);
 *
 * Title title = title(1, "Heading")
 *     .size(Size._2xl);
 * }
 *
 * <h2>Typed Modifiers</h2>
 *
 * <p>Use {@link org.patternfly.style.TypedModifier} for type-safe modifier application:
 *
 * {@snippet :
 * TypedModifier<Size> sizeModifier = new TypedModifier<>(
 *     "size",
 *     size -> "pf-m-" + size.value
 * );
 *
 * // Apply to element
 * element.classList.add(sizeModifier.modifier(Size.lg));
 * }
 *
 * <h2>Additional Enums</h2>
 *
 * <p>The package includes enums for specific styling concerns:
 * <ul>
 *     <li>{@link org.patternfly.style.Brightness} - Light/dark theme variants</li>
 *     <li>{@link org.patternfly.style.Status} - Status colors (success, warning, danger, info, custom)</li>
 *     <li>{@link org.patternfly.style.Orientation} - Horizontal/vertical orientation</li>
 *     <li>{@link org.patternfly.style.Sticky} - Sticky positioning (top/bottom)</li>
 *     <li>{@link org.patternfly.style.Visibility} - Element visibility states</li>
 * </ul>
 *
 * @see org.patternfly.style.Classes
 * @see org.patternfly.style.Modifiers
 * @see org.patternfly.style.Breakpoint
 * @see <a href="https://www.patternfly.org/get-started/design-foundations/design-tokens">PatternFly Design Tokens</a>
 */
package org.patternfly.style;