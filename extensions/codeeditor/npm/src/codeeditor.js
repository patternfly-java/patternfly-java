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
import { basicSetup } from "codemirror";
import { Compartment, EditorState } from "@codemirror/state";
import { EditorView, lineNumbers as lineNumbersExtension, placeholder as placeholderExtension } from "@codemirror/view";
import { languages } from "./languages.js";
import { pfTheme, pfHighlightStyle } from "./theme.js";

class CodeEditorElement extends HTMLElement {

    constructor() {
        super();
        this._code = "";
        this._language = null;
        this._readOnly = false;
        this._lineNumbers = true;
        this._lineWrapping = false;
        this._placeholder = null;
        this._tabSize = 4;
        this._view = null;
        this._dirty = false;
        this._languageCompartment = new Compartment();
        this._readOnlyCompartment = new Compartment();
        this._lineNumbersCompartment = new Compartment();
        this._lineWrappingCompartment = new Compartment();
        this._placeholderCompartment = new Compartment();
        this._tabSizeCompartment = new Compartment();
    }

    // ------------------------------------------------------ properties

    get code() {
        if (this._view) {
            return this._view.state.doc.toString();
        }
        return this._code;
    }

    set code(value) {
        const newCode = value ?? "";
        if (this._view) {
            const currentCode = this._view.state.doc.toString();
            if (currentCode !== newCode) {
                this._view.dispatch({
                    changes: { from: 0, to: this._view.state.doc.length, insert: newCode },
                });
            }
        }
        this._code = newCode;
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
        this._scheduleUpdate();
    }

    get readOnly() {
        return this._readOnly;
    }

    set readOnly(value) {
        this._readOnly = value;
        this._scheduleUpdate();
    }

    get lineNumbers() {
        return this._lineNumbers;
    }

    set lineNumbers(value) {
        this._lineNumbers = value;
        this._scheduleUpdate();
    }

    get lineWrapping() {
        return this._lineWrapping;
    }

    set lineWrapping(value) {
        this._lineWrapping = value;
        this._scheduleUpdate();
    }

    get placeholder() {
        return this._placeholder;
    }

    set placeholder(value) {
        this._placeholder = value;
        this._scheduleUpdate();
    }

    get tabSize() {
        return this._tabSize;
    }

    set tabSize(value) {
        this._tabSize = value;
        this._scheduleUpdate();
    }

    // ------------------------------------------------------ lifecycle

    connectedCallback() {
        const state = EditorState.create({
            doc: this._code,
            extensions: [
                basicSetup,
                pfTheme,
                pfHighlightStyle,
                this._languageCompartment.of(this._resolveLanguage()),
                this._readOnlyCompartment.of(EditorState.readOnly.of(this._readOnly)),
                this._lineNumbersCompartment.of(this._lineNumbers ? lineNumbersExtension() : []),
                this._lineWrappingCompartment.of(this._lineWrapping ? EditorView.lineWrapping : []),
                this._placeholderCompartment.of(this._placeholder ? placeholderExtension(this._placeholder) : []),
                this._tabSizeCompartment.of(EditorState.tabSize.of(this._tabSize)),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        this.dispatchEvent(
                            new CustomEvent("change", {
                                detail: { code: update.state.doc.toString() },
                            })
                        );
                    }
                }),
            ],
        });
        this._view = new EditorView({ state, parent: this });
    }

    disconnectedCallback() {
        if (this._view) {
            this._view.destroy();
            this._view = null;
        }
    }

    // ------------------------------------------------------ internal

    _scheduleUpdate() {
        if (!this._dirty && this._view) {
            this._dirty = true;
            requestAnimationFrame(() => this._applyUpdates());
        }
    }

    _applyUpdates() {
        if (!this._view) {
            this._dirty = false;
            return;
        }
        this._view.dispatch({
            effects: [
                this._languageCompartment.reconfigure(this._resolveLanguage()),
                this._readOnlyCompartment.reconfigure(EditorState.readOnly.of(this._readOnly)),
                this._lineNumbersCompartment.reconfigure(this._lineNumbers ? lineNumbersExtension() : []),
                this._lineWrappingCompartment.reconfigure(this._lineWrapping ? EditorView.lineWrapping : []),
                this._placeholderCompartment.reconfigure(this._placeholder ? placeholderExtension(this._placeholder) : []),
                this._tabSizeCompartment.reconfigure(EditorState.tabSize.of(this._tabSize)),
            ],
        });
        this._dirty = false;
    }

    _resolveLanguage() {
        if (this._language && languages[this._language]) {
            return languages[this._language]();
        }
        return [];
    }
}

window.CodeEditorElement = CodeEditorElement;
customElements.define("pfj-code-editor", CodeEditorElement);
export { CodeEditorElement };
