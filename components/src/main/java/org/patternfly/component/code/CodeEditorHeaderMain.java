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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.codeEditor;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.main;

public class CodeEditorHeaderMain extends CodeEditorSubComponent<HTMLDivElement, CodeEditorHeaderMain> {

    // ------------------------------------------------------ factory

    public static CodeEditorHeaderMain codeEditorHeaderMain() {
        return new CodeEditorHeaderMain();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "cehm";

    CodeEditorHeaderMain() {
        super(SUB_COMPONENT_NAME, div().css(component(codeEditor, header, main)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorHeaderMain that() {
        return this;
    }
}
