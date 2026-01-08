package org.patternfly.component.wizard;

/**
 * Functional interface for handling step changes in a wizard flow.
 * <p>
 * This interface defines a single method that is invoked whenever the active step in a wizard transitions from one step to
 * another. It provides the necessary context to respond to these changes, including the wizard instance, the previous step, and
 * the current step.
 * <p>
 * Implementations of this interface can be used to perform actions such as updating the UI, validating transitions, logging
 * step changes, or any other behavior associated with a step transition.
 */
@FunctionalInterface
public interface WizardStepChangeHandler {

    /**
     * Handles the transition from one step to another in a wizard flow.
     *
     * @param wizard   the wizard instance responsible for managing the step transitions
     * @param previous the step that was active before the transition occurred, which might be {@code null}!
     * @param current  the step that is now active after the transition
     */
    void onStepChange(Wizard wizard, WizardStep previous, WizardStep current);
}
