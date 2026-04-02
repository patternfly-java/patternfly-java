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
 * Provides jump links components for navigating within a page using anchor-based scroll navigation.
 *
 * <p>This package contains the {@link org.patternfly.component.jumplinks.JumpLinks} component and its sub-components
 * for creating a table-of-contents style navigation that links to sections on the same page. Jump links can be
 * displayed horizontally or vertically, with optional labels, centered alignment, and expandable subsections.
 * They support scroll spying to automatically highlight the active section.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.jumplinks.JumpLinks} - Top-level container for jump link items</li>
 *     <li>{@link org.patternfly.component.jumplinks.JumpLinksItem} - Individual navigation link to a page section</li>
 *     <li>{@link org.patternfly.component.jumplinks.JumpLinksList} - Nested list for subsection navigation</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Vertical jump links with a label and nested subsections:
 *
 * {@snippet :
 * import static org.patternfly.component.jumplinks.JumpLinks.jumpLinks;
 * import static org.patternfly.component.jumplinks.JumpLinksItem.jumpLinksItem;
 * import static org.patternfly.component.jumplinks.JumpLinksList.jumpLinksList;
 * import static org.patternfly.style.Breakpoint.default_;
 * import static org.patternfly.style.Breakpoints.breakpoints;
 * import static org.patternfly.style.ExpandableModifier.expandable;
 *
 * // Simple vertical jump links
 * JumpLinks simpleLinks = jumpLinks("Jump to section").vertical()
 *         .addItem(jumpLinksItem("section-1", "Introduction"))
 *         .addItem(jumpLinksItem("section-2", "Getting Started"))
 *         .addItem(jumpLinksItem("section-3", "Advanced Topics"));
 *
 * // Expandable vertical jump links with subsections
 * JumpLinks expandableLinks = jumpLinks("Jump to section").vertical()
 *         .expandable(breakpoints(default_, expandable))
 *         .addItem(jumpLinksItem("section-1", "Overview"))
 *         .addItem(jumpLinksItem("section-2", "Configuration")
 *                 .addList(jumpLinksList()
 *                         .addItem(jumpLinksItem("section-2a", "Basic Setup"))
 *                         .addItem(jumpLinksItem("section-2b", "Advanced Options"))))
 *         .addItem(jumpLinksItem("section-3", "API Reference"));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/jump-links">PatternFly Jump Links</a>
 */
package org.patternfly.component.jumplinks;