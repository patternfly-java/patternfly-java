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
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.PredefinedIcon.help;

public class CodeEditorLink extends SubComponent<HTMLElement, CodeEditorLink> implements
        ComponentReference<CodeEditor> {

    // ------------------------------------------------------ factory

    /**
     * Adds a link. The button should have the modifiers {@link Button#link()}.
     */
    public static CodeEditorLink codeEditorLink(Button button) {
        return new CodeEditorLink(button);
    }

    public static CodeEditorLink codeEditorViewShortcutsLink() {
        return new CodeEditorLink(button().link().addIconAndText(help, "View shortcuts"))
                .ariaLabel("View shortcuts");
    }

    // ------------------------------------------------------ instance

    private final HTMLElement buttonElement;
    private ComponentHandler<CodeEditorLink> handler;
    private CodeEditor codeEditor;

    CodeEditorLink(Button button) {
        super(button.element());
        buttonElement = element();
    }

    @Override
    public void passComponent(CodeEditor codeEditor) {
        this.codeEditor = codeEditor;
        if (handler != null && buttonElement != null) {
            buttonElement.addEventListener(click.name, e -> handler.handle(e, this));
        }
    }

    @Override
    public CodeEditor mainComponent() {
        return codeEditor;
    }

    // ------------------------------------------------------ builder

    public CodeEditorLink ariaLabel(String label) {
        if (buttonElement != null) {
            buttonElement.setAttribute(Aria.label, label);
        }
        return this;
    }

    @Override
    public CodeEditorLink that() {
        return this;
    }

    // ------------------------------------------------------ events

    public CodeEditorLink onClick(ComponentHandler<CodeEditorLink> handler) {
        this.handler = handler;
        return this;
    }
}
