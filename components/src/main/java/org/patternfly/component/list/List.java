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

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Bordered;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.HTMLElement;

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

    <E extends HTMLElement> List(HTMLContainerBuilder<E> builder) {
        super(ComponentType.List, builder.css(Classes.component(list))
                .attr(role, Roles.list)
                .element());
        this.items = new LinkedHashMap<>();
    }

    // ------------------------------------------------------ add

    public <T> List addItems(Iterable<T> items, Function<T, ListItem> display) {
        for (T item : items) {
            ListItem li = display.apply(item);
            addItem(li);
        }
        return this;
    }

    public List addItem(ListItem item) {
        return add(item);
    }

    @Override
    public List add(ListItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    public List addDivider() {
        return add(divider(li));
    }

    // ------------------------------------------------------ builder

    public List largeIcons() {
        return css(modifier(icon, lg));
    }

    @Override
    public List that() {
        return this;
    }

    // ------------------------------------------------------ api

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
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
