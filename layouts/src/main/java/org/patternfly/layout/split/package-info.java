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
 * Provides the PatternFly split layout for distributing content horizontally with support for a fill item, wrapping, and
 * spacing control.
 * <p>
 * The split layout positions items side by side. One item can use {@code fill()} to take up the remaining horizontal space.
 * The layout also supports gutters for spacing and wrapping when items overflow.
 *
 * <h2>Usage</h2>
 *
 * A basic split layout with a fill item:
 *
 * {@snippet :
 * import static org.patternfly.layout.split.Split.split;
 * import static org.patternfly.layout.split.SplitItem.splitItem;
 *
 * split()
 *         .addItem(splitItem().text("content"))
 *         .addItem(splitItem().fill().text("pf-m-fill"))
 *         .addItem(splitItem().text("content"));
 * }
 *
 * A wrappable split layout with gutters:
 *
 * {@snippet :
 * import static org.patternfly.layout.split.Split.split;
 * import static org.patternfly.layout.split.SplitItem.splitItem;
 *
 * split().wrap().gutter()
 *         .addItem(splitItem().text("content"))
 *         .addItem(splitItem().text("content"))
 *         .addItem(splitItem().text("content"))
 *         .addItem(splitItem().text("content"));
 * }
 *
 * @see Split
 * @see SplitItem
 * @see <a href="https://www.patternfly.org/layouts/split">PatternFly Split</a>
 */
package org.patternfly.layout.split;