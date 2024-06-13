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

import org.patternfly.component.WithIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.style.Classes.cell;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;

public class DataListCell extends DataListSubComponent<HTMLElement, DataListCell> implements
        WithIcon<HTMLElement, DataListCell> {

    // ------------------------------------------------------ factory

    public static DataListCell dataListCell() {
        return new DataListCell();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlc";
    private Element icon;

    DataListCell() {
        super(SUB_COMPONENT_NAME, div().css(component(dataList, item, cell))
                .element());
    }

    // ------------------------------------------------------ builder

    @Override
    public DataListCell icon(Element icon) {
        css(modifier(Classes.icon));
        this.icon = icon;
        return add(this.icon);
    }

    @Override
    public DataListCell removeIcon() {
        failSafeRemoveFromParent(icon);
        classList().remove(modifier(Classes.icon));
        return this;
    }

    @Override
    public DataListCell that() {
        return this;
    }
}
