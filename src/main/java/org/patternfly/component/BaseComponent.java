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
package org.patternfly.component;

import org.jboss.elemento.Container;
import org.jboss.elemento.Finder;
import org.jboss.elemento.HasElement;
import org.jboss.elemento.HasHTMLElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.core.Ouia;

import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

public abstract class BaseComponent<E extends HTMLElement, B extends TypedBuilder<E, B>>
        implements Component, HasElement<E, B>, HasHTMLElement<E, B>, Finder<E>, Container<E, B> {

    private final E element;
    private final ComponentType componentType;

    // TODO Remove, once all components have been migrated to PF 5
    protected BaseComponent(E element, String component) {
        this.element = requireNonNull(element, "element required");
        this.componentType = ComponentType.Unknown;
    }

    protected BaseComponent(E element, ComponentType componentType) {
        this.element = requireNonNull(element, "element required");
        this.componentType = requireNonNull(componentType, "component type required");
        Ouia.component(element, componentType);
    }

    @Override
    public E element() {
        return element;
    }

    @Override
    public ComponentType componentType() {
        return componentType;
    }
}
