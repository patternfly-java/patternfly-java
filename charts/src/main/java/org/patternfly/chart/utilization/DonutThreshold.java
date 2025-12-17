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

import org.patternfly.chart.BaseChart;
import org.patternfly.chart.ChartType;
import org.patternfly.chart.Data;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;

public class DonutThreshold extends BaseChart<DonutThresholdElement, DonutThreshold> {

    // ------------------------------------------------------ factory

    public static DonutThreshold donutThreshold() {
        return new DonutThreshold();
    }

    // ------------------------------------------------------ instance

    DonutThreshold() {
        super(ChartType.Donut, Js.uncheckedCast(createHtmlElement("pfj-chart-donut-threshold", DonutThresholdElement.class)));
    }

    // ------------------------------------------------------ add

    public DonutThreshold addUtilization(DonutUtilization utilization) {
        return add(utilization);
    }

    public DonutThreshold add(DonutUtilization utilization) {
        return add(utilization.element());
    }

    // ------------------------------------------------------ builder

    public DonutThreshold data(Data... data) {
        element().data = dataArray(data);
        return that();
    }

    public DonutThreshold invert() {
        element().setAttribute("invert", true);
        return this;
    }

    @Override
    public DonutThreshold that() {
        return this;
    }

    // ------------------------------------------------------ api

    public JsArray<Data> data() {
        return element().data;
    }
}
