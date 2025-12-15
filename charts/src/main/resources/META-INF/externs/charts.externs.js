// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst

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

/**
 * @fileoverview Declaration for the custom chart element.
 * ChartElement and the referenced types are the connections / glue code
 * between J2CL and the React wrapper. We need to preserve their names!
 *
 * @externs
 */

/** @constructor */
function ChartElement() {
}

/** @type {!Array<string>} */
ChartElement.prototype.categories;

/** @type {number} */
ChartElement.prototype.height;

/** @type {!LabelsFn} */
ChartElement.prototype.labels;

/** @type {boolean} */
ChartElement.prototype.legendAllowWrap;

/** @type {!Array<!LegendData>} */
ChartElement.prototype.legendData;

/** @type {string} */
ChartElement.prototype.legendOrientation;

/** @type {string} */
ChartElement.prototype.legendPosition;

/** @type {!Padding} */
ChartElement.prototype.padding;

/** @type {string} */
ChartElement.prototype.subTitle;

/** @type {string} */
ChartElement.prototype.subTitlePosition;

/** @type {string} */
ChartElement.prototype.themeColor;

/** @type {string} */
ChartElement.prototype.title;

/** @type {number} */
ChartElement.prototype.width;

/**
 * @typedef {function(*): string}
 */
var LabelsFn;

/** @constructor */
function LegendData() {
}

/** @type {string} */
LegendData.prototype.name;

/** @type {!LegendDataSymbol} */
LegendData.prototype.symbol;

/** @constructor */
function LegendDataSymbol() {
}

/** @type {string} */
LegendDataSymbol.prototype.fill;

/** @type {string} */
LegendDataSymbol.prototype.type;

/** @constructor */
function Padding() {
}

/** @type {number} */
Padding.prototype.top;

/** @type {number} */
Padding.prototype.right;

/** @type {number} */
Padding.prototype.bottom;

/** @type {number} */
Padding.prototype.left;

/** @constructor */
function Threshold() {
}

/** @type {number} */
Threshold.prototype.value;

/** @type {string} */
Threshold.prototype.color;
