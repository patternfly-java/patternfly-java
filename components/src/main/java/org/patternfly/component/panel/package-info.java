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
 * Provides the PatternFly panel component and its subcomponents.
 * <p>
 * A panel is a container that supports flexible content layouts. Panels can include a header, a main content area, and a
 * footer, with optional dividers between sections. Panels support raised, bordered, and scrollable variants.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.panel.Panel.panel;
 *
 * Panel panel = panel()
 *         .addHeader("Header content")
 *         .addDivider()
 *         .addMain("Main content")
 *         .addFooter("Footer content");
 * }
 *
 * A raised panel:
 *
 * {@snippet :
 * import static org.patternfly.component.panel.Panel.panel;
 *
 * Panel panel = panel()
 *         .raised()
 *         .addMain("Main content");
 * }
 *
 * @see <a href="https://www.patternfly.org/components/panel">https://www.patternfly.org/components/panel</a>
 */
package org.patternfly.component.panel;