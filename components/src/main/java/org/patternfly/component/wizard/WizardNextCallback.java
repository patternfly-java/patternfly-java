package org.patternfly.component.wizard;

@FunctionalInterface
public interface WizardNextCallback {

    boolean onNext(Wizard wizard, WizardStep current, WizardStep next);
}
