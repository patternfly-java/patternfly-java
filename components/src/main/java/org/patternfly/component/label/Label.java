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
package org.patternfly.component.label;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.ButtonType;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.InputType;
import org.jboss.elemento.Key;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentIconAndText;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasValue;
import org.patternfly.component.IconPosition;
import org.patternfly.component.Severity;
import org.patternfly.component.button.Button;
import org.patternfly.component.tooltip.TooltipToggle;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Color;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.clickable;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.editable;
import static org.patternfly.style.Classes.editableActive;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Color.grey;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.MaxWidth;

/**
 * The label component allows users to add specific element captions for user clarity and convenience.
 *
 * @see <a href= "https://www.patternfly.org/components/label">https://www.patternfly.org/components/label</a>
 */
public class Label extends BaseComponent<HTMLElement, Label> implements
        Attachable,
        Closeable<HTMLElement, Label>,
        Compact<HTMLElement, Label>,
        ComponentContext<HTMLElement, Label>,
        ComponentIcon<HTMLElement, Label>,
        ComponentIconAndText<HTMLElement, Label>,
        Disabled<HTMLElement, Label>,
        ElementTextDelegate<HTMLElement, Label>,
        HasIdentifier<HTMLElement, Label>,
        HasValue<String> {

    // ------------------------------------------------------ factory

    public static Label label(String text) {
        return new Label(span(), Id.unique(ComponentType.Label.id), text, grey);
    }

    public static Label label(String identifier, String text) {
        return new Label(span(), identifier, text, grey);
    }

    public static Label label(String text, Color color) {
        return new Label(span(), Id.unique(ComponentType.Label.id), text, color);
    }

    public static Label label(String identifier, String text, Color color) {
        return new Label(span(), identifier, text, color);
    }

    public static <E extends HTMLElement> Label label(HTMLContainerBuilder<E> builder, String identifier, String text, Color color) {
        return new Label(builder, identifier, text, color);
    }

    // ------------------------------------------------------ instance

    final HTMLElement textElement;
    private final String identifier;
    private final Map<String, Object> data;
    private final TooltipToggle tooltipToggle;
    private final List<CloseHandler<Label>> closeHandler;
    private final List<ComponentHandler<Label>> clickHandler;
    private final List<LabelEditCancelHandler> editCancelHandler;
    private final List<LabelEditCompleteHandler> editCompleteHandler;
    private HTMLElement contentElement;
    private HTMLElement actionsElement;
    private HTMLElement iconContainer;
    private HTMLInputElement inputElement;
    private Button closeButton;
    private HandlerRegistration cancelEditModeOnDocumentClick;

    <E extends HTMLElement> Label(HTMLContainerBuilder<E> builder, String identifier, String text, Color color) {
        super(ComponentType.Label, builder.css(component(Classes.label), color.modifier)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.closeHandler = new ArrayList<>();
        this.clickHandler = new ArrayList<>();
        this.editCancelHandler = new ArrayList<>();
        this.editCompleteHandler = new ArrayList<>();

        element().appendChild(contentElement = span().css(component(Classes.label, content))
                .add(textElement = span().css(component(Classes.label, Classes.text))
                        .text(text)
                        .element())
                .element());
        tooltipToggle = new TooltipToggle(textElement);
        Attachable.register(this, this);
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        tooltipToggle.eval();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        tooltipToggle.stop();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Label label = (Label) o;
        return Objects.equals(identifier, label.identifier);
    }

    @Override
    public int hashCode() {
        return Objects.hash(identifier);
    }

    // ------------------------------------------------------ builder

    @Override
    public Label disabled(boolean disabled) {
        if (closeButton != null) {
            closeButton.disabled(disabled);
        }
        return Disabled.super.disabled(disabled);
    }

    /** Same as {@linkplain #filled(boolean) filled(true)} */
    public Label filled() {
        return filled(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(filled)} */
    public Label filled(boolean filled) {
        return toggleModifier(that(), element(), Classes.filled, filled);
    }

    /** Same as {@linkplain #outline(boolean) outline(true)} */
    public Label outline() {
        return outline(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(outline)} */
    public Label outline(boolean outline) {
        return toggleModifier(that(), element(), Classes.outline, outline);
    }

    public Label closable() {
        return closable(null);
    }

    public Label closable(CloseHandler<Label> closeHandler) {
        onClose(closeHandler);
        insertAfter(actionsElement = span().css(component(Classes.label, actions))
                .add(closeButton = Button.button()
                        .icon(times())
                        .plain()
                        .noPadding()
                        .aria(Aria.label, "Close " + textElement.textContent)
                        .on(click, event -> close(event, true)))
                .element(), contentElement);
        return this;
    }

    public Label clickable() {
        return clickable(null);
    }

    public Label clickable(ComponentHandler<Label> clickHandler) {
        css(modifier(clickable));
        onClick(clickHandler);
        replaceContent(button(ButtonType.button).css(component(Classes.label, content))
                .on(click, e -> {
                    if (this.clickHandler != null) {
                        this.clickHandler.forEach(ch -> ch.handle(e, this));
                    }
                })
                .element());
        return this;
    }

    public Label editable() {
        return editable(null, null);
    }

    public Label editable(LabelEditCancelHandler cancelHandler, LabelEditCompleteHandler completeHandler) {
        onEditCancel(cancelHandler);
        onEditComplete(completeHandler);
        replaceContent(button(ButtonType.button).css(component(Classes.label, content))
                .aria(Aria.label, "Editable label with text " + textElement.textContent)
                .on(click, e -> enterEdit())
                .on(keydown, e -> {
                    if (Key.Enter.match(e)) {
                        enterEdit();
                    }
                })
                .element());
        return css(modifier(editable));
    }

    @Override
    public Label icon(Element icon) {
        if (iconContainer == null) {
            insertBefore(iconContainer = span().css(component(Classes.label, Classes.icon)).element(), textElement);
        }
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public Label removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    @Override
    public Label iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    public Label href(String href) {
        css(modifier(clickable));
        replaceContent(a(href).css(component(Classes.label, content)).element());
        return this;
    }

    public Label status(Severity severity) {
        css(severity.status.modifier());
        removeIcon();
        icon(severity.icon.get());
        return this;
    }

    @Override
    public Label text(String text) {
        Elements.textNode(textElement, text);
        tooltipToggle.eval();
        return this;
    }

    public Label textMaxWidth(String maxWidth) {
        // --pf-v6-c-label__text--MaxWidth: <maxWidth>
        componentVar(component(Classes.label, Classes.text), MaxWidth).applyTo(textElement).set(maxWidth);
        tooltipToggle.eval();
        return this;
    }

    @Override
    public <T> Label store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public Label that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Label ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Label onClose(CloseHandler<Label> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    public Label onClick(ComponentHandler<Label> clickHandler) {
        if (clickHandler != null) {
            this.clickHandler.add(clickHandler);
        }
        return this;
    }

    public Label onEditCancel(LabelEditCancelHandler cancelHandler) {
        if (cancelHandler != null) {
            this.editCancelHandler.add(cancelHandler);
        }
        return this;
    }

    public Label onEditComplete(LabelEditCompleteHandler completeHandler) {
        if (completeHandler != null) {
            this.editCompleteHandler.add(completeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api


    @Override
    public String identifier() {
        return identifier;
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

    @Override
    public String value() {
        return textElement.textContent;
    }

    @Override
    public String text() {
        return Elements.textNode(textElement);
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            LabelGroup labelGroup = lookupComponent(ComponentType.LabelGroup, true);
            if (labelGroup != null) {
                labelGroup.close(this);
            } else {
                failSafeRemoveFromParent(this);
            }
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    // ------------------------------------------------------ internal

    private void replaceContent(HTMLElement newContent) {
        for (Iterator<HTMLElement> iterator = iterator(contentElement); iterator.hasNext(); ) {
            HTMLElement element = iterator.next();
            newContent.appendChild(element);
        }
        contentElement.replaceWith(newContent);
        contentElement = newContent;
    }

    private void enterEdit() {
        tooltipToggle.stop();
        setVisible(contentElement, false);
        setVisible(actionsElement, false);
        failSafeInputElement().value = textElement.textContent;
        cancelEditModeOnDocumentClick = bind(document, EventType.click, true, e -> {
            if (!failSafeInputElement().contains(((Node) e.target))) {
                completeEdit(e, failSafeInputElement().value);
            }
        });
        element().classList.add(modifier(editableActive));
        setVisible(failSafeInputElement(), true);
        failSafeInputElement().focus();
    }

    private void cancelEdit(Event event, String previousText) {
        editCancelHandler.forEach(ech -> ech.cancel(event, this, previousText));
        leaveEdit();
    }

    private void completeEdit(Event event, String newText) {
        Elements.textNode(textElement, newText);
        editCompleteHandler.forEach(ech -> ech.complete(event, this, newText));
        leaveEdit();
    }

    private void leaveEdit() {
        if (cancelEditModeOnDocumentClick != null) {
            cancelEditModeOnDocumentClick.removeHandler();
        }
        setVisible(failSafeInputElement(), false);
        element().classList.remove(modifier(editableActive));
        setVisible(contentElement, true);
        setVisible(actionsElement, true);
        tooltipToggle.eval();
    }

    private HTMLInputElement failSafeInputElement() {
        if (inputElement == null) {
            element().appendChild(inputElement = input(InputType.text)
                    .css(component(Classes.label, content))
                    .on(keydown, e -> {
                        if (Key.Enter.match(e)) {
                            completeEdit(e, ((HTMLInputElement) e.target).value);
                        } else if (Key.Escape.match(e)) {
                            cancelEdit(e, textElement.textContent);
                        }
                    })
                    .element());
        }
        return inputElement;
    }
}
