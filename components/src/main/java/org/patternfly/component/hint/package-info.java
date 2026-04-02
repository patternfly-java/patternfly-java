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
 * Provides hint components for displaying contextual banners with supplementary information.
 *
 * <p>This package contains the {@link org.patternfly.component.hint.Hint} component and its sub-components
 * for presenting inline messages that provide guidance or suggestions to the user. A hint can include a title,
 * body text, actions, and a footer with links or buttons.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.hint.Hint} - Top-level hint container</li>
 *     <li>{@link org.patternfly.component.hint.HintTitle} - Optional title for the hint</li>
 *     <li>{@link org.patternfly.component.hint.HintBody} - Main content area of the hint</li>
 *     <li>{@link org.patternfly.component.hint.HintActions} - Actions area (e.g., dropdown or buttons)</li>
 *     <li>{@link org.patternfly.component.hint.HintFooter} - Footer area with links or buttons</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>A hint with title, body, actions, and footer:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.hint.Hint.hint;
 * import static org.patternfly.component.hint.HintBody.hintBody;
 * import static org.patternfly.component.hint.HintFooter.hintFooter;
 * import static org.patternfly.component.hint.HintTitle.hintTitle;
 *
 * Hint hint = hint()
 *         .addTitle(hintTitle().text("Do more with Find it Fix it capabilities"))
 *         .addBody(hintBody().text(
 *                 "Upgrade to Red Hat Smart Management to remediate all your systems."))
 *         .addFooter(hintFooter()
 *                 .add(button().link().inline()
 *                         .text("Try it for 90 days")));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/hint">PatternFly Hint</a>
 */
package org.patternfly.component.hint;