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
package org.patternfly.component.progressstepper;

import java.util.Objects;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.SubComponent;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.Aria;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.helpText;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.progressStepper;
import static org.patternfly.style.Classes.step;

/**
 * Represents a single step in a progress stepper component.
 */
public class ProgressStep extends SubComponent<HTMLLIElement, ProgressStep>
        implements ElementTextDelegate<HTMLLIElement, ProgressStep>, HasIdentifier<HTMLLIElement, ProgressStep>,
        ComponentIcon<HTMLLIElement, ProgressStep> {

    // ------------------------------------------------------ factory
    public static ProgressStep progressStep(String identifier) {
        return new ProgressStep(identifier);
    }

    public static ProgressStep progressStep(String identifier, String text) {
        return new ProgressStep(identifier).text(text);
    }

    // ------------------------------------------------------- instance

    private static final Logger logger = Logger.getLogger(ProgressStep.class.getName());
    private static final String SUB_COMPONENT_NAME = "pss"; // progress stepper step
    private static final String STEP = "step";
    private static final String STEP_CONNECTOR = "step-connector";
    private static final String STEP_ICON = "step-icon";
    private static final String STEP_MAIN = "step-main";
    private static final String STEP_TITLE = "step-title";
    private static final String STEP_DESCRIPTION = "step-description";
    private static final String LISTITEM = "listitem";

    private final HTMLContainerBuilder<HTMLDivElement> stepConnector;
    private final HTMLElement stepIcon;
    private final HTMLContainerBuilder<HTMLDivElement> stepMain;
    private HTMLContainerBuilder<HTMLDivElement> stepDescription;

    private final String identifier;

    private boolean isCurrent;
    private String description;
    private Element icon;
    private boolean isCustomIcon = false;
    private ProgressStepVariant progressStepVariant = ProgressStepVariant.default_;
    private Popover popover;

    ProgressStep(String identifier) {
        super(ComponentType.ProgressStepper, SUB_COMPONENT_NAME, li().element());

        this.identifier = identifier;
        this.stepConnector = div().css(component(progressStepper, STEP_CONNECTOR));
        this.stepIcon = span().css(component(progressStepper, STEP_ICON)).element();
        this.stepMain = div().css(component(progressStepper, STEP_MAIN));

        element().appendChild(stepConnector.element());
        stepConnector.add(stepIcon);
        element().appendChild(stepMain.add(div().css(component(progressStepper, STEP_TITLE))).element());

        css(component(progressStepper, step));
        element().setAttribute(role, LISTITEM);
    }

    @Override
    public ProgressStep that() {
        return this;
    }

    @Override
    public Element textDelegate() {
        return getStepTitleElement();
    }

    @Override
    public String identifier() {
        return identifier;
    }

    // ------------------------------------------------------- aria

    public ProgressStep ariaLabel(String ariaLabel) {
        return aria(Aria.label, ariaLabel);
    }

    // ------------------------------------------------------- builder

    public ProgressStep description(String description) {
        if (Objects.equals(this.description, description)) {
            return this;
        }
        this.description = description;
        if (description == null || description.isEmpty()) {
            if (failSafeRemoveFromParent(stepDescription)) {
                stepDescription = null;
            }
            return this;
        }
        failSafeStepDescription().text(description);
        return this;

    }

    public ProgressStep variant(ProgressStepVariant progressStepVariant) {
        if (Objects.equals(this.progressStepVariant, progressStepVariant)) {
            return this;
        }
        if (progressStepVariant == null) {
            logger.warn("ProgressStep variant cannot be null, using default variant instead.");
            progressStepVariant = ProgressStepVariant.default_;
        }

        if (this.progressStepVariant.style != null) {
            element().classList.remove(this.progressStepVariant.style);
        }

        // Only remove icon if it's a variant icon (not custom)
        if (!isCustomIcon) {
            failSafeRemoveFromParent(this.icon);
            this.icon = null;
        }

        this.progressStepVariant = progressStepVariant;

        css(progressStepVariant.style);

        // Add new variant icon if there's no custom icon
        if (!isCustomIcon && progressStepVariant.iconSupplier != null) {
            this.icon = progressStepVariant.iconSupplier.get();
            stepIcon.appendChild(this.icon);
        }
        return this;
    }

    @Override
    public ProgressStep icon(Element icon) {
        if (Objects.equals(this.icon, icon)) {
            return this;
        }
        removeChildrenFrom(stepIcon);
        this.icon = icon;
        this.isCustomIcon = icon != null;
        if (this.isCustomIcon) {
            stepIcon.appendChild(icon);
        }
        return this;
    }

    @Override
    public ProgressStep removeIcon() {
        if (!isCustomIcon) {
            return this; // Nothing to do
        }
        this.isCustomIcon = false;
        this.icon = null;

        removeChildrenFrom(stepIcon);
        // restore the variant icon if set
        if (progressStepVariant.iconSupplier != null) {
            stepIcon.appendChild(progressStepVariant.iconSupplier.get());
        }
        return this;
    }

    public ProgressStep popover(Popover popover) {
        if (Objects.equals(popover, this.popover)) {
            return this;
        }

        // Remove existing popover if any
        if (this.popover != null) {
            removePopover();
        }

        this.popover = popover;

        if (popover == null) {
            return this; // Already removed above
        }

        // Switch from div to button
        String title = text();
        removeChildrenFrom(stepMain); // both title and description (if it exists) will be removed

        HTMLButtonElement textButton = button()
                .css(component(progressStepper, STEP_TITLE), modifier(helpText))
                .text(title)
                .element();

        stepMain.add(textButton);

        // Re-add description if it existed
        if (stepDescription != null) {
            stepMain.add(stepDescription);
        }

        popover.trigger(textButton).appendToBody();
        return this;
    }

    public ProgressStep removePopover() {
        this.popover = null;

        // Switch from button to div
        String title = text();
        removeChildrenFrom(stepMain);

        stepMain.add(div().css(component(progressStepper, STEP_TITLE))
                .text(title));

        // Re-add description if it exists
        if (stepDescription != null) {
            stepMain.add(stepDescription);
        }

        return this;
    }

    // ------------------------------------------ package-private
    ProgressStep current(boolean isCurrent) {
        if (this.isCurrent == isCurrent) {
            return this;
        }

        this.isCurrent = isCurrent;
        if (isCurrent) {
            aria(Aria.current, STEP);
            css(modifier(current));
        } else {
            element().removeAttribute(Aria.current);
            element().classList.remove(modifier(current));
        }
        return this;
    }

    boolean isCurrent() {
        return isCurrent;
    }

    // ------------------------------------------------------- internal

    private HTMLContainerBuilder<HTMLDivElement> failSafeStepDescription() {
        if (stepDescription == null) {
            stepDescription = div().css(component(progressStepper, STEP_DESCRIPTION));
            stepMain.add(stepDescription);
        }
        return stepDescription;
    }

    private Element getStepTitleElement() {
        // can be both button or div, description is 2nd child element (if it exists)
        return stepMain.element().firstElementChild;
    }

}
