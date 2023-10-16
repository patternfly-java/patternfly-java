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

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.keyboard;
import static org.patternfly.layout.Classes.shortcuts;

public class CodeEditorLinks extends SubComponent<HTMLDivElement, CodeEditorLinks>
        implements ComponentReference<CodeEditor> {

    // ------------------------------------------------------ factory

    public static CodeEditorLinks codeEditorLinks() {
        return new CodeEditorLinks();
    }

    // ------------------------------------------------------ instance

    private final List<CodeEditorLink> links;
    private CodeEditor codeEditor;

    CodeEditorLinks() {
        super(div().css(component(Classes.codeEditor, keyboard, shortcuts)).element());
        this.links = new ArrayList<>();
    }

    @Override
    public void passComponent(CodeEditor codeEditor) {
        this.codeEditor = codeEditor;
        for (CodeEditorLink link : links) {
            link.passComponent(codeEditor);
        }
    }

    @Override
    public CodeEditor mainComponent() {
        return codeEditor;
    }

    // ------------------------------------------------------ add

    public CodeEditorLinks addLink(CodeEditorLink link) {
        return add(link);
    }

    // override to assure internal wiring
    public CodeEditorLinks add(CodeEditorLink link) {
        links.add(link);
        add(link.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorLinks that() {
        return this;
    }
}
