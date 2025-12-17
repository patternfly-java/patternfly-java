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

// Base class for the J2CL JsInterop base class org.patternfly.chart.ChartElement
class ChartElement extends HTMLElement {
}
window.ChartElement = ChartElement;

import './components/pfj-chart-bullet.js';
import './components/pfj-chart-donut.js';
import './components/pfj-chart-donut-utilization.js';
import './components/pfj-chart-donut-threshold.js';

export {ChartBulletWebComponent} from './components/pfj-chart-bullet.js';
export {ChartDonutWebComponent} from './components/pfj-chart-donut.js';
export {ChartDonutUtilizationWebComponent} from './components/pfj-chart-donut-utilization.js';
export {ChartDonutThresholdWebComponent} from './components/pfj-chart-donut-threshold.js';
