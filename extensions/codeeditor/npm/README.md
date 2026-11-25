# PatternFly Java Code Editor

This package wraps [CodeMirror 6](https://codemirror.net/) as a `<pfj-code-editor>` web component with [PatternFly](https://www.patternfly.org/) theming.

The package is a prerequisite if you want to use the code editor in [PatternFly Java](https://patternfly-java.github.io/), but can also be used independently.

## Features

- Syntax highlighting for 22+ languages (all official CodeMirror 6 languages + custom logfile mode)
- Automatic dark/light theme support via PatternFly design tokens
- Built-in search and replace (Ctrl/Cmd+F)
- Code folding, multi-cursor, bracket matching
- Configurable line numbers, line wrapping, tab size, placeholder, and height

## Installation

Install the package using npm:

```
npm install @patternfly-java/codeeditor
```

Import it in your JavaScript file:

```js
import "@patternfly-java/codeeditor/dist/codeeditor";
```

## Usage

```html
<pfj-code-editor id="editor"></pfj-code-editor>

<script type="module">
    import "@patternfly-java/codeeditor/dist/codeeditor";

    const editor = document.getElementById("editor");
    editor.language = "java";
    editor.code =
        'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}';
    editor.lineNumbers = true;
    editor.readOnly = false;
    editor.tabSize = 4;
    editor.height = "20lh";

    editor.addEventListener("change", (e) => {
        console.log("Code changed:", e.detail.code);
    });
</script>
```

## Properties

| Property       | Type      | Default | Description                                           |
| -------------- | --------- | ------- | ----------------------------------------------------- |
| `code`         | `string`  | `""`    | Editor content                                        |
| `language`     | `string`  | `null`  | Language mode (see below)                             |
| `readOnly`     | `boolean` | `false` | Whether the editor is read-only                       |
| `lineNumbers`  | `boolean` | `true`  | Show line numbers                                     |
| `lineWrapping` | `boolean` | `false` | Wrap long lines                                       |
| `placeholder`  | `string`  | `null`  | Placeholder text when empty                           |
| `tabSize`      | `number`  | `4`     | Tab size in spaces                                    |
| `height`       | `string`  | `null`  | Editor height as CSS value (e.g. `"400px"`, `"20lh"`) |

## Supported Languages

`angular`, `cpp`, `css`, `go`, `html`, `java`, `javascript`, `jinja`, `json`, `less`, `liquid`, `logfile`, `markdown`, `php`, `python`, `rust`, `sass`, `sql`, `typescript`, `vue`, `wast`, `xml`, `yaml`

## Events

| Event    | Detail             | Description                   |
| -------- | ------------------ | ----------------------------- |
| `change` | `{ code: string }` | Fired on every content change |
