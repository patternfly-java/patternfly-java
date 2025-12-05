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
package org.patternfly.component.table;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.HasItems;
import org.patternfly.component.emptystate.EmptyState;

import elemental2.dom.HTMLTableSectionElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.table.Td.td;
import static org.patternfly.component.table.Tr.tr;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.rowgroup;
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.tbody;

public class Tbody extends TableSubComponent<HTMLTableSectionElement, Tbody> implements
        HasItems<HTMLTableSectionElement, Tbody, Tr> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tbody tbody() {
        return new Tbody();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "tbd";
    final Map<String, Tr> items;
    private Tr emptyRow;
    private final List<BiConsumer<Tbody, Tr>> onAdd;
    private final List<BiConsumer<Tbody, Tr>> onRemove;

    Tbody() {
        super(SUB_COMPONENT_NAME, Elements.tbody().css(component(table, tbody))
                .attr(role, rowgroup)
                .element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    /** Same as {@link #addItems(Iterable, Function)} */
    public <T> Tbody addRows(Iterable<T> items, Function<T, Tr> display) {
        return addItems(items, display);
    }

    /** Same as {@link #addItem(Object)} */
    public Tbody addRow(Tr row) {
        return addItem(row);
    }

    public Tbody add(Tr row) {
        items.put(row.identifier(), row);
        row.tbody = this;
        add(row.element());
        onAdd.forEach(bc -> bc.accept(this, row));
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Tbody that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Tbody onAdd(BiConsumer<Tbody, Tr> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public Tbody onRemove(BiConsumer<Tbody, Tr> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    public Tbody empty(int colSpan, EmptyState emptyState) {
        failSafeRemoveFromParent(emptyRow);
        emptyRow = tr(Id.unique("table-empty-row"));
        return addItem(emptyRow
                .addItem(td().colSpan(colSpan)
                        .add(bullseye()
                                .add(emptyState))));
    }

    public void clearEmpty() {
        failSafeRemoveFromParent(emptyRow);
    }

    @Override
    public Iterator<Tr> iterator() {
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
    public Tr item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        Tr item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<Tr> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            Tr item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
