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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.codeEditor;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.controls;

public class CodeEditorActions extends SubComponent<HTMLDivElement, CodeEditorActions> implements
        ComponentReference<CodeEditor> {

    // ------------------------------------------------------ factory methods

    public static CodeEditorActions codeEditorActions() {
        return new CodeEditorActions();
    }

    // ------------------------------------------------------ instance

    private final List<CodeEditorAction> actions;

    CodeEditorActions() {
        super(div().css(component(codeEditor, controls)).element());
        this.actions = new ArrayList<>();
    }

    @Override
    public void passComponent(CodeEditor codeEditor) {
        for (CodeEditorAction action : actions) {
            action.passComponent(codeEditor);
        }
    }

    @Override
    public CodeEditorActions that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public CodeEditorActions addAction(CodeEditorAction action) {
        return add(action);
    }

    // override to assure internal wiring
    public CodeEditorActions add(CodeEditorAction action) {
        actions.add(action);
        add(action.element());
        return this;
    }
}
