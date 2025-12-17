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
        this._comparativeErrorMeasureLegendData = undefined;
        this._comparativeWarningMeasureData = undefined;
        this._comparativeWarningMeasureLegendData = undefined;
        this._maxDomain = undefined;
        this._primaryDotMeasureData = undefined;
        this._primaryDotMeasureLegendData = undefined;
        this._primarySegmentedMeasureData = undefined;
        this._primarySegmentedMeasureLegendData = undefined;
        this._qualitativeRangeData = undefined;
        this._qualitativeRangeLegendData = undefined;
    }

    getReactComponent() {
        const extraProps = {};
        if (this._comparativeErrorMeasureData && typeof this._comparativeErrorMeasureData !== 'string') {
            extraProps.comparativeErrorMeasureData = this._comparativeErrorMeasureData;
        } else if (this.getAttribute('comparative-error-measure-data')) {
            extraProps.comparativeErrorMeasureData = parseAttrValue('comparative-error-measure-data', this.getAttribute('comparative-error-measure-data'));
        }
        if (this._comparativeErrorMeasureLegendData && typeof this._comparativeErrorMeasureLegendData !== 'string') {
            extraProps.comparativeErrorMeasureLegendData = this._comparativeErrorMeasureLegendData;
        } else if (this.getAttribute('comparative-error-measure-legend-data')) {
            extraProps.comparativeErrorMeasureLegendData = parseAttrValue('comparative-error-measure-legend-data', this.getAttribute('comparative-error-measure-legend-data'));
        }
        if (this._comparativeWarningMeasureData && typeof this._comparativeWarningMeasureData !== 'string') {
            extraProps.comparativeWarningMeasureData = this._comparativeWarningMeasureData;
        } else if (this.getAttribute('comparative-warning-measure-data')) {
            extraProps.comparativeWarningMeasureData = parseAttrValue('comparative-warning-measure-data', this.getAttribute('comparative-warning-measure-data'));
        }
        if (this._comparativeWarningMeasureLegendData && typeof this._comparativeWarningMeasureLegendData !== 'string') {
            extraProps.comparativeWarningMeasureLegendData = this._comparativeWarningMeasureLegendData;
        } else if (this.getAttribute('comparative-warning-measure-legend-data')) {
            extraProps.comparativeWarningMeasureLegendData = parseAttrValue('comparative-warning-measure-legend-data', this.getAttribute('comparative-warning-measure-legend-data'));
        }
        if (this._maxDomain !== undefined) {
            extraProps.maxDomain = Number(this._maxDomain);
        }
        if (this._primaryDotMeasureData && typeof this._primaryDotMeasureData !== 'string') {
            extraProps.primaryDotMeasureData = this._primaryDotMeasureData;
        } else if (this.getAttribute('primary-dot-measure-data')) {
            extraProps.primaryDotMeasureData = parseAttrValue('primary-dot-measure-data', this.getAttribute('primary-dot-measure-data'));
        }
        if (this._primaryDotMeasureLegendData && typeof this._primaryDotMeasureLegendData !== 'string') {
            extraProps.primaryDotMeasureLegendData = this._primaryDotMeasureLegendData;
        } else if (this.getAttribute('primary-dot-measure-legend-data')) {
            extraProps.primaryDotMeasureLegendData = parseAttrValue('primary-dot-measure-legend-data', this.getAttribute('primary-dot-measure-legend-data'));
        }
        if (this._primarySegmentedMeasureData && typeof this._primarySegmentedMeasureData !== 'string') {
            extraProps.primarySegmentedMeasureData = this._primarySegmentedMeasureData;
        } else if (this.getAttribute('primary-segmented-measure-data')) {
            extraProps.primarySegmentedMeasureData = parseAttrValue('primary-segmented-measure-data', this.getAttribute('primary-segmented-measure-data'));
        }
        if (this._primarySegmentedMeasureLegendData && typeof this._primarySegmentedMeasureLegendData !== 'string') {
            extraProps.primarySegmentedMeasureLegendData = this._primarySegmentedMeasureLegendData;
        } else if (this.getAttribute('primary-segmented-measure-legend-data')) {
            extraProps.primarySegmentedMeasureLegendData = parseAttrValue('primary-segmented-measure-legend-data', this.getAttribute('primary-segmented-measure-legend-data'));
        }
        if (this._qualitativeRangeData && typeof this._qualitativeRangeData !== 'string') {
            extraProps.qualitativeRangeData = this._qualitativeRangeData;
        } else if (this.getAttribute('qualitative-range-data')) {
            extraProps.qualitativeRangeData = parseAttrValue('qualitative-range-data', this.getAttribute('qualitative-range-data'));
        }
        if (this._qualitativeRangeLegendData && typeof this._qualitativeRangeLegendData !== 'string') {
            extraProps.qualitativeRangeLegendData = this._qualitativeRangeLegendData;
        } else if (this.getAttribute('qualitative-range-legend-data')) {
            extraProps.qualitativeRangeLegendData = parseAttrValue('qualitative-range-legend-data', this.getAttribute('qualitative-range-legend-data'));
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

    get comparativeErrorMeasureLegendData() {
        return this._comparativeErrorMeasureLegendData;
    }

    set comparativeErrorMeasureLegendData(value) {
        this._comparativeErrorMeasureLegendData = value;
        this._notifyChange();
    }

    get comparativeWarningMeasureData() {
        return this._comparativeWarningMeasureData;
    }

    set comparativeWarningMeasureData(value) {
        this._comparativeWarningMeasureData = value;
        this._notifyChange();
    }

    get comparativeWarningMeasureLegendData() {
        return this._comparativeWarningMeasureLegendData;
    }

    set comparativeWarningMeasureLegendData(value) {
        this._comparativeWarningMeasureLegendData = value;
        this._notifyChange();
    }

    get maxDomain() {
        return this._maxDomain;
    }

    set maxDomain(value) {
        this._maxDomain = value;
        this._notifyChange();
    }

    get primaryDotMeasureData() {
        return this._primaryDotMeasureData;
    }

    set primaryDotMeasureData(value) {
        this._primaryDotMeasureData = value;
        this._notifyChange();
    }

    get primaryDotMeasureLegendData() {
        return this._primaryDotMeasureLegendData;
    }

    set primaryDotMeasureLegendData(value) {
        this._primaryDotMeasureLegendData = value;
        this._notifyChange();
    }

    get primarySegmentedMeasureData() {
        return this._primarySegmentedMeasureData;
    }

    set primarySegmentedMeasureData(value) {
        this._primarySegmentedMeasureData = value;
        this._notifyChange();
    }

    get primarySegmentedMeasureLegendData() {
        return this._primarySegmentedMeasureLegendData;
    }

    set primarySegmentedMeasureLegendData(value) {
        this._primarySegmentedMeasureLegendData = value;
        this._notifyChange();
    }

    get qualitativeRangeData() {
        return this._qualitativeRangeData;
    }

    set qualitativeRangeData(value) {
        this._qualitativeRangeData = value;
        this._notifyChange();
    }

    get qualitativeRangeLegendData() {
        return this._qualitativeRangeLegendData;
    }

    set qualitativeRangeLegendData(value) {
        this._qualitativeRangeLegendData = value;
        this._notifyChange();
    }
}

customElements.define('pfj-chart-bullet', ChartBulletWebComponent);
