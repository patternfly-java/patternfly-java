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
 * Provides a toolbar component for organizing actions, filters, and controls in a horizontal layout.
 *
 * <p>A toolbar is a container for grouping related controls such as search inputs, buttons, filters, and
 * pagination. It supports content sections, item and group types, toggle groups for responsive behavior,
 * filter label groups, adjustable insets, sticky positioning, and color variants.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.toolbar.Toolbar} - Main toolbar container</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarContent} - Content section within a toolbar</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarGroup} - Group of toolbar items</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarItem} - Individual toolbar item</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarToggleGroup} - Responsive toggle group</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarFilterContent} - Filter content with label groups</li>
 *     <li>{@link org.patternfly.component.toolbar.ToolbarGroupType} - Typed group variants (action, filter, etc.)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a toolbar with search input and action buttons:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
 * import static org.patternfly.component.toolbar.Toolbar.toolbar;
 * import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
 * import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
 *
 * Toolbar toolbar = toolbar()
 *         .addContent(toolbarContent()
 *                 .addItem(toolbarItem()
 *                         .add(searchInput("search-0")))
 *                 .addItem(toolbarItem()
 *                         .add(button("Action").secondary()))
 *                 .addDivider()
 *                 .addItem(toolbarItem()
 *                         .add(button("Primary").primary())));
 * }
 *
 * <p>Create a toolbar with grouped action buttons:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.toolbar.Toolbar.toolbar;
 * import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
 * import static org.patternfly.component.toolbar.ToolbarGroup.toolbarGroup;
 * import static org.patternfly.component.toolbar.ToolbarGroupType.actionGroup;
 * import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
 *
 * Toolbar grouped = toolbar()
 *         .addContent(toolbarContent()
 *                 .addGroup(toolbarGroup(actionGroup)
 *                         .addItem(toolbarItem().add(button("Edit").secondary()))
 *                         .addItem(toolbarItem().add(button("Clone").secondary())))
 *                 .addDivider()
 *                 .addGroup(toolbarGroup(actionGroup)
 *                         .addItem(toolbarItem().add(button("Save").primary()))));
 * }
 *
 * @see org.patternfly.component.toolbar.Toolbar
 * @see <a href="https://www.patternfly.org/components/toolbar">PatternFly Toolbar</a>
 */
package org.patternfly.component.toolbar;