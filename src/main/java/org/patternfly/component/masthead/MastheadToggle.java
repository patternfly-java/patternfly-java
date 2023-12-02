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
package org.patternfly.component.masthead;

import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.component.button.Button;
import org.patternfly.component.sidebar.Sidebar;

import elemental2.dom.HTMLDivElement;

import static java.lang.Boolean.parseBoolean;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.masthead;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.bars;

/**
 * Container for the toggle of a {@link Masthead} component. The component contains a toggle button that calls
 * {@link Sidebar#toggle()}, when clicked.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/masthead/html#usage">https://www.patternfly.org/components/masthead/html#usage</a>
 */
public class MastheadToggle extends BaseSubComponent<HTMLDivElement, MastheadToggle> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadToggle mastheadToggle() {
        return new MastheadToggle();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mt";

    private final Button toggleButton;

    MastheadToggle() {
        super(div().css(component(masthead, toggle)).element(), ComponentType.Masthead, SUB_COMPONENT_NAME);
        add(toggleButton = button()
                .plain()
                .icon(bars)
                .aria(label, "Global Navigation")
                .aria(expanded, true) // expanded by default
                .onClick((e, b) -> toggle()));
    }

    // ------------------------------------------------------ builder

    @Override
    public MastheadToggle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void toggle() {
        boolean current = parseBoolean(toggleButton.element().getAttribute(expanded));
        toggleButton.aria(expanded, !current);
        if (page().sidebar() != null) {
            page().sidebar().toggle();
        }
    }
}
