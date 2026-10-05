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

import org.patternfly.async.ReloadStrategy;
import org.patternfly.async.Reloadable;

import elemental2.promise.Promise;

/**
 * Represents a typeahead component interface that allows users to search, filter, and optionally create new items dynamically
 * based on input. A typeahead component is typically used in dropdowns or menus to enable efficient selection of items
 * from a potentially large set.
 *
 * @param <M> the type of the implementing class, allowing method chaining for configuration
 */
public interface Typeahead<M extends MenuToggleMenu<M>> extends Reloadable<M> {

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
     * Sets the filter used to match existing menu items against the current input value. Defaults to
     * {@link SearchFilter#contains()}. This filter is used for local filtering in the default strategy and in the
     * {@link org.patternfly.async.ReloadStrategy#structuralChange(java.util.function.BiPredicate) structuralChange} strategy
     * between reloads.
     *
     * @param searchFilter a {@link SearchFilter} that receives a {@link MenuItem} and the search query, returning {@code true}
     *                     for items that match.
     * @return the instance for method chaining.
     */
    M onFilter(SearchFilter searchFilter);

    /**
     * Configures the behavior for generating a "no results" menu item when no matching items are found in the menu list for the
     * given input text.
     *
     * @param noResults a {@link NoResults} implementation responsible for defining how the "no results" menu item is created
     *                  and displayed when no matches are found.
     * @return the instance of the current type enabling method chaining.
     */
    M onNoResults(NoResults noResults);

    /**
     * Convenience method that sets both the reload strategy and the local search filter in a single call. This is particularly
     * useful for the {@link org.patternfly.async.ReloadStrategy#structuralChange(java.util.function.BiPredicate)
     * structuralChange} strategy, where a local filter is needed between server reloads.
     *
     * @param strategy     the {@link org.patternfly.async.ReloadStrategy} controlling when to reload items
     * @param searchFilter the {@link SearchFilter} used for local filtering between reloads
     * @return the instance for method chaining.
     */
    default M reloadOn(ReloadStrategy strategy, SearchFilter searchFilter) {
        onFilter(searchFilter);
        return reloadOn(strategy);
    }
}
