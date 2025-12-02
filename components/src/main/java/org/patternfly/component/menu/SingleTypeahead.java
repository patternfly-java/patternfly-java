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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.SearchInput;
import org.patternfly.core.Aria;
import org.patternfly.popper.TriggerAction;
import elemental2.dom.Node;

import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuType.select;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class SingleTypeahead extends MenuToggleMenu<SingleTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link SingleTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and a
     * {@link SearchInput}.
     */
    public static SingleTypeahead singleTypeahead(String placeholder) {
        return new SingleTypeahead(MenuToggle.menuToggle(searchInput(Id.unique(ComponentType.SingleSelect.id, "si"))
                .plain()
                .placeholder(placeholder)));
    }

    /**
     * Creates a new {@link SingleTypeahead} component with the given {@link MenuToggle}. The {@link MenuToggle}
     * <strong>must</strong> be of type {@link MenuToggleType#typeahead} and <strong>must</strong> contain a
     * {@link SearchInput}.
     */
    public static SingleSelect singleTypeahead(MenuToggle menuToggle) {
        return new SingleSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    private SearchFilter searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    SingleTypeahead(MenuToggle menuToggle) {
        super(ComponentType.SingleSelect, menuToggle, TriggerAction.click);
        this.searchFilter = SearchFilter.contains();
        this.noResultsProvider = SearchFilter.noResults();

        menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> toggle());

        menuToggle.searchInput()
                .onClear((e, si) -> {
                    menu.clearSearch();
                    menu.unselectAllItems();
                    si.input().element().focus();
                })
                .onKeyup((event, si, value) -> {
                    // TODO Handle keys like up/down arrow, space, return, escape, ...
                    menu.search(searchFilter, noResultsProvider, value);
                    // expand();
                })
                .onChange((event, si, value) -> {
                    if (value.isEmpty()) {
                        menu.clearSearch();
                        menu.unselectAllItems();
                    }
                });

        onLoaded((e, c) -> {
            if (!menuToggle.searchInput().value().isEmpty()) {
                menu.search(searchFilter, noResultsProvider, menuToggle.searchInput().value());
            }
        });
        onToggle((e, c, expanded) -> menuToggle.searchInput().input().aria(Aria.expanded, expanded));
        stayOpen(event -> menuToggle.searchInput().utilities() != null && menuToggle.searchInput()
                .utilities()
                .element()
                .contains((Node) event.target));
    }

    // ------------------------------------------------------ add

    @Override
    public SingleTypeahead add(Menu menu) {
        if (menu.menuType == select && menu.selectionMode == single) {
            menu.onSingleSelect((e, menuItem, s) -> menuToggle.text(menuItem.text()));
        }
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    @Override
    public SingleTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Configures the search behavior for this typeahead.
     * <p>
     * By default, the search filter will match items that contain the search query in their text.
     *
     * @param searchFilter a {@link SearchFilter} that defines the search logic. The first parameter is a {@link MenuItem}
     *                     representing a menu item, and the second parameter is a {@link String} representing the search query.
     *                     The predicate should return {@code true} for items matching the search.
     * @return the {@link SingleTypeahead} instance for method chaining.
     */
    public SingleTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    /**
     * Defines the behavior when no results are found during a search. This method allows setting a {@link Function} that takes
     * a search query as input and provides a {@link MenuItem} to be displayed when no matching results are found.
     * <p>
     * By default, a "No results found" message is displayed.
     *
     * @param noResults a {@link Function} that accepts a {@link String} parameter representing the search query, and returns a
     *                  {@link MenuItem} to display for no results.
     * @return the {@link SingleTypeahead} instance for method chaining.
     */
    public SingleTypeahead onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(menu.findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(menu.findItem(itemId), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            menuToggle.text(item.text());
        }
    }
}
