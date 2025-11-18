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

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.group;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.section;

public class FormSection extends FormSubComponent<HTMLElement, FormSection> implements
        ElementTextDelegate<HTMLElement, FormSection> {

    // ------------------------------------------------------ factory

    public static FormSection formSection() {
        return new FormSection(null);
    }

    public static FormSection formSection(String title) {
        return new FormSection(div()).text(title);
    }

    public static <E extends HTMLElement> FormSection formSection(String title, HTMLContainerBuilder<E> titleElement) {
        return new FormSection(titleElement).text(title);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fs";
    private final HTMLContainerBuilder<? extends HTMLElement> titleElement;

    <E extends HTMLElement> FormSection(HTMLContainerBuilder<E> titleElement) {
        super(SUB_COMPONENT_NAME, div().css(component(form, section))
                .attr(role, group)
                .element());
        this.titleElement = titleElement == null ? div() : titleElement;
    }

    @Override
    public Element textDelegate() {
        return titleElement.element();
    }

    // ------------------------------------------------------ add

    public FormSection addGroup(FormGroup group) {
        return add(group);
    }

    // ------------------------------------------------------ builder

    @Override
    public FormSection text(String text) {
        failSafeTitle();
        return ElementTextDelegate.super.text(text);
    }

    @Override
    public FormSection that() {
        return this;
    }

    // ------------------------------------------------------ internals

    private void failSafeTitle() {
        if (!Elements.isAttached(titleElement)) {
            String titleId = Id.unique(ComponentType.Form.id, "section", "title");
            aria(labelledBy, titleId);
            add(titleElement.css(component(form, section, Classes.title))
                    .id(titleId));
        }
    }
}
