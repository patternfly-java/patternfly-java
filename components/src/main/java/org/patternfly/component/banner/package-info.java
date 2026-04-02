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
 * Provides the PatternFly banner component for displaying prominent messages across the top of a page.
 *
 * <p>A banner is a 1-line, full color, full width container that can be used to communicate short snippets of
 * information to users. Banners can be styled with different colors and can optionally convey status using
 * severity indicators.
 *
 * <h2>Usage</h2>
 *
 * <p>Basic banners with different colors:
 *
 * {@snippet :
 * Banner defaultBanner = banner("Default banner");
 * Banner redBanner = banner("Red banner", red);
 * Banner blueBanner = banner("Blue banner", blue);
 * }
 *
 * <p>Banner with links and status:
 *
 * {@snippet :
 * Banner linked = banner(blue)
 *     .text("Blue banner with an ")
 *     .add(button("inline link button").link().inline());
 * Banner statusBanner = banner()
 *     .status(success.status)
 *     .screenReader("Success banner");
 * }
 *
 * @see org.patternfly.component.banner.Banner
 * @see <a href="https://www.patternfly.org/components/banner">PatternFly Banner</a>
 */
package org.patternfly.component.banner;