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
package org.patternfly.showcase;

import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.component.content.Content;
import org.patternfly.extension.codeeditor.CodeEditor;
import org.patternfly.icon.IconSets;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h3;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.extension.codeeditor.CodeEditor.codeEditor;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorAction;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorCopyToClipboardAction;
import static org.patternfly.extension.codeeditor.CodeEditorActions.codeEditorActions;
import static org.patternfly.extension.codeeditor.CodeEditorHeader.codeEditorHeader;
import static org.patternfly.icon.IconSets.fas.link;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.SpaceItems.sm;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;

public class Snippet implements IsElement<HTMLElement> {

    final String id;
    final String title;
    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement root;
    private final HTMLElement preview;

    public Snippet(String id, String title, String code, Supplier<HTMLElement> demo) {
        this(id, title, (Content) null, code, demo);
    }

    public Snippet(String id, String title, String description, String code, Supplier<HTMLElement> demo) {
        this(id, title, description == null ? null : content(p).editorial().text(description), code, demo);
    }

    public Snippet(String id, String title, Content description, String code,
            Supplier<HTMLElement> demo) {
        this.id = id;
        this.title = title;
        this.demoSupplier = demo;

        CodeEditor codeEditor;
        String codeId = Id.build(id, "code");
        String undoId = Id.build(id, "undo");

        root = stack().gutter()
                .addItem(stackItem()
                        .add(flex().spaceItems(sm).alignItems(center)
                                .add(content(h3).editorial().css("ws-heading")
                                        .id(id)
                                        .add(a("#" + id).css("ws-heading-anchor")
                                                .aria(hidden, true)
                                                .attr(tabindex, -1)
                                                .add(link()
                                                        .css("ws-heading-anchor-icon")
                                                        .style("vertical-align", "middle")))
                                        .add(title)))
                        .run(stackItem -> {
                            if (description != null) {
                                stackItem.add(content(p).css("ws-p")).add(description);
                            }
                        }))
                .add(preview = stackItem()
                        .add(demo.get())
                        .element())
                .addItem(stackItem()
                        .add(codeEditor = codeEditor().css("ws-code-editor")
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorAction(button()
                                                        .id(codeId)
                                                        .css("ws-code-editor-control")
                                                        .plain()
                                                        .iconAndText(IconSets.fas.code(), "Java"))
                                                        .onClick((event, ce) -> {
                                                            HTMLElement mainElement = ce
                                                                    .querySelector(
                                                                            By.classname(component(Classes.codeEditor, main)));
                                                            setVisible(mainElement, !isVisible(mainElement));
                                                        }))
                                                .add(tooltip(By.id(codeId), "Toggle Java code"))
                                                .addAction(
                                                        codeEditorCopyToClipboardAction("Copy code to clipboard", "Code copied")
                                                                .css("ws-code-editor-control"))
                                                .addAction(codeEditorAction(IconSets.fas.undo())
                                                        .id(undoId)
                                                        .css("ws-code-editor-control")
                                                        .onClick((event, codeEditorAction) -> undo()))
                                                .add(tooltip(By.id(undoId), "Undo"))))
                                .code(code)))
                .element();

        HTMLElement mainElement = codeEditor.querySelector(By.classname(component(Classes.codeEditor, main)));
        setVisible(mainElement, false);
    }

    private void undo() {
        removeChildrenFrom(preview);
        preview.appendChild(demoSupplier.get());
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    public Snippet style(String style) {
        wrapHtmlElement(preview).style(style);
        return this;
    }
}
