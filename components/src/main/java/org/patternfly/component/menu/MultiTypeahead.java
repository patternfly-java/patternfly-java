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

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.ComponentType;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.component.textinputgroup.BaseFilterInput;
import org.patternfly.component.textinputgroup.FilterInput;

import elemental2.dom.Element;
import elemental2.promise.Promise;

import static org.patternfly.component.menu.TypeaheadSupport.shouldExpandOnKeyup;
import static org.patternfly.component.menu.TypeaheadSupport.typeaheadDefaults;
import static org.patternfly.component.menu.TypeaheadSupport.utilitiesClick;
import static org.patternfly.component.textinputgroup.FilterInput.filterInput;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.labelGroup;
import static org.patternfly.style.Classes.list;

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
     * @param filterInput the {@link BaseFilterInput} instance used to configure the typeahead component
     * @return a new {@link MultiTypeahead} instance configured with the given filter input
     */
    public static MultiTypeahead multiTypeahead(BaseFilterInput<?> filterInput) {
        return new MultiTypeahead(filterInput);
    }

    // ------------------------------------------------------ instance

    private final BaseFilterInput<?> filterInput;
    private SearchFilter searchFilter;
    private NoResults noResults;

    MultiTypeahead(BaseFilterInput<?> filterInput) {
        super(ComponentType.MultiTypeahead, MenuToggle.menuToggle(filterInput));
        this.filterInput = filterInput;
        this.searchFilter = SearchFilter.contains();
        this.noResults = NoResults.noResults();
        onLoaded((e, c) -> menu.search(searchFilter, noResults, c.menuToggle.text()));

        typeaheadDefaults(this);
        filterInput
                .onKeyup((e, c, value) -> {
                    if (shouldExpandOnKeyup(this, e)) {
                        expand(false);
                    }
                    menu.search(searchFilter, noResults, value);
                })
                .onInput((e, c, value) -> {
                    expand(false);
                    menu.search(searchFilter, noResults, value);
                })
                .noAddOnEnter()
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
                });
        stayOpen((event, mt, m) -> {
            boolean labelGroupListItemClick = Elements.closest((Element) event.target,
                    By.classname(component(labelGroup, list, item))) != null;
            return menuItemClick(event) || utilitiesClick(event) || labelGroupListItemClick;
        });
    }

    @Override
    void updateMenuToggle(List<MenuItem> items) {
        LabelGroup labelGroup = filterInput.labelGroup();
        if (labelGroup != null && items != null) {
            labelGroup.clear();
            for (MenuItem item : items) {
                Label label = filterInput.textToLabel().apply(item.text())
                        .onClose((e, c) -> menu.select(item, false, false));
                labelGroup.addItem(label);
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
    public MultiTypeahead allowNewItems(Function<String, String> prompt,
            Function<String, Promise<MenuItem>> createItem) {
        TypeaheadSupport.allowNewItems(this, this, prompt, createItem);
        return this;
    }

    @Override
    public MultiTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public MultiTypeahead onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return this;
    }

    @Override
    public MultiTypeahead onNoResults(NoResults noResults) {
        this.noResults = noResults;
        return this;
    }
}
