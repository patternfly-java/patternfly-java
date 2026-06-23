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
package org.patternfly.component.content;

import org.jboss.elemento.Elements;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.blockquote;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.pre;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;

/** Defines the HTML element types available for a {@link Content} component. */
public enum ContentType {

    _default {
        @Override
        public HTMLElement element() {
            HTMLElement element = div().element();
            element.classList.add(component(content));
            return element;
        }
    },
    h1 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(1).element();
            element.classList.add(component(content) + "--h1");
            return element;
        }
    },
    h2 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(2).element();
            element.classList.add(component(content) + "--h2");
            return element;
        }
    },
    h3 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(3).element();
            element.classList.add(component(content) + "--h3");
            return element;
        }
    },
    h4 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(4).element();
            element.classList.add(component(content) + "--h4");
            return element;
        }
    },
    h5 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(5).element();
            element.classList.add(component(content) + "--h5");
            return element;
        }
    },
    h6 {
        @Override
        public HTMLElement element() {
            HTMLElement element = h(6).element();
            element.classList.add(component(content) + "--h6");
            return element;
        }
    },
    p {
        @Override
        public HTMLElement element() {
            HTMLElement element = p().element();
            element.classList.add(component(content) + "--p");
            return element;
        }
    },
    a {
        @Override
        public HTMLElement element() {
            HTMLElement element = a().element();
            element.classList.add(component(content) + "--a");
            return element;
        }
    },
    small {
        @Override
        public HTMLElement element() {
            HTMLElement element = small().element();
            element.classList.add(component(content) + "--small");
            return element;
        }
    },
    blockquote {
        @Override
        public HTMLElement element() {
            HTMLElement element = blockquote().element();
            element.classList.add(component(content) + "--blockquote");
            return element;
        }
    },
    pre {
        @Override
        public HTMLElement element() {
            HTMLElement element = pre().element();
            element.classList.add(component(content) + "--pre");
            return element;
        }
    },
    hr {
        @Override
        public HTMLElement element() {
            HTMLElement element = Elements.hr().element();
            element.classList.add(component(content) + "--hr");
            return element;
        }
    },
    ul {
        @Override
        public HTMLElement element() {
            HTMLElement element = ul().element();
            element.classList.add(component(content) + "--ul");
            return element;
        }
    },
    ol {
        @Override
        public HTMLElement element() {
            HTMLElement element = ol().element();
            element.classList.add(component(content) + "--ol");
            return element;
        }
    },
    dl {
        @Override
        public HTMLElement element() {
            HTMLElement element = dl().element();
            element.classList.add(component(content) + "--dl");
            return element;
        }
    },
    li {
        @Override
        public HTMLElement element() {
            HTMLElement element = li().element();
            element.classList.add(component(content) + "--li");
            return element;
        }
    },
    dt {
        @Override
        public HTMLElement element() {
            HTMLElement element = dt().element();
            element.classList.add(component(content) + "--dt");
            return element;
        }
    },
    dd {
        @Override
        public HTMLElement element() {
            HTMLElement element = dd().element();
            element.classList.add(component(content) + "--dd");
            return element;
        }
    },
    ;

    public abstract HTMLElement element();
}
