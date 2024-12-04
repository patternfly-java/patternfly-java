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
package org.patternfly.showcase.layout;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.router.Route;
import org.patternfly.component.card.Card;
import org.patternfly.layout.gallery.Gallery;
import org.patternfly.showcase.OverviewPage;
import org.patternfly.style.Size;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.SpaceItems.none;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
import static org.patternfly.showcase.Data.layouts;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.modifier;

@Route(value = "/layouts/about-layouts", title = "Layouts")
public class LayoutsPage extends OverviewPage<Layout> {

    public LayoutsPage() {
        super("Layouts");
    }

    @Override
    protected void landingPages(HTMLContainerBuilder<HTMLDivElement> div) {
        div.add(flex().spaceItems(breakpoints(default_, none))
                .alignItems(breakpoints(default_, center))
                .add(title(1, Size._3xl, "About")).css("ws-heading ws-title ws-h1"));
        div.add(p().css("ws-p").text(
                "PatternFly’s layouts are used to place components on a page. They create a fully responsive structure to keep components organized and aligned across screen sizes."));
        div.add(p().css("ws-p").text(
                "Think of layouts as the scaffolding within which your components will live. When laying out your page, consider the layout pattern that suits your content. Multiple layouts can be used within the same page to create versatile and effective UIs."));
    }

    protected Gallery createGallery() {
        return gallery().gutter().addItems(layouts(), layout -> galleryItem()
                .add(a(layout.route).css("ws-section-gallery-item")
                        .add(createCard(layout))));
    }

    protected Card createCard(Layout layout) {
        return card().css(modifier("selectable-raised"))
                .addTitle(cardTitle(layout.title))
                .addBody(cardBody()
                        .add(textContent()
                                .add(p().html(layout.summary()))));
    }
}
