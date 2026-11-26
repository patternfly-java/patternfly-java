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

// ------------------------------------------------------ syntax highlighting

/**
 * Syntax colors ported from the PatternFly React code editor (Monaco themes `pf-v6-theme-light` and
 * `pf-v6-theme-dark`): palette shade 50 in light mode, shade 30 in dark mode. Every color can be
 * overridden with a CSS custom property `--pfj-code-editor--<name>--color`, e.g.
 * `--pfj-code-editor--keyword--color: hotpink;`.
 *
 * @see https://github.com/patternfly/patternfly-react/blob/main/packages/react-code-editor/src/components/CodeEditor/CodeEditorTheme.ts
 */
const palette = (color) => `light-dark(var(--pf-t--color--${color}--50), var(--pf-t--color--${color}--30))`;

const syntaxColors = {
    keyword: palette("purple"),
    string: palette("green"),
    comment: palette("gray"),
    number: palette("orange"),
    variable: palette("blue"),
    builtin: palette("teal"),
    type: palette("yellow"),
    tag: palette("red"),
    attribute: palette("red"),
    "attribute-value": palette("blue"),
    property: palette("red"),
    key: palette("orange"),
    regexp: palette("red"),
    meta: palette("purple"),
    delimiter: palette("gray"),
    heading: palette("purple"),
    inserted: palette("green"),
    deleted: palette("red"),
    changed: palette("orange"),
    invalid: palette("red"),
};

const color = (name) => `var(--pfj-code-editor--${name}--color, ${syntaxColors[name]})`;

export const pfHighlightStyle = syntaxHighlighting(
    HighlightStyle.define([
        // keywords (incl. null, this, modifiers, ...), booleans and primitive types
        { tag: [tags.keyword, tags.bool, tags.standard(tags.typeName)], color: color("keyword") },
        { tag: [tags.string, tags.special(tags.brace)], color: color("string") },
        { tag: tags.comment, color: color("comment"), fontStyle: "italic" },
        { tag: [tags.number, tags.literal, tags.constant(tags.variableName)], color: color("number") },
        { tag: tags.regexp, color: color("regexp") },
        { tag: tags.variableName, color: color("variable") },
        { tag: [tags.standard(tags.variableName), tags.labelName], color: color("builtin") },
        { tag: [tags.typeName, tags.className], color: color("type") },
        // markup
        { tag: tags.tagName, color: color("tag") },
        { tag: tags.attributeName, color: color("attribute") },
        { tag: tags.attributeValue, color: color("attribute-value") },
        { tag: tags.angleBracket, color: color("delimiter") },
        // JSON keys, CSS properties, object members / YAML keys, object literal keys
        { tag: tags.propertyName, color: color("property") },
        { tag: tags.definition(tags.propertyName), color: color("key") },
        // annotations, decorators / XML declarations, doctype
        { tag: tags.meta, color: color("meta") },
        { tag: [tags.processingInstruction, tags.documentMeta], color: color("delimiter") },
        // markdown
        { tag: tags.heading, color: color("heading"), fontWeight: "bold" },
        { tag: tags.emphasis, fontStyle: "italic" },
        { tag: tags.strong, fontWeight: "bold" },
        { tag: tags.strikethrough, textDecoration: "line-through" },
        { tag: [tags.link, tags.url], textDecoration: "underline" },
        // diffs and errors
        { tag: tags.inserted, color: color("inserted") },
        { tag: tags.deleted, color: color("deleted") },
        { tag: tags.changed, color: color("changed") },
        { tag: tags.invalid, color: color("invalid") },
    ]),
);
