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
 * Provides the PatternFly button component for triggering actions and navigation.
 *
 * <p>A button is a box area or text that communicates and triggers user actions when clicked or selected.
 * PatternFly supports several button styling variants including primary, secondary, tertiary, danger, warning,
 * link, plain, and control. Buttons can also include icons, progress indicators, and badge counts.
 *
 * <h2>Usage</h2>
 *
 * <p>Button variants:
 *
 * {@snippet :
 * Button primary = button("Primary").primary();
 * Button secondary = button("Secondary").secondary();
 * Button danger = button("Danger").danger();
 * Button link = button("Link").link();
 * Button plain = button().icon(times()).plain();
 * }
 *
 * <p>Buttons with icons, progress, and click handlers:
 *
 * {@snippet :
 * Button withIcon = button()
 *     .iconAndText(plusCircle(), "Add item", start)
 *     .link();
 * Button withProgress = button("Submit").primary()
 *     .progress(true)
 *     .onClick((event, btn) -> btn.toggleProgress());
 * Button withBadge = button("Issues").primary()
 *     .addBadge(badge(7).unread());
 * }
 *
 * @see org.patternfly.component.button.Button
 * @see <a href="https://www.patternfly.org/components/button">PatternFly Button</a>
 */
package org.patternfly.component.button;