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
import org.patternfly.chart.pie.Pie;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.ChartThemeColor.multiOrdered;
import static org.patternfly.chart.ChartThemeColor.orange;
import static org.patternfly.chart.Data.data;
import static org.patternfly.chart.LegendOrientation.vertical;
import static org.patternfly.chart.LegendPosition.bottom;
import static org.patternfly.chart.LegendPosition.right;
import static org.patternfly.chart.Padding.padding;
import static org.patternfly.chart.pie.Pie.pie;
import static org.patternfly.showcase.ApiDoc.Type.chart;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.charts;
import static org.patternfly.token.Token.chartThemeColorscalesBlueColorscale100;
import static org.patternfly.token.Token.chartThemeColorscalesOrangeColorscale300;
import static org.patternfly.token.Token.chartThemeColorscalesYellowColorscale100;

@Route(value = "/charts/pie", title = "Pie")
public class PieChart extends SnippetPage {

    public PieChart() {
        super(charts.get("pie"));

        startExamples();
        addSnippet(new Snippet("pie-basic", "Basic with right aligned legend",
                code("pie-basic"), () ->
                // @code-start:pie-basic
                div().style("height: 230px; width: 350px;")
                        .add(pie()
                                .title("100")
                                .subTitle("Pets")
                                .ariaTitle("Donut chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Cats", 35), data("Dogs", 55),
                                        data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legendData("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendPosition(right)
                                .legendOrientation(vertical)
                                .padding(padding(20, 140, 20, 20))
                                .width(350)
                                .height(230))
                        .element()
        // @code-end:pie-basic
        ));

        addSnippet(new Snippet("pie-mc", "Multi-color (ordered) with bottom aligned legend",
                code("pie-mc"), () ->
                // @code-start:pie-mc
                div().style("height: 275px; width: 300px;")
                        .add(pie()
                                .ariaTitle("Pie chart example")
                                .ariaDesc("Pie chart with multi-color theme and bottom legend")
                                .data(data("Cats", 35), data("Dogs", 55),
                                        data("Birds", 10))
                                .labels(data -> data.x + ": " + data.y + "%")
                                .legendData("Cats: 35", "Dogs: 55", "Birds: 10")
                                .legendPosition(bottom)
                                .padding(padding(20, 20, 80, 20))
                                .themeColor(multiOrdered)
                                .width(300)
                                .height(275))
                        .element()
        // @code-end:pie-mc
        ));

        addSnippet(new Snippet("pie-custom-cs", "Custom color scale with right aligned legend",
                code("pie-custom-cs"), () ->
                // @code-start:pie-custom-cs
                div().style("height: 230px; width: 450px;")
                        .add(pie()
                                .ariaTitle("Pie chart example")
                                .ariaDesc("Average number of pets")
                                .data(data("Sky", 38), data("Shady side of pyramid", 7),
                                        data("Sunny side of pyramid", 17), data("Sky", 38))
                                .labels(data -> data.x)
                                .legendData("Sky", "Shady side of pyramid", "Sunny side of pyramid")
                                .legendOrientation(vertical)
                                .legendPosition(right)
                                .padding(padding(20, 240, 20, 20))
                                .themeColor(orange)
                                .width(450)
                                .height(230)
                                .colorScale(
                                        chartThemeColorscalesBlueColorscale100.var,
                                        chartThemeColorscalesOrangeColorscale300.var,
                                        chartThemeColorscalesYellowColorscale100.var,
                                        chartThemeColorscalesBlueColorscale100.var))
                        .element()
        // @code-end:pie-custom-cs
        ));

        startApiDocs(Pie.class);
        addApiDoc(Pie.class, chart);
    }
}
