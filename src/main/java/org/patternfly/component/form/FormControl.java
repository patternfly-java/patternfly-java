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

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.Modifiers.Required;
import org.patternfly.core.ValidationStatus;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.ValidationStatus.default_;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.formControl;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.utilities;

public abstract class FormControl<E extends HTMLElement, B extends BaseComponent<E, B>>
        extends BaseComponent<E, B> implements Disabled<E, B>, Required<E, B> {

    // ------------------------------------------------------ factory

    static HTMLContainerBuilder<HTMLElement> formControlContainer() {
        return span().css(component(formControl));
    }

    // ------------------------------------------------------ instance

    final String id;
    ValidationStatus status;
    private HTMLElement utilitiesContainer;
    private HTMLElement validationContainer;

    FormControl(String id, E element, ComponentType componentType) {
        super(element, componentType);
        this.id = id;
    }

    // ------------------------------------------------------ builder

    @Override
    public B disabled(boolean disabled) {
        disableInputElement(disabled);
        return Disabled.super.disabled(disabled);
    }

    public B validated(ValidationStatus status) {
        // remove old status
        if (status != this.status) {
            if (this.status != null) {
                if (this.status.modifier != null) {
                    element().classList.remove(this.status.modifier);
                }
                if (this.status.icon != null) {
                    failSafeRemoveFromParent(validationContainer);
                    validationContainer = null;
                }
            }

            // assign status
            this.status = status;

            // apply new status
            if (status.modifier != null) {
                css(status.modifier);
            }
            if (status != default_ && status.icon != null) {
                failSafeValidatedContainer().appendChild(inlineIcon(status.icon).element());
            }
        }
        return that();
    }

    // ------------------------------------------------------ internal

    abstract void disableInputElement(boolean disabled);

    HTMLElement failSafeUtilitiesContainer() {
        if (utilitiesContainer == null) {
            add(utilitiesContainer = span().css(component(formControl, utilities)).element());
        }
        return utilitiesContainer;
    }

    HTMLElement failSafeValidatedContainer() {
        if (validationContainer == null) {
            insertFirst(failSafeUtilitiesContainer(),
                    validationContainer = span().css(component(formControl, icon), modifier(Classes.status)).element());
        }
        return validationContainer;
    }
}
