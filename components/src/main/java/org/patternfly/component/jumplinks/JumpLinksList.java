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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.patternfly.component.HasItems;
import org.patternfly.component.label.Label;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
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
    private final List<BiConsumer<JumpLinksList, JumpLinksItem>> onAdd;
    private final List<BiConsumer<JumpLinksList, JumpLinksItem>> onRemove;

    JumpLinksList() {
        super(SUB_COMPONENT_NAME, ul().css(component(jumpLinks, Classes.list))
                .attr(role, Roles.list)
                .element());
        this.items = new HashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    @Override
    public JumpLinksList add(JumpLinksItem item) {
        items.put(item.identifier(), item);
        JumpLinksList result = add(item.element());
        onAdd.forEach(bc -> bc.accept(this, item));
        return result;
    }

    // ------------------------------------------------------ builder

    @Override
    public JumpLinksList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public JumpLinksList onAdd(BiConsumer<JumpLinksList, JumpLinksItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public JumpLinksList onRemove(BiConsumer<JumpLinksList, JumpLinksItem> onRemove) {
        this.onRemove.add(onRemove);
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
    public void removeItem(String identifier) {
        JumpLinksItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<JumpLinksItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            JumpLinksItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
