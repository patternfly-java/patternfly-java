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

import java.util.function.Supplier;

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

public enum ContentType {

    _default(() -> div().element(), null),
    h1(() -> h(1).element(), "h1"),
    h2(() -> h(2).element(), "h2"),
    h3(() -> h(3).element(), "h3"),
    h4(() -> h(4).element(), "h4"),
    h5(() -> h(5).element(), "h5"),
    h6(() -> h(6).element(), "h6"),
    p(() -> p().element(), "p"),
    a(() -> a().element(), "a"),
    small(() -> small().element(), "small"),
    blockquote(() -> blockquote().element(), "blockquote"),
    pre(() -> pre().element(), "pre"),
    hr(() -> Elements.hr().element(), "hr"),
    ul(() -> ul().element(), "ul"),
    ol(() -> ol().element(), "ol"),
    dl(() -> dl().element(), "dl"),
    li(() -> li().element(), "li"),
    dt(() -> dt().element(), "dt"),
    dd(() -> dd().element(), "dd"),
    ;

    private final Supplier<HTMLElement> supplier;
    private final String type;

    ContentType(Supplier<HTMLElement> supplier, String type) {
        this.supplier = supplier;
        this.type = type;
    }

    HTMLElement element() {
        // CSS class does not confirm to standard component() pattern!
        String css = type != null ? component(content) + "--" + type : component(content);
        HTMLElement element = supplier.get();
        element.classList.add(css);
        return element;
    }
}
