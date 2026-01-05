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
 * Functional interface for handling callbacks when navigating to the next step in a wizard workflow. Implementations of this
 * interface can define custom behavior for the transition between steps and control whether the transition is allowed.
 */
@FunctionalInterface
public interface WizardPreviousHandler {

    /**
     * Called when transitioning to the next step in a wizard workflow. This method is designed to handle the logic associated
     * with moving from one step to another.
     *
     * @param wizard   The wizard instance managing the workflow.
     * @param current  The current wizard step before transitioning.
     * @param previous The previous wizard step from which the transition occurred.
     * @return A boolean indicating whether transitioning to the next step is allowed. Returns {@code true} if the transition is
     * permitted; otherwise, {@code false}.
     */
    boolean onPrevious(Wizard wizard, WizardStep current, WizardStep previous);
}
