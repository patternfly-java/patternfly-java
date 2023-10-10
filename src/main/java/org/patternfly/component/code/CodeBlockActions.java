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
import static org.patternfly.layout.Classes.codeBlock;
import static org.patternfly.layout.Classes.component;

public class CodeBlockActions extends SubComponent<HTMLDivElement, CodeBlockActions> implements
        ComponentReference<CodeBlock> {

    // ------------------------------------------------------ factory methods

    public static CodeBlockActions codeBlockActions() {
        return new CodeBlockActions();
    }

    // ------------------------------------------------------ instance

    private final List<CodeBlockAction> actions;

    CodeBlockActions() {
        super(div().css(component(codeBlock, Classes.actions)).element());
        this.actions = new ArrayList<>();
    }

    @Override
    public void passComponent(CodeBlock codeBlock) {
        for (CodeBlockAction action : actions) {
            action.passComponent(codeBlock);
        }
    }

    @Override
    public CodeBlockActions that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public CodeBlockActions addAction(CodeBlockAction action) {
        return add(action);
    }

    // override to assure internal wiring
    public CodeBlockActions add(CodeBlockAction action) {
        actions.add(action);
        add(action.element());
        return this;
    }
}
