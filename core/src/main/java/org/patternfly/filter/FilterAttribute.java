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

import java.util.Objects;

/**
 * Represents a filter attribute with a specified name, persistence flag, and filter condition. The attribute maintains a value
 * and a defined state, allowing it to determine if it matches a given object based on the defined filter condition.
 *
 * @param <T> the type of objects to be filtered
 * @param <V> the type of the attribute's value
 */
public class FilterAttribute<T, V> {

    // ------------------------------------------------------ instance

    protected final String name;
    protected final boolean persistent;
    private final FilterCondition<T, V> condition;
    private V value;
    private boolean defined;

    public FilterAttribute(String name, FilterCondition<T, V> condition) {
        this(name, false, condition);
    }

    public FilterAttribute(String name, boolean persistent, FilterCondition<T, V> condition) {
        this.name = name;
        this.persistent = persistent;
        this.condition = condition;
        this.value = initialValue();
        this.defined = false;
    }

    @Override
    public String toString() {
        return name + "=" + (defined ? value : "UNDEFINED");
    }

    // ------------------------------------------------------ api

    /**
     * Checks if the filter attribute has been defined with a specific value.
     *
     * @return true if the filter attribute is defined, false otherwise
     */
    public boolean defined() {
        return defined;
    }

    /**
     * Retrieves the current value of the filter attribute.
     *
     * @return the current value of the filter attribute
     */
    public V value() {
        return value;
    }

    // ------------------------------------------------------ internal

    /**
     * Checks if the given object matches the filter attribute's condition with its value.
     *
     * @param object the object to be tested against the filter attribute's condition
     * @return true if the object matches the condition, false otherwise
     */
    protected boolean match(T object) {
        return condition.match(object, this.value);
    }

    /**
     * Sets the value of the filter attribute. If the new value is equal to the initial value, the attribute is reset. If the
     * attribute is not yet defined, it will be defined with the new value. If the attribute is already defined and the new
     * value is different, the value is updated.
     *
     * @param value the new value to set for the filter attribute
     * @return true if the value of the attribute was changed, or it was defined; false if the value is the same
     */
    protected boolean set(V value) {
        if (Objects.equals(value, initialValue())) {
            return reset();
        } else {
            if (defined) {
                boolean newValue = !Objects.equals(this.value, value);
                if (newValue) {
                    this.value = value;
                }
                return newValue;
            } else {
                this.value = value;
                this.defined = true;
                return true;
            }
        }
    }

    /**
     * Resets the filter attribute to its initial value if it is currently defined. This method will also set the attribute to
     * an undefined state.
     *
     * @return true if the filter attribute was reset, false if it was already undefined
     */
    protected boolean reset() {
        if (defined) {
            value = initialValue();
            defined = false;
            return true;
        }
        return false;
    }

    /**
     * Returns the initial value of the filter attribute.
     *
     * @return the initial value of the filter attribute, which is null by default
     */
    protected V initialValue() {
        return null;
    }

    /**
     * Converts the current value of the filter attribute to its string representation.
     *
     * @return a string representation of the filter attribute's value
     */
    protected String valueAsString() {
        return String.valueOf(value);
    }

    /**
     * Loads a value into the filter attribute. This method acts as a no-operation by default and can be overridden by
     * subclasses to provide specific value-loading functionality.
     *
     * @param value the value to be loaded into the filter attribute
     */
    protected void loadValue(String value) {
        // noop
    }
}
