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
package org.patternfly.component.card;

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.style.Modifiers.NoFill;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.card;
import static org.patternfly.style.Classes.component;

public class CardBody extends CardSubComponent<HTMLDivElement, CardBody> implements
        ElementTextMethods<HTMLDivElement, CardBody>,
        NoFill<HTMLDivElement, CardBody> {

    // ------------------------------------------------------ factory

    public static CardBody cardBody() {
        return new CardBody();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "cb";

    CardBody() {
        super(SUB_COMPONENT_NAME, div().css(component(card, body)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public CardBody that() {
        return this;
    }
}
