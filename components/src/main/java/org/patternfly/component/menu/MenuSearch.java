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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.menu;
import static org.patternfly.style.Classes.search;

public class MenuSearch extends MenuSubComponent<HTMLDivElement, MenuSearch> {

    // ------------------------------------------------------ factory

    public static MenuSearch menuSearch() {
        return new MenuSearch();
    }


    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ms";
    private MenuSearchInput searchInput;

    MenuSearch() {
        super(SUB_COMPONENT_NAME, div().css(component(menu, search)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuSearch that() {
        return this;
    }

    // ------------------------------------------------------ add

    public MenuSearch addSearchInput(MenuSearchInput searchInput) {
        this.searchInput = searchInput;
        return add(searchInput);
    }

    // ------------------------------------------------------ api

    public MenuSearchInput searchInput() {
        return searchInput;
    }
}
