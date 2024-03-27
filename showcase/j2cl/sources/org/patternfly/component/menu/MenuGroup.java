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

import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.title;

public class MenuGroup extends MenuSubComponent<HTMLElement, MenuGroup> {

    // ------------------------------------------------------ factory

    public static MenuGroup menuGroup() {
        return new MenuGroup(null);
    }

    public static MenuGroup menuGroup(String text) {
        return new MenuGroup(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mg";

    MenuList list;

    MenuGroup(String text) {
        super(SUB_COMPONENT_NAME, section().css(component(Classes.menu, group)).element());
        if (text != null) {
            add(h(3, text).css(component(Classes.menu, group, title)));
        }
    }

    // ------------------------------------------------------ add

    public MenuGroup addList(MenuList list) {
        return add(list);
    }

    // override to assure internal wiring
    public MenuGroup add(MenuList list) {
        this.list = list;
        add(list.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuGroup that() {
        return this;
    }
}
