package org.patternfly.chart.donut;

import org.patternfly.chart.ChartElement;
import org.patternfly.chart.Data;
import elemental2.core.JsArray;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "HTMLElement")
public class DonutElement extends ChartElement {

    public JsArray<Data> data;
}
