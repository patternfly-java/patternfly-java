/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.form;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLSelectElementBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.core.Attributes;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLCollection;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.select;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapSelectElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.input;
import static org.patternfly.core.Aria.invalid;
import static org.patternfly.handler.ChangeHandler.fireIfChanged;
import static org.patternfly.icon.IconSets.fas.caretDown;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.formControl;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.toggle;

/**
 * A form select embeds browser native select lists into a form.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/forms/form-select">https://www.patternfly.org/components/forms/form-select</a>
 */
public class FormSelect extends FormControl<HTMLElement, FormSelect> implements HasValue<String>, Attachable {

    // ------------------------------------------------------ factory

    public static FormSelect formSelect(String id) {
        return new FormSelect(id, null);
    }

    public static FormSelect formSelect(String id, String value) {
        return new FormSelect(id, value);
    }

    // ------------------------------------------------------ instance

    private final HTMLSelectElement selectElement;
    private final List<ChangeHandler<FormSelect, String>> changeHandlers;
    private String initialValue;

    FormSelect(String id, String value) {
        super(id, formControlContainer()
                        .add(select()
                                .id(id)
                                .apply(s -> s.name = id)
                                .aria(invalid, false))
                        .element(),
                ComponentType.FormSelect);
        failSafeUtilitiesContainer().appendChild(span().css(component(formControl, toggle, icon))
                .add(caretDown())
                .element());
        this.changeHandlers = new ArrayList<>();

        selectElement = (HTMLSelectElement) element().firstElementChild;
        selectElement.addEventListener(input.name,
                e -> changeHandlers.forEach(ch -> ch.onChange(e, this, selectElement.value)));
        if (value != null) {
            initialValue = value;
        }
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (initialValue == null) {
            selectPlaceholder();
        } else {
            value(initialValue);
        }
        togglePlaceholder();
        selectElement.addEventListener(change.name, event -> togglePlaceholder());
    }

    // ------------------------------------------------------ add

    /** Provides access to the underlying select element using a fluent API style */
    public FormSelect applyTo(Consumer<HTMLSelectElementBuilder<HTMLSelectElement>> select) {
        select.accept(selectElement());
        return this;
    }

    public <T> FormSelect addGroups(Iterable<T> items, Function<T, FormSelectOptionGroup> display) {
        for (T item : items) {
            FormSelectOptionGroup group = display.apply(item);
            addGroup(group);
        }
        return this;
    }

    public FormSelect addGroup(FormSelectOptionGroup group) {
        return add(group);
    }

    // override to ensure internal wiring
    public FormSelect add(FormSelectOptionGroup group) {
        selectElement.appendChild(group.element());
        return this;
    }

    public <T> FormSelect addOptions(Iterable<T> items, Function<T, FormSelectOption> display) {
        for (T item : items) {
            FormSelectOption option = display.apply(item);
            addOption(option);
        }
        return this;
    }

    public FormSelect addOption(FormSelectOption option) {
        return add(option);
    }

    // override to ensure internal wiring
    public FormSelect add(FormSelectOption option) {
        selectElement.appendChild(option.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public FormSelect required(boolean required) {
        if (required) {
            selectElement.setAttribute(Attributes.required, true);
        } else {
            selectElement.removeAttribute(Attributes.required);
        }
        return this;
    }

    /**
     * Same as {@linkplain #value(String, boolean) value(String, false)}
     */
    public FormSelect value(String value) {
        return value(value, false);
    }

    public FormSelect value(String value, boolean fireEvent) {
        selectElement.value = value;
        if (fireEvent) {
            fireIfChanged(this, value, selectElement.value, changeHandlers);
        }
        return this;
    }

    public void selectFirstValue() {
        if (selectElement.options.length > 0) {
            String firstValue = selectElement.options.getAt(0).value;
            value(firstValue);
        }
    }

    public void selectFirstValue(boolean fireEvent) {
        if (selectElement.options.length > 0) {
            String firstValue = selectElement.options.getAt(0).value;
            value(firstValue, fireEvent);
        }
    }

    @Override
    public FormSelect that() {
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this select changes. Changes are detected by adding
     * an event listener for input event to the select element.
     */
    public FormSelect onChange(ChangeHandler<FormSelect, String> changeHandler) {
        changeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return selectElement.value;
    }

    public boolean containsValue(String value) {
        for (int i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options.getAt(i).value.equals(value)) {
                return true;
            }
        }
        return false;
    }

    /** Returns the underlying input element */
    public HTMLSelectElementBuilder<HTMLSelectElement> selectElement() {
        return wrapSelectElement(selectElement);
    }

    // ------------------------------------------------------ internal

    @Override
    void disableControl(boolean disabled) {
        selectElement.disabled = disabled;
    }

    private void selectPlaceholder() {
        for (int i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options.item(i).dataset.has(Dataset.placeholder)) {
                selectElement.value = selectElement.options.item(i).value;
                break;
            }
        }
    }

    private void togglePlaceholder() {
        HTMLCollection<HTMLOptionElement> selected = selectElement.selectedOptions;
        if (selected.length == 0) {
            element().classList.remove(modifier(Classes.placeholder));
        } else if (selected.length == 1) {
            if (selected.item(0).dataset.has(Dataset.placeholder)) {
                element().classList.add(modifier(Classes.placeholder));
            } else {
                element().classList.remove(modifier(Classes.placeholder));
            }
        }
    }
}
