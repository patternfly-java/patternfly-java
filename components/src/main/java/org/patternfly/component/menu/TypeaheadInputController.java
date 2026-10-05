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
import java.util.function.Supplier;

import org.jboss.elemento.Callback;
import org.jboss.elemento.Scheduler;
import org.patternfly.async.ReloadStrategy;

/**
 * Manages the typeahead input handling state for {@link SingleTypeahead} and {@link MultiTypeahead}. Encapsulates the
 * three-branch input logic:
 * <ul>
 *     <li>Default: load once, filter locally via {@link Menu#search}</li>
 *     <li>{@link ReloadStrategy#everyInput(int)}: debounced server re-query on each input change</li>
 *     <li>{@link ReloadStrategy#structuralChange(BiPredicate)}: reload when predicate fires, local filter between
 *         reloads</li>
 * </ul>
 */
class TypeaheadInputController {

    // ------------------------------------------------------ instance

    private String previousValue;
    private SearchFilter searchFilter;
    private NoResults noResults;
    private ReloadStrategy reloadStrategy;
    private Callback debouncedReload;

    // ------------------------------------------------------ factory / constructor

    TypeaheadInputController() {
        this.previousValue = "";
        this.searchFilter = SearchFilter.contains();
        this.noResults = NoResults.noResults();
    }

    // ------------------------------------------------------ api

    void handleKeyup(Menu menu, String value) {
        if (!isDebounceMode()) {
            menu.search(searchFilter, noResults, value);
        }
    }

    void handleInput(String value, Supplier<String> liveValue, Menu menu, Runnable expand, Runnable collapse) {
        if (value != null && !value.isEmpty()) {
            if (isDebounceMode()) {
                expand.run();
                if (debouncedReload == null) {
                    debouncedReload = Scheduler.debounce(reloadStrategy.debounceMs(), () ->
                            menu.replace().then(__ -> {
                                if (menu.items().isEmpty()) {
                                    collapse.run();
                                } else {
                                    menu.allowTabFirstItem();
                                }
                                return null;
                            }));
                }
                debouncedReload.call();
            } else if (isStructuralChangeMode()) {
                expand.run();
                if (reloadStrategy.predicate().test(previousValue, value)) {
                    menu.replace().then(__ -> {
                        menu.search(searchFilter, noResults, liveValue.get());
                        menu.allowTabFirstItem();
                        return null;
                    });
                } else {
                    menu.search(searchFilter, noResults, value);
                }
                previousValue = value;
            } else {
                expand.run();
                menu.search(searchFilter, noResults, value);
            }
        } else {
            collapse.run();
            if (isDebounceMode()) {
                menu.reset();
            }
        }
    }

    void handleLoaded(Menu menu, String currentText) {
        if (!isDebounceMode()) {
            menu.search(searchFilter, noResults, currentText);
        } else {
            menu.allowTabFirstItem();
        }
    }

    // ------------------------------------------------------ builder

    void searchFilter(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
    }

    void noResults(NoResults noResults) {
        this.noResults = noResults;
    }

    void reloadOn(ReloadStrategy reloadStrategy) {
        this.reloadStrategy = reloadStrategy;
        this.debouncedReload = null;
    }

    boolean isDebounceMode() {
        return reloadStrategy != null && reloadStrategy.debounceMs() > 0;
    }

    boolean isStructuralChangeMode() {
        return reloadStrategy != null && reloadStrategy.predicate() != null;
    }
}
