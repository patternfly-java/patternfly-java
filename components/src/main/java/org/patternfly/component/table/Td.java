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

import org.jboss.elemento.Elements;
import org.patternfly.core.Dataset;

import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.td;

public class Td extends Cell<Td> {

    // ------------------------------------------------------ factory

    public static Td td() {
        return new Td(null);
    }

    public static Td td(String column) {
        return new Td(column);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "td";

    Td(String column) {
        super(SUB_COMPONENT_NAME, Elements.td().css(component(table, td))
                .attr(tabindex, -1)
                .element());
        if (column != null) {
            data(Dataset.label, column);
        }
    }

    // ------------------------------------------------------ builder

    /** Applies pf-v5-c-table__action to the td */
    public Td actionCell() {
        return css(component(table, action));
    }

    @Override
    public Td that() {
        return this;
    }
}
