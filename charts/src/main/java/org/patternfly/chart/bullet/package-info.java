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
 * Provides the PatternFly bullet chart component for comparing a primary measure against qualitative ranges and markers.
 * <p>
 * Bullet charts are useful for displaying performance data, such as storage capacity or progress toward a goal, with
 * comparative measures and qualitative ranges.
 *
 * <h2>Usage</h2>
 *
 * Use the {@link org.patternfly.chart.bullet.Bullet#bullet()} factory method to create a bullet chart and
 * {@link org.patternfly.chart.bullet.BulletData#bulletData(String, double)} to create data points:
 *
 * {@snippet :
 * import static org.patternfly.chart.bullet.Bullet.bullet;
 * import static org.patternfly.chart.bullet.BulletData.bulletData;
 *
 * Bullet chart = bullet()
 *         .ariaTitle("Bullet chart example")
 *         .ariaDesc("Storage capacity")
 *         .comparativeWarningMeasureData(bulletData("Warning", 88))
 *         .primarySegmentedMeasureData(bulletData("Measure", 60))
 *         .qualitativeRangeData(bulletData("Range", 50), bulletData("Range", 75))
 *         .labels(data -> data.name + ": " + data.y)
 *         .maxDomain(100)
 *         .height(150)
 *         .width(600);
 * }
 *
 * @see <a href="https://www.patternfly.org/charts/bullet-chart">PatternFly Bullet Chart</a>
 * @see org.patternfly.chart.bullet.Bullet
 * @see org.patternfly.chart.bullet.BulletData
 */
package org.patternfly.chart.bullet;