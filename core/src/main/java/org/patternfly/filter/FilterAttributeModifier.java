package org.patternfly.filter;

import java.util.Collection;
import java.util.function.Supplier;

/**
 * A functional interface for modifying filter attribute values. It can be used to define custom rules for how attribute values
 * should be modified.
 *
 * @param <V> the type of the attribute value
 */
@FunctionalInterface
public interface FilterAttributeModifier<V> {

    /**
     * Creates a {@code FilterAttributeModifier} for adding values to a collection. This modifier combines the current
     * collection value with a new collection value, appending elements from both collections.
     *
     * @param <E>               the type of elements in the collection
     * @param <V>               the type of the collection
     * @param collectionFactory a supplier that provides a new instance of the collection
     * @return a {@code FilterAttributeModifier} that adds elements from the new collection to the current collection
     */
    static <E, V extends Collection<E>> FilterAttributeModifier<V> collectionAdd(Supplier<V> collectionFactory) {
        return (current, value) -> {
            V newValue = collectionFactory.get();
            if (current != null) {
                newValue.addAll(current);
            }
            newValue.addAll(value);
            return newValue;
        };
    }

    /**
     * Creates a {@code FilterAttributeModifier} for removing values from a collection. This modifier combines the current
     * collection value with a new collection value, removing elements found in the new collection from the current collection.
     *
     * @param <E>               the type of elements in the collection
     * @param <V>               the type of the collection
     * @param collectionFactory a supplier that provides a new instance of the collection
     * @return a {@code FilterAttributeModifier} that removes elements from the current collection based on the new collection
     */
    static <E, V extends Collection<E>> FilterAttributeModifier<V> collectionRemove(Supplier<V> collectionFactory) {
        return (current, value) -> {
            V newValue = collectionFactory.get();
            if (current != null) {
                newValue.addAll(current);
            }
            newValue.removeAll(value);
            return newValue;
        };
    }

    /**
     * Modifies the given current attribute value with the specified new value based on custom rules.
     *
     * @param current the current value of the attribute
     * @param value   the new value to be applied to the attribute
     * @return the modified attribute value
     */
    V modify(V current, V value);
}
