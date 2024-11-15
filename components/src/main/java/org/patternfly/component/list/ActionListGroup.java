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

import org.patternfly.component.HasItems;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.actionList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;

public class ActionListGroup extends ActionListSubComponent<HTMLDivElement, ActionListGroup> implements
        HasItems<HTMLDivElement, ActionListGroup, ActionListItem> {

    // ------------------------------------------------------ factory

    public static ActionListGroup actionListGroup() {
        return new ActionListGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "alg";
    private final Map<String, ActionListItem> items;

    ActionListGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(actionList, group)).element());
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ builder

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
