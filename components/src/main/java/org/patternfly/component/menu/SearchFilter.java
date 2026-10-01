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

/**
 * Represents a filter for matching menu items against a search query. Used by typeahead components and {@link MenuSearch} to
 * determine which items are visible for a given input value.
 *
 * @see NoResults
 */
@FunctionalInterface
public interface SearchFilter extends BiPredicate<MenuItem, String> {

    /**
     * Creates a filter that matches menu items whose text contains the search query (case-insensitive).
     *
     * @return a {@link SearchFilter} that evaluates to {@code true} if the menu item's text contains the search text
     * (case-insensitive).
     */
    static SearchFilter contains() {
        return (item, text) -> item.text().toLowerCase().contains(text.toLowerCase());
    }
}
