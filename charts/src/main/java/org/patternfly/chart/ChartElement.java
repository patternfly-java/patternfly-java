package org.patternfly.chart;

import elemental2.core.JsArray;
import elemental2.dom.HTMLElement;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ChartElement extends HTMLElement {

    public JsArray<String> categories;
    public double height;
    public LabelsFn labels;
    public boolean legendAllowWrap;
    public JsArray<LegendData> legendData;
    public String legendOrientation;
    public String legendPosition;
    public Padding padding;
    public String subTitle;
    public String subTitlePosition;
    public String themeColor;
    public String title;
    public double width;
}
