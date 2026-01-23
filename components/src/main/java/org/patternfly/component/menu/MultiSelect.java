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

import java.util.List;

import org.patternfly.component.ComponentType;
import org.patternfly.component.badge.Badge;
import org.patternfly.popper.TriggerAction;

import static org.patternfly.component.badge.Badge.badge;

/**
 * A select component to select multiple items from a list.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class MultiSelect extends MultiMenuToggleMenu<MultiSelect> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new instance of MultiSelect with a toggle menu initialized using the provided text. The toggle menu includes a
     * badge initialized with a count of zero in the read state.
     *
     * @param text the text to be displayed on the toggle menu
     * @return a new instance of MultiSelect initialized with the specified text
     */
    public static MultiSelect multiSelect(String text) {
        return new MultiSelect(MenuToggle.menuToggle(text).addBadge(badge(0).read()));
    }

    /**
     * Creates a new instance of {@code MultiSelect} initialized with the specified {@code MenuToggle}.
     *
     * @param menuToggle the {@code MenuToggle} to initialize the {@code MultiSelect} with
     * @return a new instance of {@code MultiSelect} initialized with the provided {@code MenuToggle}
     */
    public static MultiSelect multiSelect(MenuToggle menuToggle) {
        return new MultiSelect(menuToggle);
    }

    // ------------------------------------------------------ instance

    MultiSelect(MenuToggle menuToggle) {
        super(ComponentType.MultiSelect, menuToggle, TriggerAction.stayOpen);
        if (menuToggle.badge() != null) {
            menuToggle.badge().style("visibility", "hidden", true);
        }
    }

    @Override
    void updateMenuToggle(List<MenuItem> items) {
        Badge badge = menuToggle.badge();
        if (badge != null) {
            int size = items.size();
            badge.count(size);
            if (size == 0) {
                badge.style("visibility", "hidden", true);
            } else {
                badge.style("visibility", "unset");
            }
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public MultiSelect that() {
        return this;
    }
}
