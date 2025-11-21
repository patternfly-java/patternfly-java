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
package org.patternfly.component.page;

import org.jboss.elemento.EventType;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;

import elemental2.dom.HTMLDivElement;

import static java.lang.Boolean.parseBoolean;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.icon.IconSets.fas.bars;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.masthead;
import static org.patternfly.style.Classes.toggle;

/**
 * Container for the toggle of a {@link Masthead} component. The component contains a toggle button that calls
 * {@link PageSidebar#toggle()}, when clicked.
 */
public class MastheadToggle extends MastheadSubComponent<HTMLDivElement, MastheadToggle> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadToggle mastheadToggle() {
        return new MastheadToggle();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "mht";

    private final Button toggleButton;

    MastheadToggle() {
        super(SUB_COMPONENT_NAME, div().css(component(masthead, toggle)).element());
        add(toggleButton = button()
                .plain()
                .icon(bars())
                .aria(label, "Global Navigation")
                .aria(expanded, true)); // expanded by default
    }

    // ------------------------------------------------------ builder

    public MastheadToggle toggleSidebar() {
        toggleButton.on(EventType.click, e -> toggle());
        return this;
    }

    @Override
    public MastheadToggle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void toggle() {
        boolean expanded = parseBoolean(toggleButton.element().getAttribute(Aria.expanded));
        toggleButton.aria(Aria.expanded, !expanded);
        if (page().sidebar() != null) {
            page().sidebar().toggle();
        }
    }
}
