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

import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;

public class CodeEditorHeader extends CodeEditorSubComponent<HTMLDivElement, CodeEditorHeader> {

    // ------------------------------------------------------ factory

    public static CodeEditorHeader codeEditorHeader() {
        return new CodeEditorHeader();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ceh";

    CodeEditorHeader() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.codeEditor, header)).element());
    }

    // ------------------------------------------------------ add

    public CodeEditorHeader addActions(CodeEditorActions actions) {
        return add(actions);
    }

    public CodeEditorHeader addMain(CodeEditorHeaderMain main) {
        return add(main);
    }

    public CodeEditorHeader addLinks(CodeEditorLinks links) {
        return add(links);
    }

    public CodeEditorHeader addTab(CodeEditorTab tab) {
        return add(tab);
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorHeader that() {
        return this;
    }
}
