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
 * Template package serving as a blueprint for creating new PatternFly Java components.
 *
 * <p>This package contains template classes that demonstrate the required structure, conventions, and patterns for
 * implementing PatternFly components. It is not a functional component — it exists solely as a reference for code
 * generation and consistency.
 *
 * <h2>Package structure</h2>
 *
 * <p>A component package typically contains these classes:
 *
 * <ul>
 *     <li>{@link org.patternfly.component.template.TemplateComponent} — The main component class extending
 *     {@link org.patternfly.component.BaseComponent}. Contains the static factory method, item management,
 *     modifier interfaces, event handlers, and public API.</li>
 *     <li>{@link org.patternfly.component.template.TemplateSubComponent} — Abstract base class for all
 *     sub-components, extending {@link org.patternfly.component.SubComponent} with the correct
 *     {@link org.patternfly.component.ComponentType}.</li>
 *     <li>{@link org.patternfly.component.template.TemplateItem} — A concrete sub-component with its own factory
 *     method, identifier, context data, and event handlers.</li>
 * </ul>
 *
 * <h2>Code sections</h2>
 *
 * <p>All component and sub-component classes must organize their code using section markers in this order:
 *
 * <ol>
 *     <li>{@code factory} — Static factory methods</li>
 *     <li>{@code instance} — Constants, fields, and the constructor</li>
 *     <li>{@code add} — Methods to add sub-components</li>
 *     <li>{@code builder} — Builder methods returning {@code this}</li>
 *     <li>{@code aria} — ARIA attribute methods</li>
 *     <li>{@code events} — Event handler registration methods</li>
 *     <li>{@code api} — Public API methods (getters, actions, state changes)</li>
 *     <li>{@code internal} — Package-private or private helper methods</li>
 * </ol>
 *
 * <h2>Usage</h2>
 *
 * <p>Creating a template component with items:
 *
 * {@snippet :
 * import static org.patternfly.component.template.TemplateComponent.template;
 * import static org.patternfly.component.template.TemplateItem.templateItem;
 *
 * template()
 *         .add(templateItem("item-1"))
 *         .add(templateItem("item-2"))
 *         .add(templateItem("item-3"))
 *         .compact()
 *         .onSelect((event, item, selected) -> {});
 * }
 *
 * @see org.patternfly.component.template.TemplateComponent
 * @see org.patternfly.component.template.TemplateSubComponent
 * @see org.patternfly.component.template.TemplateItem
 */
package org.patternfly.component.template;
