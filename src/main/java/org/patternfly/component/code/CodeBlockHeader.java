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

import org.patternfly.component.Button;
import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.code.CodeBlockActions.codeBlockActions;
import static org.patternfly.layout.Classes.codeBlock;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;

public class CodeBlockHeader extends SubComponent<HTMLDivElement, CodeBlockHeader> {

    // ------------------------------------------------------ factory methods

    public static CodeBlockHeader codeBlockHeader() {
        return new CodeBlockHeader();
    }

    // ------------------------------------------------------ instance

    private CodeBlockActions actions;

    CodeBlockHeader() {
        super(div().css(component(codeBlock, header)).element());
    }

    @Override
    public CodeBlockHeader that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public CodeBlockHeader addActions(CodeBlockActions actions) {
        return add(actions);
    }

    // override to assure internal wiring
    public CodeBlockHeader add(CodeBlockActions actions) {
        this.actions = actions;
        add(actions.element());
        return this;
    }

    public CodeBlockHeader addAction(Button action) {
        if (actions == null) {
            add(codeBlockActions());
        }
        actions.addAction(action);
        return this;
    }
}
