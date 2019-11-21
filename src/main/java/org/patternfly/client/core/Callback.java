package org.patternfly.client.core;

@FunctionalInterface
public interface Callback {

    static Callback noop() {
        return () -> {
            // nop
        };
    }

    void call();
}
