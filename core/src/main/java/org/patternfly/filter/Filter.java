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
package org.patternfly.filter;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

import static java.util.stream.Collectors.joining;
import static java.util.stream.StreamSupport.stream;
import static org.patternfly.filter.FilterOperator.AND;

/**
 * A class representing a filter that can be applied to a list of objects ({@link #filter(List)}) or to a single object
 * ({@link #match(Object)}).
 * <p>
 * A filter is made up of a list of {@link FilterAttribute}s. These attributes can be assigned a value, evaluated, and reset.
 * Multiple {@link FilterAttribute}s are combined with {@link FilterOperator#AND} or {@link FilterOperator#OR}.
 * <p>
 * The filter class supports change notifications whenever the filter state changes via the {@link #onChange(Consumer)} method
 * and can be persisted using {@link #save()} and {@link #load(String)} methods.
 * <p>
 * {@snippet class = FilterDemo region = filter}
 *
 * @param <T> The type of object that this filter will be applied to.
 */
public class Filter<T> implements Iterable<FilterAttribute<T, ?>> {

    // ------------------------------------------------------ instance

    private static final String FILTER_ATTRIBUTE_SEPARATOR = "|";
    private static final String FILTER_ATTRIBUTE_SEPARATOR_REGEX = "\\|";
    private static final String NAME_VALUE_SEPARATOR = "=";
    private final FilterOperator operator;
    private final LinkedHashMap<String, FilterAttribute<T, ?>> attributes;
    private final List<Consumer<Filter<T>>> changeHandler;

    public Filter(FilterOperator operator) {
        this.operator = operator;
        this.attributes = new LinkedHashMap<>();
        this.changeHandler = new ArrayList<>();
    }

    @Override
    public String toString() {
        return attributes.values().toString();
    }

    // ------------------------------------------------------ api

    public <V> void add(FilterAttribute<T, V> attribute) {
        attributes.put(attribute.name, attribute);
    }

    @Override
    public Iterator<FilterAttribute<T, ?>> iterator() {
        return attributes.values().iterator();
    }

    /**
     * Filters a list of objects based on the attributes defined in this filter.
     *
     * @param objects the list of objects to be filtered
     * @return a list of objects that match the filter criteria
     */
    public List<T> filter(List<T> objects) {
        return filter(objects, null);
    }

    /**
     * Filters a list of objects based on the attributes defined in this filter and calls the specified callback for each object
     * indicating whether it matches the filter criteria.
     *
     * @param objects  the list of objects to be filtered
     * @param callback a callback that is executed for each object, receiving the object and a boolean indicating whether the
     *                 object matches the filter criteria
     * @return a list of objects that match the filter criteria
     */
    public List<T> filter(List<T> objects, BiConsumer<T, Boolean> callback) {
        if (defined() && objects != null) {
            List<T> matches = new ArrayList<>();
            for (T object : objects) {
                if (object != null) {
                    boolean match = match(object);
                    if (callback != null) {
                        callback.accept(object, match);
                    }
                    if (match) {
                        matches.add(object);
                    }
                }
            }
            return matches;
        }
        return objects;
    }

    /**
     * Matches an object against the filter criteria defined in the filter attributes.
     *
     * @param object the object to be tested against the filter criteria
     * @return true if the object matches the filter criteria, false otherwise
     */
    public boolean match(T object) {
        if (attributes.isEmpty() || !defined()) {
            return false;
        }

        boolean matches = operator == AND;
        for (FilterAttribute<T, ?> filterValue : this) {
            if (filterValue.defined()) {
                if (operator == AND) {
                    matches = matches && filterValue.match(object);
                } else {
                    matches = matches || filterValue.match(object);
                }
            }
        }
        return matches;
    }

    /**
     * Checks if any of the filter attributes in this filter is defined.
     *
     * @return true if at least one filter attribute is defined, false otherwise
     */
    public boolean defined() {
        return attributes.values().stream().anyMatch(FilterAttribute::defined);
    }

