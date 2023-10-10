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

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.codeEditor;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;

public class CodeEditorHeader extends SubComponent<HTMLDivElement, CodeEditorHeader>
        implements ComponentReference<CodeEditor> {

    // ------------------------------------------------------ factory methods

    public static CodeEditorHeader codeEditorHeader() {
        return new CodeEditorHeader();
    }

    // ------------------------------------------------------ instance

    CodeEditorActions actions;
    CodeEditorLinks links;

    CodeEditorHeader() {
        super(div().css(component(codeEditor, header)).element());
    }

    @Override
    public void passComponent(CodeEditor codeEditor) {
        if (actions != null) {
            actions.passComponent(codeEditor);
        }
        if (links != null) {
            links.passComponent(codeEditor);
        }
    }

    @Override
    public CodeEditorHeader that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public CodeEditorHeader addActions(CodeEditorActions actions) {
        return add(actions);
    }

    // override to assure internal wiring
    public CodeEditorHeader add(CodeEditorActions actions) {
        this.actions = actions;
        add(actions.element());
        return this;
    }

    public CodeEditorHeader addMain(CodeEditorHeaderMain main) {
        return add(main);
    }

    public CodeEditorHeader addLinks(CodeEditorLinks links) {
        return add(links);
    }

    // override to assure internal wiring
    public CodeEditorHeader add(CodeEditorLinks links) {
        this.links = links;
        add(links.element());
        return this;
    }

    public CodeEditorHeader addTab(CodeEditorTab tab) {
        return add(tab);
    }
}
