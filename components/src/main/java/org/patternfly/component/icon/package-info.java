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
 * Provides the icon component for rendering styled SVG icons with configurable size and status.
 *
 * <p>This package contains the {@link org.patternfly.component.icon.Icon} component for wrapping SVG icons from
 * icon sets (such as FontAwesome or PatternFly icons) with consistent sizing and optional status coloring.
 * Icons can be sized to match body text, heading text, or standalone sizes, and can display status colors
 * for contextual meaning.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.icon.Icon} - Renders an icon with configurable size and status</li>
 *     <li>{@link org.patternfly.component.icon.IconSize} - Defines available icon sizes (standalone, body, and heading sizes)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Creating icons with different sizes and status colors:
 *
 * {@snippet :
 * import static org.patternfly.component.icon.Icon.icon;
 * import static org.patternfly.component.icon.IconSize.lg;
 * import static org.patternfly.component.icon.IconSize.sm;
 * import static org.patternfly.component.icon.IconSize.xl;
 * import static org.patternfly.icon.IconSets.fas.checkCircle;
 * import static org.patternfly.icon.IconSets.fas.cog;
 * import static org.patternfly.icon.IconSets.fas.exclamationCircle;
 * import static org.patternfly.style.Status.danger;
 * import static org.patternfly.style.Status.success;
 *
 * // Basic icons
 * Icon settingsIcon = icon(cog());
 *
 * // Icons with sizes
 * Icon smallIcon = icon(checkCircle()).size(sm);
 * Icon largeIcon = icon(checkCircle()).size(lg);
 * Icon extraLargeIcon = icon(checkCircle()).size(xl);
 *
 * // Icons with status colors
 * Icon successIcon = icon(checkCircle()).status(success);
 * Icon dangerIcon = icon(exclamationCircle()).status(danger);
 * }
 *
 * @see <a href="https://www.patternfly.org/components/icon">PatternFly Icon</a>
 */
package org.patternfly.component.icon;