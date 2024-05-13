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
package org.patternfly.showcase;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.patternfly.component.card.Card;
import org.patternfly.layout.gallery.Gallery;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainGroup.pageMainGroup;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Brightness.light100;
import static org.patternfly.style.Classes.hidden;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.sticky;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size._4xl;

public abstract class OverviewPage<T> implements Page {

    private final String title;

    protected OverviewPage(String title) {
        this.title = title;
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return singletonList(pageMainGroup()
                .add(pageMainSection().limitWidth().background(light)
                        .add(pageMainBody()
                                .add(textContent()
                                        .add(flex().alignItems(breakpoints(default_, center))
                                                .add(title(1, _4xl, title))))))
                .add(pageMainSection().fill().background(light100)
                        .add(div().css(util("display-flext"), "ws-mdx-child-template")
                                .add(div().css("ws-mdx-content")
                                        .add(div().css("landing-pages")
                                                .run(this::landingPages)
                                                .add(div().css("ws-section-gallery ws-section-gallery-full-width")
                                                        // TODO Implement sticky toolbar once implemented
                                                        .add(toolbar().css(modifier(sticky))
                                                                .addContent(toolbarContent()
                                                                        .addItem(toolbarItem()
                                                                                .add("Toolbar not yet implemented")))
                                                                .addContent(toolbarContent().css(modifier(hidden))))
                                                        .add(createGallery()))))))
                .element());
    }

    protected void landingPages(HTMLContainerBuilder<HTMLDivElement> div) {
        // noop
    }

    protected abstract Gallery createGallery();

    protected abstract Card createCard(T data);
}
