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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;
import static org.patternfly.style.Classes.section;

/**
 * An optional content above the {@link DrawerContent} and {@link DrawerPanel} in a {@link Drawer} component.
 */
public class DrawerSection extends DrawerSubComponent<HTMLDivElement, DrawerSection> {

    // ------------------------------------------------------ factory

    public static DrawerSection drawerSection() {
        return new DrawerSection();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ds";

    DrawerSection() {
        super(SUB_COMPONENT_NAME, div().css(component(drawer, section)).element());
    }

    // ------------------------------------------------------ builder

    public DrawerSection color(DrawerColor color) {
        return css(color.modifier);
    }

    @Override
    public DrawerSection that() {
        return this;
    }
}
