package org.patternfly.component.wizard;

@FunctionalInterface
public interface WizardPreviousCallback {

    boolean onNext(Wizard wizard, WizardStep current, WizardStep previous);
}
