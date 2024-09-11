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
package org.patternfly.filter;

/**
 * Functional interface representing a condition used for filtering objects.
 *
 * @param <T> the type of the object to be filtered
 * @param <V> the type of the value used in the filter condition
 */
@FunctionalInterface
public interface FilterCondition<T, V> {

    /**
     * Evaluates whether the given object satisfies the specified condition with the provided value.
     *
     * @param object the object to be tested against the condition
     * @param value the value used in the condition for testing the object
     * @return true if the object matches the condition with the provided value, false otherwise
     */
    boolean match(T object, V value);
}
