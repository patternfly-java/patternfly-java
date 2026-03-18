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
package org.patternfly.component;

import org.patternfly.core.AsyncStatus;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

/**
 * Represents a component or entity that can asynchronously manage items and their associated operations.
 *
 * @param <E> the type of the element associated with the items
 * @param <C> the type of the component extending {@code HasItems}, used for method chaining
 * @param <S> the type of the items, which must implement {@code HasIdentifier}
 */
public interface HasAsyncItems<E extends Element, C extends HasItems<E, C, S>, S extends HasIdentifier<? extends HTMLElement, ?>> {

    default C addItems(AsyncItems<C, S> items) {
        return add(items);
    }

    C add(AsyncItems<C, S> items);

    Promise<Iterable<S>> load();

    Promise<Iterable<S>> reload();

    void reset();

    AsyncStatus status();
}
