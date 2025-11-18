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

import java.util.function.Function;

import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLOptGroupElement;

import static org.jboss.elemento.Elements.optgroup;

public class FormSelectOptionGroup extends FormSelectSubComponent<HTMLOptGroupElement, FormSelectOptionGroup> implements
        Disabled<HTMLOptGroupElement, FormSelectOptionGroup> {

    // ------------------------------------------------------ factory

    public static FormSelectOptionGroup formSelectOptionGroup(String label) {
        return new FormSelectOptionGroup(label);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fsog";

    FormSelectOptionGroup(String label) {
        super(SUB_COMPONENT_NAME, optgroup()
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
