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

/**
 * Supported languages for syntax highlighting in the code editor.
 * <p>
 * Each constant maps to a CodeMirror 6 language package bundled in the
 * {@code @patternfly-java/codeeditor} NPM package.
 */
public enum Language {

    ANGULAR("angular"),
    CPP("cpp"),
    CSS("css"),
    GO("go"),
    HTML("html"),
    JAVA("java"),
    JAVASCRIPT("javascript"),
    JINJA("jinja"),
    JSON("json"),
    LESS("less"),
    LIQUID("liquid"),
    LOGFILE("logfile"),
    MARKDOWN("markdown"),
    PHP("php"),
    PYTHON("python"),
    RUST("rust"),
    SASS("sass"),
    SQL("sql"),
    TYPESCRIPT("typescript"),
    VUE("vue"),
    WAST("wast"),
    XML("xml"),
    YAML("yaml");

    private final String value;

    Language(String value) {
        this.value = value;
    }

    /** Returns the string key used by the web component's language map. */
    public String value() {
        return value;
    }
}
