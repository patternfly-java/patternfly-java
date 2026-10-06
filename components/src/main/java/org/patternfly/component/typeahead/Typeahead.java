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
package org.patternfly.component.typeahead;

import org.patternfly.component.menu.NoResults;
import org.patternfly.component.menu.SearchFilter;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;

/**
 * Interface for components that combine a text input with a menu to provide typeahead/autocomplete behavior. A typeahead
 * component filters or refreshes its menu items based on user input.
 * <p>
 * The typeahead behavior is driven by a {@link RefreshStrategy} that evaluates each input change and returns a
 * {@link Decision}:
 * <ul>
 *     <li>{@link Decision#refresh()} — re-query the server immediately</li>
 *     <li>{@link Decision#debounce(int)} — re-query the server after a debounce timeout</li>
 *     <li>{@link Decision#filter()} — filter existing items locally (default when no strategy is set)</li>
 *     <li>{@link Decision#keep()} — do nothing, keep the current menu state as-is</li>
 * </ul>
 *
 * @param <B> the builder type for method chaining
 */
public interface Typeahead<B> {

    /** Sets the refresh strategy for asynchronously loaded items. */
    B refreshOn(RefreshStrategy strategy);

    /**
     * Sets the filter used to match existing menu items against the current input value. Defaults to
     * {@link SearchFilter#contains()}.
     */
    B filter(SearchFilter searchFilter);

    /** Configures the behavior for generating a "no results" menu item when no matching items are found. */
    B onNoResults(NoResults noResults);

    /** Adds a handler called when the menu has finished loading its items. */
    B onLoaded(ComponentHandler<B> handler);

    /** Adds a handler called when the typeahead menu is expanded or collapsed. */
    B onToggle(ToggleHandler<B> handler);
}
