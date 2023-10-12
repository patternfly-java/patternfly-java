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
package org.patternfly.component;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.compact;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.footer;
import static org.patternfly.layout.Classes.head;
import static org.patternfly.layout.Classes.header;
import static org.patternfly.layout.Classes.hoverable;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Size.md;

/**
 * PatternFly card component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/card">https://www.patternfly.org/v4/documentation/core/components/card</a>
 */
@Deprecated
public class Card extends BaseComponent<HTMLDivElement, Card> {

    // ------------------------------------------------------ factory

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

    // ------------------------------------------------------ builder

    public Card compact() {
        element().classList.add(modifier(compact));
        return this;
    }

    public Card hoverable() {
        element().classList.add(modifier(hoverable));
        return this;
    }

    // ------------------------------------------------------ inner classes

    @Deprecated
    public static class Head extends SubComponent<HTMLDivElement, Head> {

        public static class Actions extends SubComponent<HTMLDivElement, Actions> {

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

    @Deprecated
    public static class Header extends SubComponent<HTMLDivElement, Header> {

        private Header() {
            super(div().css(component(card, header), component("title"), md.modifier).element());
        }

        @Override
        public Header that() {
            return this;
        }
    }

    @Deprecated
    public static class Body extends SubComponent<HTMLDivElement, Body> {

        private Body() {
            super(div().css(component(card, "body")).element());
        }

        @Override
        public Body that() {
            return this;
        }
    }

    @Deprecated
    public static class Footer extends SubComponent<HTMLDivElement, Footer> {

        private Footer() {
            super(div().css(component(card, footer)).element());
        }

        @Override
        public Footer that() {
            return this;
        }
    }
}
