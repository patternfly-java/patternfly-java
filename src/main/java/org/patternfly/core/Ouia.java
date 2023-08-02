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
package org.patternfly.core;

import elemental2.dom.HTMLElement;
import elemental2.webstorage.Storage;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.window;

/**
 * Support for OUIA tests.
 *
 * @see <a href=
 *      "https://forum.patternfly.org/t/open-web-ui-design-specification-for-enabling-automation-ouia/154">https://forum.patternfly.org/t/open-web-ui-design-specification-for-enabling-automation-ouia/154</a>
 */
public final class Ouia {

    public static void component(HTMLElement element, String component) {
        component(element, component, null);
    }

    public static void component(HTMLElement element, String component, String id) {
        if (isSupported()) {
            element.dataset.set("ouiaComponentType", component);
            if (id != null) {
                element.dataset.set("ouiaComponentId", id);
            }
        }
    }

    public static void id(HTMLElement element, String id) {
        if (isSupported()) {
            element.dataset.set("ouiaComponentId", id);
        }
    }

    private static boolean isSupported() {
        Storage localStorage = WebStorageWindow.of(window).localStorage;
        if (localStorage != null) {
            return Boolean.parseBoolean(localStorage.getItem("ouia"));
        }
        return false;
    }

    private Ouia() {
    }
}
