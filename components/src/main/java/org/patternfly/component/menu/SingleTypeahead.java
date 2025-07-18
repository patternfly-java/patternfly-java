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
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.core.Aria;
import org.patternfly.popper.TriggerAction;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuToggleType.typeahead;
import static org.patternfly.component.menu.MenuType.select;
import static org.patternfly.component.textinputgroup.TextInputGroup.searchInputGroup;
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

    public static SingleTypeahead singleTypeahead() {
        return new SingleTypeahead("");
    }

    public static SingleTypeahead singleTypeahead(String placeholder) {
        return new SingleTypeahead(placeholder);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(SingleTypeahead.class.getName());
    private final TextInputGroup textInputGroup;
    private MenuItem noResultsItem;
    private BiPredicate<MenuItem, String> searchFilter;
    private Function<String, MenuItem> noResultsProvider;

    SingleTypeahead(String placeholder) {
        super(ComponentType.SingleSelect, MenuToggle.menuToggle(typeahead), TriggerAction.click);
        this.textInputGroup = searchInputGroup(placeholder == null ? "" : placeholder, tig -> {
            tig.main().inputElement().element().focus();
            menu.unselectAllItems();
        }).plain();
        this.menuToggle.addTextInputGroup(textInputGroup);
        this.searchFilter = (menuItem, value) -> menuItem.text().toLowerCase().contains(value.toLowerCase());
        this.noResultsProvider = value -> menuItem(Id.unique("no-results"), "No results found").disabled();

        textInputGroup
                .onKeyup((event, tig, value) -> {
                    search(value);
                    expand();
                })
                .onChange((event, tig, value) -> {
                    if (value.isEmpty()) {
                        clearSearch();
                    }
                });
        textInputGroup.main().inputElement()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .on(click, event -> {
                    if (!textInputGroup.main().value().isEmpty()) {
                        search(textInputGroup.main().value());
                    }
                    if (!expanded()) {
                        expand();
                    }
                });
        onToggle((e, c, expanded) ->
                textInputGroup.main().inputElement().aria(Aria.expanded, expanded));
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
