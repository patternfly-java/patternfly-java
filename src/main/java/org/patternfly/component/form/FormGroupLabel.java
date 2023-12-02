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
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.Aria;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.MutationRecord;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.ComponentStore.lookupSubComponent;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noPaddingTop;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.PredefinedIcon.help;

public class FormGroupLabel extends SubComponent<HTMLElement, FormGroupLabel> implements
        Attachable {

    // ------------------------------------------------------ factory

    public static FormGroupLabel formGroupLabel(String label) {
        return new FormGroupLabel(label);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "fgl";

    private final HTMLElement textElement;
    private HTMLElement labelElement;

    FormGroupLabel(String label) {
        super(div().css(component(Classes.form, group, Classes.label)).element(), ComponentType.Form, SUB_COMPONENT_NAME);
        add(labelElement = Elements.label().css(component(Classes.form, Classes.label))
                .add(textElement = span().css(component(Classes.form, Classes.label, text))
                        .textContent(label)
                        .element())
                .element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        FormGroup formGroup = lookupSubComponent(ComponentType.Form, FormGroup.SUB_COMPONENT_NAME, element());

        if (formGroup.role != null) {
            HTMLElement pseudoLabelElement = span().css(component(Classes.form, Classes.label)).element();
            for (Iterator<HTMLElement> iterator = iterator(labelElement); iterator.hasNext();) {
                HTMLElement element = iterator.next();
                pseudoLabelElement.appendChild(element);
            }
            labelElement.replaceWith(pseudoLabelElement);
            labelElement = pseudoLabelElement;

            if (element().id != null && !element().id.isEmpty()) {
                formGroup.aria(Aria.labelledBy, element().id);
            } else {
                String labelId = Id.build(formGroup.fieldId != null ? formGroup.fieldId : ComponentType.Form.id, "label");
                id(labelId);
                formGroup.aria(Aria.labelledBy, labelId);
            }
        } else if (formGroup.fieldId != null) {
            ((HTMLLabelElement) labelElement).htmlFor = formGroup.fieldId;
        }
        if (formGroup.required) {
            labelElement.appendChild(span().css(component(Classes.form, Classes.label, Classes.required))
                    .aria(hidden, true)
                    .innerHtml(fromSafeConstant("&#42;"))
                    .element());
        }
    }

    // ------------------------------------------------------ add

    public FormGroupLabel addHelp(String ariaLabel, Popover popover) {
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
