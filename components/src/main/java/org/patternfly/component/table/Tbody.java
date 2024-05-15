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

import java.util.function.Function;

import org.jboss.elemento.Elements;

import elemental2.dom.HTMLTableSectionElement;

import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.rowgroup;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.tbody;

public class Tbody extends TableSubComponent<HTMLTableSectionElement, Tbody> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tbody tbody() {
        return new Tbody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tbd";

    Tbody() {
        super(SUB_COMPONENT_NAME, Elements.tbody().css(component(table, tbody))
                .attr(role, rowgroup)
                .element());
    }

    // ------------------------------------------------------ add

    public <T> Tbody addRows(Iterable<T> items, Function<T, Tr> display) {
        for (T item : items) {
            Tr row = display.apply(item);
            addRow(row);
        }
        return this;
    }

    public Tbody addRow(Tr row) {
        return add(row);
    }

    // ------------------------------------------------------ builder

    @Override
    public Tbody that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void clearRows() {
        Elements.removeChildrenFrom(element());
    }
}
