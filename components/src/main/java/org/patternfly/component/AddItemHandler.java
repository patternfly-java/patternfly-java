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

/**
 * A functional interface that defines a handler for adding items to components. The handler is invoked when an item is added to
 * a component that implements the {@link HasItems} interface and where the item to be added implements the
 * {@link HasIdentifier} interface.
 *
 * @param <C> the type of the component that can contain items, extending {@link HasItems}
 * @param <S> the type of the item to be added, extending {@link HasIdentifier}
 */
@FunctionalInterface
public interface AddItemHandler<C extends HasItems<?, ?, ?>, S extends HasIdentifier<?, ?>> {

    /**
     * Handles the addition of an item to a component. This method is invoked when an item is added to a component that supports
     * items.
     *
     * @param component the component to which the item is being added
     * @param item      the item to be added to the component
     */
    void onAdd(C component, S item);
}
