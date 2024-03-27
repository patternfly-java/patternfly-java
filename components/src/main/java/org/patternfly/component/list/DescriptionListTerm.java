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
package org.patternfly.component.list;

import org.patternfly.component.WithIcon;
import org.patternfly.component.WithText;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.ElementDelegate;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.descriptionList;
import static org.patternfly.style.Classes.helpText;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.term;

public class DescriptionListTerm extends DescriptionListSubComponent<HTMLElement, DescriptionListTerm> implements
        WithIcon<HTMLElement, DescriptionListTerm>,
        WithText<HTMLElement, DescriptionListTerm>,
        ElementDelegate<HTMLElement, DescriptionListTerm> {

    // ------------------------------------------------------ factory

    public static DescriptionListTerm descriptionListTerm() {
        return new DescriptionListTerm(null);
    }

    public static DescriptionListTerm descriptionListTerm(String text) {
        return new DescriptionListTerm(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlg";
    private final HTMLElement textElement;
    private HTMLElement iconContainer;

    DescriptionListTerm(String text) {
        super(SUB_COMPONENT_NAME, dt().css(component(descriptionList, term)).element());
        element().appendChild(textElement = span().css(component(descriptionList, Classes.text)).element());
        if (text != null) {
            text(text);
        }
    }

    @Override
    public HTMLElement delegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public DescriptionListTerm text(String text) {
        wrapHtmlElement(textElement).textNode(text);
        return this;
    }

    @Override
    public DescriptionListTerm icon(Element icon) {
        removeChildrenFrom(iconContainer);
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    @Override
    public DescriptionListTerm removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        iconContainer = null;
        return this;
    }

    public DescriptionListTerm help(Popover popover) {
        textElement.classList.add(modifier(helpText));
        textElement.setAttribute(role, "button");
        textElement.setAttribute("type", "button");
        textElement.tabIndex = 0;
        popover.trigger(textElement).appendToBody();
        return this;
    }

    @Override
    public DescriptionListTerm that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(element(), iconContainer = span().css(component(descriptionList, term, icon)).element());
        }
        return iconContainer;
    }
}
