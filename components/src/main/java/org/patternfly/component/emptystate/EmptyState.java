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

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.ElementTextDelegate;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Severity;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Size;
import org.patternfly.style.Status;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.emptyState;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.title;
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
public class EmptyState extends BaseComponent<HTMLElement, EmptyState> implements
        ComponentIcon<HTMLElement, EmptyState>,
        ElementContainerDelegate<HTMLElement, EmptyState>,
        ElementTextDelegate<HTMLElement, EmptyState>,
        FullHeight<HTMLElement, EmptyState> {

    // ------------------------------------------------------ factory

    public static EmptyState emptyState() {
        return new EmptyState();
    }

    // ------------------------------------------------------ instance

    private final HTMLElement contentContainer;
    private final HTMLElement iconContainer;
    private HTMLElement titleTextContainer;
    private int level;

    EmptyState() {
        super(ComponentType.EmptyState, div().css(component(emptyState)).element());
        level = 4;
        contentContainer = div().css(component(emptyState, content))
                .add(div().css(component(emptyState, header))
                        .add(iconContainer = div().css(component(emptyState, icon)).element())
                        .add(div().css(component(emptyState, title))
                                .add(titleTextContainer = h(level).css(component(emptyState, title, text)).element())))
                .element();
        element().appendChild(contentContainer); // don't use add(contentContainer)
    }

    @Override
    public Element containerDelegate() {
        return contentContainer;
    }

    @Override
    public Element textDelegate() {
        return titleTextContainer;
    }

    // ------------------------------------------------------ add

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

    public EmptyState headingLevel(int level) {
        if (this.level != level && verifyRange(element(), "headingLevel", level, 1, 6)) {
            HTMLElement element = h(level).css(component(emptyState, title, text))
                    .text(titleTextContainer.textContent)
                    .element();
            titleTextContainer.replaceWith(element);
            this.titleTextContainer = element;
            this.level = level;
        }
        return this;
    }

    @Override
    public EmptyState icon(Element icon) {
        removeIcon();
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public EmptyState removeIcon() {
        removeChildrenFrom(iconContainer);
        return this;
    }

    public EmptyState spinner() {
        return spinner("Loading");
    }

    public EmptyState spinner(String label) {
        removeIcon();
        iconContainer.appendChild(Spinner.spinner(label).element());
        return this;
    }

    /**
     * Modifies empty state max-width and sizes of icon, title and body.
     */
    public EmptyState size(Size size) {
        if (verifyEnum(element(), "size", size, xs, sm, lg, xl)) {
            swap(this, element(), size, Size.values());
        }
        return this;
    }

    public EmptyState status(Severity severity) {
        icon(severity.icon.get());
        return swap(this, element(), severity.status, Status.values());
    }

    public EmptyState clearStatus() {
        return swap(this, element(), null, Status.values());
    }

    @Override
    public EmptyState that() {
        return this;
    }
}
