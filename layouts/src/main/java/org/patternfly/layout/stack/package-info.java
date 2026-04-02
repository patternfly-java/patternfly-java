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
 * Provides the PatternFly stack layout for positioning items vertically, with one or more items filling the available vertical
 * space.
 * <p>
 * The stack layout arranges items in a vertical column. One or more items can use {@code fill()} to expand and fill the
 * remaining vertical space. The layout also supports gutters for spacing between items.
 *
 * <h2>Usage</h2>
 *
 * A basic stack layout with a fill item:
 *
 * {@snippet :
 * import static org.patternfly.layout.stack.Stack.stack;
 * import static org.patternfly.layout.stack.StackItem.stackItem;
 *
 * stack()
 *         .addItem(stackItem().text("Header"))
 *         .addItem(stackItem().fill().text("Main content"))
 *         .addItem(stackItem().text("Footer"));
 * }
 *
 * A stack layout with gutters:
 *
 * {@snippet :
 * import static org.patternfly.layout.stack.Stack.stack;
 * import static org.patternfly.layout.stack.StackItem.stackItem;
 *
 * stack().gutter()
 *         .addItem(stackItem().text("Header"))
 *         .addItem(stackItem().fill().text("Main content"))
 *         .addItem(stackItem().text("Footer"));
 * }
 *
 * @see Stack
 * @see StackItem
 * @see <a href="https://www.patternfly.org/layouts/stack">PatternFly Stack</a>
 */
package org.patternfly.layout.stack;