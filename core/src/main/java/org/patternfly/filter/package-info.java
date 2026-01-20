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
/**
 * Flexible filtering API for objects with support for multiple attributes and operators.
 *
 * <p>This package provides a composable filtering system that allows you to define filter attributes, combine them
 * with logical operators, and apply them to collections or individual objects. Filters support change notifications,
 * persistence, and can be integrated with data providers and UI components.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.filter.Filter} - Main filter class that holds multiple attributes and evaluates them</li>
 *     <li>{@link org.patternfly.filter.FilterAttribute} - Represents a single filterable attribute with a name, value, and condition</li>
 *     <li>{@link org.patternfly.filter.FilterCondition} - Functional interface that defines how to match an object against a value</li>
 *     <li>{@link org.patternfly.filter.FilterOperator} - Enum for combining attributes (AND/OR)</li>
 *     <li>{@link org.patternfly.filter.FilterChangeHandler} - Handler for filter state change notifications</li>
 *     <li>{@link org.patternfly.filter.FilterAttributeModifier} - Function for custom attribute value modification logic</li>
 * </ul>
 *
 * <h2>Basic Usage</h2>
 *
 * <p>Create a filter with multiple attributes, set values, and apply it to a collection:
 *
 * {@snippet :
 * // Create a filter combining attributes with AND
 * Filter<User> filter = new Filter<>(FilterOperator.AND);
 *
 * // Add filter attributes with conditions
 * filter.add(new FilterAttribute<>("name", (user, value) -> user.name().contains(value)));
 * filter.add(new FilterAttribute<>("active", (user, value) -> user.isActive() == value));
 *
 * // Set filter values
 * filter.set("name", "John");
 * filter.set("active", true);
 *
 * // Apply filter to a list
 * List<User> filtered = filter.filter(allUsers);
 *
 * // Or match a single object
 * boolean matches = filter.match(user);
 * }
 *
 * <h2>Features</h2>
 *
 * <h3>Logical Operators</h3>
 * <p>Combine multiple filter attributes using {@link org.patternfly.filter.FilterOperator#AND} or
 * {@link org.patternfly.filter.FilterOperator#OR}:
 *
 * {@snippet :
 * // Match users where name contains "John" OR email contains "john"
 * Filter<User> filter = new Filter<>(FilterOperator.OR)
 *     .add(new FilterAttribute<>("name", (u, v) -> u.name().contains(v)))
 *     .add(new FilterAttribute<>("email", (u, v) -> u.email().contains(v)));
 * }
 *
 * <h3>Change Notifications</h3>
 * <p>Register handlers to be notified when filter state changes:
 *
 * {@snippet :
 * filter.onChange((f, origin) -> {
 *     console.log("Filter changed from: " + origin);
 *     updateUI(f.filter(users));
 * });
 * }
 *
 * <h3>Persistence</h3>
 * <p>Save and restore filter state using string serialization:
 *
 * {@snippet :
 * // Mark attributes as persistent
 * filter.add(new FilterAttribute<>("name", true, nameCondition));
 *
 * // Save filter state
 * String state = filter.save();
 *
 * // Later, restore filter state
 * filter.load(state);
 * }
 *
 * <h3>Custom Attribute Modifiers</h3>
 * <p>Control how attribute values are updated using {@link org.patternfly.filter.FilterAttributeModifier}:
 *
 * {@snippet :
 * // Toggle boolean values instead of replacing them
 * filter.set("flag", true, (oldValue, newValue) -> !oldValue);
 * }
 *
 * <h2>Integration with Data Provider</h2>
 *
 * <p>Filters work seamlessly with {@link org.patternfly.dataprovider.DataProvider}:
 *
 * {@snippet :
 * Filter<User> filter = new Filter<>(FilterOperator.AND)
 *     .add(new FilterAttribute<>("search", (u, v) -> u.name().contains(v)));
 *
 * DataProvider<User> dataProvider = new DataProvider<>(User::id);
 *
 * filter.onChange((f, origin) -> {
 *     dataProvider.addFilter("user-filter", user -> f.match(user));
 * });
 * }
 *
 * @see org.patternfly.filter.Filter
 * @see org.patternfly.filter.FilterAttribute
 * @see org.patternfly.dataprovider.DataProvider
 */
package org.patternfly.filter;