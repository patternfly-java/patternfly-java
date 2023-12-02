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

public abstract class BaseSubComponent<E extends HTMLElement, B extends TypedBuilder<E, B>>
        implements HasElement<E, B>, HasHTMLElement<E, B>, Finder<E>, Container<E, B> {

    private final E element;
    private final ComponentType componentType;
    private final String name;

    protected BaseSubComponent(E element, ComponentType componentType, String name) {
        this.element = requireNonNull(element, "element required");
        this.componentType = componentType;
        this.name = name;
    }

    protected void storeComponent() {
        ComponentStore.storeSubComponent(this);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent() {
        return lookupComponent(false);
    }

    protected <C extends BaseComponent<E1, B1>, E1 extends HTMLElement, B1 extends TypedBuilder<E1, B1>> C lookupComponent(
            boolean lenient) {
        return ComponentStore.lookupComponent(componentType, element, false);
    }

    protected <S extends BaseSubComponent<E2, B2>, E2 extends HTMLElement, B2 extends TypedBuilder<E2, B2>> S lookupSubComponent(
            String name) {
        return lookupSubComponent(name, false);
    }

    protected <S extends BaseSubComponent<E2, B2>, E2 extends HTMLElement, B2 extends TypedBuilder<E2, B2>> S lookupSubComponent(
            String name, boolean lenient) {
        return ComponentStore.lookupSubComponent(componentType, name, element, lenient);
    }

    @Override
    public E element() {
        return element;
    }

    public ComponentType componentType() {
        return componentType;
    }

    public String name() {
        return name;
    }
}
