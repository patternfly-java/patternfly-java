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

import org.jboss.elemento.Elements;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.component.SubComponentReference;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.Aria;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLabelElement;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noPaddingTop;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.PredefinedIcon.help;

public class FormGroupLabel extends SubComponent<HTMLElement, FormGroupLabel> implements
        ComponentReference<Form>,
        SubComponentReference<FormGroup> {

    // ------------------------------------------------------ factory

    public static FormGroupLabel formGroupLabel(String label) {
        return new FormGroupLabel(label);
    }

    // ------------------------------------------------------ instance

    private final HTMLLabelElement labelElement;
    private final HTMLElement textElement;
    private Form form;
    private FormGroup formGroup;

    FormGroupLabel(String label) {
        super(div().css(component(Classes.form, group, Classes.label)).element());
        add(labelElement = Elements.label().css(component(Classes.form, Classes.label))
                .add(textElement = span().css(component(Classes.form, Classes.label, text))
                        .textContent(label)
                        .element())
                .element());
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
        this.formGroup = formGroup;
        if (formGroup.fieldId != null && labelElement.htmlFor != null) {
            labelElement.htmlFor = formGroup.fieldId;
        }
        if (formGroup.required) {
            labelElement.appendChild(span().css(component(Classes.form, Classes.label, Classes.required))
                    .aria(hidden, true)
                    .innerHtml(fromSafeConstant("&#42;"))
                    .element());
        }
    }

    @Override
    public FormGroup subComponent() {
        return formGroup;
    }

    // ------------------------------------------------------ add

    public FormGroupLabel addHelp(Popover popover, String ariaLabel) {
        HTMLButtonElement helpButton = button().css(component(Classes.form, group, Classes.label, Classes.help))
                .aria(Aria.label, ariaLabel)
                .add(inlineIcon(help))
                .element();
        add(helpButton);
        popover.trigger(helpButton).appendToBody();
        return this;
    }

    // ------------------------------------------------------ builder

    public FormGroupLabel label(String label) {
        textElement.textContent = label;
        return this;
    }

    public FormGroupLabel noPaddingTop() {
        return css(modifier(noPaddingTop));
    }

    @Override
    public FormGroupLabel that() {
        return this;
    }
}
