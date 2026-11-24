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
import { StreamLanguage } from "@codemirror/language";
import { LanguageSupport } from "@codemirror/language";
import { Tag, styleTags, tags as defaultTags } from "@lezer/highlight";

export const logfileTags = {
    timestamp: Tag.define(),
    category: Tag.define(),
    levelError: Tag.define(),
    levelWarn: Tag.define(),
    levelInfo: Tag.define(),
    levelDebug: Tag.define(),
    exception: Tag.define(),
};

const logfileLanguage = StreamLanguage.define({
    token(stream) {
        if (stream.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}/)) {
            return "logfile-timestamp";
        }
        if (stream.match(/\[[a-z.]+\]/)) {
            return "logfile-category";
        }
        if (stream.match(/ERROR/)) {
            return "logfile-level-error";
        }
        if (stream.match(/WARN/)) {
            return "logfile-level-warn";
        }
        if (stream.match(/INFO/)) {
            return "logfile-level-info";
        }
        if (stream.match(/DEBUG/)) {
            return "logfile-level-debug";
        }
        if (stream.match(/\w*Exception/)) {
            return "logfile-exception";
        }
        if (stream.match(/\w*Error/)) {
            return "logfile-exception";
        }
        stream.next();
        return null;
    },
});

export function logfile() {
    return new LanguageSupport(logfileLanguage);
}
