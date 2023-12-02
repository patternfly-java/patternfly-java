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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.body;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.popover;

public class PopoverBody extends PopoverSubComponent<HTMLDivElement, PopoverBody> {

    // ------------------------------------------------------ factory

    public static PopoverBody popoverBody() {
        return new PopoverBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pb";

    final String id;

    PopoverBody() {
        super(SUB_COMPONENT_NAME, div().css(component(popover, body)).element());
        id(id = Id.unique(ComponentType.Popover.id, "body"));
    }

    // ------------------------------------------------------ builder

    @Override
    public PopoverBody that() {
        return this;
    }
}
