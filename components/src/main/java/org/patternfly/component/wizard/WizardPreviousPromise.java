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
 * Functional interface representing a promise executed when navigating back to a previous step in a wizard. This interface
 * defines a method to handle transitions when the user moves from the current step to the previous one.
 * <p>
 * The method is expected to return a {@link Promise} indicating the completion of any asynchronous or transitional operations
 * that need to occur during the step transition.
 */
@FunctionalInterface
public interface WizardPreviousPromise {

    /**
     * Handles the transition when navigating back to a previous step in a wizard. This method is invoked during the step
     * transition to process any asynchronous or transitional logic required for the navigation.
     *
     * @param wizard   the {@code Wizard} instance where the transition is taking place.
     * @param current  the current {@code WizardStep} being navigated from.
     * @param previous the previous {@code WizardStep} being navigated to.
     * @return a {@code Promise<Void>} representing the completion of any required transitional operations during the step
     * change.
     */
    Promise<Void> onPrevious(Wizard wizard, WizardStep current, WizardStep previous);
}
