package org.patternfly.popper;

import jsinterop.annotations.JsFunction;

@JsFunction
@FunctionalInterface
public interface ModifierFn {

    void invoke(ModifierArguments arguments);
}
