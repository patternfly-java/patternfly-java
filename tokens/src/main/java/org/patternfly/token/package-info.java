/*
 *  Copyright 2025 Red Hat
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
 * PatternFly design tokens for Java.
 * <p>
 * This package provides predefined enum constants for all PatternFly design tokens. Design tokens are the visual design atoms
 * of the design system — specifically, they are named entities that store visual design attributes. They are used in place of
 * hard-coded values to ensure flexibility and unity across the design system.
 * <p>
 * All tokens are defined in the {@link org.patternfly.token.Token} enum class. Each token constant has three properties:
 * <ul>
 *     <li>{@code name} - The CSS custom property name starting with {@code --pf-t}</li>
 *     <li>{@code value} - The default value for the custom property</li>
 *     <li>{@code var} - The property name wrapped in {@code var()}, ready to use in styles</li>
 * </ul>
 * <p>
 * <strong>Example usage:</strong>
 *
 * {@snippet :
 * import static org.patternfly.style.Classes.modifier;
 * import static org.patternfly.token.Token.*;
 *
 * // Access token properties
 * String name = color_blue_10.name;     // "--pf-t--global--color--blue--10"
 * String value = color_blue_10.value;   // "#cfe7ff"
 * String var = color_blue_10.var;       // "var(--pf-t--global--color--blue--10)"
 *
 * // Use in styles
 * div().css(modifier("custom"))
 *      .style("color", color_blue_50.var)
 *      .style("background-color", color_blue_10.var);
 * }
 *
 * @see <a href="https://www.patternfly.org/tokens/about-tokens">PatternFly Design Tokens</a>
 * @see <a href="https://www.patternfly.org/tokens/all-patternfly-tokens">All PatternFly Tokens</a>
 */
package org.patternfly.token;