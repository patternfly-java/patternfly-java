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

import org.patternfly.component.ComponentType;
import org.patternfly.core.Modifiers.Fill;
import org.patternfly.core.Modifiers.NoFill;
import org.patternfly.layout.Breakpoint;
import org.patternfly.layout.Brightness;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.layout.Classes.center;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noPadding;
import static org.patternfly.layout.Classes.padding;
import static org.patternfly.layout.Classes.page;
import static org.patternfly.layout.Classes.section;

/**
 * Container for a section in a {@link PageMainGroup} or {@link PageMain} component. Note: By default, the last/only section
 * will grow to fill the available vertical space. You can change this behavior using {@link #fill()} and {@link #noFill()}.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageMainSection extends PageSectionBuilder<HTMLElement, PageMainSection> implements
        Fill<HTMLElement, PageMainSection>, NoFill<HTMLElement, PageMainSection> {

    // ------------------------------------------------------ factory

    public static PageMainSection pageMainSection() {
        return new PageMainSection();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pms";

    PageMainSection() {
        super(section().css(component(page, main, section)).element(), ComponentType.Page, SUB_COMPONENT_NAME);
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies a page section body to align center. Please make sure to use this together with the {@link #limitWidth()}
     * modifier.
     */
    public PageMainSection center() {
        return css(modifier(center));
    }

    /**
     * Modifies the section to have a light theme.
     */
    public PageMainSection light() {
        return css(Brightness.light.modifier);
    }

    /**
     * Modifies the section to have a dark theme and a dark transparent background.
     */
    public PageMainSection dark() {
        return css(Brightness.dark.opacity(200));
    }

    /**
     * Modifies the section to have a dark theme and a darker transparent background.
     */
    public PageMainSection darker() {
        return css(Brightness.dark.opacity(100));
    }

    /**
     * Modifies the section to add padding.
     */
    public PageMainSection padding() {
        return css(modifier(padding));
    }

    /**
     * Modifies the section to add padding at the given breakpoint.
     */
    public PageMainSection padding(Breakpoint breakpoint) {
        return css(modifier(padding, breakpoint));
    }

    /**
     * Modifies the section to remove padding.
     */
    public PageMainSection noPadding() {
        return css(modifier(noPadding));
    }

    /**
     * Modifies the section to remove padding at the given breakpoint.
     */
    public PageMainSection noPadding(Breakpoint breakpoint) {
        return css(modifier(noPadding, breakpoint));
    }

    @Override
    public PageMainSection that() {
        return this;
    }
}
