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

import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.Ordered;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Bordered;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size.lg;

/**
 * A list component embeds a formatted list (bulleted or numbered list) into page content.
 *
 * @see <a href= "https://www.patternfly.org/components/list">https://www.patternfly.org/components/list</a>
 */
public class List extends BaseComponent<HTMLElement, List> implements
        Bordered<HTMLElement, List>,
        HasItems<HTMLElement, List, ListItem>,
        Inline<HTMLElement, List>,
        Ordered<HTMLElement, List, ListItem>,
        Plain<HTMLElement, List> {

    // ------------------------------------------------------ factory

    /** Creates an unordered list component. */
    public static List list() {
        return new List(ul());
    }

    public static <E extends HTMLElement> List list(HTMLContainerBuilder<E> builder) {
        return new List(builder);
    }

    // ------------------------------------------------------ instance

    private final Map<String, ListItem> items;
    private final java.util.List<BiConsumer<List, ListItem>> onAdd;
    private final java.util.List<BiConsumer<List, ListItem>> onRemove;
    private Comparator<ListItem> comparator;

    <E extends HTMLElement> List(HTMLContainerBuilder<E> builder) {
        super(ComponentType.List, builder.css(Classes.component(list))
                .attr(role, Roles.list)
                .element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new java.util.ArrayList<>();
        this.onRemove = new java.util.ArrayList<>();
    }

    // ------------------------------------------------------ add

    @Override
    public List add(ListItem item) {
        addOrdered(this, item);
        items.put(item.identifier(), item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    public List addDivider() {
        return add(divider(li));
    }

    // ------------------------------------------------------ builder

    public List largeIcons() {
        return css(modifier(icon, lg));
    }

    @Override
    public List ordered(Comparator<ListItem> comparator) {
        this.comparator = comparator;
        return this;
    }

    @Override
    public List that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public List onAdd(BiConsumer<List, ListItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public List onRemove(BiConsumer<List, ListItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<ListItem> comparator() {
        return comparator;
    }

    @Override
    public Iterator<ListItem> iterator() {
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
    public ListItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        ListItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<ListItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            ListItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
