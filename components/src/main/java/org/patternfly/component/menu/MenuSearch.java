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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.textinputgroup.SearchInput;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.input;
import static org.patternfly.style.Classes.search;

public class MenuSearch extends MenuSubComponent<HTMLElement, MenuSearch> implements
        Attachable, ElementContainerDelegate<HTMLElement, MenuSearch> {

    // ------------------------------------------------------ factory

    public static MenuSearch menuSearch() {
        return new MenuSearch();
    }


    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuSearch.class.getName());
    public static final String SUB_COMPONENT_NAME = "ms";

    private final HTMLElement inputContainer;
    private SearchInput searchInput;
    private SearchFilter searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    MenuSearch() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.menu, search)).element());
        this.searchFilter = SearchFilter.contains();
        this.noResultsProvider = SearchFilter.noResults();
        element().appendChild(inputContainer = div().css(component(Classes.menu, search, input)).element());
        Attachable.register(this, this);
    }

    @Override
    public Element containerDelegate() {
        return inputContainer;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        if (searchFilter != null) {
            if (menu.content != null && !menu.content.groups.isEmpty()) {
                logger.warn("Menu %o has a search filter and groups. Search filters are not supported for grouped menus.",
                        menu);
            }
            if (searchInput == null) {
                logger.warn("Menu %o has a search filter, but no search input was added.", menu);
            } else {
                searchInput
                        .onKeyup((event, si, value) -> menu.search(searchFilter, noResultsProvider, value))
                        .onClear((event, si) -> menu.clearSearch());
            }
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuSearch that() {
        return this;
    }

    // ------------------------------------------------------ add

    public MenuSearch addSearchInput(SearchInput searchInput) {
        this.searchInput = searchInput;
        return add(searchInput);
    }

    // ------------------------------------------------------ events

    /**
     * Configures the search behavior for the search input you have added with {@link #addSearchInput(SearchInput)}.
     * <p>
     * By default, the search filter will match items that contain the search query in their text.
     *
     * @param searchFilter a {@link SearchFilter} that defines the search logic. The first parameter is a {@link MenuItem}
     *                     representing a menu item, and the second parameter is a {@link String} representing the search query.
     *                     The predicate should return {@code true} for items matching the search.
     * @return the {@link MenuSearch} instance for method chaining.
     */
    public MenuSearch onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    /**
     * Defines the behavior when no results are found during a search in the menu. This method allows setting a {@link Function}
     * that takes a search query as input and provides a {@link MenuItem} to be displayed when no matching results are found.
     * <p>
     * By default, a "No results found" message is displayed.
     *
     * @param noResults a {@link Function} that accepts a {@link String} parameter representing the search query, and returns a
     *                  {@link MenuItem} to display for no results.
     * @return the {@link MenuSearch} instance for method chaining.
     */
    public MenuSearch onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }
}
