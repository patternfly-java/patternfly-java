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
 * Provides the PatternFly code editor extension for displaying and editing code.
 *
 * <p>A code editor is a versatile text editor that supports displaying code with an optional header containing
 * actions, tabs, and links. The editor can operate in read-only mode and supports custom actions such as
 * copy-to-clipboard.
 *
 * <p><strong>Key classes:</strong>
 * <ul>
 *     <li>{@link org.patternfly.extension.codeeditor.CodeEditor} - the main code editor component</li>
 *     <li>{@link org.patternfly.extension.codeeditor.CodeEditorHeader} - header area for actions and tabs</li>
 *     <li>{@link org.patternfly.extension.codeeditor.CodeEditorAction} - custom action button in the header</li>
 *     <li>{@link org.patternfly.extension.codeeditor.CodeEditorTab} - tab in the header area</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * CodeEditor editor = codeEditor("System.out.println(\"Hello world\");")
 *     .addHeader(codeEditorHeader()
 *         .addAction(codeEditorCopyToClipboardAction()));
 * }
 *
 * @see org.patternfly.extension.codeeditor.CodeEditor
 * @see <a href="https://www.patternfly.org/extensions/code-editor">PatternFly Code Editor</a>
 */
package org.patternfly.extension.codeeditor;
