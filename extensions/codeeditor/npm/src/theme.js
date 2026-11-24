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
import { EditorView } from "codemirror";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export const pfTheme = EditorView.theme({
    "&": {
        backgroundColor: "var(--pf-t--global--background--color--100)",
        color: "var(--pf-t--global--text--color--100)",
        fontFamily: "var(--pf-t--global--font--family--mono)",
    },
    ".cm-content": {
        caretColor: "var(--pf-t--global--text--color--100)",
    },
    ".cm-cursor, .cm-dropCursor": {
        borderLeftColor: "var(--pf-t--global--text--color--100)",
    },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
        backgroundColor: "var(--pf-t--global--background--color--300)",
    },
    ".cm-activeLine": {
        backgroundColor: "var(--pf-t--global--background--color--200)",
    },
    ".cm-gutters": {
        backgroundColor: "var(--pf-t--global--background--color--100)",
        color: "var(--pf-t--global--text--color--200)",
        border: "none",
    },
    ".cm-activeLineGutter": {
        backgroundColor: "var(--pf-t--global--background--color--200)",
    },
    // logfile-specific styles using semantic PF text color tokens
    ".cm-logfile-timestamp": {
        color: "var(--pf-t--global--text--color--status--custom--default)",
    },
    ".cm-logfile-category": {
        color: "var(--pf-t--global--text--color--status--info--default)",
    },
    ".cm-logfile-level-error": {
        color: "var(--pf-t--global--text--color--status--danger--default)",
    },
    ".cm-logfile-level-warn": {
        color: "var(--pf-t--global--text--color--status--warning--default)",
    },
    ".cm-logfile-level-info": {
        color: "inherit",
    },
    ".cm-logfile-level-debug": {
        color: "var(--pf-t--global--text--color--200)",
    },
    ".cm-logfile-exception": {
        color: "var(--pf-t--global--text--color--status--on-danger--default, #fff)",
        backgroundColor: "var(--pf-t--global--color--status--danger--default)",
    },
});

export const pfHighlightStyle = syntaxHighlighting(
    HighlightStyle.define([
        {
            tag: tags.keyword,
            color: "var(--pf-t--color--purple--50)",
        },
        {
            tag: [tags.string, tags.special(tags.brace)],
            color: "var(--pf-t--color--green--50)",
        },
        {
            tag: tags.comment,
            color: "var(--pf-t--global--text--color--200)",
        },
        {
            tag: [tags.number, tags.literal],
            color: "var(--pf-t--color--orange--50)",
        },
        {
            tag: tags.variableName,
            color: "var(--pf-t--color--blue--50)",
        },
        {
            tag: [tags.typeName, tags.className],
            color: "var(--pf-t--color--yellow--50)",
        },
        {
            tag: [tags.tagName, tags.attributeName],
            color: "var(--pf-t--color--red--50)",
        },
        {
            tag: tags.meta,
            color: "var(--pf-t--color--purple--50)",
        },
    ])
);
