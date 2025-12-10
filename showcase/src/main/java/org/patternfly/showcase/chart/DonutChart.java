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
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.donut.Donut.donut;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.charts;

@Route(value = "/charts/donut", title = "Donut")
public class DonutChart extends SnippetPage {

    public DonutChart() {
        super(charts.get("donut"));

        startExamples();
        addSnippet(new Snippet("donut-basic", "Basic",
                code("donut-basic"), () ->
                // @code-start:donut-basic
                div()
                        .add(donut())
                        .element()
                // @code-end:donut-basic
        ));
    }
}
