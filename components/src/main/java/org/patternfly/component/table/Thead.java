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

import elemental2.dom.HTMLTableSectionElement;

import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.thead;

public class Thead extends TableSubComponent<HTMLTableSectionElement, Thead> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Thead thead() {
        return new Thead();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "thd";

    Thead() {
        super(SUB_COMPONENT_NAME, Elements.thead().css(component(table, thead)).element());
    }

    // ------------------------------------------------------ add

    public Thead addRow(Tr row) {
        return add(row);
    }

    // ------------------------------------------------------ builder

    @Override
    public Thead that() {
        return this;
    }
}
