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

import org.jboss.elemento.ElementTextMethods;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.codeEditor;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.tab;

public class CodeEditorTabText extends CodeEditorSubComponent<HTMLElement, CodeEditorTabText>
        implements ElementTextMethods<HTMLElement, CodeEditorTabText> {

    // ------------------------------------------------------ factory

    public static CodeEditorTabText codeEditorTabText() {
        return new CodeEditorTabText();
    }

    public static CodeEditorTabText codeEditorTabText(String text) {
        return new CodeEditorTabText().text(text);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "cett";

    CodeEditorTabText() {
        super(SUB_COMPONENT_NAME, span().css(component(codeEditor, tab, Classes.text)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorTabText that() {
        return this;
    }
}
