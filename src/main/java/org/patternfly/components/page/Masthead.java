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

import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.components.brand.Brand;
import org.patternfly.components.toolbar.Toolbar;
import org.patternfly.layout.Breakpoint;
import org.patternfly.layout.Brightness;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.header;
import static org.patternfly.components.page.MastheadContent.mastheadContent;
import static org.patternfly.components.page.MastheadMain.mastheadMain;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.inline;
import static org.patternfly.layout.Classes.inset;
import static org.patternfly.layout.Classes.insetNone;
import static org.patternfly.layout.Classes.masthead;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.stack;

/**
 * A masthead contains global properties such as logotype, navigation and settings in an organized fashion, and it is accessible
 * from all parts of the application.
 * <p>
 * All pages should share a common masthead. Use {@link Page#masthead()} to get the masthead.
 * <p>
 * {@snippet class = PageDemo region = masthead}
 *
 * @see <a href= "https://www.patternfly.org/components/masthead/html">https://www.patternfly.org/components/masthead/html</a>
 */
public class Masthead extends BaseComponent<HTMLElement, Masthead> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static Masthead pageMasthead() {
        return new Masthead();
    }

    // ------------------------------------------------------ instance

    Masthead() {
        super(header().css(component(masthead)).element(), ComponentType.Masthead);
    }

    @Override
    public Masthead that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    /**
     * Adds a {@link MastheadToggle} to this component.
     */
    public Masthead addToggle(MastheadToggle toggle) {
        add(toggle);
        return this;
    }

    /**
     * Adds a {@link MastheadMain} to this component.
     */
    public Masthead addMain() {
        return add(mastheadMain());
    }

    /**
     * Wraps the brand inside an {@code <a/>} element, adds the {@code <a/>} element to a {@link MastheadMain} component and
     * finally adds the {@link MastheadMain} to this component.
     * <p>
     * Shortcut for
     * {@snippet :
     * import org.patternfly.layout.Classes;add(mastheadMain()
     *         .add(a(homeLink).css(Classes.component(masthead, Classes.brand))
     *                 .add(brand)));
     * }
     */
    public Masthead addBrand(Brand brand, String homeLink) {
        add(mastheadMain()
                .add(a(homeLink).css(component(masthead, Classes.brand))
                        .add(brand)));
        return this;
    }

    /**
     * Wraps the toolbar inside a {@link MastheadContent} component and adds the {@link MastheadContent} to this component.
     * <p>
     * Shortcut for
     * {@snippet :
     * add(mastheadContent())
     *         .add(toolbar);
     * }
     */
    public Masthead addToolbar(Toolbar toolbar) {
        add(mastheadContent())
                .add(toolbar);
        return this;
    }

    /**
     * Adds a {@link MastheadContent} to this component.
     */
    public Masthead addContent() {
        return add(mastheadContent());
    }

    // ------------------------------------------------------ modifiers

    /**
     * Modifies this component to have no horizontal padding.
     */
    public Masthead noInset() {
        return css(modifier(insetNone));
    }

    /**
     * Modifies this component to have no horizontal padding at the given breakpoint.
     */
    public Masthead noInset(Breakpoint breakpoint) {
        return css(modifier(insetNone, breakpoint));
    }

    /**
     * Modifies this component to have a horizontal padding.
     */
    public Masthead inset(Size size) {
        return css(modifier(inset) + "-" + size.value);
    }

    /**
     * Modifies this component to have a horizontal padding at the given breakpoint.
     */
    public Masthead inset(Size size, Breakpoint breakpoint) {
        return css(modifier(inset) + "-" + size.value + "-on-" + breakpoint.value);
    }

    /**
     * Modifies this component to have a light theme with a background color of {@code --pf-v5-global--BackgroundColor--200}.
     */
    public Masthead light() {
        return css(Brightness.light.opacity(200));
    }

    /**
     * Modifies this component to have a light theme with a background color of {@code --pf-v5-global--BackgroundColor--100}.
     */
    public Masthead lighter() {
        return css(Brightness.light.modifier);
    }

    /**
     * Modifies this component to have an inline display.
     */
    public Masthead inline() {
        return css(modifier(inline));
    }

    /**
     * Modifies this component to have an inline display at the given breakpoint.
     */
    public Masthead inline(Breakpoint breakpoint) {
        return css(modifier(inline, breakpoint));
    }

    /**
     * Modifies this component to have a stacked display.
     */
    public Masthead stack() {
        return css(modifier(stack));
    }

    /**
     * Modifies this component to have a stacked display at the given breakpoint.
     */
    public Masthead stack(Breakpoint breakpoint) {
        return css(modifier(stack, breakpoint));
    }
}
