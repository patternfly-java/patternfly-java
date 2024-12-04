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

import org.jboss.elemento.ElementTextMethods;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.caption;
import static org.patternfly.style.Classes.caption;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;

public class TableCaption extends TableSubComponent<HTMLElement, TableCaption> implements
        ElementTextMethods<HTMLElement, TableCaption> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static TableCaption tableCaption() {
        return new TableCaption();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tc";

    TableCaption() {
        super(SUB_COMPONENT_NAME, caption().css(component(table, caption)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public TableCaption that() {
        return this;
    }
}
