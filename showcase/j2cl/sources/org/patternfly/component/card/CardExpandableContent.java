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

import org.patternfly.style.Modifiers.NoFill;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.card;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandableContent;

public class CardExpandableContent extends CardSubComponent<HTMLDivElement, CardExpandableContent> implements
        NoFill<HTMLDivElement, CardExpandableContent> {

    // ------------------------------------------------------ factory

    public static CardExpandableContent cardExpandableContent() {
        return new CardExpandableContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "cec";

    CardExpandableContent() {
        super(SUB_COMPONENT_NAME, div().css(component(card, expandableContent))
                .apply(e -> e.hidden = true)
                .element());
    }

    // ------------------------------------------------------ add

    public CardExpandableContent addBody(CardBody body) {
        return add(body);
    }

    public CardExpandableContent addFooter(CardFooter footer) {
        return add(footer);
    }

    // ------------------------------------------------------ builder

    @Override
    public CardExpandableContent that() {
        return this;
    }
}
