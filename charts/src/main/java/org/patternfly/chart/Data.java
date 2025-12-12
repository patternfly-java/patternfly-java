package org.patternfly.chart;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Data {

    @JsOverlay
    public static Data data(String x, double y) {
        Data data = new Data();
        data.x = x;
        data.y = y;
        return data;
    }

    public String x;
    public double y;
}
