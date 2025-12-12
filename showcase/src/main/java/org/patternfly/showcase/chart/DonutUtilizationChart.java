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
import org.patternfly.chart.SubTitlePosition;
import org.patternfly.chart.utilization.DonutThreshold;
import org.patternfly.chart.utilization.DonutUtilization;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.ChartThemeColor.green;
import static org.patternfly.chart.Data.data;
import static org.patternfly.chart.LegendOrientation.vertical;
import static org.patternfly.chart.LegendPosition.bottom;
import static org.patternfly.chart.Padding.padding;
import static org.patternfly.chart.utilization.DonutThreshold.donutThreshold;
import static org.patternfly.chart.utilization.DonutUtilization.donutUtilization;
import static org.patternfly.showcase.ApiDoc.Type.chart;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.charts;

@Route(value = "/charts/donut-utilization", title = "Donut utilization")
public class DonutUtilizationChart extends SnippetPage {

    public DonutUtilizationChart() {
        super(charts.get("donut-utilization"));

        // ------------------------------------------------------ donut utilization

        addHeader("donut-utilization", "Donut utilization examples");
        addSnippet("donut-utilization", new Snippet("du-basic", "Basic",
                code("du-basic"), () ->
                // @code-start:du-basic
                div().style("height: 230px; width: 230px;")
                        .add(donutUtilization()
                                .title("75%")
                                .subTitle("of 100 GBps")
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("Storage capacity", 75))
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null))
                        .element()
                // @code-end:du-basic
        ));

        addSnippet("donut-utilization", new Snippet("du-ral", "Right aligned legend",
                code("du-ral"), () -> {
            // @code-start:du-ral
            DonutUtilization du = donutUtilization()
                    .title("0%")
                    .subTitle("of 100 GBps")
                    .ariaTitle("Donut utilization chart example")
                    .ariaDesc("Storage capacity")
                    .data(data("Storage capacity", 0))
                    .thresholds(60, 90)
                    .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                    .legendData("Storage capacity: 0%", "unused")
                    .legendOrientation(vertical)
                    .padding(padding(20, 225, 20, 20))
                    .width(435);

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "unused");
            }, 1000);

            return div().style("height: 230px; width: 435px;")
                    .add(du)
                    .element();
            // @code-end:du-ral
        }));

        addSnippet("donut-utilization", new Snippet("du-inv-ral", "Inverted with right aligned legend",
                code("du-inv-ral"), () -> {
            // @code-start:du-inv-ral
            DonutUtilization du = donutUtilization()
                    .title("0%")
                    .subTitle("of 100 GBps")
                    .ariaTitle("Donut utilization chart example")
                    .ariaDesc("Storage capacity")
                    .data(data("Storage capacity", 0))
                    .thresholds(60, 20)
                    .invert()
                    .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                    .legendData("Storage capacity: 0%", "unused")
                    .legendOrientation(vertical)
                    .padding(padding(20, 225, 20, 20))
                    .width(435);

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (((previous - 10) % 100) + 100) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "unused");
            }, 1000);

            return div().style("height: 230px; width: 435px;")
                    .add(du)
                    .element();
            // @code-end:du-inv-ral
        }));

        addSnippet("donut-utilization", new Snippet("du-bavl", "Bottom aligned vertical legend",
                code("du-bavl"), () -> {
            // @code-start:du-bavl
            DonutUtilization du = donutUtilization()
                    .title("0%")
                    .subTitle("of 100 GBps")
                    .ariaTitle("Donut utilization chart example")
                    .ariaDesc("Storage capacity")
                    .data(data("Storage capacity", 0))
                    .thresholds(60, 90)
                    .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                    .legendData("Storage capacity: 0%", "unused")
                    .legendOrientation(vertical)
                    .legendPosition(bottom)
                    .padding(padding(20, 20, 75, 20))
                    .themeColor(green)
                    .height(300)
                    .width(230);

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "unused");
            }, 1000);

            return div().style("height: 300px; width: 230px;")
                    .add(du)
                    .element();
            // @code-end:du-bavl
        }));

        addSnippet("donut-utilization", new Snippet("du-bal", "Bottom aligned legend",
                code("du-bal"), () ->
                // @code-start:du-bal
                div().style("height: 275px; width: 300px;")
                        .add(donutUtilization()
                                .title("45%")
                                .subTitle("of 100 GBps")
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("Storage capacity", 45))
                                .thresholds(60, 90)
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                .legendData("Storage capacity: 45%", "unused")
                                .legendPosition(bottom)
                                .padding(padding(20, 20, 65, 20))
                                .height(275)
                                .width(300))
                        .element()
                // @code-end:du-bal
        ));

        addSnippet("donut-utilization", new Snippet("du-small", "Small",
                code("du-small"), () ->
                // @code-start:du-small
                div().style("height: 175px; width: 175px;")
                        .add(donutUtilization()
                                .title("75%")
                                .subTitle("of 100 GBps")
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("Storage capacity", 75))
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                .height(175)
                                .width(175))
                        .element()
                // @code-end:du-small
        ));

        addSnippet("donut-utilization", new Snippet("du-small-ral", "Small with right aligned legend",
                code("du-small-ral"), () -> {
            // @code-start:du-small-ral
            DonutUtilization du = donutUtilization()
                    .title("0%")
                    .subTitle("of 100 GBps")
                    .ariaTitle("Donut utilization chart example")
                    .ariaDesc("Storage capacity")
                    .data(data("Storage capacity", 0))
                    .thresholds(60, 90)
                    .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                    .legendData("Storage capacity: 0%", "unused")
                    .legendOrientation(vertical)
                    .padding(padding(20, 195, 20, 20))
                    .width(350)
                    .height(175);

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "unused");
            }, 1000);

            return div().style("height: 175px; width: 350px;")
                    .add(du)
                    .element();
            // @code-end:du-small-ral
        }));

        addSnippet("donut-utilization", new Snippet("du-small-bas", "Small with bottom aligned subtitle",
                code("du-small-bas"), () ->
                // @code-start:du-small-bas
                div().style("height: 185px; width: 350px;")
                        .add(donutUtilization()
                                .title("45%")
                                .subTitle("of 100 GBps")
                                .subTitlePosition(SubTitlePosition.bottom)
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("Storage capacity", 45))
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                .legendData("Storage capacity: 45%", "unused")
                                .legendOrientation(vertical)
                                .padding(padding(20, 195, 20, 20))
                                .height(185)
                                .width(350))
                        .element()
                // @code-end:du-small-bas
        ));

        addSnippet("donut-utilization", new Snippet("du-small-ras", "Small with right aligned subtitle",
                code("du-small-ras"), () ->
                // @code-start:du-small-ras
                div().style("height: 200px; width: 350px;")
                        .add(donutUtilization()
                                .title("45%")
                                .subTitle("of 100 GBps")
                                .subTitlePosition(SubTitlePosition.right)
                                .ariaTitle("Donut utilization chart example")
                                .ariaDesc("Storage capacity")
                                .data(data("Storage capacity", 45))
                                .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                .legendData("Storage capacity: 45%", "unused")
                                .legendPosition(bottom)
                                .padding(padding(20, 20, 45, 20))
                                .height(200)
                                .width(350))
                        .element()
                // @code-end:du-small-ras
        ));

        // ------------------------------------------------------ donut threshold

        addHeader("donut-threshold", "Donut threshold examples");
        addSnippet("donut-threshold", new Snippet("dt-static", "Static thresholds",
                code("dt-static"), () ->
                // @code-start:dt-static
                div().style("height: 230px; width: 230px;")
                        .add(donutThreshold()
                                .ariaTitle("Donut utilization chart with static threshold example")
                                .ariaDesc("Storage capacity")
                                .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                                .labels(data -> data.x != null ? data.x : null)
                                .addUtilization(donutUtilization()
                                        .title("45%")
                                        .subTitle("of 100 GBps")
                                        .data(data("Storage capacity", 45))
                                        .thresholds(60, 90)
                                        .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)))
                        .element()
                // @code-end:dt-static
        ));

        addSnippet("donut-threshold", new Snippet("dt-ral", "Static thresholds with right aligned legend",
                code("dt-ral"), () -> {
            // @code-start:dt-ral
            DonutUtilization du = donutUtilization();
            DonutThreshold dt = donutThreshold()
                    .ariaTitle("Donut utilization chart with static threshold example")
                    .ariaDesc("Storage capacity")
                    .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                    .labels(data -> data.x != null ? data.x : null)
                    .padding(padding(20, 290, 20, 20))
                    .width(500)
                    .addUtilization(du
                            .title("0%")
                            .subTitle("of 100 GBps")
                            .data(data("Storage capacity", 0))
                            .thresholds(60, 90)
                            .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                            .legendData("Storage capacity: 0%", "Warning threshold at 60%", "Danger threshold at 90%")
                            .legendOrientation(vertical));

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "Warning threshold at 60%", "Danger threshold at 90%");
            }, 1000);

            return div().style("height: 230px; width: 500px;")
                    .add(dt)
                    .element();
            // @code-end:dt-ral
        }));

        addSnippet("donut-threshold", new Snippet("dt-inv-ral", "Inverted static thresholds with right aligned legend",
                code("dt-inv-ral"), () -> {
            // @code-start:dt-inv-ral
            DonutUtilization du = donutUtilization();
            DonutThreshold dt = donutThreshold()
                    .ariaTitle("Donut utilization chart with static threshold example")
                    .ariaDesc("Storage capacity")
                    .data(data("Warning at 60%", 60), data("Danger at 20%", 20))
                    .invert()
                    .labels(data -> data.x != null ? data.x : null)
                    .padding(padding(20, 290, 20, 20))
                    .width(500)
                    .addUtilization(du
                            .title("0%")
                            .subTitle("of 100 GBps")
                            .data(data("Storage capacity", 0))
                            .thresholds(60, 20)
                            .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                            .legendData("Storage capacity: 0%", "Warning threshold at 60%", "Danger threshold at 20%")
                            .legendOrientation(vertical));

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (((previous - 10) % 100) + 100) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "Warning threshold at 60%", "Danger threshold at 20%");
            }, 1000);

            return div().style("height: 230px; width: 500px;")
                    .add(dt)
                    .element();
            // @code-end:dt-inv-ral
        }));

        addSnippet("donut-threshold", new Snippet("dt-ral", "Static thresholds with custom legend",
                code("dt-ral"), () -> {
            // @code-start:dt-ral
            DonutUtilization du = donutUtilization();
            DonutThreshold dt = donutThreshold()
                    .ariaTitle("Donut utilization chart with static threshold example")
                    .ariaDesc("Storage capacity")
                    .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                    .labels(data -> data.x != null ? data.x : null)
                    .padding(padding(20, 20, 125, 20))
                    .height(350)
                    .width(230)
                    .addUtilization(du
                            .title("0%")
                            .subTitle("of 100 GBps")
                            .data(data("Storage capacity", 0))
                            .thresholds(60, 90)
                            .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                            .legendData("Storage capacity: 0%", "Warning threshold at 60%", "Danger threshold at 90%")
                            .legendOrientation(vertical)
                            .legendPosition(bottom)
                            .themeColor(green));

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "Warning threshold at 60%", "Danger threshold at 90%");
            }, 1000);

            return div().style("height: 350px; width: 230px;")
                    .add(dt)
                    .element();
            // @code-end:dt-ral
        }));

        addSnippet("donut-threshold", new Snippet("dt-bal", "Static thresholds with bottom aligned legend",
                code("dt-bal"), () ->
                // @code-start:dt-bal
                div().style("height: 275px; width: 675px;")
                        .add(donutThreshold()
                                .ariaTitle("Donut utilization chart with static threshold example")
                                .ariaDesc("Storage capacity")
                                .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                                .labels(data -> data.x != null ? data.x : null)
                                .padding(padding(20, 20, 65, 20))
                                .height(275)
                                .width(675)
                                .addUtilization(donutUtilization()
                                        .title("45%")
                                        .subTitle("of 100 GBps")
                                        .data(data("Storage capacity", 45))
                                        .thresholds(60, 90)
                                        .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                        .legendData("Storage capacity: 0%", "Warning threshold at 60%",
                                                "Danger threshold at 90%")
                                        .legendPosition(bottom)))
                        .element()
                // @code-end:dt-bal
        ));

        addSnippet("donut-threshold", new Snippet("dt-small-static", "Small with static thresholds",
                code("dt-small-static"), () ->
                // @code-start:dt-small-static
                div().style("height: 185px; width: 185px;")
                        .add(donutThreshold()
                                .ariaTitle("Donut utilization chart with static threshold example")
                                .ariaDesc("Storage capacity")
                                .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                                .labels(data -> data.x != null ? data.x : null)
                                .height(185)
                                .width(185)
                                .addUtilization(donutUtilization()
                                        .title("45%")
                                        .subTitle("of 100 GBps")
                                        .data(data("Storage capacity", 45))
                                        .thresholds(60, 90)
                                        .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)))
                        .element()
                // @code-end:dt-small-static
        ));

        addSnippet("donut-threshold", new Snippet("dt-small-ral", "Small with static thresholds and right aligned legend",
                code("dt-small-ral"), () -> {
            // @code-start:dt-small-ral
            DonutUtilization du = donutUtilization();
            DonutThreshold dt = donutThreshold()
                    .ariaTitle("Donut utilization chart with static threshold example")
                    .ariaDesc("Storage capacity")
                    .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                    .labels(data -> data.x != null ? data.x : null)
                    .padding(padding(20, 260, 20, 20))
                    .height(185)
                    .width(425)
                    .addUtilization(du
                            .title("0%")
                            .subTitle("of 100 GBps")
                            .data(data("Storage capacity", 0))
                            .thresholds(60, 90)
                            .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                            .legendData("Storage capacity: 0%", "Warning threshold at 60%", "Danger threshold at 90%")
                            .legendOrientation(vertical));

            setInterval(__ -> {
                double previous = du.data().y;
                double current = (previous + 10) % 100;
                du.data(data("Storage capacity", current));
                du.title(current + "%");
                du.legendData("Storage capacity: " + current + "%", "Warning threshold at 60%", "Danger threshold at 90%");
            }, 1000);

            return div().style("height: 185px; width: 425px;")
                    .add(dt)
                    .element();
            // @code-end:dt-small-ral
        }));

        addSnippet("donut-threshold", new Snippet("dt-small-subtitle", "Small with subtitle",
                code("dt-small-subtitle"), () ->
                // @code-start:dt-small-subtitle
                div().style("height: 200px; width: 425px;")
                        .add(donutThreshold()
                                .ariaTitle("Donut utilization chart with static threshold example")
                                .ariaDesc("Storage capacity")
                                .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                                .labels(data -> data.x != null ? data.x : null)
                                .padding(padding(20, 260, 20, 20))
                                .height(200)
                                .width(425)
                                .addUtilization(donutUtilization()
                                        .title("45%")
                                        .subTitle("of 100 GBps")
                                        .subTitlePosition(SubTitlePosition.bottom)
                                        .data(data("Storage capacity", 45))
                                        .thresholds(60, 90)
                                        .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                        .legendData("Storage capacity: 45%", "Warning threshold at 60%",
                                                "Danger threshold at 90%")
                                        .legendOrientation(vertical)))
                        .element()
                // @code-end:dt-small-subtitle
        ));

        addSnippet("donut-threshold", new Snippet("dt-small-subtitle-right", "Small with thresholds and right aligned subtitle",
                code("dt-small-subtitle-right"), () ->
                // @code-start:dt-small-subtitle-right
                div().style("height: 225px; width: 675px;")
                        .add(donutThreshold()
                                .ariaTitle("Donut utilization chart with static threshold example")
                                .ariaDesc("Storage capacity")
                                .data(data("Warning at 60%", 60), data("Danger at 90%", 90))
                                .labels(data -> data.x != null ? data.x : null)
                                .padding(padding(20, 20, 60, 20))
                                .height(225)
                                .width(675)
                                .addUtilization(donutUtilization()
                                        .title("45%")
                                        .subTitle("of 100 GBps")
                                        .subTitlePosition(SubTitlePosition.right)
                                        .data(data("Storage capacity", 45))
                                        .thresholds(60, 90)
                                        .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null)
                                        .legendData("Storage capacity: 45%", "Warning threshold at 60%",
                                                "Danger threshold at 90%")
                                        .legendPosition(bottom)))
                        .element()
                // @code-end:dt-small-subtitle-right
        ));

        startApiDocs(DonutUtilization.class);
        addApiDoc(DonutUtilization.class, chart);
        addApiDoc(DonutThreshold.class, chart);
    }
}
