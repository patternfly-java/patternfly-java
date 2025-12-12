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
package org.patternfly.showcase.chart;

import org.jboss.elemento.router.Route;
import org.patternfly.chart.utilization.DonutThreshold;
import org.patternfly.chart.utilization.DonutUtilization;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.Data.data;
import static org.patternfly.chart.utilization.DonutUtilization.donutUtilization;
import static org.patternfly.showcase.ApiDoc.Type.chart;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.charts;

@Route(value = "/charts/donut-utilization", title = "Donut utilization")
public class DonutUtilizationChart extends SnippetPage {

    public DonutUtilizationChart() {
        super(charts.get("donut-utilization"));

        startExamples();
        addSnippet(new Snippet("donut-utilization-basic", "Basic",
                code("donut-utilization-basic"), () ->
                // @code-start:donut-utilization-basic
                div().style("height: 230px; width: 230px;")
                        .add(donutUtilization()
                                .title("75%")
                                .subTitle("of 100 GBps")
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("GBps capacity", 75))
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null))
                        .element()
                // @code-end:donut-utilization-basic
        ));

        startApiDocs(DonutUtilization.class);
        addApiDoc(DonutUtilization.class, chart);
        addApiDoc(DonutThreshold.class, chart);
    }
}
