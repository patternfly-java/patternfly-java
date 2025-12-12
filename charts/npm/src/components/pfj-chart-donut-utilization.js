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
import {ChartDonutUtilization} from '@patternfly/react-charts/victory';

export class ChartDonutUtilizationWebComponent extends ReactWrapperElement {

    constructor() {
        super();
        this._thresholds = undefined;
    }

    getReactComponent() {
        const extraProps = {};
        if (this._thresholds && typeof this._thresholds !== 'string') {
            extraProps.thresholds = this._thresholds;
        } else if (this.getAttribute('thresholds')) {
            extraProps.thresholds = parseAttrValue('thresholds', this.getAttribute('thresholds'));
        }
        return [ChartDonutUtilization, extraProps];
    }

    get thresholds() {
        return this._thresholds;
    }

    set thresholds(value) {
        this._thresholds = value;
        this._notifyChange();
    }
}

customElements.define('pfj-chart-donut-utilization', ChartDonutUtilizationWebComponent);
