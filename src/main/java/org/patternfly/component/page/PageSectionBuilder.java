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

import org.patternfly.component.SubComponent;
import org.patternfly.layout.Breakpoint;
import org.patternfly.layout.Sticky;

import elemental2.dom.HTMLElement;

import static org.patternfly.layout.Classes.limitWidth;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.overflowScroll;
import static org.patternfly.layout.Classes.shadowBottom;
import static org.patternfly.layout.Classes.shadowTop;

/**
 * Groups common methods/modifiers for page sections like {@link PageMainBreadcrumb} and {@link PageMainSection}.
 */
public abstract class PageSectionBuilder<E extends HTMLElement, P extends PageSectionBuilder<E, P>>
        extends SubComponent<E, P> implements PageSection<E, P> {

    PageSectionBuilder(E element) {
        super(element);
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageMainBody} to this component. Use this method to wrap the content of this component inside a
     * {@link PageMainBody} if you've applied the {@link #limitWidth()} modifier.
     */
    public P addBody(PageMainBody body) {
        return add(body);
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
     * Modifies this component to be sticky to the top of its container.
     */
    public P sticky(Sticky sticky) {
        return css(sticky.modifier);
    }

    /**
     * Modifies this component to be sticky to the top of its container at the given breakpoint.
     */
    public P sticky(Sticky sticky, Breakpoint breakpoint) {
        return css(sticky.onHeight(breakpoint));
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
