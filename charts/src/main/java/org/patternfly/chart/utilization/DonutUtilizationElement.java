package org.patternfly.chart.utilization;

import org.patternfly.chart.Data;
import org.patternfly.chart.LabelsFn;
import org.patternfly.chart.LegendData;
import org.patternfly.chart.Padding;
import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "HTMLElement")
public class DonutUtilizationElement extends HTMLElement {

    public JsArray<Data> data;
    public LabelsFn labels;
    public JsArray<LegendData> legendData;
    public Padding padding;
}
