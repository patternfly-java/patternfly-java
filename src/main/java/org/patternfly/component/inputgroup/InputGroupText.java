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
package org.patternfly.component.inputgroup;

import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithText;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.inputGroup;

public class InputGroupText extends InputGroupSubComponent<HTMLElement, InputGroupText> implements
        WithText<HTMLElement, InputGroupText>,
        WithIcon<HTMLElement, InputGroupText> {

    // ------------------------------------------------------ factory

    public static InputGroupText inputGroupText() {
        return new InputGroupText(null);
    }

    public static InputGroupText inputGroupText(String text) {
        return new InputGroupText(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "igt";

    InputGroupText(String text) {
        super(SUB_COMPONENT_NAME, span().css(component(inputGroup, Classes.text)).element());
        if (text != null) {
            text(text);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public InputGroupText icon(InlineIcon icon) {
        removeIcon();
        add(icon);
        return this;
    }

    @Override
    public InputGroupText removeIcon() {
        removeChildrenFrom(this);
        return this;
    }

    @Override
    public InputGroupText text(String text) {
        element().textContent = text;
        return this;
    }

    @Override
    public InputGroupText that() {
        return this;
    }
}
