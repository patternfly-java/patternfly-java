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
package org.patternfly.component.breadcrumb;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLOListElement;

import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.style.Classes.breadcrumb;
import static org.patternfly.style.Classes.component;

/**
 * A breadcrumb provides page context to help users navigate more efficiently and understand where they are in the application
 * hierarchy.
 *
 * @see <a href= "https://www.patternfly.org/components/breadcrumb">https://www.patternfly.org/components/breadcrumb</a>
 */
public class Breadcrumb extends BaseComponentFlat<HTMLElement, Breadcrumb> implements
        HasItems<HTMLElement, Breadcrumb, BreadcrumbItem> {

    // ------------------------------------------------------ factory

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    // ------------------------------------------------------ instance

    private final HTMLContainerBuilder<HTMLOListElement> ol;
    private final Map<String, BreadcrumbItem> items;
    private final List<SelectHandler<BreadcrumbItem>> selectHandler;

    Breadcrumb() {
        super(ComponentType.Breadcrumb, nav().css(component(breadcrumb)).element());
        this.items = new LinkedHashMap<>();
        this.ol = ol().css(component(breadcrumb, Classes.list)).attr(role, list);
        this.selectHandler = new ArrayList<>();
        storeFlatComponent();
        element().appendChild(ol.element());
    }

    // ------------------------------------------------------ add

    @Override
    public Breadcrumb add(BreadcrumbItem item) {
        items.put(item.identifier(), item);
        ol.add(item);
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Breadcrumb that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Breadcrumb ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Breadcrumb onSelect(SelectHandler<BreadcrumbItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public <T> void updateItems(Iterable<T> items, Function<T, BreadcrumbItem> display) {
        removeChildrenFrom(ol);
        addItems(items, display);
    }

    @Override
    public Iterator<BreadcrumbItem> iterator() {
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
        removeChildrenFrom(ol);
        items.clear();
    }

    // ------------------------------------------------------ internal

    void select(Event event, BreadcrumbItem item) {
        selectHandler.forEach(sh -> sh.onSelect(event, item, true));
    }
}
