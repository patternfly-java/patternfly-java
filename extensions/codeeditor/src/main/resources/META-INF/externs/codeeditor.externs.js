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
 * @fileoverview Declaration for the custom code editor element.
 * CodeEditorElement is the connection / glue code between J2CL and the
 * CodeMirror 6 web component. We need to preserve its property names!
 *
 * @externs
 */

/** @constructor */
function CodeEditorElement() {
}

/** @type {string} */
CodeEditorElement.prototype.code;

/** @type {string} */
CodeEditorElement.prototype.language;

/** @type {boolean} */
CodeEditorElement.prototype.readOnly;

/** @type {boolean} */
CodeEditorElement.prototype.lineNumbers;

/** @type {boolean} */
CodeEditorElement.prototype.lineWrapping;

/** @type {string} */
CodeEditorElement.prototype.placeholder;

/** @type {number} */
CodeEditorElement.prototype.tabSize;

/** @type {string} */
CodeEditorElement.prototype.height;
