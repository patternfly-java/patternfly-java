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

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Inspired by FrontendMasters/obervablish-values.
 *
 * @see <a href=
 *      "https://github.com/FrontendMasters/observablish-values/tree/main">https://github.com/FrontendMasters/observablish-values/tree/main</a>
 */
public class ObservableValue<T> {

    // ------------------------------------------------------ factory

    public static <T> ObservableValue<T> ov(T initial) {
        return new ObservableValue<>(initial);
    }

    // ------------------------------------------------------ instance

    private T value;
    private T previousValue;
    private final List<Subscriber<T>> subscribers;

    ObservableValue(T initial) {
        this.value = initial;
        this.previousValue = initial;
        this.subscribers = new ArrayList<>();
    }

    // ------------------------------------------------------ api

    public T get() {
        return value;
    }

    /**
     * Sets the value of the ObservableValue, but does not notify subscribers.
     */
    public void silent(T value) {
        internalUpdate(value);
    }

    /**
     * Sets the value of the ObservableValue and notifies subscribers if the value has changed.
     */
    public void set(T value) {
        boolean changed = !Objects.equals(this.value, value);
        if (changed) {
            internalUpdate(value);
            publish();
        }
    }

    /**
     * Sets the value of the ObservableValue to the specified value and notifies subscribers regardless of whether the value has
     * changed.
     */
    public void change(T value) {
        internalUpdate(value);
        publish();
    }

    public ObservableValue<T> subscribe(Subscriber<T> fn) {
        subscribers.add(fn);
        return this;
    }

    public void publish() {
        for (Subscriber<T> subscriber : subscribers) {
            subscriber.changed(value, previousValue);
        }
    }

    // ------------------------------------------------------ internal

    private void internalUpdate(T newValue) {
        this.previousValue = this.value;
        this.value = newValue;
    }

    // ------------------------------------------------------ nested

    @FunctionalInterface
    public interface Subscriber<T> {

        void changed(T current, T previous);
    }
}
