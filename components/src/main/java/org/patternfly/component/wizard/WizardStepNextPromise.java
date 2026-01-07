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
 * Interface to handle the transition to the next step in a {@link Wizard} workflow asynchronously.
 * <p>
 * When a {@link WizardStepNextPromise} is associated with a step, the navigation to the next step proceeds only if the promise
 * resolves to {@code true}.
 */
@FunctionalInterface
public interface WizardStepNextPromise {

    /**
     * Called when the user attempts to navigate to the next step.
     *
     * @param wizard  the wizard instance
     * @param current the current step being left
     * @param next    the next step to be entered
     * @return a {@code Promise} that resolves to {@code true} to allow the transition, or {@code false} to stay on the current
     * step
     */
    Promise<Boolean> onNext(Wizard wizard, WizardStep current, WizardStep next);
}
