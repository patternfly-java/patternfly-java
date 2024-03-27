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

import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

public abstract class BaseComponent<E extends HTMLElement, B extends TypedBuilder<E, B>>
        implements Component, HasElement<E, B>, HasHTMLElement<E, B>, Finder<E>, Container<E, B> {

    private final ComponentType componentType;
    private final E element;

    protected BaseComponent(ComponentType componentType, E element) {
        this.componentType = requireNonNull(componentType, "component type required");
        this.element = requireNonNull(element, "element required");
        Ouia.component(element, componentType);
    }

    @Override
    public ComponentType componentType() {
        return componentType;
    }

    @Override
    public E element() {
        return element;
    }

    // ------------------------------------------------------ component store

    protected void storeComponent() {
        ComponentStore.storeComponent(this);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent(
            ComponentType componentType) {
        return lookupComponent(componentType, false);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent(
            ComponentType componentType, boolean lenient) {
        return ComponentStore.lookupComponent(componentType, element(), lenient);
    }

    protected <C extends BaseComponentFlat<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponentFlat(
            ComponentType componentType) {
        return lookupComponentFlat(componentType, false);
    }

    protected <C extends BaseComponentFlat<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponentFlat(
            ComponentType componentType, boolean lenient) {
        return ComponentStore.lookupFlatComponent(componentType, element(), lenient);
    }
}
