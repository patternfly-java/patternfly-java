package org.patternfly.core;

@FunctionalInterface
public interface Callback {

    static Callback noop() {
        return () -> {
            // nop
        };
    }

    void call();
}
