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

import org.patternfly.core.Aria;
import elemental2.dom.Event;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

class TypeaheadDefaults {

    static void typeaheadDefaults(MenuToggleMenu<?> mtm) {
        mtm.menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> {
                    boolean expanded = mtm.expanded();
                    console.log("clicked on search input. going to %s", expanded ? "collapse" : "expand");
                    mtm.toggle();
                });

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
}
