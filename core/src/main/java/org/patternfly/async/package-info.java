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
/**
 * Asynchronous loading infrastructure for PatternFly Java components.
 *
 * <p>This package provides the core building blocks for components that load items asynchronously:
 *
 * <ul>
 *     <li>{@link org.patternfly.async.AsyncStatus} - Enumeration representing asynchronous operation states
 *         (static, pending, resolved, rejected)</li>
 *     <li>{@link org.patternfly.async.AsyncItems} - Functional interface for asynchronous computations yielding
 *         iterable results</li>
 *     <li>{@link org.patternfly.async.AsyncItemsController} - State machine delegate managing load lifecycle,
 *         generation counting for concurrent-load safety, and reset-during-pending</li>
 *     <li>{@link org.patternfly.async.HasAsyncItems} - Interface for components that asynchronously manage items</li>
 *     <li>{@link org.patternfly.async.Reloadable} - Interface for components with configurable reload strategies</li>
 *     <li>{@link org.patternfly.async.ReloadStrategy} - Defines when and how items should be reloaded in response to
 *         input (debounced re-query or structural-change detection)</li>
 * </ul>
 *
 * @see org.patternfly.async.AsyncItemsController
 */
package org.patternfly.async;
