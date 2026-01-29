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
package org.patternfly.chart.pie;

import java.util.function.Function;

import org.patternfly.chart.BaseChart;
import org.patternfly.chart.ChartType;
import org.patternfly.chart.Data;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;

public class Pie extends BaseChart<PieElement, Pie> {

    // ------------------------------------------------------ factory

    public static Pie pie() {
        return new Pie();
    }

    // ------------------------------------------------------ instance

    Pie() {
        super(ChartType.Pie, Js.uncheckedCast(createHtmlElement("pfj-chart-pie", PieElement.class)));
    }

    // ------------------------------------------------------ builder

    public Pie data(Data... data) {
        element().data = dataArray(data);
        return that();
    }

    public Pie labels(Function<Data, String> labels) {
        // There's a lot more in 'data', but we just want the 'datum' property
        element().labels = (data -> labels.apply(Js.cast(data.asPropertyMap().get("datum"))));
        return this;
    }

    public Pie colorScale(String... colors) {
        JsArray<String> array = new JsArray<>();
        if (colors != null) {
            array.push(colors);
        }
        element().colorScale = array;
        return this;
    }

    @Override
    public Pie that() {
        return this;
    }

    // ------------------------------------------------------ api

    public JsArray<Data> data() {
        return element().data;
    }
}
