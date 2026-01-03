package org.patternfly.component.wizard;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.ValidationStatus;
import org.patternfly.core.Attributes;
import org.patternfly.core.ComponentContext;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.wizard.WizardStepType.step;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.wizard;

public class WizardStep extends WizardSubComponent<HTMLElement, WizardStep> implements
        ComponentContext<HTMLElement, WizardStep>,
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
    private final Map<String, Object> data;
    private final HTMLElement bodyElement;
    private ValidationStatus status;
    private WizardPreviousCallback previousCallback;
    private WizardNextCallback nextCallback;
    private Promise<WizardStep> previousPromise;
    private Promise<WizardStep> nextPromise;
    final String title;
    final WizardStepType type;
    boolean visited;

    WizardStep(String identifier, String title, WizardStepType type) {
        super(SUB_COMPONENT_NAME, div().css(component(wizard, main)).element());
        this.identifier = identifier;
        this.title = title;
        this.type = type;
        this.data = new HashMap<>();
        this.visited = false;
        element().appendChild(bodyElement = div().css(component(wizard, main, body)).element());
    }

    @Override
    public Element containerDelegate() {
        return bodyElement;
    }

    // ------------------------------------------------------ builder

    public WizardStep onPrevious(WizardPreviousCallback previousCallback) {
        this.previousCallback = previousCallback;
        return this;
    }

    public WizardStep onPrevious(Promise<WizardStep> previousPromise) {
        this.previousPromise = previousPromise;
        return this;
    }

    public WizardStep onNext(WizardNextCallback nextCallback) {
        this.nextCallback = nextCallback;
        return this;
    }

    public WizardStep onNext(Promise<WizardStep> nextPromise) {
        this.nextPromise = nextPromise;
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

    public void status(ValidationStatus status) {
        if (verifyEnum(element(), "status", status, success, warning, error)) {
            this.status = status;
            Wizard wizard = lookupComponent(true);
            if (wizard != null) {
                WizardNavItem navItem = wizard.nav.item(identifier);
                if (navItem != null) {
                    navItem.status(status);
                } else {
                    logger.error("No nav item found for wizard step %s. Identifiers do not match!", identifier);
                }
            } else {
                logger.warn("Cannot set status on wizard step %s. Wizard is not yet attached to the DOM.", identifier);
            }
        }
    }

    public void clearStatus() {
        status = null;
        Wizard wizard = lookupComponent(true);
        if (wizard != null) {
            WizardNavItem navItem = wizard.nav.item(identifier);
            if (navItem != null) {
                navItem.status(null);
            } else {
                logger.error("No nav item found for wizard step %s. Identifiers do not match!", identifier);
            }
        } else {
            logger.warn("Cannot set status on wizard step %s. Wizard is not yet attached to the DOM.", identifier);
        }
    }

    public ValidationStatus status() {
        return status;
    }

    // ------------------------------------------------------ internal

    void select(boolean selected) {
        setVisible(element(), selected);
        classList().toggle(component(wizard, main), selected);
        if (selected) {
            element().tabIndex = -1;
        } else {
            element().removeAttribute(Attributes.tabindex);
        }
    }
}
