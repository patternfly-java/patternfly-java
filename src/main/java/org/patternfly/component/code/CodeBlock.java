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

import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Button;
import org.patternfly.component.ComponentType;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.pre;
import static org.patternfly.component.code.CodeBlockHeader.codeBlockHeader;
import static org.patternfly.layout.Classes.codeBlock;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.pre;

/**
 * A code block is a component that contains 2 or more lines of read-only code. The code in a code block can be copied to the
 * clipboard.
 *
 * @see <a href= "https://www.patternfly.org/components/code-block">https://www.patternfly.org/components/code-block</a>
 */
public class CodeBlock extends BaseComponent<HTMLDivElement, CodeBlock> {

    // ------------------------------------------------------ factory methods

    public static CodeBlock codeBlock() {
        return new CodeBlock(null);
    }

    public static CodeBlock codeBlock(String code) {
        return new CodeBlock(code);
    }

    // ------------------------------------------------------ instance

    private CodeBlockHeader header;
    private final HTMLElement codeElement;

    CodeBlock(String code) {
        super(div().css(component(codeBlock)).element(), ComponentType.CodeBlock);

        add(div().css(component(codeBlock, content))
                .add(pre().css(component(codeBlock, pre))
                        .add(codeElement = Elements.code().css(component(codeBlock, Classes.code))
                                .element())));

        if (code != null) {
            codeElement.textContent = code;
        }
    }

    @Override
    public CodeBlock that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public CodeBlock addHeader(CodeBlockHeader header) {
        return add(header);
    }

    // override to assure internal wiring
    public CodeBlock add(CodeBlockHeader header) {
        this.header = header;
        add(header.element());
        return this;
    }

    public CodeBlock addAction(Button action) {
        if (header == null) {
            addHeader(codeBlockHeader());
        }
        header.addAction(action);
        return this;
    }

    // ------------------------------------------------------ public API

    public CodeBlock code(String code) {
        codeElement.textContent = code;
        return this;
    }

    public String code() {
        return codeElement.textContent;
    }
}
