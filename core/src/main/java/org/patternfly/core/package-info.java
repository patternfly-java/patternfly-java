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
 * Core classes and interfaces for PatternFly Java.
 *
 * <p>This package provides the foundational building blocks used throughout PatternFly Java components and layouts. It
 * includes utilities for ARIA attributes, data attributes, component context management, observable values, and common types.
 *
 * <h2>Key Classes and Interfaces</h2>
 *
 * <h3>ARIA and Data Attributes</h3>
 * <ul>
 *     <li>{@link org.patternfly.core.Aria} - Constants for ARIA attribute names (aria-label, aria-expanded, etc.)</li>
 *     <li>{@link org.patternfly.core.Attributes} - Common HTML attribute constants</li>
 *     <li>{@link org.patternfly.core.Dataset} - Constants for data-* attribute names used in PatternFly components</li>
 *     <li>{@link org.patternfly.core.Roles} - Constants for ARIA role attribute values</li>
 *     <li>{@link org.patternfly.core.Ouia} - Open UI Automation (OUIA) data attribute constants for testing</li>
 * </ul>
 *
 * <h3>Component Infrastructure</h3>
 * <ul>
 *     <li>{@link org.patternfly.core.ComponentContext} - Interface for storing and retrieving arbitrary values within a component</li>
 *     <li>{@link org.patternfly.core.ObservableValue} - A value wrapper that notifies subscribers when changed, enabling reactive patterns</li>
 *     <li>{@link org.patternfly.core.AsyncStatus} - Enumeration representing asynchronous operation states</li>
 * </ul>
 *
 * <h3>Utilities</h3>
 * <ul>
 *     <li>{@link org.patternfly.core.Tuple} and {@link org.patternfly.core.Tuples} - Simple key-value pair types</li>
 *     <li>{@link org.patternfly.core.Numbers} - Numeric utility functions</li>
 *     <li>{@link org.patternfly.core.Timeouts} - Common timeout constants</li>
 *     <li>{@link org.patternfly.core.Validation} - Validation helpers for property ranges and enums</li>
 *     <li>{@link org.patternfly.core.LanguageDirection} - Language direction enumeration (LTR/RTL)</li>
 *     <li>{@link org.patternfly.core.Version} - Version information for the PatternFly Java library</li>
 * </ul>
 *
 * <h2>Integration with Elemento</h2>
 *
 * <p>PatternFly Java builds upon <a href="https://github.com/hal/elemento">Elemento's builder API</a>, providing a fluent,
 * type-safe approach to creating web components. The {@link org.patternfly.core.ComponentContext} interface extends Elemento's
 * {@code TypedBuilder} to provide consistent builder patterns across all PatternFly components.
 *
 * <h2>Observable Values</h2>
 *
 * <p>The {@link org.patternfly.core.ObservableValue} class enables reactive programming patterns by allowing components to
 * subscribe to value changes. Example usage:
 *
 * {@snippet :
 * ObservableValue<String> value = ObservableValue.ov("initial");
 * value.subscribe((current, previous) -> console.log("Value changed: " + current));
 * value.set("new value"); // Triggers subscriber notification
 * }
 *
 * @see <a href="https://www.patternfly.org/">PatternFly Design System</a>
 * @see <a href="https://patternfly-java.github.io/">PatternFly Java Documentation</a>
 * @see <a href="https://hal-console.gitbook.io/elemento/builder-api">Elemento Builder API</a>
 */
package org.patternfly.core;