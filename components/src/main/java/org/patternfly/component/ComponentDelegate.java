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
import org.jboss.elemento.HTMLElementAttributeMethods;
import org.jboss.elemento.HTMLElementDataMethods;
import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.HTMLElementVisibilityMethods;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;

import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

public abstract class ComponentDelegate<E extends HTMLElement, B extends TypedBuilder<E, B>> implements
        Component,
        ElementAttributeMethods<E, B>,
        ElementClassListMethods<E, B>,
        ElementContainerMethods<E, B>,
        ElementConsumerMethods<E, B>,
        ElementEventMethods<E, B>,
        ElementIdMethods<E, B>,
        ElementQueryMethods<E>,
        HTMLElementAttributeMethods<E, B>,
        HTMLElementDataMethods<E, B>,
        HTMLElementStyleMethods<E, B>,
        HTMLElementVisibilityMethods<E, B> {

    private static final Logger logger = Logger.getLogger(ComponentDelegate.class.getName());
    private final ComponentType componentType;
    E delegate;

    protected ComponentDelegate(ComponentType componentType) {
        this.componentType = requireNonNull(componentType, "component type required");
    }

    protected void delegateTo(E delegate) {
        this.delegate = delegate;
        Ouia.component(delegate, componentType);
    }

    @Override
    public E element() {
        if (delegate == null) {
            logger.error("No delegate defined for component %s", componentType().componentName);
        }
        return delegate;
    }

    @Override
    public ComponentType componentType() {
        return componentType;
    }

    // ------------------------------------------------------ component store

    protected void storeComponent() {
        ComponentStore.storeComponentDelegate(this);
    }
}
