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
 * Provides the PatternFly badge component for displaying counts and status indicators.
 *
 * <p>A badge is used to annotate other information like a label or an object name. Badges are typically used to
 * reflect counts such as the number of unread items or the number of objects in a collection. They can be displayed
 * in a read or unread state and support custom display formatting and value limits.
 *
 * <h2>Usage</h2>
 *
 * <p>Read and unread badges:
 *
 * {@snippet :
 * Badge readBadge = badge(7).read();
 * Badge unreadBadge = badge(24).unread();
 * Badge limitedBadge = badge(1000).limit(999).unread();
 * }
 *
 * <p>Badges with custom display formatting:
 *
 * {@snippet :
 * Badge customBadge = badge(7).read()
 *     .display(v -> v + " items");
 * Badge limitedCustom = badge(1000).limit(999).unread()
 *     .display(v -> v + " items")
 *     .maxDisplay(v -> "More than you can handle");
 * }
 *
 * @see org.patternfly.component.badge.Badge
 * @see <a href="https://www.patternfly.org/components/badge">PatternFly Badge</a>
 */
package org.patternfly.component.badge;