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

import java.util.List;
import java.util.function.Function;

import org.patternfly.component.ComponentType;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.component.textinputgroup.BaseFilterInput;
import org.patternfly.component.textinputgroup.FilterInput;
import org.patternfly.popper.TriggerAction;

import elemental2.dom.Node;

import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.menu.TypeaheadDefaults.typeaheadDefaults;
import static org.patternfly.component.textinputgroup.FilterInput.filterInput;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class MultiTypeahead extends MultiMenuToggleMenu<MultiTypeahead> implements Typeahead<MultiTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link MultiTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and a
     * {@link FilterInput}.
     */
    public static MultiTypeahead multiTypeahead(String id, String placeholder) {
        return new MultiTypeahead(filterInput(id).plain().placeholder(placeholder));
    }

    /**
     * Creates a new {@link MultiTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and the
     * specified {@link BaseFilterInput}.
     *
     * @param filterInput the {@link BaseFilterInput} instance used to configure the typeahead component with filtering and
     *                    search capabilities
     * @return a new {@link MultiTypeahead} instance configured with the given filter input
     */
    public static MultiTypeahead multiTypeahead(BaseFilterInput<?> filterInput) {
        return new MultiTypeahead(filterInput);
    }

    // ------------------------------------------------------ instance

    private final BaseFilterInput<?> filterInput;
    private SearchFilter searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    MultiTypeahead(BaseFilterInput<?> filterInput) {
        super(ComponentType.MultiSelect, MenuToggle.menuToggle(filterInput), TriggerAction.stayOpen);
        this.filterInput = filterInput;
        this.searchFilter = SearchFilter.contains();
        this.noResultsProvider = SearchFilter.noResults();

        typeaheadDefaults(this, searchFilter, noResultsProvider);
        filterInput.noAddOnEnter()
                .onEnter((e, fi) -> {
                    String identifier = filterInput.textToIdentifier().apply(fi.value());
                    MenuItem menuItem = menu.findItem(identifier);
                    if (menuItem != null) {
                        if (!filterInput.labelGroup().contains(identifier)) {
                            Label label = filterInput.textToLabel().apply(menuItem.text());
                            filterInput.labelGroup().addItem(label);
                            menu.select(menuItem, true, false);
                        }
                    }
                })
                .onAdd((fi, filter) -> {
                    // TODO Add filter to menu if create option is true and not already present
                });
        stayOpen(event -> {
            boolean labelGroupClick = filterInput.labelGroup() != null &&
                    filterInput.labelGroup().element().contains((Node) event.target);
            boolean utilitiesClick = menuToggle.searchInput().utilities() != null &&
                    menuToggle.searchInput().utilities().element().contains((Node) event.target);
            return labelGroupClick || utilitiesClick;
        });
    }

    @Override
    void updateMenuToggle(List<MenuItem> items) {
        LabelGroup labelGroup = filterInput.labelGroup();
        if (labelGroup != null && items != null) {
            labelGroup.clear();
            for (MenuItem item : items) {
                labelGroup.addItem(label(item.identifier(), item.text())
                        .outline()
                        .closable((e, c) -> menu.select(item, false, false)));
            }
        }
    }

    // ------------------------------------------------------ add

    @Override
    public MultiTypeahead add(Menu menu) {
        super.add(menu);
        searchInputControlsMenuList();
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * {@inheritDoc}
     * <p>
     * By default, the search filter will match items that contain the search query in their text.
     */
    @Override
    public MultiTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    /**
     * {@inheritDoc}
     * <p>
     * By default, a "No results found" message is displayed.
     */
    @Override
    public MultiTypeahead onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }
}
