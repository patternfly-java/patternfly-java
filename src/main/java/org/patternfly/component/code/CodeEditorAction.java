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
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.handler.ActionHandler;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.dom.ExtendedDomGlobal.navigator;
import static org.patternfly.layout.PredefinedIcon.copy;

public class CodeEditorAction extends SubComponent<HTMLElement, CodeEditorAction> implements
        ComponentReference<CodeEditor> {

    // ------------------------------------------------------ factory

    public static CodeEditorAction codeEditorAction(PredefinedIcon icon) {
        return new CodeEditorAction(button(icon).control());
    }

    public static CodeEditorAction codeEditorAction(String iconClass) {
        return new CodeEditorAction(button().addIcon(iconClass).control());
    }

    /**
     * Adds an action. The button should have the modifiers {@link Button#control()}.
     */
    public static CodeEditorAction codeEditorAction(Button button) {
        return new CodeEditorAction(button);
    }

    public static CodeEditorAction codeEditorCopyToClipboardAction() {
        return new CodeEditorAction(button(copy).control())
                .ariaLabel("Copy to clipboard")
                .onAction((event, codeBlock) -> navigator.clipboard.writeText(codeBlock.code()));
    }

    // ------------------------------------------------------ instance

    private final HTMLElement buttonElement;
    private ActionHandler<CodeEditor> actionHandler;

    CodeEditorAction(Button button) {
        super(button.element());
        buttonElement = element();
    }

    @Override
    public void passComponent(CodeEditor codeEditor) {
        if (actionHandler != null && buttonElement != null) {
            buttonElement.addEventListener(click.name, e -> actionHandler.onAction(e, codeEditor));
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public CodeEditorAction that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public CodeEditorAction ariaLabel(String label) {
        if (buttonElement != null) {
            buttonElement.setAttribute(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public CodeEditorAction onAction(ActionHandler<CodeEditor> actionHandler) {
        this.actionHandler = actionHandler;
        return this;
    }
}
