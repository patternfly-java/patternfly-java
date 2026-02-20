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

import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
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
    private final AurHandler<JumpLinksList, JumpLinksItem> aur;

    JumpLinksList() {
        super(SUB_COMPONENT_NAME, ul().css(component(jumpLinks, Classes.list))
                .attr(role, Roles.list)
                .element());
        this.items = new HashMap<>();
        this.aur = new AurHandler<>(this);
    }

    // ------------------------------------------------------ add

    @Override
    public JumpLinksList add(JumpLinksItem item) {
        items.put(item.identifier(), item);
        add(item.element());
        return aur.added(item);
    }

    // ------------------------------------------------------ builder

    @Override
    public JumpLinksList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public JumpLinksList onAdd(AddItemHandler<JumpLinksList, JumpLinksItem> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public JumpLinksList onUpdate(UpdateItemHandler<JumpLinksList, JumpLinksItem> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public JumpLinksList onRemove(RemoveItemHandler<JumpLinksList, JumpLinksItem> onRemove) {
        return aur.onRemove(onRemove);
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
    public void updateItem(JumpLinksItem item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        JumpLinksItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<JumpLinksItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            JumpLinksItem item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }
}
