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
 * A functional interface that defines a handler invoked when an item is updated in a component implementing {@link HasItems}.
 *
 * @param <C> the type of the component containing the items, which extends {@link HasItems}
 * @param <S> the type of the items being updated, which extends {@link HasIdentifier}
 */
@FunctionalInterface
public interface UpdateItemHandler<C extends HasItems<?, ?, ?>, S extends HasIdentifier<?, ?>> {

    /**
     * Invoked when an item is updated in a component implementing {@link HasItems}.
     *
     * @param component the component containing the items, which extends {@link HasItems}
     * @param oldItem   the previous state of the item before the update
     * @param newItem   the updated state of the item
     */
    void onUpdate(C component, S oldItem, S newItem);
}
