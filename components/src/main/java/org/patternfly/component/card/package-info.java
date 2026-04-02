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
 * Provides the PatternFly card component and its subcomponents for displaying information in a contained, flexible layout.
 * <p>
 * A card is a square or rectangular container that can contain any kind of content. Cards symbolize units of information and
 * allow users to interact with a collection of related information. Cards can be composed with a title, body, footer, header,
 * and actions using the fluent builder API.
 *
 * <h2>Usage</h2>
 *
 * A basic card with title, body, and footer:
 *
 * {@snippet :
 * import static org.patternfly.component.card.Card.card;
 * import static org.patternfly.component.card.CardBody.cardBody;
 * import static org.patternfly.component.card.CardFooter.cardFooter;
 * import static org.patternfly.component.card.CardTitle.cardTitle;
 *
 * card()
 *         .addTitle(cardTitle("Title"))
 *         .addBody(cardBody().text("Body"))
 *         .addFooter(cardFooter().text("Footer"));
 * }
 *
 * An expandable card with header, actions, and expandable content:
 *
 * {@snippet :
 * import static org.patternfly.component.card.Card.card;
 * import static org.patternfly.component.card.CardBody.cardBody;
 * import static org.patternfly.component.card.CardExpandableContent.cardExpandableContent;
 * import static org.patternfly.component.card.CardFooter.cardFooter;
 * import static org.patternfly.component.card.CardHeader.cardHeader;
 * import static org.patternfly.component.card.CardTitle.cardTitle;
 *
 * card().expandable()
 *         .addHeader(cardHeader()
 *                 .addTitle(cardTitle("Title")))
 *         .addExpandableContent(cardExpandableContent()
 *                 .addBody(cardBody().text("Body"))
 *                 .addFooter(cardFooter().text("Footer")));
 * }
 *
 * @see Card
 * @see CardHeader
 * @see CardTitle
 * @see CardBody
 * @see CardFooter
 * @see CardExpandableContent
 * @see <a href="https://www.patternfly.org/components/card">PatternFly Card</a>
 */
package org.patternfly.component.card;