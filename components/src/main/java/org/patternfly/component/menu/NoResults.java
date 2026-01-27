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

import org.jboss.elemento.Id;

import static org.patternfly.component.menu.MenuItem.menuItem;

/**
 * Functional interface that is responsible for generating a menu item when no results are found in a given menu list for a
 * specific input text.
 * <p>
 * This interface can be implemented to customize the behavior or appearance of the "no results" menu item.
 */
@FunctionalInterface
public interface NoResults {

    /**
     * Generates a menu item to be displayed when no results are found in the specified menu list for the given input text.
     *
     * @param menuList The menu list where the search operation was performed.
     * @param text     The input text for which no results were found.
     * @return A menu item representing the "no results" state.
     */
    MenuItem noResults(MenuList menuList, String text);

    /**
     * Provides a default implementation of the {@link NoResults} functional interface. The returned implementation generates a
     * disabled menu item with a message indicating that no results were found for the provided text.
     *
     * @return A {@link NoResults} implementation that creates a disabled menu item with a "no results" message based on the
     * input text.
     */
    static NoResults noResults() {
        return (menuList, text) -> menuItem(Id.unique("no-results"), "No results found for \"" + text + "\"")
                .disabled();
    }
}
