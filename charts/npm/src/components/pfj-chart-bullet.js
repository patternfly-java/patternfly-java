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
import {ChartBullet} from '@patternfly/react-charts/victory';

export class ChartBulletWebComponent extends ReactWrapperElement {
    getReactComponent() {
        const extraProps = {};
        // defaults matching examples
        if (!this.width) extraProps.width = 600;
        if (!this.height) extraProps.height = 150;

        // allow setting various data props via property assignment or data-* attributes in JSON
        const keys = [
            'data',
            'primaryDotMeasureData',
            'primarySegmentedMeasureData',
            'comparativeErrorMeasureData',
            'comparativeWarningMeasureData',
            'qualitativeRangeData',
            'legendData'
        ];
        for (const key of keys) {
            const attr = this.getAttribute(key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`));
            if (this[key] && typeof this[key] !== 'string') {
                extraProps[key] = this[key];
            } else if (attr) {
                extraProps[key] = parseAttrValue(key, attr);
            }
        }

        return [ChartBullet, extraProps];
    }
}

customElements.define('pfj-chart-bullet', ChartBulletWebComponent);
