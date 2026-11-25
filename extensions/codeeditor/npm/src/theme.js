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

const themeRules = {
    "&": {
        fontFamily: "var(--pf-t--global--font--family--mono)",
    },
    ".cm-gutters": {
        border: "none",
    },
    // search panel
    ".cm-panels": {
        fontFamily: "var(--pf-t--global--font--family--body)",
        fontSize: "var(--pf-t--global--font--size--body--default)",
    },
    ".cm-search": {
        padding: "var(--pf-t--global--spacer--sm) var(--pf-t--global--spacer--md)",
    },
    ".cm-textfield": {
        fontSize: "var(--pf-t--global--font--size--body--default)",
        borderRadius: "var(--pf-t--global--border--radius--small)",
        padding: "var(--pf-t--global--spacer--xs) var(--pf-t--global--spacer--sm)",
    },
    ".cm-button": {
        fontSize: "var(--pf-t--global--font--size--body--default)",
        borderRadius: "var(--pf-t--global--border--radius--small)",
        padding: "var(--pf-t--global--spacer--xs) var(--pf-t--global--spacer--sm)",
        textTransform: "capitalize",
    },
    // logfile-specific styles
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
};

export function createPfTheme(dark) {
    return EditorView.theme(themeRules, { dark });
}

export const pfHighlightStyle = syntaxHighlighting(
    HighlightStyle.define([
        {
            tag: tags.keyword,
            color: "light-dark(var(--pf-t--color--purple--50), var(--pf-t--color--purple--30))",
        },
        {
            tag: [tags.string, tags.special(tags.brace)],
            color: "light-dark(var(--pf-t--color--green--50), var(--pf-t--color--green--30))",
        },
        {
            tag: tags.comment,
            color: "var(--pf-t--global--text--color--200)",
        },
        {
            tag: [tags.number, tags.literal],
            color: "light-dark(var(--pf-t--color--orange--50), var(--pf-t--color--orange--30))",
        },
        {
            tag: tags.variableName,
            color: "light-dark(var(--pf-t--color--blue--50), var(--pf-t--color--blue--30))",
        },
        {
            tag: [tags.typeName, tags.className],
            color: "light-dark(var(--pf-t--color--yellow--50), var(--pf-t--color--yellow--30))",
        },
        {
            tag: [tags.tagName, tags.attributeName],
            color: "light-dark(var(--pf-t--color--red--50), var(--pf-t--color--red--30))",
        },
        {
            tag: tags.meta,
            color: "light-dark(var(--pf-t--color--purple--50), var(--pf-t--color--purple--30))",
        },
    ]),
);
