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
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.label;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;
import static org.patternfly.style.PredefinedIcon.times;

public class DrawerCloseButton extends DrawerSubComponent<HTMLDivElement, DrawerCloseButton> {

    // ------------------------------------------------------ factory

    public static DrawerCloseButton drawerCloseButton() {
        return new DrawerCloseButton();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dcbtn";

    DrawerCloseButton() {
        super(SUB_COMPONENT_NAME, div().css(component(drawer, actions)).element());
        add(div().css(component(drawer, close))
                .add(button().plain().icon(times)
                        .aria(label, "Close drawer panel")
                        .on(click, e -> close())));
    }

    // ------------------------------------------------------ builder

    @Override
    public DrawerCloseButton that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void close() {
        Drawer drawer = lookupFlatComponent();
        drawer.collapse();
    }
}
