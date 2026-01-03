package org.patternfly.component.wizard;

import java.util.HashMap;
import java.util.Map;

import org.patternfly.core.ComponentContext;
import elemental2.dom.HTMLElement;

public class WizardContext implements ComponentContext<HTMLElement, WizardContext> {

    private final Wizard wizard;
    private final Map<String, Object> data;

    WizardContext(Wizard wizard) {
        this.wizard = wizard;
        this.data = new HashMap<>();
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

    @Override
    public <T> WizardContext store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public HTMLElement element() {
        return wizard.element();
    }

    @Override
    public WizardContext that() {
        return this;
    }
}
