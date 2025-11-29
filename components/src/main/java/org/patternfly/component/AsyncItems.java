package org.patternfly.component;

import java.util.function.Function;

import elemental2.promise.Promise;

@FunctionalInterface
public interface AsyncItems<T, R> extends Function<T, Promise<Iterable<R>>> {
}
