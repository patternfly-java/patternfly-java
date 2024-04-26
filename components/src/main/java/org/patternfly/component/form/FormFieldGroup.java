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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.button.Button;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.group;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.fieldGroup;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.toggle;

public class FormFieldGroup extends FormSubComponent<HTMLElement, FormFieldGroup>
        implements Expandable<HTMLElement, FormFieldGroup>, Attachable {

    // ------------------------------------------------------ factory

    /**
     * Creates a non-expandable field group
     */
    public static FormFieldGroup formFieldGroup() {
        return new FormFieldGroup(false);
    }

    public static FormFieldGroup formFieldGroup(boolean expandable) {
        return new FormFieldGroup(expandable);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(FormFieldGroup.class.getName());
    static final String SUB_COMPONENT_NAME = "ffg";

    private final String titleId;
    private boolean expandable;
    private Button toggleButton;
    private FormFieldGroupHeader header;
    private FormFieldGroupBody body;
    private ToggleHandler<FormFieldGroup> toggleHandler;

    FormFieldGroup(boolean expandable) {
        super(SUB_COMPONENT_NAME, div().css(component(form, fieldGroup))
                .attr(role, group)
                .element());
        this.titleId = Id.unique(ComponentType.Form.id, SUB_COMPONENT_NAME, "title");
        this.expandable = false;
        storeSubComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (header != null && header.titleElement != null) {
            header.titleElement.id = titleId;
        }
        if (expandable) {
            collapse(false); // collapsed by default!
        }
    }

    // ------------------------------------------------------ add

    public FormFieldGroup addHeader(FormFieldGroupHeader header) {
        return add(header);
    }

    public FormFieldGroup add(FormFieldGroupHeader header) {
        this.header = header;
        if (body == null) {
            add(header.element());
        } else {
            insertBefore(header.element(), body.element());
        }
        return this;
    }

    public FormFieldGroup addBody(FormFieldGroupBody body) {
        return add(body);
    }

    public FormFieldGroup add(FormFieldGroupBody body) {
        this.body = body;
        add(body.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public FormFieldGroup expandable() {
        return expandable(null);
    }

    public FormFieldGroup expandable(ToggleHandler<FormFieldGroup> toggleHandler) {
        if (!expandable) {
            String toggleId = Id.unique(ComponentType.Form.id, SUB_COMPONENT_NAME, "toggle");
            insertFirst(element(), div().css(component(form, fieldGroup, toggle))
                    .add(div().css(component(form, fieldGroup, toggle, Classes.button))
                            .add(toggleButton = button().plain()
                                    .id(toggleId)
                                    .on(click, e -> toggle())
                                    .aria(expanded, false)
                                    .aria(label, "Details")
                                    .aria(labelledBy, titleId + " " + toggleId)
                                    .add(span().css(component(form, fieldGroup, toggle, icon))
                                            .add(angleRight()))))
                    .element());
        }
        this.expandable = true;
        this.toggleHandler = toggleHandler;
        return this;
    }

    @Override
    public FormFieldGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        if (!expandable) {
            logger.warn(
                    "Form field group %o is not expandable. Please use FormFieldGroup.expandable() to make this an expandable field group.",
                    element());
            return;
        }
        if (toggleButton != null && body != null) {
            Expandable.collapse(element(), toggleButton.element(), body.element());
            setVisible(body, false);
            if (fireEvent && toggleHandler != null) {
                toggleHandler.onToggle(new Event(""), this, false);
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expandable) {
            logger.warn(
                    "Form field group %o is not expandable. Please use FormFieldGroup.expandable() to make this an expandable field group.",
                    element());
            return;
        }
        if (toggleButton != null && body != null) {
            Expandable.expand(element(), toggleButton.element(), body.element());
            setVisible(body, true);
            if (fireEvent && toggleHandler != null) {
                toggleHandler.onToggle(new Event(""), this, true);
            }
        }
    }
}
