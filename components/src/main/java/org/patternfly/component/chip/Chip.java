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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.button.Button;
import org.patternfly.component.tooltip.TooltipToggle;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.chip;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.MaxWidth;

/**
 * A chip is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of
 * objects.
 *
 * @see <a href="https://www.patternfly.org/components/chip">https://www.patternfly.org/components/chip</a>
 */
public class Chip extends BaseComponent<HTMLElement, Chip> implements
        ComponentContext<HTMLElement, Chip>,
        Closeable<HTMLElement, Chip>,
        HasValue<String>,
        WithIdentifier<HTMLElement, Chip>,
        WithText<HTMLElement, Chip>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Chip chip(String text) {
        return new Chip(div(), Id.unique(ComponentType.Chip.id), text);
    }

    public static Chip chip(String identifier, String text) {
        return new Chip(div(), identifier, text);
    }

    // ------------------------------------------------------ instance

    private static final int DEFAULT_MAX_WIDTH = 16; // characters

    final HTMLElement textElement;
    private final String identifier;
    private final HTMLElement contentElement;
    private final HTMLElement actionsElement;
    private final TooltipToggle tooltipToggle;
    private final Map<String, Object> data;
    private final List<CloseHandler<Chip>> closeHandler;
    private Badge badge;
    private Button closeButton;

    <E extends HTMLElement> Chip(HTMLContainerBuilder<E> builder, String identifier, String text) {
        super(ComponentType.Chip, builder.css(component(chip))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.closeHandler = new ArrayList<>();

        String textId = Id.unique(identifier, "text");
        String buttonId = Id.unique(identifier, "close");
        add(contentElement = span().css(component(chip, content))
                .add(textElement = span().css(component(chip, Classes.text))
                        .id(textId)
                        .textContent(text)
                        .element())
                .element());
        add(actionsElement = span().css(component(chip, actions))
                .add(closeButton = button().icon(times()).plain()
                        .id(buttonId)
                        .aria(label, "Close")
                        .aria(labelledBy, buttonId + " " + textId)
                        .on(click, event -> close(event, true)))
                .element());

        tooltipToggle = new TooltipToggle(textElement);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        tooltipToggle.eval(tt -> element().tabIndex = 0, tt -> element().removeAttribute(tabindex));
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        tooltipToggle.stop();
    }

    // ------------------------------------------------------ add

    public Chip addBadge(Badge badge) {
        return add(badge);
    }

    // override to ensure internal wiring
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

    @Override
    public Chip text(String text) {
        textElement.textContent = text;
        tooltipToggle.eval(tt -> element().tabIndex = 0, tt -> element().removeAttribute(tabindex));
        return this;
    }

    public Chip textMaxWidth(String maxWidth) {
        // --pf-v5-c-chip__text--MaxWidth: <maxWidth>
        componentVar(component(chip, text), MaxWidth).applyTo(this).set(maxWidth);
        tooltipToggle.eval(tt -> element().tabIndex = 0, tt -> element().removeAttribute(tabindex));
        return this;
    }

    @Override
    public <T> Chip store(String key, T value) {
        data.put(key, value);
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
        this.closeHandler.add(closeHandler);
        return this;
    }

    // ------------------------------------------------------ api


    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public String value() {
        return textElement.textContent;
    }

    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            ChipGroup chipGroup = lookupComponent(ComponentType.ChipGroup, true);
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

    @Override
    public String text() {
        return textElement.textContent;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }
}
