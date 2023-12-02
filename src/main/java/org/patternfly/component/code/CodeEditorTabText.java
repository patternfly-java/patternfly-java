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

import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.layout.Classes.codeEditor;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.tab;

public class CodeEditorTabText extends BaseSubComponent<HTMLElement, CodeEditorTabText> {

    // ------------------------------------------------------ factory

    public static CodeEditorTabText codeEditorTabText() {
        return new CodeEditorTabText(null);
    }

    public static CodeEditorTabText codeEditorTabText(String text) {
        return new CodeEditorTabText(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "cett";

    CodeEditorTabText(String text) {
        super(span().css(component(codeEditor, tab, Classes.text)).element(), ComponentType.CodeEditor, SUB_COMPONENT_NAME);
        if (text != null) {
            textContent(text);
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorTabText that() {
        return this;
    }
}
