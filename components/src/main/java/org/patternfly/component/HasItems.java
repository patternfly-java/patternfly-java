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

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

/**
 * The HasItems interface represents a component that can contain a collection of items. It provides methods for adding,
 * removing, and manipulating items within the component.
 * <p>
 * The child component must implement {@link HasIdentifier} and often also implements
 * {@link org.patternfly.core.ComponentContext}.
 * <p>
 * {@snippet class = HasItemsDemo region = hasItems}
 *
 * @param <E> the element type of the main component
 * @param <C> the type of the main component
 * @param <S> the type of the subcomponent (representing an item)
 */
public interface HasItems<E extends Element, C extends HasItems<E, C, S>, S extends HasIdentifier<? extends HTMLElement, ?>>
        extends Iterable<S>, TypedBuilder<E, C>, IsElement<E> {

    /**
     * Adds a collection of items to the component. The method applies the provided function to each item in the given iterable
     * to transform it into a subcomponent, which is then added to the component.
     *
     * @param <T>     the type of the items in the iterable
     * @param items   the iterable collection of items to be added
     * @param display the function used to transform each item into a subcomponent
     * @return the builder instance after adding the items
     */
    default <T> C addItems(Iterable<T> items, Function<T, S> display) {
        for (T item : items) {
            S subComponent = display.apply(item);
            addItem(subComponent);
        }
        return that();
    }

    /**
     * Adds a single item to the component.
     *
     * @param item the item to be added
     * @return the builder instance after adding the item
     */
    default C addItem(S item) {
        return add(item);
    }

    /**
     * Adds an item to the component.
     *
     * @param item the item to be added to the component
     * @return the builder instance after the item has been added
     */
    C add(S item);

    /**
     * Registers a callback to be invoked whenever a new item is added to the component.
     *
     * @param onAdd a {@link AddItemHandler} that takes the builder instance and the item being added as arguments
     * @return the builder instance after adding the callback
     */
    C onAdd(AddItemHandler<C, S> onAdd);

    /**
     * Retrieves a list of all items contained in the component.
     *
     * @return a list of items of type {@code S} contained in the component
     */
    default List<S> items() {
        List<S> items = new ArrayList<>();
        this.forEach(items::add);
        return items;
    }

    /**
     * Retrieves the total number of items currently contained in the component.
     *
     * @return the number of items contained in the component
     */
    int size();

    /**
     * Checks whether the collection of items in the component is empty.
     *
     * @return {@code true} if the component contains no items; {@code false} otherwise
     */
    boolean isEmpty();

    /**
     * Checks whether the component contains an item associated with the given identifier.
     *
     * @param identifier the identifier of the item to be checked
     * @return true if the component contains an item associated with the provided identifier, false otherwise
     */
    boolean contains(String identifier);

    /**
     * Retrieves the item associated with the specified identifier from the component.
     *
     * @param identifier the identifier of the item to be retrieved
     * @return the item associated with the given identifier, or {@code null} if no item is found
     */
    S item(String identifier);

    /**
     * Updates an item in the component by applying a transformation function to the item and updating the resulting component.
     *
     * @param <T>     the type of the input item
     * @param item    the item to be updated
     * @param display the function used to transform the input item into a component
     */
    default <T> void updateItem(T item, Function<T, S> display) {
        updateItem(display.apply(item));
    }

    /**
     * Updates an item in the component identified by a given identifier. The item is obtained using the identifier and then
     * updated in the component.
     *
     * @param identifier the identifier of the item to be updated
     */
    default void updateItem(String identifier) {
        updateItem(item(identifier));
    }

    /**
     * Updates an existing item in the component.
     *
     * @param item the item to be updated
     */
    void updateItem(S item);

    /**
     * Registers a callback to be invoked whenever an item is updated in the component.
     *
     * @param onUpdate a {@link UpdateItemHandler} that takes the component, the previous state of the item, and the updated
     *                 state of the item as arguments
     * @return the builder instance after adding the callback
     */
    C onUpdate(UpdateItemHandler<C, S> onUpdate);

    /**
     * Replaces an existing item in the component with a new item. If an item with the same identifier exists, its element is
     * replaced with the element of the provided item, and a callback action is executed after the update.
     * <p>
     * This method can be used when implementing the {@link #updateItem(String)} method. It is not meant to be used directly!
     *
     * @param item         the new item to replace the existing item
     * @param whenReplaced a callback action to be executed after the item has been updated; it receives the old item and the
     *                     new item as arguments
     */
    default void replaceItemElement(S item, BiConsumer<S, S> whenReplaced) {
        if (item != null) {
            S old = item(item.identifier());
            if (old != null) {
                old.element().replaceWith(item.element());
                whenReplaced.accept(old, item);
            }
        }
    }

    /**
     * Removes an item from the component based on the provided identifier.
     *
     * @param identifier the identifier of the item to be removed
     */
    void removeItem(String identifier);

    /**
     * Registers a callback to be invoked whenever an item is removed from the component.
     *
     * @param onRemove a {@link RemoveItemHandler} that takes the component and the item being removed as arguments
     * @return the builder instance after adding the callback
     */
    C onRemove(RemoveItemHandler<C, S> onRemove);

    /**
     * Clears all items from the component. This method removes any existing items within the component, leaving it empty. Any
     * associated or registered callbacks related to the removal of items may be invoked as part of this operation.
     */
    void clear();
}
