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

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

/**
 * The WithId interface represents a (sub)component that has an ID. It is normally implemented by subcomponents of components
 * implementing {@link HasItems}.
 * <p>
 * It's up to the implementation what to do with the ID. The recommendation is to set it as data attribute using
 * {@link org.patternfly.core.Dataset#identifier} and not set it on the root element as {@link Element#id}. This guarantees that
 * you can still use an arbitrary element ID.
 * <p>
 * The factory methods of the (sub)component implementing this interface should take the identifier as the first argument.
 *
 * @param <E> the type of the element
 * @param <B> the type of the builder used to build the element
 */
public interface WithIdentifier<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    String identifier();
}
