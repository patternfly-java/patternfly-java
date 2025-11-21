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

import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.panel;

public class PanelHeader extends PanelSubComponent<HTMLDivElement, PanelHeader> implements
        ElementTextMethods<HTMLDivElement, PanelHeader> {

    // ------------------------------------------------------ factory

    public static PanelHeader panelHeader() {
        return new PanelHeader();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ph";

    final String headerId;

    PanelHeader() {
        super(SUB_COMPONENT_NAME, div().css(component(panel, header)).element());
        headerId = Id.unique(ComponentType.Panel.id, "header");
        element().id = headerId;
    }

    // ------------------------------------------------------ builder

    @Override
    public PanelHeader that() {
        return this;
    }
}
