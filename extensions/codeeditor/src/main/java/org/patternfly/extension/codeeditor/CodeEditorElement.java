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
package org.patternfly.extension.codeeditor;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import elemental2.dom.HTMLElement;

/**
 * Native JS type for the {@code <pfj-code-editor>} custom element backed by CodeMirror 6.
 *
 * @see <a href="https://www.npmjs.com/package/@patternfly-java/codeeditor">@patternfly-java/codeeditor</a>
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CodeEditorElement extends HTMLElement {

    /** Editor content. Defaults to {@code ""}. */
    public String code;

    /** Language mode key (e.g. {@code "java"}, {@code "json"}). Defaults to {@code null} (no highlighting). */
    public String language;

    /** Whether the editor is read-only. Defaults to {@code false}. */
    public boolean readOnly;

    /** Whether line numbers are shown. Defaults to {@code true} (JS-side default). */
    public boolean lineNumbers;

    /** Whether long lines wrap. Defaults to {@code false}. */
    public boolean lineWrapping;

    /** Placeholder text shown when the editor is empty. Defaults to {@code null}. */
    public String placeholder;

    /** Tab size in spaces. Defaults to {@code 4} (JS-side default). */
    public int tabSize;
}
