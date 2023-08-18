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
package org.patternfly.components.page;

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.HtmlContent;
import org.patternfly.components.Button;

import elemental2.dom.HTMLDivElement;

import static java.lang.Boolean.parseBoolean;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.components.page.Page.page;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Icons.bars;
import static org.patternfly.layout.Icons.fas;
import static org.patternfly.layout.Classes.*;

/**
 * Container for the toggle of a {@link Masthead} component. The component contains a toggle button that calls
 * {@link PageSidebar#toggle()}, when clicked.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/masthead/html#usage">https://www.patternfly.org/components/masthead/html#usage</a>
 */
public class MastheadToggle extends ElementBuilder<HTMLDivElement, MastheadToggle>
        implements HtmlContent<HTMLDivElement, MastheadToggle> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadToggle mastheadToggle() {
        return new MastheadToggle();
    }

    // ------------------------------------------------------ instance

    private final Button toggleButton;

    MastheadToggle() {
        super(div().css(component(masthead, toggle)).element());
        add(div().css(component(masthead, toggle))
                .add(toggleButton = Button.icon(fas(bars), globalNavigation)
                        .aria(expanded, false)
                        .onClick(this::toggle)));
    }

    @Override
    public MastheadToggle that() {
        return this;
    }

    private void toggle() {
        boolean current = parseBoolean(toggleButton.element().getAttribute(ariaExpanded));
        toggleButton.aria(expanded, !current);
        if (page().sidebar() != null) {
            page().sidebar().toggle();
        }
    }
}