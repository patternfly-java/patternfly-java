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
 * Provides theme, color scheme, and contrast management for PatternFly applications.
 *
 * <p>This package contains a color and theme system that manages PatternFly visual themes (default, felt),
 * color schemes (system, light, dark), and contrast modes (system, default, high contrast, glass). Preferences
 * are persisted in local storage and respond to system-level media queries such as {@code prefers-color-scheme}
 * and {@code prefers-contrast}.
 *
 * <p><strong>Key classes:</strong>
 * <ul>
 *     <li>{@link org.patternfly.componentgroup.theme.ThemeSelector} - UI component for selecting theme, color, and contrast</li>
 *     <li>{@link org.patternfly.componentgroup.theme.ThemeManager} - manages preference persistence and CSS class application</li>
 *     <li>{@link org.patternfly.componentgroup.theme.Color} - color scheme options (system, light, dark)</li>
 *     <li>{@link org.patternfly.componentgroup.theme.Contrast} - contrast mode options (system, default, high contrast, glass)</li>
 *     <li>{@link org.patternfly.componentgroup.theme.Theme} - theme variant options (default, felt)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * ThemeSelector selector = themeSelector()
 *     .placement(bottom);
 * }
 *
 * @see org.patternfly.componentgroup.theme.ThemeSelector
 */
package org.patternfly.componentgroup.theme;
