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
 * Provides a wizard component for guiding users through a multi-step workflow.
 *
 * <p>A wizard presents a series of steps with navigation, back/next buttons, and optional validation.
 * It supports step types (default, review, summary), custom headers with title and description, custom
 * footers, step enter/leave handlers, and asynchronous next/previous handlers using promises.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.wizard.Wizard} - Main wizard component</li>
 *     <li>{@link org.patternfly.component.wizard.WizardStep} - Individual wizard step with content</li>
 *     <li>{@link org.patternfly.component.wizard.WizardHeader} - Custom wizard header</li>
 *     <li>{@link org.patternfly.component.wizard.WizardHeaderTitle} - Title within the wizard header</li>
 *     <li>{@link org.patternfly.component.wizard.WizardHeaderDescription} - Description within the wizard header</li>
 *     <li>{@link org.patternfly.component.wizard.WizardFooter} - Custom wizard footer with buttons</li>
 *     <li>{@link org.patternfly.component.wizard.WizardNav} - Navigation sidebar</li>
 *     <li>{@link org.patternfly.component.wizard.WizardNavItem} - Navigation item for a step</li>
 *     <li>{@link org.patternfly.component.wizard.WizardStepType} - Step type variants (default, review, summary)</li>
 *     <li>{@link org.patternfly.component.wizard.WizardContext} - Shared context across wizard steps</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a basic wizard with steps:
 *
 * {@snippet :
 * import static org.jboss.elemento.Elements.p;
 * import static org.patternfly.component.wizard.Wizard.wizard;
 * import static org.patternfly.component.wizard.WizardStep.wizardStep;
 * import static org.patternfly.component.wizard.WizardStepType.review;
 *
 * Wizard wizard = wizard().height(400)
 *         .addItem(wizardStep("step-0", "Step 1")
 *                 .add(p().text("Step 1 content")))
 *         .addItem(wizardStep("step-1", "Step 2")
 *                 .add(p().text("Step 2 content")))
 *         .addItem(wizardStep("step-2", "Review", review)
 *                 .add(p().text("Review your selections")));
 * }
 *
 * @see org.patternfly.component.wizard.Wizard
 * @see org.patternfly.component.wizard.WizardStep
 * @see <a href="https://www.patternfly.org/components/wizard">PatternFly Wizard</a>
 */
package org.patternfly.component.wizard;