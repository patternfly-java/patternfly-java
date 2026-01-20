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
import org.patternfly.component.label.LabelGroup;
import org.patternfly.component.textinputgroup.FilterInput;
import org.patternfly.core.Aria;
import org.patternfly.popper.TriggerAction;

import elemental2.dom.Node;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.menu.MenuType.select;
import static org.patternfly.component.textinputgroup.FilterInput.filterInput;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class MultiTypeahead extends MenuToggleMenu<MultiTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link MultiTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead} and a
     * {@link FilterInput}.
     */
    public static MultiTypeahead multiTypeahead(String id, String placeholder) {
        return new MultiTypeahead(MenuToggle.menuToggle(filterInput(id)
                .plain()
                .placeholder(placeholder)));
    }

    /**
     * Creates a new {@link MultiTypeahead} component with the given {@link MenuToggle}. The {@link MenuToggle}
     * <strong>must</strong> be of type {@link MenuToggleType#typeahead} and <strong>must</strong> contain a
     * {@link FilterInput}.
     */
    public static MultiTypeahead multiTypeahead(MenuToggle menuToggle) {
        return new MultiTypeahead(menuToggle);
    }

    // ------------------------------------------------------ instance

    private SearchFilter searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    MultiTypeahead(MenuToggle menuToggle) {
        super(ComponentType.MultiSelect, menuToggle, TriggerAction.stayOpen);
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
        stayOpen(event -> {
            boolean labelGroupClick = menuToggle.searchInput().labelGroup() != null &&
                    menuToggle.searchInput().labelGroup().element().contains((Node) event.target);
            boolean utilitiesClick = menuToggle.searchInput().utilities() != null &&
                    menuToggle.searchInput().utilities().element().contains((Node) event.target);
            return labelGroupClick || utilitiesClick;
        });
    }

    // ------------------------------------------------------ add

    @Override
    public MultiTypeahead add(Menu menu) {
        if (menu.menuType == select && menu.selectionMode == multi) {
            menu.onMultiSelect((e, m, items) -> updateLabelGroup(items));
        }
        searchInputControlsMenuList();
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiTypeahead that() {
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
     * @return the {@link MultiTypeahead} instance for method chaining.
     */
    public MultiTypeahead onSearch(SearchFilter searchFilter) {
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
     * @return the {@link MultiTypeahead} instance for method chaining.
     */
    public MultiTypeahead onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        menu.unselectAllItems();
        updateLabelGroup(emptyList());
        if (fireEvent) {
            menu.fireMultiSelection();
        }
    }

    public void selectIdentifiers(List<String> identifiers) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, true, true);
        updateLabelGroup(items);
    }

    public void selectIdentifiers(List<String> identifiers, boolean fireEvent) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, true, fireEvent);
        updateLabelGroup(items);
    }

    public void selectItems(List<MenuItem> items) {
        makeSelection(items, true, true);
        updateLabelGroup(items);
    }

    public void selectItems(List<MenuItem> items, boolean fireEvent) {
        makeSelection(items, true, fireEvent);
        updateLabelGroup(items);
    }

    public void unselectIdentifiers(List<String> identifiers) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, false, true);
        updateLabelGroup(items);
    }

    public void unselectIdentifiers(List<String> identifiers, boolean fireEvent) {
        List<MenuItem> items = itemsFromIds(identifiers);
        makeSelection(items, false, fireEvent);
        updateLabelGroup(items);
    }

    public void unselectItems(List<MenuItem> items) {
        makeSelection(items, false, true);
        updateLabelGroup(items);
    }

    public void unselectItems(List<MenuItem> items, boolean fireEvent) {
        makeSelection(items, false, fireEvent);
        updateLabelGroup(items);
    }
    // ------------------------------------------------------ internal

    private void updateLabelGroup(List<MenuItem> items) {
        LabelGroup labelGroup = menuToggle().searchInput().labelGroup();
        if (labelGroup != null && items != null) {
            labelGroup.clear();
            for (MenuItem item : items) {
                labelGroup.addItem(label(item.identifier(), item.text())
                        .outline()
                        .closable((e, c) -> menu.select(item, false, false)));
            }
        }
    }
}
