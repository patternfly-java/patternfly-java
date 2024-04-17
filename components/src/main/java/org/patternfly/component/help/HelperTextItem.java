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
package org.patternfly.component.help;

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.HasValue;
import org.patternfly.component.IconPosition;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithIconAndText;
import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.dynamic;
import static org.patternfly.style.Classes.helperText;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;

public class HelperTextItem extends HelperTextSubComponent<HTMLElement, HelperTextItem> implements
        WithIcon<HTMLElement, HelperTextItem>,
        WithText<HTMLElement, HelperTextItem>,
        WithIconAndText<HTMLElement, HelperTextItem>,
        HasValue<String> {

    // ------------------------------------------------------ factory

    public static HelperTextItem helperTextItem() {
        return new HelperTextItem(div(), null, default_);
    }

    public static HelperTextItem helperTextItem(String text) {
        return new HelperTextItem(div(), text, default_);
    }

    public static HelperTextItem helperTextItem(String text, ValidationStatus status) {
        return new HelperTextItem(div(), text, status);
    }

    public static <E extends HTMLElement> HelperTextItem helperTextItem(HTMLContainerBuilder<E> builder) {
        return new HelperTextItem(builder, null, default_);
    }

    public static <E extends HTMLElement> HelperTextItem helperTextItem(HTMLContainerBuilder<E> builder, String text) {
        return new HelperTextItem(builder, text, default_);
    }

    public static <E extends HTMLElement> HelperTextItem helperTextItem(HTMLContainerBuilder<E> builder, String text,
            ValidationStatus status) {
        return new HelperTextItem(builder, text, status);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "hti";

    private final HTMLElement textElement;
    private boolean defaultIcon;
    private boolean customScreenReaderText;
    private ValidationStatus status;
    private HTMLElement screenReaderElement;
    private HTMLElement iconContainer;

    <E extends HTMLElement> HelperTextItem(HTMLContainerBuilder<E> builder, String text, ValidationStatus status) {
        super(SUB_COMPONENT_NAME, builder.css(component(helperText, item)).element());
        this.status = status;
        this.defaultIcon = false;
        this.customScreenReaderText = false;
        if (status != default_) {
            css(status.modifier);
        }
        element().appendChild(textElement = span().css(component(helperText, item, Classes.text)).element());
        if (text != null) {
            textElement.textContent = text;
        }
    }

    // ------------------------------------------------------ builder

    public HelperTextItem dynamic() {
        if (!customScreenReaderText) {
            defaultScreenReaderText();
        }
        return css(modifier(dynamic));
    }

    public HelperTextItem defaultIcon() {
        defaultIcon = true;
        failSafeIconContainer().appendChild(status.icon.css("fa-fw").element());
        return this;
    }

    @Override
    public HelperTextItem icon(Element icon) {
        if (!icon.classList.contains("fa-fw")) {
            icon.classList.add("fa-fw");
        }
        removeChildrenFrom(iconContainer);
        failSafeIconContainer().append(icon);
        return this;
    }

    @Override
    public HelperTextItem removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    @Override
    public HelperTextItem iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    public HelperTextItem status(ValidationStatus status) {
        return status(status, defaultIcon ? status.icon.element() : null);
    }

    public HelperTextItem status(ValidationStatus status, PredefinedIcon icon) {
        return status(status, icon.element());
    }

    public HelperTextItem status(ValidationStatus status, Element icon) {
        if (this.status != default_) {
            element().classList.remove(this.status.modifier);
        }
        this.status = status;
        css(status.modifier);
        if (icon != null) {
            icon(icon);
        }
        if (!customScreenReaderText) {
            defaultScreenReaderText();
        }
        return this;
    }

    @Override
    public HelperTextItem text(String text) {
        // don't override a possible screen reader text by calling
        // textElement.textContent = text;
        // instead modify the first text node of textElement:
        wrapHtmlElement(textElement).textNode(text);
        return this;
    }

    public HelperTextItem screenReader(String text) {
        customScreenReaderText = true;
        failSafeScreenReaderElement().textContent = text;
        return this;
    }

    @Override
    public HelperTextItem that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return Elements.textNode(textElement);
    }

    @Override
    public String text() {
        return value();
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(element(),
                    iconContainer = div().css(component(helperText, item, icon))
                            .aria(Aria.hidden, true)
                            .element());
        }
        return iconContainer;
    }

    private HTMLElement failSafeScreenReaderElement() {
        if (screenReaderElement == null) {
            textElement.appendChild(screenReaderElement = span().css(screenReader).element());
        }
        return screenReaderElement;
    }

    private void defaultScreenReaderText() {
        failSafeScreenReaderElement().textContent = ": " + status.name() + " status;";
    }
}
