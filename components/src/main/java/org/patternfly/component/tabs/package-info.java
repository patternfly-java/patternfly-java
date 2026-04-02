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
 * Provides a tabs component for organizing content into separate views within the same page.
 *
 * <p>Tabs allow users to switch between groups of related content. This package supports horizontal and vertical
 * layouts, box and secondary styling variants, disabled tabs, ARIA-disabled tabs with tooltip support, expandable
 * vertical tabs, and overflow handling.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.tabs.Tabs} - Main tabs container</li>
 *     <li>{@link org.patternfly.component.tabs.Tab} - Individual tab with label and content</li>
 *     <li>{@link org.patternfly.component.tabs.TabContent} - Content panel for a tab</li>
 *     <li>{@link org.patternfly.component.tabs.TabContentBody} - Body within tab content</li>
 *     <li>{@link org.patternfly.component.tabs.OverflowTab} - Overflow tab for responsive handling</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create tabs with content panels:
 *
 * {@snippet :
 * import static org.patternfly.component.tabs.Tab.tab;
 * import static org.patternfly.component.tabs.TabContent.tabContent;
 * import static org.patternfly.component.tabs.Tabs.tabs;
 *
 * Tabs tabs = tabs()
 *         .addItem(tab("users", "Users")
 *                 .addContent(tabContent().text("Users content")))
 *         .addItem(tab("containers", "Containers")
 *                 .addContent(tabContent().text("Containers content")))
 *         .addItem(tab("database", "Database")
 *                 .addContent(tabContent().text("Database content")))
 *         .addItem(tab("disabled", "Disabled")
 *                 .disabled()
 *                 .addContent(tabContent().text("Disabled content")));
 * }
 *
 * <p>Create vertical tabs with box styling:
 *
 * {@snippet :
 * import static org.patternfly.component.tabs.Tab.tab;
 * import static org.patternfly.component.tabs.TabContent.tabContent;
 * import static org.patternfly.component.tabs.Tabs.tabs;
 *
 * Tabs verticalTabs = tabs().vertical().box(true)
 *         .addItem(tab("tab-1", "Tab 1")
 *                 .addContent(tabContent().text("Tab 1 content")))
 *         .addItem(tab("tab-2", "Tab 2")
 *                 .addContent(tabContent().text("Tab 2 content")));
 * }
 *
 * @see org.patternfly.component.tabs.Tabs
 * @see org.patternfly.component.tabs.Tab
 * @see <a href="https://www.patternfly.org/components/tabs">PatternFly Tabs</a>
 */
package org.patternfly.component.tabs;