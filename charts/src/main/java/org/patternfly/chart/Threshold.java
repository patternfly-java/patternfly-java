package org.patternfly.chart;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Threshold {

    @JsOverlay
    public static Threshold threshold(double value) {
        Threshold threshold = new Threshold();
        threshold.value = value;
        return threshold;
    }

    @JsOverlay
    public static Threshold threshold(double value, String color) {
        Threshold threshold = new Threshold();
        threshold.value = value;
        threshold.color = color;
        return threshold;
    }

    public double value;
    public String color;
}
