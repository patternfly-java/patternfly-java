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
 * Redirects all methods related to text and inner HTML from {@link HasElement} and all {@code add()} methods from
 * {@link Container} to the element returned by {@link #redirectTo()}.
 * <p>
 * Please note that if you implement this interface in your (sub)component, you must use {@code element().appendChild()} to add
 * something to the (sub)component itself!
 */
public interface RedirectTo<E extends Element, B extends TypedBuilder<E, B>> extends
        TypedBuilder<E, B>,
        HasElement<E, B>,
        Container<E, B> {

    HTMLElement redirectTo();

    // ------------------------------------------------------ has element

    @Override
    default B textContent(String text) {
        redirectTo().textContent = text;
        return that();
    }

    @Override
    default B textNode(String text) {
        boolean textNode = false;
        NodeList<Node> nodes = redirectTo().childNodes;
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
        redirectTo().appendChild(redirectTo().ownerDocument.createTextNode(text));
        return that();
    }

    @Override
    default B innerHtml(SafeHtml html) {
        redirectTo().innerHTML = html.asString();
        return that();
    }

    // ------------------------------------------------------ container

    @Override
    default B add(Node node) {
        redirectTo().appendChild(node);
        return that();
    }
}
