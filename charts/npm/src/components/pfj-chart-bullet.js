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

    constructor() {
        super();
        this._comparativeErrorMeasureData = undefined;
        this._comparativeWarningMeasureData = undefined;
        this._primaryDotMeasureData = undefined;
        this._primarySegmentedMeasureData = undefined;
        this._qualitativeRangeData = undefined;
    }

    getReactComponent() {
        const extraProps = {};
        if (this._comparativeErrorMeasureData && typeof this._comparativeErrorMeasureData !== 'string') {
            extraProps.comparativeErrorMeasureData = this._comparativeErrorMeasureData;
        } else if (this.getAttribute('comparative-error-measure-data')) {
            extraProps.thresholds = parseAttrValue('comparative-error-measure-data', this.getAttribute('comparative-error-measure-data'));
        }
        if (this._comparativeWarningMeasureData && typeof this._comparativeWarningMeasureData !== 'string') {
            extraProps.comparativeWarningMeasureData = this._comparativeWarningMeasureData;
        } else if (this.getAttribute('comparative-warning-measure-data')) {
            extraProps.thresholds = parseAttrValue('comparative-warning-measure-data', this.getAttribute('comparative-warning-measure-data'));
        }
        if (this._primaryDotMeasureData && typeof this._primaryDotMeasureData !== 'string') {
            extraProps.primaryDotMeasureData = this._primaryDotMeasureData;
        } else if (this.getAttribute('primary-dot-measure-data')) {
            extraProps.thresholds = parseAttrValue('primary-dot-measure-data', this.getAttribute('primary-dot-measure-data'));
        }
        if (this._primarySegmentedMeasureData && typeof this._primarySegmentedMeasureData !== 'string') {
            extraProps.primarySegmentedMeasureData = this._primarySegmentedMeasureData;
        } else if (this.getAttribute('primary-segmented-measure-data')) {
            extraProps.thresholds = parseAttrValue('primary-segmented-measure-data', this.getAttribute('primary-segmented-measure-data'));
        }
        if (this._qualitativeRangeData && typeof this._qualitativeRangeData !== 'string') {
            extraProps.qualitativeRangeData = this._qualitativeRangeData;
        } else if (this.getAttribute('qualitative-range-data')) {
            extraProps.thresholds = parseAttrValue('qualitative-range-data', this.getAttribute('qualitative-range-data'));
        }

        return [ChartBullet, extraProps];
    }

    get comparativeErrorMeasureData() {
        return this._comparativeErrorMeasureData;
    }

    set comparativeErrorMeasureData(value) {
        this._comparativeErrorMeasureData = value;
        this._notifyChange();
    }

    get comparativeWarningMeasureData() {
        return this._comparativeWarningMeasureData;
    }

    set comparativeWarningMeasureData(value) {
        this._comparativeWarningMeasureData = value;
        this._notifyChange();
    }

    get primaryDotMeasureData() {
        return this._primaryDotMeasureData;
    }

    set primaryDotMeasureData(value) {
        this._primaryDotMeasureData = value;
        this._notifyChange();
    }

    get primarySegmentedMeasureData() {
        return this._primarySegmentedMeasureData;
    }

    set primarySegmentedMeasureData(value) {
        this._primarySegmentedMeasureData = value;
        this._notifyChange();
    }

    get qualitativeRangeData() {
        return this._qualitativeRangeData;
    }

    set qualitativeRangeData(value) {
        this._qualitativeRangeData = value;
        this._notifyChange();
    }
}

customElements.define('pfj-chart-bullet', ChartBulletWebComponent);
