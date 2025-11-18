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

import org.jboss.elemento.ElementTextDelegate;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.title;

public class MenuGroup extends MenuSubComponent<HTMLElement, MenuGroup> implements
        ElementTextDelegate<HTMLElement, MenuGroup> {

    // ------------------------------------------------------ factory

    public static MenuGroup menuGroup() {
        return new MenuGroup();
    }

    public static MenuGroup menuGroup(String text) {
        return new MenuGroup().text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "mg";

    MenuList list;
    private final HTMLElement textElement;

    MenuGroup() {
        super(SUB_COMPONENT_NAME, section().css(component(Classes.menu, group)).element());
        this.textElement = h(3).css(component(Classes.menu, group, title)).element();
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ add

    public MenuGroup addList(MenuList list) {
        return add(list);
    }

    // override to ensure internal wiring
    public MenuGroup add(MenuList list) {
        this.list = list;
        add(list.element());
        return this;
    }

    public MenuGroup addSearch(MenuSearch search) {
        return add(search);
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuGroup text(String text) {
        if (!isAttached(textElement)) {
            add(textElement);
        }
        return ElementTextDelegate.super.text(text);
    }

    @Override
    public MenuGroup that() {
        return this;
    }
}
