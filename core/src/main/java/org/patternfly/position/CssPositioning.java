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
package org.patternfly.position;

import org.patternfly.style.Variable;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.DomGlobal.window;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.cssPositioning;
import static org.patternfly.style.Classes.popover;
import static org.patternfly.style.Classes.toolbar;
import static org.patternfly.style.Variable.componentVar;

/**
 * Reads and caches the CSS custom properties that control whether tooltip and popover components use native CSS positioning
 * ({@code position-try-fallbacks}) or JavaScript-based positioning ({@code NativeAnchor.bestPlacement()}).
 * <p>
 * To enable CSS positioning, set the corresponding custom property on {@code :root}:
 * <pre>
 * :root {
 *     --pf-v6-c-tooltip--css-positioning: 1;
 *     --pf-v6-c-popover--css-positioning: 1;
 * }
 * </pre>
 */
public class CssPositioning {

    private static Boolean tooltipEnabled;
    private static Boolean popoverEnabled;

    public static boolean tooltipEnabled() {
        if (tooltipEnabled == null) {
            tooltipEnabled = readProperty(componentVar(component(toolbar), cssPositioning));
        }
        return tooltipEnabled;
    }

    public static boolean popoverEnabled() {
        if (popoverEnabled == null) {
            popoverEnabled = readProperty(componentVar(component(popover), cssPositioning));
        }
        return popoverEnabled;
    }

    private static boolean readProperty(Variable property) {
        String value = window.getComputedStyle(document.documentElement).getPropertyValue(property.name).trim();
        return "1".equals(value) || "true".equals(value);
    }
}
