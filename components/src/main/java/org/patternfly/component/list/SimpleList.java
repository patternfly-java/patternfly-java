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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.By;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.handler.SelectHandler;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.simpleList;

/**
 * A simple list provides a list of selectable items that can be shown within a page. Each item is described by a text label.
 * The list may be divided into logical sections by introducing group headers.
 *
 * @see <a href= "https://www.patternfly.org/components/simple-list">https://www.patternfly.org/components/simple-list</a>
 */
public class SimpleList extends BaseComponent<HTMLElement, SimpleList> implements
        HasItems<HTMLElement, SimpleList, SimpleListItem> {

    // ------------------------------------------------------ factory

    public static SimpleList simpleList() {
        return new SimpleList();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(SimpleList.class.getName());
    private static final By SIMPLE_LIST_ITEMS = By.classname(component(simpleList, item, link));

    private final List<SimpleListGroup> groups;
    private final Map<String, SimpleListItem> items;
    private final List<SelectHandler<SimpleListItem>> selectHandler;
    private SimpleListType type;
    private HTMLUListElement ulElement;

    SimpleList() {
        super(ComponentType.SimpleList, div().css(component(simpleList)).element());
        this.type = SimpleListType.undefined;
        this.items = new LinkedHashMap<>();
        this.selectHandler = new ArrayList<>();
        this.groups = new ArrayList<>();
        storeComponent();
    }

    // ------------------------------------------------------ add

    public SimpleList addGroup(SimpleListGroup group) {
        return add(group);
    }

    // override to ensure internal wiring
    public SimpleList add(SimpleListGroup group) {
        if (type == SimpleListType.items) {
            logger.warn("Simple list %o already contains items. A mix of groups and items is not supported!", element());
            return this;
        }
        type = SimpleListType.groups;
        groups.add(group);
        add(group.element());
        return this;
    }

    @Override
    public SimpleList add(SimpleListItem item) {
        if (type == SimpleListType.groups) {
            logger.warn("Simple list %o already contains groups. A mix of groups and items is not supported!", element());
            return this;
        }
        type = SimpleListType.items;
        items.put(item.identifier(), item);
        failSafeUlElement().appendChild(item.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public SimpleList that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public SimpleList ariaLabel(String label) {
        if (type == SimpleListType.items && ulElement != null) {
            ulElement.setAttribute(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public SimpleList onSelect(SelectHandler<SimpleListItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String identifier) {
        select(findItem(identifier), true, true);
    }

    public void select(String identifier, boolean selected) {
        select(findItem(identifier), selected, true);
    }

    public void select(String identifier, boolean selected, boolean fireEvent) {
        select(findItem(identifier), selected, fireEvent);
    }

    public void select(SimpleListItem item) {
        select(item, true, true);
    }

    public void select(SimpleListItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(SimpleListItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (fireEvent) {
                selectHandler.forEach(selectHandler -> selectHandler.onSelect(new Event(""), item, selected));
            }
        }
    }

    @Override
    public Iterator<SimpleListItem> iterator() {
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
    public SimpleListItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(ulElement);
        items.clear();
    }

    // ------------------------------------------------------ internal

    private SimpleListItem findItem(String identifier) {
        SimpleListItem item = null;
        if (type == SimpleListType.groups) {
            for (Iterator<SimpleListGroup> iterator = groups.iterator(); iterator.hasNext() && item == null; ) {
                SimpleListGroup group = iterator.next();
                item = group.items.get(identifier);
            }
        } else if (type == SimpleListType.items) {
            item = items.get(identifier);
        }
        return item;
    }

    private void unselectAllItems() {
        for (HTMLElement element : findAll(SIMPLE_LIST_ITEMS)) {
            element.classList.remove(modifier(current));
        }
    }

    private HTMLUListElement failSafeUlElement() {
        if (ulElement == null) {
            add(ulElement = ul().css(component(simpleList, list))
                    .attr(role, Roles.list)
                    .element());
        }
        return ulElement;
    }
}
