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

import org.patternfly.core.Tuples;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Padding;
import org.patternfly.style.Sticky;

import elemental2.dom.HTMLElement;

import static org.patternfly.style.Classes.alignCenter;
import static org.patternfly.style.Classes.limitWidth;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.overflowScroll;
import static org.patternfly.style.Classes.shadowBottom;
import static org.patternfly.style.Classes.shadowTop;
import static org.patternfly.style.Classes.typedModifier;

/**
 * Groups common methods/modifiers for page sections like {@link PageMainBreadcrumb} and {@link PageMainSection}.
 */
public abstract class PageSectionBuilder<E extends HTMLElement, P extends PageSectionBuilder<E, P>>
        extends PageSubComponent<E, P> implements PageSection<E, P> {

    PageSectionBuilder(String name, E element) {
        super(name, element);
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageMainBody} to this component. Use this method to wrap the content of this component inside a
     * {@link PageMainBody} if you've applied the {@link #limitWidth()} modifier.
     */
    public P addBody(PageMainBody body) {
        return add(body);
    }

    /**
     * Adds a {@link PageMainBody} to this component. Use this method to wrap the content of this component inside a
     * {@link PageMainBody} if you've applied the {@link #limitWidth()} modifier.
     */
    public P add(PageMainBody body) {
        element().appendChild(body.element());
        return that();
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies this component to limit the max-width of the content inside. If used, please make sure to wrap the content of
     * this component inside a {@link PageMainBody} using {@link #addBody(PageMainBody)}.
     */
    public P limitWidth() {
        return css(modifier(limitWidth));
    }

    /**
     * Modifies this component to be sticky at the given breakpoints.
     */
    public P sticky(Tuples<Breakpoint, Sticky> sticky) {
        return css(typedModifier(sticky));
    }

    public P padding(Tuples<Breakpoint, Padding> padding) {
        return css(typedModifier(padding));
    }

    /**
     * Flag indicating if the section content is center aligned. {@link #limitWidth()} must be set for this to work.
     */
    public P centerAligned() {
        return css(modifier(alignCenter));
    }

    /**
     * Modifies this component to have a top shadow.
     */
    public P shadowTop() {
        return css(modifier(shadowTop));
    }

    /**
     * Modifies this component to have a bottom shadow.
     */
    public P shadowBottom() {
        return css(modifier(shadowBottom));
    }

    /**
     * Modifies this component to show a scrollbar if it has overflow content.
     */
    public P overflowScroll() {
        return css(modifier(overflowScroll));
    }
}
