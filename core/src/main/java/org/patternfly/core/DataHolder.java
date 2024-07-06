package org.patternfly.core;

import java.util.function.Supplier;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

public interface DataHolder<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

    <T> B store(String key, T value);

    boolean has(String key);

    <T> T get(String key);

    default <T> T get(String key, T defaultValue) {
        if (has(key)) {
            return get(key);
        }
        return defaultValue;
    }

    default <T> T get(String key, Supplier<T> defaultValue) {
        if (has(key)) {
            return get(key);
        }
        return defaultValue.get();
    }
}
