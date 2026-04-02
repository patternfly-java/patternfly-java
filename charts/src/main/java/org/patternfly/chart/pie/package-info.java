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
/**
 * Provides the PatternFly pie chart component for displaying proportional data as a circle.
 * <p>
 * Pie charts display data as segments of a circle. They support legends, theme colors, custom color scales, and
 * configurable padding.
 *
 * <h2>Usage</h2>
 *
 * Use the {@link org.patternfly.chart.pie.Pie#pie()} factory method to create a pie chart:
 *
 * {@snippet :
 * import static org.patternfly.chart.Data.data;
 * import static org.patternfly.chart.LegendOrientation.vertical;
 * import static org.patternfly.chart.LegendPosition.right;
 * import static org.patternfly.chart.Padding.padding;
 * import static org.patternfly.chart.pie.Pie.pie;
 *
 * Pie chart = pie()
 *         .title("100")
 *         .subTitle("Pets")
 *         .ariaTitle("Pie chart example")
 *         .ariaDesc("Average number of pets")
 *         .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
 *         .labels(data -> data.x + ": " + data.y + "%")
 *         .legendData("Cats: 35", "Dogs: 55", "Birds: 10")
 *         .legendPosition(right)
 *         .legendOrientation(vertical)
 *         .padding(padding(20, 140, 20, 20))
 *         .width(350)
 *         .height(230);
 * }
 *
 * @see <a href="https://www.patternfly.org/charts/pie-chart">PatternFly Pie Chart</a>
 * @see org.patternfly.chart.pie.Pie
 */
package org.patternfly.chart.pie;