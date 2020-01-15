package org.patternfly.components;

import elemental2.dom.HTMLElement;
import org.elemento.ElementBuilder;
import org.elemento.IsElement;
import org.elemento.TypedBuilder;
import org.patternfly.core.Ouia;

abstract class BaseComponent<E extends HTMLElement, B extends ElementBuilder<E, B>>
        extends ElementBuilder<E, B>
        implements TypedBuilder<E, B>, IsElement<E> {

    BaseComponent(E element, String component) {
        this(element, component, null);
    }

    BaseComponent(E element, String component, String id) {
        super(element);
        Ouia.component(element, component, id);
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
