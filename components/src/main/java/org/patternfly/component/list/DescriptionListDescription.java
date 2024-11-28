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
package org.patternfly.component.list;

import org.jboss.elemento.Elements;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.WithText;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.descriptionList;

public class DescriptionListDescription extends DescriptionListSubComponent<HTMLElement, DescriptionListDescription> implements
        WithText<HTMLElement, DescriptionListDescription>, ElementContainerDelegate<HTMLElement, DescriptionListDescription> {

    // ------------------------------------------------------ factory

    public static DescriptionListDescription descriptionListDescription() {
        return new DescriptionListDescription(null);
    }

    public static DescriptionListDescription descriptionListDescription(String text) {
        return new DescriptionListDescription(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlg";

    private final HTMLElement textElement;

    DescriptionListDescription(String text) {
        super(SUB_COMPONENT_NAME, dd().css(component(descriptionList, description)).element());
        element().appendChild(textElement = div().css(component(descriptionList, Classes.text)).element());
        if (text != null) {
            text(text);
        }
    }

    @Override
    public HTMLElement delegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public DescriptionListDescription text(String text) {
        wrapHtmlElement(textElement).textNode(text);
        return this;
    }

    @Override
    public DescriptionListDescription that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return Elements.textNode(textElement);
    }
}
