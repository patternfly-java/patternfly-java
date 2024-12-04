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
package org.patternfly.component.emptystate;

import org.jboss.elemento.ElementTextMethods;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.emptyState;

public class EmptyStateBody extends EmptyStateSubComponent<HTMLDivElement, EmptyStateBody> implements
        ElementTextMethods<HTMLDivElement, EmptyStateBody> {

    // ------------------------------------------------------ factory

    public static EmptyStateBody emptyStateBody() {
        return new EmptyStateBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "esb";

    EmptyStateBody() {
        super(SUB_COMPONENT_NAME, div().css(component(emptyState, body)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public EmptyStateBody that() {
        return this;
    }
}
