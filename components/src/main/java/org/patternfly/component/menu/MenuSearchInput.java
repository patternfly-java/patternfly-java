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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.input;
import static org.patternfly.style.Classes.search;

public class MenuSearchInput extends MenuSubComponent<HTMLElement, MenuSearchInput> implements Attachable {

    // ------------------------------------------------------ factory

    public static MenuSearchInput menuSearchInput() {
        return new MenuSearchInput();
    }


    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuSearch.class.getName());
    static final String SUB_COMPONENT_NAME = "msi";

    private TextInputGroup textInputGroup;
    private MenuItem noResultsItem;
    private BiPredicate<MenuItem, String> searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    MenuSearchInput() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.menu, search, input)).element());
        this.noResultsProvider = value -> menuItem(Id.unique("no-results"), "No results found").disabled();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        if (searchFilter != null) {
            if (menu.content != null && !menu.content.groups.isEmpty()) {
                logger.warn("Menu %o has a search filter and groups. Search filters are not supported for grouped menus.",
                        menu);
            }
            if (textInputGroup == null) {
                logger.warn("Menu %o has a search filter, but no text input group was added.", menu);
            } else {
                textInputGroup
                        .onKeyup((event, tig, value) -> search(menu, value))
                        .onChange((event, tig, value) -> {
                            if (value.isEmpty()) {
                                clearSearch(menu);
                            }
                        });
            }
        }
    }

    // ------------------------------------------------------ builder

    /**
     * Configures the search behavior for the search input you have added with {@link #addSearchInput(TextInputGroup)}.
     *
     * <p>
     * {@snippet class = MenuDemo region = search}
     *
     * @param searchFilter a {@link BiPredicate} that defines the search logic. The first parameter is a {@link MenuItem}
     *                     representing a menu item, and the second parameter is a {@link String} representing the search query.
     *                     The predicate should return {@code true} for items matching the search.
     * @return the {@link MenuSearchInput} instance for method chaining.
     */
    public MenuSearchInput onSearch(BiPredicate<MenuItem, String> searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    public MenuSearchInput onNoResults(Function<String, MenuItem> noResults) {
        this.noResultsProvider = noResults;
        return this;
    }

    @Override
    public MenuSearchInput that() {
        return this;
    }

    // ------------------------------------------------------ add

    public MenuSearchInput addSearchInput(TextInputGroup textInputGroup) {
        this.textInputGroup = textInputGroup;
        return add(textInputGroup);
    }

    // ------------------------------------------------------ internal

    private void search(Menu menu, String value) {
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

    private void clearSearch(Menu menu) {
        failSafeRemoveFromParent(noResultsItem);
        for (MenuItem menuItem : menu.items()) {
            setVisible(menuItem, true);
        }
        menu.allowTabFirstItem();
    }
}
