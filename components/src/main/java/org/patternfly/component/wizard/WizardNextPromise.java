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

import elemental2.promise.Promise;

/**
 * A functional interface designed to control the flow of transitions between steps in a wizard process. It provides a mechanism
 * to handle asynchronous operations that determine whether a transition from the current step to the next step succeeds or
 * fails.
 * <p>
 * The implementation of the {@code onNext} method should encapsulate the logic for validating or preparing the transition
 * between two steps. As a component of a wizard system, this interface helps manage dynamic and interactive step workflows.
 */
@FunctionalInterface
public interface WizardNextPromise {

    /**
     * Handles the transition from the current step to the next step in a wizard process.
     * <p>
     * If the promise is fulfilled, the transition to the next step is allowed. If it is rejected, the transition is not
     * allowed.
     *
     * @param wizard  the wizard instance that controls the sequence of steps
     * @param current the current step in the wizard
     * @param next    the next step to transition to in the wizard
     * @return a Promise that completes when the transition to the next step is finalized
     */
    Promise<Void> onNext(Wizard wizard, WizardStep current, WizardStep next);
}
