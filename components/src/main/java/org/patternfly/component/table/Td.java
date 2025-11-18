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
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Dataset;

import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.cell;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.td;

public class Td extends Cell<Td> {

    // ------------------------------------------------------ factory

    public static Td td() {
        return new Td(Id.unique(ComponentType.Table.id, "td"), null);
    }

    public static Td td(String column) {
        return new Td(Id.unique(ComponentType.Table.id, "td"), column);
    }

    public static Td td(String identifier, String column) {
        return new Td(identifier, column);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "td";

    Td(String identifier, String column) {
        super(SUB_COMPONENT_NAME, identifier, Elements.td().css(component(table, td))
                .attr(tabindex, -1)
                .attr(role, cell)
                .data(Dataset.identifier, identifier)
                .element());
        if (column != null) {
            data(Dataset.label, column);
        }
    }

    // ------------------------------------------------------ builder

    /** Marks the cell to contain a single action */
    public Td action() {
        return css(modifier(action));
    }

    /** Marks the cell to contain multiple actions in a kebab dropdown */
    public Td actions() {
        return css(component(table, action));
    }

    @Override
    public Td that() {
        return this;
    }
}
