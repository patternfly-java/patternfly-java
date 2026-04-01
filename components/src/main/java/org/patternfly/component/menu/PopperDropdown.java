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
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.popper.TriggerAction;

/**
 * A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new
 * location. See select component guidelines for more information about making one or more selections from a list of items in a
 * value list.
 *
 * @deprecated This implementation uses the Popper.js API, which is due to be removed soon. Use {@link Dropdown} instead.
 */
@Deprecated
public class PopperDropdown extends PopperMenuToggleMenu<PopperDropdown> {

    // ------------------------------------------------------ factory

    public static PopperDropdown dropdown(String text) {
        return new PopperDropdown(MenuToggle.menuToggle(text));
    }

    public static PopperDropdown dropdown(PredefinedIcon icon, String label) {
        return new PopperDropdown(MenuToggle.menuToggle(icon, label));
    }

    public static PopperDropdown dropdown(MenuToggle menuToggle) {
        return new PopperDropdown(menuToggle);
    }

    // ------------------------------------------------------ instance

    PopperDropdown(MenuToggle menuToggle) {
        super(ComponentType.PopperDropdown, menuToggle, TriggerAction.click);
    }

    // ------------------------------------------------------ builder

    @Override
    public PopperDropdown that() {
        return this;
    }
}
