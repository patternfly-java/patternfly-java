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
 * Provides menu components for building dropdowns, selects, and general-purpose menus.
 *
 * <p>This package contains the {@link org.patternfly.component.menu.Menu} component and related classes for creating
 * menus, dropdowns, single selects, multi selects, and typeaheads. Menus support different types (action, select,
 * checkbox), selection modes (click, single, multi), grouped items, icons, descriptions, danger items, search
 * filtering, and item actions.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.menu.Menu} - Core menu component with configurable type and selection mode</li>
 *     <li>{@link org.patternfly.component.menu.MenuContent} - Scrollable content area of a menu</li>
 *     <li>{@link org.patternfly.component.menu.MenuList} - List of menu items</li>
 *     <li>{@link org.patternfly.component.menu.MenuItem} - Individual menu item (action, link, or checkbox)</li>
 *     <li>{@link org.patternfly.component.menu.MenuGroup} - Groups menu items under a heading</li>
 *     <li>{@link org.patternfly.component.menu.MenuToggle} - Toggle button that opens/closes a menu</li>
 *     <li>{@link org.patternfly.component.menu.Dropdown} - Pre-configured menu for dropdown use cases</li>
 *     <li>{@link org.patternfly.component.menu.SingleSelect} - Pre-configured menu for single selection</li>
 *     <li>{@link org.patternfly.component.menu.MultiSelect} - Pre-configured menu for multiple selection</li>
 *     <li>{@link org.patternfly.component.menu.MenuSearch} - Search/filter input within a menu</li>
 *     <li>{@link org.patternfly.component.menu.MenuFooter} - Footer area for additional actions</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>A basic action menu and a dropdown:
 *
 * {@snippet :
 * import static org.patternfly.component.SelectionMode.click;
 * import static org.patternfly.component.menu.Dropdown.dropdown;
 * import static org.patternfly.component.menu.Menu.menu;
 * import static org.patternfly.component.menu.MenuContent.menuContent;
 * import static org.patternfly.component.menu.MenuItem.menuItem;
 * import static org.patternfly.component.menu.MenuList.menuList;
 * import static org.patternfly.component.menu.MenuToggle.menuToggle;
 * import static org.patternfly.component.menu.MenuType.menu;
 *
 * // Basic action menu
 * Menu actionMenu = menu(menu, click)
 *         .addContent(menuContent()
 *                 .addList(menuList()
 *                         .addItem(menuItem("item-0", "Action"))
 *                         .addItem(menuItem("item-1", "Another action"))
 *                         .addItem(menuItem("item-2", "Disabled action")
 *                                 .disabled())));
 *
 * // Dropdown with toggle
 * Dropdown dropdown = dropdown(menuToggle("Dropdown"))
 *         .addMenu(menu()
 *                 .addContent(menuContent()
 *                         .addList(menuList()
 *                                 .addItem(menuItem("option-0", "Option 1"))
 *                                 .addItem(menuItem("option-1", "Option 2"))
 *                                 .addItem(menuItem("option-2", "Option 3")))));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/menus/menu">PatternFly Menu</a>
 * @see <a href="https://www.patternfly.org/components/menus/dropdown">PatternFly Dropdown</a>
 * @see <a href="https://www.patternfly.org/components/menus/select">PatternFly Select</a>
 */
package org.patternfly.component.menu;