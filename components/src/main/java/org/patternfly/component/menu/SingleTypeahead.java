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

import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.BaseSearchInput;
import org.patternfly.component.textinputgroup.SearchInput;
import org.patternfly.popper.TriggerAction;

import elemental2.dom.Node;

import static org.patternfly.component.menu.TypeaheadDefaults.typeaheadDefaults;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class SingleTypeahead extends SingleMenuToggleMenu<SingleTypeahead> implements Typeahead<SingleTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link SingleTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and a
     * {@link SearchInput}.
     */
    public static SingleTypeahead singleTypeahead(String id, String placeholder) {
        return new SingleTypeahead(searchInput(id).plain().placeholder(placeholder));
    }

    /**
     * Creates a new {@link SingleTypeahead} instance using the provided {@link BaseSearchInput}.
     *
     * @param searchInput the {@link BaseSearchInput} used to configure the typeahead component. This input determines the
     *                    search behavior and the interaction model of the typeahead.
     * @return a new {@link SingleTypeahead} instance initialized with a {@link MenuToggle} of type
     * {@link MenuToggleType#typeahead}.
     */
    public static SingleTypeahead singleTypeahead(BaseSearchInput<?> searchInput) {
        return new SingleTypeahead(searchInput);
    }

    // ------------------------------------------------------ instance

    private SearchFilter searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    SingleTypeahead(BaseSearchInput<?> searchInput) {
        super(ComponentType.SingleSelect, MenuToggle.menuToggle(searchInput), TriggerAction.click);
        this.searchFilter = SearchFilter.contains();
        this.noResultsProvider = SearchFilter.noResults();

        typeaheadDefaults(this, searchFilter, noResultsProvider);
        stayOpen(event -> searchInput.utilities() != null && searchInput.utilities().element()
                .contains((Node) event.target));
    }

    @Override
    void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }

    // ------------------------------------------------------ add

    @Override
    public SingleTypeahead add(Menu menu) {
        super.add(menu);
        searchInputControlsMenuList();
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public SingleTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * {@inheritDoc}
     * <p>
     * By default, the search filter will match items that contain the search query in their text.
     */
    @Override
    public SingleTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    /**
     * {@inheritDoc}
     * <p>
     * By default, a "No results found" message is displayed.
     */
    @Override
    public SingleTypeahead onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }
}
