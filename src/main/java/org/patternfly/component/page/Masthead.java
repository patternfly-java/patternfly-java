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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Brightness;
import org.patternfly.style.Display;
import org.patternfly.style.Inset;
import org.patternfly.style.Rect;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.header;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Breakpoint.breakpoint;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Brightness.dark;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Brightness.light200;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.masthead;
import static org.patternfly.style.Display.inline;

/**
 * A masthead contains global properties such as logotype, navigation and settings in an organized fashion, and it is accessible
 * from all parts of the application.
 * <p>
 * All pages should share a common masthead. Use {@link Page#masthead()} to get the masthead.
 * <p>
 * {@snippet class = PageDemo region = masthead}
 *
 * @see <a href= "https://www.patternfly.org/components/masthead">https://www.patternfly.org/components/masthead</a>
 */
public class Masthead extends BaseComponent<HTMLElement, Masthead> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Masthead masthead() {
        return new Masthead();
    }

    // ------------------------------------------------------ instance

    private Breakpoints<Display> displayModifiers;
    private Breakpoints<Inset> insetModifiers;

    Masthead() {
        super(ComponentType.Masthead, header().css(component(masthead)).element());
        displayModifiers = breakpoints(md, inline);
        classList().add(displayModifiers.modifiers());
    }

    // ------------------------------------------------------ add

    public Masthead addToggle(MastheadToggle toggle) {
        add(toggle);
        return this;
    }

    public Masthead addMain(MastheadMain main) {
        return add(main);
    }

    /**
     * Adds a {@link MastheadContent} to this component.
     */
    public Masthead addContent(MastheadContent content) {
        return add(content);
    }

    // ------------------------------------------------------ builder

    /**
     * Display type at various breakpoints. Defaults to {@code tuples(md, inline)}.
     */
    public Masthead display(Breakpoints<Display> displayModifiers) {
        if (this.displayModifiers != null) {
            classList().remove(this.displayModifiers.modifiers());
        }
        this.displayModifiers = displayModifiers;
        classList().add(this.displayModifiers.modifiers());
        return this;
    }

    /**
     * Insets at various breakpoints
     */
    public Masthead inset(Breakpoints<Inset> insetModifiers) {
        if (this.insetModifiers != null) {
            classList().remove(this.insetModifiers.modifiers());
        }
        this.insetModifiers = insetModifiers;
        classList().add(this.insetModifiers.modifiers());
        this.insetModifiers = insetModifiers;
        return this;
    }

    /**
     * Background theme color of the masthead
     */
    public Masthead background(Brightness brightness) {
        if (verifyEnum(componentType(), element(), "background", brightness, dark, light, light200)) {
            css(brightness.modifier());
        }
        return this;
    }

    @Override
    public Masthead that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void onPageResize(Rect currentPageRect, Rect previousPageRect) {
        if (displayModifiers != null) {
            classList().remove(displayModifiers.modifiers(breakpoint(previousPageRect.width)));
            classList().add(displayModifiers.modifiers(breakpoint(currentPageRect.width)));
        }
        if (insetModifiers != null) {
            classList().remove(insetModifiers.modifiers(breakpoint(previousPageRect.width)));
            classList().add(insetModifiers.modifiers(breakpoint(currentPageRect.width)));
        }
    }
}
