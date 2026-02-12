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

import java.util.Comparator;
import java.util.TreeSet;

import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static java.util.Comparator.comparing;
import static org.jboss.elemento.Elements.insertBefore;

/**
 * The Ordered interface can be implemented by components that maintain its elements in a specific order. It extends the
 * {@link HasItems} interface. By default, the order is determined by the {@link #defaultOrder()} method which in turn
 * determines the order based on the elements data {@value #DATA_ORDER} attribute. The order is maintained as elements are
 * {@linkplain HasItems#add(Object) added} to the component.
 *
 * @param <E> the type of the main element
 * @param <B> the type of the builder for chaining methods
 * @param <S> the type of components being ordered
 */
public interface Ordered<E extends Element, B extends TypedBuilder<E, B>, S extends IsElement<? extends HTMLElement>>
        extends HasItems<E, B, S> {

    String DATA_ORDER = "order";

    /**
     * Adds an item to the specified container in a predefined order. If a comparator is provided, the order is determined based
     * on the comparator; otherwise, the item is added directly to the container.
     *
     * @param container the container to which the item should be added
     * @param item      the item to be added to the container
     */
    default void addOrdered(ElementContainerMethods<?, ?> container, S item) {
        if (comparator() != null) {
            HTMLElement elementBefore = null;
            TreeSet<S> orderedItems = new TreeSet<>(comparator());
            orderedItems.addAll(items());
            for (S existing : orderedItems) {
                if (comparator().compare(item, existing) < 0) {
                    elementBefore = existing.element();
                    break;
                }
            }
            if (elementBefore != null) {
                insertBefore(item.element(), elementBefore);
            } else {
                container.add(item.element());
            }
        } else {
            container.add(item.element());
        }
    }

    /**
     * Provides a default comparator for ordering elements based on their {@value #DATA_ORDER} dataset value.
     *
     * @return a comparator that compares elements using the {@value #DATA_ORDER} attribute from their dataset
     */
    default Comparator<S> defaultOrder() {
        return comparing(o -> o.element().dataset.get(DATA_ORDER));
    }

    /**
     * Orders the elements contained in the component using the default comparator. The default comparator is based on the
     * {@value #DATA_ORDER} dataset attribute of the elements.
     *
     * @return the builder instance with the elements ordered
     */
    default B ordered() {
        return ordered(defaultOrder());
    }

    /**
     * Orders the elements contained in the component using the specified comparator. The comparator determines the order in
     * which the elements are arranged.
     *
     * @param comparator the comparator used to define the ordering of the elements
     * @return the builder instance with the elements ordered
     */
    B ordered(Comparator<S> comparator);

    /**
     * Retrieves the comparator used for ordering elements in a component.
     *
     * @return the comparator that determines the order of elements
     */
    Comparator<S> comparator();
}
