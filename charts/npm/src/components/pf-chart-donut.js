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
import { ReactWrapperElement, parseAttrValue } from '../react-wrapper.js';
import { ChartDonut } from '@patternfly/react-charts/victory';

export class PfChartDonut extends ReactWrapperElement {
  constructor() {
    super();
    this._labels = undefined;
  }

  // Support function-valued 'labels' via direct property assignment on this element only
  get labels() {
    return this._labels;
  }
  set labels(fn) {
    this._labels = fn;
    this._renderReact();
  }

  // Provide defaults for common props via extraProps
  getReactComponent() {
    const extraProps = {};
    // allow setting data via property as object (not only attribute)
    if (this.data && typeof this.data !== 'string') {
      extraProps.data = this.data;
    } else if (this.getAttribute('data')) {
      // data can be object or array; parse
      const parsed = parseAttrValue('data', this.getAttribute('data'));
      extraProps.data = parsed;
    }
    // If a function-valued labels property was assigned, prefer it over attribute value
    if (typeof this._labels === 'function') {
      extraProps.labels = this._labels;
    }
    return [ChartDonut, extraProps];
  }
}

customElements.define('pf-chart-donut', PfChartDonut);
