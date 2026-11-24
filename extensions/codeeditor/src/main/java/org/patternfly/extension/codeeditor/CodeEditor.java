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
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Readonly2;

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
                    handler.onChange(value.asString(), this);
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
