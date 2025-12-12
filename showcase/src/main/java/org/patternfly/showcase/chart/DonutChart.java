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
import org.patternfly.chart.donut.Donut;
import org.patternfly.chart.donut.DonutElement;
import org.patternfly.component.avatar.Avatar;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.ChartThemeColor.multiOrdered;
import static org.patternfly.chart.Data.data;
import static org.patternfly.chart.LegendOrientation.vertical;
import static org.patternfly.chart.SubTitlePosition.bottom;
import static org.patternfly.chart.SubTitlePosition.right;
import static org.patternfly.chart.donut.Donut.donut;
import static org.patternfly.showcase.ApiDoc.Type.chart;
import static org.patternfly.showcase.ApiDoc.Type.component;
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
                div().style("height: 230px; width: 230px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%"))
                        .element()
                // @code-end:donut-basic
        ));

        addSnippet(new Snippet("donut-ral", "Right aligned legend",
                code("donut-ral"), () ->
                // @code-start:donut-ral
                div().style("height: 230px; width: 350px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendOrientation(vertical)
                                .legendPosition(right)
                                .padding(20, 140, 20, 20)
                                .width(350))
                        .element()
                // @code-end:donut-ral
        ));

        addSnippet(new Snippet("donut-mc", "Multi-color (ordered) with right aligned legend",
                code("donut-mc"), () ->
                // @code-start:donut-mc
                div().style("height: 230px; width: 350px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendOrientation(vertical)
                                .legendPosition(right)
                                .padding(20, 140, 20, 20)
                                .themeColor(multiOrdered)
                                .width(350))
                        .element()
                // @code-end:donut-mc
        ));

        addSnippet(new Snippet("donut-bal", "Bight aligned legend",
                code("donut-bal"), () ->
                // @code-start:donut-bal
                div().style("height: 275px; width: 300px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendPosition(bottom)
                                .padding(20, 20, 65, 20)
                                .height(275)
                                .width(300))
                        .element()
                // @code-end:donut-bal
        ));

        addSnippet(new Snippet("donut-small", "Small",
                code("donut-small"), () ->
                // @code-start:donut-small
                div().style("height: 150px; width: 150px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .height(150)
                                .width(150))
                        .element()
                // @code-end:donut-small
        ));

        addSnippet(new Snippet("donut-small-ral", "Small with right aligned legend",
                code("donut-small-ral"), () ->
                // @code-start:donut-small-ral
                div().style("height: 150px; width: 275px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendOrientation(vertical)
                                .legendPosition(right)
                                .padding(20, 145, 20, 20)
                                .height(150)
                                .width(275))
                        .element()
                // @code-end:donut-small-ral
        ));

        addSnippet(new Snippet("donut-small-bast", "Small with bottom aligned subtitle",
                code("donut-small-bast"), () ->
                // @code-start:donut-small-bast
                div().style("height: 165px; width: 275px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .subTitlePosition(bottom)
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendOrientation(vertical)
                                .legendPosition(right)
                                .padding(20, 145, 25, 20)
                                .height(165)
                                .width(275))
                        .element()
                // @code-end:donut-small-bast
        ));

        addSnippet(new Snippet("donut-small-rast", "Small with right aligned subtitle",
                code("donut-small-rast"), () ->
                // @code-start:donut-small-rast
                div().style("height: 200px; width: 300px;")
                        .add(donut()
                                .title("100")
                                .subTitle("Pets")
                                .subTitlePosition(right)
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legend("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendPosition(bottom)
                                .padding(20, 50, 70, 20)
                                .height(200)
                                .width(300))
                        .element()
                // @code-end:donut-small-rast
        ));

        startApiDocs(Donut.class);
        addApiDoc(Donut.class, chart);
    }
}
