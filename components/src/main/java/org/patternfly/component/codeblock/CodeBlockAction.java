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

import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.WithIcon;
import org.patternfly.component.button.Button;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;

import static elemental2.dom.DomGlobal.navigator;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.icon.IconSets.fas.copy;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;

public class CodeBlockAction extends CodeBlockSubComponent<HTMLDivElement, CodeBlockAction> implements
        WithIcon<HTMLDivElement, CodeBlockAction> {

    // ------------------------------------------------------ factory

    public static CodeBlockAction codeBlockAction(PredefinedIcon icon) {
        return new CodeBlockAction(icon.element());
    }

    public static CodeBlockAction codeBlockAction(Element icon) {
        return new CodeBlockAction(icon);
    }

    public static CodeBlockAction codeBlockCopyToClipboardAction() {
        return codeBlockCopyToClipboardAction("Copy to clipboard", "Successfully copied to clipboard!");
    }

    public static CodeBlockAction codeBlockCopyToClipboardAction(String copyText, String copiedText) {
        String copyId = Id.unique(ComponentType.CodeBlock.id, "copy");
        Tooltip copyTooltip = tooltip(By.id(copyId), copyText)
                .onClose((e, t) -> t.text(copyText)) // restore text
                .appendToBody();
        return new CodeBlockAction(copy().element())
                .id(copyId)
                .ariaLabel(copyText)
                .onClick((event, codeBlock) -> {
                    copyTooltip.text(copiedText);
                    navigator.clipboard.writeText(codeBlock.code());
                });
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "cba";

    private final Button button;
    private ComponentHandler<CodeBlockAction> handler;
    private CodeBlock codeBlock;

    CodeBlockAction(Element icon) {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.codeBlock, actions, item)).element());
        add(button = button().plain().icon(icon));
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeBlockAction icon(Element icon) {
        button.icon(icon);
        return this;
    }

    @Override
    public CodeBlockAction removeIcon() {
        button.removeIcon();
        return this;
    }

    @Override
    public CodeBlockAction that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public CodeBlockAction ariaLabel(String label) {
        button.aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ events

    public CodeBlockAction onClick(ComponentHandler<CodeBlock> handler) {
        button.on(click, e -> handler.handle(e, lookupComponent()));
        return this;
    }
}
