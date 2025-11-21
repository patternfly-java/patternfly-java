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

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.table.Wrap;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.NoFill;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.component.table.Wrap.breakWord;
import static org.patternfly.component.table.Wrap.nowrap;
import static org.patternfly.component.table.Wrap.truncate;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Classes.alignRight;
import static org.patternfly.style.Classes.cell;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.flex;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.TypedModifier.swap;

public class DataListCell extends DataListSubComponent<HTMLElement, DataListCell> implements
        ComponentIcon<HTMLElement, DataListCell>,
        ElementTextMethods<HTMLElement, DataListCell>,
        NoFill<HTMLElement, DataListCell> {

    // ------------------------------------------------------ factory

    public static DataListCell dataListCell() {
        return new DataListCell();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "dlc";
    private Element icon;

    DataListCell() {
        super(SUB_COMPONENT_NAME, div().css(component(dataList, cell)).element());
    }

    // ------------------------------------------------------ builder

    /** Aligns the cell content to the right of its parent. */
    public DataListCell alignRight() {
        return css(modifier(alignRight));
    }

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

    /** Width (from 1-5) to the data list cell */
    public DataListCell width(int width) {
        if (verifyRange(element(), "width", width, 1, 5)) {
            if (width > 1) {
                css(modifier(flex) + "-" + width);
            }
        }
        return this;
    }

    /** Determines which wrapping modifier to apply to the data list */
    public DataListCell wrap(Wrap wrap) {
        if (verifyEnum(element(), "wrap", wrap, nowrap, truncate, breakWord)) {
            swap(this, element(), wrap, Wrap.values());
        }
        return this;
    }

    @Override
    public DataListCell that() {
        return this;
    }
}
