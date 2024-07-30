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

import java.util.function.Function;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

/**
 * The HasItems interface represents a component that can contain a collection of items.
 * It provides methods for adding, removing, and manipulating items within the component.
 *
 * @param <E> the element type of the main component
 * @param <B> the builder type of the main component
 * @param <S> the type of the subcomponent (representing an item)
 */
public interface HasItems<E extends Element, B extends TypedBuilder<E, B>, S>
        extends Iterable<S>, TypedBuilder<E, B>, IsElement<E> {

    default <T> B addItems(Iterable<T> items, Function<T, S> display) {
        for (T item : items) {
            S subComponent = display.apply(item);
            addItem(subComponent);
        }
        return that();
    }

    default B addItem(S item) {
        return add(item);
    }

    B add(S item);

    int size();

    boolean isEmpty();

    void clear();
}
