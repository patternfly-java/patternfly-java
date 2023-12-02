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

import java.util.Iterator;
import java.util.Objects;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.InputType;
import org.jboss.elemento.Key;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.IconPosition;
import org.patternfly.component.button.Button;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.component.tooltip.TooltipToggle;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Compact;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithIconAndText;
import org.patternfly.core.WithText;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Color;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.patternfly.core.Modifiers.toggleModifier;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.editable;
import static org.patternfly.layout.Classes.editableActive;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Color.grey;
import static org.patternfly.layout.PredefinedIcon.times;
import static org.patternfly.layout.Variable.componentVar;
import static org.patternfly.layout.Variables.MaxWidth;

/**
 * The label component allows users to add specific element captions for user clarity and convenience.
 *
 * @see <a href= "https://www.patternfly.org/components/label/html">https://www.patternfly.org/components/label/html</a>
 */
public class Label extends BaseComponentFlat<HTMLElement, Label> implements
        Closeable<HTMLElement, Label>,
        Compact<HTMLElement, Label>,
        WithText<HTMLElement, Label>,
        WithIcon<HTMLElement, Label>,
        WithIconAndText<HTMLElement, Label>,
        HasValue<String>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Label label(String text) {
        return new Label(span(), text, grey);
    }

    public static Label label(String text, Color color) {
        return new Label(span(), text, color);
    }

    // ------------------------------------------------------ instance

    final String id;
    final HTMLElement textElement;
    private final TooltipToggle tooltipToggle;
    private HTMLElement contentElement;
    private HTMLElement actionsElement;
    private HTMLInputElement inputElement;
    private Tooltip tooltip;
    private Button closeButton;
    private CloseHandler<Label> closeHandler;
    private ComponentHandler<Label> clickHandler;
    private LabelEditCancelHandler editCancelHandler;
    private LabelEditCompleteHandler editCompleteHandler;
    private HandlerRegistration cancelEditModeOnDocumentClick;

    <E extends HTMLElement> Label(HTMLContainerBuilder<E> builder, String text, Color color) {
        super(ComponentType.Label, builder.css(component(Classes.label), color.modifier).element());
        this.id = Id.unique(componentType().id);
        element().appendChild(contentElement = span().css(component(Classes.label, content))
                .add(textElement = span().css(component(Classes.label, Classes.text))
                        .textContent(text)
                        .element())
                .element());
        tooltipToggle = new TooltipToggle(textElement);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        tooltipToggle.eval();
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
        return Objects.equals(id, label.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    // ------------------------------------------------------ builder

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
                        .icon(times)
                        .plain()
                        .aria(Aria.label, "Close " + textElement.textContent)
                        .on(click, event -> close(event, true)))
                .element(), contentElement);
        return this;
    }

    public Label clickable() {
        return clickable(null);
    }

    public Label clickable(ComponentHandler<Label> clickHandler) {
        onClick(clickHandler);
        replaceContent(button()
                .css(component(Classes.label, content))
                .on(click, e -> {
                    if (this.clickHandler != null) {
                        this.clickHandler.handle(e, this);
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
        replaceContent(button().css(component(Classes.label, content))
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
    public Label icon(InlineIcon icon) {
        insertBefore(span().css(component(Classes.label, Classes.icon)).add(icon).element(), textElement);
        return this;
    }

    @Override
    public Label iconAndText(InlineIcon icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    public Label href(String href) {
        replaceContent(a(href).css(component(Classes.label, content)).element());
        return this;
    }

    @Override
    public Label text(String text) {
        textElement.textContent = text;
        tooltipToggle.eval();
        return this;
    }

    public Label textMaxWidth(String maxWidth) {
        // --pf-v5-c-label__text--MaxWidth: <maxWidth>
        componentVar(component(Classes.label, Classes.text), MaxWidth).applyTo(textElement, maxWidth);
        tooltipToggle.eval();
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
        this.closeHandler = closeHandler;
        return this;
    }

    public Label onClick(ComponentHandler<Label> clickHandler) {
        this.clickHandler = clickHandler;
        return this;
    }

    public Label onEditCancel(LabelEditCancelHandler cancelHandler) {
        this.editCancelHandler = cancelHandler;
        return this;
    }

    public Label onEditComplete(LabelEditCompleteHandler completeHandler) {
        this.editCompleteHandler = completeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return textElement.textContent;
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
        for (Iterator<HTMLElement> iterator = iterator(contentElement); iterator.hasNext();) {
            HTMLElement element = iterator.next();
            newContent.appendChild(element);
        }
        contentElement.replaceWith(newContent);
        contentElement = newContent;
    }

    private void enterEdit() {
        console.log("Enter edit mode");
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
        console.log("Cancel edit mode");
        if (editCancelHandler != null) {
            editCancelHandler.cancel(event, this, previousText);
        }
        leaveEdit();
    }

    private void completeEdit(Event event, String newText) {
        console.log("Complete edit mode");
        textElement.textContent = newText;
        if (editCompleteHandler != null) {
            editCompleteHandler.complete(event, this, newText);
        }
        leaveEdit();
    }

    private void leaveEdit() {
        console.log("Leave edit mode");
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
