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

import java.util.function.Consumer;

import org.patternfly.core.AsyncStatus;

import elemental2.promise.Promise;

import static java.util.Collections.emptyList;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.core.AsyncStatus.rejected;
import static org.patternfly.core.AsyncStatus.resolved;
import static org.patternfly.core.AsyncStatus.static_;

/**
 * A delegate that manages the async loading state machine for components implementing {@link HasAsyncItems}.
 * <p>
 * Handles status transitions, a generation counter to discard stale responses from concurrent loads, and reset-during-pending.
 * Components provide callbacks for DOM-specific operations (adding items, clearing, showing errors).
 * <p>
 * This class follows the same composition pattern as {@link AurHandler}.
 *
 * @param <C> the component type that owns the async items
 * @param <S> the type of items being loaded
 */
public class AsyncItemsController<C, S> {

    // ------------------------------------------------------ instance

    private AsyncItems<C, S> asyncItems;
    private AsyncStatus status;
    private int generation;

    // ------------------------------------------------------ factory / constructor

    public AsyncItemsController() {
        this.status = static_;
        this.generation = 0;
    }

    // ------------------------------------------------------ api

    /**
     * Registers the async items function and sets status to {@link AsyncStatus#pending}.
     */
    public void set(AsyncItems<C, S> asyncItems) {
        this.asyncItems = asyncItems;
        this.status = pending;
    }

    /**
     * Loads items if status is {@link AsyncStatus#pending} and an async function is registered.
     * <p>
     * Increments the generation counter before starting the load. When the promise resolves, the generation is checked — if it
     * no longer matches (because {@link #reset} or another {@link #load} was called in the meantime), the result is silently
     * discarded.
     *
     * @param component the component instance passed to the {@link AsyncItems} function
     * @param onItem    called for each item in the result
     * @param onEmpty   called when the result is empty (may be {@code null})
     * @param onError   called when the promise rejects (may be {@code null})
     * @param onBefore  called before the async fetch starts, e.g., to show a loading indicator (may be {@code null})
     * @param onAfter   called after items have been processed, e.g., to remove the loading indicator (may be {@code null})
     * @return a promise that resolves with the loaded items, or an empty list if skipped or stale
     */
    @SuppressWarnings("unchecked")
    public Promise<Iterable<S>> load(C component,
            Consumer<S> onItem,
            Runnable onEmpty,
            Consumer<Object> onError,
            Runnable onBefore,
            Runnable onAfter) {
        if (status == pending && asyncItems != null) {
            int currentGeneration = ++generation;
            if (onBefore != null) {
                onBefore.run();
            }
            return asyncItems.apply(component)
                    .then(items -> {
                        if (currentGeneration != generation) {
                            return Promise.resolve((Iterable<S>) emptyList());
                        }
                        status = resolved;
                        if (onAfter != null) {
                            onAfter.run();
                        }
                        int count = 0;
                        for (S item : items) {
                            onItem.accept(item);
                            count++;
                        }
                        if (count == 0 && onEmpty != null) {
                            onEmpty.run();
                        }
                        return Promise.resolve(items);
                    })
                    .catch_(err -> {
                        if (currentGeneration != generation) {
                            return Promise.resolve((Iterable<S>) emptyList());
                        }
                        status = rejected;
                        if (onAfter != null) {
                            onAfter.run();
                        }
                        if (onError != null) {
                            onError.accept(err);
                        }
                        return Promise.reject(err);
                    });
        }
        return Promise.resolve((Iterable<S>) emptyList());
    }

    /**
     * Resets the controller to {@link AsyncStatus#pending}, allowing a subsequent {@link #load} call. Unlike the previous
     * implementation, this works even when status is already {@code pending} — it increments the generation counter to invalidate
     * any in-flight load.
     *
     * @param onClear called to clear existing items from the DOM (may be {@code null})
     */
    public void reset(Runnable onClear) {
        if (status != static_) {
            generation++;
            status = pending;
            if (onClear != null) {
                onClear.run();
            }
        }
    }

    /**
     * Convenience method: {@link #reset} followed by {@link #load}.
     */
    public Promise<Iterable<S>> reload(C component,
            Consumer<S> onItem,
            Runnable onEmpty,
            Consumer<Object> onError,
            Runnable onBefore,
            Runnable onAfter,
            Runnable onClear) {
        reset(onClear);
        return load(component, onItem, onEmpty, onError, onBefore, onAfter);
    }

    public AsyncStatus status() {
        return status;
    }

    /**
     * Returns {@code true} if an async function has been registered and the status is {@link AsyncStatus#pending} (i.e., items
     * have not yet been loaded or have been reset).
     */
    public boolean hasAsyncItems() {
        return asyncItems != null && status == pending;
    }
}
