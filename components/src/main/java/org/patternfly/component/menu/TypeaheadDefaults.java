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

import org.patternfly.core.Aria;

import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

class TypeaheadDefaults {

    static void typeaheadDefaults(MenuToggleMenu<?> mtm,
            SearchFilter searchFilter,
            Function<String, MenuItem> noResultsProvider) {
        mtm.menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> mtm.toggle());

        mtm.menuToggle.searchInput()
                .onClear((e, si) -> {
                    mtm.menu.clearSearch();
                    mtm.menu.unselectAllItems();
                    si.input().element().focus();
                })
                .onKeyup((event, si, value) -> {
                    // TODO Handle keys like up/down arrow, space, return, escape, ...
                    mtm.menu.search(searchFilter, noResultsProvider, value);
                    // expand();
                })
                .onChange((event, si, value) -> {
                    if (value.isEmpty()) {
                        mtm.menu.clearSearch();
                    }
                });

        mtm.onLoaded((e, c) -> {
            if (!mtm.menuToggle.searchInput().value().isEmpty()) {
                mtm.menu.search(searchFilter, noResultsProvider, mtm.menuToggle.searchInput().value());
            }
        });
    }
}
