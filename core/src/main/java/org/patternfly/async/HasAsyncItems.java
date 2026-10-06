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
package org.patternfly.async;

import elemental2.promise.Promise;

/**
 * Represents a component that can asynchronously load and manage items.
 * <p>
 * The async lifecycle has three operations:
 * <ul>
 *     <li>{@link #load()} — first-time fetch, only runs when status is {@link AsyncStatus#pending}, idempotent</li>
 *     <li>{@link #refresh()} — re-fetch while keeping old items visible, then swap atomically</li>
 *     <li>{@link #reset()} — clear all items and go back to {@link AsyncStatus#pending} without fetching</li>
 * </ul>
 *
 * @param <C> the type of the component used for method chaining
 * @param <S> the type of the items
 */
public interface HasAsyncItems<C, S> {

    default C addItems(AsyncItems<C, S> items) {
        return add(items);
    }

    C add(AsyncItems<C, S> items);

    /** Fetches items for the first time. Only runs when status is {@link AsyncStatus#pending}. Idempotent. */
    Promise<Iterable<S>> load();

    /** Re-fetches items while keeping old items visible, then swaps them after the new items arrive. */
    Promise<Iterable<S>> refresh();

    /** Clears all items and sets status back to {@link AsyncStatus#pending}. Does not fetch. */
    void reset();

    AsyncStatus status();
}
