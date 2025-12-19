package org.patternfly.component.wizard;

import org.jboss.elemento.ElementTextDelegate;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.title;
import static org.patternfly.style.Classes.wizard;

public class WizardHeaderTitle extends WizardSubComponent<HTMLElement, WizardHeaderTitle> implements
        ElementTextDelegate<HTMLElement, WizardHeaderTitle> {

    // ------------------------------------------------------ factory

    public static WizardHeaderTitle wizardHeaderTitle() {
        return new WizardHeaderTitle(2);
    }

    public static WizardHeaderTitle wizardHeaderTitle(String text) {
        return new WizardHeaderTitle(2).text(text);
    }

    public static WizardHeaderTitle wizardHeaderTitle(int headerLevel) {
        return new WizardHeaderTitle(headerLevel);
    }

    public static WizardHeaderTitle wizardHeaderTitle(int headerLevel, String text) {
        return new WizardHeaderTitle(headerLevel).text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzht";
    private final HTMLElement textElement;

    WizardHeaderTitle(int headerLevel) {
        super(SUB_COMPONENT_NAME, div().css(component(wizard, title)).element());
        add(textElement = h(headerLevel).css(component(wizard, title, text)).element());
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardHeaderTitle that() {
        return this;
    }
}
