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
import org.patternfly.chart.ChartType;
import org.patternfly.chart.Data;
import org.patternfly.chart.Threshold;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;
import static org.patternfly.chart.Threshold.threshold;

public class DonutUtilization extends BaseChart<DonutUtilizationElement, DonutUtilization> {

    // ------------------------------------------------------ factory

    public static DonutUtilization donutUtilization() {
        return new DonutUtilization();
    }

    // ------------------------------------------------------ instance

    DonutUtilization() {
        super(ChartType.DonutUtilization,
                Js.uncheckedCast(createHtmlElement("pfj-chart-donut-utilization", DonutUtilizationElement.class)));
    }

    // ------------------------------------------------------ builder

    public DonutUtilization data(Data data) {
        element().data = data;
        return this;
    }

    public DonutUtilization labels(Function<Data, String> labels) {
        // There's a lot more in 'data', but we just want the 'datum' property
        element().labels = (data -> labels.apply(Js.cast(data.asPropertyMap().get("datum"))));
        return this;
    }

    public DonutUtilization invert() {
        element().setAttribute("invert", true);
        return this;
    }

    public DonutUtilization thresholds(double... threshold) {
        if (threshold != null) {
            JsArray<Threshold> array = new JsArray<>();
            for (double t : threshold) {
                array.push(threshold(t));
            }
            element().thresholds = array;
        }
        return this;
    }

    public DonutUtilization thresholds(Threshold... threshold) {
        if (threshold != null) {
            JsArray<Threshold> array = new JsArray<>();
            array.push(threshold);
            element().thresholds = array;
        }
        return this;
    }

    @Override
    public DonutUtilization that() {
        return this;
    }

    // ------------------------------------------------------ api

    public Data data() {
        return element().data;
    }

    public JsArray<Threshold> thresholds() {
        return element().thresholds;
    }
}
