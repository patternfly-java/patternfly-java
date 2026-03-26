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
package org.patternfly.component.popover;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.popover;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.title;

public class Popover2Header extends Popover2SubComponent<HTMLElement, Popover2Header> implements
        ElementContainerDelegate<HTMLElement, Popover2Header>,
        ElementTextDelegate<HTMLElement, Popover2Header> {

    // ------------------------------------------------------ factory

    public static Popover2Header popover2Header() {
        return new Popover2Header();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "p2h";

    final String headerId;
    final HTMLHeadingElement headerElement;
    private HTMLElement iconContainer;

    Popover2Header() {
        super(SUB_COMPONENT_NAME, header().css(component(popover, Classes.header)).element());
        headerId = Id.unique(ComponentType.Popover2.id, "header");
        element().appendChild(div().css(component(popover, title))
                .id(headerId)
                .add(headerElement = h(6).css(component(popover, title, text))
                        .element())
                .element());
    }

    @Override
    public Element containerDelegate() {
        return headerElement;
    }

    @Override
    public Element textDelegate() {
        return headerElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public Popover2Header that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void icon(Element icon) {
        failSafeIconContainer().appendChild(icon);
    }

    void removeIcon() {
        failSafeRemoveFromParent(iconContainer);
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertBefore(iconContainer = span().css(component(popover, title, icon)).element(), headerElement);
        }
        return iconContainer;
    }
}