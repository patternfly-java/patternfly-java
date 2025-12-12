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
import {parseAttrValue, ReactWrapperElement} from '../react-wrapper.js';
import {ChartDonutThreshold} from '@patternfly/react-charts/victory';

export class ChartDonutThresholdWebComponent extends ReactWrapperElement {
    getReactComponent() {
        const extraProps = {};
        if (!this.width) extraProps.width = 230;
        if (!this.height) extraProps.height = 230;

        if (this.data && typeof this.data !== 'string') {
            extraProps.data = this.data;
        } else if (this.getAttribute('data')) {
            extraProps.data = parseAttrValue('data', this.getAttribute('data'));
        }
        return [ChartDonutThreshold, extraProps];
    }
}

customElements.define('pfj-chart-donut-threshold', ChartDonutThresholdWebComponent);
