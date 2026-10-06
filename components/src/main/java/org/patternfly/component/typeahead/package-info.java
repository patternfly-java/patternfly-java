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
 * Typeahead support for PatternFly Java components.
 *
 * <p>This package provides the building blocks for components that combine a text input with a menu to provide
 * typeahead/autocomplete behavior. The typeahead system is driven by a
 * {@link org.patternfly.component.typeahead.RefreshStrategy} that evaluates each input change and returns a
 * {@link org.patternfly.component.typeahead.Decision}:
 *
 * <ul>
 *     <li>{@link org.patternfly.component.typeahead.Decision#refresh()} — re-query the server immediately</li>
 *     <li>{@link org.patternfly.component.typeahead.Decision#debounce(int)} — re-query the server after a debounce timeout</li>
 *     <li>{@link org.patternfly.component.typeahead.Decision#filter()} — filter existing items locally, no server call</li>
 *     <li>{@link org.patternfly.component.typeahead.Decision#keep()} — do nothing, keep the current menu state as-is</li>
 * </ul>
 *
 * <h2>Key Classes and Interfaces</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.typeahead.RefreshStrategy} — decides what to do with a typeahead input value; use one
 *         of the static convenience factories ({@link org.patternfly.component.typeahead.RefreshStrategy#everyInput(int)
 *         everyInput}, {@link org.patternfly.component.typeahead.RefreshStrategy#structuralChange(java.util.function.BiPredicate)
 *         structuralChange}) or implement directly for custom logic</li>
 *     <li>{@link org.patternfly.component.typeahead.Decision} — the outcome of a strategy evaluation</li>
 *     <li>{@link org.patternfly.component.typeahead.Typeahead} — interface for components that provide typeahead behavior</li>
 *     <li>{@link org.patternfly.component.typeahead.TypeaheadController} — manages typeahead input handling state and delegates
 *         between refresh, debounce, and local filter modes</li>
 * </ul>
 *
 * <h2>Implementing Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.menu.SingleSelectTypeahead} — single-select dropdown with typeahead</li>
 *     <li>{@link org.patternfly.component.menu.MultiSelectTypeahead} — multi-select dropdown with typeahead</li>
 *     <li>{@link org.patternfly.component.textinputgroup.SearchInputGroupTypeahead} — inline search input with autocomplete menu</li>
 *     <li>{@link org.patternfly.component.textinputgroup.FilterInputGroupTypeahead} — inline filter input with autocomplete menu</li>
 * </ul>
 *
 * @see org.patternfly.component.typeahead.RefreshStrategy
 * @see org.patternfly.component.typeahead.TypeaheadController
 * @see org.patternfly.async
 */
package org.patternfly.component.typeahead;
