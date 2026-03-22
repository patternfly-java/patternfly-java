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
package org.patternfly.extension.finder;

import java.util.function.BiPredicate;

import org.patternfly.component.textinputgroup.SearchInput;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.filtered;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.search;

public class FinderColumnSearch extends FinderSubComponent<HTMLElement, FinderColumnSearch> {

    // ------------------------------------------------------ factory

    public static FinderColumnSearch finderColumnSearch() {
        return new FinderColumnSearch();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fcs";

    /**
     * A {@link BiPredicate} implementation used to filter {@link FinderItem} instances based on their text content. This filter
     * checks if the given {@link FinderItem}'s text does not contain the specified search value (case-insensitive).
     * <p>
     * The predicate evaluates to {@code true} if: - The search value is non-empty. - The lower-cased text of the
     * {@link FinderItem} does not contain the lower-cased search value.
     * <p>
     * This can be used to exclude items whose text does not match the specified search criteria.
     */
    public static final BiPredicate<FinderItem, String> ITEM_TEXT_CONTAINS_FILTER = (item, value) -> {
        String lcv = value.toLowerCase();
        return !value.isEmpty() && !item.text().toLowerCase().contains(lcv);
    };

    FinderColumnSearch() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, column, search)).element());
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link SearchInput} instance to the FinderColumnSearch with no specific filtering predicate.
     *
     * @param input the {@link SearchInput} instance to be added
     * @return the updated {@code FinderColumnSearch} instance
     */
    public FinderColumnSearch addSearchInput(SearchInput input) {
        return add(input, null);
    }

    /**
     * Adds a {@link SearchInput} instance to the FinderColumnSearch with no specific filtering predicate.
     *
     * @param input the {@link SearchInput} instance to be added
     * @return the updated {@code FinderColumnSearch} instance
     */
    public FinderColumnSearch add(SearchInput input) {
        return add(input, null);
    }

    /**
     * Adds a {@link SearchInput} instance to the FinderColumnSearch with a specific filtering predicate. The filtering
     * predicate is used to determine how {@link FinderItem}s should be filtered based on their text content and the specified
     * search value. If the filter predicate returns {@code true}, the {@link FinderItem} will be marked as filtered.
     *
     * @param input     the {@link SearchInput} instance to be added
     * @param predicate a {@link BiPredicate} that defines the filtering logic based on a {@link FinderItem} and the given
     *                  search value
     * @return the updated {@code FinderColumnSearch} instance
     */
    public FinderColumnSearch addSearchInput(SearchInput input, BiPredicate<FinderItem, String> predicate) {
        return add(input, predicate);
    }

    /**
     * Adds a {@link SearchInput} instance to the FinderColumnSearch with a specific filtering predicate. The filtering
     * predicate is used to determine how {@link FinderItem}s should be filtered based on their text content and the specified
     * search value. If the filter predicate returns {@code true}, the {@link FinderItem} will be marked as filtered.
     *
     * @param input     the {@link SearchInput} instance to be added
     * @param predicate a {@link BiPredicate} that defines the filtering logic based on a {@link FinderItem} and the given
     *                  search value
     * @return the updated {@code FinderColumnSearch} instance
     */
    public FinderColumnSearch add(SearchInput input, BiPredicate<FinderItem, String> predicate) {
        add(input.element());
        if (predicate != null) {
            input.onInput((e, si, value) -> {
                FinderColumn column = lookupSubComponent(FinderColumn.SUB_COMPONENT_NAME, true);
                if (column != null) {
                    for (FinderItem item : column.items()) {
                        item.classList().toggle(modifier(filtered), predicate.test(item, value));
                    }
                }
            });
            input.onClear((e, si) -> {
                FinderColumn column = lookupSubComponent(FinderColumn.SUB_COMPONENT_NAME, true);
                if (column != null) {
                    column.items().forEach(item -> item.classList().remove(modifier(filtered)));
                }
            });
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnSearch that() {
        return this;
    }
}
