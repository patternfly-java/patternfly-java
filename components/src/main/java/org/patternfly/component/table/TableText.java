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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.TypedModifier.swap;

public class TableText extends TableSubComponent<HTMLElement, TableText> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static TableText tableText() {
        return new TableText();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tt";

    TableText() {
        super(SUB_COMPONENT_NAME, span().css(component(table, text)).element());
    }

    // ------------------------------------------------------ builder

    public TableText wrap(Wrap wrap) {
        return swap(that(), element(), wrap, Wrap.values());
    }

    @Override
    public TableText that() {
        return this;
    }
}
