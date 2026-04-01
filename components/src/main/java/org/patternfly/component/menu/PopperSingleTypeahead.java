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
import elemental2.promise.Promise;

import static org.patternfly.component.menu.TypeaheadSupport.shouldExpandOnKeyup;
import static org.patternfly.component.menu.TypeaheadSupport.typeaheadDefaults;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @deprecated This implementation uses the Popper.js API, which is due to be removed soon. Use {@link SingleTypeahead} instead.
 */
@Deprecated
public class PopperSingleTypeahead
        extends PopperSingleMenuToggleMenu<PopperSingleTypeahead> implements PopperTypeahead<PopperSingleTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link PopperSingleTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and a
     * {@link SearchInput}.
     */
    public static PopperSingleTypeahead singleTypeahead(String id, String placeholder) {
        return new PopperSingleTypeahead(searchInput(id).plain().placeholder(placeholder));
    }

    /**
     * Creates a new {@link PopperSingleTypeahead} instance using the provided {@link BaseSearchInput}.
     *
     * @param searchInput the {@link BaseSearchInput} used to configure the typeahead component. This input determines the
     *                    search behavior and the interaction model of the typeahead.
     * @return a new {@link PopperSingleTypeahead} instance initialized with a {@link MenuToggle} of type
     * {@link MenuToggleType#typeahead}.
     */
    public static PopperSingleTypeahead singleTypeahead(BaseSearchInput<?> searchInput) {
        return new PopperSingleTypeahead(searchInput);
    }

    // ------------------------------------------------------ instance

    private SearchFilter searchFilter;
    private NoResults noResults;

    PopperSingleTypeahead(BaseSearchInput<?> searchInput) {
        super(ComponentType.PopperSingleTypeahead, MenuToggle.menuToggle(searchInput), TriggerAction.click);
        this.searchFilter = SearchFilter.contains();
        this.noResults = NoResults.noResults();

        typeaheadDefaults(this);
        menuToggle.searchInput().onKeyup((e, c, value) -> {
            if (shouldExpandOnKeyup(this, e)) {
                expand(false);
            }
            menu.search(searchFilter, noResults, value);
        });
        stayOpen(event -> {
            Node target = (Node) event.target;
            boolean inputClick = searchInput.input().element() == target;
            boolean utilitiesClick = searchInput.utilities() != null &&
                    searchInput.utilities().element().contains(target);
            return inputClick || utilitiesClick;
        });
    }

    @Override
    void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }

    // ------------------------------------------------------ add

    @Override
    public PopperSingleTypeahead add(Menu menu) {
        super.add(menu);
        searchInputControlsMenuList();
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public PopperSingleTypeahead allowNewItems(Function<String, String> prompt, Function<String, Promise<MenuItem>> createItem) {
        TypeaheadSupport.allowNewItems(this, this, prompt, createItem);
        return this;
    }

    @Override
    public PopperSingleTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public PopperSingleTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    @Override
    public PopperSingleTypeahead onNoResults(NoResults noResults) {
        this.noResults = noResults;
        return this;
    }
}
