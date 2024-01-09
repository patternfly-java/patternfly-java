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
package org.patternfly.component.panel;

import org.patternfly.core.ElementDelegate;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.*;
import static org.patternfly.style.Classes.*;
import static org.patternfly.style.Classes.main;

public class PanelMain extends PanelSubComponent<HTMLElement, PanelMain>
        implements ElementDelegate<HTMLElement, PanelMain> {

    // ------------------------------------------------------ factory

    public static PanelMain panelMain() {
        return new PanelMain();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pm";
    private final HTMLDivElement bodyElement;

    PanelMain() {
        super(SUB_COMPONENT_NAME, div().css(component(panel, main)).element());
        element().appendChild(bodyElement = div().css(component(panel, main, body))
                .element());
    }

    @Override
    public HTMLElement delegate() {
        return bodyElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public PanelMain that() {
        return this;
    }
}
