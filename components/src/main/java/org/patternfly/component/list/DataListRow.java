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

import java.util.function.Function;

import org.patternfly.core.ElementDelegate;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.row;

public class DataListRow extends DataListSubComponent<HTMLElement, DataListRow>
        implements ElementDelegate<HTMLElement, DataListRow> {

    // ------------------------------------------------------ factory

    public static DataListRow dataListRow() {
        return new DataListRow();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlr";
    private final HTMLElement contentElement;

    DataListRow() {
        super(SUB_COMPONENT_NAME, div().css(component(dataList, item, row))
                .element());
        element().appendChild(contentElement = div().css(component(dataList, item, content)).element());
    }

    @Override
    public HTMLElement delegate() {
        return contentElement;
    }

    // ------------------------------------------------------ add

    public <T> DataListRow addCells(Iterable<T> items, Function<T, DataListCell> display) {
        for (T item : items) {
            DataListCell dlc = display.apply(item);
            addCell(dlc);
        }
        return this;
    }

    public DataListRow addCell(DataListCell cell) {
        return add(cell);
    }

    public DataListRow addAction(DataListAction action) {
        return add(action);
    }

    public DataListRow add(DataListAction action) {
        element().appendChild(action.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public DataListRow that() {
        return this;
    }
}
