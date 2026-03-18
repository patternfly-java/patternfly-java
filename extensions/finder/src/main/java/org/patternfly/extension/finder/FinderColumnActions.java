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
package org.patternfly.extension.finder;

import org.patternfly.component.button.Button;
import org.patternfly.component.menu.Dropdown;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;

public class FinderColumnActions extends FinderSubComponent<HTMLElement, FinderColumnActions> {

    // ------------------------------------------------------ factory

    public static FinderColumnActions finderColumnActions() {
        return new FinderColumnActions();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fca";

    FinderColumnActions() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, column, actions)).element());
    }

    // ------------------------------------------------------ add

    public FinderColumnActions addButton(Button button) {
        return add(button);
    }

    public FinderColumnActions addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnActions that() {
        return this;
    }
}
