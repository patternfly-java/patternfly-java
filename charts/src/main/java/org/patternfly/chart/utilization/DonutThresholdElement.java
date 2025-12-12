package org.patternfly.chart.utilization;

import org.patternfly.chart.ChartElement;
import org.patternfly.chart.Data;
import org.patternfly.chart.Threshold;

import elemental2.core.JsArray;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "HTMLElement")
public class DonutThresholdElement extends ChartElement {

    public JsArray<Data> data;
    public JsArray<Threshold> thresholds;
}
