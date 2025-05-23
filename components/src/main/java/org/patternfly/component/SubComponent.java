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
import org.jboss.elemento.Id;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

public abstract class SubComponent<E extends HTMLElement, B extends TypedBuilder<E, B>> implements
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

    final ComponentType componentType;
    final String name;
    private final E element;

    protected SubComponent(ComponentType componentType, String name, E element) {
        this.componentType = requireNonNull(componentType, "component type required");
        this.name = requireNonNull(name, "name required");
        this.element = requireNonNull(element, "element required");
    }

    protected String subComponentId() {
        return Id.build(componentType.id, name);
    }

    @Override
    public E element() {
        return element;
    }

    // ------------------------------------------------------ component store

    protected void storeSubComponent() {
        ComponentStore.storeSubComponent(this);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent() {
        return lookupComponent(false);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent(
            boolean lenient) {
        return ComponentStore.lookupComponent(componentType, element, lenient);
    }

    protected <C extends ComponentDelegate<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponentDelegate() {
        return lookupComponentDelegate(false);
    }

    protected <C extends ComponentDelegate<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponentDelegate(
            boolean lenient) {
        return ComponentStore.lookupComponentDelegate(componentType, element, lenient);
    }

    protected <S extends SubComponent<E2, B2>, E2 extends HTMLElement, B2 extends TypedBuilder<E2, B2>> S lookupSubComponent(
            String name) {
        return lookupSubComponent(name, false);
    }

    protected <S extends SubComponent<E2, B2>, E2 extends HTMLElement, B2 extends TypedBuilder<E2, B2>> S lookupSubComponent(
            String name, boolean lenient) {
        return ComponentStore.lookupSubComponent(componentType, name, element, lenient);
    }
}
