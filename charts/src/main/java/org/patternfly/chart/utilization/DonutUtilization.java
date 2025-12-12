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
                Js.uncheckedCast(createHtmlElement("pfj-chart-utilization", DonutUtilizationElement.class)));
    }

    // ------------------------------------------------------ builder

    public DonutUtilization data(Data data) {
        element().data = data;
        return this;
    }

    public DonutUtilization thresholds(double threshold, double... moreThresholds) {
        JsArray<Threshold> array = new JsArray<>();
        array.push(threshold(threshold));
        if (moreThresholds != null) {
            for (double t : moreThresholds) {
                array.push(threshold(t));
            }
        }
        element().thresholds = array;
        return this;
    }

    public DonutUtilization thresholds(Threshold threshold, Threshold... moreThresholds) {
        JsArray<Threshold> array = new JsArray<>();
        array.push(threshold);
        array.push(moreThresholds);
        element().thresholds = array;
        return this;
    }

    @Override
    public DonutUtilization that() {
        return this;
    }
}
