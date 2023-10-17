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
package org.patternfly.component.chip;

import java.util.Objects;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.HasValue;
import org.patternfly.handler.CloseHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.chip;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.PredefinedIcon.times;

/**
 * A chip is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of
 * objects.
 *
 * @see <a href="https://www.patternfly.org/components/chip/html">https://www.patternfly.org/components/chip/html</a>
 */
public class Chip extends BaseComponent<HTMLElement, Chip>
        implements HasValue<String>, ComponentReference<ChipGroup>, Closeable<HTMLElement, Chip> {

    // ------------------------------------------------------ factory

    public static Chip chip(String text) {
        return new Chip(div(), text);
    }

    // ------------------------------------------------------ instance

    private static final int DEFAULT_MAX_WIDTH = 16; // characters

    final String id;
    final HTMLElement textElement;
    private final HTMLElement contentElement;
    private final HTMLElement actionsElement;
    private ChipGroup chipGroup;
    private Badge badge;
    private Button closeButton;
    private CloseHandler<Chip> closeHandler;

    <E extends HTMLElement> Chip(HTMLContainerBuilder<E> builder, String text) {
        super(builder.css(component(chip)).element(), ComponentType.Chip);
        this.id = Id.unique(componentType().id);

        String textId = Id.unique(id, "text");
        String buttonId = Id.unique(id, "close");
        add(contentElement = span().css(component(chip, content))
                .add(textElement = span().css(component(chip, Classes.text))
                        .id(textId)
                        .textContent(text)
                        .element())
                .element());
        add(actionsElement = span().css(component(chip, actions))
                .add(closeButton = button(times, "Close")
                        .plain()
                        .id(buttonId)
                        .aria(labelledBy, buttonId + " " + textId)
                        .on(click, event -> close(event, true)))
                .element());

        if (text != null && text.length() > DEFAULT_MAX_WIDTH) {
            element().tabIndex = 0;
        }
    }

    @Override
    public void passComponent(ChipGroup chipGroup) {
        this.chipGroup = chipGroup;
    }

    @Override
    public ChipGroup mainComponent() {
        return chipGroup;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        Chip chip = (Chip) o;
        return Objects.equals(id, chip.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    // ------------------------------------------------------ add

    public Chip addBadge(Badge badge) {
        return add(badge);
    }

    // override to assure internal wiring
    public Chip add(Badge badge) {
        this.badge = badge;
        contentElement.appendChild(badge.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public Chip readonly() {
        failSafeRemoveFromParent(actionsElement);
        closeButton = null;
        return onClose(null);
    }

    public Chip maxWidth(String maxWidth) {
        element().style.cssText += "--pf-v5-c-chip__text--MaxWidth: " + maxWidth;
        element().tabIndex = 0;
        return this;
    }

    @Override
    public Chip that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Chip ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public Chip onClose(CloseHandler<Chip> closeHandler) {
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return textElement.textContent;
    }

    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            if (chipGroup != null) {
                chipGroup.close(this);
            } else {
                failSafeRemoveFromParent(this);
            }
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    public Badge badge() {
        return badge;
    }

    // ------------------------------------------------------ internal

    private void foo() {
        // internal stuff happens here
    }
}
