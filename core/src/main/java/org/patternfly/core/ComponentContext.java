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

import java.util.function.Supplier;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

/**
 * The ComponentContext interface represents a context for a component, providing methods to store and retrieve arbitrary values
 * associated with keys.
 *
 * @param <E> the type of the element representing the component
 * @param <B> the type of the builder used to build the component
 */
public interface ComponentContext<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

    /**
     * Stores a value associated with a key.
     *
     * @param <T>   the type of the value being stored
     * @param key   the key associated with the value
     * @param value the value to be stored
     */
    <T> B store(String key, T value);

    /**
     * Determines whether a value is stored with the specified key.
     *
     * @param key the key to check
     * @return true if a value is stored with the specified key, false otherwise
     */
    boolean has(String key);

    /**
     * Retrieves the value associated with the given key from the ComponentContext.
     *
     * @param <T> the type of the value being retrieved
     * @param key the key associated with the value
     * @return the value associated with the key, or null if no value is found
     */
    <T> T get(String key);

    /**
     * Retrieves the value associated with the given key from the ComponentContext.
     *
     * @param <T>          the type of the value being retrieved
     * @param key          the key associated with the value
     * @param defaultValue the default value to be returned if no value is found with the specified key
     * @return the value associated with the key, or the defaultValue if no value is found
     */
    default <T> T get(String key, T defaultValue) {
        if (has(key)) {
            return get(key);
        }
        return defaultValue;
    }

    /**
     * Retrieves the value associated with the given key from the ComponentContext.
     *
     * @param <T>          the type of the value being retrieved
     * @param key          the key associated with the value
     * @param defaultValue the default value to be returned if no value is found with the specified key
     * @return the value associated with the key, or the defaultValue if no value is found
     */
    default <T> T get(String key, Supplier<T> defaultValue) {
        if (has(key)) {
            return get(key);
        }
        return defaultValue.get();
    }
}
