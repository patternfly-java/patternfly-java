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

import java.util.Iterator;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ButtonType;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.Aria;
import org.patternfly.icon.IconSets;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.MutationRecord;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.noPaddingTop;
import static org.patternfly.style.Classes.text;

public class FormGroupLabel extends FormSubComponent<HTMLElement, FormGroupLabel> implements Attachable {

    // ------------------------------------------------------ factory

    public static FormGroupLabel formGroupLabel(String label) {
        return new FormGroupLabel(label);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "fgl";

    private final HTMLElement textElement;
    private HTMLElement labelElement;

    FormGroupLabel(String label) {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.form, group, Classes.label)).element());
        add(labelElement = Elements.label().css(component(Classes.form, Classes.label))
                .add(textElement = span().css(component(Classes.form, Classes.label, text))
                        .text(label)
                        .element())
                .element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        FormGroup formGroup = lookupSubComponent(FormGroup.SUB_COMPONENT_NAME);

        if (formGroup.role != null) {
            HTMLElement pseudoLabelElement = span().css(component(Classes.form, Classes.label)).element();
            for (Iterator<HTMLElement> iterator = iterator(labelElement); iterator.hasNext(); ) {
                HTMLElement element = iterator.next();
                pseudoLabelElement.appendChild(element);
            }
            labelElement.replaceWith(pseudoLabelElement);
            labelElement = pseudoLabelElement;

            if (element().id != null && !element().id.isEmpty()) {
                formGroup.aria(Aria.labelledBy, element().id);
            } else {
                String labelId = Id.build(formGroup.identifier(), "label");
                id(labelId);
                formGroup.aria(Aria.labelledBy, labelId);
            }
        } else {
            ((HTMLLabelElement) labelElement).htmlFor = formGroup.identifier();
        }
        if (formGroup.required) {
            labelElement.appendChild(span().css(component(Classes.form, Classes.label, Classes.required))
                    .aria(hidden, true)
                    .html(fromSafeConstant("&#42;"))
                    .element());
        }
    }

    // ------------------------------------------------------ builder

    public FormGroupLabel label(String label) {
        textElement.textContent = label;
        return this;
    }

    public FormGroupLabel noPaddingTop() {
        return css(modifier(noPaddingTop));
    }

    public FormGroupLabel help(String ariaLabel, Popover popover) {
        HTMLButtonElement helpButton = button(ButtonType.button)
                .css(component(Classes.form, group, Classes.label, Classes.help))
                .aria(Aria.label, ariaLabel)
                .add(IconSets.patternfly.help())
                .element();
        add(helpButton);
        popover.trigger(helpButton).appendToBody();
        return this;
    }

    @Override
    public FormGroupLabel that() {
        return this;
    }
}
