package org.patternfly.chart;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Padding {

    @JsOverlay
    public static Padding padding(double top, double right, double bottom, double left) {
        Padding padding = new Padding();
        padding.top = top;
        padding.right = right;
        padding.bottom = bottom;
        padding.left = left;
        return padding;
    }

    public double top;
    public double right;
    public double bottom;
    public double left;
}
