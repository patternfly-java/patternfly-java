package org.patternfly.component.wizard;

@FunctionalInterface
public interface WizardStepEnterHandler {

    void onEnter(Wizard wizard, WizardStep step);
}
