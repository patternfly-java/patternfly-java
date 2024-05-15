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

import elemental2.dom.HTMLTableRowElement;

import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.tr;

public class Tr extends TableSubComponent<HTMLTableRowElement, Tr> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tr tr() {
        return new Tr();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tr";

    Tr() {
        super(SUB_COMPONENT_NAME, Elements.tr().css(component(table, tr)).element());
    }

    // ------------------------------------------------------ add

    public <T> Tr addHeaders(Iterable<T> items, Function<T, Th> display) {
        for (T item : items) {
            Th header = display.apply(item);
            addHeader(header);
        }
        return this;
    }

    public Tr addHeader(Th header) {
        return add(header);
    }

    public <T> Tr addData(Iterable<T> items, Function<T, Td> display) {
        for (T item : items) {
            Td data = display.apply(item);
            addData(data);
        }
        return this;
    }

    public Tr addData(Td data) {
        return add(data);
    }

    // ------------------------------------------------------ builder

    @Override
    public Tr that() {
        return this;
    }
}
