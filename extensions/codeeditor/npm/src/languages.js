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
import { angular } from "@codemirror/lang-angular";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { go } from "@codemirror/lang-go";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { jinja } from "@codemirror/lang-jinja";
import { json } from "@codemirror/lang-json";
import { less } from "@codemirror/lang-less";
import { liquid } from "@codemirror/lang-liquid";
import { markdown } from "@codemirror/lang-markdown";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { sass } from "@codemirror/lang-sass";
import { sql } from "@codemirror/lang-sql";
import { vue } from "@codemirror/lang-vue";
import { wast } from "@codemirror/lang-wast";
import { xml } from "@codemirror/lang-xml";
import { yaml } from "@codemirror/lang-yaml";
import { logfile } from "./logfile.js";

export const languages = {
    angular: () => angular(),
    cpp: () => cpp(),
    css: () => css(),
    go: () => go(),
    html: () => html(),
    java: () => java(),
    javascript: () => javascript(),
    jinja: () => jinja(),
    json: () => json(),
    less: () => less(),
    liquid: () => liquid(),
    logfile: () => logfile(),
    markdown: () => markdown(),
    php: () => php(),
    python: () => python(),
    rust: () => rust(),
    sass: () => sass(),
    sql: () => sql(),
    typescript: () => javascript({ typescript: true }),
    vue: () => vue(),
    wast: () => wast(),
    xml: () => xml(),
    yaml: () => yaml(),
};
