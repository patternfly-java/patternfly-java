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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.Severity;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Modifiers.Plain;

import elemental2.core.JsDate;
import elemental2.dom.Element;
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
import static org.patternfly.core.Aria.atomic;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.live;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.alert;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Classes.truncate;
import static org.patternfly.style.Variable.componentVar;

/**
 * An alert is a notification that provides brief information to the user without blocking their workflow.
 *
 * @see <a href= "https://www.patternfly.org/components/alert">https://www.patternfly.org/components/alert</a>
 */
public class Alert extends BaseComponent<HTMLDivElement, Alert> implements
        Closeable<HTMLDivElement, Alert>,
        ComponentContext<HTMLDivElement, Alert>,
        ComponentIcon<HTMLDivElement, Alert>,
        Expandable<HTMLDivElement, Alert>, Attachable,
        HasIdentifier<HTMLDivElement, Alert>,
        Inline<HTMLDivElement, Alert>,
        Plain<HTMLDivElement, Alert> {

    // ------------------------------------------------------ factory

    public static Alert alert(Severity type, String title) {
        return new Alert(type, Id.unique(ComponentType.Alert.id), title);
    }

    public static Alert alert(Severity type, String identifier, String title) {
        return new Alert(type, identifier, title);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Alert.class.getName());
    public static final int DEFAULT_TIMEOUT = 8_000; // ms
    static final int NO_TIMEOUT = -1; // ms
    static final int MIN_TIMEOUT = 1_000; // ms

    int timeout;
    boolean expandable;
    Button closeButton;
    private double timeoutHandle;
    private final String identifier;
    private final Severity severity;
    private final String title;
    private final double timestamp;
    private final HTMLElement iconContainer;
    private final HTMLParagraphElement titleElement;
    private final Map<String, Object> data;
    private final List<CloseHandler<Alert>> closeHandler;
    private Button toggleButton;
    private AlertDescription description;
    private ToggleHandler<Alert> toggleHandler;

    Alert(Severity severity, String identifier, String title) {
        super(ComponentType.Alert, div().css(component(alert), severity.status.modifier())
                .data(Dataset.identifier, identifier)
                .aria(label, severity.aria)
                .element());
        this.identifier = identifier;
        this.severity = severity;
        this.title = title;
        this.timestamp = JsDate.now();
        this.data = new HashMap<>();
        this.timeoutHandle = 0;
        this.timeout = NO_TIMEOUT;
        this.expandable = false;
        this.closeHandler = new ArrayList<>();

        add(iconContainer = div().css(component(alert, icon))
                .add(severity.icon.get().element())
                .element());
        add(titleElement = p().css(component(alert, Classes.title))
                .add(span().css(screenReader).text(severity.aria + ":"))
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
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        clearTimeout(timeoutHandle);
    }

    // ------------------------------------------------------ add

    public Alert addActionGroup(AlertActionGroup actionGroup) {
        return add(actionGroup);
    }

    /**
     * Wraps the description inside a <code>&lt;p/&gt;</code> element, adds it to a {@link AlertDescription} and finally adds it
     * to this alert. Useful if your description is just a simple string.
     */
    public Alert addDescription(String description) {
        return add(alertDescription().add(p().text(description)));
    }

    public Alert addDescription(AlertDescription description) {
        return add(description);
    }

    // override to ensure internal wiring
    public Alert add(AlertDescription description) {
        this.description = description;
        this.description.element().hidden = element().classList.contains(modifier(Classes.expandable)) && !expanded();
        add(description.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public Alert closable() {
        return closable(null);
    }

    public Alert closable(CloseHandler<Alert> closeHandler) {
        insertAfter(div().css(component(alert, Classes.action))
                .add(closeButton = button().icon(times().element()).plain()
                        .aria(label, "Close " + severity.aria + ": " + title)
                        .on(click, event -> close(event, true)))
                .element(), titleElement);
        return onClose(closeHandler);
    }

    @Override
    public Alert icon(Element icon) {
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public Alert removeIcon() {
        logger.warn("Removing the icon is not supported for alert %o", element());
        return this;
    }

    public Alert expandable() {
        return expandable(null);
    }

    public Alert expandable(ToggleHandler<Alert> toggleHandler) {
        css(modifier(Classes.expandable));
        insertFirst(element(), div().css(component(alert, toggle))
                .add(toggleButton = button().plain()
                        .on(click, e -> toggle())
                        .aria(expanded, false)
                        .aria(label, severity.aria + ": " + title + " details")
                        .add(span().css(component(alert, toggle, icon))
                                .add(angleRight().element())))
                .element());
        this.expandable = true;
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
     * "https://www.patternfly.org/components/alert/accessibility#accessibility">https://www.patternfly.org/components/alert/accessibility#accessibility</a>
     * @see <a href=
     * "https://www.patternfly.org/components/alert/accessibility#aria-live">https://www.patternfly.org/components/alert/accessibility#aria-live</a>
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
        // TODO Add tooltip
        titleElement.classList.add(modifier(truncate));
        if (lines != 1) {
            componentVar(component(alert, Classes.title), "max-lines").applyTo(titleElement).set(lines);
        }
        return this;
    }

    @Override
    public <T> Alert store(String key, T value) {
        data.put(key, value);
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
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
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
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            stopTimeout();
            AlertGroup alertGroup = lookupComponent(ComponentType.AlertGroup, true);
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
        if (!expandable) {
            logger.warn("Alert %o is not expandable. Please use Alert.expandable() to make this an expandable alert.",
                    element());
            return;
        }
        Expandable.collapse(element(), toggleButton.element(), description.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expandable) {
            logger.warn("Alert %o is not expandable. Please use Alert.expandable() to make this an expandable alert.",
                    element());
            return;
        }
        Expandable.expand(element(), toggleButton.element(), description.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    public double timestamp() {
        return timestamp;
    }

    // ------------------------------------------------------ internal

    private void startTimeout() {
        timeoutHandle = setTimeout((o) -> close(), timeout);
    }

    private void stopTimeout() {
        clearTimeout(timeoutHandle);
    }
}
