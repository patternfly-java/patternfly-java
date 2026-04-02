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
package org.patternfly.overlay;

import static elemental2.dom.DomGlobal.CSS;

/**
 * Detects whether the browser supports CSS anchor positioning features, which enable native CSS-based overlay placement instead
 * of JavaScript-based positioning.
 * <p>
 * Two levels of support are detected:
 * <ul>
 *     <li>{@link #anchorNameSupported()} — basic CSS anchor positioning ({@code anchor-name})</li>
 *     <li>{@link #containerTypeAnchoredSupported()} — anchored container queries ({@code container-type: anchored}),
 *         required by tooltip and popover for arrow positioning</li>
 * </ul>
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning">CSS anchor positioning</a>
 */
public class CssPositioning {

    private static Boolean supported;
    private static Boolean anchoredContainerSupported;

    /** Returns {@code true} if the browser supports CSS anchor positioning. */
    public static boolean anchorNameSupported() {
        if (supported == null) {
            supported = CSS.supports("anchor-name: --test");
        }
        return supported;
    }

    /**
     * Returns {@code true} if the browser supports CSS anchor positioning and anchored container queries
     * ({@code container-type: anchored}).
     */
    public static boolean containerTypeAnchoredSupported() {
        if (anchoredContainerSupported == null) {
            anchoredContainerSupported = anchorNameSupported() && CSS.supports("container-type: anchored");
        }
        return anchoredContainerSupported;
    }
}
