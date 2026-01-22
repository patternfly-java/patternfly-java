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
package org.patternfly.component.menu;

import java.util.function.Function;

public interface Typeahead<M extends MenuToggleMenu<M>> {

    /**
     * Configures the search behavior for this typeahead.
     *
     * @param searchFilter a {@link SearchFilter} that defines the search logic. The first parameter is a {@link MenuItem}
     *                     representing a menu item, and the second parameter is a {@link String} representing the search query.
     *                     The predicate should return {@code true} for items matching the search.
     * @return the {@link SingleTypeahead} instance for method chaining.
     */
    M onSearch(SearchFilter searchFilter);

    /**
     * Defines the behavior when no results are found during a search. This method allows setting a {@link Function} that takes
     * a search query as input and provides a {@link MenuItem} to be displayed when no matching results are found.
     *
     * @param noResults a {@link Function} that accepts a {@link String} parameter representing the search query, and returns a
     *                  {@link MenuItem} to display for no results.
     * @return the {@link SingleTypeahead} instance for method chaining.
     */
    M onNoResults(Function<String, MenuItem> noResults);
}
