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
 * Functional interface representing a callback mechanism for handling the transition from one step to the next in a wizard.
 * <p>
 * This callback is triggered when an attempt is made to advance from the current step to the next step in the wizard's
 * sequence. It provides a mechanism to control whether the transition should proceed or be prevented based on custom logic.
 */
@FunctionalInterface
public interface WizardStepNextHandler {

    /**
     * Invoked when advancing from the current wizard step to the next step.
     *
     * @param wizard  the wizard instance managing the steps
     * @param current the current step in the wizard
     * @param next    the next step to transition to
     * @return {@code true} if the transition to the next step is allowed, {@code false} otherwise
     */
    boolean onNext(Wizard wizard, WizardStep current, WizardStep next);
}
