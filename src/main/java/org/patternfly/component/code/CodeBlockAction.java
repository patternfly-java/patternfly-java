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
import org.patternfly.core.Aria;
import org.patternfly.handler.ActionHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.js.ExtendedDomGlobal.navigator;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.PredefinedIcon.copy;

public class CodeBlockAction extends SubComponent<HTMLDivElement, CodeBlockAction> implements
        ComponentReference<CodeBlock> {

    // ------------------------------------------------------ factory methods

    public static CodeBlockAction codeBlockAction() {
        return new CodeBlockAction(null);
    }

    public static CodeBlockAction codeBlockAction(PredefinedIcon icon) {
        return new CodeBlockAction(icon.className);
    }

    public static CodeBlockAction codeBlockAction(String iconClass) {
        return new CodeBlockAction(iconClass);
    }

    public static CodeBlockAction codeBlockCopyToClipboardAction() {
        return new CodeBlockAction(copy.className)
                .ariaLabel("Copy to clipboard")
                .onAction((event, codeBlock) -> navigator.clipboard.writeText(codeBlock.code()));
    }

    // ------------------------------------------------------ instance

    private HTMLElement buttonElement;
    private ActionHandler<CodeBlock> actionHandler;

    CodeBlockAction(String iconClass) {
        super(div().css(component(Classes.codeBlock, actions, item)).element());
        if (iconClass != null) {
            add(buttonElement = button().plain().addIcon(iconClass).element());
        }
    }

    @Override
    public void passComponent(CodeBlock codeBlock) {
        if (actionHandler != null && buttonElement != null) {
            buttonElement.addEventListener(click.name, e -> actionHandler.onAction(e, codeBlock));
        }
    }

    @Override
    public CodeBlockAction that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public CodeBlockAction ariaLabel(String label) {
        if (buttonElement != null) {
            buttonElement.setAttribute(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public CodeBlockAction onAction(ActionHandler<CodeBlock> actionHandler) {
        this.actionHandler = actionHandler;
        return this;
    }
}
