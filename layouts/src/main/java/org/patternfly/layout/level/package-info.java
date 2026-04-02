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
 * Provides the PatternFly level layout for distributing content evenly across a horizontal row.
 * <p>
 * The level layout is useful for creating horizontal rows where items are distributed evenly, such as toolbars, status bars,
 * or summary sections. It supports gutters for spacing between items.
 *
 * <h2>Usage</h2>
 *
 * A basic level layout:
 *
 * {@snippet :
 * import static org.patternfly.layout.level.Level.level;
 * import static org.patternfly.layout.level.LevelItem.levelItem;
 *
 * level()
 *         .addItem(levelItem().text("Level item"))
 *         .addItem(levelItem().text("Level item"))
 *         .addItem(levelItem().text("Level item"));
 * }
 *
 * A level layout with gutters:
 *
 * {@snippet :
 * import static org.patternfly.layout.level.Level.level;
 * import static org.patternfly.layout.level.LevelItem.levelItem;
 *
 * level().gutter()
 *         .addItem(levelItem().text("Level item"))
 *         .addItem(levelItem().text("Level item"))
 *         .addItem(levelItem().text("Level item"));
 * }
 *
 * @see Level
 * @see LevelItem
 * @see <a href="https://www.patternfly.org/layouts/level">PatternFly Level</a>
 */
package org.patternfly.layout.level;