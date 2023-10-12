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
package org.patternfly.component.alert;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.UnderDevelopment;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.handler.ActionHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLParagraphElement;
import elemental2.dom.MouseEvent;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.alert.AlertActionGroup.alertActionGroup;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.layout.Classes.alert;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.screenReader;
import static org.patternfly.layout.Classes.truncate;
import static org.patternfly.layout.PredefinedIcon.times;

/**
 * An alert is a notification that provides brief information to the user without blocking their workflow.
 *
 * @see <a href= "https://www.patternfly.org/components/alert/html">https://www.patternfly.org/components/alert/html</a>
 */
@UnderDevelopment
public class Alert extends BaseComponent<HTMLDivElement, Alert> implements Inline<HTMLDivElement, Alert>,
        ComponentReference<AlertGroup> {

    // ------------------------------------------------------ factory

    public static Alert alert(AlertType type, String title) {
        return new Alert(type, title);
    }

    // ------------------------------------------------------ instance

    public static final String ARIA_CLOSE_BUTTON = "ARIA_CLOSE_BUTTON";

    private final AlertType alertType;
    private final String title;
    private final HTMLParagraphElement titleElement;
    private ActionHandler<Alert> closeHandler;
    private Button closeButton;

    Alert(AlertType alertType, String title) {
        super(div().css(component(alert), alertType.status.modifier)
                .aria(label, alertType.aria)
                .element(),
                ComponentType.Alert);
        this.alertType = alertType;
        this.title = title;

        add(div().css(component(alert, icon))
                .add(inlineIcon(alertType.iconClass)
                        .aria(hidden, true)));
        add(titleElement = p().css(component(alert, Classes.title))
                .add(span().css(screenReader)
                        .textContent(alertType.aria + ":"))
                .add(title)
                .element());
    }

    @Override
    public void passComponent(AlertGroup alertGroup) {

    }

    // ------------------------------------------------------ add

    /**
     * Wraps the action inside a {@link AlertActionGroup} and adds it to this alert. Useful if you only want to add a single
     * action.
     */
    public Alert addAction(Button action) {
        return add(alertActionGroup().add(action));
    }

    public Alert addActionGroup(AlertActionGroup actionGroup) {
        return add(actionGroup);
    }

    /**
     * Wraps the description inside a <code>&lt;p/&gt;</code> element, adds it to a {@link AlertDescription} and finally adds it
     * to this alert. Useful if your description is just a simple string.
     */
    public Alert addDescription(String description) {
        return add(alertDescription().add(p().textContent(description)));
    }

    public Alert addDescription(AlertDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ builder

    public Alert closable() {
        return closable(null);
    }

    public Alert closable(ActionHandler<Alert> handler) {
        this.closeHandler = handler;
        insertAfter(div().css(component(alert, Classes.action))
                .add(closeButton = button(times, "close " + alertType.aria + ": " + title)
                        .plain())
                .element(), titleElement);
        if (handler != null) {
            closeButton.on(click, e -> handler.onAction(e, this));
        }
        return this;
    }

    public Alert truncate() {
        return truncate(1);
    }

    public Alert truncate(int lines) {
        titleElement.classList.add(modifier(truncate));
        if (lines != 1) {
            titleElement.style.cssText += "--pf-v5-c-alert__title--max-lines: " + lines;
        }
        return this;
    }

    @Override
    public Alert that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Alert ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    public Alert ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void close() {
        close(true);
    }

    public void close(boolean fireEvent) {
        failSafeRemoveFromParent(element());
        if (fireEvent && closeHandler != null) {
            closeHandler.onAction(new MouseEvent(click.name), this);
        }
    }

    // ------------------------------------------------------ internal

    boolean hasClose() {
        return closeButton != null;
    }
}
