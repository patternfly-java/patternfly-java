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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Ordered;
import org.patternfly.component.table.Wrap;
import org.patternfly.style.GridBreakpoint;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.table.Wrap.breakWord;
import static org.patternfly.component.table.Wrap.nowrap;
import static org.patternfly.component.table.Wrap.truncate;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.GridBreakpoint.always;
import static org.patternfly.style.GridBreakpoint.gird2xl;
import static org.patternfly.style.GridBreakpoint.gridLg;
import static org.patternfly.style.GridBreakpoint.gridMd;
import static org.patternfly.style.GridBreakpoint.gridSm;
import static org.patternfly.style.GridBreakpoint.gridXl;
import static org.patternfly.style.GridBreakpoint.none;
import static org.patternfly.style.TypedModifier.swap;

/**
 * A data list is used to display large data sets when you need a flexible layout or need to include interactive content like
 * charts.
 *
 * @see <a href= "https://www.patternfly.org/components/data-list">https://www.patternfly.org/components/data-list</a>
 */
public class DataList extends BaseComponent<HTMLUListElement, DataList> implements
        Compact<HTMLUListElement, DataList>,
        Ordered<HTMLUListElement, DataList, DataListItem> {

    // ------------------------------------------------------ factory

    public static DataList dataList() {
        return new DataList();
    }

    // ------------------------------------------------------ instance

    private final Map<String, DataListItem> items;
    private final List<BiConsumer<DataList, DataListItem>> onAdd;
    private final List<BiConsumer<DataList, DataListItem>> onRemove;
    private Comparator<DataListItem> comparator;

    DataList() {
        super(ComponentType.DataList, ul().css(component(dataList))
                .attr(role, list)
                .element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        gridBreakpoint(gridMd);
    }

    // ------------------------------------------------------ add

    @Override
    public DataList add(DataListItem item) {
        addOrdered(this, item);
        items.put(item.identifier(), item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    // ------------------------------------------------------ builder

    /** Specifies the grid breakpoints */
    public DataList gridBreakpoint(GridBreakpoint breakpoint) {
        if (verifyEnum(element(), "gridBreakpoint", breakpoint, none, always, gridSm, gridMd, gridLg, gridXl, gird2xl)) {
            swap(this, element(), breakpoint, GridBreakpoint.values());
        }
        return this;
    }

    @Override
    public DataList ordered(Comparator<DataListItem> comparator) {
        this.comparator = comparator;
        return this;
    }

    /** Determines which wrapping modifier to apply to the data list */
    public DataList wrap(Wrap wrap) {
        if (verifyEnum(element(), "wrap", wrap, nowrap, truncate, breakWord)) {
            swap(this, element(), wrap, Wrap.values());
        }
        return this;
    }

    @Override
    public DataList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public DataList onAdd(BiConsumer<DataList, DataListItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public DataList onRemove(BiConsumer<DataList, DataListItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<DataListItem> comparator() {
        return comparator;
    }

    @Override
    public Iterator<DataListItem> iterator() {
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
    public DataListItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        DataListItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<DataListItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            DataListItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
