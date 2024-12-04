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

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Size;
import org.patternfly.style.Status;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.emptyState;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.title;
import static org.patternfly.style.TypedModifier.swap;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Color;

public class EmptyStateHeader extends EmptyStateSubComponent<HTMLDivElement, EmptyStateHeader> implements
        ComponentIcon<HTMLDivElement, EmptyStateHeader>,
        ElementTextMethods<HTMLDivElement, EmptyStateHeader> {

    // ------------------------------------------------------ factory

    public static EmptyStateHeader emptyStateHeader() {
        return new EmptyStateHeader(1);
    }

    public static EmptyStateHeader emptyStateHeader(int headingLevel) {
        return new EmptyStateHeader(headingLevel);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "esh";
    private final int headingLevel;
    private HTMLElement iconContainer;
    private HTMLElement titleElement;

    EmptyStateHeader(int headingLevel) {
        super(SUB_COMPONENT_NAME, div().css(component(emptyState, header)).element());
        if (verifyRange(element(), "headingLevel", headingLevel, 1, 6)) {
            this.headingLevel = headingLevel;
        } else {
            this.headingLevel = 1;
        }
    }

    // ------------------------------------------------------ builder

    public EmptyStateHeader spinner() {
        return spinner("Loading");
    }

    public EmptyStateHeader spinner(String label) {
        removeIcon();
        failSafeIconContainer().appendChild(Spinner.spinner(Size.xl, label).element());
        return this;
    }

    @Override
    public EmptyStateHeader icon(Element icon) {
        removeIcon();
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    public EmptyStateHeader icon(PredefinedIcon icon, Status status) {
        icon(icon.element());
        EmptyState emptyState = lookupComponent();
        swap(emptyState, emptyState.element(), status, Status.values());
        return this;
    }

    public EmptyStateHeader icon(Element icon, Status status) {
        icon(icon);
        EmptyState emptyState = lookupComponent();
        swap(emptyState, emptyState.element(), status, Status.values());
        return this;
    }

    @Override
    public EmptyStateHeader removeIcon() {
        failSafeRemoveFromParent(failSafeIconContainer());
        iconContainer = null;
        return this;
    }

    @Override
    public EmptyStateHeader text(String text) {
        failSafeTitleElement().textContent = text;
        return this;
    }

    @Override
    public EmptyStateHeader that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        if (titleElement != null) {
            return titleElement.textContent;
        }
        return "";
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(element(), iconContainer = div().css(component(emptyState, icon)).element());
        }
        return iconContainer;
    }

    private HTMLElement failSafeTitleElement() {
        if (titleElement == null) {
            add(div().css(component(emptyState, title))
                    .add(titleElement = h(headingLevel).css(component(emptyState, title, text)).element())
                    .element());
        }
        return titleElement;
    }

    private void iconColor(String color) {
        componentVar(component(emptyState, icon), Color).applyTo(iconContainer).set(color);
    }
}
