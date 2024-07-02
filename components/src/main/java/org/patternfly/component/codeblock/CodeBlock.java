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
package org.patternfly.component.codeblock;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.expandable.ExpandableSection;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.Arrays.copyOfRange;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.pre;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.wrapHtmlContainer;
import static org.patternfly.component.codeblock.CodeBlockActions.codeBlockActions;
import static org.patternfly.component.codeblock.CodeBlockHeader.codeBlockHeader;
import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
import static org.patternfly.style.Classes.codeBlock;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.pre;

/**
 * A code block is a component that contains 2 or more lines of read-only code. The code in a code block can be copied to the
 * clipboard.
 *
 * @see <a href= "https://www.patternfly.org/components/code-block">https://www.patternfly.org/components/code-block</a>
 */
public class CodeBlock extends BaseComponent<HTMLDivElement, CodeBlock> implements Attachable {

    // ------------------------------------------------------ factory

    public static CodeBlock codeBlock() {
        return new CodeBlock(null);
    }

    public static CodeBlock codeBlock(String code) {
        return new CodeBlock(code);
    }

    // ------------------------------------------------------ instance

    public static final int DEFAULT_TRUNCATE = 3;

    private final HTMLElement preElement;
    private final HTMLElement codeElement;
    private String code;
    private int truncate;
    private CodeBlockHeader header;
    private ExpandableSection esCode;
    private ExpandableSection esTrigger;

    CodeBlock(String code) {
        super(ComponentType.CodeBlock, div().css(component(codeBlock)).element());

        add(div().css(component(codeBlock, content))
                .add(preElement = pre().css(component(codeBlock, pre))
                        .add(codeElement = Elements.code().css(component(codeBlock, Classes.code))
                                .element())
                        .element()));

        if (code != null) {
            codeElement.textContent = code;
        }

        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (mustSplitCode()) {
            splitCode();
        }
    }

    // ------------------------------------------------------ add

    public CodeBlock addHeader(CodeBlockHeader header) {
        return add(header);
    }

    // override to ensure internal wiring
    public CodeBlock add(CodeBlockHeader header) {
        this.header = header;
        insertFirst(element(), header.element());
        return this;
    }

    public CodeBlock addAction(CodeBlockAction action) {
        if (header == null) {
            addHeader(codeBlockHeader());
        }
        if (header.actions == null) {
            header.addActions(codeBlockActions());
        }
        header.actions.addAction(action);
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #truncate(int) truncate(3)} */
    public CodeBlock truncate() {
        return truncate(DEFAULT_TRUNCATE);
    }

    public CodeBlock truncate(int truncate) {
        this.truncate = truncate;
        return this;
    }

    public CodeBlock code(String code) {
        this.code = code;
        if (element().isConnected) { // already attached?
            if (mustSplitCode()) {
                splitCode();
            } else {
                unsplitCode();
                codeElement.textContent = code;
            }
        } else {
            codeElement.textContent = code;
        }
        return this;
    }

    @Override
    public CodeBlock that() {
        return this;
    }

    // ------------------------------------------------------ api

    public String code() {
        return code;
    }

    // ------------------------------------------------------ internal

    private String[] lines() {
        return code != null && !code.trim().isEmpty() ? code.split("\n") : new String[0];
    }

    private boolean mustSplitCode() {
        return truncate > 0 && truncate < lines().length;
    }

    private void splitCode() {
        String visibleCode = String.join("\n", copyOfRange(lines(), 0, truncate));
        String moreCode = String.join("\n", copyOfRange(lines(), truncate, lines().length));

        if (esCode == null && esTrigger == null) {
            String codeId = Id.unique(componentType().id, "es-code");
            String triggerId = Id.unique(componentType().id, "es-trigger");
            esCode = expandableSection(codeId)
                    .detachedFrom(triggerId)
                    .addContent(expandableSectionContent().textContent(moreCode));
            esTrigger = expandableSection(triggerId)
                    .detachedFrom(codeId)
                    .addToggle(expandableSectionToggle("Show more", "Show less"));

            removeChildrenFrom(codeElement);
            wrapHtmlContainer(codeElement)
                    .add(visibleCode)
                    .add(esCode);
            insertAfter(esTrigger.element(), preElement);

        } else if (esCode != null) {
            codeElement.textContent = visibleCode;
            esCode.content().textContent(moreCode);
        }
    }

    private void unsplitCode() {
        failSafeRemoveFromParent(esCode);
        failSafeRemoveFromParent(esTrigger);
        esCode = null;
        esTrigger = null;
    }
}
