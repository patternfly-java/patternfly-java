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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLFormElement;
import elemental2.dom.MutationRecord;

import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.form;
import static org.patternfly.layout.Classes.horizontal;
import static org.patternfly.layout.Classes.limitWidth;
import static org.patternfly.layout.Classes.modifier;

/**
 * A form is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a
 * wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in,
 * registering, configuring settings, or completing surveys.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/form/html">https://www.patternfly.org/components/forms/form/html</a>
 */
public class Form extends BaseComponent<HTMLFormElement, Form> implements Attachable {

    // ------------------------------------------------------ factory

    public static Form form() {
        return new Form();
    }

    // ------------------------------------------------------ instance

    private final List<FormGroup> groups;
    private FormActionGroup actionGroup;

    Form() {
        super(Elements.form().css(component(form)).apply(f -> f.noValidate = true).element(), ComponentType.Form);
        this.groups = new ArrayList<>();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        for (FormGroup group : groups) {
            group.passComponent(this);
        }
        if (actionGroup != null) {
            actionGroup.passComponent(this);
        }
    }

    // ------------------------------------------------------ add

    public Form addGroup(FormGroup group) {
        return add(group);
    }

    // override to assure internal wiring
    public Form add(FormGroup group) {
        groups.add(group);
        return add(group.element());
    }

    public Form addActionGroup(FormActionGroup actionGroup) {
        return add(actionGroup);
    }

    // override to assure internal wiring
    public Form add(FormActionGroup actionGroup) {
        this.actionGroup = actionGroup;
        return add(actionGroup.element());
    }

    // ------------------------------------------------------ builder

    public Form horizontal() {
        return css(modifier(horizontal));
    }

    public Form limitWidth() {
        return css(modifier(limitWidth));
    }

    @Override
    public Form that() {
        return this;
    }
}
