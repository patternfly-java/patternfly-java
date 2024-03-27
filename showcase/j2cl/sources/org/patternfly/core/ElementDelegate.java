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
package org.patternfly.core;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.elemento.Container;
import org.jboss.elemento.HasElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

/**
 * Delegates all methods related to text and inner HTML from {@link HasElement} and all {@code add()} methods from
 * {@link Container} to the element returned by {@link #delegate()}.
 * <p>
 * Please note that if you implement this interface in your (sub)component, you must use {@code element().appendChild()} to add
 * something to the (sub)component itself!
 */
public interface ElementDelegate<E extends Element, B extends TypedBuilder<E, B>> extends
        TypedBuilder<E, B>,
        HasElement<E, B>,
        Container<E, B> {

    HTMLElement delegate();

    // ------------------------------------------------------ has element

    @Override
    default B textContent(String text) {
        delegate().textContent = text;
        return that();
    }

    @Override
    default B textNode(String text) {
        boolean textNode = false;
        NodeList<Node> nodes = delegate().childNodes;
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
        return that();
    }

    @Override
    default B add(String text) {
        delegate().appendChild(delegate().ownerDocument.createTextNode(text));
        return that();
    }

    @Override
    default B innerHtml(SafeHtml html) {
        delegate().innerHTML = html.asString();
        return that();
    }

    // ------------------------------------------------------ container

    @Override
    default B add(Node node) {
        delegate().appendChild(node);
        return that();
    }
}
