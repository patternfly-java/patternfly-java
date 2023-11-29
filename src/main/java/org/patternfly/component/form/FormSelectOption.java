package org.patternfly.component.form;

import org.jboss.elemento.Id;
import org.patternfly.component.SubComponent;
import org.patternfly.core.Dataset;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Disabled;

import elemental2.dom.HTMLOptionElement;

import static org.jboss.elemento.Elements.option;

public class FormSelectOption extends SubComponent<HTMLOptionElement, FormSelectOption>
        implements Disabled<HTMLOptionElement, FormSelectOption>, HasValue<String> {

    // ------------------------------------------------------ factory

    public static FormSelectOption formSelectOption(String label) {
        return new FormSelectOption(label, Id.build(label));
    }

    public static FormSelectOption formSelectOption(String label, String value) {
        return new FormSelectOption(label, value);
    }

    // ------------------------------------------------------ instance

    public FormSelectOption(String label, String value) {
        super(option().apply(o -> {
            o.label = label;
            o.value = value;
        }).element());
    }

    @Override
    public FormSelectOption that() {
        return this;
    }

    // ------------------------------------------------------ builder

    public FormSelectOption placeholder() {
        return placeholder(true, false);
    }

    public FormSelectOption placeholder(boolean selectable) {
        return placeholder(true, selectable);
    }

    public FormSelectOption placeholder(boolean placeholder, boolean selectable) {
        if (placeholder) {
            data(Dataset.placeholder, "");
        }
        if (!selectable) {
            disabled(placeholder);
        }
        return this;
    }

    @Override
    public FormSelectOption disabled(boolean disabled) {
        element().disabled = disabled;
        return this;
    }

    public FormSelectOption label(String label) {
        element().label = label;
        return this;
    }

    public FormSelectOption value(String value) {
        element().value = value;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return element().value;
    }
}
