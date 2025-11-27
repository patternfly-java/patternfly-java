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
import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.SearchInput;
import org.patternfly.core.Aria;
import org.patternfly.popper.TriggerAction;
import elemental2.dom.Node;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuItem.menuItem;
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

    private MenuItem noResultsItem;
    private BiPredicate<MenuItem, String> searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    SingleTypeahead(MenuToggle menuToggle) {
        super(ComponentType.SingleSelect, menuToggle, TriggerAction.click);
        this.searchFilter = (menuItem, value) -> menuItem.text().toLowerCase().contains(value.toLowerCase());
        this.noResultsProvider = value -> menuItem(Id.unique("no-results"),
                "No results found for \"" + value + "\"").disabled();

        menuToggle.searchInput()
                .onClear((e, si) -> {
                    clearSearch();
                    menu().unselectAllItems();
                    si.input().element().focus();
                })
                .onKeyup((event, si, value) -> {
                    search(value);
                    expand();
                })
                .onChange((event, si, value) -> {
                    if (value.isEmpty()) {
                        clearSearch();
                        menu().unselectAllItems();
                    }
                });

        menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> toggle());

        onToggle((e, c, expanded) ->
                menuToggle.searchInput().input().aria(Aria.expanded, expanded));
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

    public SingleTypeahead onSearch(BiPredicate<MenuItem, String> searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    public SingleTypeahead onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }

    @Override
    public SingleTypeahead that() {
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

    // ------------------------------------------------------ internal

    private void search(String value) {
        int visibleItems = 0;
        for (MenuItem menuItem : menu.items()) {
            boolean visible = searchFilter.test(menuItem, value);
            setVisible(menuItem, visible);
            if (visible) {
                visibleItems++;
            }
        }
        failSafeRemoveFromParent(noResultsItem);
        if (visibleItems == 0) {
            if (menu.content != null && menu.content.list != null) {
                noResultsItem = noResultsProvider.apply(value);
                // Don't use content.list.addItem(noResultsItem) here
                // The no-result item should not be part of the item map
                menu.content.list.add(noResultsItem.element());
            }
        } else {
            menu.allowTabFirstItem();
        }
    }

    private void clearSearch() {
        failSafeRemoveFromParent(noResultsItem);
        for (MenuItem menuItem : menu.items()) {
            setVisible(menuItem, true);
        }
        menu.allowTabFirstItem();
    }
}
