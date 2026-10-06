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
package org.patternfly.component.typeahead;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.jboss.elemento.Callback;
import org.jboss.elemento.Scheduler;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.NoResults;
import org.patternfly.component.menu.SearchFilter;

/**
 * Manages typeahead input handling state. Encapsulates the refresh strategy, search filter, no-results handler, and the input
 * logic driven by {@link RefreshStrategy} and {@link Decision}.
 * <p>
 * On each input change, the controller evaluates the strategy to get a {@link Decision}:
 * <ul>
 *     <li>{@link Decision.Action#REFRESH} — re-query the server immediately via {@link Menu#refresh()}</li>
 *     <li>{@link Decision.Action#DEBOUNCE} — re-query the server after a debounce timeout</li>
 *     <li>{@link Decision.Action#FILTER} — filter existing items locally via {@link Menu#search}</li>
 *     <li>{@link Decision.Action#KEEP} — do nothing, keep the current menu state as-is</li>
 * </ul>
 * <p>
 * The controller delegates component-specific behavior through two callbacks:
 * <ul>
 *     <li>{@code afterRefresh} — called after {@link Menu#refresh()} completes (e.g., update hints, fire loaded handlers)</li>
 *     <li>{@code onSearch} — called instead of {@link Menu#search} to allow additional behavior like hint updates</li>
 * </ul>
 */
public class TypeaheadController {

    // ------------------------------------------------------ instance

    private String previousValue;
    private SearchFilter searchFilter;
    private NoResults noResults;
    private RefreshStrategy refreshStrategy;
    private Decision.Action lastAction;
    private int currentDebounceMs;
    private Callback debouncedCallback;
    private Runnable afterRefresh;
    private Consumer<String> onSearch;

    // ------------------------------------------------------ constructor

    public TypeaheadController() {
        this.previousValue = "";
        this.searchFilter = SearchFilter.contains();
        this.noResults = NoResults.noResults();
        this.lastAction = Decision.Action.FILTER;
    }

    // ------------------------------------------------------ api

    public void handleKeyup(Menu menu, String value) {
        if (lastAction != Decision.Action.DEBOUNCE) {
            doSearch(menu, value);
        }
    }

    public void handleInput(String value, Supplier<String> liveValue, Menu menu, Runnable expand, Runnable collapse) {
        if (value != null && !value.isEmpty()) {
            Decision decision = evaluateStrategy(value);
            lastAction = decision.action();
            switch (lastAction) {
                case KEEP:
                    previousValue = value;
                    return;
                case DEBOUNCE:
                    expand.run();
                    if (debouncedCallback == null || currentDebounceMs != decision.debounceMs()) {
                        currentDebounceMs = decision.debounceMs();
                        debouncedCallback = Scheduler.debounce(currentDebounceMs, () ->
                                menu.refresh().then(__ -> {
                                    fireAfterRefresh();
                                    return null;
                                }));
                    }
                    debouncedCallback.call();
                    break;
                case REFRESH:
                    expand.run();
                    debouncedCallback = null;
                    menu.refresh().then(__ -> {
                        doSearch(menu, liveValue.get());
                        fireAfterRefresh();
                        return null;
                    });
                    break;
                case FILTER:
                    expand.run();
                    debouncedCallback = null;
                    doSearch(menu, value);
                    break;
            }
            previousValue = value;
        } else {
            collapse.run();
            if (lastAction == Decision.Action.DEBOUNCE) {
                menu.reset();
            }
        }
    }

    public void handleLoaded(Menu menu, String currentText) {
        if (lastAction != Decision.Action.DEBOUNCE) {
            doSearch(menu, currentText);
        } else {
            menu.allowTabFirstItem();
        }
    }

    // ------------------------------------------------------ builder

    public void searchFilter(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
    }

    public void noResults(NoResults noResults) {
        this.noResults = noResults;
    }

    public void refreshOn(RefreshStrategy refreshStrategy) {
        this.refreshStrategy = refreshStrategy;
        this.debouncedCallback = null;
        this.currentDebounceMs = 0;
    }

    /**
     * Sets the callback invoked after {@link Menu#refresh()} completes. Use this to perform component-specific post-refresh
     * actions such as updating hints or firing loaded handlers.
     */
    public void afterRefresh(Runnable afterRefresh) {
        this.afterRefresh = afterRefresh;
    }

    /**
     * Sets a custom search function called instead of the default {@link Menu#search}. The consumer receives the current input
     * value. Use this to add component-specific behavior like hint updates after searching.
     */
    public void onSearch(Consumer<String> onSearch) {
        this.onSearch = onSearch;
    }

    // ------------------------------------------------------ state

    public SearchFilter searchFilter() {
        return searchFilter;
    }

    public NoResults noResults() {
        return noResults;
    }

    public RefreshStrategy refreshStrategy() {
        return refreshStrategy;
    }

    public String previousValue() {
        return previousValue;
    }

    public void previousValue(String previousValue) {
        this.previousValue = previousValue;
    }

    /** Returns the action from the most recent strategy evaluation. Defaults to {@link Decision.Action#FILTER}. */
    public Decision.Action lastAction() {
        return lastAction;
    }

    // ------------------------------------------------------ internal

    private Decision evaluateStrategy(String currentValue) {
        if (refreshStrategy == null) {
            return Decision.filter();
        }
        return refreshStrategy.evaluate(previousValue, currentValue);
    }

    private void doSearch(Menu menu, String value) {
        if (onSearch != null) {
            onSearch.accept(value);
        } else {
            List<MenuItem> matching = menu.search(searchFilter, noResults, value);
            if (!matching.isEmpty()) {
                menu.allowTabFirstItem();
            }
        }
    }

    private void fireAfterRefresh() {
        if (afterRefresh != null) {
            afterRefresh.run();
        }
    }
}
