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

import java.util.function.BiPredicate;
import java.util.function.Function;

import org.jboss.elemento.Id;

import static org.patternfly.component.menu.MenuItem.menuItem;

/**
 * Represents a search filter for menu items. This interface extends the BiPredicate functional interface and is used to
 * encapsulate the condition for filtering menu items based on a search query.
 */
@FunctionalInterface
public interface SearchFilter extends BiPredicate<MenuItem, String> {

    /**
     * Creates a search filter that checks if the text of a menu item contains the given search text, regardless of case
     * sensitivity.
     *
     * @return a {@link SearchFilter} that evaluates to true if the menu item's text contains the specified search text
     * (case-insensitive), and false otherwise.
     */
    static SearchFilter contains() {
        return (item, text) -> item.text().toLowerCase().contains(text.toLowerCase());
    }

    /**
     * Creates a function that generates a disabled menu item indicating no results were found for a given search query.
     *
     * @return a {@link Function} that accepts a string (search query) and returns a disabled menu item with a message
     * indicating no results for the provided query.
     */
    static Function<String, MenuItem> noResults() {
        return value -> menuItem(Id.unique("no-results"), "No results found for \"" + value + "\"")
                .disabled();
    }
}
