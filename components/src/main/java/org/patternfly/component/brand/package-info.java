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
 * Provides the PatternFly brand component for displaying product logos and branding images.
 *
 * <p>A brand is used to place a product logotype on a screen. The brand component supports simple image-based
 * logos as well as responsive logos with multiple sources for different viewport sizes.
 *
 * <h2>Usage</h2>
 *
 * <p>Basic brand with a logo image:
 *
 * {@snippet :
 * Brand logo = brand("/img/logo.svg", "Product logo");
 * }
 *
 * <p>Responsive brand with different sources for different screen sizes:
 *
 * {@snippet :
 * Brand responsive = brand()
 *     .widths(breakpoints(default_, "40px", sm, "60px", md, "220px"))
 *     .addSource("/img/full-logo.svg", "(min-width: 768px)")
 *     .addSource("/img/icon-logo.svg", "(min-width: 576px)")
 *     .addImg(img("/img/full-logo.svg")
 *         .apply(i -> i.alt = "Fallback logo"));
 * }
 *
 * @see org.patternfly.component.brand.Brand
 * @see <a href="https://www.patternfly.org/components/brand">PatternFly Brand</a>
 */
package org.patternfly.component.brand;