package org.patternfly.chart;

import jsinterop.annotations.JsFunction;
import jsinterop.base.Any;

@JsFunction
@FunctionalInterface
public interface LabelsFn {

    String label(Any data);
}
