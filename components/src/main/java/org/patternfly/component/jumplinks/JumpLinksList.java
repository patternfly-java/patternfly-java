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
import java.util.Iterator;
import java.util.Map;

import org.patternfly.component.HasItems;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.jumpLinks;

public class JumpLinksList extends JumpLinksSubComponent<HTMLUListElement, JumpLinksList> implements
        HasItems<HTMLUListElement, JumpLinksList, JumpLinksItem> {

    // ------------------------------------------------------ factory

    public static JumpLinksList jumpLinksList() {
        return new JumpLinksList();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "jll";
    final Map<String, JumpLinksItem> items;

    JumpLinksList() {
        super(SUB_COMPONENT_NAME, ul().css(component(jumpLinks, Classes.list))
                .attr(role, Roles.list)
                .element());
        this.items = new HashMap<>();
    }

    // ------------------------------------------------------ add

    @Override
    public JumpLinksList add(JumpLinksItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public JumpLinksList that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<JumpLinksItem> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public JumpLinksItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
