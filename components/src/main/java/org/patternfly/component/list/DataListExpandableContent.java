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

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.NoPadding;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.expandable;
import static org.patternfly.style.Modifiers.toggleModifier;

public class DataListExpandableContent extends DataListSubComponent<HTMLElement, DataListExpandableContent> implements
        ElementContainerDelegate<HTMLElement, DataListExpandableContent>,
        ElementTextDelegate<HTMLElement, DataListExpandableContent>,
        NoPadding<HTMLElement, DataListExpandableContent> {

    // ------------------------------------------------------ factory

    public static DataListExpandableContent dataListExpandableContent() {
        return new DataListExpandableContent();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "dlc";
    private final HTMLElement body;

    DataListExpandableContent() {
        super(SUB_COMPONENT_NAME, section().css(component(dataList, expandable, content))
                .element());
        element().appendChild(body = div().css(component(dataList, expandable, content, Classes.body)).element());
    }

    @Override
    public Element containerDelegate() {
        return body;
    }

    @Override
    public Element textDelegate() {
        return body;
    }

    // ------------------------------------------------------ builder

    @Override
    public DataListExpandableContent noPadding(boolean noPadding) {
        return toggleModifier(that(), body, Classes.noPadding, noPadding);
    }

    @Override
    public DataListExpandableContent that() {
        return this;
    }
}
