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
package org.patternfly.showcase.extension;

import org.jboss.elemento.router.Route;
import org.patternfly.component.card.Card;
import org.patternfly.layout.gallery.Gallery;
import org.patternfly.layout.stack.Stack;
import org.patternfly.showcase.OverviewPage;

import static org.jboss.elemento.Elements.a;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.SpaceItems.none;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
import static org.patternfly.showcase.Data.extensions;

@Route(value = "/extensions/about-extensions", title = "Extensions")
public class ExtensionsPage extends OverviewPage<Extension> {

    public ExtensionsPage() {
        super("Extensions");
    }

    @Override
    protected void landingPages(Stack stack) {
        stack.add(flex().spaceItems(none)
                .alignItems(center)
                .add(content(h1)
                        .editorial()
                        .css("ws-heading ws-title ws-h1")
                        .text("About")));
        stack.add(content(p)
                .editorial()
                .css("ws-p")
                .text("Extensions are holistic solutions that utilize multiple PatternFly components, typically addressing cross-project use cases. They provide reusable code that can drive consistency throughout a user’s journey across products and platforms. We welcome ideas and contributions for new extensions from the PatternFly community and will prioritize those that can be widely used by multiple projects."));
    }

    protected Gallery createGallery() {
        return gallery().gutter().addItems(extensions(), extension -> galleryItem()
                .add(a(extension.route).css("ws-section-gallery-item")
                        .add(createCard(extension))));
    }

    protected Card createCard(Extension extension) {
        return card()
                .addTitle(cardTitle(extension.title))
                .addBody(cardBody()
                        .add(content()
                                .editorial()
                                .add(content(p).html(extension.summary()))));
    }
}
