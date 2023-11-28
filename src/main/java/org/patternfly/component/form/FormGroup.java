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

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;

public class FormGroup extends SubComponent<HTMLElement, FormGroup> implements
        Inline<HTMLElement, FormGroup>, ComponentReference<Form> {

    // ------------------------------------------------------ factory

    public static FormGroup formGroup() {
        return new FormGroup();
    }

    // ------------------------------------------------------ instance

    String fieldId;
    boolean required;
    private final List<FormGroupLabel> labels;
    private final List<FormGroupControl> controls;
    private Form form;
    private FormGroupRole role;

    FormGroup() {
        super(div().css(component(Classes.form, group)).element());
        this.fieldId = null;
        this.required = false;
        this.labels = new ArrayList<>();
        this.controls = new ArrayList<>();
    }

    @Override
    public void passComponent(Form form) {
        this.form = form;
        for (FormGroupLabel label : labels) {
            label.passComponent(form);
            label.passSubComponent(this);
        }
        for (FormGroupControl control : controls) {
            control.passComponent(form);
            control.passSubComponent(this);
        }
        if ((role == FormGroupRole.radiogroup || role == FormGroupRole.group) && fieldId == null) {
            Logger.missing(form.componentType(), element(), "Missing field ID for form group with role '" + role.name() + "'.");
        }
    }

    @Override
    public Form mainComponent() {
        return form;
    }

    // ------------------------------------------------------ add

    public FormGroup addLabel(FormGroupLabel label) {
        return add(label);
    }

    // override to assure internal wiring
    public FormGroup add(FormGroupLabel label) {
        labels.add(label);
        return add(label.element());
    }

    public FormGroup addControl(FormGroupControl control) {
        return add(control);
    }

    // override to assure internal wiring
    public FormGroup add(FormGroupControl control) {
        controls.add(control);
        return add(control.element());
    }

    // ------------------------------------------------------ builder

    public FormGroup fieldId(String id) {
        this.fieldId = id;
        return this;
    }

    public FormGroup required() {
        this.required = true;
        return this;
    }

    public FormGroup role(FormGroupRole role) {
        this.role = role;
        return this;
    }

    @Override
    public FormGroup that() {
        return this;
    }
}
