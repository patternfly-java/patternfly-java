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

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.handler.Callback;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLParagraphElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.alert.AlertActionGroup.alertActionGroup;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.layout.Classes.action;
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
public class Alert extends BaseComponent<HTMLDivElement, Alert> implements Inline<HTMLDivElement, Alert> {

    // ------------------------------------------------------ factory methods

    public static Alert custom(String title) {
        return new Alert(AlertType.custom, title);
    }

    public static Alert info(String title) {
        return new Alert(AlertType.info, title);
    }

    public static Alert success(String title) {
        return new Alert(AlertType.success, title);
    }

    public static Alert warning(String title) {
        return new Alert(AlertType.warning, title);
    }

    public static Alert danger(String title) {
        return new Alert(AlertType.danger, title);
    }

    // ------------------------------------------------------ instance

    public static final String ARIA_CLOSE_BUTTON = "ARIA_CLOSE_BUTTON";

    private final AlertType alertType;
    private final String title;
    private final HTMLContainerBuilder<HTMLParagraphElement> titleElement;
    private Callback callback;
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
                .add(title));
    }

    @Override
    public Alert that() {
        return this;
    }

    // ------------------------------------------------------ add methods

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
     * Wraps the description inside a {@code
     *
     *
     *
    <p>
     *
     *
    <p>
     *
    <p>
     *
    <p/>
     * } element, adds it to a {@link AlertDescription} and finally adds it to this alert. Useful if your description is just a
     * simple string.
     */
    public Alert addDescription(String description) {
        return add(alertDescription().add(p().textContent(description)));
    }

    public Alert addDescription(AlertDescription description) {
        return add(description);
    }

    // ------------------------------------------------------ public API

    public void close() {
        failSafeRemoveFromParent(element());
        if (callback != null) {
            callback.call();
        }
    }

    public Alert closable() {
        return closable(null);
    }

    public Alert closable(Callback callback) {
        return add(div().css(component(alert, Classes.action))
                .add(closeButton = button(times, "close " + alertType.aria + ": " + title)
                        .on(click, e -> {
                            if (callback != null) {
                                callback.call();
                            }
                            close();
                        })));
    }

    public Alert truncate() {
        return truncate(1);
    }

    public Alert truncate(int lines) {
        titleElement.css(modifier(truncate));
        if (lines != 1) {
            titleElement.style("--pf-v5-c-alert__title--max-lines: " + lines);
        }
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

    // ------------------------------------------------------ events

    public Alert onClose(Callback callback) {
        this.callback = callback;
        return this;
    }

    // ------------------------------------------------------ internals

    boolean hasClose() {
        By selector = By.classname(component(alert, action)).desc(By.classname(times.className));
        return find(selector) != null;
    }
}
