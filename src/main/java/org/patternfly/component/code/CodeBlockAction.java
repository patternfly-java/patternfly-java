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

import org.patternfly.component.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.codeBlock;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.item;

public class CodeBlockAction extends SubComponent<HTMLDivElement, CodeBlockAction> {

    // ------------------------------------------------------ factory methods

    public static CodeBlockAction codeBlockAction() {
        return new CodeBlockAction();
    }

    // ------------------------------------------------------ instance

    CodeBlockAction() {
        super(div().css(component(codeBlock, actions, item)).element());
    }

    @Override
    public CodeBlockAction that() {
        return this;
    }
}
