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
import org.patternfly.component.ElementTextDelegate;
import org.patternfly.component.popover.Popover;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.MutationRecord;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Attributes.type;
import static org.patternfly.icon.IconSets.fas.questionCircle;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.group;
import static org.patternfly.style.Classes.help;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.noPadding;
import static org.patternfly.style.Classes.noPaddingTop;
import static org.patternfly.style.Classes.plain;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.util;

public class FormGroupLabel extends FormSubComponent<HTMLElement, FormGroupLabel> implements Attachable,
        ElementTextDelegate<HTMLElement, FormGroupLabel> {

    // ------------------------------------------------------ factory

    public static FormGroupLabel formGroupLabel(String label) {
        return new FormGroupLabel(label);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "fgl";

    private final HTMLElement textElement;
    private HTMLElement labelElement;

    FormGroupLabel(String label) {
        super(SUB_COMPONENT_NAME, div().css(component(form, group, Classes.label)).element());
        add(labelElement = Elements.label().css(component(form, Classes.label))
                .add(textElement = span().css(component(form, Classes.label, text))
                        .text(label)
                        .element())
                .element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        FormGroup formGroup = lookupSubComponent(FormGroup.SUB_COMPONENT_NAME);

        if (formGroup.role != null) {
            HTMLElement pseudoLabelElement = span().css(component(form, Classes.label)).element();
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
            labelElement.appendChild(span().css(component(form, Classes.label, Classes.required))
                    .aria(hidden, true)
                    .html(fromSafeConstant("&#42;"))
                    .element());
        }
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    public FormGroupLabel noPaddingTop() {
        return css(modifier(noPaddingTop));
    }

    public FormGroupLabel help(String ariaLabel, Popover popover) {
        HTMLElement helpContainer = span().css(component(form, group, Classes.label, help), util("ml-xs"))
                .add(span().css(component(button), modifier(plain), modifier(noPadding))
                        .attr(type, "button")
                        .attr(role, Roles.button)
                        .attr(tabindex, 0)
                        .aria(Aria.label, ariaLabel)
                        .add(span().css(component(button, icon))
                                .add(questionCircle())))
                .element();
        add(helpContainer);
        popover.trigger(helpContainer).appendToBody();
        return this;
    }

    @Override
    public FormGroupLabel that() {
        return this;
    }
}
