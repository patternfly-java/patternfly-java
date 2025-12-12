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
        this._data = undefined;
        this._title = undefined;
        this._subTitle = undefined;
        this._thresholds = undefined;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
        this._notifyChange();
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
        this._notifyChange();
    }

    get subTitle() {
        return this._subTitle;
    }

    set subTitle(value) {
        this._subTitle = value;
        this._notifyChange();
    }

    get thresholds() {
        return this._thresholds;
    }

    set thresholds(value) {
        this._thresholds = value;
        this._notifyChange();
    }

    getReactComponent() {
        const extraProps = {};
        if (!this.width) extraProps.width = 230;
        if (!this.height) extraProps.height = 230;

        // Handle data property
        if (this._data && typeof this._data !== 'string') {
            extraProps.data = this._data;
        } else if (this.getAttribute('data')) {
            extraProps.data = parseAttrValue('data', this.getAttribute('data'));
        }

        // Handle title property
        if (this._title !== undefined) {
            extraProps.title = this._title;
        }

        // Handle subTitle property
        if (this._subTitle !== undefined) {
            extraProps.subTitle = this._subTitle;
        }

        // Handle thresholds property
        if (this._thresholds !== undefined) {
            extraProps.thresholds = this._thresholds;
        }

        return [ChartDonutUtilization, extraProps];
    }
}

customElements.define('pfj-chart-donut-utilization', ChartDonutUtilizationWebComponent);
