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
 * Provides PatternFly chart implementations for building data visualizations in Java.
 * <p>
 * This package contains the core chart infrastructure of PatternFly Java, wrapping
 * <a href="https://www.patternfly.org/charts/about">PatternFly chart</a> web components. Charts are built using the same
 * fluent builder API as other PatternFly Java components and work with both GWT and J2CL.
 *
 * <h2>Core Classes</h2>
 *
 * This package provides the shared foundation for all chart types:
 * <ul>
 *     <li>{@link org.patternfly.chart.Chart} - Common chart interface</li>
 *     <li>{@link org.patternfly.chart.BaseChart} - Base class for all chart implementations</li>
 *     <li>{@link org.patternfly.chart.Data} - Data point representation with {@code x} and {@code y} values</li>
 *     <li>{@link org.patternfly.chart.ChartThemeColor} - Theme color presets for charts</li>
 *     <li>{@link org.patternfly.chart.LegendPosition} and {@link org.patternfly.chart.LegendOrientation} - Legend placement</li>
 *     <li>{@link org.patternfly.chart.Padding} - Chart padding configuration</li>
 *     <li>{@link org.patternfly.chart.Threshold} - Threshold value definitions</li>
 * </ul>
 *
 * <h2>Available Chart Types</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.chart.bullet.Bullet} - Bullet charts for comparing a measure against ranges and markers</li>
 *     <li>{@link org.patternfly.chart.donut.Donut} - Donut charts for displaying proportional data</li>
 *     <li>{@link org.patternfly.chart.pie.Pie} - Pie charts for displaying proportional data as a circle</li>
 *     <li>{@link org.patternfly.chart.utilization.DonutUtilization} - Donut utilization charts for capacity and usage</li>
 *     <li>{@link org.patternfly.chart.utilization.DonutThreshold} - Donut threshold charts with warning and danger levels</li>
 * </ul>
 *
 * <h2>Quick Start</h2>
 *
 * Charts are created using static factory methods and configured with a fluent builder API:
 *
 * {@snippet :
 * import static org.patternfly.chart.Data.data;
 * import static org.patternfly.chart.donut.Donut.donut;
 *
 * Donut chart = donut()
 *         .title("100")
 *         .subTitle("Pets")
 *         .ariaTitle("Donut chart example")
 *         .ariaDesc("Average number of pets")
 *         .data(data("Cats", 35), data("Dogs", 55), data("Birds", 10))
 *         .labels(data -> data.x + ": " + data.y + "%");
 * }
 *
 * @see <a href="https://www.patternfly.org/charts/about">PatternFly Charts</a>
 * @see <a href="https://patternfly-java.github.io/">PatternFly Java Showcase</a>
 * @see org.patternfly.chart.BaseChart
 * @see org.patternfly.chart.Data
 */
package org.patternfly.chart;