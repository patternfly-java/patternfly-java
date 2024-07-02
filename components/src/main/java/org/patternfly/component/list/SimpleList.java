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
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.handler.SelectHandler;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.div;
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
public class SimpleList extends BaseComponent<HTMLElement, SimpleList> {

    // ------------------------------------------------------ factory

    public static SimpleList simpleList() {
        return new SimpleList();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(SimpleList.class.getName());
    private static final By SIMPLE_LIST_ITEMS = By.classname(component(simpleList, item, link));

    private final List<SimpleListGroup> groups;
    private final Map<String, SimpleListItem> items;
    private SimpleListType type;
    private HTMLUListElement ulElement;
    private SelectHandler<SimpleListItem> selectHandler;

    SimpleList() {
        super(ComponentType.SimpleList, div().css(component(simpleList)).element());
        this.type = SimpleListType.undefined;
        this.groups = new ArrayList<>();
        this.items = new HashMap<>();
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

    public <T> SimpleList addItems(Iterable<T> items, Function<T, SimpleListItem> display) {
        for (T item : items) {
            SimpleListItem sli = display.apply(item);
            addItem(sli);
        }
        return this;
    }

    public SimpleList addItem(SimpleListItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public SimpleList add(SimpleListItem item) {
        if (type == SimpleListType.groups) {
            logger.warn("Simple list %o already contains groups. A mix of groups and items is not supported!", element());
            return this;
        }
        type = SimpleListType.items;
        items.put(item.id, item);
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
        this.selectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(findItem(itemId), fireEvent);
    }

    public void select(SimpleListItem item) {
        select(item, true, true);
    }

    public void select(SimpleListItem item, boolean fireEvent) {
        select(item, true, fireEvent);
    }

    public void select(SimpleListItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (selectHandler != null && fireEvent) {
                selectHandler.onSelect(new Event(""), item, selected);
            }
        }
    }

    // ------------------------------------------------------ internal

    private SimpleListItem findItem(String id) {
        SimpleListItem item = null;
        if (type == SimpleListType.groups) {
            for (Iterator<SimpleListGroup> iterator = groups.iterator(); iterator.hasNext() && item == null; ) {
                SimpleListGroup group = iterator.next();
                item = group.items.get(id);
            }
        } else if (type == SimpleListType.items) {
            item = items.get(id);
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
