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
import org.patternfly.component.codeblock.CodeBlock;
import org.patternfly.component.codeblock.CodeBlockAction;
import org.patternfly.component.codeblock.CodeBlockActions;
import org.patternfly.component.codeblock.CodeBlockHeader;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.codeblock.CodeBlock.codeBlock;
import static org.patternfly.component.codeblock.CodeBlockAction.codeBlockAction;
import static org.patternfly.component.codeblock.CodeBlockAction.codeBlockCopyToClipboardAction;
import static org.patternfly.icon.IconSets.fas.play;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/code-block", title = "Code block")
public class CodeBlockComponent extends SnippetPage {

    private static final String CODE = "apiVersion: helm.openshift.io/v1beta1/\n" +
            "kind: HelmChartRepository\n" +
            "metadata:\n" +
            "name: azure-sample-repo0oooo00ooo\n" +
            "spec:\n" +
            "connectionConfig:\n" +
            "url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs";

    public CodeBlockComponent() {
        super(components.get("code-block"));

        startExamples();
        addSnippet(new Snippet("code-block-basic", "Basic",
                code("code-block-basic"), () ->
                // @code-start:code-block-basic
                div()
                        .add(codeBlock()
                                .addAction(codeBlockCopyToClipboardAction())
                                .addAction(codeBlockAction(play())
                                        .ariaLabel("Play")
                                        .onClick((action, codeBlock) -> console.log(
                                                "Play not yet implemented")))
                                .code(CODE))
                        .element()
                // @code-end:code-block-basic
        ));

        addSnippet(new Snippet("code-block-expandable", "Expandable",
                code("code-block-expandable"), () ->
                // @code-start:code-block-expandable
                div()
                        .add(codeBlock()
                                .addAction(codeBlockCopyToClipboardAction())
                                .addAction(codeBlockAction(play())
                                        .ariaLabel("Play")
                                        .onClick((action, codeBlock) -> console.log("Play not yet implemented")))
                                .truncate()
                                .code(CODE))
                        .element()
                // @code-end:code-block-expandable
        ));

        startApiDocs(CodeBlock.class);
        addApiDoc(CodeBlock.class, component);
        addApiDoc(CodeBlockAction.class, subcomponent);
        addApiDoc(CodeBlockActions.class, subcomponent);
        addApiDoc(CodeBlockHeader.class, subcomponent);
    }
}
