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
 * Provides form components for building structured data entry interfaces.
 *
 * <p>This package contains the {@link org.patternfly.component.form.Form} component and its sub-components for
 * creating accessible, validated forms. Forms organize input controls into groups with labels, helper text, and
 * validation feedback. The package includes text inputs, text areas, form selects, checkboxes, and radio buttons.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.form.Form} - Top-level form container</li>
 *     <li>{@link org.patternfly.component.form.FormGroup} - Groups a label with a control and helper text</li>
 *     <li>{@link org.patternfly.component.form.FormGroupLabel} - Label for a form group</li>
 *     <li>{@link org.patternfly.component.form.FormGroupControl} - Control area within a form group</li>
 *     <li>{@link org.patternfly.component.form.FormSection} - Groups related form groups under a heading</li>
 *     <li>{@link org.patternfly.component.form.FormActionGroup} - Contains form action buttons (submit, cancel)</li>
 *     <li>{@link org.patternfly.component.form.FormAlert} - Displays an alert within a form</li>
 *     <li>{@link org.patternfly.component.form.FormFieldGroup} - Nestable field group with header and body</li>
 *     <li>{@link org.patternfly.component.form.TextInput} - Single-line text input</li>
 *     <li>{@link org.patternfly.component.form.TextArea} - Multi-line text input</li>
 *     <li>{@link org.patternfly.component.form.FormSelect} - Native select dropdown</li>
 *     <li>{@link org.patternfly.component.form.Checkbox} - Checkbox control</li>
 *     <li>{@link org.patternfly.component.form.Radio} - Radio button control</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>A basic form with text inputs, checkboxes, and action buttons:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.form.Checkbox.checkbox;
 * import static org.patternfly.component.form.Form.form;
 * import static org.patternfly.component.form.FormActionGroup.formActionGroup;
 * import static org.patternfly.component.form.FormGroup.formGroup;
 * import static org.patternfly.component.form.FormGroupControl.formGroupControl;
 * import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
 * import static org.patternfly.component.form.FormGroupRole.radiogroup;
 * import static org.patternfly.component.form.Radio.radio;
 * import static org.patternfly.component.form.TextInput.textInput;
 * import static org.patternfly.component.form.TextInputType.email;
 * import static org.patternfly.component.help.HelperText.helperText;
 *
 * Form form = form()
 *         .addGroup(formGroup("name").required()
 *                 .addLabel(formGroupLabel("Full name"))
 *                 .addControl(formGroupControl()
 *                         .addControl(textInput("name"))
 *                         .addHelperText(helperText("Include your middle name if you have one."))))
 *         .addGroup(formGroup("email").required()
 *                 .addLabel(formGroupLabel("Email"))
 *                 .addControl(formGroupControl()
 *                         .addControl(textInput(email, "email"))))
 *         .addGroup(formGroup("timezone").role(radiogroup)
 *                 .addLabel(formGroupLabel("Timezone"))
 *                 .addControl(formGroupControl().inline()
 *                         .addRadio(radio("tz-0", "timezone", "Eastern"))
 *                         .addRadio(radio("tz-1", "timezone", "Central"))
 *                         .addRadio(radio("tz-2", "timezone", "Pacific"))))
 *         .addActionGroup(formActionGroup()
 *                 .addButton(button("Submit").primary())
 *                 .addButton(button("Cancel").link()));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/forms/form">PatternFly Form</a>
 * @see <a href="https://www.patternfly.org/components/forms/text-input">PatternFly Text Input</a>
 * @see <a href="https://www.patternfly.org/components/forms/checkbox">PatternFly Checkbox</a>
 * @see <a href="https://www.patternfly.org/components/forms/radio">PatternFly Radio</a>
 */
package org.patternfly.component.form;