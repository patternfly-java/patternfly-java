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

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.Attributes;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;

public class FormGroup extends FormSubComponent<HTMLElement, FormGroup> implements
        HasIdentifier<HTMLElement, FormGroup>,
        ComponentContext<HTMLElement, FormGroup> {

    // ------------------------------------------------------ factory

    public static FormGroup formGroup() {
        return new FormGroup(Id.unique(ComponentType.Form.id, SUB_COMPONENT_NAME));
    }

    public static FormGroup formGroup(String identifier) {
        return new FormGroup(identifier);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fg";

    boolean required;
    FormGroupRole role;
    private final String identifier;
    private final Map<String, Object> data;

    FormGroup(String identifier) {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.form, group))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.required = false;
        storeSubComponent();
    }

    // ------------------------------------------------------ add

    public FormGroup addLabel(FormGroupLabel label) {
        return add(label);
    }

    public FormGroup addControl(FormGroupControl control) {
        return add(control);
    }

    // ------------------------------------------------------ builder

    public FormGroup required() {
        return required(true);
    }

    public FormGroup required(boolean required) {
        this.required = required;
        return this;
    }

    /**
     * Sets the role of the form group. Pass in {@link FormGroupRole#radiogroup} when the form group contains multiple radio
     * inputs, or pass in {@link FormGroupRole#group} when the form group contains multiple of any other input type (e.g.
     * checkboxes).
     * <p>
     * Please note that if you set a role, the internal structure of the {@link FormGroupLabel} changes. Without a role the
     * label contains a {@code <label>} element. With a role the {@code <label>} element is replaced by a {@code <span>}
     * element. In this case it is expected that the {@link FormGroupControl} contains label elements.
     */
    public FormGroup role(FormGroupRole role) {
        this.role = role;
        attr(Attributes.role, role.name());
        return this;
    }

    @Override
    public <T> FormGroup store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public FormGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }
}
