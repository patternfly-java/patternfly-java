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

import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.action;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.form;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.modifier;

public class FormGroup extends SubComponent<HTMLElement, FormGroup> {

    // ------------------------------------------------------ factory

    public static FormGroup formGroup() {
        return new FormGroup();
    }

    // ------------------------------------------------------ instance

    FormGroup() {
        super(div().css(component(form, group)).element());
    }

    // ------------------------------------------------------ add

    public FormGroup addLabel(FormGroupLabel label) {
        return add(label);
    }

    // override to assure internal wiring
    public FormGroup add(FormGroupLabel label) {
        return add(label.element());
    }

    public FormGroup addControl(FormGroupControl control) {
        return add(control);
    }

    // override to assure internal wiring
    public FormGroup add(FormGroupControl control) {
        return add(control.element());
    }

    // ------------------------------------------------------ builder

    public FormGroup action() {
        return css(modifier(action));
    }

    @Override
    public FormGroup that() {
        return this;
    }
}
