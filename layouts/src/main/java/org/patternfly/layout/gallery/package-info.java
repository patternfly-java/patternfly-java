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
 * Provides the PatternFly gallery layout for arranging content in a responsive grid with uniform rows and columns that wrap
 * automatically.
 * <p>
 * The gallery layout is useful for displaying a collection of similarly structured items, such as cards or tiles, in a
 * responsive grid. It supports gutters for spacing between items and allows adjusting minimum and maximum widths at different
 * breakpoints.
 *
 * <h2>Usage</h2>
 *
 * A basic gallery with gutters:
 *
 * {@snippet :
 * import static org.patternfly.layout.gallery.Gallery.gallery;
 * import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
 *
 * gallery().gutter()
 *         .addItem(galleryItem().text("Gallery item"))
 *         .addItem(galleryItem().text("Gallery item"))
 *         .addItem(galleryItem().text("Gallery item"))
 *         .addItem(galleryItem().text("Gallery item"));
 * }
 *
 * A gallery with responsive minimum widths:
 *
 * {@snippet :
 * import static org.patternfly.core.Tuple.tuple;
 * import static org.patternfly.layout.gallery.Gallery.gallery;
 * import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
 * import static org.patternfly.style.Breakpoint.lg;
 * import static org.patternfly.style.Breakpoint.md;
 * import static org.patternfly.style.Breakpoint.xl;
 *
 * gallery().gutter()
 *         .minWidths(tuple(md, "100px"), tuple(lg, "150px"), tuple(xl, "200px"))
 *         .addItem(galleryItem().text("Gallery item"))
 *         .addItem(galleryItem().text("Gallery item"))
 *         .addItem(galleryItem().text("Gallery item"));
 * }
 *
 * @see Gallery
 * @see GalleryItem
 * @see <a href="https://www.patternfly.org/layouts/gallery">PatternFly Gallery</a>
 */
package org.patternfly.layout.gallery;