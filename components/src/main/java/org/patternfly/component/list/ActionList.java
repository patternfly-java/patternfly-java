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
package org.patternfly.component.list;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.actionList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icons;
import static org.patternfly.style.Classes.modifier;

/**
 * An action list is a group of actions, controls, or buttons with set spacing.
 *
 * @see <a href="https://www.patternfly.org/components/action-list">https://www.patternfly.org/components/action-list</a>
 */
public class ActionList extends BaseComponent<HTMLElement, ActionList> implements
        HasItems<HTMLElement, ActionList, ActionListGroup> {

    // ------------------------------------------------------ factory

    public static ActionList actionList() {
        return new ActionList();
    }

    // ------------------------------------------------------ instance

    private final Map<String, ActionListGroup> items;
    private final AurHandler<ActionList, ActionListGroup> aur;

    ActionList() {
        super(ComponentType.ActionList, div().css(component(actionList)).element());
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);
    }

    // ------------------------------------------------------ add

    @Override
    public ActionList add(ActionListGroup item) {
        items.put(item.identifier(), item);
        add(item.element());
        return aur.added(item);
    }

    // ------------------------------------------------------ builder

    public ActionList icons() {
        return css(modifier(icons));
    }

    @Override
    public ActionList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public ActionList onAdd(AddItemHandler<ActionList, ActionListGroup> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public ActionList onUpdate(UpdateItemHandler<ActionList, ActionListGroup> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public ActionList onRemove(RemoveItemHandler<ActionList, ActionListGroup> onRemove) {
        return aur.onRemove(onRemove);
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<ActionListGroup> iterator() {
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
    public ActionListGroup item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void updateItem(ActionListGroup item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        ActionListGroup item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<ActionListGroup> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            ActionListGroup item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }
}
