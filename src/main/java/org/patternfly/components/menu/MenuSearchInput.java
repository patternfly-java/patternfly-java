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
package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.search;

public class MenuSearchInput extends SubComponent<HTMLElement, MenuSearchInput> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    public static MenuSearchInput menuSearchInput() {
        return new MenuSearchInput();
    }

    // ------------------------------------------------------ instance

    MenuSearchInput() {
        super(div().css(component(menu, search, input))
                .element());
    }

    @Override
    public MenuSearchInput that() {
        return null;
    }

    @Override
    public void passMenu(Menu menu) {

    }
}
