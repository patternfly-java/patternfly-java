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

import org.patternfly.resources.Alignment;
import org.patternfly.resources.Breakpoint;
import org.patternfly.resources.Brightness;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.fill;
import static org.patternfly.resources.Constants.main;
import static org.patternfly.resources.Constants.noFill;
import static org.patternfly.resources.Constants.noPadding;
import static org.patternfly.resources.Constants.padding;
import static org.patternfly.resources.Constants.page;
import static org.patternfly.resources.Constants.section;

/**
 * Container for a section in a {@link PageMainGroup} or {@link PageMain} component. Note: By default, the last/only section
 * will grow to fill the available vertical space. You can change this behavior using {@link #fill()} and {@link #noFill()}.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/page/html#usage">https://www.patternfly.org/components/page/html#usage</a>
 */
public class PageMainSection extends PageSectionBuilder<HTMLElement, PageMainSection>
        implements PageSection<HTMLElement, PageMainSection> {

    // ------------------------------------------------------ factory methods

    public static PageMainSection pageMainSection() {
        return new PageMainSection();
    }

    // ------------------------------------------------------ instance

    PageMainSection() {
        super(section().css(component(page, main, section))
                .element());
    }

    @Override
    public PageMainSection that() {
        return this;
    }

    // ------------------------------------------------------ modifiers

    /**
     * Modifies a page section body to align center. Please make sure to use this together with the {@link #limitWidth()}
     * modifier.
     */
    public PageMainSection center() {
        return css(modifier(Alignment.center.modifier));
    }

    /**
     * Modifies the element to grow to fill the available space.
     */
    public PageMainSection fill() {
        return css(modifier(fill));
    }

    /**
     * Modifies the element to not grow to fill the available vertical space.
     */
    public PageMainSection noFill() {
        return css(modifier(noFill));
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
}
