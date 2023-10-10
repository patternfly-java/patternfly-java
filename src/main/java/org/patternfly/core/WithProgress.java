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
package org.patternfly.core;

import java.util.function.Consumer;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.spinner.Spinner;

import elemental2.dom.Element;

import static org.patternfly.layout.Classes.inProgress;
import static org.patternfly.layout.Classes.modifier;

public interface WithProgress<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    default B startProgress() {
        if (!isInProgress()) {
            inProgress(true);
        }
        return that();
    }

    default B stopProgress() {
        if (isInProgress()) {
            inProgress(false);
        }
        return that();
    }

    default B toggleProgress() {
        return inProgress(!isInProgress());

    }

    default boolean isInProgress() {
        return element().classList.contains(modifier(inProgress));
    }

    default B inProgress(boolean inProgress) {
        return inProgress(inProgress, "Loading...", null);
    }

    default B inProgress(boolean inProgress, String label) {
        return inProgress(inProgress, label, null);
    }

    default B inProgress(boolean inProgress, Consumer<Spinner> spinnerConsumer) {
        return inProgress(inProgress, "Loading...", spinnerConsumer);
    }

    B inProgress(boolean inProgress, String label, Consumer<Spinner> spinnerConsumer);
}
