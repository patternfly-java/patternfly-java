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
 * Common event handler interfaces used throughout PatternFly Java components.
 *
 * <p>This package defines functional interfaces for handling various component events in a type-safe manner.
 * All handlers follow a consistent pattern: they accept a DOM event, the component that triggered the event,
 * and event-specific data. Components register these handlers using {@code on<Event>()} methods.
 *
 * <h2>Handler Interfaces</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.handler.ComponentHandler} - Generic handler accepting a component</li>
 *     <li>{@link org.patternfly.handler.ChangeHandler} - Handler for value change events with old and new values</li>
 *     <li>{@link org.patternfly.handler.SelectHandler} - Handler for selection events with selected state</li>
 *     <li>{@link org.patternfly.handler.MultiSelectHandler} - Handler for multi-selection events with list of selected items</li>
 *     <li>{@link org.patternfly.handler.ToggleHandler} - Handler for expand/collapse toggle events</li>
 *     <li>{@link org.patternfly.handler.CloseHandler} - Handler for close/dismiss events</li>
 *     <li>{@link org.patternfly.handler.ResizeHandler} - Handler for resize events with dimensions</li>
 * </ul>
 *
 * <h2>Usage Examples</h2>
 *
 * <h3>Change Handler</h3>
 * <p>Handle value changes in form components:
 *
 * {@snippet :
 * TextInput input = textInput("username")
 *     .onChange((event, component, value) -> {
 *         console.log("Username changed to: " + value);
 *         validateUsername(value);
 *     });
 * }
 *
 * <h3>Selection Handler</h3>
 * <p>Respond to selection events in lists and tables:
 *
 * {@snippet :
 * DataList<User> dataList = dataList(dataProvider)
 *     .onSelect((event, item, selected) -> {
 *         console.log("User " + item.name() + " selected: " + selected);
 *     });
 * }
 *
 * <h3>Toggle Handler</h3>
 * <p>Handle expand/collapse state in expandable components:
 *
 * {@snippet :
 * Drawer drawer = drawer()
 *     .onToggle((event, component, expanded) -> {
 *         console.log("Drawer expanded: " + expanded);
 *         if (expanded) {
 *             loadDrawerContent();
 *         }
 *     });
 * }
 *
 * <h3>Close Handler</h3>
 * <p>Perform cleanup when components are closed:
 *
 * {@snippet :
 * Alert alert = alert("Success", "Operation completed")
 *     .onClose((event, component) -> {
 *         console.log("Alert dismissed");
 *         removeFromDOM(component);
 *     });
 * }
 *
 * <h2>Handler Registration Pattern</h2>
 *
 * <p>Components follow a consistent pattern for registering handlers. Methods are named {@code on<Event>()} and
 * return the component to enable method chaining:
 *
 * {@snippet :
 * Switch switch_ = switch_("enable-feature")
 *     .value(false)
 *     .onChange((e, c, value) -> console.log("Switch: " + value))
 *     .onToggle((e, c, checked) -> updateFeatureState(checked));
 * }
 *
 * <h2>Functional Interface Benefits</h2>
 *
 * <p>All handler interfaces are marked with {@code @FunctionalInterface}, enabling:
 * <ul>
 *     <li>Lambda expressions for concise event handling</li>
 *     <li>Method references for even more compact code</li>
 *     <li>Type safety with compile-time checking</li>
 *     <li>Clear IDE support with parameter hints</li>
 * </ul>
 *
 * @see <a href="https://patternfly-java.github.io/apidocs/org/patternfly/handler/package-summary.html">Handler API Documentation</a>
 */
package org.patternfly.handler;