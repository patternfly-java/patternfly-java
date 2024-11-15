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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.table.Wrap;
import org.patternfly.style.GridBreakpoint;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.HTMLUListElement;

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
        HasItems<HTMLUListElement, DataList, DataListItem> {

    // ------------------------------------------------------ factory

    public static DataList dataList() {
        return new DataList();
    }

    // ------------------------------------------------------ instance

    private final Map<String, DataListItem> items;

    DataList() {
        super(ComponentType.DataList, ul().css(component(dataList))
                .attr(role, list)
                .element());
        this.items = new LinkedHashMap<>();
        gridBreakpoint(gridMd);
    }

    // ------------------------------------------------------ add

    @Override
    public DataList add(DataListItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    // ------------------------------------------------------ builder

    /** Specifies the grid breakpoints */
    public DataList gridBreakpoint(GridBreakpoint breakpoint) {
        if (verifyEnum(element(), "gridBreakpoint", breakpoint, none, always, gridSm, gridMd, gridLg, gridXl, gird2xl)) {
            swap(this, element(), breakpoint, GridBreakpoint.values());
        }
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

    // ------------------------------------------------------ api

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
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }
}