    /**
     * Retrieves the filter attribute associated with the given name.
     *
     * @param name the name of the filter attribute to retrieve
     * @param <V>  the type of the value for the filter attribute
     * @return the filter attribute associated with the given name, or null if no such attribute exists
     */
    @SuppressWarnings("unchecked")
    public <V> FilterAttribute<T, V> get(String name) {
        FilterAttribute<T, ?> filterAttribute = attributes.get(name);
        if (filterAttribute != null) {
            return (FilterAttribute<T, V>) filterAttribute;
        }
        return null;
    }

    /**
     * Sets the value of the filter attribute with the specified name. If the attribute exists and its value is updated, the
     * change handlers are notified.
     *
     * @param name  the name of the filter attribute to set
     * @param value the new value to be set for the filter attribute
     * @param <V>   the type of the value for the filter attribute
     */
    @SuppressWarnings("unchecked")
    public <V> void set(String name, V value) {
        FilterAttribute<T, ?> filterAttribute = attributes.get(name);
        if (filterAttribute != null) {
            FilterAttribute<T, V> tfa = (FilterAttribute<T, V>) filterAttribute;
            if (tfa.set(value)) {
                notifyChangeHandlers();
            }
        }
    }

    /**
     * Resets the filter attribute with the specified name to its initial value. If the attribute is successfully reset, the
     * change handlers are notified.
     *
     * @param name the name of the filter attribute to reset
     */
    public void reset(String name) {
        if (resetInternal(name)) {
            notifyChangeHandlers();
        }
    }

    /**
     * Resets all filter attributes to their initial values. If any attributes were reset, the change handlers are notified.
     */
    public void resetAll() {
        boolean anyReset = false;
        for (FilterAttribute<T, ?> filterAttribute : attributes.values()) {
            anyReset = anyReset || filterAttribute.reset();
        }
        if (anyReset) {
            notifyChangeHandlers();
        }
    }

    /**
     * Serializes the persistent and defined filter attributes into a string representation. The format of the string includes
     * each attribute's name and its corresponding value, separated by a predefined name-value separator. Each attribute pair is
     * joined by a filter attribute separator.
     *
     * @return a string representation of the persistent and defined filter attributes
     */
    public String save() {
        return stream(spliterator(), false)
                .filter(filterAttribute -> filterAttribute.persistent && filterAttribute.defined())
                .map(filterAttribute -> filterAttribute.name + NAME_VALUE_SEPARATOR + filterAttribute.valueAsString())
                .collect(joining(FILTER_ATTRIBUTE_SEPARATOR));
    }

    /**
     * Loads and applies filter attributes from a string representation. The input string should contain name-value pairs
     * separated by a predefined separator. Each name-value pair is split using a specified name-value separator. If a specified
     * attribute is found in this filter, it will have its value loaded from the corresponding value in the name-value pair.
     *
     * @param filter a string representation of the filter attributes, where each attribute is represented as a name-value pair
     *               and pairs are separated by a specific separator.
     */
    public void load(String filter) {
        if (filter != null && !filter.trim().isEmpty()) {
            String[] parts = filter.split(FILTER_ATTRIBUTE_SEPARATOR_REGEX);
            for (String part : parts) {
                if (part != null && part.contains(NAME_VALUE_SEPARATOR)) {
                    String[] nv = part.split(NAME_VALUE_SEPARATOR, 2);
                    FilterAttribute<T, ?> filterAttribute = attributes.get(nv[0]);
                    if (filterAttribute != null) {
                        filterAttribute.loadValue(nv[1]);
                    }
                }
            }
        }
    }

    /**
     * Registers a change handler that will be called whenever the filter is changed.
     *
     * @param changeHandler the change handler to be registered
     * @return the current filter instance with the registered change handler
     */
    public Filter<T> onChange(Consumer<Filter<T>> changeHandler) {
        this.changeHandler.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ internal

    private boolean resetInternal(String name) {
        FilterAttribute<T, ?> filterAttribute = attributes.get(name);
        if (filterAttribute != null) {
            return filterAttribute.reset();
        }
        return false;
    }

    private void notifyChangeHandlers() {
        for (Consumer<Filter<T>> ch : changeHandler) {
            ch.accept(this);
        }
    }
}
