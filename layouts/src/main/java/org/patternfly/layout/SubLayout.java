package org.patternfly.layout;

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.HTMLElementAttributeMethods;
import org.jboss.elemento.HTMLElementDataMethods;
import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.HTMLElementVisibilityMethods;
import org.jboss.elemento.Id;
import org.jboss.elemento.TypedBuilder;
import elemental2.dom.HTMLElement;

import static java.util.Objects.requireNonNull;

public abstract class SubLayout<E extends HTMLElement, B extends TypedBuilder<E, B>> implements
        ElementAttributeMethods<E, B>,
        ElementClassListMethods<E, B>,
        ElementContainerMethods<E, B>,
        ElementConsumerMethods<E, B>,
        ElementEventMethods<E, B>,
        ElementIdMethods<E, B>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, B>,
        HTMLElementAttributeMethods<E, B>,
        HTMLElementDataMethods<E, B>,
        HTMLElementStyleMethods<E, B>,
        HTMLElementVisibilityMethods<E, B> {

    final LayoutType layoutType;
    final String name;
    private final E element;

    protected SubLayout(LayoutType layoutType, String name, E element) {
        this.layoutType = requireNonNull(layoutType, "layout type required");
        this.name = requireNonNull(name, "name required");
        this.element = requireNonNull(element, "element required");
    }

    protected String subLayoutId() {
        return Id.build(layoutType.id, name);
    }

    @Override
    public E element() {
        return element;
    }
}
