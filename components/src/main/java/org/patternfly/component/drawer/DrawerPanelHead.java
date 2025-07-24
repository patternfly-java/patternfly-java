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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ElementContainerDelegate;
import org.patternfly.style.Modifiers.NoPadding;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.drawer.DrawerPanelBody.drawerPanelBody;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;
import static org.patternfly.style.Classes.head;

/**
 * Subcomponent for the header inside a {@link DrawerPanel}.
 */
public class DrawerPanelHead extends DrawerSubComponent<HTMLDivElement, DrawerPanelHead> implements
        Attachable,
        ElementContainerDelegate<HTMLDivElement, DrawerPanelHead>,
        NoPadding<HTMLDivElement, DrawerPanelHead> {

    // ------------------------------------------------------ factory

    public static DrawerPanelHead drawerPanelHead() {
        return new DrawerPanelHead();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dph";
    private final HTMLElement headContainer;
    private boolean adjustTabIndex;

    DrawerPanelHead() {
        super(SUB_COMPONENT_NAME, drawerPanelBody().element());
        element().appendChild(headContainer = div().css(component(drawer, head)).element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (adjustTabIndex) {
            Drawer drawer = lookupComponent();
            if (headContainer.firstElementChild instanceof HTMLElement) {
                HTMLElement firstElement = ((HTMLElement) headContainer.firstElementChild);
                drawer.onToggle((event, drw, expanded) -> firstElement.tabIndex = expanded ? 0 : -1);
            }
        }
    }

    @Override
    public Element containerDelegate() {
        return headContainer;
    }

    // ------------------------------------------------------ add

    public DrawerPanelHead addCloseButton(DrawerCloseButton closeButton) {
        return add(closeButton);
    }

    // ------------------------------------------------------ builder

    /**
     * By default, the tab index of the first HTML element is set to 0 if the drawer is expanded and to -1 if the drawer is
     * collapsed. Use this method to turn this feature off.
     */
    public DrawerPanelHead noAutoTabIndex() {
        this.adjustTabIndex = false;
        return this;
    }

    @Override
    public DrawerPanelHead that() {
        return this;
    }
}
