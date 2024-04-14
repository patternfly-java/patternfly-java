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
package org.patternfly.showcase.component;

import org.jboss.elemento.router.Route;
import org.patternfly.extension.codeeditor.CodeEditor;
import org.patternfly.extension.codeeditor.CodeEditorAction;
import org.patternfly.extension.codeeditor.CodeEditorActions;
import org.patternfly.extension.codeeditor.CodeEditorHeader;
import org.patternfly.extension.codeeditor.CodeEditorHeaderMain;
import org.patternfly.extension.codeeditor.CodeEditorLink;
import org.patternfly.extension.codeeditor.CodeEditorLinks;
import org.patternfly.extension.codeeditor.CodeEditorTab;
import org.patternfly.extension.codeeditor.CodeEditorTabIcon;
import org.patternfly.extension.codeeditor.CodeEditorTabText;
import org.patternfly.showcase.Code;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.extension.codeeditor.CodeEditor.codeEditor;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorAction;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorCopyToClipboardAction;
import static org.patternfly.extension.codeeditor.CodeEditorActions.codeEditorActions;
import static org.patternfly.extension.codeeditor.CodeEditorHeader.codeEditorHeader;
import static org.patternfly.extension.codeeditor.CodeEditorHeaderMain.codeEditorHeaderMain;
import static org.patternfly.extension.codeeditor.CodeEditorLink.codeEditorViewShortcutsLink;
import static org.patternfly.extension.codeeditor.CodeEditorLinks.codeEditorLinks;
import static org.patternfly.extension.codeeditor.CodeEditorTab.codeEditorTab;
import static org.patternfly.icon.IconSets.fas.code;
import static org.patternfly.icon.IconSets.fas.download;
import static org.patternfly.icon.IconSets.fas.upload;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/code-editor", title = "Code editor")
public class CodeEditorComponent extends SnippetPage {

    private static final String CODE = "expandableSection()\n" +
            "      .indented()\n" +
            "      .addToggle(expandableSectionToggle(\"Show more\", \"Show less\"))\n" +
            "      .addContent(expandableSectionContent()\n" +
            "              .textContent(\"This content is visible only when the component is expanded.\"))";

    public CodeEditorComponent() {
        super(components.get("code-editor"));

        startExamples();
        addSnippet(new Snippet("code-editor-basic", "Basic",
                Code.code("code-editor-basic"), () ->
                // @code-start:code-editor-basic
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(upload())))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .code(CODE))
                        .element()
                // @code-end:code-editor-basic
        ));

        addSnippet(new Snippet("code-editor-readonly", "Readonly",
                Code.code("code-editor-readonly"), () ->
                // @code-start:code-editor-readonly
                div()
                        .add(codeEditor()
                                .readonly()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(button().icon(upload()).control().disabled())))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .code(CODE))
                        .element()
                // @code-end:code-editor-readonly
        ));

        addSnippet(new Snippet("code-editor-no-actions", "Without actions",
                Code.code("code-editor-no-actions"), () ->
                // @code-start:code-editor-no-actions
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addTab(codeEditorTab(code(), "Java")))
                                .code(CODE))
                        .element()
                // @code-end:code-editor-no-actions
        ));

        addSnippet(new Snippet("code-editor-no-tab", "Without tab",
                Code.code("code-editor-no-tab"), () ->
                // @code-start:code-editor-no-tab
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(button().icon(upload()).control().disabled()))))
                                .code(CODE))
                        .element()
                // @code-end:code-editor-no-tab
        ));

        addSnippet(new Snippet("code-editor-no-actions-no-tab", "Without actions and tab",
                Code.code("code-editor-no-actions-no-tab"), () ->
                // @code-start:code-editor-no-actions-no-tab
                div()
                        .add(codeEditor()
                                .code(CODE))
                        .element()
                // @code-end:code-editor-no-actions-no-tab
        ));

        addSnippet(new Snippet("code-editor-header-content", "With optional header content and keyboard shortcuts",
                Code.code("code-editor-header-content"), () ->
                // @code-start:code-editor-header-content
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(upload())))
                                        .addMain(codeEditorHeaderMain()
                                                .textContent("Header main content"))
                                        .addLinks(codeEditorLinks()
                                                .addLink(codeEditorViewShortcutsLink()))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .code(CODE))
                        .element()
                // @code-end:code-editor-header-content
        ));

        startApiDocs(CodeEditor.class);
        addApiDoc(CodeEditor.class, component);
        addApiDoc(CodeEditorAction.class, subcomponent);
        addApiDoc(CodeEditorActions.class, subcomponent);
        addApiDoc(CodeEditorHeader.class, subcomponent);
        addApiDoc(CodeEditorHeaderMain.class, subcomponent);
        addApiDoc(CodeEditorLink.class, subcomponent);
        addApiDoc(CodeEditorLinks.class, subcomponent);
        addApiDoc(CodeEditorTab.class, subcomponent);
        addApiDoc(CodeEditorTabIcon.class, subcomponent);
        addApiDoc(CodeEditorTabText.class, subcomponent);
    }
}
