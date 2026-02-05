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
package org.patternfly.component.wizard;

import java.util.EnumMap;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.ValidationStatus;
import org.patternfly.core.ComponentContext;
import org.patternfly.style.Modifiers.Disabled;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.wizard.WizardStepType.step;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.wizard;

public class WizardStep extends WizardSubComponent<HTMLElement, WizardStep> implements
        ComponentContext<HTMLElement, WizardStep>,
        Disabled<HTMLElement, WizardStep>,
        ElementContainerDelegate<HTMLElement, WizardStep>,
        HasIdentifier<HTMLElement, WizardStep> {

    // ------------------------------------------------------ factory

    public static WizardStep wizardStep(String identifier, String title) {
        return new WizardStep(identifier, title, step);
    }

    public static WizardStep wizardStep(String identifier, String title, WizardStepType type) {
        return new WizardStep(identifier, title, type);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzs";
    private static final Logger logger = Logger.getLogger(WizardStep.class.getName());

    private final String identifier;
    private final HTMLElement bodyElement;
    private final Map<String, Object> data;
    private ValidationStatus status;
    final String title;
    final WizardStepType type;
    final EnumMap<WizardFooterButtons, String> customButtonNames;
    boolean disabled;
    boolean visited;
    WizardStep previous;
    WizardStep next;
    WizardStepPreviousHandler previousHandler;
    WizardStepPreviousPromise previousPromise;
    WizardStepNextHandler nextHandler;
    WizardStepNextPromise nextPromise;
    WizardStepEnterHandler enterHandler;
    WizardStepLeaveHandler leaveHandler;

    WizardStep(String identifier, String title, WizardStepType type) {
        super(SUB_COMPONENT_NAME, div().css(component(wizard, main)).element());
        this.identifier = identifier;
        this.title = title;
        this.type = type;
        this.visited = false;
        this.data = new HashMap<>();
        this.customButtonNames = new EnumMap<>(WizardFooterButtons.class);
        element().appendChild(bodyElement = div().css(component(wizard, main, body)).element());
    }

    @Override
    public Element containerDelegate() {
        return bodyElement;
    }

    // ------------------------------------------------------ builder

    /**
     * Assigns a custom name to a specific button in the wizard's footer. This method allows for customizing the label of the
     * wizard's footer buttons.
     *
     * @param button the {@code WizardFooterButtons} enum representing the button to be renamed
     * @param name   the custom label to assign to the specified button
     * @return the current {@code WizardStep} instance, allowing method chaining
     */
    public WizardStep customButtonName(WizardFooterButtons button, String name) {
        customButtonNames.put(button, name);
        return this;
    }

    @Override
    public WizardStep disabled(boolean disabled) {
        this.disabled = disabled;
        applyToNavItem(navItem -> navItem.disabled(disabled));
        return this;
    }

    @Override
    public <T> WizardStep store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public WizardStep that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Assigns a callback to be executed when navigating to the previous step in a wizard workflow. This method allows for
     * defining custom behavior when the user attempts to transition to a previous step.
     * <p>
     * If a previous promise is already set, the existing promise will be cleared, and the new callback will overwrite it.
     *
     * @param handler the callback to be invoked during the transition to a previous step
     * @return the current instance of {@code WizardStep}, enabling method chaining
     */
    public WizardStep previousIf(WizardStepPreviousHandler handler) {
        if (previousPromise != null) {
            logger.warn("Previous promise already set for step '{}'. Overwriting with callback.", identifier);
            previousPromise = null;
        }
        this.previousHandler = handler;
        return this;
    }

    /**
     * Associates a promise to handle the transition when navigating to the previous step in a wizard workflow. This method
     * enables defining custom asynchronous behavior for the step transition.
     * <p>
     * If a previous callback is already set, the existing callback will be cleared, and the new promise will overwrite it.
     *
     * @param promise the {@code WizardPreviousPromise} to be executed during the transition to a previous step
     * @return the current {@code WizardStep} instance, allowing method chaining
     */
    public WizardStep previousIfPromised(WizardStepPreviousPromise promise) {
        if (previousHandler != null) {
            logger.warn("Previous callback already set for step '{}'. Overwriting with promise.", identifier);
            previousHandler = null;
        }
        this.previousPromise = promise;
        return this;
    }

    /**
     * Configures a callback to handle the transition to the next step in a wizard workflow. This method enables defining custom
     * behavior that should occur when attempting to navigate from the current step to the next step.
     * <p>
     * If a next promise is already set, it will be cleared, and the new callback will overwrite the existing configuration.
     *
     * @param handler the callback to be executed during the transition to the next step
     * @return the current instance of {@code WizardStep} to allow method chaining
     */
    public WizardStep nextIf(WizardStepNextHandler handler) {
        if (nextPromise != null) {
            logger.warn("Next promise already set for step '%s'. Overwriting with callback.", identifier);
            nextPromise = null;
        }
        this.nextHandler = handler;
        return this;
    }

    /**
     * Associates a promise to handle the transition when navigating to the next step in a wizard workflow. This method allows
     * for defining custom asynchronous behavior that should occur during the transition.
     * <p>
     * If a next callback is already set, the existing callback will be cleared, and the new promise will overwrite it.
     *
     * @param promise the {@code WizardNextPromise} to be executed during the transition to the next step
     * @return the current {@code WizardStep} instance, allowing method chaining
     */
    public WizardStep nextIfPromised(WizardStepNextPromise promise) {
        if (nextHandler != null) {
            logger.warn("Next callback already set for step '%s'. Overwriting with promise.", identifier);
            nextHandler = null;
        }
        this.nextPromise = promise;
        return this;
    }

    public WizardStep onEnter(WizardStepEnterHandler handler) {
        this.enterHandler = handler;
        return this;
    }

    public WizardStep onLeave(WizardStepLeaveHandler handler) {
        this.leaveHandler = handler;
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

    public WizardStep next() {
        return next;
    }

    public WizardStep previous() {
        return previous;
    }

    public ValidationStatus status() {
        return status;
    }

    public void status(ValidationStatus status) {
        if (verifyEnum(element(), "status", status, success, warning, error)) {
            this.status = status;
            applyToNavItem(navItem -> navItem.status(status));
        }
    }

    public void clearStatus() {
        status = null;
        applyToNavItem(navItem -> navItem.status(null));
    }

    @Override
    public boolean isDisabled() {
        return disabled;
    }

    public boolean visited() {
        return visited;
    }

    // ------------------------------------------------------ internal

    void select(boolean selected) {
        setVisible(element(), selected);
        classList().toggle(component(wizard, main), selected);
        if (selected) {
            element().tabIndex = -1;
        } else {
            element().removeAttribute(tabindex);
        }
    }

    private void applyToNavItem(Consumer<WizardNavItem> consumer) {
        Wizard wizard = lookupComponent(true);
        if (wizard != null) {
            WizardNavItem navItem = wizard.nav.item(identifier);
            if (navItem != null) {
                consumer.accept(navItem);
            } else {
                logger.error("No nav item found for wizard step %s. Identifiers do not match!", identifier);
            }
        } else {
            logger.warn("Cannot modify wizard nav item of wizard step %s. Wizard is not yet attached to the DOM.", identifier);
        }
    }
}
