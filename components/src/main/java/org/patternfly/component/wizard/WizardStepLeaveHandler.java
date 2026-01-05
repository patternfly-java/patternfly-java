package org.patternfly.component.wizard;

@FunctionalInterface
public interface WizardStepLeaveHandler {

    void onLeave(Wizard wizard, WizardStep step);
}
