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
package org.patternfly.showcase.component;

import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Route;
import org.patternfly.component.card.Card;
import org.patternfly.layout.gallery.Gallery;
import org.patternfly.showcase.OverviewPage;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.img;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/all-components", title = "All components")
public class ComponentsPage extends OverviewPage<Component> implements Page {

    public ComponentsPage() {
        super("All components");
    }

    protected Gallery createGallery() {
        return gallery().gutter().addItems(components(), component -> galleryItem()
                .add(a(component.route).css("ws-section-gallery-item")
                        .add(createCard(component))));
    }

    protected Card createCard(Component component) {
        return card()
                .addTitle(cardTitle(component.title))
                .addBody(cardBody()
                        .add(img(component.illustration())
                                .attr("alt", component.title)));
    }
}
