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
package org.patternfly.layout.gallery;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.LayoutType;
import org.patternfly.layout.SubLayout;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.gallery;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;

public class GalleryItem extends SubLayout<HTMLElement, GalleryItem> {

    // ------------------------------------------------------ factory

    public static GalleryItem galleryItem() {
        return new GalleryItem(div());
    }

    public static <E extends HTMLElement> GalleryItem galleryItem(HTMLContainerBuilder<E> builder) {
        return new GalleryItem(builder);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_LAYOUT_NAME = "gyi";

    <E extends HTMLElement> GalleryItem(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Gallery, SUB_LAYOUT_NAME, builder.css(layout(gallery, item)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public GalleryItem that() {
        return this;
    }
}
