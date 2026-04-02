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
 * Provides a toggle group component for selecting one or multiple options from a group of buttons.
 *
 * <p>A toggle group is a set of toggle items that can operate in single-select or multi-select mode. Items
 * can display text, icons, or both, and support compact and disabled states.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.togglegroup.ToggleGroup} - Main toggle group container</li>
 *     <li>{@link org.patternfly.component.togglegroup.ToggleGroupItem} - Individual toggle button</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a single-select toggle group:
 *
 * {@snippet :
 * import static org.patternfly.component.SelectionMode.single;
 * import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
 * import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
 *
 * ToggleGroup group = toggleGroup(single)
 *         .addItem(toggleGroupItem("option-1", "Option 1"))
 *         .addItem(toggleGroupItem("option-2", "Option 2"))
 *         .addItem(toggleGroupItem("option-3", "Option 3"));
 * }
 *
 * <p>Create a multi-select toggle group with icons:
 *
 * {@snippet :
 * import static org.patternfly.component.SelectionMode.multi;
 * import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
 * import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
 * import static org.patternfly.icon.IconSets.fas.copy;
 * import static org.patternfly.icon.IconSets.fas.undo;
 *
 * ToggleGroup iconGroup = toggleGroup(multi)
 *         .addItem(toggleGroupItem("copy").iconAndText(copy(), "Copy"))
 *         .addItem(toggleGroupItem("undo").iconAndText(undo(), "Undo"));
 * }
 *
 * @see org.patternfly.component.togglegroup.ToggleGroup
 * @see org.patternfly.component.togglegroup.ToggleGroupItem
 * @see <a href="https://www.patternfly.org/components/toggle-group">PatternFly Toggle Group</a>
 */
package org.patternfly.component.togglegroup;