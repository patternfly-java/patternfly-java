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
package org.patternfly.component.wizard;

/**
 * Wizard step types.
 *
 * @see <a
 * href="https://www.patternfly.org/components/wizard/design-guidelines/#review-and-completion">https://www.patternfly.org/components/wizard/design-guidelines/#review-and-completion</a>
 */
public enum WizardStepType {

    /**
     * Represents a normal step in a wizard.
     */
    step,

    /**
     * Represents the last step in a wizard. This step should include a summary of what the user has inputted so the user may
     * confirm them before committing their changes.
     */
    review,

    /**
     * If it takes a long time (more than a few seconds) for changes to be applied, a progress step is recommended. This can be
     * constructed from a variation of the empty state pattern by embedding a progress bar and appropriate messaging within the
     * body of the wizard.
     */
    progress,

    /**
     * Once the changes initiated by the wizard are completed, a final confirmation screen should be displayed. Again, this can
     * leverage an empty state pattern to present a success (or failure) message to users.
     */
    summary
}
