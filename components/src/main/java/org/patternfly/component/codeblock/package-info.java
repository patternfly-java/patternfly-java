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
/**
 * Provides the PatternFly code block component for displaying blocks of formatted code with optional actions.
 * <p>
 * A code block contains a read-only block of code that can be copied to the clipboard. It can include actions such as a
 * copy-to-clipboard button or custom action buttons. The code block also supports a truncated/expandable view for long code
 * snippets.
 *
 * <h2>Usage</h2>
 *
 * A basic code block with copy-to-clipboard and a custom action:
 *
 * {@snippet :
 * import static org.patternfly.component.codeblock.CodeBlock.codeBlock;
 * import static org.patternfly.component.codeblock.CodeBlockAction.codeBlockAction;
 * import static org.patternfly.component.codeblock.CodeBlockAction.codeBlockCopyToClipboardAction;
 *
 * codeBlock()
 *         .addAction(codeBlockCopyToClipboardAction())
 *         .addAction(codeBlockAction(play())
 *                 .ariaLabel("Play")
 *                 .onClick((action, codeBlock) -> console.log("Play")))
 *         .code("apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository");
 * }
 *
 * A truncated (expandable) code block:
 *
 * {@snippet :
 * import static org.patternfly.component.codeblock.CodeBlock.codeBlock;
 * import static org.patternfly.component.codeblock.CodeBlockAction.codeBlockCopyToClipboardAction;
 *
 * codeBlock()
 *         .addAction(codeBlockCopyToClipboardAction())
 *         .truncate()
 *         .code("long code content...");
 * }
 *
 * @see CodeBlock
 * @see CodeBlockAction
 * @see CodeBlockActions
 * @see CodeBlockHeader
 * @see <a href="https://www.patternfly.org/components/code-block">PatternFly Code block</a>
 */
package org.patternfly.component.codeblock;