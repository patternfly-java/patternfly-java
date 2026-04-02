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
 * Provides the PatternFly donut utilization and donut threshold chart components for displaying capacity and usage data.
 * <p>
 * Donut utilization charts show a single data value as a percentage of a whole, commonly used for resource usage such as
 * storage capacity, memory, or CPU. Donut threshold charts add warning and danger threshold levels that change the chart
 * color based on the current value.
 *
 * <h2>Donut Utilization</h2>
 *
 * Use the {@link org.patternfly.chart.utilization.DonutUtilization#donutUtilization()} factory method to create a
 * utilization chart:
 *
 * {@snippet :
 * import static org.patternfly.chart.Data.data;
 * import static org.patternfly.chart.utilization.DonutUtilization.donutUtilization;
 *
 * DonutUtilization chart = donutUtilization()
 *         .title("75%")
 *         .subTitle("of 100 GBps")
 *         .ariaTitle("Donut utilization chart example")
 *         .ariaDesc("Storage capacity")
 *         .data(data("Storage capacity", 75))
 *         .thresholds(60, 90)
 *         .labels(data -> data.x != null ? data.x + ": " + data.y + "%" : null);
 * }
 *
 * <h2>Donut Threshold</h2>
 *
 * Use the {@link org.patternfly.chart.utilization.DonutThreshold#donutThreshold()} factory method to create a threshold
 * chart that can be combined with a utilization chart:
 *
 * {@snippet :
 * import static org.patternfly.chart.utilization.DonutThreshold.donutThreshold;
 *
 * DonutThreshold threshold = donutThreshold()
 *         .ariaTitle("Donut threshold chart example")
 *         .ariaDesc("Storage capacity thresholds");
 * }
 *
 * @see <a href="https://www.patternfly.org/charts/donut-utilization-chart">PatternFly Donut Utilization Chart</a>
 * @see org.patternfly.chart.utilization.DonutUtilization
 * @see org.patternfly.chart.utilization.DonutThreshold
 */
package org.patternfly.chart.utilization;