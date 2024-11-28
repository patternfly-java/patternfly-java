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
package org.patternfly.component.emptystate;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Size;
import org.patternfly.style.Status;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.emptyState;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Size.xl;
import static org.patternfly.style.Size.xs;
import static org.patternfly.style.TypedModifier.swap;

/**
 * An empty state is a screen that is not yet populated with data or information. Empty states typically contain a short message
 * and next steps for the user.
 *
 * @see <a href= "https://www.patternfly.org/components/empty-state">https://www.patternfly.org/components/empty-state</a>
 */
public class EmptyState extends BaseComponent<HTMLElement, EmptyState>
        implements ElementContainerDelegate<HTMLElement, EmptyState>, FullHeight<HTMLElement, EmptyState> {

    // ------------------------------------------------------ factory

    public static EmptyState emptyState() {
        return new EmptyState();
    }

    // ------------------------------------------------------ instance

    private final HTMLElement contentContainer;

    EmptyState() {
        super(ComponentType.EmptyState, div().css(component(emptyState)).element());
        element().appendChild(contentContainer = div().css(component(emptyState, content)).element());
        storeComponent();
    }

    @Override
    public HTMLElement delegate() {
        return contentContainer;
    }

    // ------------------------------------------------------ add

    public EmptyState addHeader(EmptyStateHeader header) {
        return add(header);
    }

    // override to ensure internal wiring
    public EmptyState add(EmptyStateHeader header) {
        contentContainer.appendChild(header.element());
        return this;
    }

    public EmptyState addBody(EmptyStateBody body) {
        return add(body);
    }

    // override to ensure internal wiring
    public EmptyState add(EmptyStateBody body) {
        contentContainer.appendChild(body.element());
        return this;
    }

    public EmptyState addFooter(EmptyStateFooter footer) {
        return add(footer);
    }

    // override to ensure internal wiring
    public EmptyState add(EmptyStateFooter footer) {
        contentContainer.appendChild(footer.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Modifies empty state max-width and sizes of icon, title and body.
     */
    public EmptyState size(Size size) {
        if (verifyEnum(element(), "size", size, xs, sm, lg, xl)) {
            swap(this, element(), size, Size.values());
        }
        return this;
    }

    public EmptyState status(Status status) {
        return swap(this, element(), status, Status.values());
    }

    @Override
    public EmptyState that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void clearStatus() {
        for (Status status : Status.values()) {
            element().classList.remove(status.modifier());
        }
    }
}
