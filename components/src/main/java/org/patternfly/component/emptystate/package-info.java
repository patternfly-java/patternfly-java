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
 * Provides the PatternFly empty state component and its subcomponents for displaying placeholder content when no data is
 * available.
 * <p>
 * An empty state is used to communicate that a page, section, or area of the UI has no data to show. It typically includes a
 * title, an icon, a description, and action buttons. Empty states support different sizes, status severities, and a loading
 * spinner variant.
 *
 * <h2>Usage</h2>
 *
 * A basic empty state with icon, body text, and actions:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.emptystate.EmptyState.emptyState;
 * import static org.patternfly.component.emptystate.EmptyStateActions.emptyStateActions;
 * import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
 * import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
 * import static org.patternfly.icon.IconSets.fas.cubes;
 *
 * emptyState()
 *         .text("Empty State")
 *         .icon(cubes())
 *         .addBody(emptyStateBody().text(
 *                 "This represents the empty state pattern in PatternFly."))
 *         .addFooter(emptyStateFooter()
 *                 .addActions(emptyStateActions()
 *                         .add(button("Primary action").primary()))
 *                 .addActions(emptyStateActions()
 *                         .add(button("Multiple").link())
 *                         .add(button("Action Buttons").link())));
 * }
 *
 * An empty state with a loading spinner:
 *
 * {@snippet :
 * import static org.patternfly.component.emptystate.EmptyState.emptyState;
 *
 * emptyState()
 *         .text("Loading...")
 *         .spinner("Loading...");
 * }
 *
 * @see EmptyState
 * @see EmptyStateActions
 * @see EmptyStateBody
 * @see EmptyStateFooter
 * @see <a href="https://www.patternfly.org/components/empty-state">PatternFly Empty state</a>
 */
package org.patternfly.component.emptystate;