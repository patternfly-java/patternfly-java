/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.chart.utilization;

import java.util.function.Function;

import org.patternfly.chart.BaseChart;
import org.patternfly.chart.ChartThemeColor;
import org.patternfly.chart.ChartType;
import org.patternfly.chart.Data;
import org.patternfly.chart.LegendData;
import org.patternfly.chart.LegendOrientation;
import org.patternfly.chart.Padding;
import org.patternfly.chart.SubTitlePosition;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;

public class DonutUtilization extends BaseChart<DonutUtilizationElement, DonutUtilization> {

    // ------------------------------------------------------ factory

    public static DonutUtilization donut() {
        return new DonutUtilization();
    }

    // ------------------------------------------------------ instance

    DonutUtilization() {
        super(ChartType.Donut, createHtmlElement("pfj-chart-donut", DonutUtilizationElement.class));
    }

    // ------------------------------------------------------ builder

    public DonutUtilization data(Data data, Data... moreData) {
        JsArray<Data> array = new JsArray<>();
        array.push(data);
        array.push(moreData);
        element().data = array;
        return this;
    }

    public DonutUtilization height(int height) {
        element().setAttribute("height", height);
        return this;
    }

    public DonutUtilization labels(Function<Data, String> labels) {
        // There's a lot more in 'data', but we just want the 'datum' property
        element().labels = (data -> labels.apply(Js.cast(data.asPropertyMap().get("datum"))));
        return this;
    }

    public DonutUtilization legend(String legend, String... moreLegends) {
        JsArray<LegendData> array = new JsArray<>();
        LegendData ld = new LegendData();
        ld.name = legend;
        array.push(ld);
        if (moreLegends != null) {
            for (String more : moreLegends) {
                ld = new LegendData();
                ld.name = more;
                array.push(ld);
            }
        }
        element().legendData = array;
        return this;
    }

    public DonutUtilization legendOrientation(LegendOrientation orientation) {
        element().setAttribute("legend-orientation", orientation.name().toLowerCase());
        return this;
    }

    public DonutUtilization legendPosition(SubTitlePosition position) {
        element().setAttribute("legend-position", position.name().toLowerCase());
        return this;
    }

    public DonutUtilization padding(int top, int right, int bottom, int left) {
        Padding padding = new Padding();
        padding.top = top;
        padding.right = right;
        padding.bottom = bottom;
        padding.left = left;
        element().padding = padding;
        return this;
    }

    public DonutUtilization subTitle(String subTitle) {
        element().setAttribute("sub-title", subTitle);
        return this;
    }

    public DonutUtilization subTitlePosition(SubTitlePosition position) {
        element().setAttribute("sub-title-position", position.name().toLowerCase());
        return this;
    }

    public DonutUtilization themeColor(ChartThemeColor themeColor) {
        element().setAttribute("theme-color", themeColor.color);
        return this;
    }

    public DonutUtilization title(String title) {
        element().setAttribute("title", title);
        return this;
    }

    public DonutUtilization width(int width) {
        element().setAttribute("width", width);
        return this;
    }

    @Override
    public DonutUtilization that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public DonutUtilization ariaTitle(String ariaTitle) {
        element().setAttribute("aria-title", ariaTitle);
        return this;
    }

    public DonutUtilization ariaDesc(String ariaDesc) {
        element().setAttribute("aria-desc", ariaDesc);
        return this;
    }
}
