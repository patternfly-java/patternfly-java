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

import org.jboss.elemento.Id;
import org.patternfly.component.HasValue;
import org.patternfly.core.Dataset;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLOptionElement;

import static org.jboss.elemento.Elements.option;

public class FormSelectOption extends FormSelectSubComponent<HTMLOptionElement, FormSelectOption>
        implements Disabled<HTMLOptionElement, FormSelectOption>, HasValue<String> {

    // ------------------------------------------------------ factory

    public static FormSelectOption formSelectOption(String label) {
        return new FormSelectOption(label, Id.build(label));
    }

    public static FormSelectOption formSelectOption(String label, String value) {
        return new FormSelectOption(label, value);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fso";

    public FormSelectOption(String label, String value) {
        super(SUB_COMPONENT_NAME, option().apply(o -> {
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
