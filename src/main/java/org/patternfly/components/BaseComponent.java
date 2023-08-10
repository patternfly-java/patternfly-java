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
package org.patternfly.components;

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.core.Ouia;

import elemental2.dom.HTMLElement;

public abstract class BaseComponent<E extends HTMLElement, B extends ElementBuilder<E, B>> extends ElementBuilder<E, B>
        implements Component, TypedBuilder<E, B>, IsElement<E> {

    private final ComponentType componentType;

    // TODO Remove, once all components have been migrated to PF 5
    protected BaseComponent(E element, String component) {
        super(element);
        this.componentType = ComponentType.Unknown;
    }

    protected BaseComponent(E element, ComponentType componentType) {
        super(element);
        this.componentType = componentType;
        Ouia.component(element, componentType);
    }

    @Override
    public ComponentType componentType() {
        return componentType;
    }
}
