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

import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;
import static org.patternfly.layout.Classes.menu;

public class MenuHeader extends SubComponent<HTMLDivElement, MenuHeader> {

    // ------------------------------------------------------ factory

    public static MenuHeader menuHeader() {
        return new MenuHeader(null);
    }

    public static MenuHeader menuHeader(String text) {
        return new MenuHeader(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mh";

    MenuHeader(String text) {
        super(div().css(component(menu, header)).element(), ComponentType.Menu, SUB_COMPONENT_NAME);
        if (text != null) {
            textContent(text);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuHeader that() {
        return this;
    }
}
