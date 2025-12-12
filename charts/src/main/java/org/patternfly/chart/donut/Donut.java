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
package org.patternfly.chart.donut;

import org.patternfly.chart.BaseChart;
import org.patternfly.chart.ChartType;
import org.patternfly.chart.Data;
import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;

public class Donut extends BaseChart<DonutElement, Donut> {

    // ------------------------------------------------------ factory

    public static Donut donut() {
        return new Donut();
    }

    // ------------------------------------------------------ instance

    Donut() {
        super(ChartType.Donut, Js.uncheckedCast(createHtmlElement("pfj-chart-donut", DonutElement.class)));
    }

    // ------------------------------------------------------ builder

    public Donut data(Data... data) {
        if (data != null) {
            JsArray<Data> array = new JsArray<>();
            array.push(data);
            element().data = array;
        }
        return this;
    }

    @Override
    public Donut that() {
        return this;
    }

    // ------------------------------------------------------ api

    public JsArray<Data> data() {
        return element().data;
    }
}
