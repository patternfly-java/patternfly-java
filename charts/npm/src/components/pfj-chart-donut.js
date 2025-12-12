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
import {ChartDonut} from '@patternfly/react-charts/victory';

export class ChartDonutWebComponent extends ReactWrapperElement {
    constructor() {
        super();
        this._labels = undefined;
        this._legendData = undefined;
        this._padding = undefined;
    }

    get labels() {
        return this._labels;
    }

    set labels(value) {
        this._labels = value;
        this._renderReact();
    }

    get legendData() {
        return this._legendData;
    }

    set legendData(value) {
        this._legendData = value;
        this._renderReact();
    }

    get padding() {
        return this._padding;
    }

    set padding(value) {
        this._padding = value;
        this._renderReact();
    }

    getReactComponent() {
        const extraProps = {
            labels: this._labels,
            legendData: this._legendData,
            padding: this._padding
        };
        if (this.data && typeof this.data !== 'string') {
            extraProps.data = this.data;
        } else if (this.getAttribute('data')) {
            extraProps.data = parseAttrValue('data', this.getAttribute('data'));
        }
        return [ChartDonut, extraProps];
    }
}

customElements.define('pfj-chart-donut', ChartDonutWebComponent);
