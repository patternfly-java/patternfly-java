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

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.Severity;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithText;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modalBox;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.title;

public class ModalHeaderTitle extends ModalSubComponent<HTMLElement, ModalHeaderTitle> implements
        WithIcon<HTMLElement, ModalHeaderTitle>,
        WithText<HTMLElement, ModalHeaderTitle> {

    // ------------------------------------------------------ factory

    public static ModalHeaderTitle modalHeaderTitle() {
        return new ModalHeaderTitle();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mht";
    private final HTMLContainerBuilder<HTMLElement> text;
    Severity severity;
    private HTMLElement failSafeIconElement;
    private HTMLElement failSafeScreenReaderElement;

    ModalHeaderTitle() {
        super(SUB_COMPONENT_NAME, h(1).css(component(modalBox, title))
                .element());
        add(text = span().css(component(modalBox, title, Classes.text)));
    }

    // ------------------------------------------------------ builder

    public ModalHeaderTitle severity(Severity severity) {
        if (this.severity != null) {
            removeIcon();
        }
        this.severity = severity;
        icon(severity.icon.get());
        failSafeScreenReaderElement().textContent = severity.aria;
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
        this.text.textNode(text);
        return this;
    }

    @Override
    public ModalHeaderTitle that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return Elements.textNode(text);
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconElement() {
        if (failSafeIconElement == null) {
            insertFirst(element(), failSafeIconElement = span().css(component(modalBox, title, icon))
                    .element());
        }
        return failSafeIconElement;
    }

    private HTMLElement failSafeScreenReaderElement() {
        if (failSafeScreenReaderElement == null) {
            insertAfter(failSafeScreenReaderElement = span().css(screenReader).element(), failSafeIconElement());
        }
        return failSafeScreenReaderElement;
    }
}
