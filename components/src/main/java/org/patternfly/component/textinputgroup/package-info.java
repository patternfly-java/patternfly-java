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
 * Provides text input group components for search, filter, and text input with utilities.
 *
 * <p>A text input group is an input component with additional capabilities such as icons, search utilities (clear
 * button), and filter labels. This package includes a base text input group, a search input with built-in clear
 * functionality, and a filter input that supports adding and removing filter labels.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.textinputgroup.TextInputGroup} - Base text input group</li>
 *     <li>{@link org.patternfly.component.textinputgroup.SearchInput} - Text input with search and clear utilities</li>
 *     <li>{@link org.patternfly.component.textinputgroup.FilterInput} - Text input with filter label management</li>
 *     <li>{@link org.patternfly.component.textinputgroup.TextInputGroupUtilities} - Utility buttons (clear, etc.)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a basic text input group or a search input with an icon:
 *
 * {@snippet :
 * import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
 * import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
 * import static org.patternfly.icon.IconSets.fas.search;
 *
 * // Basic text input group
 * TextInputGroup basic = textInputGroup("my-input");
 *
 * // Disabled text input group
 * TextInputGroup disabled = textInputGroup("disabled-input", "Disabled").disabled();
 *
 * // Search input with icon
 * SearchInput searchInput = searchInput("search-0").icon(search());
 * }
 *
 * <p>Create a filter input with label management:
 *
 * {@snippet :
 * import static org.patternfly.component.textinputgroup.FilterInput.filterInput;
 * import static org.patternfly.icon.IconSets.fas.search;
 *
 * FilterInput filterInput = filterInput("filter-0").icon(search())
 *         .allowDuplicates(false)
 *         .onAdd((fi, filter) -> console.log("Filter added: " + filter.text()))
 *         .onRemove((fi, filter) -> console.log("Filter removed: " + filter.text()));
 * }
 *
 * @see org.patternfly.component.textinputgroup.TextInputGroup
 * @see org.patternfly.component.textinputgroup.SearchInput
 * @see org.patternfly.component.textinputgroup.FilterInput
 * @see <a href="https://www.patternfly.org/components/text-input-group">PatternFly Text Input Group</a>
 */
package org.patternfly.component.textinputgroup;