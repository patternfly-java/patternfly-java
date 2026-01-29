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
import { ChartPie } from '@patternfly/react-charts/victory';

export class ChartPieWebComponent extends ReactWrapperElement {

    constructor() {
        super();
        this._colorScale = undefined;
    }

    getReactComponent() {
        const extraProps = {};
        if (this._colorScale && typeof this._colorScale !== 'string') {
            extraProps.colorScale = this._colorScale;
        } else if (this.getAttribute('color-scale')) {
            extraProps.colorScale = parseAttrValue('color-scale', this.getAttribute('color-scale'));
        }
        return [ChartPie, extraProps];
    }

    get colorScale() {
        return this._colorScale;
    }

    set colorScale(value) {
        this._colorScale = value;
        this._notifyChange();
    }
}

customElements.define('pfj-chart-pie', ChartPieWebComponent);