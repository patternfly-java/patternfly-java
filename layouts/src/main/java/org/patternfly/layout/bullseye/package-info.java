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
 * Provides the PatternFly bullseye layout for centering content both vertically and horizontally within a container.
 * <p>
 * The bullseye layout is useful for centering a single piece of content, such as a login form, empty state, or loading
 * indicator, within a larger container.
 *
 * <h2>Usage</h2>
 *
 * Center content using the bullseye layout:
 *
 * {@snippet :
 * import static org.patternfly.layout.bullseye.Bullseye.bullseye;
 * import static org.patternfly.layout.bullseye.BullseyeItem.bullseyeItem;
 *
 * bullseye()
 *         .addItem(bullseyeItem()
 *                 .text("Centered content"));
 * }
 *
 * @see Bullseye
 * @see BullseyeItem
 * @see <a href="https://www.patternfly.org/layouts/bullseye">PatternFly Bullseye</a>
 */
package org.patternfly.layout.bullseye;