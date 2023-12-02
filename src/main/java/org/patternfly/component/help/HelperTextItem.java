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

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.IconPosition;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.ValidationStatus;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithIconAndText;
import org.patternfly.core.WithText;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.ValidationStatus.default_;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.dynamic;
import static org.patternfly.layout.Classes.helperText;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.screenReader;

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
    private HTMLElement iconElement;

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
        failSafeIconElement().appendChild(inlineIcon(status.icon).css("fa-fw").element());
        return this;
    }

    @Override
    public HelperTextItem icon(InlineIcon icon) {
        if (!icon.element().classList.contains("fa-fw")) {
            icon.element().classList.add("fa-fw");
        }
        removeChildrenFrom(iconElement);
        failSafeIconElement().append(icon.element());
        return this;
    }

    @Override
    public HelperTextItem iconAndText(InlineIcon icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    public HelperTextItem status(ValidationStatus status) {
        return status(status, defaultIcon ? inlineIcon(status.icon) : null);
    }

    public HelperTextItem status(ValidationStatus status, String iconClass) {
        return status(status, inlineIcon(iconClass));
    }

    public HelperTextItem status(ValidationStatus status, PredefinedIcon predefinedIcon) {
        return status(status, inlineIcon(predefinedIcon));
    }

    public HelperTextItem status(ValidationStatus status, InlineIcon icon) {
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
        return textElement.textContent;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconElement() {
        if (iconElement == null) {
            insertFirst(element(),
                    iconElement = div().css(component(helperText, item, icon))
                            .aria(Aria.hidden, true)
                            .element());
        }
        return iconElement;
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
