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
package org.patternfly.component.drawer;

import org.patternfly.style.Modifiers.NoPadding;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;

/**
 * Subcomponent for elements in a {@link DrawerPanel}.
 */
public class DrawerPanelBody extends DrawerSubComponent<HTMLDivElement, DrawerPanelBody>
        implements NoPadding<HTMLDivElement, DrawerPanelBody> {

    // ------------------------------------------------------ factory

    public static DrawerPanelBody drawerPanelBody() {
        return new DrawerPanelBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dpb";

    DrawerPanelBody() {
        super(SUB_COMPONENT_NAME, div().css(component(drawer, body)).element());
    }

    // ------------------------------------------------------ add

    public DrawerPanelBody addHead(DrawerPanelHead head) {
        return add(head);
    }

    // ------------------------------------------------------ builder

    @Override
    public DrawerPanelBody that() {
        return this;
    }
}
