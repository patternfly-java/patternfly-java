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
package org.patternfly.component.jumplinks;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.li;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.jumpLinks;
import static org.patternfly.style.Classes.list;

public class JumpLinksList extends JumpLinksSubComponent<HTMLLIElement, JumpLinksList> {

    // ------------------------------------------------------ factory

    public static JumpLinksList jumpLinksList() {
        return new JumpLinksList();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "jll";
    final Map<String, JumpLinksItem> items;

    JumpLinksList() {
        super(SUB_COMPONENT_NAME, li().css(component(jumpLinks, list)).attr(role, "list").element());
        this.items = new HashMap<>();
    }

    // ------------------------------------------------------ add

    public <T> JumpLinksList addItems(Iterable<T> items, Function<T, JumpLinksItem> display) {
        for (T item : items) {
            JumpLinksItem bi = display.apply(item);
            addItem(bi);
        }
        return this;
    }

    public JumpLinksList addItem(JumpLinksItem item) {
        return add(item);
    }

    // override to assure internal wiring
    public JumpLinksList add(JumpLinksItem item) {
        items.put(item.id, item);
        add(item.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public JumpLinksList that() {
        return this;
    }
}
