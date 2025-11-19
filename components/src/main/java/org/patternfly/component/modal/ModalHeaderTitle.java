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
package org.patternfly.component.modal;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.Severity;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modalBox;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.title;
import static org.patternfly.style.TypedModifier.swap;

public class ModalHeaderTitle extends ModalSubComponent<HTMLElement, ModalHeaderTitle> implements
        ComponentIcon<HTMLElement, ModalHeaderTitle>,
        ElementTextDelegate<HTMLElement, ModalHeaderTitle> {

    // ------------------------------------------------------ factory

    public static ModalHeaderTitle modalHeaderTitle() {
        return new ModalHeaderTitle();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "mht";
    private final HTMLElement textElement;
    Severity severity;
    private HTMLElement failSafeIconElement;

    ModalHeaderTitle() {
        super(SUB_COMPONENT_NAME, h(1).css(component(modalBox, title))
                .element());
        add(textElement = span().css(component(modalBox, title, Classes.text)).element());
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    public ModalHeaderTitle severity(Severity severity) {
        if (this.severity != null) {
            removeIcon();
        }
        swap(this, element(), severity.status, this.severity != null ? this.severity.status : null,
                () -> this.severity = severity);
        icon(severity.icon.get());
        return this;
    }

    @Override
    public ModalHeaderTitle icon(Element icon) {
        classList().add(modifier(Classes.icon));
        failSafeIconElement().appendChild(icon);
        return this;
    }

    @Override
    public ModalHeaderTitle removeIcon() {
        classList().remove(modifier(icon));
        failSafeRemoveFromParent(failSafeIconElement);
        failSafeIconElement = null;
        return null;
    }

    @Override
    public ModalHeaderTitle text(String text) {
        Elements.textNode(textElement, text);
        return this;
    }

    @Override
    public ModalHeaderTitle that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return Elements.textNode(textElement);
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconElement() {
        if (failSafeIconElement == null) {
            insertFirst(element(), failSafeIconElement = span().css(component(modalBox, title, icon))
                    .element());
        }
        return failSafeIconElement;
    }
}
