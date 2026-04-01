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

import org.patternfly.component.ComponentType;
import org.patternfly.popper.TriggerAction;

/**
 * A select component to select exactly one item from a list.
 *
 * @deprecated This implementation uses the Popper.js API, which is due to be removed soon. Use {@link SingleSelect} instead.
 */
@Deprecated
public class PopperSingleSelect extends PopperSingleMenuToggleMenu<PopperSingleSelect> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new SingleSelect component with the specified text.
     *
     * @param text the text to display on the SingleSelect toggle
     * @return a new instance of SingleSelect
     */
    public static PopperSingleSelect singleSelect(String text) {
        return new PopperSingleSelect(MenuToggle.menuToggle(text));
    }

    /**
     * Creates a new SingleSelect component using the specified MenuToggle.
     *
     * @param menuToggle the MenuToggle instance to be used for creating the SingleSelect component
     * @return a new instance of SingleSelect
     */
    public static PopperSingleSelect singleSelect(MenuToggle menuToggle) {
        return new PopperSingleSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    PopperSingleSelect(MenuToggle menuToggle) {
        super(ComponentType.PopperSingleSelect, menuToggle, TriggerAction.click);
    }

    @Override
    void updateMenuToggle(MenuItem item) {
        menuToggle.text(item.text());
    }

    // ------------------------------------------------------ builder

    @Override
    public PopperSingleSelect that() {
        return this;
    }
}
