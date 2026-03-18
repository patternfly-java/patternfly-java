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

import java.util.function.Function;

import elemental2.promise.Promise;

/**
 * A functional interface that represents an asynchronous computation yielding an iterable result.
 * It extends the {@code Function} interface, allowing it to accept an input of type {@code T} and
 * return a {@code Promise} that resolves to an {@code Iterable} of type {@code R}.
 * <p>
 * The purpose of {@code AsyncItems} is to define a contract for handling operations where a computation
 * produces multiple results asynchronously, encapsulated in a {@code Promise}.
 *
 * @param <T> the input type accepted by the function
 * @param <R> the type of elements contained in the resulting iterable
 *
 * @see HasAsyncItems
 */
@FunctionalInterface
public interface AsyncItems<T, R> extends Function<T, Promise<Iterable<R>>> {
}
