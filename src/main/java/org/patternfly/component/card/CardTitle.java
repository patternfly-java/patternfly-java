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

import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.elemento.IsElement;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.title;

public class CardTitle extends SubComponent<HTMLDivElement, CardTitle> {

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

    private final HTMLElement titleText;

    CardTitle(String text, int level) {
        super(div().css(component(card, title)).element());
        if (level > 0) {
            super.add(titleText = h(level, text).css(component(card, title, Classes.text)).element());
        } else {
            super.add(titleText = div().css(component(card, title, Classes.text)).element());
        }
        if (text != null) {
            titleText.textContent = text;
        }
    }

    // ------------------------------------------------------ add

    @Override
    public CardTitle add(Node node) {
        addToTitleText(node);
        return this;
    }

    @Override
    public CardTitle add(IsElement<?> element) {
        addToTitleText(element.element());
        return this;
    }

    @Override
    public CardTitle addAll(Node... nodes) {
        for (Node node : nodes) {
            addToTitleText(node);
        }
        return this;
    }

    @Override
    public CardTitle addAll(Element... elements) {
        for (Element element : elements) {
            addToTitleText(element);
        }
        return this;
    }

    @Override
    public CardTitle addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            addToTitleText(element);
        }
        return this;
    }

    @Override
    public CardTitle addAll(IsElement<?>... elements) {
        for (IsElement<?> element : elements) {
            if (element != null) {
                addToTitleText(element.element());
            }
        }
        return this;
    }

    @Override
    public CardTitle addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof Node) {
                addToTitleText(((Node) element));
            } else if (element instanceof IsElement) {
                // noinspection rawtypes
                addToTitleText(((IsElement) element).element());
            }
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public CardTitle textContent(String text) {
        titleText.textContent = text;
        return this;
    }

    @Override
    public CardTitle textNode(String text) {
        boolean textNode = false;
        NodeList<Node> nodes = titleText.childNodes;
        for (int i = 0; i < nodes.length && !textNode; i++) {
            Node node = nodes.getAt(i);
            if (node.nodeType == Node.TEXT_NODE) {
                node.nodeValue = text;
                textNode = true;
            }
        }
        if (!textNode) {
            add(text);
        }
        return this;
    }

    @Override
    public CardTitle add(String text) {
        addToTitleText(element().ownerDocument.createTextNode(text));
        return this;
    }

    @Override
    public CardTitle innerHtml(SafeHtml html) {
        titleText.innerHTML = html.asString();
        return this;
    }

    @Override
    public CardTitle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void addToTitleText(Node node) {
        titleText.appendChild(node);
    }
}
