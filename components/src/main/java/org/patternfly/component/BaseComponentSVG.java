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

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.svg.SVGElement;
import org.jboss.elemento.svg.SVGElementDataMethods;
import org.jboss.elemento.svg.SVGElementStyleMethods;

import static java.util.Objects.requireNonNull;

public abstract class BaseComponentSVG<E extends SVGElement, B extends TypedBuilder<E, B>> implements
        Component,
        ElementAttributeMethods<E, B>,
        ElementClassListMethods<E, B>,
        ElementConsumerMethods<E, B>,
        ElementContainerMethods<E, B>,
        ElementEventMethods<E, B>,
        ElementIdMethods<E, B>,
        ElementQueryMethods<E>,
        SVGElementDataMethods<E, B>,
        SVGElementStyleMethods<E, B> {

    private final ComponentType componentType;
    private final E element;

    protected BaseComponentSVG(ComponentType componentType, E element) {
        this.componentType = requireNonNull(componentType, "component type required");
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public ComponentType componentType() {
        return componentType;
    }

    @Override
    public E element() {
        return element;
    }
}
