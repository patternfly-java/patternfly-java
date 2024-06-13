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

import org.patternfly.core.ElementDelegate;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.NoPadding;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.expandable;
import static org.patternfly.style.Modifiers.toggleModifier;

public class DataListContent extends DataListSubComponent<HTMLElement, DataListContent>
        implements ElementDelegate<HTMLElement, DataListContent>, NoPadding<HTMLElement, DataListContent> {

    // ------------------------------------------------------ factory

    public static DataListContent dataListContent() {
        return new DataListContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlc";
    private final HTMLElement body;

    DataListContent() {
        super(SUB_COMPONENT_NAME, section().css(component(dataList, expandable, content))
                .element());
        element().appendChild(body = div().css(component(dataList, expandable, content, Classes.body)).element());
    }

    @Override
    public HTMLElement delegate() {
        return body;
    }

    // ------------------------------------------------------ builder

    @Override
    public DataListContent noPadding(boolean noPadding) {
        return toggleModifier(that(), body, Classes.noPadding, noPadding);
    }

    @Override
    public DataListContent that() {
        return this;
    }
}
