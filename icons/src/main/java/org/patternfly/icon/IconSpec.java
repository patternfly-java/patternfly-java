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
package org.patternfly.icon;

public final class IconSpec {

    /** name of icon set */
    public final String set;

    /** unique icon name */
    public final String id;

    /** SVG view box x offset */
    public final int xOffset;

    /** SVG view box y offset */
    public final int yOffset;

    /** Icon width in pixels */
    public final int width;

    /** Icon height in pixels */
    public final int height;

    /** SVG path attribute value */
    public final String path;

    /** copyright holder and SPDX short license identifier */
    public final String license;

    IconSpec(String set, String id, int xOffset, int yOffset, int width, int height, String path, String license) {
        this.set = set;
        this.id = id;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.width = width;
        this.height = height;
        this.path = path;
        this.license = license;
    }
}
