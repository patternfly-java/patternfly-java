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
 * Provides input group components for combining form controls with text, icons, or buttons.
 *
 * <p>This package contains the {@link org.patternfly.component.inputgroup.InputGroup} component and its sub-components
 * for grouping a text input or text area with supplementary elements such as static text, icons, buttons, or dropdowns.
 * Input groups visually connect related controls into a single composite input.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.inputgroup.InputGroup} - Container that groups input controls together</li>
 *     <li>{@link org.patternfly.component.inputgroup.InputGroupItem} - Wraps an individual item (control, button, or dropdown)</li>
 *     <li>{@link org.patternfly.component.inputgroup.InputGroupText} - Displays static text or an icon alongside the input</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>An input group with a text input and a static text suffix:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.form.TextInput.textInput;
 * import static org.patternfly.component.inputgroup.InputGroup.inputGroup;
 * import static org.patternfly.component.inputgroup.InputGroupItem.inputGroupItem;
 * import static org.patternfly.component.inputgroup.InputGroupText.inputGroupText;
 * import static org.patternfly.icon.IconSets.fas.at;
 *
 * // Input with text suffix
 * InputGroup emailInput = inputGroup()
 *         .addItem(inputGroupItem().fill()
 *                 .addControl(textInput("email")))
 *         .addText(inputGroupText("@example.com"));
 *
 * // Input with icon prefix and button
 * InputGroup searchInput = inputGroup()
 *         .addText(inputGroupText().icon(at()))
 *         .addItem(inputGroupItem().fill()
 *                 .addControl(textInput("search")))
 *         .addItem(inputGroupItem()
 *                 .addButton(button("Search").control()));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/input-group">PatternFly Input Group</a>
 */
package org.patternfly.component.inputgroup;