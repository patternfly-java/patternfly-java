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
 * Provides the PatternFly content component for rendering styled text elements such as headings, paragraphs, and lists.
 * <p>
 * The content component is used to wrap text content with PatternFly styling. It can act as a wrapper around standard HTML
 * elements or render specific content types like headings (h1-h6) and paragraphs. When used as a wrapper, nested HTML elements
 * automatically receive PatternFly typography styles.
 *
 * <h2>Usage</h2>
 *
 * Content used as a wrapper for headings:
 *
 * {@snippet :
 * import static org.patternfly.component.content.Content.content;
 * import static org.patternfly.component.content.ContentType.h1;
 * import static org.patternfly.component.content.ContentType.h2;
 * import static org.patternfly.component.content.ContentType.h3;
 *
 * content()
 *         .add(content(h1).text("Hello World"))
 *         .add(content(h2).text("Second Level"))
 *         .add(content(h3).text("Third Level"));
 * }
 *
 * Content as a wrapper for standard HTML elements:
 *
 * {@snippet :
 * import static org.jboss.elemento.Elements.p;
 * import static org.patternfly.component.content.Content.content;
 * import static org.patternfly.component.content.ContentType.p;
 *
 * content()
 *         .add(content(p).text("Content component renders with PatternFly styles."))
 *         .add(p().text("HTML elements within a wrapping Content are styled as well!"));
 * }
 *
 * @see Content
 * @see ContentType
 * @see <a href="https://www.patternfly.org/components/content">PatternFly Content</a>
 */
package org.patternfly.component.content;