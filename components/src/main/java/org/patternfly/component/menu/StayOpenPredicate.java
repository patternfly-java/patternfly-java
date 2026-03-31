package org.patternfly.component.menu;

import java.util.Objects;

import elemental2.dom.Event;

@FunctionalInterface
public interface StayOpenPredicate {

    boolean test(Event event, MenuToggle menuToggle, Menu menu);

    default StayOpenPredicate and(StayOpenPredicate other) {
        Objects.requireNonNull(other);
        return (event, menuToggle, menu) -> test(event, menuToggle, menu) && other.test(event, menuToggle, menu);
    }

    default StayOpenPredicate or(StayOpenPredicate other) {
        Objects.requireNonNull(other);
        return (event, menuToggle, menu) -> test(event, menuToggle, menu) || other.test(event, menuToggle, menu);
    }
}
