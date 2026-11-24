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
import { StreamLanguage, LanguageSupport } from "@codemirror/language";
import { Tag, tagHighlighter } from "@lezer/highlight";

export const logfileTimestamp = Tag.define();
export const logfileCategory = Tag.define();
export const logfileLevelError = Tag.define();
export const logfileLevelWarn = Tag.define();
export const logfileLevelInfo = Tag.define();
export const logfileLevelDebug = Tag.define();
export const logfileException = Tag.define();

const tokenTable = {
    timestamp: logfileTimestamp,
    category: logfileCategory,
    "level-error": logfileLevelError,
    "level-warn": logfileLevelWarn,
    "level-info": logfileLevelInfo,
    "level-debug": logfileLevelDebug,
    exception: logfileException,
};

const logfileLanguage = StreamLanguage.define({
    token(stream) {
        if (stream.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}/)) {
            return "timestamp";
        }
        if (stream.match(/\[[a-z.]+\]/)) {
            return "category";
        }
        if (stream.match(/ERROR/)) {
            return "level-error";
        }
        if (stream.match(/WARN/)) {
            return "level-warn";
        }
        if (stream.match(/INFO/)) {
            return "level-info";
        }
        if (stream.match(/DEBUG/)) {
            return "level-debug";
        }
        if (stream.match(/\w*Exception/)) {
            return "exception";
        }
        if (stream.match(/\w*Error/)) {
            return "exception";
        }
        stream.next();
        return null;
    },
    tokenTable,
});

export const logfileHighlighter = tagHighlighter([
    { tag: logfileTimestamp, class: "cm-logfile-timestamp" },
    { tag: logfileCategory, class: "cm-logfile-category" },
    { tag: logfileLevelError, class: "cm-logfile-level-error" },
    { tag: logfileLevelWarn, class: "cm-logfile-level-warn" },
    { tag: logfileLevelInfo, class: "cm-logfile-level-info" },
    { tag: logfileLevelDebug, class: "cm-logfile-level-debug" },
    { tag: logfileException, class: "cm-logfile-exception" },
]);

export function logfile() {
    return new LanguageSupport(logfileLanguage);
}
