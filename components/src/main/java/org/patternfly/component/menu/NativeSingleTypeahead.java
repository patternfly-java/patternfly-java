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
import java.util.function.Consumer;
import java.util.function.Function;

import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.component.textinputgroup.BaseSearchInput;
import org.patternfly.component.textinputgroup.SearchInput;
import elemental2.promise.Promise;

import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.component.menu.TypeaheadSupport.shouldExpandOnKeyup;
import static org.patternfly.component.menu.TypeaheadSupport.typeaheadDefaults;
import static org.patternfly.component.menu.TypeaheadSupport.utilitiesClick;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The typeahead uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues. CSS {@code position-try-fallbacks} handles menu
 * flipping when there is not enough space.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class NativeSingleTypeahead extends NativeMenuToggleMenu<NativeSingleTypeahead>
        implements NativeTypeahead<NativeSingleTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link NativeSingleTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead}
     * and a {@link SearchInput}.
     */
    public static NativeSingleTypeahead nativeSingleTypeahead(String id, String placeholder) {
        return new NativeSingleTypeahead(searchInput(id).plain().placeholder(placeholder));
    }

    /**
     * Creates a new {@link NativeSingleTypeahead} instance using the provided {@link BaseSearchInput}.
     *
     * @param searchInput the {@link BaseSearchInput} used to configure the typeahead component.
     * @return a new {@link NativeSingleTypeahead} instance initialized with a {@link MenuToggle} of type
     * {@link MenuToggleType#typeahead}.
     */
    public static NativeSingleTypeahead nativeSingleTypeahead(BaseSearchInput<?> searchInput) {
        return new NativeSingleTypeahead(searchInput);
    }

    // ------------------------------------------------------ instance

    private boolean defaultSelectHandler;
    private SearchFilter searchFilter;
    private NoResults noResults;
    private MenuContent menuContent;
    private MenuList menuList;

    NativeSingleTypeahead(BaseSearchInput<?> searchInput) {
        super(ComponentType.NativeSingleTypeahead, MenuToggle.menuToggle(searchInput));
        this.defaultSelectHandler = true;
        this.searchFilter = SearchFilter.contains();
        this.noResults = NoResults.noResults();

        typeaheadDefaults(this);
        menuToggle.searchInput()
                .onKeyup((e, c, value) -> {
                    if (shouldExpandOnKeyup(this, e)) {
                        expand(false);
                    }
                    menu.search(searchFilter, noResults, value);
                })
                .onInput((e, c, value) -> {
                    expand(false);
                    menu.search(searchFilter, noResults, value);
                });
        stayOpen((e, mt, m) -> utilitiesClick(e));
    }

    // ------------------------------------------------------ add

    @Override
    public NativeSingleTypeahead add(Menu menu) {
        super.add(menu);
        if (menu.menuType == MenuType.select && menu.selectionMode == SelectionMode.single && defaultSelectHandler) {
            menu.onSingleSelect((e, menuItem, s) -> updateMenuToggle(menuItem));
        }
        searchInputControlsMenuList();
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Applies the provided consumer to the {@link MenuList} associated with this {@link NativeSingleTypeahead}. If the menu,
     * menu content, or menu list is not yet initialized, they will be created as part of this method.
     * <p>
     * This method simplifies the process of adding menu items to the component. It is a shortcut for creating and adding a
     * {@link SingleSelectMenu}, {@link MenuContent}, and {@link MenuList} in a single step. Don't use this method if you need
     * to us another menu type, want to customize the menu, content or list or if you want to use {@link MenuGroup}s.
     *
     * @param consumer a consumer that accepts a {@link MenuList} for customization or modification
     * @return the current {@link NativeSingleTypeahead} instance for method chaining
     */
    public NativeSingleTypeahead applyToMenuList(Consumer<MenuList> consumer) {
        if (menu == null) {
            add(singleSelectMenu());
        }
        if (menuContent == null) {
            menuContent = menuContent();
            menu.addContent(menuContent);
        }
        if (menuList == null) {
            menuList = menuList();
            menuContent.addList(menuList);
        }

        consumer.accept(menuList);
        return this;
    }

    public NativeSingleTypeahead noDefaultSelectHandler() {
        this.defaultSelectHandler = false;
        return this;
    }

    @Override
    public NativeSingleTypeahead allowNewItems(Function<String, String> prompt,
            Function<String, Promise<MenuItem>> createItem) {
        TypeaheadSupport.allowNewItems(this, this, prompt, createItem);
        return this;
    }

    @Override
    public NativeSingleTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public NativeSingleTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    @Override
    public NativeSingleTypeahead onNoResults(NoResults noResults) {
        this.noResults = noResults;
        return this;
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        List<MenuItem> selectedItems = menu.selectedItems();
        menu.clearSearch();
        menu.unselectAllItems();
        menuToggle.text("");
        if (fireEvent && !selectedItems.isEmpty()) {
            menu.fireSingleSelection(selectedItems.get(0), false);
        }
    }

    public void select(String identifier) {
        select(menu().findItem(identifier), true);
    }

    public void select(String identifier, boolean fireEvent) {
        select(menu().findItem(identifier), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            if (!fireEvent && defaultSelectHandler) {
                updateMenuToggle(item);
            }
        }
    }

    // ------------------------------------------------------ internal

    private void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }
}