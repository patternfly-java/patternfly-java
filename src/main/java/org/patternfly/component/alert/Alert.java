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

import org.jboss.elemento.Attachable;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.UnderDevelopment;
import org.patternfly.component.button.Button;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.Expandable;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.core.Modifiers.Plain;
import org.patternfly.core.Severity;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLParagraphElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.mouseout;
import static org.jboss.elemento.EventType.mouseover;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.atomic;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.live;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.alert;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expandable;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.screenReader;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.truncate;
import static org.patternfly.layout.PredefinedIcon.angleRight;
import static org.patternfly.layout.PredefinedIcon.times;
import static org.patternfly.layout.Variable.componentVar;

/**
 * An alert is a notification that provides brief information to the user without blocking their workflow.
 *
 * @see <a href= "https://www.patternfly.org/components/alert/html">https://www.patternfly.org/components/alert/html</a>
 */
@UnderDevelopment
public class Alert extends BaseComponent<HTMLDivElement, Alert> implements Inline<HTMLDivElement, Alert>,
        Plain<HTMLDivElement, Alert>, Closeable<HTMLDivElement, Alert>, Expandable<HTMLDivElement, Alert>, Attachable,
        ComponentReference<AlertGroup> {

    // ------------------------------------------------------ factory

    public static Alert alert(Severity type, String title) {
        return new Alert(type, title);
    }

    // ------------------------------------------------------ instance

    public static final int DEFAULT_TIMEOUT = 8_000; // ms
    static final int NO_TIMEOUT = -1; // ms
    static final int MIN_TIMEOUT = 1_000; // ms

    int timeout;
    Button closeButton;
    CloseHandler<Alert> closeHandler;
    private final Severity severity;
    private final String title;
    private final HTMLElement iconContainer;
    private final HTMLParagraphElement titleElement;
    private double timeoutHandle;
    private Button toggleButton;
    private AlertGroup alertGroup;
    private AlertDescription description;
    private AlertActionGroup actionGroup;
    private ToggleHandler<Alert> toggleHandler;

    Alert(Severity severity, String title) {
        super(div().css(component(alert), severity.status.modifier)
                .aria(label, severity.aria)
                .element(),
                ComponentType.Alert);
        this.severity = severity;
        this.title = title;
        this.timeout = NO_TIMEOUT;
        this.timeoutHandle = 0;

        add(iconContainer = div().css(component(alert, icon))
                .add(inlineIcon(severity.icon))
                .element());
        add(titleElement = p().css(component(alert, Classes.title))
                .add(span().css(screenReader)
                        .textContent(severity.aria + ":"))
                .add(title)
                .element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (timeout > MIN_TIMEOUT) {
            startTimeout();
            on(mouseover, e -> stopTimeout());
            on(mouseout, e -> startTimeout());
        }
        if (actionGroup != null) {
            actionGroup.passComponent(this);
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        clearTimeout(timeoutHandle);
    }

    @Override
    public void passComponent(AlertGroup alertGroup) {
        this.alertGroup = alertGroup;
    }

    /**
     * If this alert is <strong>not</strong> part of an {@link AlertGroup}, this method will return {@code null}!
     */
    @Override
    public AlertGroup mainComponent() {
        return alertGroup;
    }

    // ------------------------------------------------------ add

    public Alert addActionGroup(AlertActionGroup actionGroup) {
        return add(actionGroup);
    }

    // override to assure internal wiring
    public Alert add(AlertActionGroup actionGroup) {
        this.actionGroup = actionGroup;
        add(actionGroup.element());
        return this;
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

    // override to assure internal wiring
    public Alert add(AlertDescription description) {
        this.description = description;
        this.description.element().hidden = element().classList.contains(modifier(expandable)) && !expanded();
        add(description.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public Alert closable() {
        return closable(null);
    }

    public Alert closable(CloseHandler<Alert> closeHandler) {
        insertAfter(div().css(component(alert, Classes.action))
                .add(closeButton = button(times, "Close " + severity.aria + ": " + title)
                        .plain()
                        .on(click, event -> close(event, true)))
                .element(), titleElement);
        return onClose(closeHandler);
    }

    public Alert customIcon(String iconClass) {
        return customIcon(inlineIcon(iconClass));
    }

    public Alert customIcon(PredefinedIcon icon) {
        return customIcon(inlineIcon(icon));
    }

    public Alert customIcon(InlineIcon icon) {
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon.element());
        return this;
    }

    public Alert expandable() {
        return expandable(null);
    }

    public Alert expandable(ToggleHandler<Alert> toggleHandler) {
        css(modifier(expandable));
        insertFirst(element(), div().css(component(alert, toggle))
                .add(toggleButton = button().plain()
                        .on(click, e -> toggle())
                        .aria(expanded, false)
                        .aria(label, severity.aria + ": " + title + " details")
                        .add(span().css(component(alert, toggle, icon))
                                .add(inlineIcon(angleRight))))
                .element());
        this.toggleHandler = toggleHandler;
        return this;
    }

    /**
     * Make this alert a live region alert. Live region alerts allow you to expose dynamic content changes in a way that can be
     * announced by assistive technologies.
     * <p>
     * Set the following ARIA attributes:
     * <ul>
     * <li><code>aria-live: "polite"</code></li>
     * <li><code>aria-atomic: false</code></li>
     * </ul>
     *
     * @see <a href=
     *      "https://www.patternfly.org/components/alert/accessibility#accessibility">https://www.patternfly.org/components/alert/accessibility#accessibility</a>
     * @see <a href=
     *      "https://www.patternfly.org/components/alert/accessibility#aria-live">https://www.patternfly.org/components/alert/accessibility#aria-live</a>
     */
    public Alert liveRegion() {
        aria(live, "polite");
        aria(atomic, false);
        return this;
    }

    public Alert timeout() {
        return timeout(DEFAULT_TIMEOUT);
    }

    public Alert timeout(int timeout) {
        this.timeout = timeout;
        return this;
    }

    public Alert truncate() {
        return truncate(1);
    }

    public Alert truncate(int lines) {
        titleElement.classList.add(modifier(truncate));
        if (lines != 1) {
            componentVar(component(alert, Classes.title), "max-lines").style(titleElement, lines);
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

    // ------------------------------------------------------ events

    @Override
    public Alert onClose(CloseHandler<Alert> closeHandler) {
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            stopTimeout();
            if (alertGroup != null) {
                alertGroup.closeAlert(this);
            } else {
                failSafeRemoveFromParent(this);
            }
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), toggleButton.element(), description.element());
        if (toggleHandler != null) {
            toggleHandler.onToggle(this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), toggleButton.element(), description.element());
        if (toggleHandler != null) {
            toggleHandler.onToggle(this, true);
        }
    }

    // ------------------------------------------------------ internal

    private void startTimeout() {
        timeoutHandle = setTimeout((o) -> close(), timeout);
    }

    private void stopTimeout() {
        clearTimeout(timeoutHandle);
    }
}
