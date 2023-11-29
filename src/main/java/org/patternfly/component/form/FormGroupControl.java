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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.component.SubComponentReference;
import org.patternfly.component.help.HelperText;
import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Modifiers.toggleModifier;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;

public class FormGroupControl extends SubComponent<HTMLElement, FormGroupControl> implements
        Inline<HTMLElement, FormGroupControl>,
        ComponentReference<Form>,
        SubComponentReference<FormGroup> {

    // ------------------------------------------------------ factory

    public static FormGroupControl formGroupControl() {
        return new FormGroupControl();
    }

    // ------------------------------------------------------ instance

    private Form form;
    private FormGroup formGroup;
    private FormControl<?, ?> control;
    private final List<Checkbox> checkboxes;
    private final List<Radio> radios;

    FormGroupControl() {
        super(div().css(component(Classes.form, group, Classes.control)).element());
        this.checkboxes = new ArrayList<>();
        this.radios = new ArrayList<>();
    }

    @Override
    public void passComponent(Form form) {
        this.form = form;
    }

    @Override
    public Form mainComponent() {
        return form;
    }

    @Override
    public void passSubComponent(FormGroup formGroup) {
        if (formGroup.fieldId != null && control != null && !formGroup.fieldId.equals(control.id)) {
            Logger.wrong(form.componentType(), element(),
                    "The field id of the form group is different from the id of its control: " +
                            "'" + formGroup.fieldId + "' != '" + control.id + "'");
        }

        this.formGroup = formGroup;
        if (formGroup.fieldId != null) {
            for (Checkbox checkbox : checkboxes) {
                checkbox.inputElement().name = formGroup.fieldId;
            }
            for (Radio radio : radios) {
                radio.inputElement().name = formGroup.fieldId;
            }
        }
    }

    @Override
    public FormGroup subComponent() {
        return formGroup;
    }

    // ------------------------------------------------------ add

    public <E extends HTMLElement, B extends BaseComponent<E, B>> FormGroupControl addControl(FormControl<E, B> control) {
        return add(control);
    }

    // override to assure internal wiring
    public <E extends HTMLElement, B extends BaseComponent<E, B>> FormGroupControl add(FormControl<E, B> control) {
        this.control = control;
        return add(control.element());
    }

    public FormGroupControl addCheckbox(Checkbox checkbox) {
        return add(checkbox);
    }

    // override to assure internal wiring
    public FormGroupControl add(Checkbox checkbox) {
        checkboxes.add(checkbox);
        return add(checkbox.element());
    }

    public FormGroupControl addRadio(Radio radio) {
        return add(radio);
    }

    // override to assure internal wiring
    public FormGroupControl add(Radio radio) {
        radios.add(radio);
        return add(radio.element());
    }

    public FormGroupControl addHelperText(HelperText helperText) {
        return add(helperText);
    }

    // override to assure internal wiring
    public FormGroupControl add(HelperText helperText) {
        return add(div().css(component(Classes.form, Classes.helperText))
                .add(helperText));
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #stack(boolean) stack(true)} */
    public FormGroupControl stack() {
        return stack(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(stack)} */
    public FormGroupControl stack(boolean stack) {
        return toggleModifier(this, element(), Classes.stack, stack);
    }

    @Override
    public FormGroupControl that() {
        return this;
    }
}
