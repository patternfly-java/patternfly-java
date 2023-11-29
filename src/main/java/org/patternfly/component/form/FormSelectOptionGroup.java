package org.patternfly.component.form;

import java.util.function.Function;

import org.patternfly.component.SubComponent;
import org.patternfly.core.Modifiers.Disabled;

import elemental2.dom.HTMLOptGroupElement;

import static org.jboss.elemento.Elements.optgroup;

public class FormSelectOptionGroup extends SubComponent<HTMLOptGroupElement, FormSelectOptionGroup> implements
        Disabled<HTMLOptGroupElement, FormSelectOptionGroup> {

    // ------------------------------------------------------ factory

    public static FormSelectOptionGroup formSelectOptionGroup(String label) {
        return new FormSelectOptionGroup(label);
    }

    // ------------------------------------------------------ instance

    FormSelectOptionGroup(String label) {
        super(optgroup()
                .apply(og -> og.label = label)
                .element());
    }

    @Override
    public FormSelectOptionGroup that() {
        return this;
    }

    // ------------------------------------------------------ add

    public <T> FormSelectOptionGroup addOptions(Iterable<T> items, Function<T, FormSelectOption> display) {
        for (T item : items) {
            FormSelectOption option = display.apply(item);
            addOption(option);
        }
        return this;
    }

    public FormSelectOptionGroup addOption(FormSelectOption option) {
        return add(option);
    }

    // override to assure internal wiring
    public FormSelectOptionGroup add(FormSelectOption option) {
        return add(option.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FormSelectOptionGroup disabled(boolean disabled) {
        element().disabled = disabled;
        return this;
    }

    public FormSelectOptionGroup label(String label) {
        element().label = label;
        return this;
    }
}
