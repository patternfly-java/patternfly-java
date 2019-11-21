package org.patternfly.client.core;

public interface Aria<T> {

    T label(String label);

    @SuppressWarnings("unchecked")
    default T label(String target, String label) {
        return (T) this;
    }
}
