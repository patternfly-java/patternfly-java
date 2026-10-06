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
import org.patternfly.component.textinputgroup.BaseSearchInputGroup;
import org.patternfly.component.textinputgroup.SearchInputGroup;
import org.patternfly.component.typeahead.RefreshStrategy;
import org.patternfly.component.typeahead.Typeahead;
import org.patternfly.component.typeahead.TypeaheadController;

import elemental2.promise.Promise;

import static org.patternfly.component.menu.MenuTypeaheadSupport.shouldExpandOnKeyup;
import static org.patternfly.component.menu.MenuTypeaheadSupport.typeaheadDefaults;
import static org.patternfly.component.menu.MenuTypeaheadSupport.utilitiesClick;

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
public class SingleSelectTypeahead extends SingleMenuToggleMenu<SingleSelectTypeahead>
        implements Typeahead<SingleSelectTypeahead> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new {@link SingleSelectTypeahead} component with a {@link MenuToggle} of type {@link MenuToggleType#typeahead}
     * and a {@link SearchInputGroup}.
     */
    public static SingleSelectTypeahead singleSelectTypeahead(String id, String placeholder) {
        return new SingleSelectTypeahead(SearchInputGroup.searchInputGroup(id).plain().placeholder(placeholder));
    }

    /**
     * Creates a new {@link SingleSelectTypeahead} instance using the provided {@link BaseSearchInputGroup}.
     *
     * @param searchInput the {@link BaseSearchInputGroup} used to configure the typeahead component.
     * @return a new {@link SingleSelectTypeahead} instance initialized with a {@link MenuToggle} of type
     * {@link MenuToggleType#typeahead}.
     */
    public static SingleSelectTypeahead singleSelectTypeahead(BaseSearchInputGroup<?> searchInput) {
        return new SingleSelectTypeahead(searchInput);
    }

    // ------------------------------------------------------ instance

    private final TypeaheadController tc;

    SingleSelectTypeahead(BaseSearchInputGroup<?> searchInput) {
        super(ComponentType.SingleSelectTypeahead, MenuToggle.menuToggle(searchInput));
        this.tc = new TypeaheadController();
        onLoaded((e, c) -> tc.handleLoaded(menu, c.menuToggle.text()));

        typeaheadDefaults(this, tc);
        menuToggle.searchInput()
                .onKeyup((e, c, value) -> {
                    if (shouldExpandOnKeyup(this, e)) {
                        expand(false);
                    }
                    tc.handleKeyup(menu, value);
                })
                .onInput((e, c, value) -> tc.handleInput(value, c::value, menu,
                        () -> expand(false),
                        () -> collapse(false)));
        stayOpen((e, mt, m) -> utilitiesClick(e));
    }

    @Override
    void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }

    // ------------------------------------------------------ add

    @Override
    public SingleSelectTypeahead add(Menu menu) {
        super.add(menu);
        searchInputControlsMenuList();
        return this;
    }

    // ------------------------------------------------------ builder

    public SingleSelectTypeahead allowNewItems(Function<String, Promise<MenuItem>> createItem) {
        return allowNewItems(value -> "Create new item \"" + value + "\"", createItem);
    }

    public SingleSelectTypeahead allowNewItems(Function<String, String> prompt,
            Function<String, Promise<MenuItem>> createItem) {
        MenuTypeaheadSupport.allowNewItems(this, this, prompt, createItem);
        return this;
    }

    @Override
    public SingleSelectTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public SingleSelectTypeahead filter(SearchFilter searchFilter) {
        tc.searchFilter(searchFilter);
        return this;
    }

    @Override
    public SingleSelectTypeahead onNoResults(NoResults noResults) {
        tc.noResults(noResults);
        return this;
    }

    @Override
    public SingleSelectTypeahead refreshOn(RefreshStrategy strategy) {
        tc.refreshOn(strategy);
        this.loadOnExpand = false;
        return this;
    }
}
