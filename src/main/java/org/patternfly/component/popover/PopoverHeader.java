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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.core.RedirectTo;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHeadingElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.popover;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.Classes.title;

public class PopoverHeader extends BaseSubComponent<HTMLElement, PopoverHeader> implements RedirectTo<HTMLElement, PopoverHeader> {

    // ------------------------------------------------------ factory

    public static PopoverHeader popoverHeader() {
        return new PopoverHeader();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ph";

    final String headerId;
    final HTMLHeadingElement headerElement;

    PopoverHeader() {
        super(header().css(component(popover, Classes.header)).element(), ComponentType.Popover, SUB_COMPONENT_NAME);
        headerId = Id.unique(ComponentType.Popover.id, "header");
        element().appendChild(div().css(component(popover, title))
                .id(headerId)
                .add(headerElement = h(6).css(component(popover, title, text))
                        .element())
                .element());
    }

    @Override
    public HTMLElement redirectTo() {
        return headerElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public PopoverHeader that() {
        return this;
    }
}
