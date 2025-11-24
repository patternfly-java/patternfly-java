package org.patternfly.component;

import org.jboss.elemento.TypedBuilder;
import elemental2.dom.HTMLElement;

public interface Validatable<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B> {

    B validated(ValidationStatus status);

    public void resetValidation();
}
