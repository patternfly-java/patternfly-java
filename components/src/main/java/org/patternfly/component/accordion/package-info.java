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
 * Provides the PatternFly accordion component for displaying collapsible content panels.
 *
 * <p>An accordion is used to deliver a large amount of content in a small space through progressive disclosure.
 * The user gets key details about the underlying content and can choose to expand individual sections to get more detail.
 *
 * <h2>Usage</h2>
 *
 * <p>Single expand accordion where only one item can be open at a time:
 *
 * {@snippet :
 * Accordion accordion = accordion().singleExpand()
 *     .addItem(accordionItem("item-1", "First item")
 *         .add(p().text("Content for first item")))
 *     .addItem(accordionItem("item-2", "Second item")
 *         .add(p().text("Content for second item")))
 *     .addItem(accordionItem("item-3", "Third item")
 *         .add(p().text("Content for third item")));
 * }
 *
 * <p>Bordered accordion with multiple body sections:
 *
 * {@snippet :
 * Accordion accordion = accordion().singleExpand().bordered()
 *     .addItem(accordionItem("item-1", "First item")
 *         .addBody(accordionItemBody()
 *             .add(p().text("First body section")))
 *         .addBody(accordionItemBody()
 *             .add(button().text("Call to action").link().inline())));
 * }
 *
 * @see org.patternfly.component.accordion.Accordion
 * @see org.patternfly.component.accordion.AccordionItem
 * @see org.patternfly.component.accordion.AccordionItemBody
 * @see org.patternfly.component.accordion.AccordionType
 * @see <a href="https://www.patternfly.org/components/accordion">PatternFly Accordion</a>
 */
package org.patternfly.component.accordion;