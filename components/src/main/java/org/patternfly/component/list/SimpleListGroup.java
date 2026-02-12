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
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.Ordered;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
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
        ElementContainerDelegate<HTMLElement, SimpleListGroup>,
        ElementTextDelegate<HTMLElement, SimpleListGroup>,
        Ordered<HTMLElement, SimpleListGroup, SimpleListItem> {

    // ------------------------------------------------------ factory

    public static SimpleListGroup simpleListGroup(String text) {
        return new SimpleListGroup().text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "slg";
    final Map<String, SimpleListItem> items;
    private final HTMLElement headerElement;
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    private final List<BiConsumer<SimpleListGroup, SimpleListItem>> onAdd;
    private final List<BiConsumer<SimpleListGroup, SimpleListItem>> onRemove;
    private Comparator<SimpleListItem> comparator;

    SimpleListGroup() {
        super(SUB_COMPONENT_NAME, section().css(component(simpleList, Classes.section)).element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        String headerId = Id.unique(SUB_COMPONENT_NAME);
        element().appendChild(headerElement = h(2).css(component(simpleList, title))
                .id(headerId)
                .aria(Aria.hidden, true)
                .element());
        ul = ul().css(component(simpleList, list))
                .attr(role, Roles.list)
                .aria(labelledBy, headerId);
        element().appendChild(ul.element());
    }

    @Override
    public Element containerDelegate() {
        return headerElement;
    }

    @Override
    public Element textDelegate() {
        return headerElement;
    }

    // ------------------------------------------------------ add

    @Override
    public SimpleListGroup add(SimpleListItem item) {
        addOrdered(ul, item);
        items.put(item.identifier(), item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public SimpleListGroup ordered(Comparator<SimpleListItem> comparator) {
        this.comparator = comparator;
        return this;
    }

    @Override
    public SimpleListGroup that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public SimpleListGroup onAdd(BiConsumer<SimpleListGroup, SimpleListItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public SimpleListGroup onRemove(BiConsumer<SimpleListGroup, SimpleListItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<SimpleListItem> comparator() {
        return comparator;
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
    public void removeItem(String identifier) {
        SimpleListItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(ul);
        Iterator<SimpleListItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            SimpleListItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
