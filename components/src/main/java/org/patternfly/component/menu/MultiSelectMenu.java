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

import org.patternfly.component.SelectionMode;

/**
 * Menu used for {@link MultiSelect} and {@link MultiTypeahead} components.
 */
public class MultiSelectMenu extends Menu {

    // ------------------------------------------------------ factory

    /**
     * Creates a menu with {@link MenuType#select} and {@link SelectionMode#multi}
     */
    public static MultiSelectMenu multiSelectMenu() {
        return new MultiSelectMenu(MenuType.select, SelectionMode.multi);
    }

    /**
     * Creates a menu with {@link MenuType#select} and {@link SelectionMode#group}
     */
    public static MultiSelectMenu multiSelectGroupMenu() {
        return new MultiSelectMenu(MenuType.select, SelectionMode.group);
    }

    /**
     * Creates a menu with {@link MenuType#checkbox} and {@link SelectionMode#multi}
     */
    public static MultiSelectMenu multiSelectCheckboxMenu() {
        return new MultiSelectMenu(MenuType.checkbox, SelectionMode.multi);
    }

    // ------------------------------------------------------ instance

    MultiSelectMenu(MenuType menuType, SelectionMode selectionMode) {
        super(menuType, selectionMode);
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiSelectMenu that() {
        return this;
    }
}
