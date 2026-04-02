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
 * Provides the PatternFly divider component for visually separating content with a horizontal or vertical line.
 * <p>
 * A divider is a horizontal or vertical line that is placed between content to create visual separation. Dividers can be
 * rendered as {@code <hr>}, {@code <li>}, or {@code <div>} elements depending on the context. The divider supports insets
 * and orientation switching at various breakpoints.
 *
 * <h2>Usage</h2>
 *
 * A simple horizontal divider using an {@code <hr>} element:
 *
 * {@snippet :
 * import static org.patternfly.component.divider.Divider.divider;
 * import static org.patternfly.component.divider.DividerType.hr;
 *
 * divider(hr);
 * }
 *
 * A vertical divider in a flex layout:
 *
 * {@snippet :
 * import static org.patternfly.component.divider.Divider.divider;
 * import static org.patternfly.component.divider.DividerType.hr;
 * import static org.patternfly.layout.flex.Flex.flex;
 * import static org.patternfly.layout.flex.FlexItem.flexItem;
 * import static org.patternfly.style.Breakpoint.default_;
 * import static org.patternfly.style.Breakpoints.breakpoints;
 * import static org.patternfly.style.Orientation.vertical;
 *
 * flex()
 *         .addItem(flexItem().text("First item"))
 *         .add(divider(hr).orientation(breakpoints(default_, vertical)))
 *         .addItem(flexItem().text("Second item"));
 * }
 *
 * @see Divider
 * @see DividerType
 * @see <a href="https://www.patternfly.org/components/divider">PatternFly Divider</a>
 */
package org.patternfly.component.divider;