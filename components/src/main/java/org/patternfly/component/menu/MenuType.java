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
package org.patternfly.component.menu;

public enum MenuType {

    /**
     * Menu type whose menu items do not have a special selection mode. Should be used in combination with
     * {@link org.patternfly.component.SelectionMode#click}.
     * <p>
     * Used for menus in {@link Dropdown} components.
     */
    menu,

    /**
     * Menu type whose selected menu items are marked with a tik (✓). Should be used in combination with
     * {@link org.patternfly.component.SelectionMode#single}, {@link org.patternfly.component.SelectionMode#group}, or
     * {@link org.patternfly.component.SelectionMode#multi}.
     * <p>
     * Used for menus in {@link SingleSelect} and {@link MultiSelect} components.
     */
    select,

    /**
     * Menu type whose selected menu items are marked with a checkbox. Should only be used in combination with
     * {@link org.patternfly.component.SelectionMode#multi}.
     * <p>
     * Used for menus in {@link MultiSelect} components.
     */
    checkbox
}
