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
 * Provides a title component for styled heading elements.
 *
 * <p>The title component renders heading elements ({@code h1} through {@code h6}) with PatternFly styling.
 * Each heading level has a default size, but custom sizes can be applied independently of the heading level,
 * allowing visual flexibility while maintaining semantic HTML structure.
 *
 * <h2>Usage</h2>
 *
 * <p>Create titles with default sizes based on heading level:
 *
 * {@snippet :
 * import static org.patternfly.component.title.Title.title;
 *
 * Title h1 = title(1, "Main heading");
 * Title h2 = title(2, "Sub heading");
 * Title h3 = title(3, "Section heading");
 * }
 *
 * <p>Create titles with custom sizes independent of the heading level:
 *
 * {@snippet :
 * import static org.patternfly.component.title.Title.title;
 * import static org.patternfly.style.Size._4xl;
 * import static org.patternfly.style.Size.lg;
 * import static org.patternfly.style.Size.md;
 *
 * Title large = title(1, _4xl, "Extra large title");
 * Title medium = title(3, lg, "Large-sized h3");
 * Title small = title(6, md, "Medium-sized h6");
 * }
 *
 * @see org.patternfly.component.title.Title
 * @see <a href="https://www.patternfly.org/components/title">PatternFly Title</a>
 */
package org.patternfly.component.title;