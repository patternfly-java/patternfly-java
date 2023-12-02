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

import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.core.RedirectTo;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.title;

public class CardTitle extends BaseSubComponent<HTMLDivElement, CardTitle> implements RedirectTo<HTMLDivElement, CardTitle> {

    // ------------------------------------------------------ factory

    public static CardTitle cardTitle() {
        return new CardTitle(null, -1);
    }

    public static CardTitle cardTitle(String text) {
        return new CardTitle(text, -1);
    }

    public static CardTitle cardTitle(int level) {
        return new CardTitle(null, level);
    }

    public static CardTitle cardTitle(String text, int level) {
        return new CardTitle(text, level);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ct";

    private final HTMLElement titleText;

    CardTitle(String text, int level) {
        super(div().css(component(card, title)).element(), ComponentType.Card, SUB_COMPONENT_NAME);
        if (level > 0) {
            element().appendChild(titleText = h(level, text).css(component(card, title, Classes.text)).element());
        } else {
            element().appendChild(titleText = div().css(component(card, title, Classes.text)).element());
        }
        if (text != null) {
            titleText.textContent = text;
        }
    }

    @Override
    public HTMLElement redirectTo() {
        return titleText;
    }

    // ------------------------------------------------------ builder

    @Override
    public CardTitle that() {
        return this;
    }
}
