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

import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.footer;
import static org.patternfly.layout.Classes.menu;

public class MenuFooter extends SubComponent<HTMLDivElement, MenuFooter> {

    // ------------------------------------------------------ factory methods

    public static MenuFooter menuFooter() {
        return new MenuFooter(null);
    }

    public static MenuFooter menuFooter(String text) {
        return new MenuFooter(text);
    }

    // ------------------------------------------------------ instance

    MenuFooter(String text) {
        super(div().css(component(menu, footer)).element());
        if (text != null) {
            textContent(text);
        }
    }

    @Override
    public MenuFooter that() {
        return this;
    }
}
