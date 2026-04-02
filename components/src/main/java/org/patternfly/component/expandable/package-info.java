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
 * Provides the PatternFly expandable section component and its subcomponents for toggling the visibility of content.
 * <p>
 * An expandable section is used to hide and show content using a toggle. It supports dynamic toggle text, disclosure and
 * indented variations, detached layout, truncation of long content, and custom toggle content with icons or badges.
 *
 * <h2>Usage</h2>
 *
 * A basic expandable section with dynamic toggle text:
 *
 * {@snippet :
 * import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
 * import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
 * import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
 *
 * expandableSection()
 *         .addToggle(expandableSectionToggle("Show more", "Show less"))
 *         .addContent(expandableSectionContent()
 *                 .text("This content is visible only when the component is expanded."));
 * }
 *
 * An expandable section with truncation for long content:
 *
 * {@snippet :
 * import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
 * import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
 * import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
 *
 * expandableSection()
 *         .truncate(2)
 *         .addContent(expandableSectionContent()
 *                 .text("Long content that will be truncated to 2 lines..."))
 *         .addToggle(expandableSectionToggle("Show more", "Show less"));
 * }
 *
 * @see ExpandableSection
 * @see ExpandableSectionContent
 * @see ExpandableSectionToggle
 * @see <a href="https://www.patternfly.org/components/expandable-section">PatternFly Expandable section</a>
 */
package org.patternfly.component.expandable;