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
import java.util.function.Function;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.HasItems;
import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.simpleList;
import static org.patternfly.style.Classes.title;

public class SimpleListGroup extends SimpleListSubComponent<HTMLElement, SimpleListGroup> implements
        HasItems<HTMLElement, SimpleListGroup, SimpleListItem>,
        WithText<HTMLElement, SimpleListGroup>,
        ElementContainerDelegate<HTMLElement, SimpleListGroup> {

    // ------------------------------------------------------ factory

    public static SimpleListGroup simpleListGroup(String text) {
        return new SimpleListGroup().text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "slg";
    final Map<String, SimpleListItem> items;
    private final HTMLElement headerElement;
    private final HTMLUListElement ulElement;

    SimpleListGroup() {
        super(SUB_COMPONENT_NAME, section().css(component(simpleList, Classes.section)).element());
        this.items = new LinkedHashMap<>();
        String headerId = Id.unique(SUB_COMPONENT_NAME);
        element().appendChild(headerElement = h(2).css(component(simpleList, title))
                .id(headerId)
                .aria(Aria.hidden, true)
                .element());
        element().appendChild(ulElement = ul().css(component(simpleList, list))
                .attr(role, Roles.list)
                .aria(labelledBy, headerId)
                .element());
    }

    @Override
    public Element containerDelegate() {
        return headerElement;
    }

    // ------------------------------------------------------ add

    public <T> SimpleListGroup addItems(Iterable<T> items, Function<T, SimpleListItem> display) {
        for (T item : items) {
            SimpleListItem sli = display.apply(item);
            addItem(sli);
        }
        return this;
    }

    public SimpleListGroup addItem(SimpleListItem item) {
        return add(item);
    }

    @Override
    public SimpleListGroup add(SimpleListItem item) {
        items.put(item.identifier(), item);
        ulElement.appendChild(item.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public SimpleListGroup text(String text) {
        Elements.textNode(headerElement, text);
        return this;
    }

    @Override
    public SimpleListGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

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

    @Override
    public String text() {
        return Elements.textNode(headerElement);
    }
}
