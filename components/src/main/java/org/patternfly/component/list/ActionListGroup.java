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

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasItems;
import org.patternfly.core.ComponentContext;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.actionList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.icons;
import static org.patternfly.style.Classes.modifier;

public class ActionListGroup extends ActionListSubComponent<HTMLDivElement, ActionListGroup> implements
        ComponentContext<HTMLDivElement, ActionListGroup>,
        HasIdentifier<HTMLDivElement, ActionListGroup>,
        HasItems<HTMLDivElement, ActionListGroup, ActionListItem> {

    // ------------------------------------------------------ factory

    public static ActionListGroup actionListGroup() {
        return new ActionListGroup(Id.unique(ComponentType.ActionList.id, SUB_COMPONENT_NAME));
    }

    public static ActionListGroup actionListGroup(String identifier) {
        return new ActionListGroup(identifier);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "alg";
    private final String identifier;
    private final Map<String, Object> data;
    private final Map<String, ActionListItem> items;

    ActionListGroup(String identifier) {
        super(SUB_COMPONENT_NAME, div().css(component(actionList, group)).element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ builder

    public ActionListGroup icons() {
        return css(modifier(icons));
    }

    @Override
    public <T> ActionListGroup store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public ActionListGroup that() {
        return this;
    }

    // ------------------------------------------------------ add

    @Override
    public ActionListGroup add(ActionListItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }


    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    @Override
    public Iterator<ActionListItem> iterator() {
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
    public ActionListItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
