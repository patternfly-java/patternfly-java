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
package org.patternfly.components;

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.HtmlContent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Size.md;
import static org.patternfly.resources.Constants.*;

/**
 * PatternFly card component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/card">https://www.patternfly.org/v4/documentation/core/components/card</a>
 */
public class Card extends BaseComponent<HTMLDivElement, Card> implements HtmlContent<HTMLDivElement, Card> {

    // ------------------------------------------------------ factory methods

    public static Card card() {
        return new Card();
    }

    public static Head head() {
        return new Head();
    }

    public static Header header() {
        return new Header();
    }

    public static Body body() {
        return new Body();
    }

    public static Footer footer() {
        return new Footer();
    }

    // ------------------------------------------------------ instance

    Card() {
        super(div().css(component(card)).element(), "Card");
    }

    @Override
    public Card that() {
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Card compact() {
        element.classList.add(modifier(compact));
        return this;
    }

    public Card hoverable() {
        element.classList.add(modifier(hoverable));
        return this;
    }

    // ------------------------------------------------------ inner classes

    public static class Head extends ElementBuilder<HTMLDivElement, Head> implements HtmlContent<HTMLDivElement, Head> {

        public static class Actions extends ElementBuilder<HTMLDivElement, Actions>
                implements HtmlContent<HTMLDivElement, Actions> {

            private Actions() {
                super(div().css(component(card, actions)).element());
            }

            @Override
            public Actions that() {
                return this;
            }
        }

        public static Actions actions() {
            return new Actions();
        }

        private Head() {
            super(div().css(component(card, head)).element());
        }

        @Override
        public Head that() {
            return this;
        }
    }

    public static class Header extends ElementBuilder<HTMLDivElement, Header> implements HtmlContent<HTMLDivElement, Header> {

        private Header() {
            super(div().css(component(card, header), component(title), md.modifier).element());
        }

        @Override
        public Header that() {
            return this;
        }
    }

    public static class Body extends ElementBuilder<HTMLDivElement, Body> implements HtmlContent<HTMLDivElement, Body> {

        private Body() {
            super(div().css(component(card, body)).element());
        }

        @Override
        public Body that() {
            return this;
        }
    }

    public static class Footer extends ElementBuilder<HTMLDivElement, Footer> implements HtmlContent<HTMLDivElement, Footer> {

        private Footer() {
            super(div().css(component(card, footer)).element());
        }

        @Override
        public Footer that() {
            return this;
        }
    }
}
