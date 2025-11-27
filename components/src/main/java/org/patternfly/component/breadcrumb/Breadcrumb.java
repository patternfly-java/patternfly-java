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
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.label.Label;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLOListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
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
public class Breadcrumb extends BaseComponent<HTMLElement, Breadcrumb> implements
        HasItems<HTMLElement, Breadcrumb, BreadcrumbItem> {

    // ------------------------------------------------------ factory

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    // ------------------------------------------------------ instance

    private final HTMLContainerBuilder<HTMLOListElement> ol;
    private final Map<String, BreadcrumbItem> items;
    private final List<SelectHandler<BreadcrumbItem>> selectHandler;
    private final List<BiConsumer<Breadcrumb, BreadcrumbItem>> onAdd;
    private final List<BiConsumer<Breadcrumb, BreadcrumbItem>> onRemove;

    Breadcrumb() {
        super(ComponentType.Breadcrumb, nav().css(component(breadcrumb)).element());
        this.items = new LinkedHashMap<>();
        this.ol = ol().css(component(breadcrumb, Classes.list)).attr(role, list);
        this.selectHandler = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        storeComponent();
        element().appendChild(ol.element());
    }

    // ------------------------------------------------------ add

    @Override
    public Breadcrumb add(BreadcrumbItem item) {
        items.put(item.identifier(), item);
        ol.add(item);
        onAdd.forEach(bc -> bc.accept(this, item));
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

    @Override
    public Breadcrumb onAdd(BiConsumer<Breadcrumb, BreadcrumbItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public Breadcrumb onRemove(BiConsumer<Breadcrumb, BreadcrumbItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

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
    public BreadcrumbItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        BreadcrumbItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(ol);
        Iterator<BreadcrumbItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            BreadcrumbItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    // ------------------------------------------------------ internal

    void select(Event event, BreadcrumbItem item) {
        selectHandler.forEach(sh -> sh.onSelect(event, item, true));
    }
}
