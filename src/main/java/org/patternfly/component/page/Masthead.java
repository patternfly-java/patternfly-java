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

import java.util.EnumSet;
import java.util.stream.Stream;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.brand.Brand;
import org.patternfly.component.toolbar.Toolbar;
import org.patternfly.core.Logger;
import org.patternfly.core.Tuples;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Brightness;
import org.patternfly.style.Classes;
import org.patternfly.style.Display;
import org.patternfly.style.Inset;
import org.patternfly.style.Rect;

import elemental2.dom.HTMLElement;

import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.header;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.style.Breakpoint.breakpoint;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Brightness.dark;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Brightness.light200;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.masthead;
import static org.patternfly.style.Classes.typedModifier;
import static org.patternfly.style.Display.inline;

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

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Masthead masthead() {
        return new Masthead();
    }

    // ------------------------------------------------------ instance

    private Tuples<Breakpoint, Display> displayModifiers;
    private Tuples<Breakpoint, Inset> insetModifiers;

    Masthead() {
        super(ComponentType.Masthead, header().css(component(masthead)).element());
        this.displayModifiers = tuples(md, inline);
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
     * Wraps the brand inside an {@code <a/>} element, adds the {@code <a/>} element to a {@link MastheadMain} component and
     * finally adds the {@link MastheadMain} to this component.
     * <p>
     * Shortcut for
     * {@snippet :
     * add(mastheadMain().add(a(homeLink).css(component(masthead, Classes.brand)).add(brand)));
     * }
     */
    public Masthead addBrand(Brand brand, String homeLink) {
        addMain(mastheadMain()
                .add(a(homeLink).css(component(masthead, Classes.brand))
                        .add(brand)));
        return this;
    }

    /**
     * Wraps the toolbar inside a {@link MastheadContent} component and adds the {@link MastheadContent} to this component.
     * <p>
     * Shortcut for
     * {@snippet :
     * add(mastheadContent().add(toolbar));
     * }
     */
    public Masthead addToolbar(Toolbar toolbar) {
        addContent(mastheadContent()
                .add(toolbar));
        return this;
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
    public Masthead display(Tuples<Breakpoint, Display> displayModifiers) {
        this.displayModifiers = displayModifiers;
        return this;
    }

    /**
     * Insets at various breakpoints
     */
    public Masthead inset(Tuples<Breakpoint, Inset> insetModifiers) {
        this.insetModifiers = insetModifiers;
        return this;
    }

    /**
     * Background theme color of the masthead
     */
    public Masthead background(Brightness brightness) {
        if (!EnumSet.of(dark, light, light200).contains(brightness)) {
            Logger.unsupported(componentType(), element(),
                    "Background " + brightness + " not supported. Valid values: " +
                            Stream.of(dark, light, light200).map(Brightness::name).collect(joining(" ")));
            return this;
        }
        return css(brightness.modifier());
    }

    @Override
    public Masthead that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void onPageResize(Rect currentPageRect, Rect previousPageRect) {
        classList().remove(typedModifier(displayModifiers, breakpoint(previousPageRect.width)));
        classList().remove(typedModifier(insetModifiers, breakpoint(previousPageRect.width)));
        classList().add(typedModifier(displayModifiers, breakpoint(currentPageRect.width)));
        classList().add(typedModifier(insetModifiers, breakpoint(currentPageRect.width)));
    }
}
