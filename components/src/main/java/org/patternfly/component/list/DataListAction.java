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
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Visibility;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.item;

public class DataListAction extends DataListSubComponent<HTMLElement, DataListAction>
        implements ElementContainerDelegate<HTMLElement, DataListAction> {

    // ------------------------------------------------------ factory

    public static DataListAction dataListAction() {
        return new DataListAction(false);
    }

    /**
     * Use this factory method with {@code plainButtonAction == true} to indicate that the action is a plain button (e.g. kebab
     * dropdown toggle) so that styling is applied to align the button
     */
    public static DataListAction dataListAction(boolean plainButtonAction) {
        return new DataListAction(plainButtonAction);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dla";
    private final boolean plainButtonAction;
    private final HTMLElement delegate;

    DataListAction(boolean plainButtonAction) {
        super(SUB_COMPONENT_NAME, div().css(component(dataList, item, action))
                .element());
        this.plainButtonAction = plainButtonAction;
        if (plainButtonAction) {
            element().appendChild(delegate = div().css(component(dataList, action)).element());
        } else {
            delegate = null;
        }
    }

    @Override
    public Element containerDelegate() {
        if (plainButtonAction) {
            return delegate;
        }
        return element();
    }

    // ------------------------------------------------------ builder

    public DataListAction visibility(Breakpoints<Visibility> visibility) {
        return css(visibility.modifiers());
    }

    @Override
    public DataListAction that() {
        return this;
    }
}
