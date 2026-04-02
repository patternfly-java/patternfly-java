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
 * Provides helper text components for displaying supplementary information alongside form controls.
 *
 * <p>This package contains the {@link org.patternfly.component.help.HelperText} component and its sub-components
 * for showing contextual help messages, validation feedback, and status information. Helper text items support
 * different validation statuses (default, indeterminate, warning, success, error) and can display static or
 * dynamic content with optional custom icons.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.help.HelperText} - Container for one or more helper text items</li>
 *     <li>{@link org.patternfly.component.help.HelperTextItem} - Individual helper text message with optional status and icon</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Static helper text with different validation statuses:
 *
 * {@snippet :
 * import static org.patternfly.component.ValidationStatus.error;
 * import static org.patternfly.component.ValidationStatus.success;
 * import static org.patternfly.component.ValidationStatus.warning;
 * import static org.patternfly.component.help.HelperText.helperText;
 * import static org.patternfly.component.help.HelperTextItem.helperTextItem;
 *
 * // Simple helper text
 * HelperText simple = helperText("This is default helper text");
 * HelperText warn = helperText("This is warning helper text", warning);
 * HelperText err = helperText("This is error helper text", error);
 *
 * // Multiple helper text items with dynamic status icons
 * HelperText multi = helperText()
 *         .addItem(helperTextItem("Must be at least 14 characters", success)
 *                 .dynamic())
 *         .addItem(helperTextItem("Cannot contain the word 'redhat'", error)
 *                 .dynamic());
 * }
 *
 * @see <a href="https://www.patternfly.org/components/helper-text">PatternFly Helper Text</a>
 */
package org.patternfly.component.help;