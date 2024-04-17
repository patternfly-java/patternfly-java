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
 * SingleSelectMenu is a subclass of Menu that represents a single-select menu.
 * It extends the Menu class and inherits all its methods and properties.
 */
public class SingleSelectMenu extends Menu {

    // ------------------------------------------------------ factory

    public static SingleSelectMenu singleSelectMenu() {
        return new SingleSelectMenu();
    }

    // ------------------------------------------------------ instance

    SingleSelectMenu() {
        super(MenuType.select, SelectionMode.single);
    }

    // ------------------------------------------------------ builder

    @Override
    public SingleSelectMenu that() {
        return this;
    }
}
