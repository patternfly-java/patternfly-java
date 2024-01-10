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
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.drawer;

/**
 * The main content in a {@link Drawer} component. Elements should not be added directly to this subcomponent, but instead
 * nested inside a {@link DrawerContentBody}.
 */
public class DrawerContent extends DrawerSubComponent<HTMLDivElement, DrawerContent> {

    // ------------------------------------------------------ factory

    public static DrawerContent drawerContent() {
        return new DrawerContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dc";

    DrawerContent() {
        super(SUB_COMPONENT_NAME, div().css(component(drawer, content)).element());
    }

    // ------------------------------------------------------ add

    public DrawerContent addBody(DrawerContentBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    public DrawerContent color(DrawerColor color) {
        return css(color.modifier);
    }

    @Override
    public DrawerContent that() {
        return this;
    }
}
