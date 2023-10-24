package org.patternfly.popper;

import jsinterop.annotations.JsFunction;

@JsFunction
@FunctionalInterface
public interface FirstUpdateFn {

    void invoke(State state);
}
