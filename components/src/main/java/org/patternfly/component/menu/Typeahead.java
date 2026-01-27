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

import elemental2.promise.Promise;

public interface Typeahead<M extends MenuToggleMenu<M>> {

    /**
     * Allows the creation of new menu items based on user input. This method enables the typeahead component to dynamically add
     * custom items when the provided input does not match any existing items. A default prompt is used to guide the user with a
     * message like "Create new item '<input>'".
     *
     * @param createItem a {@link Function} that takes a {@code String} input representing the user's data and returns a
     *                   {@link Promise} of a {@link MenuItem}, which corresponds to the newly created item.
     * @return an instance of the enclosing type, enabling method chaining for further configuration.
     */
    default M allowNewItems(Function<String, Promise<MenuItem>> createItem) {
        return allowNewItems(value -> "Create new item \"" + value + "\"", createItem);
    }

    /**
     * Allows the creation of new menu items based on user input. This method enables a typeahead component to provide
     * functionality for dynamically adding custom items when the user-provided input does not match any existing items.
     *
     * @param prompt     a {@link Function} that takes a {@code String} input representing the user's data and returns a
     *                   {@code String} response, typically used to prompt the user or display a message.
     * @param createItem a {@link Function} that takes a {@code String} input representing the user's data and returns a
     *                   {@link Promise} of a {@link MenuItem}, representing the newly created item.
     * @return an instance of the enclosing type, enabling method chaining for further configuration.
     */
    M allowNewItems(Function<String, String> prompt, Function<String, Promise<MenuItem>> createItem);

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
     * Configures the behavior for generating a "no results" menu item when no matching items are found in the menu list for the
     * given input text.
     *
     * @param noResults a {@link NoResults} implementation responsible for defining how the "no results" menu item is created
     *                  and displayed when no matches are found.
     * @return the instance of the current type enabling method chaining.
     */
    M onNoResults(NoResults noResults);
}
