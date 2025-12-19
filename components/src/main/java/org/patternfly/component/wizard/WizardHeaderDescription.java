package org.patternfly.component.wizard;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.p;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.wizard;

public class WizardHeaderDescription extends WizardSubComponent<HTMLElement, WizardHeaderDescription> {

    // ------------------------------------------------------ factory

    public static WizardHeaderDescription wizardHeaderDescription() {
        return new WizardHeaderDescription();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzhd";

    WizardHeaderDescription() {
        super(SUB_COMPONENT_NAME, p().css(component(wizard, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardHeaderDescription that() {
        return this;
    }
}
