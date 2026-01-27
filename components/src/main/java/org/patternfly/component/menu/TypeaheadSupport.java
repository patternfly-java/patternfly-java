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

import elemental2.dom.Event;
import elemental2.promise.Promise;

import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.component.menu.MenuItem.createNewMenuItem;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

class TypeaheadSupport {

    static void typeaheadDefaults(MenuToggleMenu<?> mtm) {
        mtm.menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> mtm.toggle());

        mtm.onToggle((e, c, expanded) -> {
            if (expanded) {
                // show all menu items when expanded
                mtm.menu.clearSearch();
            }
        });
        mtm.menuToggle.searchInput()
                .onClear((e, si) -> {
                    mtm.menu.clearSearch();
                    mtm.menu.unselectAllItems();
                    si.input().element().focus();
                })
                .onChange((e, c, value) -> {
                    if (value.isEmpty()) {
                        mtm.menu.clearSearch();
                    }
                });
    }

    static boolean shouldExpandOnKeyup(MenuToggleMenu<?> mtm, Event event) {
        if (Enter.match(event) || Escape.match(event) || Tab.match(event)) {
            return false;
        }
        return !mtm.expanded();
    }

    static void allowNewItems(MenuToggleMenu<?> mtm, Typeahead<?> typeahead,
            Function<String, String> prompt, Function<String, Promise<MenuItem>> createItem) {
        typeahead.onNoResults((menuList, text) -> createNewMenuItem(prompt.apply(text))
                .onClick((e, c) -> createItem.apply(text)
                        .then(menuItem -> {
                            mtm.menu.clearSearch();
                            menuList.add(menuItem);
                            mtm.menu.select(menuItem, true, true);
                            return null;
                        }).finally_(() -> {
                            mtm.menuToggle.text(text);
                            mtm.menuToggle.searchInput().input().element().focus();
                            mtm.collapse(false);
                        })));
    }
}
