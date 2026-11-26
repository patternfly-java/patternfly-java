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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Modifiers.Readonly2;
import elemental2.dom.CSSStyleProperties;
import elemental2.dom.HTMLElement;
import jsinterop.base.Any;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.EventType.change;
import static org.patternfly.style.Classes.codeEditor;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;

/**
 * A code editor is a versatile text editor that allows for editing various languages. Backed by
 * <a href="https://codemirror.net/">CodeMirror 6</a> via the
 * {@code @patternfly-java/codeeditor} NPM package.
 *
 * <h2>Syntax highlighting</h2>
 * <p>
 * The syntax colors are ported from the PatternFly React code editor and use the PatternFly palette tokens (shade 50 in light
 * mode, shade 30 in dark mode). Each color can be overridden with a CSS custom property
 * {@code --pfj-code-editor--<name>--color}:
 *
 * <table>
 *     <caption>Syntax color custom properties</caption>
 *     <thead>
 *         <tr><th>Name</th><th>Applies to</th><th>Default</th></tr>
 *     </thead>
 *     <tbody>
 *         <tr><td>{@code keyword}</td><td>keywords, booleans, {@code null}, {@code this}, primitive types</td><td>purple</td></tr>
 *         <tr><td>{@code string}</td><td>strings, characters</td><td>green</td></tr>
 *         <tr><td>{@code comment}</td><td>comments (rendered in italics)</td><td>gray</td></tr>
 *         <tr><td>{@code number}</td><td>numbers, literals, constants, escapes, URLs</td><td>orange</td></tr>
 *         <tr><td>{@code variable}</td><td>variables, function names</td><td>blue</td></tr>
 *         <tr><td>{@code builtin}</td><td>predefined variables, labels, anchors</td><td>teal</td></tr>
 *         <tr><td>{@code type}</td><td>type and class names</td><td>yellow</td></tr>
 *         <tr><td>{@code tag}</td><td>HTML/XML tag names</td><td>red</td></tr>
 *         <tr><td>{@code attribute}</td><td>HTML/XML attribute names</td><td>red</td></tr>
 *         <tr><td>{@code attribute-value}</td><td>HTML/XML attribute values</td><td>blue</td></tr>
 *         <tr><td>{@code property}</td><td>JSON keys, CSS properties, object members</td><td>red</td></tr>
 *         <tr><td>{@code key}</td><td>YAML keys, object literal keys</td><td>orange</td></tr>
 *         <tr><td>{@code regexp}</td><td>regular expressions</td><td>red</td></tr>
 *         <tr><td>{@code meta}</td><td>annotations, decorators</td><td>purple</td></tr>
 *         <tr><td>{@code delimiter}</td><td>angle brackets, processing instructions, doctype</td><td>gray</td></tr>
 *         <tr><td>{@code heading}</td><td>Markdown headings (rendered bold)</td><td>purple</td></tr>
 *         <tr><td>{@code inserted}</td><td>inserted lines (diffs)</td><td>green</td></tr>
 *         <tr><td>{@code deleted}</td><td>deleted lines (diffs)</td><td>red</td></tr>
 *         <tr><td>{@code changed}</td><td>changed lines (diffs)</td><td>orange</td></tr>
 *         <tr><td>{@code invalid}</td><td>invalid syntax</td><td>red</td></tr>
 *     </tbody>
 * </table>
 * <p>
 * Example:
 * <pre>{@code
 * pfj-code-editor {
 *     --pfj-code-editor--keyword--color: var(--pf-t--color--blue--50);
 *     --pfj-code-editor--comment--color: light-dark(#6a737d, #8b949e);
 * }
 * }</pre>
 *
 * @see <a href="https://www.patternfly.org/components/code-editor">https://www.patternfly.org/components/code-editor</a>
 */
public class CodeEditor extends BaseComponent<HTMLElement, CodeEditor>
        implements Readonly2<HTMLElement, CodeEditor> {

    // ------------------------------------------------------ factory

    public static CodeEditor codeEditor() {
        return new CodeEditor(null);
    }

    public static CodeEditor codeEditor(String code) {
        return new CodeEditor(code);
    }

    // ------------------------------------------------------ instance

    private final CodeEditorElement editorElement;

    CodeEditor(String code) {
        super(ComponentType.CodeEditor, div().css(component(codeEditor)).element());

        editorElement = Js.uncheckedCast(
                createHtmlElement("pfj-code-editor", CodeEditorElement.class));
        add(div().css(component(codeEditor, main))
                .add(editorElement));

        if (code != null) {
            editorElement.code = code;
        }
        storeComponent();
    }

    // ------------------------------------------------------ add

    public CodeEditor addHeader(CodeEditorHeader header) {
        return add(header);
    }

    // override to ensure internal wiring
    public CodeEditor add(CodeEditorHeader header) {
        insertFirst(element(), header.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public CodeEditor code(String code) {
        editorElement.code = code;
        return this;
    }

    public CodeEditor language(Language language) {
        editorElement.language = language.value();
        return this;
    }

    @Override
    public CodeEditor readonly(boolean readonly) {
        Readonly2.super.readonly(readonly);
        editorElement.readOnly = readonly;
        return this;
    }

    public CodeEditor lineNumbers(boolean lineNumbers) {
        editorElement.lineNumbers = lineNumbers;
        return this;
    }

    public CodeEditor lineWrapping(boolean lineWrapping) {
        editorElement.lineWrapping = lineWrapping;
        return this;
    }

    public CodeEditor placeholder(String placeholder) {
        editorElement.placeholder = placeholder;
        return this;
    }

    public CodeEditor tabSize(int tabSize) {
        editorElement.tabSize = tabSize;
        return this;
    }

    public CodeEditor height(String height) {
        editorElement.height = height;
        return this;
    }

    public CodeEditor fontSize(String fontSize) {
        editorElement.style.fontSize = CSSStyleProperties.FontSizeUnionType.of(fontSize);
        return this;
    }

    @Override
    public CodeEditor that() {
        return this;
    }

    // ------------------------------------------------------ events

    public CodeEditor onChange(ChangeHandler handler) {
        editorElement.addEventListener(change.name, e -> {
            Any detail = Js.asPropertyMap(e).getAsAny("detail");
            if (detail != null) {
                Any value = detail.asPropertyMap().getAsAny("code");
                if (value != null) {
                    handler.onChange(this, value.asString());
                }
            }
        });
        return this;
    }

    // ------------------------------------------------------ api

    public String code() {
        return editorElement.code;
    }
}
