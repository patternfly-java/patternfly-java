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

/**
 * Interface for components that support configurable reload strategies for asynchronously loaded items.
 *
 * <p>By default, items are loaded once and filtered locally. Call {@link #reloadOn(ReloadStrategy)} to switch to a different
 * strategy. See {@link ReloadStrategy} for the available options.
 *
 * @param <B> the builder type for method chaining
 *
 * @see ReloadStrategy#everyInput(int)
 * @see ReloadStrategy#structuralChange(java.util.function.BiPredicate)
 */
public interface Reloadable<B> {

    /**
     * Sets the reload strategy for asynchronously loaded items. Only one strategy can be active at a time; calling this method
     * replaces any previously set strategy.
     *
     * @param strategy the reload strategy to use
     * @see ReloadStrategy
     */
    B reloadOn(ReloadStrategy strategy);
}
