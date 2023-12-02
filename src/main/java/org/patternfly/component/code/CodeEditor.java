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
package org.patternfly.component.code;

import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Modifiers.Readonly2;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.pre;
import static org.patternfly.layout.Classes.codeEditor;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;

/**
 * A code editor is a versatile text editor that allows for editing various languages.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/code-editor/html">https://www.patternfly.org/components/code-editor/html</a>
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

    private final HTMLElement preElement;

    CodeEditor(String code) {
        super(ComponentType.CodeEditor, div().css(component(codeEditor)).element());

        add(div().css(component(codeEditor, main))
                .add(Elements.code().css(component(codeEditor, Classes.code))
                        .attr("dir", "ltr")
                        .add(preElement = pre().css(component(codeEditor, Classes.code, Classes.pre))
                                .element())
                        .element()));

        if (code != null) {
            preElement.textContent = code;
        }
        storeComponent();
    }

    // ------------------------------------------------------ add

    public CodeEditor addHeader(CodeEditorHeader header) {
        return add(header);
    }

    // override to assure internal wiring
    public CodeEditor add(CodeEditorHeader header) {
        insertFirst(element(), header.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public CodeEditor code(String code) {
        preElement.textContent = code;
        return this;
    }

    @Override
    public CodeEditor that() {
        return this;
    }

    // ------------------------------------------------------ api

    public String code() {
        return preElement.textContent;
    }
}
