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
 * Functional interface for handling the removal of items from a component that contains a collection of items. This interface
 * is designed to provide a callback mechanism to be invoked whenever an item is removed from the associated component.
 *
 * @param <C> the type of the component that contains the items, which extends {@link HasItems}
 * @param <S> the type of the subcomponent representing an item, which extends {@link HasIdentifier}
 */
@FunctionalInterface
public interface RemoveItemHandler<C extends HasItems<?, ?, ?>, S extends HasIdentifier<?, ?>> {

    /**
     * Handles the removal of an item from a component containing a collection of items. This method is intended to be called
     * whenever an item is removed from the component, allowing for custom processing or updates related to the removal.
     *
     * @param component the component from which the item is removed
     * @param item      the item being removed from the component
     */
    void onRemove(C component, S item);
}
