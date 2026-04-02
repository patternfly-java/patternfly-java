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
 * Provides the PatternFly skip to content component.
 * <p>
 * A skip to content component allows screen reader and keyboard users to bypass navigation rather than tabbing through it.
 * It is typically added as the first element inside a {@link org.patternfly.component.page.Page} component and links to the
 * main content area.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.page.Page.page;
 * import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
 *
 * page().addSkipToContent(skipToContent("main-content-id"));
 * }
 *
 * With custom text:
 *
 * {@snippet :
 * import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
 *
 * SkipToContent stc = skipToContent("main-content-id", "Jump to main content");
 * }
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/skip-to-content">https://www.patternfly.org/components/skip-to-content</a>
 */
package org.patternfly.component.skiptocontent;