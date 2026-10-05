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

    /**
     * Creates a filter that splits the search query by the given delimiter, then checks that the menu item's text contains
     * all non-empty terms (case-insensitive). For example, with delimiter {@code '/'}, the query {@code "tolkien/rings"}
     * matches any item whose text contains both "tolkien" and "rings".
     *
     * @param delimiter the character used to split the query into terms
     * @return a {@link SearchFilter} that matches items containing all query terms
     */
    static SearchFilter containsAll(char delimiter) {
        return (item, query) -> {
            String text = item.text().toLowerCase();
            for (String term : query.replace(delimiter, ' ').trim().toLowerCase().split("\\s+")) {
                if (!term.isEmpty() && !text.contains(term)) {
                    return false;
                }
            }
            return true;
        };
    }

    /**
     * Creates a filter that uses only the text after the last occurrence of the given delimiter for matching. If the delimiter
     * is not present, the entire query is used. Matching is case-insensitive.
     * <p>
     * This is useful for hierarchical typeaheads where the text before the delimiter selects a category, and the text after it
     * filters within that category. For example, with delimiter {@code '/'}, the query {@code "laptops/mac"} filters items
     * using only "mac".
     *
     * @param delimiter the character that separates hierarchical segments
     * @return a {@link SearchFilter} that matches items against the last segment of the query
     */
    static SearchFilter lastSegment(char delimiter) {
        return (item, query) -> {
            int pos = query.lastIndexOf(delimiter);
            String term = pos >= 0 ? query.substring(pos + 1).trim() : query.trim();
            return term.isEmpty() || item.text().toLowerCase().contains(term.toLowerCase());
        };
    }
}
