package org.patternfly.components;

import elemental2.dom.HTMLElement;
import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.core.Ouia;

abstract class BaseComponent<E extends HTMLElement, B extends ElementBuilder<E, B>>
        extends ElementBuilder<E, B>
        implements TypedBuilder<E, B>, IsElement<E> {

    BaseComponent(E element, String component) {
        super(element);
        Ouia.component(element, component);
    }

    @Override
    public B id() {
        super.id();
        Ouia.id(element, element.id);
        return that();
    }

    @Override
    public B id(String id) {
        super.id(id);
        Ouia.id(element, element.id);
        return that();
    }
}
