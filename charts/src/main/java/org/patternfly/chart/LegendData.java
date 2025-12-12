package org.patternfly.chart;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class LegendData {

    public String name;
    public LegendDataSymbol symbol;
}
