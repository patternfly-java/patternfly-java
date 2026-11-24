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
    // logfile-specific styles
    ".cm-logfile-timestamp": {
        color: "#447384",
    },
    ".cm-logfile-category": {
        color: "#71362D",
    },
    ".cm-logfile-level-error": {
        color: "#CC0000",
    },
    ".cm-logfile-level-warn": {
        color: "#FF9911",
    },
    ".cm-logfile-level-info": {
        color: "inherit",
    },
    ".cm-logfile-level-debug": {
        color: "#666666",
    },
    ".cm-logfile-exception": {
        color: "#FFBC11",
        backgroundColor: "#c82e2e",
    },
});

export const pfHighlightStyle = syntaxHighlighting(
    HighlightStyle.define([
        {
            tag: tags.keyword,
            color: "var(--pf-t--global--color--nonstatus--purple--default)",
        },
        {
            tag: [tags.string, tags.special(tags.brace)],
            color: "var(--pf-t--global--color--nonstatus--green--default)",
        },
        {
            tag: tags.comment,
            color: "var(--pf-t--global--text--color--200)",
        },
        {
            tag: [tags.number, tags.literal],
            color: "var(--pf-t--global--color--nonstatus--orange--default)",
        },
        {
            tag: tags.variableName,
            color: "var(--pf-t--global--color--nonstatus--blue--default)",
        },
        {
            tag: [tags.typeName, tags.className],
            color: "var(--pf-t--global--color--nonstatus--yellow--default)",
        },
        {
            tag: [tags.tagName, tags.attributeName],
            color: "var(--pf-t--global--color--nonstatus--red--default)",
        },
        {
            tag: tags.meta,
            color: "var(--pf-t--global--color--nonstatus--purple--default)",
        },
    ])
);
